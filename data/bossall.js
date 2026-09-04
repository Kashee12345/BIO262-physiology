/* BIO 262 · Module Bosses
   One themed enemy per module, with a 16x16 pixel-art portrait, reveal-card lore,
   a three-move set, and the physiological "weakness" that defeats it.

   Portrait grid legend:  . transparent   1 shadow   2 body   3 highlight   4 accent   5 eye
   Palettes are per-boss, so the same silhouette family reads differently each time. */
window.BIO262_BOSSES = [
{
 m:14, alt:true, id:"gamete", name:"The Gamete Warden", epithet:"Keeper of the Cycle", icon:"🧬",
 pal:["#1a0d16","#7a2a55","#c2417f","#ff9ecb","#ffe0ef","#ffe066"],
 lore:"Every one of your eggs was made before you were born and has waited ever since. I decide which single follicle ripens each month and which thousand quietly die. Patience is not a virtue here. It is the mechanism.",
 taunt:"You were counting on meiosis finishing. It does not finish without help.",
 moves:[["Arrest in Meiosis","Freezes division mid-step, exactly as an oocyte does for decades."],["LH Surge","One overwhelming spike, and the follicle ruptures whether you are ready or not."],["Luteal Withdrawal","Removes progesterone support and lets everything you built shed away."]],
 weak:"Fertilization. Meiosis II only completes when a sperm arrives — finish the process and the Warden has nothing left to hold.",
 grid:["....................",".......222222.......",".....222.....22.....","....22.........22...","...22..222222...22..","...2.2233333322..2..","..2..2333333332...2.","..2.233334433332..2.","..2.233344443332..2.","..2.233544445332..2.","..2.2334444443332.2.","2.2.2333444443332.2.","2.2.2333344443332.2.","2..2.23333333332..2.","22.2232333333332.2..",".2..22.22223332322..","..2..222...222.232..","..22....2222...2232.","....22.......22..2..","......2222222......."]
},
{
 m:1, id:"entropy", name:"The Entropy Engine", epithet:"Herald of Disorder", icon:"⚗️",
 pal:["#0d1a10","#2f6b34","#4f9c4a","#8fe08a","#d8ffcf","#ffe66d"],
 lore:"Before tissue, before cell, there was only the drift toward chaos. I am the gradient that will not hold, the buffer that will not bind. Every set point you defend, I erode.",
 taunt:"Order is a lie you tell yourselves.",
 moves:[["Acid Cascade","Floods the arena with free hydrogen ions; pH plummets."],
        ["Gradient Collapse","Erases every concentration difference you rely on."],
        ["Covalent Shear","Rips shared electrons apart mid-bond."]],
 weak:"Negative feedback. Detect the change, oppose it, and the Engine stalls.",
 grid:["....................","....................","........2222........","........2332........","........2332........","........2332........","........2332........","........2332........",".......233332.......","......23333332......",".....2335335332.....","....233333333332....","...23333333333332...","...23334444443332...","..2333333333333332..",".233333333333333332.","22222222222222222222","....................","....................","...................."]
},
{
 m:2, id:"membrane", name:"The Membrane Warden", epithet:"Keeper of the Gate", icon:"🧫",
 pal:["#08181c","#175f6b","#2a93a5","#63d6e6","#c9f7ff","#ffcf5c"],
 lore:"Nothing enters without my consent. I decide what is self and what is waste. Starve, and I will still refuse you passage.",
 taunt:"Selectively permeable. Selectively merciful.",
 moves:[["Osmotic Crush","Drags water out of you until your cells shrivel."],
        ["Pump Lockdown","Disables the sodium-potassium pump; gradients decay."],
        ["Vesicle Swarm","Engulfs your attacks by endocytosis."]],
 weak:"ATP. Active transport is the one key it cannot refuse.",
 grid:["....................",".......22222........",".....222222222......","....232.....232.....","...232.44444.232....","..232.4444444.232...","..22.444444444.22...",".22.44444444444.22..",".22.44444444444.22..",".22.44454445444.22..",".22.44444444444.22..",".22.44444444444.22..","..22.444444444.22...","..232.4444444.232...","...232.44444.232....","....232.....232.....",".....222222222......",".......22222........","....................","...................."]
},
{
 m:3, id:"keratin", name:"The Keratin Colossus", epithet:"The Living Barrier", icon:"🧴",
 pal:["#1d1409","#7a5c2e","#b98b45","#e8c07a","#fff0d0","#5ec8ff"],
 lore:"Layer upon layer of the dead, stacked to shield the living. I am flattened, keratinized and beyond pain. Strike me and you strike only corpses.",
 taunt:"You cannot wound what has already died.",
 moves:[["Cornified Wall","Stacks dead cells into an impenetrable shield."],
        ["Melanin Veil","Absorbs all light and radiation aimed at it."],
        ["Sebaceous Flood","Drowns the arena in oil, blinding you."]],
 weak:"UVB and calcitriol. Even the barrier answers to vitamin D.",
 grid:["....................","....................","....................","...44444444444444...","..2333333333333332..","..2333333333333332..","...44444444444444...","..2333353333533332..","..2333333333333332..","...44444444444444...","..2334444444444332..","..2334444444444332..","...44444444444444...","..2334444444444332..","..2334444444444332..","...44444444444444...","..2333333333333332..","..2222222222222222..","....................","...................."]
},
{
 m:4, id:"ossuary", name:"The Ossuary Warden", epithet:"He Who Remembers", icon:"🦴",
 pal:["#181510","#6e6656","#a8a08c","#ded8c6","#fffdf2","#c0392b"],
 lore:"Flesh fails. Bone remembers. Two-thirds mineral, one-third collagen, all patience. I have outlasted every soft thing that ever mocked me.",
 taunt:"Osteoclast and osteoblast dance. I keep the tempo.",
 moves:[["Resorption Wave","Osteoclasts strip calcium from everything nearby."],
        ["Lacunar Prison","Seals you in a pocket of matrix; canaliculi taunt you."],
        ["Ossify","Turns cartilage into bone mid-strike."]],
 weak:"Calcitonin. Tone the calcium down and the Warden crumbles.",
 grid:["....................","....................","....................","....................","....................","....222......222....","...23332....23332...","...23332....23332...","...23333222233332...","....233353353332....","....233333333332....","...23333222233332...","...23332....23332...","...23332....23332...","....222......222....","....................","....................","....................","....................","...................."]
},
{
 m:5, id:"sarcomere", name:"The Sarcomere Tyrant", epithet:"Cross-Bridge Sovereign", icon:"💪",
 pal:["#1a0b0b","#7d2626","#b83a3a","#f07a6a","#ffd9cf","#ffe066"],
 lore:"I am the slide, the pull, the shortening. Actin and myosin obey me without question. Withhold my ATP and I will simply lock, and never let go.",
 taunt:"Rigor is not death. Rigor is devotion.",
 moves:[["Cross-Bridge Lock","Seizes without ATP; nothing detaches."],
        ["Lactic Flood","Drops local pH until your muscles burn and fail."],
        ["Tetanic Surge","Stacks stimuli until contraction never relaxes."]],
 weak:"Acetylcholinesterase. Break the signal and the grip releases.",
 grid:["....................","....................","....................","....................",".......22222........","...4224334334224....","...4334334334334....","..243343343343342...","..243343343343342...",".23433453435433432..",".23433433433433432..",".23433433433433432..","..243444444444342...","..243343444343342...","...4334334334334....","...4224334334224....",".......22222........","....................","....................","...................."]
},
{
 m:6, id:"depolarizer", name:"The Depolarizer", epithet:"Warden of Threshold", icon:"⚡",
 pal:["#061019","#123f6b","#2277c4","#5ec8ff","#d6f2ff","#ffe066"],
 lore:"Minus seventy millivolts of silence. Every thought you have is a favor I grant. Reach threshold and I permit you one spike. Only one.",
 taunt:"Sodium in. Potassium out. And then nothing.",
 moves:[["Threshold Denial","Holds the membrane below -55 mV; nothing fires."],
        ["Hyperpolarize","Drives you to -90 mV, beyond any hope of firing."],
        ["Saltatory Strike","Jumps node to node, arriving before you can react."]],
 weak:"The Na+/K+ pump. Restore the gradient and it loses its grip.",
 grid:["....................",".......2........2...",".......2.......2....","2......2......2.....",".2.....2.....2......","..2...232...2.......",".....23332..........","....2333332.........","...233535332........","...23333333322222222","...23333333222222222","....2333332.........",".....23332..........","..2...232...2.......",".2.....2.....2......","2......2......2.....",".......2.......2....",".......2........2...","....................","...................."]
},
{
 m:7, id:"oracle", name:"The Blind Oracle", epithet:"She Who Interprets", icon:"👁️",
 pal:["#120a1c","#472a72","#7b4bbd","#ba8cff","#eddcff","#7ed85a"],
 lore:"You believe you see. You only interpret. Rods for the dark, cones for the lie of color. Let me take the interpreting away and watch what remains.",
 taunt:"The lens flattens. The world blurs. You call that vision.",
 moves:[["Opsin Blind","Bleaches every photopigment you have."],
        ["Vestibular Spin","Sets your endolymph moving; the floor betrays you."],
        ["Cochlear Scream","Bends every hair cell at once into white noise."]],
 weak:"Accommodation. A lens that can still round up can still find truth.",
 grid:["....................","....................","....................","....................","....................",".....2222222222.....","...22333444333322...","..2333344444333332..",".233334444444333332.",".233344445444443332.",".233344444444443332.",".233333444444333332.","..2333334443333332..","...22333333333322...",".....2222222222.....","....................","....................","....................","....................","...................."]
},
{
 m:8, id:"feedback", name:"The Feedback Tyrant", epithet:"Master of Set Points", icon:"🧪",
 pal:["#1d0a17","#7a2358","#c23d8a","#ff6cb6","#ffd6ec","#ffe066"],
 lore:"Every gland answers to me. Every axis bends. I do not need to touch you — I simply change the number you are trying to defend.",
 taunt:"Raise the set point. Watch them chase it forever.",
 moves:[["Axis Uncouple","Severs the hypothalamic-pituitary loop."],
        ["Receptor Downgrade","Strips receptors until your hormones shout unheard."],
        ["Cortisol Storm","Floods you with stress until metabolism unravels."]],
 weak:"Negative feedback. Close the loop and the Tyrant is regulated.",
 grid:["....................","....................","........2222........","........2332........","........2332........","........2332........","........2332........","........2332........",".......233332.......","......23333332......",".....2333333332.....","....233353353332....","...23333333333332...","...23333333333332...","..2333333333333332..",".233333333333333332.","22222222222222222222","....................","....................","...................."]
},
{
 m:9, id:"clot", name:"The Clot Sovereign", epithet:"Weaver of Fibrin", icon:"🩸",
 pal:["#1a0708","#7a1e22","#c0392b","#e8635a","#ffd0cb","#f0c840"],
 lore:"Vascular spasm. Platelet plug. Coagulation. Three steps, and I have sealed you inside your own vessels. Factor X convenes at my invitation.",
 taunt:"Fibrinogen becomes fibrin. You become still.",
 moves:[["Vascular Spasm","Clamps every vessel shut in an instant."],
        ["Platelet Swarm","Von Willebrand factor drags platelets onto you."],
        ["Fibrin Mesh","Weaves an inescapable net from your own plasma."]],
 weak:"Plasmin. Fibrinolysis undoes everything the Sovereign builds.",
 grid:["....................","....................","....................","........222.........","........232.........","........232.........",".......23332........","......2333332.......","......2333332.......",".....233343332......","....23333333332.....","....23333333332.....","....23353335332.....","....23333333332.....","....23333333332.....",".....233333332......","......2333332.......",".......22222........","....................","...................."]
},
{
 m:10, id:"arrhythmia", name:"The Arrhythmia King", epithet:"Usurper of the Node", icon:"🫀",
 pal:["#1a0609","#8b1b2b","#d6304a","#ff7085","#ffd2d8","#ffe066"],
 lore:"Your sinoatrial node believes it rules. It sets a rhythm; I set a different one. Systole, diastole — I decide which comes next, and whether it comes at all.",
 taunt:"Your SA node is a suggestion. I am the verdict.",
 moves:[["Conduction Block","Severs the AV node; atria and ventricles part ways."],
        ["Fibrillate","Replaces every organized P wave with chaos."],
        ["Preload Drain","Empties the ventricle before it can eject."]],
 weak:"Sinus rhythm. Restore the SA node's authority and the King falls.",
 grid:["....................","....................","....................",".........22.........",".......223322.......","......23333332......",".....2333333332.....","....233333333332....","....233533335332....","...23333333333332...","...23333333333332...","...23344444444332...","..2333444444443332..","...23343333334332...","...23333333333332...","...23333322333332...","....22222..22222....","....................","....................","...................."]
},
{
 m:11, id:"antigen", name:"The Antigen Phantom", epithet:"The Unrecognized", icon:"🛡️",
 pal:["#0d1417","#2c5f52","#3f9c7a","#7ed8b0","#d9fff0","#ff6cb6"],
 lore:"Your innate defenses are fast and blind. Your adaptive defenses are precise and slow. I live in the gap between them, wearing a face your memory cells have never filed.",
 taunt:"You have no memory of me. You never will.",
 moves:[["Antigenic Shift","Changes surface markers mid-battle."],
        ["Helper T Ambush","Destroys the cells that coordinate your response."],
        ["Complement Evasion","Slips the membrane attack complex entirely."]],
 weak:"Memory cells. Survive it once and it can never surprise you again.",
 grid:["....................","....................","...22..........22...","..2332........2332..","..23332......23332..","...23332....23332...","....23332..23332....",".....2333223332.....","......23333332......","......23333332......",".......253352.......",".......233332.......",".......233332.......","........2332........","........2332........","........2332........","........2332........","........2332........","........2222........","...................."]
},
{
 m:12, id:"suffocant", name:"The Suffocant", epithet:"Collector of Breath", icon:"🫁",
 pal:["#071417","#175f63","#2a9aa5","#6fd8de","#d6fbff","#ffe066"],
 lore:"Every breath is borrowed. I keep the ledger. Surfactant thins, compliance falls, the gradient narrows — and one day the debt is called in all at once.",
 taunt:"Partial pressure falls. Perfusion ends. Nothing personal.",
 moves:[["Surfactant Strip","Removes surfactant; alveoli collapse on themselves."],
        ["Membrane Thicken","Widens the diffusion distance beyond usefulness."],
        ["V/Q Mismatch","Ventilates what is not perfused; you drown in air."]],
 weak:"The pressure gradient. Restore it and breath returns.",
 grid:["....................","....................","....................","....................","........2222........",".........22.........","......2..22..2......","....223223322322....","....233333333332....","...23333333333332...","...23533444335332...","...23333333333332...","...23333333333332...","...23333322333332...","....23332..23332....","....22322..22322....","......2......2......","....................","....................","...................."]
},
{
 m:13, id:"enzyme", name:"The Enzyme Beast", epithet:"That Which Dissolves", icon:"🍽️",
 pal:["#111a08","#3f6b1e","#6aa832","#a8e05f","#e8ffd0","#ff8c42"],
 lore:"Mechanical first — I will grind you. Then chemical — I will unmake your bonds. Amylase for your starches, pepsin for your proteins, lipase for what is left.",
 taunt:"Emulsified. Absorbed. Eliminated. In that order.",
 moves:[["Acid Bath","Denatures every protein you have; pepsin follows."],
        ["Peristaltic Grip","Wave after wave, always forward, never back."],
        ["Bile Emulsify","Shatters your defenses into droplets for the lipase."]],
 weak:"Bicarbonate. Neutralize the chyme and the Beast loses its bite.",
 grid:["....................","....................","....................","......22............","......22............","......22............","......2322222.......","......233333322.....","......233333332.....",".....23333333332....",".....23353335332....","....2333333333332...",".....23333333332....",".....23333433332....","......23333333322...","......223333322.....","........22222.......","....................","....................","...................."]
},
{
 m:14, id:"filtration", name:"The Filtration Golem", epithet:"Arbiter of What Remains", icon:"🫘",
 pal:["#1a1206","#7a5a17","#c99a2e","#f0c840","#fff3cf","#5ec8ff"],
 lore:"A hundred and eighty liters a day pass through me and I return almost all of it. I decide what is worth keeping. Today I have decided you are not.",
 taunt:"Filtered. Reabsorbed. Secreted. Excreted.",
 moves:[["Glomerular Crush","Raises filtration pressure until proteins tear loose."],
        ["Countercurrent Trap","Builds a medullary gradient you cannot escape."],
        ["RAAS Cascade","Renin to angiotensin to aldosterone; pressure climbs."]],
 weak:"ACE inhibition. Break the cascade and the Golem loses its pressure.",
 grid:["....................","....................","....................","..........2.........",".......2223222......","......233333332.....",".....23333333332....",".....22222333332....","..........2533332...","..........2333332...","..........2333332...","..........2335332...","..........2333332...",".....22222333332....",".....23333333332....","......233333332.....",".......2223222......","..........2.........","....................","...................."]
}
];

/* ---- EXAM OVERLORDS: fought in the exam-review rounds, after the weekly bosses ---- */
window.BIO262_EXAM_BOSSES = [
{
 x:1, id:"primemover", name:"The Prime Mover", epithet:"Overlord of Exam I", icon:"🜂", mods:[1,2],
 pal:["#0b1a12","#245c3c","#3f9c66","#7ee0a8","#dbfff0","#ffe66d"],
 lore:"Two modules feed me: the chemistry that binds you and the cell that houses you. Defeat my lieutenants and you still face the whole of what they served.",
 taunt:"Bonds, buffers, membranes, mitochondria. I am all four at once.",
 moves:[["Chaos Doctrine","Entropy and osmosis strike together."],["Organelle Siege","Shuts down ATP production mid-answer."],["Codon Scramble","Corrupts transcription before translation can begin."]],
 weak:"Homeostasis itself. Every loop you can close weakens me.",
 grid:["....................",".......22222........",".....222333322......","....232.2333232.....","...232.43332.232....","..232.4433334.232...","..22.444333344.22...",".22.44444443444.22..",".22.44433333344.22..",".22.44333333334.22..",".22.43335335332.22..",".22.23333333333232..","..223333333333332...","..233334444443332...","..2333333433333332..",".233333333333333332.","22222223333322222222",".......22222........","....................","...................."]
},
{
 x:2, id:"architect", name:"The Architect", epithet:"Overlord of Exam II", icon:"🜃", mods:[3,4],
 pal:["#1a1409","#6b5a2e","#a89050","#e0d090","#fff6dc","#c0392b"],
 lore:"Skin to shield you, bone to carry you. I built the scaffold you stand on, and I can unbuild it just as carefully.",
 taunt:"Layer by layer. Lamella by lamella. Down you come.",
 moves:[["Barrier Raise","Stacks cornified layers no strike can pass."],["Resorb All","Osteoclasts strip every mineral in reach."],["Ossify Limbs","Turns your cartilage rigid mid-motion."]],
 weak:"Calcitriol and calcitonin working together.",
 grid:["....................","....................","....................","...44444444444444...","..2333333333333332..","..2344433333344432..","...44445444454444...","..2444443333444442..","..2444444444444442..","...44444444444444...","..2344444444444432..","..2444444444444442..","...44444444444444...","..2444444444444442..","..2344444444444432..","...44444444444444...","..2333333333333332..","..2222222222222222..","....................","...................."]
},
{
 x:3, id:"conductor", name:"The Conductor", epithet:"Overlord of Exam III", icon:"🜄", mods:[5,6],
 pal:["#0a1420","#1b4c7a","#2f86c9","#6fc9ff","#d9f2ff","#ffe066"],
 lore:"Muscle obeys nerve. Nerve obeys me. I hold the baton over every contraction and every thought you believe is your own.",
 taunt:"Threshold, spike, silence. That is my whole symphony.",
 moves:[["Silent Podium","Holds every axon below threshold."],["Tetanic Cadence","Stacks stimuli until nothing can relax."],["Autonomic Coup","Flips sympathetic and parasympathetic outputs."]],
 weak:"Acetylcholinesterase and the Na+/K+ pump, used together.",
 grid:["....................",".......2........2...",".......2.......2....","2......2......2.....",".2.....44444.2......","..22442443442442....","...2443444443442....","..434434434434434...","..434434434434434...",".4434435434454434422",".4434434434434434422",".44344344344344344..","..434444444444434...","..434434444434434...",".2.2443444443442....","2..2442443442442....",".......44444...2....",".......2........2...","....................","...................."]
},
{
 x:4, id:"regulator", name:"The Regulator", epithet:"Overlord of Exam IV", icon:"🜁", mods:[7,8,9],
 pal:["#1a0a1a","#5c2358","#a03d8a","#e878c8","#ffd9f2","#7ed85a"],
 lore:"Three modules answer to me: what you sense, what your glands decide, and what your blood carries. I sit where perception becomes hormone becomes consequence.",
 taunt:"I do not fight you. I adjust your set point and let you fight yourself.",
 moves:[["Sensory Blackout","Blinds, deafens and unbalances at once."],["Axis Seizure","Takes every endocrine loop off-line."],["Cascade Clot","Seals your vessels with your own fibrin."]],
 weak:"Feedback loops restored across all three systems.",
 grid:["....................","....................","....................",".22..............22.","..22............22..","...22222222222222...","...23333444333332...","..2333344444333332..",".233334344444433332.",".233344335434443332.",".233344433334443332.",".233333443344333332.","..2333334333333332..","...22333333333322...",".....2222332222.....",".........22.........",".........22.........",".........22.........","....................","...................."]
},
{
 x:5, id:"circulator", name:"The Circulator", epithet:"Overlord of Exam V", icon:"🜍", mods:[10,11,12],
 pal:["#1a0708","#7a1b2b","#c0303f","#ff7a88","#ffd6da","#5ec8ff"],
 lore:"Pump, defend, breathe. Stop any one and the other two follow within minutes. I am the three-part machine that keeps you alive, and I am tired of the arrangement.",
 taunt:"Rhythm. Immunity. Oxygen. Choose which you lose first.",
 moves:[["Total Block","Severs conduction; atria and ventricles diverge."],["Antigen Storm","Overwhelms innate and adaptive defense together."],["Gradient Zero","Flattens every partial pressure in the lung."]],
 weak:"Sinus rhythm, memory cells, and an intact pressure gradient.",
 grid:["....................","....................","....................",".........22.........",".......244442.......","......23344332......",".....2433443342.....","....444444444444....","....444544445444....","...44444444444444...","...44444444444444...","...44444444444444...","..2444444444444442..","...44444444444444...","...24444433444442...","...24444422444442...","....22422..22422....","....................","....................","...................."]
},
{
 x:6, id:"homeostat", name:"The Homeostat", epithet:"Final Overlord", icon:"⚕", mods:[1,2,3,4,5,6,7,8,9,10,11,12,13,14],
 pal:["#1a1206","#7a5a17","#c99a2e","#f0c840","#fff3cf","#ff6cb6"],
 lore:"Thirteen adversaries fell and every one of them fed me. I am not a system. I am the balance between all of them — and balance, once you understand it, is the hardest thing in the world to break.",
 taunt:"Fourteen modules. One organism. Show me you understood.",
 moves:[["Total Dysregulation","Every set point moves at once."],["Cascade of Cascades","RAAS, coagulation and complement fire together."],["Final Filtration","Filters, reabsorbs, secretes and excretes everything you had left."]],
 weak:"Understanding. Not memorization — the loops themselves.",
 grid:["....................",".......22222........",".....222222222......","....232.....2322....","...232.44444.2332...","..232.4433334.232...","..22.443344334.232..",".23244334444434.22..",".22.44344444432.22..",".22.44345435442.22..",".23244334434442.22..",".23344433334432.22..","..233444444443422...","..233344444433432...","...2333344333442....","....23333334432.....",".....223333322......",".......22222........","....................","...................."]
}
];

/* BIO 262 · Boss portrait renderer + villain reveal card.
   Self-contained: inject with <script src="data/bosses.js"></script><script src="data/bossfx.js"></script>
   Exposes  BIO262FX.portrait(boss, px)  ->  SVG string
            BIO262FX.reveal(boss, onDone) ->  full-screen reveal card
            BIO262FX.forModule(n)         ->  boss object            */
(function(){
  "use strict";
  var B = (window.BIO262_BOSSES||[]).concat(window.BIO262_EXAM_BOSSES||[]);
  function esc(s){return String(s==null?"":s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");}

  function forModule(n){ for(var i=0;i<B.length;i++){ if(B[i].m===n && !B[i].alt) return B[i]; } return null; }
  function byId(id){ for(var i=0;i<B.length;i++){ if(B[i].id===id) return B[i]; } return null; }

  /* 16x16 grid -> SVG with hard bottom-right pixel shadows, per the house style */
  function portrait(b, px){
    px = px || 9;
    var g = b.grid, p = b.pal, n = g.length, s = "";
    for(var y=0; y<n; y++){
      var row = g[y];
      for(var x=0; x<row.length; x++){
        var c = row[x];
        if(c===" " || c==="." ) continue;
        var k = parseInt(c,10);
        if(isNaN(k) || !p[k]) continue;
        // shadow first
        s += '<rect x="'+((x*px)+1)+'" y="'+((y*px)+1)+'" width="'+px+'" height="'+px+'" fill="'+p[0]+'" opacity=".55"/>';
        s += '<rect x="'+(x*px)+'" y="'+(y*px)+'" width="'+px+'" height="'+px+'" fill="'+p[k]+'"/>';
      }
    }
    var w = (g[0]?g[0].length:16)*px+2;
    return '<svg viewBox="0 0 '+w+' '+w+'" width="'+w+'" height="'+w+'" shape-rendering="crispEdges" '+
           'xmlns="http://www.w3.org/2000/svg" style="image-rendering:pixelated">'+
           '<defs><radialGradient id="bg_'+b.id+'"><stop offset="0%" stop-color="'+p[2]+'" stop-opacity=".38"/>'+
           '<stop offset="100%" stop-color="'+p[0]+'" stop-opacity="0"/></radialGradient></defs>'+
           '<rect width="'+w+'" height="'+w+'" fill="url(#bg_'+b.id+')"/>'+ s +'</svg>';
  }

  /* one-time stylesheet */
  function css(){
    if(document.getElementById("bio262fx-css")) return;
    var st = document.createElement("style");
    st.id = "bio262fx-css";
    st.textContent = [
      '.bfx-wrap{position:fixed;inset:0;z-index:99999;display:flex;align-items:center;justify-content:center;',
      'background:rgba(4,6,9,.93);padding:18px;animation:bfxIn .35s ease both;font-family:VT323,monospace;}',
      '@keyframes bfxIn{from{opacity:0}to{opacity:1}}',
      '@keyframes bfxOut{to{opacity:0}}',
      '.bfx-card{max-width:560px;width:100%;max-height:94vh;overflow-y:auto;border-radius:14px;padding:22px 20px;',
      'border:3px solid var(--bfxA);background:linear-gradient(180deg,#0d1218,#131b23);',
      'box-shadow:0 0 60px var(--bfxGlow),0 0 0 1px rgba(255,255,255,.05) inset;text-align:center;',
      'animation:bfxPop .45s cubic-bezier(.2,.9,.3,1.2) both;}',
      '@keyframes bfxPop{from{transform:scale(.8) translateY(20px);opacity:0}to{transform:none;opacity:1}}',
      '.bfx-warn{font-family:"Press Start 2P",monospace;font-size:9px;letter-spacing:.35em;color:var(--bfxA);opacity:.9;}',
      '.bfx-art{margin:12px auto 6px;filter:drop-shadow(0 0 22px var(--bfxGlow));animation:bfxFloat 2.6s ease-in-out infinite;}',
      '@keyframes bfxFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-7px)}}',
      '.bfx-name{font-family:"Cinzel Decorative",serif;font-weight:900;font-size:clamp(24px,6vw,38px);',
      'color:var(--bfxA);text-shadow:0 0 24px var(--bfxGlow);line-height:1.1;margin:6px 0 2px;}',
      '.bfx-epi{font-family:"Press Start 2P",monospace;font-size:8px;letter-spacing:.25em;color:#9a9384;margin-bottom:12px;}',
      '.bfx-mod{display:inline-block;font-family:"Press Start 2P",monospace;font-size:7px;letter-spacing:.15em;',
      'background:var(--bfxA);color:#080c10;border-radius:20px;padding:5px 10px;margin-bottom:10px;}',
      '.bfx-lore{font-size:20px;line-height:1.45;color:#d8d2c4;font-style:italic;margin:0 0 14px;}',
      '.bfx-taunt{font-size:21px;color:var(--bfxA);margin:0 0 16px;}',
      '.bfx-moves{text-align:left;background:rgba(255,255,255,.04);border-radius:10px;padding:12px 14px;margin-bottom:12px;}',
      '.bfx-moves h4{font-family:"Press Start 2P",monospace;font-size:8px;letter-spacing:.2em;color:#9a9384;margin:0 0 9px;}',
      '.bfx-mv{margin-bottom:8px;font-size:19px;color:#c9c3b5;}',
      '.bfx-mv b{color:var(--bfxA);display:block;font-size:19px;}',
      '.bfx-weak{background:rgba(126,216,90,.1);border:1px solid rgba(126,216,90,.4);border-radius:10px;',
      'padding:10px 12px;font-size:19px;color:#bdf0a5;text-align:left;margin-bottom:16px;}',
      '.bfx-weak b{color:#7ed85a;}',
      '.bfx-go{width:100%;font-family:"Press Start 2P",monospace;font-size:11px;padding:15px;border:none;',
      'border-radius:10px;background:var(--bfxA);color:#080c10;cursor:pointer;}',
      '.bfx-go:hover{filter:brightness(1.15);}',
      '.bfx-skip{display:block;margin:10px auto 0;background:none;border:none;color:#6f6a5e;font-size:17px;cursor:pointer;font-family:VT323,monospace;}'
    ].join("");
    document.head.appendChild(st);
  }

  function reveal(b, onDone){
    if(!b){ if(onDone) onDone(); return; }
    css();
    var wrap = document.createElement("div");
    wrap.className = "bfx-wrap";
    wrap.style.setProperty("--bfxA", b.pal[3]);
    wrap.style.setProperty("--bfxGlow", b.pal[2]);
    var mv = b.moves.map(function(m){
      return '<div class="bfx-mv"><b>'+esc(m[0])+'</b>'+esc(m[1])+'</div>';
    }).join("");
    wrap.innerHTML =
      '<div class="bfx-card">'
      + '<div class="bfx-warn">⚠ HOSTILE PHYSIOLOGY DETECTED ⚠</div>'
      + '<div class="bfx-art">'+portrait(b, 10)+'</div>'
      + '<div class="bfx-mod">'+(b.m? 'MODULE '+b.m : (b.x===6?'FINAL EXAM':'EXAM '+b.x))+'</div>'
      + '<div class="bfx-name">'+esc(b.name)+'</div>'
      + '<div class="bfx-epi">'+esc(b.epithet).toUpperCase()+'</div>'
      + '<p class="bfx-lore">"'+esc(b.lore)+'"</p>'
      + '<p class="bfx-taunt">'+esc(b.taunt)+'</p>'
      + '<div class="bfx-moves"><h4>MOVESET</h4>'+mv+'</div>'
      + '<div class="bfx-weak"><b>WEAKNESS:</b> '+esc(b.weak)+'</div>'
      + '<button class="bfx-go">▶ FACE IT</button>'
      + '<button class="bfx-skip">skip introductions</button>'
      + '</div>';
    document.body.appendChild(wrap);

    function close(){
      wrap.style.animation = "bfxOut .28s ease forwards";
      setTimeout(function(){ wrap.remove(); if(onDone) onDone(); }, 290);
    }
    wrap.querySelector(".bfx-go").addEventListener("click", close);
    wrap.querySelector(".bfx-skip").addEventListener("click", function(){
      try{ localStorage.setItem("bio262_skip_reveal","1"); }catch(e){}
      close();
    });
    wrap.addEventListener("click", function(e){ if(e.target===wrap) close(); });
  }

  function shouldReveal(){
    try{ return localStorage.getItem("bio262_skip_reveal") !== "1"; }catch(e){ return true; }
  }

  window.BIO262FX = {
    portrait: portrait, reveal: reveal, forModule: forModule, byId: byId,
    shouldReveal: shouldReveal, all: B
  };
})();
