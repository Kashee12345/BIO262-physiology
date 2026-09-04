# BIO 262 · Human Physiology — Joyce University

A free, interactive human physiology study site. **70 hands-on labs**, a **14-chapter interactive
book**, **693 original practice questions with rationales**, **554 flashcards**, and three learning
games — covering the whole BIO 262 semester. Every page is plain HTML that runs in any browser,
on a phone, tablet or projector. No installs, no accounts.

**Live site:** https://kashee12345.github.io/bio262-physiology/

A study resource for **Joyce University** BIO 262 students, by **Dr. Vidya Garg**.
*(An independent supplement — not an official Joyce University publication.)*

---

## The site

| Page | File | What it is |
|---|---|---|
| Course hub | `index.html` | Front page — study tools, games, exam schedule, all 14 modules with learning outcomes |
| Lab Library | `labs.html` | All 70 interactive benches, grouped by module |
| Interactive Book | `book/index.html` | 14 chapters, simulations embedded in the text, plus the whole book as one printable file |
| Practice Questions | `practice.html` | 693 original questions, 5 options each, every one with a rationale |
| **Study Guides** | `modules/index.html` | **14 module lessons — interactive, self-checking, Download PDF on every page** |
| Exam Review Guides | `study-guides.html` | 14 module guides + 6 exam reviews, print to PDF |
| Flashcards | `flashcards.html` | 554 cards across all 14 modules |
| PhysioQuest | `physioquest.html` | Quest game — 11 zones, 14 module bosses |
| Bestiary | `bestiary.html` | Boss dossiers, movesets and weaknesses |
| The Chase | `chase.html` | Quiz-show chase, one round per exam |
| Final-only modules | `module13.html`, `module14.html` | Digestive and Urinary/Reproductive, weighted heaviest on the final |

Supporting folders: `lab/` (70 labs, `ch01`–`ch14`), `guides/` (20 exam-review pages),
`modules/` (14 taught lessons), `pdf/` (the same 14 lessons as ready-made PDFs),
`book/` (chapters + images), `data/` (module metadata, practice bank, flashcards).

### About the Study Guides

`modules/` holds one lesson page per module: plain-language explanation, an interactive model to
drag or step through, and five self-check questions whose options all carry a rationale. Every page
has a **Download PDF** button — the print stylesheet drops the controls, letters the answer options
and appends an answer key with rationales on its own page. `pdf/` holds those files pre-generated,
5–6 pages each, ready to attach in Canvas.

**These pages are numbered to the Canvas shell, not to the exam blueprint.** See the numbering note
below; `modules/index.html` carries the same warning for students.

## Where the content came from

| File | Source |
|---|---|
| `index.html` | Module titles, published learning outcomes, exam blueprint counts |
| `practice.html` | 693 **original** questions written against the module learning outcomes |
| `study-guide.html` | The official module review guides already handed to students |
| `flashcards.html` | Written from the review guides and the Lecture Outline |
| `module13.html` / `module14.html` | Written to fill the gap where no lecture deck exists |
| `data/practice/m01–m14.js` | The original practice bank, all with rationales |

### About the practice bank

693 questions, five options each, every one with a rationale. Written from scratch against the
published Module Learning Outcomes — **verified to share no question stems with the live exam
bank**. Correct answers are spread evenly across A–E, so there is no letter to guess.

---

## ⚠️ A note on module numbering

Module numbers on this site follow **what the exams actually test**. The Lecture Outline packet
numbers Modules 4–7 differently, and the Canvas shell uses a third arrangement:

| | Module 4 | Module 5 | Module 6 | Module 7 |
|---|---|---|---|---|
| **This site** | Bones & Skeletal | Muscle & Nervous Tissue | Brain, AP & ANS | Special Senses |
| **Canvas shell** | Nervous Tissue | Brain & ANS | Sensations | Muscular & Skeletal |

Modules 1–3 and 8–14 are identical in all three. **If they disagree, study by topic, not by
module number.**

---

## What is deliberately NOT in here

**No live exam questions, options, or answer keys.**

`BIO262 Ex1–Ex5.xlsx` and `BIO262 FE.xlsx` are the instructor-side exam bank — assessment
instruments, not study material. Everything derived from them lives in
`BIO262-INSTRUCTOR-ONLY-DO-NOT-PUBLISH/` and must never be copied into this folder or this repo.

### Before you publish

Run this from inside this folder. It compares the **content** of the exam bank against every
page here, rather than matching on filenames:

```bash
python3 check-no-exam-leak.py
```

It must print `PASS`. If it prints `FAIL`, the exam bank has leaked in — stop and remove it
before pushing.

> The old check (`grep -rn "physioquest\|bank.js\|exam-prep\|instructor.html" .`) does not work:
> there is a legitimate *student* PhysioQuest on this site, so that grep always fires. It also
> only matched filenames, so it would have missed real leaked question text.
