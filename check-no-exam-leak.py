#!/usr/bin/env python3
"""Pre-publish safety check for the BIO 262 student site.

Compares the CONTENT of the instructor exam bank against every page in this folder.
Learning outcomes are expected to appear in both and are ignored; anything else that
matches is a potential leak of live exam material.

Usage:  python3 check-no-exam-leak.py
Exit:   0 = PASS, 1 = FAIL
"""
import os, re, sys

HERE = os.path.dirname(os.path.abspath(__file__))
BANK = os.path.join(os.path.dirname(HERE),
                    "BIO262-INSTRUCTOR-ONLY-DO-NOT-PUBLISH", "bank.js")
MIN_LEN = 40          # ignore short factual phrases that recur by nature
ALLOW_OUTCOMES = True # MLOs are published by design

def strings(text, lo=MIN_LEN):
    out = set()
    for pat in (r'"((?:[^"\\]|\\.){%d,400})"' % lo, r"'((?:[^'\\]|\\.){%d,400})'" % lo):
        for m in re.finditer(pat, text):
            out.add(re.sub(r"\s+", " ", m.group(1)).strip().lower())
    return out

if not os.path.exists(BANK):
    print("PASS  (no instructor bank present to compare against)")
    sys.exit(0)

bank_txt = open(BANK, encoding="utf-8", errors="ignore").read()
bank = strings(bank_txt)

# the bank's "o" field is the module learning outcome — published, so not a leak
outcomes = {re.sub(r"\s+", " ", m.group(1)).strip().lower()
            for m in re.finditer(r'"o"\s*:\s*"([^"]+)"', bank_txt)}
if ALLOW_OUTCOMES:
    bank -= outcomes

# question stems carry the most risk — flag them separately
stems = {re.sub(r"\s+", " ", m.group(1)).strip().lower()
         for m in re.finditer(r'"q"\s*:\s*"([^"]+)"', bank_txt)}

leaks, stem_leaks = {}, {}
for root, dirs, files in os.walk(HERE):
    dirs[:] = [d for d in dirs if d not in (".git", "img")]
    for f in files:
        if not f.lower().endswith((".html", ".js", ".json")):
            continue
        p = os.path.join(root, f)
        try:
            s = strings(open(p, encoding="utf-8", errors="ignore").read())
        except Exception:
            continue
        common = s & bank
        if common:
            rel = os.path.relpath(p, HERE)
            leaks[rel] = common
            sc = common & stems
            if sc:
                stem_leaks[rel] = sc

if stem_leaks:
    print("FAIL  — live exam QUESTION STEMS found in the student site:")
    for p, c in stem_leaks.items():
        print(f"  {p}: {len(c)} stem(s)")
        for x in list(c)[:3]:
            print(f"     - {x[:100]}")
    sys.exit(1)

if leaks:
    total = sum(len(v) for v in leaks.values())
    print(f"REVIEW — {total} shared phrase(s) in {len(leaks)} file(s), but no question stems.")
    print("  These are usually standard textbook definitions reused as answer options.")
    for p, c in list(leaks.items())[:8]:
        print(f"  {p}: {len(c)}")
        for x in list(c)[:2]:
            print(f"     - {x[:100]}")
    print("\nPASS  (no stems leaked — review the phrases above if you want them reworded)")
    sys.exit(0)

print("PASS  — no exam-bank content found in the student site.")
sys.exit(0)
