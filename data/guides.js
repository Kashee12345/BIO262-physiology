/* BIO 262 Human Physiology - Joyce University
   Study guides, reorganized BY EXAM.

   Why by exam: the course's five module review guides and the Lecture Outline number
   Modules 4-7 one way; the six exam banks, the final review guide and the live-class
   decks number them another way. Organizing by exam sidesteps the conflict entirely --
   every prompt below sits under the exam that actually tests it.

   `src`  = which official document the prompts came from
   `note` = flagged where the official guide's own module label disagrees with the exam
*/
window.BIO262_GUIDES = [
{
  key:"Ex1", name:"Exam 1", covers:"Modules 1-2 · 50 questions",
  intro:"Chemistry, homeostasis and the cell. The official M03 review guide matches this exam exactly.",
  groups:[
    { title:"Module 1 · Physiology, atoms & homeostasis", src:"M03 exam review guide", prompts:[
      "Define physiology. Give an example of cell, organ, and systemic physiology. What is pathophysiology?",
      "What is homeostasis? How do the nervous system and endocrine system regulate it?",
      "Write an example of negative feedback - include stimulus, receptor, control center, effector, result. What does the outcome do to the receptor?",
      "Write an example of positive feedback - how is this outcome different than negative feedback? What does it do to the receptor?",
      "Where are electrons found in an atom? What is a valence shell? What are valence electrons?",
      "What is an ionic bond? What's happening to electrons? Draw an ionic bond.",
      "What is an ion? What is the difference between a cation and an anion?",
      "What is happening with electrons in a covalent bond? How do polar and nonpolar bonds differ? Draw each.",
      "What is a hydrogen bond? What relevance does this have in the human body?",
      "What bond makes a single water molecule? What bond forms between multiple water molecules?"
    ]},
    { title:"Module 1 · pH, acids, bases & buffers", src:"M03 exam review guide", prompts:[
      "What does pH measure? What does a pH of 2 mean? What about 9?",
      "Describe the relationship between pH and hydrogen ion concentration.",
      "What is the pH of blood? What is it called when blood pH is above the set point? Below it?",
      "What is a buffer? What is an example of a buffer in the human body?"
    ]},
    { title:"Module 2 · The cell membrane & transport", src:"M03 exam review guide", prompts:[
      "What is the role of the cell membrane? What does selectively permeable mean?",
      "Describe these membrane proteins: anchoring, cell adhesion, enzyme, transport, antigen.",
      "What type of transport does NOT require ATP? How does this relate to the concentration gradient?",
      "What is diffusion? What is moving, and which way relative to the gradient?",
      "What is the difference between simple and facilitated diffusion? Does either use ATP?",
      "What is osmosis? What is moving? Does osmosis require ATP?",
      "What type of transport uses ATP? List 2 examples."
    ]},
    { title:"Module 2 · Organelles, ATP & protein synthesis", src:"M03 exam review guide", prompts:[
      "List the function of the nucleus, ribosome, Golgi apparatus, and lysosome.",
      "List the function of both the smooth and rough endoplasmic reticulum.",
      "List the function of the mitochondria.",
      "Draw the pathway of ATP production starting with glycolysis, with location in the cell. Mark each step aerobic or anaerobic.",
      "What is transcription and where does it happen? What is translation and where does it happen?",
      "What are the 3 types of RNA and where is each used in transcription/translation?",
      "What does a ribosome do for protein synthesis?",
      "What is mitosis? What is the result? Why is this important for life?"
    ]}
  ]
},
{
  key:"Ex2", name:"Exam 2", covers:"Modules 3-4 · 50 questions",
  intro:"Tissues, skin, and BONE. Heads up: the official M05 review guide pairs tissues with nervous tissue, but this exam's second half is skeletal physiology. Bone prompts below are drawn from the M10 guide and the final review guide.",
  groups:[
    { title:"Module 3 · Epithelial & connective tissue", src:"M05 exam review guide", prompts:[
      "List the 4 types of membranes and the function of each. Where is each found? Which have fluid, and why?",
      "What is the difference between endocrine and exocrine glands? Where do their secretions go?",
      "Fill in function + location for each epithelial tissue: simple squamous, stratified squamous, simple cuboidal, simple columnar, transitional, pseudostratified columnar, goblet columnar cells.",
      "Fill in function + location for each connective tissue: adipose, cartilage (hyaline & elastic), reticular, fluid (blood/lymph), bone.",
      "What is the function of transitional epithelium? Where is it found?",
      "What is the function of cartilage in the ear (auricle) and nose?",
      "Why do synovial joints contain synovial fluid?"
    ]},
    { title:"Module 3 · Integumentary system", src:"M05 exam review guide", prompts:[
      "What are the 3 layers of skin and the function of each?",
      "List the layers of the epidermis from DEEP to SUPERFICIAL. Are cells dividing? Alive? What are they making?",
      "Why is keratin important in the epidermis?",
      "What are the 2 layers of the dermis? What is the role of the blood vessels in the dermis?",
      "Describe how these glands release secretions: apocrine, merocrine, holocrine.",
      "What cells make melanin and where are they found? What benefit does melanin have?",
      "Describe the steps of vitamin D production, starting with which type of UV rays. Include locations and the form of vitamin D at each step.",
      "What is calcitriol? Why is vitamin D important - what does it help us do?"
    ]},
    { title:"Module 4 · Bone types & bone cells", src:"M10 guide + final review guide", note:"The M05 guide labels Module 4 as nervous tissue; this exam tests bone.", prompts:[
      "What are the differences between long bones and flat bones? Where do we find each?",
      "List the function of each cell: osteoclasts, osteoblasts, osteoprogenitor cells, osteocytes.",
      "What are canaliculi and lacunae? What is the bone matrix made of?",
      "What is bone remodeling? What cells achieve it? How is that different from growth?",
      "What does exercise do for bones?"
    ]},
    { title:"Module 4 · Ossification & calcium regulation", src:"M10 guide + final review guide", prompts:[
      "What are the two types of ossification? What kind of bones does each make?",
      "Explain endochondral ossification. What is the epiphyseal plate?",
      "Explain intramembranous ossification. What kind of bones does this make?",
      "When would the body release PTH? What are its effects? How does it balance blood calcium?",
      "When would the body release calcitonin? What 3 places (including a specific bone cell) does it act on? What is the end result?"
    ]}
  ]
},
{
  key:"Ex3", name:"Exam 3", covers:"Modules 5-6 · 50 questions",
  intro:"Muscle + nervous tissue, then the brain and autonomics. The official M07 guide is offset by one module against this exam - its eye/ear section actually belongs to Exam 4. Everything below is placed where the exam tests it.",
  groups:[
    { title:"Module 5 · Muscle tissue & contraction", src:"M10 guide + final review guide", prompts:[
      "What are the 3 types of muscle tissue? Where is each found? What is the function of each?",
      "Which type of muscle tissue is the most fatigue-resistant? Which has automaticity?",
      "What is the function of skeletal muscle?",
      "Write the steps of a synapse at the neuromuscular junction, starting with an action potential traveling down the motor neuron and ending with muscle cell depolarization. Include ACh, AChE, and receptors.",
      "Write the steps of a muscle contraction starting with muscle cell depolarization.",
      "When and where is ATP used during a muscle contraction?"
    ]},
    { title:"Module 5 · Muscle energy sources", src:"M10 guide + final review guide", prompts:[
      "What is glycolysis? Where does it occur? Does it require O2? Does it yield much ATP?",
      "What is aerobic metabolism? Where does it occur? What does it require? Does it yield much ATP?",
      "What happens after glycolysis in anaerobic conditions? (What does pyruvate turn into?)"
    ]},
    { title:"Module 5 · Nervous tissue: neurons & glia", src:"M05 exam review guide", prompts:[
      "List the specific role of each cell: neurons, microglia, astrocytes, ependymal cells, oligodendrocytes, Schwann cells.",
      "What is the function of astrocytes?",
      "Why is myelin important?",
      "List the parts of a neuron and their function. Include receptors for the neuron type that has them.",
      "Fill in function + location for each neuron type: bipolar, sensory, interneuron, motor."
    ]},
    { title:"Module 5 · Synapses & neurotransmitters", src:"M05 exam review guide", prompts:[
      "What is used at synapses to communicate between neurons?",
      "How are neurotransmitters released from neurons? (Think of an ion.)",
      "What does an excitatory neurotransmitter do? What does an inhibitory neurotransmitter do?",
      "Fill in function + location for: acetylcholine, epinephrine, dopamine.",
      "What is an electrical synapse? Give an example."
    ]},
    { title:"Module 6 · Action potentials", src:"M05 guide + final review guide", prompts:[
      "Draw and describe the steps of an action potential. Include voltages, specific ion movement, threshold, stimulus, and the Na+/K+ pump.",
      "What is the resting membrane potential? What is threshold?",
      "What are the two types of conduction?",
      "What is the difference between a graded potential and an action potential?"
    ]},
    { title:"Module 6 · Brain, meninges & CSF", src:"M07 exam review guide", prompts:[
      "What is the role of the meninges? What are the layers in order?",
      "What is the role of cerebrospinal fluid? Why do we need it?",
      "What is the difference between white matter and gray matter? How does that change the function?",
      "List the functions of each region: frontal lobe, parietal lobe, temporal lobe, occipital lobe, cerebellum, brainstem, thalamus, hypothalamus.",
      "Name each lobe of the brain and its main job, including special sense interpretation."
    ]},
    { title:"Module 6 · Autonomic nervous system", src:"M07 exam review guide", prompts:[
      "What is the role of the sympathetic nervous system? What are its other names? How does it affect specific body parts?",
      "What is the role of the parasympathetic nervous system? What are its other names? How does it affect specific body parts?",
      "What happens to heart rate, blood pressure, and respiration rate when the sympathetic nervous system is activated? When the parasympathetic is?"
    ]},
    { title:"Module 6 · Smell & taste", src:"M07 exam review guide", prompts:[
      "Write the steps of olfaction starting with dissolved chemicals binding. Include the type of neuron and where in the brain we end up.",
      "What are the 5 main types of taste? Is 'spicy' a taste?",
      "Write the steps of gustation starting with dissolved chemicals binding. Include where in the brain we end up.",
      "How do gustatory receptors work? What binds to the receptor?"
    ]}
  ]
},
{
  key:"Ex4", name:"Exam 4", covers:"Modules 7-9 · 50 questions",
  intro:"Special senses, endocrine, and blood. The eye/ear prompts come from the M07 guide, where they were labeled Module 6.",
  groups:[
    { title:"Module 7 · The eye & vision", src:"M07 exam review guide", note:"Labeled Module 6 in the M07 guide.", prompts:[
      "What does the lens do? How does it change if we look far vs. close?",
      "What are the two photoreceptors? Where are they found in the eye? What does each detect?",
      "What is the role of opsin?",
      "Write or draw the details of the retina and their function. Include rods, cones, bipolar cells, ganglion cells.",
      "What do each of these acuities mean - good or poor vision? 20/20, 20/15, 20/200",
      "What are the functions of tears, vitreous humor, and aqueous humor? Where is each found? Which are permanent?",
      "Where are tears made? Where do they drain from the eye?"
    ]},
    { title:"Module 7 · Hearing & equilibrium", src:"M07 exam review guide", prompts:[
      "Describe the steps of hearing starting with sound waves in the air. Include the pinna, ossicles, cochlea, and tympanic membrane.",
      "What does the tympanic membrane do? What does the cochlea do?",
      "What is the role of the eustachian tube?",
      "Which nerve sends hearing information to the brain?",
      "Describe what is required in the inner ear for gravity and linear acceleration detection. Where in the brain does that information go?",
      "Describe what is required in the inner ear for head rotation detection. Where in the brain does that information go?",
      "How does equilibrium work in the inner ear? What role does the fluid play? Describe both the vestibule and the semicircular canals.",
      "Which nerve sends equilibrium information to the brain?"
    ]},
    { title:"Module 8 · Receptors", src:"M10 exam review guide", prompts:[
      "List what each of these receptors detects: baroreceptors, chemoreceptors, nociceptors, mechanoreceptors.",
      "How are mechanoreceptors activated?",
      "What is the difference between intracellular and extracellular receptors? What type of molecule binds to each?",
      "What is an ion channel linked receptor? What is an example? (Think of the neuromuscular junction.)",
      "What is a G-protein coupled receptor?"
    ]},
    { title:"Module 8 · Hormones - trigger & effect", src:"M10 exam review guide", prompts:[
      "Aldosterone - what is the trigger/stimulus? What are the effects?",
      "ADH - trigger and effects?",
      "LH and FSH - trigger and effects? Know the difference between the two!",
      "Glucagon - trigger and effects? Insulin - trigger and effects?",
      "Oxytocin - trigger and effects?",
      "Growth hormone - trigger and effects?",
      "Melatonin - trigger and effects?",
      "Thyroxine (T4) - trigger and effects?"
    ]},
    { title:"Module 9 · Blood & formed elements", src:"M10 exam review guide", prompts:[
      "What are the functions of whole blood? How does blood regulate temperature?",
      "List each formed element of blood and its main function.",
      "Which formed element carries oxygen? Which is important for immunity? Which for clotting?",
      "What is the pH of blood? Why is it important to stay in this range?",
      "What are the types of leukocytes and what is each of their roles?",
      "Which leukocyte is responsible for antibodies? Be specific."
    ]},
    { title:"Module 9 · Vessels & hemostasis", src:"M10 exam review guide", prompts:[
      "What are the 3 layers of the blood vessel? What is the role of each layer?",
      "What is the role of arteries? How are they different from veins? What is the role of capillaries?",
      "What is vasodilation? What is vasoconstriction? How does each affect blood pressure?",
      "What are some examples of autoregulation of blood flow?",
      "What are the 3 steps of hemostasis? Describe each step.",
      "Why is von Willebrand factor important? Which step is it used in?",
      "How does the coagulation cascade begin? When do the two pathways merge?",
      "Once merged, what happens after factor X is activated? Complete the pathway to fibrin."
    ]}
  ]
},
{
  key:"Ex5", name:"Exam 5", covers:"Modules 10-12 · 50 questions",
  intro:"Heart, immune, respiratory. The official M13 review guide matches this exam exactly - no renumbering issues here.",
  groups:[
    { title:"Module 10 · The cardiac cycle", src:"M13 exam review guide", prompts:[
      "List the steps of the cardiac cycle (systole, diastole) and what happens in each. Include when each set of valves closes.",
      "What is the function of the AV valves? When are they open? When do they close, and why?",
      "What is the function of the semilunar valves? When are they open? When do they close, and why?",
      "What is S1 - what are you hearing? When does it happen in the cardiac cycle?",
      "What is S2 - what are you hearing? When does it happen in the cardiac cycle?",
      "What does systole mean? What happens during ventricular systole?",
      "What does diastole mean? What happens during ventricular diastole?",
      "List the flow of blood through the heart. Start with SVC/IVC, go to the lungs, then return and go to the body."
    ]},
    { title:"Module 10 · Output & conduction", src:"M13 exam review guide", prompts:[
      "What is cardiac output? What is the equation? What factors impact it - think nervous system and hormones.",
      "List the order of cardiac conduction starting with the SA node. Include the job/special feature of each structure.",
      "What do each of the 3 main ECG waveforms (P, QRS, T) represent?"
    ]},
    { title:"Module 11 · Lymphocytes & immunity", src:"M13 exam review guide", prompts:[
      "What is the role of B cells? What activates them? What do they become? What do those cells secrete?",
      "What is the function of plasma cells?",
      "What is the role of NK cells? Are they innate or adaptive?",
      "What do helper T cells do? Who do they help?",
      "What do cytotoxic T cells do? How do they attack?",
      "Why are memory cells important?",
      "Make a list for innate immunity - features, speed, advantages, disadvantages. Then the same for adaptive. Focus on the differences and give examples of each.",
      "What cells are used for the innate immune response? For the adaptive?",
      "What is the goal of the complement system - what is it enhancing?"
    ]},
    { title:"Module 11 · Lymphatic organs", src:"M13 exam review guide", prompts:[
      "What is the function of the thymus?",
      "What is the function of the spleen?",
      "What is MALT? Where is it found?",
      "What is the function of lymph nodes?",
      "Why is lymph fluid important? How does this help blood volume?"
    ]},
    { title:"Module 12 · Ventilation & gas exchange", src:"M13 exam review guide", prompts:[
      "List the process of inhalation. Focus on pressures and volumes.",
      "What is the purpose of a pressure gradient? Which direction do air and gas move?",
      "What is surfactant? Why is it important?",
      "Where does gas exchange happen in the lung?",
      "What 3 factors influence gas exchange?",
      "Which direction does oxygen move? Which direction does carbon dioxide move?",
      "What is perfusion? What is diffusion? What drives diffusion?"
    ]},
    { title:"Module 12 · Transport & alveolar cells", src:"M13 exam review guide", prompts:[
      "How does oxygen travel in the blood? How does carbon dioxide travel in the blood?",
      "What does hemoglobin do?",
      "How is carbon dioxide related to pH?",
      "List the 3 types of alveolar cells and their function: type I, type II, alveolar macrophages."
    ]}
  ]
},
{
  key:"FE", name:"Final Exam", covers:"All 14 modules · 100 questions",
  intro:"Cumulative. Modules 1-4 get 5 questions each, Modules 5-12 get 6 each, and Modules 13-14 get 16 EACH - so the digestive, urinary and reproductive systems are almost a third of this exam. Weight your studying accordingly.",
  groups:[
    { title:"Modules 1-4 · Rapid review (5 questions each)", src:"262 final exam review guide", prompts:[
      "Define physiology. Give an example of cell, organ, and systemic physiology. What is pathophysiology?",
      "What is an ionic bond? What's happening to electrons? What is a buffer?",
      "Write an example of negative feedback and an example of positive feedback. What does each outcome do to the receptor?",
      "What is the role of the cell membrane? What is diffusion, and what is moving? What is osmosis, and what is moving?",
      "List the function of the mitochondria. What are the 3 types of RNA and where is each used?",
      "What is the function of transitional epithelium and where is it found? What is the function of cartilage in the ear and nose?",
      "List the layers of the epidermis DEEP to SUPERFICIAL. What is calcitriol?",
      "What are the differences between long bones and flat bones? What do osteoclasts and osteoblasts do?",
      "What are the effects of calcitonin and PTH? How does each balance blood calcium?",
      "What are the two types of ossification and what kind of bones does each make?"
    ]},
    { title:"Modules 5-8 · Rapid review (6 questions each)", src:"262 final exam review guide", prompts:[
      "What is the function of skeletal muscle? What neuron and neurotransmitter are used at the neuromuscular junction?",
      "What happens after glycolysis in anaerobic conditions?",
      "What is the function of astrocytes? What is the difference between an excitatory and an inhibitory neurotransmitter?",
      "What are the steps of an action potential? What ions move in each step, and in which direction?",
      "What happens to heart rate, blood pressure, and respiration rate under sympathetic activation? Under parasympathetic?",
      "What is the function of CSF? Name each lobe of the brain and its main job.",
      "What does the lens do, and how does it change for far vs. close? What are the two photoreceptors and what does each detect?",
      "How does equilibrium work in the inner ear? Describe both the vestibule and the semicircular canals.",
      "What does the tympanic membrane do? What does the cochlea do?",
      "What do baroreceptors, chemoreceptors, nociceptors, and mechanoreceptors detect?",
      "What is an ion channel linked receptor, and what is an example?",
      "Give the trigger and effects for aldosterone, glucagon, and melatonin."
    ]},
    { title:"Modules 9-12 · Rapid review (6 questions each)", src:"262 final exam review guide", prompts:[
      "List each formed element of blood and its main function.",
      "What happens to blood pressure with vasoconstriction? With vasodilation?",
      "What are the 3 steps of hemostasis? Why is factor X important for the coagulation cascade?",
      "What is the function of the AV valves and the semilunar valves? When is each open and closed?",
      "What is cardiac output and how do we calculate it?",
      "What do the P, QRS, and T waveforms represent? What is the conduction pathway starting at the SA node?",
      "What is the function of NK cells, plasma cells, and helper T cells?",
      "What is the function of the spleen and of lymph nodes?",
      "What cells are used for the innate immune response? For the adaptive?",
      "What is perfusion, what is diffusion, and what drives diffusion? Where does gas exchange occur?",
      "What does hemoglobin do?",
      "What is the function of type I alveolar cells, type II alveolar cells, and alveolar macrophages?"
    ]},
    { title:"Module 13 · Digestive system (16 questions - heavily weighted)", src:"262 final exam review guide", prompts:[
      "What is the difference between mechanical and chemical digestion? List locations for each type.",
      "What is peristalsis?",
      "Where does protein digestion begin? Carbohydrate? Fat?",
      "What is the function of the lower esophageal sphincter, liver, gallbladder, and pancreas?",
      "Give the location and function of salivary amylase, pepsin, and bile - be specific with emulsification.",
      "Give the location and function of CCK, secretin, and pancreatic lipase. How does pancreatic lipase differ from bile?",
      "Give the location and function of insulin and bicarbonate.",
      "What is absorbed in each part of the small intestine?",
      "What is absorbed in the colon? What is elimination?"
    ]},
    { title:"Module 14 · Urinary & reproductive (16 questions - heavily weighted)", src:"262 final exam review guide", prompts:[
      "What is the function of the kidneys? What is the role of the glomerulus? What is the role of the loop of Henle?",
      "How do the kidneys influence blood pressure?",
      "Describe sperm production. How many sperm result from each spermatocyte?",
      "List each of the 3 parts of a sperm and the function of each.",
      "Describe oogenesis. Include the function of the corpus luteum, FSH, and LH - know the difference between FSH and LH!",
      "What is the difference between an ovum and a secondary oocyte? How does fertilization relate to this?",
      "Describe the menstrual cycle phases.",
      "What is menopause? What happens to FSH/LH and the ovaries? What happens to estrogen? What symptoms occur?"
    ]}
  ]
}
];
