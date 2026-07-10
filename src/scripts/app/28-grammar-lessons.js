  /* ============== GRAMMAR LESSONS ============== */
  // Foundational Spanish grammar lessons. Each lesson has:
  //   id, num (display), title, tag, summary (preview shown on the card)
  //   sections: array of { heading, body (HTML allowed), conjugation?, examples? }
  //   quiz: 3 multiple-choice questions to check understanding
  // Completing the quiz with 3/3 awards 15 Lucas (one-time per lesson, per student).
  //
  // Related practice & resources are stored separately in LESSON_RESOURCES below.

  // ============================================================================
  // LESSON_RESOURCES
  // ----------------------------------------------------------------------------
  // For each lesson ID, list related practice and external resources.
  //
  // - games:  array of game IDs (must match keys in the GAMES object)
  // - drills: array of { tense, group, label } — open the verb drill at a preset
  // - decks:  array of deck IDs (must match keys in the vocab decks object)
  // - pdfs:   array of { url, label } — YOUR external PDF links go here
  // - links:  array of { url, label } — any other external links (YouTube, etc.)
  //
  // Adding a PDF: just edit this object. Each entry becomes a card link on the
  // lesson's "Related practice" section.
  // ============================================================================
  const LESSON_RESOURCES = {
    'pronunciation-alphabet': {
      decks: ['saludos', 'cotidiano'],
      pdfs: [],
      links: [
        { label: "Spanish Alphabet Presentation Link", url: 'https://docs.google.com/document/d/1bgAI3NydtqUZZhZN75oW7eExCqcn4es0v7GTj4ILqXY/edit?usp=sharing' },
        { label: "Preliminar Peardeck (intro)", url: 'https://docs.google.com/presentation/d/1rG79MZsmJJ_mKzoQRVvKUyXWQEgNi7Kuaz1h4e0vj1k/edit?usp=sharing' },
        { label: "Preliminar Vocab List (saludos, despedidas)", url: 'https://docs.google.com/document/d/1Td_XUXiir4huthoS4pL6tiJgCu1ArufTqA8i8voq2-I/edit?usp=sharing' },
        { label: "To-do list: Preliminar vocab", url: 'https://docs.google.com/document/d/1osMU2vDYDMvinhAkxr5GfG-xnQCsxMBH6Ia0JPV1GIs/edit?usp=sharing' },
        { label: "Preliminar crossword (PDF)", url: 'https://drive.google.com/file/d/15PmhBVcRq0a2LvV-_00t02i7YwzywH86/view?usp=sharing' }
      ]
    },
    'stress-and-accents': {
      decks: ['saludos', 'cotidiano'],
      readings: ['peru-lima', 'espana-pueblo', 'mexico-mercado'],
      pdfs: [],
      links: [
        { label: "Alt codes for Spanish accents (reference)", url: 'https://docs.google.com/document/d/1VD6bXtUgpDxdLigwT_Carn2rkIIWX4UGnZFsvUzZ-4U/edit?usp=sharing' }
      ]
    },
    'cognates-false-friends': {
      decks: ['cotidiano', 'escuela', 'emociones', 'literatura'],
      readings: ['peru-lima', 'mexico-pais', 'colombia-paisaje'],
      pdfs: [],
      links: [
        { label: "Text / online acronyms activity", url: 'https://docs.google.com/document/d/1FqpzqILPoONgau4I2zbBv4iAgQZtV76Ui8LyBNkxVyE/edit?usp=sharing' },
        { label: "Text / online acronyms — answer key", url: 'https://docs.google.com/document/d/1UC4Hvd3JgTUzyslD1JUptJDcgtbESd3pI9uChn1BP9w/edit?usp=sharing' }
      ]
    },
    'articles-gender': {
      decks: ['cotidiano', 'familia', 'salon', 'ropa', 'casa', 'lugares'],
      games: ['articles', 'articles-translate', 'articles-translate-en', 'plurals'],
      pdfs: [],
      links: [
        { label: 'Definite articles + making nouns plural/singular', url: 'https://docs.google.com/document/d/1cp8M5jaPe8K_DoESOWl00JT7HPV6ScuPDgQV9ADHjyY/edit?usp=sharing' },
        { label: "Articles and Adjectives Rotations + exit slip", url: 'https://docs.google.com/document/d/1bDhRIhdYG089aX1pBnQHIIDRqt5kRYy-3Y2XWY9EX0c/edit?usp=sharing' }
      ]
    },
    'plural-basics': {
      decks: ['cotidiano', 'familia', 'salon', 'cuerpo'],
      games: ['plurals', 'articles-translate'],
      pdfs: [],
      links: [
        { label: 'Definite articles + making nouns plural/singular', url: 'https://docs.google.com/document/d/1cp8M5jaPe8K_DoESOWl00JT7HPV6ScuPDgQV9ADHjyY/edit?usp=sharing' },
        { label: "Articles and Adjectives Rotations + exit slip", url: 'https://docs.google.com/document/d/1bDhRIhdYG089aX1pBnQHIIDRqt5kRYy-3Y2XWY9EX0c/edit?usp=sharing' }
      ]
    },
    'plural-edge-cases': {
      decks: ['cotidiano', 'salon', 'familia'],
      pdfs: [],
      links: []
    },
    'question-words': {
      decks: ['preguntas', 'saludos', 'cotidiano'],
      pdfs: [],
      links: [
        { label: "Write sentences & questions in Spanish (instructions)", url: 'https://docs.google.com/document/d/1F1nBMggmxZZR9HoFr1JYi8PW2_B7zCkDE780s7nlLgc/edit?usp=sharing' }
      ]
    },
    'hay-there-is': {
      decks: ['cotidiano', 'salon', 'familia', 'casa', 'preposiciones', 'lugares'],
      pdfs: [],
      links: []
    },
    'contractions-al-del': {
      decks: ['cotidiano', 'salon'],
      pdfs: [],
      links: []
    },
    'subject-pronouns': {
      drills: [{ tense: 'presente', group: 'all', label: 'Practice with the verb drill' }],
      decks: ['pronombres', 'saludos'],
      pdfs: [],
      links: [
        { label: "Subject Pronouns: Worksheet 1", url: 'https://docs.google.com/document/d/1ISqMlcU2fUmRb2lcuiFwRyBzRTYQyAML6cTAYgfJXI8/edit?usp=sharing' }
      ]
    },
    'ar-verbs': {
      drills: [{ tense: 'presente', group: 'regular-ar', label: 'Drill: -AR verbs in present' }],
      decks: ['verbosAr'],
      pdfs: [],
      links: [
        { label: "AR verb sentence writing (Spanish 1)", url: 'https://docs.google.com/document/d/1wMtlab81BwV_jhW49r6hINd3mXtMefLdiKQpGAiEIiw/edit?usp=sharing' },
        { label: "To-do list: AR verbs (25-26)", url: 'https://docs.google.com/document/d/1OA_kRvTL0gM5xyuZBrl1EgxVDN-ZjQFnP_56rgCUJDY/edit?usp=sharing' },
        { label: "Conjugate & translate AR verbs + ser/estar/tener/venir", url: 'https://docs.google.com/document/d/1F2xJmD5CtK6XejUckbgeAdJZMJ0amERbkD1y-qwjOyE/edit?usp=sharing' },
        { label: "Reading: AR verb sentences", url: 'https://docs.google.com/document/d/1olkpKIQE_JuMfmpp9c55glOfHAPkF7oXQJScn2R7bfM/edit?usp=sharing' },
        { label: "SPN→ENG sentences: AR + tener + ir + dar + ser + estar", url: 'https://docs.google.com/document/d/1M2n7p8St4AeWc-frG-2o--is94GdP4qWg9y-LTi5qsQ/edit?usp=sharing' }
      ]
    },
    'er-ir-verbs': {
      drills: [
        { tense: 'presente', group: 'regular-er', label: 'Drill: -ER verbs in present' },
        { tense: 'presente', group: 'regular-ir', label: 'Drill: -IR verbs in present' }
      ],
      decks: ['verbosEr', 'verbosIr'],
      pdfs: [],
      links: [
        { label: 'Verb conjugation review and translation into English (all verbs)', url: 'https://docs.google.com/document/d/1qRFMfBsclluSTYjknfi1tAuuKT2u4V1e0Fq37-EqaJU/edit?usp=sharing' },
        { label: "ER/IR verbs: Spanish→English sentences", url: 'https://docs.google.com/document/d/1VevaHKC0q-CyrA71Zh-XbIQ_PPx38dGcjKdh1ea34bo/edit?usp=sharing' },
        { label: "ER/IR verbs: English→Spanish sentences", url: 'https://docs.google.com/document/d/1lO9-moB3jRMh5DYf_wdnr9BxZrYF5r3uhZXT6xmOvHs/edit?usp=sharing' },
        { label: "To-do list: ER/IR verbs", url: 'https://docs.google.com/document/d/11evGY2XMa9dPtycCsg1EzaSYnYWqq9kBYICJYsSImXc/edit?usp=sharing' },
        { label: "ER/IR verb word search", url: 'https://docs.google.com/document/d/1feQ9hQSb4NDtr-B3cOHdAGBCW6nHzi0uATwm7r54mN4/edit?usp=sharing' },
        { label: "ER/IR crossword", url: 'https://docs.google.com/document/d/1J0fsVwSSoAqpVNH0nsd7TSjcVTk2ExxlXr-hr7z2E3s/edit?usp=sharing' },
        { label: "Regular present tense verb conjugation", url: 'https://docs.google.com/document/d/1nIgr2fgbDuWdV8WmUNHv6OPukhQm3MwmPM-mKD1j_H8/edit?usp=sharing' },
        { label: "ER/IR verbs in the present tense", url: 'https://docs.google.com/document/d/1qsSMepUYIgHwAZdJNDARA1YTrr_bZFvRd_YVkO-RYqA/edit?usp=sharing' },
        { label: "ER/IR verbs vocab list", url: 'https://docs.google.com/document/d/1c8sdCm_lsPFgGjHTxFutMwbaQmoM1CMBvFZrxbQKCDY/edit?usp=sharing' }
      ]
    },
    'ser-vs-estar': {
      decks: ['profesiones'],
      drills: [{ tense: 'serestar', group: 'all', label: 'Drill: Ser vs. Estar (sentence prompts)' }],
      pdfs: [],
      links: [
        { label: 'Ser & estar conjugation practice (intro — drilling forms only, no mixing)', url: 'https://docs.google.com/document/d/1Dx8Wp2ID-rmXuMJqDGFNCCmJDx8hz0OAUI2HciI4Ag4/edit?usp=sharing' },
        { label: 'Ser vs. estar translation practice (English → Spanish)', url: 'https://docs.google.com/document/d/1U_jSu69OnjQ1RJlU7fQgCNR7mtvwnga-Yk9htQbEcfY/edit?usp=sharing' },
        { label: "Adjectives with ser", url: 'https://docs.google.com/document/d/1iiOhhv90nNPO4hTNj3d99nfRqEacqdLK0gP17Bxz_uE/edit?usp=sharing' },
        { label: "Ser/Estar and adjectives bell work", url: 'https://docs.google.com/document/d/1ZmNRIY5xmUmNXSkuWdu61eiwj5El8KuZ-Eq51QeGPUA/edit?usp=sharing' },
        { label: "Ser conjugations practice (extended)", url: 'https://docs.google.com/document/d/1Ar3SmKew8v8vdnuwghnh7T5YAdPbNemcQuuCbo8OI0s/edit?usp=sharing' },
        { label: "Ser/Estar conjugation tossing paper activity", url: 'https://docs.google.com/document/d/1CxSg08k2AN4NN9F9eGG-_-p63QXMDYYP2-1ni-ezrfs/edit?usp=sharing' }
      ]
    },
    'adjective-agreement': {
      games: ['adjectives'],
      decks: ['adjetivos', 'colores', 'ropa', 'animales'],
      pdfs: [],
      links: [
        { label: "Adjectives with ser", url: 'https://docs.google.com/document/d/1iiOhhv90nNPO4hTNj3d99nfRqEacqdLK0gP17Bxz_uE/edit?usp=sharing' },
        { label: "Articles and Adjectives Rotations", url: 'https://docs.google.com/document/d/1bDhRIhdYG089aX1pBnQHIIDRqt5kRYy-3Y2XWY9EX0c/edit?usp=sharing' }
      ]
    },
    'weather': {
      decks: ['tiempo'],
      games: ['weather'],
      pdfs: [],
      links: [
        { label: "Pronunciation guide: Days, months, weather, seasons", url: 'https://docs.google.com/document/d/1X-hfLc8Co3tfr7xNG40nq9LfuleW33kvfC2E3W519eg/edit?usp=sharing' },
        { label: "Weather, seasons, time, dates Peardeck Golf", url: 'https://docs.google.com/presentation/d/1kYKhbi8IdqsqMWSBqxlTAI4Hcuq5eEhqYNcd7kFbCAg/edit?usp=sharing' }
      ]
    },
    'gustar': {
      decks: ['gustar', 'emociones', 'comida', 'deportes'],
      pdfs: [],
      links: [
        { label: 'Food & drinks crossword', url: 'https://docs.google.com/document/d/13jhLECAkJluBxfehEL0vp9NgAjsiUtj9eljuEEP8nD0/edit?usp=sharing' },
        { label: "Likes/Loves/Hates slideshow", url: 'https://docs.google.com/document/d/12oJppGFWdxFJrIaAA5sviiFCq2U9X5B9bhdmybu3W7w/edit?usp=sharing' },
        { label: "Likes/Loves/Hates pre-list (English)", url: 'https://docs.google.com/document/d/1fDVYaLsEc_igMsDTpUwaWLvEiTusxgFTBTN3ZqPUCYk/edit?usp=sharing' },
        { label: "Like, Love, Hate notes & activities", url: 'https://docs.google.com/document/d/15fRY1g-xMHe6b-VBg3wwrj6p1xlzPtJJr1MBQ8JoMhE/edit?usp=sharing' },
        { label: "Gustar-like verbs practice", url: 'https://docs.google.com/document/d/1J6A4K9h-Svs6cSVIiUapv0NcLebtAFOxE0LTy1NvRW4/edit?usp=sharing' }
      ]
    },
    'indefinites': {
      decks: ['cotidiano', 'adverbios'],
      pdfs: [],
      links: []
    },
    'stem-changers': {
      drills: [
        { tense: 'presente', group: 'stem-all', label: 'Drill: All stem-changers in present' },
        { tense: 'presente', group: 'stem-eie', label: 'Drill: e→ie stem-changers' },
        { tense: 'presente', group: 'stem-oue', label: 'Drill: o→ue stem-changers' },
        { tense: 'presente', group: 'stem-ei', label: 'Drill: e→i stem-changers' }
      ],
      decks: ['peru', 'argentina', 'colombia'],
      pdfs: [],
      links: [
        { label: 'Stem-changers translation practice (Spanish ↔ English, all present)', url: 'https://docs.google.com/document/d/12QWe-LSDlloyIwGTiPA1QDvrmxbNff6W4XRTMx-FtPE/edit?usp=sharing' },
        { label: "ALL stem-changers conjugation worksheet", url: 'https://docs.google.com/document/d/1rWMFGjQS-1CpesfuHZM7TejW1xz-PcmBvDKOqaTGqpc/edit?usp=sharing' },
        { label: "Conjugate all verbs together (with stem-changers)", url: 'https://docs.google.com/document/d/1qRFMfBsclluSTYjknfi1tAuuKT2u4V1e0Fq37-EqaJU/edit?usp=sharing' },
        { label: "E→IE stem-changers worksheet", url: 'https://docs.google.com/document/d/1L5rXmc4mVrDARvfoLRlVYBAtyZ3fTaQDx5SfTfB7ys8/edit?usp=sharing' },
        { label: "E→IE: list of infinitives", url: 'https://docs.google.com/document/d/1Yne8gNr-ZI8y496ydw8S_ahV6oWmeIBUyJiGQGnlqMw/edit?usp=sharing' },
        { label: "E→IE: translations", url: 'https://docs.google.com/document/d/1jXAXUmN1K4oVVBwT5aDo2YWmfJoSFSJkHatBY3y3sHg/edit?usp=sharing' },
        { label: "E→I: list of stem-changers", url: 'https://docs.google.com/document/d/11yKfEhu7oc5aWD8UXrQXKYRuBmOCKDcm7FA2143TP8k/edit?usp=sharing' },
        { label: "E→I: conjugate", url: 'https://docs.google.com/document/d/1QcHHCoRLoW5Zc3ytLsIgjpANj7wCWxbXXU_xXj6EGsE/edit?usp=sharing' },
        { label: "E→I: translations", url: 'https://docs.google.com/document/d/1DJNQagRImTUgxBEWV0TBMElwvk4m_SxvD7l-sfXWw_A/edit?usp=sharing' },
        { label: "O→UE conjugation practice", url: 'https://docs.google.com/document/d/18d3cStdw0LnYF3r54Qrr_FInacXv9ECsbij4_6sIFjs/edit?usp=sharing' },
        { label: "O→UE: list of infinitives", url: 'https://docs.google.com/document/d/1hYAu7Wxh83XAFm-EJUpp68YDLM-hdSTL-PD4_GD9_js/edit?usp=sharing' },
        { label: "O→UE: translations", url: 'https://docs.google.com/document/d/1S1PvSa9R538mTwJ4mjjW_MWdzTbDCmx0t_z2WIWDNuY/edit?usp=sharing' },
        { label: "Jugar conjugation", url: 'https://docs.google.com/document/d/1Er_nHxeUpaGxIT3hsrVT8rUsUnJFofYp2Pbpsp9-jeE/edit?usp=sharing' },
        { label: "Jugar activities & vocab", url: 'https://docs.google.com/document/d/1L4xuP7iVUvarDu4oiq9RTW80FwWSCz32dSLIaFfUQYc/edit?usp=sharing' }
      ]
    },
    'ir-dar-ver': {
      drills: [{ tense: 'presente', group: 'irregular', label: 'Drill: Irregular verbs in present' }],
      pdfs: [],
      links: [
        { label: 'Tener, ir, dar, ver conjugation (present tense, with English translation)', url: 'https://docs.google.com/document/d/15z8YlHMC5HpDVqgrvEQXWjEgr2p6hvabpj5NZw9JHgc/edit?usp=sharing' },
        { label: "IR and DAR present tense + Spanish→English translations", url: 'https://docs.google.com/document/d/1_5CvzJFF0Lm4mocjYuwGZmfdVO9auYxdY8WH4rCpRt4/edit?usp=sharing' },
        { label: "Contractions, IR and DAR — bellwork Form A and B", url: 'https://docs.google.com/document/d/1OVDZC6BtS5gSiAOblMrnbqzbXwnBTuI8jGQ28k5bKjY/edit?usp=sharing' },
        { label: "IR and Venir English→Spanish sentences", url: 'https://docs.google.com/document/d/1wuJ-sMrdRii52wWKiy8WywHM_MJC7YwWoKp_ZPcNdMI/edit?usp=sharing' },
        { label: "IR and DAR practice", url: 'https://docs.google.com/document/d/1PvOU35Ce-bjcuzwn2oFBAuIKYiyG502G4b9AypSK-L0/edit?usp=sharing' }
      ]
    },
    'ir-a-infinitive': {
      drills: [{ tense: 'futuro', group: 'all', label: 'Drill: Future tense (compare with ir+a+inf)' }],
      pdfs: [],
      links: [
        { label: "Ir + a + infinitive practice", url: 'https://docs.google.com/document/d/1yXFOWmZng8aFm5slKAbj4qed_nmoi9urNM-PwWvNZxo/edit?usp=sharing' }
      ]
    },
    'tener-venir-idioms': {
      drills: [{ tense: 'presente', group: 'irregular', label: 'Drill: Irregular verbs (includes tener & venir)' }],
      decks: ['teneridioms', 'emociones'],
      pdfs: [],
      links: [
        { label: 'Tener & venir conjugation and translation practice', url: 'https://docs.google.com/document/d/1kgaO3MW0fWQY1gm5iT8ZwdXxFfJSAPYqj-UDn2ewH6I/edit?usp=sharing' },
        { label: 'Tener, ir, dar, ver conjugation (present tense, with English translation)', url: 'https://docs.google.com/document/d/15z8YlHMC5HpDVqgrvEQXWjEgr2p6hvabpj5NZw9JHgc/edit?usp=sharing' },
        { label: "To-do list: Tener/Venir/Ir/Tener idioms", url: 'https://docs.google.com/document/d/1WqqBlQK6SuIxjJBLyyAHGh-qsJwSHYGaxGtwwLahvOI/edit?usp=sharing' },
        { label: "Vocab list: Verbs like tener/venir/dar/ir + idioms", url: 'https://docs.google.com/document/d/1Vz8XYHnsTGswSSDXFiqSk8qU3ny_Txcb4jg_pueA92I/edit?usp=sharing' },
        { label: "Verbs like tener: secret symbols activity", url: 'https://docs.google.com/document/d/1z7rG_tOr1n8olRqKIlFtm9l3EejRs61ZzO07fcR-evo/edit?usp=sharing' },
        { label: "To-do list: La familia/Tener/Venir/Ir/Tener idioms", url: 'https://docs.google.com/document/d/1LtvR65dXrk96tWLyxrNCxTNyslINCh_Yko4jRXdrZi8/edit?usp=sharing' },
        { label: "Celebrity Habla speaking activity", url: 'https://docs.google.com/document/d/1AuftsWkezUp0w7-UEU-a-Jpj2Lp3sTHS4Gedqn6JEgs/edit?usp=sharing' }
      ]
    },
    'phrases-of-need-obligation': {
      drills: [{ tense: 'presente', group: 'irregular', label: 'Drill: Tener (used in tener que + infinitive)' }],
      decks: ['cotidiano'],
      pdfs: [],
      links: [
        { label: "Phrases of obligation, necessity, future", url: 'https://docs.google.com/document/d/1yUfHAO1ipNrIqYic0Ooj5GNqIeDzmhRhnX5_Dmuk7oc/edit?usp=sharing' },
        { label: "Tener, Tener que, Hay que sentence writing (Form A)", url: 'https://docs.google.com/document/d/1N4Bfe6CyAndEr9G7_MOXA-U_hklx6KmyGPKKzD7l2qo/edit?usp=sharing' },
        { label: "Tener, Tener que, Hay que sentence writing (Form B)", url: 'https://docs.google.com/document/d/12aE8P0-6Ku7DBGBo_KY4dmOGK5c4mfeuw8ftqPej6UI/edit?usp=sharing' },
        { label: "TENER QUE phrases of obligation", url: 'https://docs.google.com/document/d/1q0BHe7aOkz52fSWQ0N5zVGLnYOkrO9tGeMqP0eIF7QM/edit?usp=sharing' },
        { label: "HAY QUE infinitives practice", url: 'https://docs.google.com/document/d/1Nh_1OFEVWCAoZegygRlczU72AdF1uFmnj2beK2mcMfI/edit?usp=sharing' }
      ]
    },
    'possessive-adjectives': {
      drills: [{ tense: 'possessives', group: 'all', label: 'Drill: Possessive adjectives (mi, tu, su, nuestro)' }],
      decks: ['familia'],
      pdfs: [],
      links: [
        { label: 'Possessive adjectives practice (with family terms)', url: 'https://docs.google.com/document/d/1WFD-cmcJiZiSA5jKb8JSFPBfRPJ1fijP2UgF5KW_XkI/edit?usp=sharing' },
        { label: "Worksheet 1: Possessive Adjectives", url: 'https://docs.google.com/document/d/17YGlBW8jzvlz4du981-jz8zA3NB0WWZxpQicT6yIyxs/edit?usp=sharing' },
        { label: "Worksheet 2: Possessive Adjectives", url: 'https://docs.google.com/document/d/1NxTJBNm9o7dCN66byXMO44s4ncNbDxu60Ge4mxTDzvM/edit?usp=sharing' }
      ]
    },
    'tu-vs-usted': {
      games: ['tu-usted'],
      drills: [{ tense: 'tu-usted', group: 'all', label: 'Drill: Tú vs. Usted (social scenarios)' }],
      pdfs: [],
      links: []
    },
    'numbers-0-100': {
      decks: ['numeros'],
      games: ['numbers-small', 'numbers-mid'],
      pdfs: [],
      links: [
        { label: 'Numbers 0–100 pronunciation guide (for English speakers)', url: 'https://docs.google.com/document/d/1h8xo16VPf3sbB9SpaRsnMvNGK0oU_94NLSga2anbb6M/edit?usp=sharing' },
        { label: 'Numbers 0–100 practice', url: 'https://docs.google.com/document/d/1uqLpUKrRUan29RVUtWrM4DYn1noNb6JPqiOuA2X0nkc/edit?usp=sharing' },
        { label: "Vocab list: 0-100, days, months, weather", url: 'https://docs.google.com/document/d/1lyswookL1w3kqwr9Fy_ShD1D6AetanS8KU065roYvK8/edit?usp=sharing' },
        { label: "Spanish Numbers 0–100 Worksheet", url: 'https://docs.google.com/document/d/1R-jcSCaILTjkflHFHOm5CDWN9fvaebBXxZ7UHc80ejQ/edit?usp=sharing' },
        { label: "Days, Months, and Numbers 0-100 Practice", url: 'https://docs.google.com/document/d/1Pc523fzFc9jDisicgMi4RaE_T6fSZ4V-9I4zpxc2-dU/edit?usp=sharing' },
        { label: "To-do list: numbers 0-100, days, dates, weather, seasons", url: 'https://docs.google.com/document/d/1uXuBs6gHDPozyxGu-_vpIaAEW-tmR46Hl8U3Mh4gtYE/edit?usp=sharing' },
        { label: "Notes: #s 0–100", url: 'https://docs.google.com/document/d/1foDyYogQ3IoUG_Wd8d2j7VAY_Kb_Y5LbEma01ZoZsWc/edit?usp=sharing' },
        { label: "Números actividad", url: 'https://docs.google.com/document/d/1S4a8qAgMRr1k4xaQ-d-EIzMsII-qGkX6CxrQtHp0qj8/edit?usp=sharing' },
        { label: "To-do list: days, months, dates, #s 0–100", url: 'https://docs.google.com/document/d/1Uqfxs5HHgWkMXoyE9qKC1_glEGOPT0PW3RDvLkjK10E/edit?usp=sharing' },
        { label: "Crossword: days, dates, weather, seasons, #s 0–100 (PDF)", url: 'https://drive.google.com/file/d/1m7S1FF3zct8yglg_iKQ79vuBrGAEXTaJ/view?usp=sharing' }
      ]
    },
    'mente-adverbs': {
      decks: ['adverbios', 'adjetivos'],
      pdfs: [],
      links: []
    },
    'yo-go-verbs': {
      drills: [{ tense: 'presente', group: 'irregular', label: 'Drill: Irregular verbs in present (includes yo-gos)' }],
      pdfs: [],
      links: []
    },
    'time-and-dates': {
      decks: ['hora', 'calendario'],
      games: ['time', 'dates', 'days'],
      pdfs: [],
      links: [
        { label: 'Days of the week and dates practice', url: 'https://docs.google.com/document/d/18Vc0G6n39j9rdzhZem0kUjGctI8LroAvCCOX1Wgos30/edit?usp=sharing' },
        { label: "Pronunciation guide: Days, months, weather, seasons", url: 'https://docs.google.com/document/d/1X-hfLc8Co3tfr7xNG40nq9LfuleW33kvfC2E3W519eg/edit?usp=sharing' },
        { label: "Days, months, numbers 0-100 practice", url: 'https://docs.google.com/document/d/1Pc523fzFc9jDisicgMi4RaE_T6fSZ4V-9I4zpxc2-dU/edit?usp=sharing' },
        { label: "Telling time and dates (practice)", url: 'https://docs.google.com/document/d/1ZjHMxLdb-I6yJ1EaeKtPKvUZ-U-_CXKNuSH8SasClv8/edit?usp=sharing' }
      ]
    },
    'nationalities': {
      games: ['adjectives'],
      pdfs: [],
      links: [
        { label: "Nationalities with ser/estar rotations", url: 'https://docs.google.com/document/d/1jjX-FYLROsvUCHfXjG9nqmGAtZjVhyBjGsdbJkiO__s/edit?usp=sharing' },
        { label: "Practice with nationalities", url: 'https://docs.google.com/document/d/1DbnSxU_WpIDl1osEECULJGw9HQOtu-qHJmcVXHTdYmo/edit?usp=sharing' },
        { label: "Spanish-speaking nations: full assignments doc", url: 'https://docs.google.com/document/d/1Lf8T_WZ1RZzcL1MbibcauvDQKufZhg1z0-l71nh7Tvo/edit?usp=sharing' },
        { label: "Spanish-speaking nations pronunciation guide", url: 'https://docs.google.com/document/d/1iMPuUhNAE6kEKHiZSyI2cxWBEkBsFqizV5Ff5RcGfzk/edit?usp=sharing' },
        { label: "Spanish-speaking countries crossword (PDF)", url: 'https://drive.google.com/file/d/1R51JBgXIAN3UE6nQsJ8PyD0jvw4uvit6/view?usp=sharing' },
        { label: "Spanish-speaking countries map (PDF)", url: 'https://drive.google.com/file/d/1gbFKII6-WWivZGu0TF__iYjFanpZ02sy/view?usp=sharing' }
      ]
    },
    'reflexive-verbs': {
      games: ['reflexives'],
      drills: [{ tense: 'presente', group: 'reflexive', label: 'Drill: Reflexive verbs in present' }],
      decks: ['rutina', 'cuerpo'],
      pdfs: [],
      links: []
    },
    'direct-object-pronouns': {
      games: ['object-pronouns'],
      drills: [{ tense: 'pronouns', group: 'all', label: 'Drill: Rewrite sentences with object pronouns' }],
      pdfs: [],
      links: []
    },
    'indirect-object-pronouns': {
      games: ['object-pronouns'],
      drills: [{ tense: 'pronouns', group: 'all', label: 'Drill: Rewrite sentences with object pronouns' }],
      pdfs: [],
      links: []
    },
    'double-object-pronouns': {
      games: ['object-pronouns'],
      drills: [{ tense: 'pronouns', group: 'all', label: 'Drill: Rewrite sentences with object pronouns' }],
      pdfs: [],
      links: []
    },
    // ===== PRETERITE LESSONS =====
    'preterite-regular': {
      drills: [
        { tense: 'preterito', group: 'regular-ar', label: 'Drill: Regular -AR verbs in preterite' },
        { tense: 'preterito', group: 'regular-er', label: 'Drill: Regular -ER verbs in preterite' },
        { tense: 'preterito', group: 'regular-ir', label: 'Drill: Regular -IR verbs in preterite' }
      ],
      decks: ['verbosAr', 'verbosEr', 'verbosIr'],
      readings: ['peru-selva', 'argentina-viaje', 'mexico-pais'],
      pdfs: [],
      links: []
    },
    'preterite-cargarzar': {
      drills: [{ tense: 'preterito', group: 'all', label: 'Drill: Preterite (all verbs — includes -car/-gar/-zar)' }],
      pdfs: [],
      links: []
    },
    'preterite-leer-pattern': {
      drills: [{ tense: 'preterito', group: 'irregular', label: 'Drill: Preterite irregulars (includes leer/oír/huir/construir)' }],
      pdfs: [],
      links: []
    },
    'preterite-ir-dar-ser-ver': {
      drills: [{ tense: 'preterito', group: 'irregular', label: 'Drill: Preterite irregulars (includes ir/dar/ser/ver)' }],
      readings: ['peru-selva', 'argentina-viaje', 'argentina-gaucho'],
      pdfs: [],
      links: []
    },
    'preterite-stem-ir': {
      drills: [{ tense: 'preterito', group: 'stem-all', label: 'Drill: Stem-changing verbs in preterite' }],
      pdfs: [],
      links: []
    },
    'preterite-pattern-irregulars': {
      drills: [{ tense: 'preterito', group: 'irregular', label: 'Drill: Preterite irregulars (U/I/J stems)' }],
      readings: ['peru-papa', 'argentina-gaucho', 'colombia-biodiversidad'],
      pdfs: [],
      links: []
    },
    // ===== IMPERFECT LESSONS =====
    'imperfect-regular': {
      drills: [
        { tense: 'imperfecto', group: 'regular-ar', label: 'Drill: Regular -AR verbs in imperfect' },
        { tense: 'imperfecto', group: 'regular-er', label: 'Drill: Regular -ER verbs in imperfect' },
        { tense: 'imperfecto', group: 'regular-ir', label: 'Drill: Regular -IR verbs in imperfect' }
      ],
      decks: ['verbosAr', 'verbosEr', 'verbosIr'],
      readings: ['argentina-gaucho', 'colombia-biodiversidad', 'peru-papa'],
      pdfs: [],
      links: []
    },
    'imperfect-irregulars': {
      drills: [{ tense: 'imperfecto', group: 'irregular', label: 'Drill: Imperfect irregulars (ir/ser/ver)' }],
      readings: ['argentina-gaucho', 'colombia-biodiversidad'],
      pdfs: [],
      links: []
    },
    // ===== CAPSTONE CONTRAST LESSON =====
    'preterite-vs-imperfect': {
      drills: [
        { tense: 'preterito', group: 'all', label: 'Drill: All preterite forms' },
        { tense: 'imperfecto', group: 'all', label: 'Drill: All imperfect forms' },
        { tense: 'mixed', group: 'all', label: 'Drill: Mixed tenses (preterite + imperfect challenge)' }
      ],
      readings: ['argentina-viaje', 'argentina-gaucho', 'peru-selva', 'peru-papa', 'colombia-biodiversidad'],
      pdfs: [],
      links: [
        { label: 'Verb conjugation review and translation into English (all verbs)', url: 'https://docs.google.com/document/d/1qRFMfBsclluSTYjknfi1tAuuKT2u4V1e0Fq37-EqaJU/edit?usp=sharing' }
      ]
    },
    // ===== COMMANDS FAMILY =====
    'tu-commands': {
      decks: ['mandatos'],
      drills: [
        { tense: 'tu-commands', group: 'positive-regular', label: 'Drill: Affirmative tú · regular verbs' },
        { tense: 'tu-commands', group: 'positive-irregular', label: 'Drill: Affirmative tú · irregulars (ven, di, sal, haz, ten, ve, pon, sé)' },
        { tense: 'tu-commands', group: 'negative-regular', label: 'Drill: Negative tú · regular verbs' },
        { tense: 'tu-commands', group: 'negative-irregular', label: 'Drill: Negative tú · irregulars' },
        { tense: 'tu-commands', group: 'reflexive', label: 'Drill: Reflexive tú commands (affirmative + negative)' },
        { tense: 'tu-commands', group: 'all', label: 'Drill: All tú commands mixed (challenge)' }
      ],
      decks: ['cotidiano', 'salon', 'verbosAr', 'verbosEr', 'verbosIr'],
      writingTopics: ['give-advice'],
      speakingTopics: ['teach-something-scaffolded', 'bossy-sibling'],
      listening: ['d-i-17-cmd', 'd-i-18-cmd', 'd-i-19-cmd', 'd-i-20-cmd'],
      pdfs: [],
      links: []
    },
    'usted-commands': {
      decks: ['mandatos'],
      drills: [
        { tense: 'usted-commands', group: 'positive-regular', label: 'Drill: Affirmative usted · regular verbs' },
        { tense: 'usted-commands', group: 'positive-irregular', label: 'Drill: Affirmative usted · irregulars (dé, vaya, sea, esté, sepa)' },
        { tense: 'usted-commands', group: 'negative-regular', label: 'Drill: Negative usted · regular verbs' },
        { tense: 'usted-commands', group: 'negative-irregular', label: 'Drill: Negative usted · irregulars' },
        { tense: 'usted-commands', group: 'ustedes-mixed', label: 'Drill: Ustedes (plural) commands mixed' },
        { tense: 'usted-commands', group: 'all', label: 'Drill: All usted/ustedes mixed (challenge)' }
      ],
      decks: ['cotidiano', 'salon', 'verbosAr', 'verbosEr', 'verbosIr'],
      writingTopics: ['formal-letter-request'],
      speakingTopics: ['taxi-driver-scaffolded', 'restaurant-formal-open', 'tour-guide-scaffolded'],
      listening: ['d-i-21-ud', 'd-i-22-ud', 'd-i-23-ud', 'd-i-24-ud'],
      pdfs: [],
      links: []
    },
    'reflexive-commands': {
      decks: ['mandatos'],
      drills: [
        { tense: 'reflexive-commands', group: 'aff-tu', label: 'Drill: Affirmative tú · reflexive verbs' },
        { tense: 'reflexive-commands', group: 'neg-tu', label: 'Drill: Negative tú · reflexive verbs' },
        { tense: 'reflexive-commands', group: 'aff-usted', label: 'Drill: Affirmative usted · reflexive verbs' },
        { tense: 'reflexive-commands', group: 'neg-usted', label: 'Drill: Negative usted · reflexive verbs' },
        { tense: 'reflexive-commands', group: 'ustedes', label: 'Drill: Ustedes (plural) reflexive commands' },
        { tense: 'reflexive-commands', group: 'all', label: 'Drill: All reflexive commands mixed (challenge)' }
      ],
      decks: ['cotidiano', 'salon', 'cuerpo'],
      writingTopics: ['guest-house-rules'],
      speakingTopics: ['morning-routine-coach-scaffolded', 'gym-coach-open'],
      listening: ['d-i-25-ref', 'd-i-26-ref', 'd-i-27-ref', 'd-i-28-ref'],
      pdfs: [],
      links: []
    },
    'commands-single-pronouns': {
      drills: [
        { tense: 'object-commands', group: 'aff-tu-direct', label: 'Drill: Affirmative tú + direct object (lo, la, los, las)' },
        { tense: 'object-commands', group: 'neg-tu-direct', label: 'Drill: Negative tú + direct object pronouns' },
        { tense: 'object-commands', group: 'aff-tu-indirect', label: 'Drill: Affirmative tú + indirect object (me, te, le, nos, les)' },
        { tense: 'object-commands', group: 'neg-tu-indirect', label: 'Drill: Negative tú + indirect object pronouns' },
        { tense: 'object-commands', group: 'usted-mixed', label: 'Drill: Usted commands + pronouns (mixed)' },
        { tense: 'object-commands', group: 'all', label: 'Drill: All commands + pronouns mixed (challenge)' }
      ],
      decks: ['cotidiano', 'salon', 'comida'],
      writingTopics: ['recipe-with-pronouns'],
      speakingTopics: ['lost-object-scaffolded', 'parent-instructions-open'],
      listening: ['d-i-29-obj', 'd-i-30-obj', 'd-i-31-obj', 'd-i-32-obj'],
      pdfs: [],
      links: []
    },
    'commands-double-pronouns': {
      drills: [
        { tense: 'double-commands', group: 'aff-tu-easy', label: 'Drill: Affirmative tú · me/te/nos + lo/la (no le→se)' },
        { tense: 'double-commands', group: 'neg-tu-easy', label: 'Drill: Negative tú · me/te/nos + lo/la' },
        { tense: 'double-commands', group: 'aff-tu-se', label: 'Drill: Affirmative tú · le→se + lo/la' },
        { tense: 'double-commands', group: 'neg-tu-se', label: 'Drill: Negative tú · le→se + lo/la' },
        { tense: 'double-commands', group: 'usted-double', label: 'Drill: Usted + 2 pronouns (mixed)' },
        { tense: 'double-commands', group: 'all', label: 'Drill: All double-pronoun commands mixed (challenge)' }
      ],
      decks: ['cotidiano', 'familia', 'cumpleanos'],
      writingTopics: ['event-planner-notes'],
      speakingTopics: ['errand-delegation-scaffolded', 'gift-shopping-open'],
      listening: ['d-i-33-dbl', 'd-i-34-dbl', 'd-i-35-dbl', 'd-i-36-dbl'],
      pdfs: [],
      links: []
    },
    'saber-conocer-pedir-preguntar': {
      drills: [
        { tense: 'confusable-verbs', group: 'saber-conocer-present', label: 'Drill: Saber vs. Conocer · present tense' },
        { tense: 'confusable-verbs', group: 'pedir-preguntar-present', label: 'Drill: Pedir vs. Preguntar · present tense' },
        { tense: 'confusable-verbs', group: 'all-present', label: 'Drill: All 4 verbs · present tense (mixed)' },
        { tense: 'confusable-verbs', group: 'past-meaning-shifts', label: 'Drill: Past tense meaning shifts (conocí/supe)' },
        { tense: 'confusable-verbs', group: 'all', label: 'Drill: All confusable verbs mixed (challenge)' }
      ],
      decks: ['cotidiano', 'familia', 'saludos', 'salon'],
      writingTopics: ['confusable-pairs-story'],
      speakingTopics: ['interview-stranger-scaffolded', 'meeting-someone-open'],
      listening: ['d-i-37-scpp', 'd-i-38-scpp', 'd-i-39-scpp', 'd-i-40-scpp'],
      pdfs: [],
      links: [
        { label: 'Handout: Saber vs. Conocer — present tense conjugation + translations both ways', url: 'https://docs.google.com/document/d/1fNlr6blvjzSVpiQk01TtHPEGLAJIvW0hOTAiYrDYz_s/edit?usp=drivesdk' }
      ]
    },
    'pronouns-progressives': {
      drills: [
        { tense: 'progressives-pronouns', group: 'direct-objects', label: 'Drill: Direct object + progressive' },
        { tense: 'progressives-pronouns', group: 'indirect-objects', label: 'Drill: Indirect object + progressive' },
        { tense: 'progressives-pronouns', group: 'reflexives', label: 'Drill: Reflexive + progressive' },
        { tense: 'progressives-pronouns', group: 'double-pronouns', label: 'Drill: Double pronoun + progressive (with le→se)' },
        { tense: 'progressives-pronouns', group: 'all', label: 'Drill: All pronouns + progressive mixed (challenge)' }
      ],
      decks: ['cotidiano', 'salon', 'cuerpo'],
      writingTopics: ['right-now-scene'],
      speakingTopics: ['whats-happening-scaffolded', 'live-narration-open'],
      listening: ['d-i-41-prog', 'd-i-42-prog', 'd-i-43-prog', 'd-i-44-prog'],
      pdfs: [],
      links: []
    },
    'possessive-pronouns': {
      drills: [
        { tense: 'possessive-pronouns', group: 'mine-yours', label: 'Drill: Mine / yours (mío, tuyo)' },
        { tense: 'possessive-pronouns', group: 'his-hers-theirs', label: 'Drill: His / hers / theirs (suyo)' },
        { tense: 'possessive-pronouns', group: 'ours', label: 'Drill: Ours (nuestro, all 4 forms)' },
        { tense: 'possessive-pronouns', group: 'after-ser', label: 'Drill: After ser (bare form, no article)' },
        { tense: 'possessive-pronouns', group: 'all', label: 'Drill: All possessive pronouns mixed (challenge)' }
      ],
      decks: ['cotidiano', 'familia', 'cuerpo', 'salon'],
      writingTopics: ['my-family-vs-theirs'],
      speakingTopics: ['compare-belongings-scaffolded', 'whose-is-this-open'],
      listening: ['d-i-45-pos', 'd-i-46-pos', 'd-i-47-pos', 'd-i-48-pos'],
      pdfs: [],
      links: []
    },
    // ===== SPANISH 3 / ADVANCED =====
    'conditional': {
      drills: [
        { tense: 'condicional', group: 'all', label: 'Drill: Conditional (all verbs)' },
        { tense: 'condicional', group: 'irregular', label: 'Drill: Conditional irregulars' }
      ],
      pdfs: [],
      links: []
    },
    'present-perfect': {
      decks: ['verbosAr', 'verbosEr', 'verbosIr'],
      drills: [
        { tense: 'perfecto', group: 'all', label: 'Drill: Present perfect (haber + past participle)' }
      ],
      pdfs: [],
      links: []
    },
    'present-subjunctive': {
      decks: ['verbosAr', 'verbosEr', 'verbosIr'],
      drills: [
        { tense: 'subjuntivo', group: 'all', label: 'Drill: Present subjunctive (all verbs)' },
        { tense: 'subjuntivo', group: 'irregular', label: 'Drill: Present subjunctive irregulars (DISHES + yo-go)' }
      ],
      pdfs: [],
      links: []
    },
    'verb-transitivity': {
      decks: ['verbosAr', 'verbosEr', 'verbosIr'],
      drills: [
        { tense: 'pronouns', group: 'all', label: 'Drill: Practice with object pronouns' }
      ],
      pdfs: [],
      links: []
    },
    'participles-as-adjectives': {
      decks: ['cotidiano', 'salon', 'adjetivos'],
      pdfs: [],
      links: []
    },
    'comparatives-superlatives': {
      decks: ['adjetivos', 'familia', 'comida'],
      readings: ['peru-lima', 'mexico-pais', 'colombia-paisaje'],
      pdfs: [],
      links: []
    },
    'past-perfect': {
      decks: ['verbosAr', 'verbosEr', 'verbosIr'],
      drills: [
        { tense: 'perfecto', group: 'all', label: 'Drill: Present perfect (for compound-tense practice)' }
      ],
      pdfs: [],
      links: []
    },
    'future-perfect': {
      decks: ['verbosAr', 'verbosEr', 'verbosIr'],
      drills: [
        { tense: 'perfecto', group: 'all', label: 'Drill: Present perfect (for compound-tense practice)' }
      ],
      pdfs: [],
      links: []
    },
    'past-subjunctive': {
      decks: ['verbosAr', 'verbosEr', 'verbosIr'],
      drills: [
        { tense: 'preterito', group: 'all', label: 'Drill: Preterite (the foundation of past subjunctive)' },
        { tense: 'subjuntivo', group: 'all', label: 'Drill: Present subjunctive (for sequence-of-tenses contrast)' }
      ],
      readings: ['peru-papa', 'argentina-gaucho', 'colombia-biodiversidad'],
      pdfs: [],
      links: []
    },
    'pluperfect-subjunctive': {
      decks: ['verbosAr', 'verbosEr', 'verbosIr'],
      drills: [
        { tense: 'pluperfectsubj', group: 'all', label: 'Drill: Pluperfect subjunctive (hubiera + past participle)' },
        { tense: 'pluperfectsubj', group: 'irregular', label: 'Drill: Pluperfect subjunctive · irregular participles' },
        { tense: 'subjuntivo', group: 'all', label: 'Drill: Present subjunctive (for sequence-of-tenses contrast)' }
      ],
      readings: ['si-hubiera-sabido'],
      listening: ['d-a-11-plus', 'd-a-12-plus', 'd-a-13-plus', 'd-a-14-plus'],
      pdfs: [],
      links: []
    },
    'future-simple': {
      decks: ['verbosAr', 'verbosEr', 'verbosIr'],
      drills: [
        { tense: 'futuro', group: 'all', label: 'Drill: Simple future · all verbs' },
        { tense: 'futuro', group: 'irregular', label: 'Drill: Simple future · irregular stems' }
      ],
      pdfs: [],
      links: []
    },
    'por-para': {
      decks: ['preposiciones'],
      games: ['por-para'],
      pdfs: [],
      links: []
    }
  };

  const LESSONS = [
    // Lesson numbering: sequential positive integers (1..N) in array order, which
    // is also the display order on the Lessons page. Sp2/Sp3 lessons interleave near
    // the end (the level-filter UI handles that). Numbers are display-only — URLs,
    // LESSON_RESOURCES, and STATE.completedLessons all key off the lesson id — but
    // body text cross-references lessons by number, so renumbering means updating
    // every "Lesson N" mention too. Keep new lessons numbered in array order.
    {
      id: 'pronunciation-alphabet',
      num: '1',
      level: 'sp1',
      title: 'Pronunciation & the <em>alphabet</em>',
      tag: 'Start here · Foundations',
      summary: 'The Spanish alphabet, the five vowel sounds, and the letters that trip English speakers up. Read this first.',
      sections: [
        {
          heading: 'Why Spanish is "<em>easier</em>" to read than English',
          body: 'Spanish has a huge advantage for English speakers: it\'s <strong>phonetic</strong>. Once you learn the sound each letter makes, you can pronounce almost any word you see — no surprises, no silent letters (except one), no weird exceptions. English has "though, through, tough, thorough" all spelled almost the same but pronounced four different ways. Spanish doesn\'t do that to you.'
        },
        {
          heading: 'The Spanish <em>alphabet</em>',
          body: 'Spanish uses 27 letters — the same 26 as English, plus <strong>ñ</strong>. Each letter has a name (used when spelling out loud) and a sound (used in words). Don\'t confuse the two. The name of <em>j</em> is "jota" — but its sound is like English "h."',
          conjugation: [
            ['a', 'name: "ah"'],
            ['b', 'name: "be"'],
            ['c', 'name: "ce"'],
            ['d', 'name: "de"'],
            ['e', 'name: "e" (like "eh")'],
            ['f', 'name: "efe"'],
            ['g', 'name: "ge"'],
            ['h', 'name: "hache" (silent in words!)'],
            ['i', 'name: "i" (like "ee")'],
            ['j', 'name: "jota" (sounds like English h)'],
            ['k', 'name: "ka"'],
            ['l', 'name: "ele"'],
            ['m', 'name: "eme"'],
            ['n', 'name: "ene"'],
            ['ñ', 'name: "eñe" (Spanish-only letter)'],
            ['o', 'name: "o"'],
            ['p', 'name: "pe"'],
            ['q', 'name: "cu"'],
            ['r', 'name: "ere"'],
            ['s', 'name: "ese"'],
            ['t', 'name: "te"'],
            ['u', 'name: "u" (like "oo")'],
            ['v', 'name: "uve"'],
            ['w', 'name: "doble uve" (rare in Spanish)'],
            ['x', 'name: "equis"'],
            ['y', 'name: "ye" or "i griega"'],
            ['z', 'name: "zeta"']
          ]
        },
        {
          heading: 'The five <em>vowels</em> — your foundation',
          body: 'This is the single most important pronunciation rule in Spanish: <strong>each vowel has exactly ONE sound, always</strong>. No exceptions. This is the opposite of English, where "a" can sound like "cat," "father," "say," "about," or "all" depending on the word. Master these five vowels and you\'ve won half the pronunciation battle.',
          conjugation: [
            ['a', 'always "ah" — like "father" (casa, mamá, taco)'],
            ['e', 'always "eh" — like "bet" (mesa, tres, café)'],
            ['i', 'always "ee" — like "machine" (sí, libro, mi)'],
            ['o', 'always "oh" — like "for" (no, hola, ocho)'],
            ['u', 'always "oo" — like "boot" (tú, luna, uno)']
          ]
        },
        {
          heading: 'Vowels <em>never change</em>',
          body: 'In English, "make" and "mate" pronounce the "a" totally differently from "cat." In Spanish, the letter "a" sounds like "ah" in every word — every time. <em>casa, papa, mañana, llamada</em> — every "a" is the same sound. Same for the other four vowels. Once you internalize this, reading Spanish out loud becomes mechanical.'
        },
        {
          heading: 'Letters that <em>trip up</em> English speakers',
          body: 'Most Spanish consonants sound roughly like English. But a handful are completely different. Memorize these.',
          conjugation: [
            ['h', 'ALWAYS silent — <em>hola</em> sounds like "ola," <em>hace</em> like "ase"'],
            ['j', 'sounds like English "h" — <em>José</em> = "ho-SAY," <em>jugar</em> = "hoo-GAR"'],
            ['ll', 'sounds like English "y" (most regions) — <em>llamar</em> = "ya-MAR," <em>pollo</em> = "PO-yo"'],
            ['ñ', 'sounds like "ny" in "canyon" — <em>mañana</em> = "ma-NYA-na," <em>niño</em> = "NEE-nyo"'],
            ['rr', 'a rolled R (trill with the tongue) — <em>perro</em>, <em>carro</em>, <em>rápido</em>'],
            ['r', '(single, between vowels) a soft tap — <em>pero</em> is one tap, <em>perro</em> is rolled'],
            ['qu', 'sounds like "k" (the u is silent) — <em>queso</em> = "KE-so," <em>quince</em> = "KEEN-se"'],
            ['z', 'sounds like English "s" in Latin America — <em>zapato</em> = "sa-PA-to" (in Spain it\'s "th")']
          ]
        },
        {
          heading: 'The chameleon: <em>C</em> and <em>G</em>',
          body: 'These two letters change their sound depending on what vowel follows. Worth memorizing the rule:',
          conjugation: [
            ['c + a, o, u', 'hard "k" sound — <em>casa, cosa, cuna</em>'],
            ['c + e, i', 'soft "s" sound (Lat. Am.) — <em>cero, cinco</em>'],
            ['g + a, o, u', 'hard "g" — <em>gato, gusto, agua</em>'],
            ['g + e, i', 'sounds like English "h" — <em>gente, gigante</em>'],
            ['gu + e, i', 'hard "g" with silent u — <em>guerra</em> = "GE-rra"']
          ]
        },
        {
          heading: 'When two vowels <em>meet</em>',
          body: 'Spanish has two kinds of vowels: <strong>strong</strong> (a, e, o) and <strong>weak</strong> (i, u). When they bump into each other in a word, what happens depends on which kinds meet:',
          conjugation: [
            ['Strong + weak (or weak + strong)', 'They blend into ONE syllable — called a <strong>diphthong</strong>. Examples: <em>bueno</em> (BWE-no), <em>cielo</em> (SYE-lo), <em>aire</em> (AY-re)'],
            ['Weak + weak', 'Also one syllable. Example: <em>ciudad</em> (syoo-DAD)'],
            ['Strong + strong', 'They\'re pronounced as TWO separate syllables. Examples: <em>maestro</em> (ma-ES-tro), <em>poeta</em> (po-E-ta)'],
            ['Vowel + accented weak vowel', 'The accent BREAKS the diphthong → two syllables. Example: <em>día</em> (DEE-a), <em>país</em> (pa-EES)']
          ]
        },
        {
          heading: 'Stress and accents — <em>preview</em>',
          body: 'Spanish has clean rules for which syllable to stress and when to write an accent mark. The short version: words ending in a vowel, "n," or "s" usually stress the second-to-last syllable; words ending in other consonants usually stress the last; any exception gets a written accent mark to show where the stress actually goes. <strong>The full rules — including why accents exist, how they change meaning, and how to read them — are covered in detail in Lesson 2 (Stress, syllables & accent marks).</strong>'
        },
        {
          heading: 'Practical <em>tips</em>',
          body: 'A few habits that will dramatically improve your pronunciation right away:',
          examples: [
            { es: '1. Crisp vowels', en: 'Don\'t glide vowels like in English. Say "ah" not "ay-uh." Each Spanish vowel stays pure from start to finish.' },
            { es: '2. One sound per vowel — always', en: '"a" is always "ah." Whether in casa, gato, llama, or mañana — same sound every time.' },
            { es: '3. Don\'t aspirate', en: 'English speakers puff air after p/t/k (say "pen" with your hand in front of your mouth — feel the puff). Spanish doesn\'t puff. "Papá" is crisp, not "p-haa-pá."' },
            { es: '4. Silent H — always', en: 'Never pronounce h. "Hola" rhymes with "ola." "Hospital" starts with "os-pee-TAL."' },
            { es: '5. Roll the RR', en: 'Practice the rolled R by saying "butter" fast — the "tt" sound is close. Single R between vowels is one tap (pero); RR is rolled (perro).' },
            { es: '6. Connect words', en: 'Native speakers blend the end of one word into the start of the next. "Mi amigo" sounds like one word: "mi-amigo." Don\'t pause between words.' },
            { es: '7. Don\'t add extra sounds', en: 'English speakers tend to add a "y" sound to vowels (saying "cee-uh-lo" instead of "SYE-lo" for cielo). Trust the spelling — Spanish never adds sounds that aren\'t written.' }
          ]
        },
        {
          type: 'mistakes',
          heading: 'What English speakers <em>get wrong</em>',
          body: 'After years of teaching Spanish to US students, the same pronunciation mistakes come up over and over. If you can avoid these, you\'ll sound much more natural.',
          items: [
            'Saying <strong>"ho-la"</strong> with an English "h" — the h is <em>silent</em> in Spanish, always. Say "OH-la."',
            'Pronouncing the <strong>j</strong> like English "j" — Spanish j sounds like an English h. "Jugar" sounds like "hoo-GAR," not "joo-GAR."',
            'Saying "qu" as English "kw" — in Spanish, <strong>qu</strong> always sounds like a hard k. "Que" is "keh," NOT "kweh."',
            'Pronouncing the <strong>v</strong> like an English v — in Spanish, v and b sound nearly identical. Both are a soft b sound.',
            'Treating <strong>ñ</strong> like a regular n — ñ is "ny" together. "Año" (year) is "AH-nyo," NOT "AH-no" (which means anus). Be careful with this one.',
            'Stretching out vowels into diphthongs — Spanish vowels are crisp, never glided. "No" is "NO" — one sound. Not "NO-uh."',
            'Forgetting to roll the <strong>rr</strong> — single r and double rr are different sounds and different words. <em>Pero</em> means "but"; <em>perro</em> means "dog."',
            'Pronouncing the <strong>ll</strong> like English "ll" — in most Spanish-speaking regions, ll sounds like English y. "Llama" is "YA-ma," NOT "LA-ma."'
          ]
        }
      ],
      quiz: [
        { q: 'How do you pronounce the letter "h" in "hola"?', options: [
          { text: 'Like English "h" in "hello"', correct: false },
          { text: 'Silent — it\'s pronounced "ola"', correct: true },
          { text: 'Like an English "j"', correct: false }
        ]},
        { q: 'The Spanish letter "j" sounds most like which English sound?', options: [
          { text: 'English "j" as in "jump"', correct: false },
          { text: 'English "h" as in "house"', correct: true },
          { text: 'English "y" as in "yes"', correct: false }
        ]},
        { q: 'How many distinct sounds does the Spanish vowel "a" have?', options: [
          { text: 'One — always "ah"', correct: true },
          { text: 'Three — like English "a"', correct: false },
          { text: 'Two — short and long', correct: false }
        ]}
      ]
    },
    {
      id: 'stress-and-accents',
      num: '2',
      level: 'sp1',
      title: 'Stress, syllables & <em>accent marks</em>',
      tag: 'Start here · Foundations',
      summary: 'Why Spanish puts marks on some letters — and how to know exactly which syllable to emphasize in any word.',
      sections: [
        {
          heading: 'What "<em>stress</em>" means',
          body: 'In every multi-syllable word, one syllable is louder and longer than the others — that\'s the "stressed" syllable. In English: <em>BAN-an-a</em>, <em>com-PU-ter</em>, <em>pho-TO-graph</em>. Spanish has the same idea, but unlike English (where you just memorize where the stress goes), Spanish has <strong>predictable rules</strong>. Once you learn them, you can pronounce any Spanish word correctly the first time you see it — even if you\'ve never heard it before.'
        },
        {
          heading: 'Step 1: <em>Break</em> the word into syllables',
          body: 'A syllable usually has one vowel (or one vowel cluster). Consonants attach to the nearest vowel. The basic rule: if a single consonant sits between two vowels, it goes with the SECOND vowel. If two consonants sit between vowels, one goes with each.',
          conjugation: [
            ['casa', '<span class="ending">ca-sa</span> (2 syllables)'],
            ['estudiante', '<span class="ending">es-tu-dia-nte</span> → es-tu-DIAN-te (4 syllables)'],
            ['profesor', '<span class="ending">pro-fe-sor</span> (3 syllables)'],
            ['biblioteca', '<span class="ending">bi-blio-te-ca</span> (4 syllables — bl stays together)'],
            ['perro', '<span class="ending">pe-rro</span> (rr counts as one consonant!)']
          ]
        },
        {
          heading: 'Step 2: Apply the <em>two main rules</em>',
          body: 'Once a word is broken into syllables, two rules tell you where the stress goes — UNLESS there\'s a written accent mark, which always wins.',
          conjugation: [
            ['<strong>Rule 1</strong>', 'Word ends in <strong>a vowel, "n," or "s"</strong> → stress the <strong>second-to-last</strong> syllable.'],
            ['Examples', '<em>CA-sa</em>, <em>ha-BLA-mos</em>, <em>JO-ven</em>, <em>li-bros</em> = LI-bros, <em>mu-cha-cha</em> = mu-CHA-cha'],
            ['<strong>Rule 2</strong>', 'Word ends in <strong>any other consonant</strong> (not n or s) → stress the <strong>last</strong> syllable.'],
            ['Examples', '<em>doc-TOR</em>, <em>pa-PEL</em>, <em>ciu-DAD</em>, <em>es-pa-ÑOL</em>, <em>na-RIZ</em>'],
            ['<strong>Rule 3</strong>', 'If a word breaks Rules 1 or 2, it carries a <strong>written accent</strong> over the stressed vowel. The accent always wins.'],
            ['Examples', '<em>ca-FÉ</em> (ends in vowel, but stressed on last → needs accent)<br><em>MÉ-di-co</em> (ends in vowel, but stressed on third-to-last → needs accent)<br><em>JÓ-ve-nes</em> (ends in s, but stressed on third-to-last → needs accent)']
          ]
        },
        {
          heading: 'A <em>quick</em> walkthrough',
          body: 'Let\'s read the word <em>"hospital"</em> together using the rules: (1) Syllables: <em>hos-pi-tal</em>. (2) The word ends in "l" — that\'s a consonant, NOT a/e/i/o/u/n/s. (3) Rule 2 applies → stress the last syllable. (4) Result: <em>hos-pi-TAL</em>. Now try <em>"interesante"</em>: syllables are <em>in-te-re-san-te</em>; ends in a vowel; Rule 1 applies; stress goes on second-to-last → <em>in-te-re-SAN-te</em>.'
        },
        {
          heading: 'Why <em>accents</em> exist — four real reasons',
          body: 'Accent marks (only one kind in Spanish — the tilde slanting right: á, é, í, ó, ú) aren\'t decoration. They do four specific jobs:',
          conjugation: [
            ['<strong>Reason 1</strong>', 'Mark an irregular stress. <em>café</em>, <em>médico</em>, <em>fácil</em> all break the basic rules — the accent shows where to stress.'],
            ['<strong>Reason 2</strong>', 'Distinguish two words that would otherwise look identical (homographs).'],
            ['<strong>Reason 3</strong>', 'Mark question words and exclamations. <em>qué</em>, <em>quién</em>, <em>cómo</em>, <em>dónde</em>, <em>cuándo</em> all carry accents when used as questions.'],
            ['<strong>Reason 4</strong>', 'Break a diphthong — show that two vowels should be pronounced separately. <em>día</em> (DEE-a, two syllables) vs. <em>dia-...</em> (one syllable).']
          ]
        },
        {
          heading: 'Homographs — same letters, different <em>meaning</em>',
          body: 'These pairs look almost identical but mean completely different things. The accent is the only thing telling them apart.',
          examples: [
            { es: 'el / él', en: '"the" (article) vs. "he" (pronoun)' },
            { es: 'si / sí', en: '"if" vs. "yes"' },
            { es: 'tu / tú', en: '"your" vs. "you"' },
            { es: 'mi / mí', en: '"my" vs. "me" (after a preposition)' },
            { es: 'mas / más', en: '"but" (literary) vs. "more"' },
            { es: 'se / sé', en: '"oneself/himself" vs. "I know"' },
            { es: 'te / té', en: '"you/yourself" vs. "tea"' },
            { es: 'esta / está', en: '"this" vs. "is/are" (from estar)' },
            { es: 'papa / papá', en: '"potato" / "pope" vs. "dad"' }
          ]
        },
        {
          heading: 'Question words always <em>carry</em> accents',
          body: 'When used to ASK something, all the question words wear accents. When the same word is used as a connector (not a question), no accent. Compare:',
          examples: [
            { es: '¿Qué quieres? — Lo que tú quieras.', en: '"What do you want?" — "Whatever you want." (qué = question; que = relative pronoun)' },
            { es: '¿Cómo te llamas? — Como tú prefieras.', en: '"What\'s your name?" — "However you prefer."' },
            { es: '¿Dónde vives?', en: '"Where do you live?"' },
            { es: '¿Cuándo llegas?', en: '"When are you arriving?"' },
            { es: '¿Quién es?', en: '"Who is it?"' },
            { es: '¿Por qué? — Porque sí.', en: '"Why?" — "Because." (note the spacing AND the accent differences)' }
          ]
        },
        {
          heading: 'Breaking a <em>diphthong</em>',
          body: 'Remember from Lesson 1: when a strong vowel (a/e/o) meets a weak vowel (i/u), they blend into one syllable. But if you put an accent on the weak vowel, it forces them apart into TWO syllables. This is why <em>día</em> is two syllables (DEE-a) while <em>dia-rio</em> (which has the same letters at the start) is two syllables only because of the accent placement.',
          examples: [
            { es: 'día (DEE-a)', en: 'two syllables — accent breaks the diphthong' },
            { es: 'país (pa-EES)', en: 'two syllables — accent breaks the diphthong' },
            { es: 'tío (TEE-o)', en: 'two syllables' },
            { es: 'frío (FREE-o)', en: 'two syllables' },
            { es: 'biología (bi-o-lo-GEE-a)', en: 'five syllables — accent breaks the í-a' }
          ]
        },
        {
          heading: 'Practice <em>finding</em> the stress',
          body: 'Try each of these without looking. Identify the stressed syllable using the rules. Answers below each word.',
          examples: [
            { es: 'computadora', en: '→ com-pu-ta-DO-ra (ends in vowel → 2nd-to-last)' },
            { es: 'profesores', en: '→ pro-fe-SO-res (ends in "s" → 2nd-to-last)' },
            { es: 'español', en: '→ es-pa-ÑOL (ends in "l" → last syllable)' },
            { es: 'universidad', en: '→ u-ni-ver-si-DAD (ends in "d" → last syllable)' },
            { es: 'México', en: '→ MÉ-xi-co (accent overrides → 3rd-to-last)' },
            { es: 'lápiz', en: '→ LÁ-piz (accent overrides → 2nd-to-last, breaks Rule 2)' }
          ]
        },
        {
          type: 'mistakes',
          heading: 'Accent traps to <em>watch for</em>',
          body: 'Beyond the basic rules, students consistently miss these:',
          items: [
            'Skipping the accent on <strong>questions</strong> — when a word like <em>qué, cómo, dónde, cuándo, quién, cuál, por qué</em> is part of a question, it MUST have an accent. Without the accent, it means something different: <em>que</em> = "that," <em>como</em> = "as / like."',
            'Forgetting accents on <strong>preterite "yo" and "él" forms</strong> — hablé (NOT hable), habló (NOT hablo). Without accents, these become other forms entirely.',
            'Forgetting accents on <strong>imperfect -ER/-IR verbs</strong> — comía (NOT comia), vivían (NOT vivian). The í always needs the accent here.',
            'Putting an accent on <strong>monosyllables</strong> that don\'t need one — like <em>fue, vio, dio, fui</em>. These are one syllable and have NO accent.',
            'Forgetting the diaeresis on <strong>güi / güe</strong> — pingüino, bilingüe. Without the two dots, the u would be silent.',
            'Forgetting accents on <strong>broken diphthongs</strong> — día (one syllable would be "dyah"; the accent makes it two syllables "DEE-ah"). Same with país, río, María.'
          ]
        }
      ],
      quiz: [
        { q: 'The word "hospital" ends in "l." Where does the stress fall?', options: [
          { text: 'HOS-pi-tal', correct: false },
          { text: 'hos-PI-tal', correct: false },
          { text: 'hos-pi-TAL', correct: true }
        ]},
        { q: 'Which is the correct stress for "computadora"?', options: [
          { text: 'COM-pu-ta-do-ra', correct: false },
          { text: 'com-pu-ta-DO-ra', correct: true },
          { text: 'com-pu-ta-do-RA', correct: false }
        ]},
        { q: 'Why is there an accent on "café"?', options: [
          { text: 'Because it\'s a borrowed word from French', correct: false },
          { text: 'Because it breaks the rule — ends in vowel but stressed on last syllable', correct: true },
          { text: 'Because all two-syllable words have accents', correct: false }
        ]}
      ]
    },
    {
      id: 'cognates-false-friends',
      num: '3',
      level: 'sp1',
      title: '<em>Cognates</em> & false friends',
      tag: 'Start here · Foundations',
      summary: 'Spanish and English share thousands of words. Learn the patterns to recognize them on sight — and watch out for the "false friends" that look familiar but mean something completely different.',
      sections: [
        {
          heading: 'Your <em>secret weapon</em>',
          body: 'Here\'s the best-kept secret about learning Spanish: <strong>you already know thousands of Spanish words.</strong> Spanish and English share roughly 30–40% of their vocabulary, mostly through shared Latin and Greek roots. These shared words are called <em>cognates</em> (in Spanish: <em>cognados</em>).<br><br>Once you learn a few patterns, you can recognize Spanish words you\'ve never seen before. <em>La importancia, la decisión, el animal, el hospital, el doctor</em> — you already understand all of these. This lesson teaches you the patterns so you can unlock thousands of words at once.<br><br>But there\'s a catch: a small group of words <em>look</em> like English words but mean something completely different. Those are called <em>false friends</em> (or <em>false cognates</em>), and we\'ll cover them at the end so you don\'t embarrass yourself.'
        },
        {
          heading: 'Words that <em>transfer almost directly</em>',
          body: 'Some Spanish words are spelled identically (or almost identically) to their English counterparts, and mean exactly the same thing. Here are common ones — you probably already know what each means:',
          examples: [
            { es: 'normal, natural, total, real, animal', en: 'Spelled identically to English; same meaning.' },
            { es: 'hospital, hotel, color, doctor, actor', en: 'Spelled identically; same meaning.' },
            { es: 'idea, radio, video, taxi, piano', en: 'Spelled identically; same meaning.' },
            { es: 'popular, terrible, horrible, posible', en: 'Adjectives — same meaning as English.' },
            { es: 'la familia, la música, la persona', en: 'Tiny spelling shift (extra "a"), same meaning.' },
            { es: 'el banco, el restaurante, el chocolate', en: 'Tiny shift in spelling; same meaning.' }
          ]
        },
        {
          heading: 'The <em>pronunciation trap</em>',
          body: 'There\'s ONE catch with cognates: <strong>you have to pronounce them in Spanish, not English.</strong> A word may LOOK identical, but it sounds completely different.<br><br>Take <em>hospital</em>:<br>• English: HOS-pi-tal (stress on first syllable, all consonants clear)<br>• Spanish: os-pee-TAL (silent h, last syllable stressed because it ends in "l")<br><br>Take <em>animal</em>:<br>• English: AN-i-mal<br>• Spanish: a-nee-MAL (stress on last syllable)<br><br>Take <em>natural</em>:<br>• English: NAT-cher-al<br>• Spanish: na-too-RAL (stress on last syllable; no "ch" sound)<br><br>The pattern: words ending in a consonant other than n or s are stressed on the LAST syllable in Spanish. So most cognates ending in -al, -ar, -or, -ad shift their stress when you cross languages. Apply the stress rules from the previous lesson and you\'ll sound much more natural.'
        },
        {
          heading: 'Pattern 1: <em>-ción</em> = English <em>-tion</em>',
          body: 'Any English word ending in <em>-tion</em> almost always has a Spanish cousin ending in <strong>-ción</strong>. These words are <strong>always feminine</strong> (la). Notice the accent on the <em>ó</em> — that\'s required.',
          examples: [
            { es: 'la nación', en: 'nation' },
            { es: 'la educación', en: 'education' },
            { es: 'la información', en: 'information' },
            { es: 'la organización', en: 'organization' },
            { es: 'la conversación', en: 'conversation' },
            { es: 'la situación', en: 'situation' },
            { es: 'la atención', en: 'attention' }
          ]
        },
        {
          heading: 'Pattern 2: <em>-sión</em> = English <em>-sion</em>',
          body: 'English <em>-sion</em> words have Spanish cousins ending in <strong>-sión</strong>. Also <strong>always feminine</strong> (la), also takes an accent.',
          examples: [
            { es: 'la decisión', en: 'decision' },
            { es: 'la televisión', en: 'television' },
            { es: 'la expresión', en: 'expression' },
            { es: 'la pasión', en: 'passion' },
            { es: 'la conclusión', en: 'conclusion' },
            { es: 'la profesión', en: 'profession' }
          ]
        },
        {
          heading: 'Pattern 3: <em>-dad / -tad</em> = English <em>-ty</em>',
          body: 'English words ending in <em>-ty</em> often map to Spanish <strong>-dad</strong> or <strong>-tad</strong>. Also <strong>always feminine</strong>.',
          examples: [
            { es: 'la ciudad', en: 'city' },
            { es: 'la universidad', en: 'university' },
            { es: 'la libertad', en: 'liberty' },
            { es: 'la dificultad', en: 'difficulty' },
            { es: 'la realidad', en: 'reality' },
            { es: 'la actividad', en: 'activity' },
            { es: 'la posibilidad', en: 'possibility' }
          ]
        },
        {
          heading: 'Pattern 4: <em>-mente</em> = English <em>-ly</em>',
          body: 'English adverbs ending in <em>-ly</em> often map to Spanish <strong>-mente</strong>. You\'ll have a whole lesson on these later, but here\'s the pattern.',
          examples: [
            { es: 'rápidamente', en: 'rapidly / quickly' },
            { es: 'fácilmente', en: 'easily' },
            { es: 'generalmente', en: 'generally' },
            { es: 'finalmente', en: 'finally' },
            { es: 'frecuentemente', en: 'frequently' }
          ]
        },
        {
          heading: 'Pattern 5: <em>-oso / -osa</em> = English <em>-ous</em>',
          body: 'English adjectives in <em>-ous</em> usually map to Spanish <strong>-oso</strong> (masculine) or <strong>-osa</strong> (feminine). These follow regular agreement rules.',
          examples: [
            { es: 'famoso / famosa', en: 'famous' },
            { es: 'generoso / generosa', en: 'generous' },
            { es: 'curioso / curiosa', en: 'curious' },
            { es: 'peligroso / peligrosa', en: 'dangerous' },
            { es: 'religioso / religiosa', en: 'religious' },
            { es: 'misterioso / misteriosa', en: 'mysterious' }
          ]
        },
        {
          heading: 'Pattern 6: <em>-al</em> = English <em>-al</em>',
          body: 'Many English adjectives and nouns ending in <em>-al</em> stay <em>-al</em> in Spanish — same spelling, just different pronunciation. These have <strong>only one form</strong> for both masculine and feminine.',
          examples: [
            { es: 'normal', en: 'normal' },
            { es: 'natural', en: 'natural' },
            { es: 'total', en: 'total' },
            { es: 'real', en: 'real / royal' },
            { es: 'general', en: 'general' },
            { es: 'animal', en: 'animal' },
            { es: 'hospital', en: 'hospital' },
            { es: 'tropical', en: 'tropical' }
          ]
        },
        {
          heading: 'Pattern 7: <em>-ante / -ente</em> = English <em>-ant / -ent</em>',
          body: 'English <em>-ant</em> and <em>-ent</em> words become <strong>-ante</strong> or <strong>-ente</strong> in Spanish. These also have just <strong>one form</strong> for both masculine and feminine.',
          examples: [
            { es: 'importante', en: 'important' },
            { es: 'interesante', en: 'interesting' },
            { es: 'diferente', en: 'different' },
            { es: 'inteligente', en: 'intelligent' },
            { es: 'elegante', en: 'elegant' },
            { es: 'el / la presidente', en: 'president (article changes by gender)' },
            { es: 'el / la estudiante', en: 'student (article changes by gender)' }
          ]
        },
        {
          heading: 'Pattern 8: <em>-ico / -ica</em> = English <em>-ic / -ical</em>',
          body: 'English adjectives in <em>-ic</em> or <em>-ical</em> usually become <strong>-ico / -ica</strong> in Spanish. Note that many of these get an accent mark because the stress would otherwise fall on the wrong syllable.',
          examples: [
            { es: 'romántico / romántica', en: 'romantic' },
            { es: 'fantástico / fantástica', en: 'fantastic' },
            { es: 'eléctrico / eléctrica', en: 'electric / electrical' },
            { es: 'automático / automática', en: 'automatic' },
            { es: 'práctico / práctica', en: 'practical' },
            { es: 'la música', en: 'music' },
            { es: 'el público', en: 'the public / audience' }
          ]
        },
        {
          type: 'tip',
          heading: '<em>Gender shortcuts</em> from the patterns',
          body: 'These patterns also give you the noun gender for free:<br><br>• <strong>-ción, -sión, -dad, -tad</strong> words → <strong>always feminine</strong> (la nación, la decisión, la ciudad, la libertad)<br>• <strong>-oso/-osa, -ico/-ica</strong> → follow the regular -o/-a agreement<br>• <strong>-al, -ante/-ente</strong> → one form, the article tells you the gender (<em>el estudiante / la estudiante</em>)<br><br>So if you see <em>la organización</em>, you already know it\'s feminine even without checking. That\'s another free benefit of learning the patterns.'
        },
        {
          type: 'mistakes',
          heading: 'False friends — <em>do not trust these</em>',
          body: 'These Spanish words look like English words but mean something <strong>completely different</strong>. Using them wrong creates the famous Spanish-class disaster stories. Memorize this list — it will save you embarrassment.',
          items: [
            '<strong>embarazada</strong> does NOT mean "embarrassed." It means <em>pregnant</em>. Saying <em>"Estoy embarazada"</em> means "I am pregnant," not "I am embarrassed." For embarrassed, use <em>tengo vergüenza</em> or <em>estoy avergonzado/a</em>.',
            '<strong>éxito</strong> does NOT mean "exit." It means <em>success</em>. Exit (the door) is <em>la salida</em>.',
            '<strong>librería</strong> does NOT mean "library." It means <em>bookstore</em>. Library is <em>la biblioteca</em>.',
            '<strong>carpeta</strong> does NOT mean "carpet." It means <em>folder</em>. Carpet is <em>la alfombra</em>.',
            '<strong>sopa</strong> does NOT mean "soap." It means <em>soup</em>. Soap is <em>el jabón</em>.',
            '<strong>ropa</strong> does NOT mean "rope." It means <em>clothing</em>. Rope is <em>la cuerda</em>.',
            '<strong>constipado</strong> does NOT mean "constipated." It means <em>having a cold / congested</em>. Constipated (medical) is <em>estreñido</em>.',
            '<strong>pariente</strong> does NOT mean "parent." It means <em>relative</em> (any family member). Parent is <em>padre</em> or <em>madre</em>.',
            '<strong>largo</strong> does NOT mean "large." It means <em>long</em>. Large is <em>grande</em>.',
            '<strong>molestar</strong> does NOT mean "to molest." It just means <em>to bother / annoy</em>. No sinister meaning — your teacher can say <em>no me molestes</em> ("don\'t bother me") without any drama.',
            '<strong>introducir</strong> does NOT mean "to introduce a person." It means <em>to insert / put in</em> (an object). To introduce someone, use <em>presentar</em>.',
            '<strong>realizar</strong> does NOT mean "to realize" (to suddenly understand). It means <em>to accomplish / carry out / make real</em>. To realize something is <em>darse cuenta de</em>.',
            '<strong>asistir</strong> does NOT mean "to assist." It means <em>to attend</em> (a class, an event). To assist (help) is <em>ayudar</em>.',
            '<strong>actualmente</strong> does NOT mean "actually." It means <em>currently / nowadays</em>. Actually (in fact) is <em>en realidad</em> or <em>de hecho</em>.'
          ]
        },
        {
          type: 'tip',
          heading: 'How to <em>use</em> this skill',
          body: 'When you read a Spanish text, your brain will start to spot cognates automatically — that\'s great. Use them to get the gist of the text faster.<br><br>But <strong>be careful when speaking</strong>: don\'t assume an English word will work in Spanish just because some words transfer. Always verify a "cognate" before using it yourself, especially if it sounds suspiciously similar to a sensitive English word. (The <em>estoy embarazada</em> story has been told in thousands of Spanish classrooms for a reason.)<br><br>Cognates are a powerful tool for <em>recognition</em>. For <em>production</em>, trust only the words you\'ve actually learned.'
        }
      ],
      quiz: [
        { q: 'What does the Spanish word "información" mean?', options: [
          { text: 'Information', correct: true },
          { text: 'Inform', correct: false },
          { text: 'Informant', correct: false }
        ]},
        { q: 'What does "embarazada" mean in Spanish?', options: [
          { text: 'Embarrassed', correct: false },
          { text: 'Pregnant', correct: true },
          { text: 'Embargoed', correct: false }
        ]},
        { q: 'Which is the correct Spanish stress for "hospital"?', options: [
          { text: 'HOS-pi-tal (like English)', correct: false },
          { text: 'hos-PI-tal (middle syllable)', correct: false },
          { text: 'os-pee-TAL (last syllable, silent h)', correct: true }
        ]}
      ]
    },
    {
      id: 'articles-gender',
      num: '4',
      level: 'sp1',
      title: 'Articles & <em>gender</em>',
      tag: 'Foundations · Nouns',
      summary: 'Every Spanish noun is masculine or feminine. Learn to use el, la, los, and las correctly.',
      sections: [
        {
          heading: 'Every noun has a <em>gender</em>',
          body: 'In Spanish, every noun is either <strong>masculine</strong> or <strong>feminine</strong>. This is true even for objects that have no real gender — like a chair or a book. The gender determines which article ("the" or "a/an") to use.'
        },
        {
          heading: 'Definite articles: "the"',
          body: 'There are <strong>four</strong> ways to say "the" in Spanish. They depend on the gender and number of the noun.',
          conjugation: [
            ['Masculine singular', '<span class="ending">el</span> libro (the book)'],
            ['Feminine singular', '<span class="ending">la</span> casa (the house)'],
            ['Masculine plural', '<span class="ending">los</span> libros (the books)'],
            ['Feminine plural', '<span class="ending">las</span> casas (the houses)']
          ]
        },
        {
          heading: 'Indefinite articles: "a / an / some"',
          body: 'Same idea, but for "a/an" (singular) or "some" (plural).',
          conjugation: [
            ['Masculine singular', '<span class="ending">un</span> libro (a book)'],
            ['Feminine singular', '<span class="ending">una</span> casa (a house)'],
            ['Masculine plural', '<span class="ending">unos</span> libros (some books)'],
            ['Feminine plural', '<span class="ending">unas</span> casas (some houses)']
          ]
        },
        {
          heading: 'How to <em>guess</em> the gender',
          body: 'Most nouns ending in <strong>-o</strong> are masculine: <em>el libro, el chico, el perro</em>. Most nouns ending in <strong>-a</strong> are feminine: <em>la casa, la chica, la mesa</em>. Words ending in -ción, -sión, -dad, -tad are usually feminine: <em>la nación, la ciudad</em>. There are exceptions! <em>El día</em> (the day) is masculine, <em>la mano</em> (the hand) is feminine. When in doubt, memorize the article with the noun.'
        },
        {
          type: 'tip',
          heading: 'The <em>Greek-root</em> trap: -ma, -pa, -ta words',
          body: 'There\'s a whole class of nouns ending in -ma, -pa, or -ta that come from <strong>Greek</strong>, and they are all <strong>masculine</strong> despite ending in -a. This trips up almost every Spanish student. Memorize this small list — it covers most of the common ones:<br><br>• <em>el problema</em> (the problem)<br>• <em>el sistema</em> (the system)<br>• <em>el tema</em> (the theme / topic)<br>• <em>el programa</em> (the program)<br>• <em>el idioma</em> (the language)<br>• <em>el clima</em> (the climate)<br>• <em>el mapa</em> (the map)<br>• <em>el día</em> (the day)<br>• <em>el planeta</em> (the planet)<br>• <em>el poeta</em> (the poet)<br>• <em>el sofá</em> (the sofa)<br><br>So it\'s "el problema grande" — NOT "la problema grande."'
        },
        {
          type: 'mistakes',
          heading: 'Article and gender <em>traps</em>',
          body: 'These are the gender mistakes students make most often:',
          items: [
            'Saying <strong>"la problema"</strong> — it\'s <em>el problema</em>. Same for el tema, el sistema, el día, el mapa.',
            'Saying <strong>"el mano"</strong> — it\'s <em>la mano</em>, even though it ends in -o.',
            'Saying <strong>"la agua"</strong> — feminine words starting with a stressed <em>a</em> use <em>el</em> in the singular for sound reasons: <em>el agua, el águila, el hambre</em>. But the adjective stays feminine: <em>el agua fría</em> (cold water), <em>las aguas frías</em> (plural goes back to "las").',
            'Forgetting that nationality / profession words have both genders — <em>el estudiante / la estudiante</em>, <em>el artista / la artista</em>. The word doesn\'t change but the article does.',
            'Forgetting plural articles — students learn "el libro" then forget "los libros" needs the plural article too. Both pieces have to agree.',
            'Using <strong>"un / una"</strong> when no article is needed — Spanish often drops the article where English uses one. <em>Soy estudiante</em> (NOT "Soy un estudiante") for professions/identities. <em>Necesito agua</em> (NOT "necesito un agua") for general substances.'
          ]
        }
      ],
      quiz: [
        { q: 'Which is correct for "the table" (la mesa is feminine, singular)?', options: [
          { text: 'el mesa', correct: false },
          { text: 'la mesa', correct: true },
          { text: 'los mesa', correct: false }
        ]},
        { q: '"Some books" — how do you say "some" before a masculine plural noun?', options: [
          { text: 'unas', correct: false },
          { text: 'unos', correct: true },
          { text: 'una', correct: false }
        ]},
        { q: 'Most nouns ending in -o are…', options: [
          { text: 'masculine', correct: true },
          { text: 'feminine', correct: false },
          { text: 'always plural', correct: false }
        ]}
      ]
    },

    // ============================================================================
    // LESSON 5 — Pluralization basics (Spanish 1)
    // ============================================================================
    {
      id: 'plural-basics',
      num: '5',
      level: 'sp1',
      title: 'Singular ↔ <em>plural</em> nouns',
      tag: 'Foundations · Nouns',
      summary: 'How to make singular nouns plural — AND how to recognize what a plural noun looks like in singular. The core rules, the accent shifts, and the "el agua / las aguas" quirk.',
      sections: [
        {
          heading: 'Why this <em>matters</em>',
          body: 'In Spanish, pluralization touches more than just the noun. When a noun goes from singular to plural, the <strong>article changes</strong> (el → los, la → las) AND any <strong>adjectives describing it</strong> have to agree. So a single grammar choice ripples across the whole phrase.<br><br>You also need to be able to go in <strong>both directions</strong>:<br><br>• <strong>Forward</strong>: take <em>libro</em> and make it <em>libros</em><br>• <strong>Backward</strong>: see <em>canciones</em> and recognize it comes from <em>canción</em><br><br>The forward direction is mostly mechanical. The backward direction is trickier because of accent shifts and "fake plurals" — words that look plural but aren\'t.<br><br>This lesson covers the core rules. Edge cases (compound words, numbers, days of the week, gender quirks) live in the next lesson.'
        },
        {
          heading: 'The <em>basic rule</em>: vowel vs consonant',
          body: 'Spanish pluralization has one main rule with two branches:<br><br>• Nouns ending in a <strong>vowel</strong> → add <strong>-s</strong><br>• Nouns ending in a <strong>consonant</strong> → add <strong>-es</strong><br><br>That\'s the foundation. Everything else is a variation on this.',
          conjugation: [
            ['libro (book)', 'libros'],
            ['mesa (table)', 'mesas'],
            ['casa (house)', 'casas'],
            ['estudiante (student)', 'estudiantes'],
            ['papel (paper)', 'papel<strong>es</strong>'],
            ['profesor (teacher)', 'profesor<strong>es</strong>'],
            ['animal (animal)', 'animal<strong>es</strong>'],
            ['ciudad (city)', 'ciudad<strong>es</strong>']
          ]
        },
        {
          heading: 'The <em>-z → -ces</em> rule',
          body: 'When a noun ends in <strong>-z</strong>, the z changes to <strong>c</strong> before adding -es. This is the same logic as the -car/-gar/-zar preterite shifts you\'ll learn later — Spanish preserves the consonant sound across vowel changes.',
          conjugation: [
            ['lápiz (pencil)', 'lápi<strong>ces</strong>'],
            ['pez (fish)', 'pe<strong>ces</strong>'],
            ['voz (voice)', 'vo<strong>ces</strong>'],
            ['luz (light)', 'lu<strong>ces</strong>'],
            ['nariz (nose)', 'nari<strong>ces</strong>'],
            ['raíz (root)', 'raí<strong>ces</strong>']
          ]
        },
        {
          heading: 'The reverse skill: <em>plural → singular</em>',
          body: 'Going from plural back to singular is harder than going forward because students have to <strong>recognize and undo</strong> the changes. The recipe:<br><br><strong>If the plural ends in -s (after a vowel):</strong> drop the -s.<br>• mesas → mesa, estudiantes → estudiante<br><br><strong>If the plural ends in -es (after a consonant):</strong> drop the -es.<br>• papeles → papel, profesores → profesor, ciudades → ciudad<br><br><strong>If the plural ends in -ces:</strong> change -ces back to -z.<br>• lápices → lápiz, voces → voz, luces → luz, peces → pez<br><br>This last one is the most common reverse-direction mistake. Students see <em>peces</em> and forget to change it back to <em>pez</em>, leaving it as "pece" or "pec" — neither is a word.'
        },
        {
          heading: 'The <em>accent puzzle</em>',
          body: 'Here\'s where pluralization gets genuinely tricky. Some words gain an accent in plural; others lose one. The rule underneath: <strong>Spanish puts accents where the natural stress would otherwise be lost</strong>.<br><br><strong>Accents that APPEAR in the plural:</strong><br>• examen → <strong>exámenes</strong> (accent appears)<br>• joven → <strong>jóvenes</strong> (accent appears)<br>• imagen → <strong>imágenes</strong> (accent appears)<br><br>These words have natural stress on a syllable that stays in the same place. Adding -es adds a syllable, so the accent appears to preserve the original stress.<br><br><strong>Accents that DISAPPEAR in the plural:</strong><br>• canción → <strong>canciones</strong> (accent disappears)<br>• región → <strong>regiones</strong> (accent disappears)<br>• inglés → <strong>ingleses</strong> (accent disappears)<br>• francés → <strong>franceses</strong> (accent disappears)<br>• autobús → <strong>autobuses</strong> (accent disappears)<br><br>These words had accents to indicate that stress falls on a syllable that\'s NOT the default. Adding -es shifts the natural stress to where it already is, so the accent becomes unnecessary.<br><br>Going backward (plural → singular) requires reversing all of this: see <em>canciones</em>, recognize the singular is <em>canción</em> (with the accent re-appearing).'
        },
        {
          heading: 'Articles <em>shift too</em>',
          body: 'When a noun pluralizes, its article shifts with it. Both pieces of the phrase have to agree.',
          conjugation: [
            ['el libro → los libros', 'masculine singular → plural'],
            ['la mesa → las mesas', 'feminine singular → plural'],
            ['un libro → unos libros', 'a book → some books'],
            ['una mesa → unas mesas', 'a table → some tables']
          ]
        },
        {
          heading: 'Mixed-gender groups go <em>masculine</em>',
          body: 'When a group has both masculine and feminine members, the plural defaults to masculine. This is a Spanish-wide rule, not just for nouns.<br><br>• <em>los padres</em> = the parents (one mom + one dad — STILL masculine plural)<br>• <em>los hermanos</em> = the siblings (mixed group)<br>• <em>los hijos</em> = the children (mixed)<br>• <em>los abuelos</em> = the grandparents<br>• <em>los reyes</em> = the king and queen (literally "the kings")<br><br>If you want to specify all-female: <em>las hermanas</em>, <em>las hijas</em>. If even ONE male is in the group, you switch to masculine: <em>los hermanos</em>.<br><br>Modern Spanish is starting to reckon with this rule — some speakers use forms like <em>les hermanes</em> or <em>los/las hermanos/as</em> for inclusivity. But standard Spanish, including everything you\'ll see on the AP exam, still defaults to masculine for mixed groups.'
        },
        {
          heading: 'The <em>"el agua"</em> rule (a feminine quirk)',
          body: 'A small group of feminine nouns starting with a <strong>stressed -a or -ha sound</strong> use <strong>el</strong> in the singular for sound reasons — even though they\'re grammatically feminine.<br><br>The key word is <strong>stressed</strong>. The first syllable has to carry the stress for this rule to apply.',
          conjugation: [
            ['el agua → las aguas', 'water (stress on A-gua)'],
            ['el águila → las águilas', 'eagle (stress on Á-gui-la)'],
            ['el aula → las aulas', 'classroom (stress on AU-la)'],
            ['el alma → las almas', 'soul'],
            ['el ala → las alas', 'wing'],
            ['el área → las áreas', 'area'],
            ['el arma → las armas', 'weapon'],
            ['el hambre → las hambres', 'hunger (silent H, stress on AM-bre)'],
            ['el hacha → las hachas', 'axe (silent H)'],
            ['el hada → las hadas', 'fairy']
          ]
        },
        {
          type: 'tip',
          heading: 'The <em>"el agua"</em> rule — adjective agreement',
          body: 'Even when these nouns take "el" in the singular, they\'re still <strong>grammatically feminine</strong>. That means adjectives describing them MUST be feminine — both in singular and plural.<br><br>• <em>el agua <strong>fría</strong></em> (cold water — feminine adjective, NOT "frío")<br>• <em>el aula <strong>pequeña</strong></em> (small classroom — NOT "pequeño")<br>• <em>el águila <strong>majestuosa</strong></em> (majestic eagle)<br>• <em>el alma <strong>gemela</strong></em> (soulmate — "twin soul")<br>• <em>las aguas <strong>frías</strong></em>, <em>las aulas <strong>pequeñas</strong></em> (plural — everything feminine)<br><br>Why this rule exists: when Spanish evolved from Latin, putting "la" before a stressed -a sound created an awkward "la-a-" speech collision. Spanish solved it by borrowing "el" purely for sound. The word stays feminine; only the article cheats. In the plural, "las aulas" doesn\'t have the same sound collision (because of the -s ending), so the feminine article returns.'
        },
        {
          type: 'mistakes',
          heading: 'Pluralization <em>traps</em>',
          body: 'The most common mistakes when going singular ↔ plural:',
          items: [
            'Adding <strong>-s instead of -es to consonant endings</strong> — wrong. <em>"Papels"</em> should be <em>papeles</em>. <em>"Profesors"</em> should be <em>profesores</em>. Consonant endings need the -es suffix.',
            'Forgetting the <strong>-z → -c change</strong> — wrong. <em>"Lápizes"</em> should be <em>lápices</em>. <em>"Pezes"</em> should be <em>peces</em>. The z always becomes c before -es.',
            'Missing an <strong>accent that should appear</strong> — wrong. <em>"Examenes"</em> should be <em>exámenes</em>. <em>"Jovenes"</em> should be <em>jóvenes</em>. When a word gains a syllable, the stress needs to be preserved.',
            'Keeping an <strong>accent that should disappear</strong> — wrong. <em>"Canciónes"</em> should be <em>canciones</em>. <em>"Ingléses"</em> should be <em>ingleses</em>. When the syllable count makes the accent unnecessary, drop it.',
            'Forgetting to <strong>shift the article</strong> — wrong. <em>"El libros"</em> should be <em>los libros</em>. <em>"La mesas"</em> should be <em>las mesas</em>. The article and noun BOTH have to agree.',
            'Using <strong>feminine plural for mixed-gender groups</strong> — wrong. <em>"Las padres"</em> should be <em>los padres</em> (even for one mom + one dad). Mixed groups default to masculine.',
            'Treating <strong>el agua</strong> as masculine — wrong. <em>"El agua frío"</em> should be <em>el agua fría</em>. The noun is still feminine; only the article changed for sound. The adjective stays feminine.',
            'Trying to go <strong>backward from lápices</strong> — wrong direction errors. Students often guess "lápice" or "lápicen." The correct singular is <em>lápiz</em> — change ces back to z.',
            'Trying to go <strong>backward from canciones</strong> — wrong. Students often forget to add the accent back. The singular is <em>canción</em>, with the accent re-appearing.',
            'Confusing <strong>"unos" with "algunos"</strong> — both mean "some," but they have different uses. <em>Unos libros</em> = "some books" (general). <em>Algunos libros</em> = "some books, specifically these few." For Spanish 1, just know that "unos/unas" is the basic plural of "un/una."'
          ]
        }
      ],
      quiz: [
        { q: 'What is the plural of "lápiz"?', options: [
          { text: 'lápizes', correct: false },
          { text: 'lápices', correct: true },
          { text: 'lápizs', correct: false }
        ]},
        { q: 'The plural of "canción" is "canciones." What\'s different about the accent?', options: [
          { text: 'The accent stays the same', correct: false },
          { text: 'The accent disappears in the plural', correct: true },
          { text: 'The accent moves to the next syllable', correct: false }
        ]},
        { q: 'Which is correct for "the cold water"?', options: [
          { text: 'el agua frío', correct: false },
          { text: 'el agua fría', correct: true },
          { text: 'la agua fría', correct: false }
        ]}
      ]
    },

    // ============================================================================
    // LESSON 6 — Pluralization edge cases (Spanish 1 / Sp2 reference)
    // ============================================================================
    {
      id: 'plural-edge-cases',
      num: '6',
      level: 'sp1',
      title: 'Plural <em>edge cases</em>',
      tag: 'Foundations · Nouns · Reference',
      summary: 'Compound words like "parabrisas," numbers, dates, days of the week, words that look plural but aren\'t, gender quirks. The edge cases that don\'t fit the basic rules.',
      sections: [
        {
          heading: 'When to <em>use this lesson</em>',
          body: 'This is a reference lesson. Read through it once for awareness, then come back when you encounter a noun that doesn\'t pluralize the way you expect.<br><br>The previous lesson (Singular ↔ Plural basics) covers the everyday rules. This one covers the special cases:<br><br>• Compound nouns that already look plural (parabrisas, paraguas, cumpleaños)<br>• Numbers and dates<br>• Days of the week (some change, some don\'t)<br>• "Fake plurals" — nouns ending in -s that don\'t change<br>• Always-plural nouns (gafas, tijeras, vacaciones)<br>• Family names<br>• Gender quirks that affect plurals'
        },
        {
          heading: 'Compound nouns: <em>verb + noun</em>',
          body: 'Spanish has a beautiful class of nouns formed by gluing a <strong>verb</strong> together with a <strong>plural noun</strong>. These words ALREADY end in -s in the singular — and they STAY THE SAME in the plural. Only the article shifts.<br><br>The pattern: verb (3rd person singular) + plural noun, glued together.',
          conjugation: [
            ['el parabrisas → los parabrisas', 'windshield ("stops breezes")'],
            ['el paraguas → los paraguas', 'umbrella ("stops waters")'],
            ['el sacacorchos → los sacacorchos', 'corkscrew ("pulls corks")'],
            ['el abrelatas → los abrelatas', 'can opener ("opens cans")'],
            ['el lavaplatos → los lavaplatos', 'dishwasher ("washes plates")'],
            ['el rascacielos → los rascacielos', 'skyscraper ("scratches skies")'],
            ['el limpiaparabrisas → los limpiaparabrisas', 'windshield wiper'],
            ['el cumpleaños → los cumpleaños', 'birthday ("completes years")'],
            ['el guardarropas → los guardarropas', 'closet / wardrobe ("guards clothes")']
          ]
        },
        {
          type: 'tip',
          heading: 'Why <em>el cumpleaños</em> is singular',
          body: 'This trips up almost every Spanish 1 student. <em>Cumpleaños</em> literally means "completes-years" — it\'s a compound of <em>cumple</em> (he/she completes) + <em>años</em> (years). The "-años" piece is plural inside the compound, but the WHOLE WORD refers to a single event: one birthday.<br><br>So:<br>• <em>Mi cumpleaños es en marzo.</em> (My birthday is in March — singular event)<br>• <em>Los cumpleaños de los gemelos son el mismo día.</em> (The twins\' birthdays are on the same day — multiple events)<br><br>The word looks plural because of how the compound is built. Use the article (el/los) to tell whether it\'s singular or plural.'
        },
        {
          heading: 'Days of the week: <em>half change, half don\'t</em>',
          body: 'A quirk worth knowing cold: <strong>five of the seven days of the week look identical in singular and plural</strong>. Only sábado and domingo follow the normal vowel-ending rule.',
          conjugation: [
            ['el lunes → los lunes', 'Monday / Mondays (no change)'],
            ['el martes → los martes', 'Tuesday / Tuesdays (no change)'],
            ['el miércoles → los miércoles', 'Wednesday / Wednesdays (no change)'],
            ['el jueves → los jueves', 'Thursday / Thursdays (no change)'],
            ['el viernes → los viernes', 'Friday / Fridays (no change)'],
            ['el sábado → los sábados', 'Saturday / Saturdays (ADDS -s)'],
            ['el domingo → los domingos', 'Sunday / Sundays (ADDS -s)']
          ]
        },
        {
          type: 'tip',
          heading: 'Recognizing "<em>fake plurals</em>"',
          body: 'Several Spanish nouns end in -s in the singular and stay the same in the plural. The pattern: when a word\'s final syllable is <strong>unstressed</strong> and ends in -s, the plural doesn\'t add anything. The ARTICLE tells you whether it\'s singular or plural.<br><br>• <em>el lunes / los lunes</em> (Monday — already covered above)<br>• <em>la crisis / las crisis</em> (crisis — same form)<br>• <em>el análisis / los análisis</em> (analysis)<br>• <em>el paréntesis / los paréntesis</em> (parenthesis)<br>• <em>el tórax / los tórax</em> (thorax)<br>• <em>el oasis / los oasis</em> (oasis)<br>• <em>el virus / los virus</em> (virus)<br><br>When you see one of these, look at the article to decide: <em>el</em> means singular, <em>los/las</em> means plural. The noun itself gives you no clue.'
        },
        {
          heading: '<em>Always-plural</em> nouns',
          body: 'A small but important group of Spanish nouns are <strong>almost always used in the plural</strong>. The "singular" forms exist grammatically but are rare or feel awkward in everyday speech.',
          conjugation: [
            ['las gafas', 'glasses (eyewear) — singular "gafa" exists for one lens but is rare'],
            ['los anteojos', 'glasses / eyeglasses (Latin American usage)'],
            ['las tijeras', 'scissors — almost always plural'],
            ['los pantalones', 'pants — usually plural'],
            ['los lentes', 'glasses / lenses'],
            ['las vacaciones', 'vacation — almost always plural'],
            ['las afueras', 'the outskirts / suburbs'],
            ['las matemáticas', 'mathematics'],
            ['los celos', 'jealousy'],
            ['los modales', 'manners (behavior)']
          ]
        },
        {
          type: 'tip',
          heading: '<em>Family names</em> don\'t pluralize',
          body: 'Unlike English ("the Smiths," "the Garcías"), Spanish family names <strong>do NOT take a plural -s</strong> when referring to a whole family or multiple members.<br><br>• <em>los García</em> = the García family (NOT "los Garcías")<br>• <em>los Pérez</em> = the Pérez family<br>• <em>los Williamson</em> = the Williamson family<br>• <em>los Hernández</em><br><br>The article <em>los</em> does the pluralizing work. The surname itself stays the same.<br><br>This applies even when names end in -z, which would normally trigger the -z → -ces rule. You don\'t say "los Pérezes" or "los Hernándezes" — those don\'t exist. Just <em>los Pérez, los Hernández</em>.'
        },
        {
          heading: 'Numbers are mostly <em>invariable</em>',
          body: 'Cardinal numbers don\'t change form when used to count things. You don\'t pluralize "two" or "ten."<br><br>• <em>dos libros, tres libros, veinte libros</em> — the numbers themselves never change<br>• <em>cinco perros</em> — not "cincos perros"<br>• <em>diez personas</em> — not "diezes personas"<br><br>But there are a few exceptions worth knowing:<br><br>• <strong>uno → un / una</strong> before nouns: <em>un libro</em> (masc.), <em>una mesa</em> (fem.). The form changes for gender but never for plural (because "one" can\'t be plural).<br>• <strong>cien → cientos</strong>: when used as a noun meaning "hundreds of," it pluralizes. <em>Cientos de personas</em> = hundreds of people. As an adjective ("100 books"), it stays <em>cien libros</em>.<br>• <strong>mil → miles</strong>: similar pattern. <em>Miles de personas</em> = thousands of people. As an adjective, it stays <em>mil libros</em>.<br>• <strong>millón → millones</strong>: this one is a true plural with an accent drop. <em>Un millón</em> (one million) → <em>dos millones</em> (two million — note the accent disappears, same rule as canción → canciones).'
        },
        {
          heading: 'Dates and "<em>el primero</em>"',
          body: 'Dates use cardinal numbers, so there\'s no pluralization issue most of the time. The format is <em>el [number] de [month]</em>:<br><br>• <em>el dos de mayo</em> = May 2<br>• <em>el quince de junio</em> = June 15<br><br>One worth knowing: the <strong>first of the month</strong> can be expressed two ways:<br><br>• <em>el primero de mayo</em> — common in Latin America<br>• <em>el uno de mayo</em> — common in Spain<br><br>Both are correct. Pick the one that matches the regional dialect you\'re learning. In US classrooms (which lean Latin American), <em>el primero</em> is the safer bet.'
        },
        {
          type: 'tip',
          heading: 'Gender quirks that <em>affect plurals</em>',
          body: 'A few patterns from earlier lessons resurface in pluralization:<br><br><strong>Greek-origin masculine nouns stay masculine in plural.</strong><br>Words like <em>problema, sistema, idioma, programa, tema, mapa</em> are masculine despite ending in -a. The plural keeps them masculine:<br>• <em>el problema → los problemas</em> (NOT "las problemas")<br>• <em>el sistema → los sistemas</em><br>• <em>el idioma → los idiomas</em><br><br>If you wrote "las problemas," you have two errors at once: wrong gender, propagating into wrong article. See Lesson 4 for the full Greek-origin list.<br><br><strong>Profession/role nouns share form across genders.</strong><br>Words like <em>estudiante, artista, pianista, dentista, periodista</em> use the same form for masculine and feminine — only the article changes:<br>• <em>el estudiante / la estudiante</em> (one male / one female student)<br>• <em>los estudiantes</em> (multiple — could be all male OR mixed group)<br>• <em>las estudiantes</em> (multiple — all female)<br><br>In the plural, you might genuinely not be able to tell the gender of the group from the noun alone. The article tells you, or it doesn\'t — and in some cases, you have to rely on context.'
        },
        {
          type: 'mistakes',
          heading: 'Edge-case <em>traps</em>',
          body: 'Where students slip on the unusual cases:',
          items: [
            'Trying to pluralize <strong>parabrisas</strong> — wrong. <em>"Parabrisases"</em> doesn\'t exist. The word is already plural-looking in the singular. Just change the article: <em>el parabrisas → los parabrisas</em>.',
            'Treating <strong>cumpleaños</strong> as plural — wrong. <em>"Mi cumpleaños son en marzo"</em> should be <em>"Mi cumpleaños es en marzo."</em> One birthday, even though the word ends in -s.',
            'Pluralizing <strong>days of the week ending in -s</strong> — wrong. <em>"Los luneses"</em> doesn\'t exist; it\'s <em>los lunes</em>. Only sábado and domingo change.',
            'Trying to singularize <strong>las gafas</strong> — usually wrong. <em>"Una gafa"</em> exists technically (one lens) but everyday Spanish uses <em>las gafas</em> as a unit. Same for <em>las tijeras, las vacaciones, los pantalones</em>.',
            'Adding -s to <strong>family names</strong> — wrong. <em>"Los Garcías"</em> should be <em>los García</em>. Surnames don\'t take plural marks; the article does the pluralizing.',
            'Pluralizing <strong>numbers themselves</strong> — wrong. <em>"Doses libros"</em> or <em>"diezes personas"</em> doesn\'t exist. Numbers are invariable. Only millón pluralizes to millones (with accent drop).',
            'Writing <strong>"las problemas"</strong> — wrong. <em>Problema</em> is masculine (Greek-origin), so the plural stays masculine: <em>los problemas</em>. Same for idioma, sistema, programa.',
            'Using <strong>cien</strong> when <em>cientos</em> is needed — wrong. "Hundreds of people" is <em>cientos de personas</em>, not "cien de personas." The "de + noun" construction triggers the plural form.',
            'Forgetting to drop the accent from <strong>millón → millones</strong> — wrong. <em>"Millónes"</em> should be <em>millones</em>. The accent disappears when the syllable count makes it unnecessary.',
            'Treating <strong>la crisis</strong> as if it\'s plural — wrong. The word looks plural because of the -s ending, but <em>la crisis</em> is singular. Check the article: <em>la</em> means singular, <em>las</em> means plural.'
          ]
        }
      ],
      quiz: [
        { q: 'What is the plural of "el parabrisas"?', options: [
          { text: 'los parabrisas', correct: true },
          { text: 'los parabrisases', correct: false },
          { text: 'las parabrisas', correct: false }
        ]},
        { q: 'How do you say "Mondays" in Spanish?', options: [
          { text: 'los luneses', correct: false },
          { text: 'los lunes', correct: true },
          { text: 'las lunes', correct: false }
        ]},
        { q: 'How do you say "the García family" (plural)?', options: [
          { text: 'los Garcías', correct: false },
          { text: 'los García', correct: true },
          { text: 'las Garcías', correct: false }
        ]}
      ]
    },

    // ============================================================================
    // LESSON 7 — Question Words (Spanish 1)
    // ============================================================================
    {
      id: 'question-words',
      num: '7',
      level: 'sp1',
      title: 'Question <em>words</em>',
      tag: 'Foundations · Questions',
      summary: 'Qué, cómo, cuándo, dónde, por qué, quién, cuál, cuánto — the words that let you ask anything. Plus how to answer with "porque" without confusing it with "por qué."',
      sections: [
        {
          heading: 'The <em>nine question words</em>',
          body: 'In Spanish, every question word carries an accent (and is wrapped in ¿…?). Memorize this short list — these nine cover essentially every question you\'ll ever ask:',
          conjugation: [
            ['<strong>¿qué?</strong>', 'what?'],
            ['<strong>¿cómo?</strong>', 'how? / what? (when asking about descriptions)'],
            ['<strong>¿cuándo?</strong>', 'when?'],
            ['<strong>¿dónde?</strong>', 'where?'],
            ['<strong>¿por qué?</strong>', 'why? (two words, both accented)'],
            ['<strong>¿quién? / ¿quiénes?</strong>', 'who? (singular / plural)'],
            ['<strong>¿cuál? / ¿cuáles?</strong>', 'which? / what? (when choosing)'],
            ['<strong>¿cuánto? / ¿cuánta? / ¿cuántos? / ¿cuántas?</strong>', 'how much? / how many? (agrees with noun)']
          ]
        },
        {
          heading: 'Examples in <em>action</em>',
          body: '',
          examples: [
            { es: '¿Qué quieres?', en: 'What do you want?' },
            { es: '¿Cómo estás?', en: 'How are you?' },
            { es: '¿Cuándo llegas?', en: 'When do you arrive?' },
            { es: '¿Dónde vives?', en: 'Where do you live?' },
            { es: '¿Por qué estudias español?', en: 'Why do you study Spanish?' },
            { es: '¿Quién es esa chica?', en: 'Who is that girl?' },
            { es: '¿Cuál prefieres, el rojo o el azul?', en: 'Which do you prefer, the red one or the blue one?' },
            { es: '¿Cuánto cuesta?', en: 'How much does it cost?' },
            { es: '¿Cuántas hermanas tienes?', en: 'How many sisters do you have?' }
          ]
        },
        {
          heading: 'The <em>cuál vs. qué</em> distinction',
          body: 'This is the single hardest question-word topic for English speakers, because both can translate as "what."<br><br>The honest rule:<br><br>• Use <strong>¿qué?</strong> when asking for a <strong>definition or identification</strong>. <em>¿Qué es esto?</em> (What is this?) — you want a definition.<br>• Use <strong>¿cuál?</strong> when asking to <strong>choose from options</strong>, even if the options aren\'t named. <em>¿Cuál es tu color favorito?</em> (What/which is your favorite color?) — choosing from the universe of colors.<br><br>A useful shortcut: if the question would make sense in English as "WHICH?", use cuál. If it really only makes sense as "WHAT?" (definition), use qué.<br><br>• <em>¿Qué es la libertad?</em> (What IS freedom? — asking for definition)<br>• <em>¿Cuál es la capital?</em> (What/which IS the capital? — choosing from options, even though the options "all capitals" aren\'t listed)<br><br>The trap: most English speakers default to "qué" for everything, but Spanish speakers use "cuál" far more often than you\'d expect. <em>"¿Cuál es tu nombre?"</em> (What\'s your name?) is more natural than <em>"¿Qué es tu nombre?"</em>'
        },
        {
          heading: '<em>Cuánto</em> agrees with what comes after',
          body: 'Unlike the other question words, <em>cuánto</em> changes form to match the noun it modifies. Four forms:<br><br>• <strong>¿cuánto?</strong> — masculine singular or general "how much"<br>• <strong>¿cuánta?</strong> — feminine singular<br>• <strong>¿cuántos?</strong> — masculine plural<br>• <strong>¿cuántas?</strong> — feminine plural',
          examples: [
            { es: '¿Cuánto dinero tienes?', en: 'How much money do you have? (dinero = masc. sing.)' },
            { es: '¿Cuánta agua hay?', en: 'How much water is there? (agua = fem. sing.)' },
            { es: '¿Cuántos hermanos tienes?', en: 'How many brothers do you have? (hermanos = masc. plur.)' },
            { es: '¿Cuántas hermanas tienes?', en: 'How many sisters do you have? (hermanas = fem. plur.)' },
            { es: '¿Cuánto cuesta?', en: 'How much does it cost? (no noun — general "how much")' }
          ]
        },
        {
          type: 'tip',
          heading: 'The four forms of <em>"por qué / porque"</em>',
          body: 'This is one of Spanish\'s most precise distinctions. There are FOUR similar-looking words. Memorize the difference once and you\'ll have it for life:<br><br><strong>1. ¿Por qué? (two words, accent)</strong> = "Why?" — used to ASK a question.<br><em>¿Por qué estudias español?</em> (Why do you study Spanish?)<br><br><strong>2. Porque (one word, no accent)</strong> = "Because" — used to ANSWER a question.<br><em>Estudio español porque me gusta.</em> (I study Spanish because I like it.)<br><br><strong>3. El porqué (one word, with accent, used as a noun)</strong> = "The reason / the why" — a noun meaning "the reason."<br><em>No entiendo el porqué de su decisión.</em> (I don\'t understand the reason for his decision.)<br><br><strong>4. Por que (two words, no accent — rare, formal)</strong> = "for which" — used in formal/literary contexts as "for which" or "by which." Usually replaceable by "por el que" or "por la cual."<br><em>La razón por que vine es obvia.</em> (The reason for which I came is obvious.) ← Formal/literary. Most speakers say <em>"por la que."</em><br><br>For Spanish 1, focus on the first two — <em>¿por qué?</em> for asking, <em>porque</em> for answering. The other two come later.'
        },
        {
          heading: 'Asking questions: <em>word order</em>',
          body: 'Spanish has flexible word order, but the most common pattern for questions is:<br><br><strong>¿Question word + verb + subject?</strong><br><br>The subject (if mentioned at all) goes AFTER the verb in a question — opposite of English.<br><br>• <em>¿Dónde vive María?</em> (Where does María live?) — verb (vive) before subject (María)<br>• <em>¿Qué quiere tu hermano?</em> (What does your brother want?)<br>• <em>¿Cuándo llegan tus padres?</em> (When do your parents arrive?)<br><br>You can also skip the subject entirely (since the verb ending tells you):<br><br>• <em>¿Dónde vives?</em> (Where do you live? — "tú" is implied by "vives")<br>• <em>¿Por qué estudian?</em> (Why do they study? — "ellos" implied by "estudian")'
        },
        {
          type: 'tip',
          heading: 'The <em>¿…?</em> punctuation rule',
          body: 'Spanish wraps questions in BOTH an upside-down opening question mark AND a regular closing one:<br><br>• <em>¿Cómo te llamas?</em><br>• <em>¿Cuántos años tienes?</em><br><br>The <em>¿</em> goes at the start of the actual question, not always at the start of the sentence. If a sentence begins with context, the <em>¿</em> appears where the question actually starts:<br><br>• <em>Y tú, ¿cómo estás?</em> (And you, how are you?)<br>• <em>Oye, ¿qué hora es?</em> (Hey, what time is it?)<br><br>Same rule applies to exclamation: <em>¡Qué bonito!</em> (How beautiful!) uses upside-down opening too.<br><br>On Chromebooks and US keyboards, this is annoying to type — which is why we added the punctuation buttons that pop up when you focus a text field.'
        },
        {
          type: 'mistakes',
          heading: 'Question word <em>traps</em>',
          body: 'Where students slip:',
          items: [
            'Forgetting the <strong>accent</strong> on question words — wrong. <em>"Que quieres?"</em> should be <em>"¿Qué quieres?"</em> The accent is required on every interrogative use of qué, cómo, cuándo, dónde, quién, cuál, cuánto, and the qué in por qué.',
            'Using <strong>qué for "which"</strong> when choosing from options — usually unnatural. <em>"¿Qué es tu color favorito?"</em> should be <em>"¿Cuál es tu color favorito?"</em> When choosing from a set (even an unstated set), use cuál.',
            'Mixing up <strong>¿por qué? and porque</strong> in writing — write the question with two words and accent, the answer with one word and no accent. <em>"¿Porqué vienes?"</em> (one word) is wrong as a question.',
            'Forgetting to <strong>agree cuánto</strong> with the noun — wrong. <em>"¿Cuánto hermanas tienes?"</em> should be <em>"¿Cuántas hermanas tienes?"</em> (hermanas is feminine plural).',
            'Using <strong>quién</strong> for "who" with a plural subject — wrong. <em>"¿Quién son ellos?"</em> should be <em>"¿Quiénes son ellos?"</em> Spanish has a plural form: quiénes.',
            'Forgetting the <strong>opening ¿</strong> in writing — wrong. <em>"Cómo estás?"</em> should be <em>"¿Cómo estás?"</em> Spanish requires both marks.',
            'Putting the <strong>subject before the verb</strong> in questions — sounds unnatural. <em>"¿Dónde María vive?"</em> should be <em>"¿Dónde vive María?"</em> Verb before subject in questions.',
            'Using <strong>cómo</strong> when "what" would actually make more sense — interesting trap. <em>"¿Cómo te llamas?"</em> is literally "How are you called?" but means "What\'s your name?" Same with <em>"¿Cómo se dice X en español?"</em> (How do you say X in Spanish?). Cómo carries the "what" meaning when asking about descriptions or methods.',
            'Confusing <strong>de dónde, a dónde, por dónde</strong> — different prepositions. <em>¿De dónde eres?</em> (Where are you from?). <em>¿Adónde vas?</em> (Where to are you going?). <em>¿Por dónde paso?</em> (Which way do I go through?). The preposition shifts the meaning.',
            'Mixing up <strong>"qué hora es"</strong> and <strong>"a qué hora"</strong> — different questions. <em>¿Qué hora es?</em> = What time is it? <em>¿A qué hora?</em> = At what time? Different answers required.'
          ]
        }
      ],
      quiz: [
        { q: '_____ es la capital de Perú?', options: [
          { text: '¿Qué', correct: false },
          { text: '¿Cuál', correct: true },
          { text: '¿Quién', correct: false }
        ]},
        { q: 'Estudio español _____ me gusta la cultura latina.', options: [
          { text: 'por qué', correct: false },
          { text: 'porque', correct: true },
          { text: 'porqué', correct: false }
        ]},
        { q: '_____ hermanas tienes?', options: [
          { text: '¿Cuánto', correct: false },
          { text: '¿Cuántos', correct: false },
          { text: '¿Cuántas', correct: true }
        ]}
      ]
    },

    // ============================================================================
    // LESSON 8 — Hay (and había, habrá) (Spanish 1)
    // ============================================================================
    {
      id: 'hay-there-is',
      num: '8',
      level: 'sp1',
      title: '<em>Hay</em> — "there is" / "there are"',
      tag: 'Foundations · Existence',
      summary: 'The one-word verb that does the job of "there is" AND "there are" in English. Plus its past form (había) and future form (habrá).',
      sections: [
        {
          heading: 'One word, <em>two meanings</em>',
          body: 'Spanish has a beautifully efficient way to say "there is" and "there are": one word, <strong>hay</strong> (pronounced like English "eye").<br><br>It comes from the verb <em>haber</em> (the same verb you use as a helper in the present perfect: <em>he comido</em>). When used to mean "there is/are," <em>haber</em> only ever appears as <strong>hay</strong>. The form doesn\'t change based on what comes after — same word for singular OR plural.',
          examples: [
            { es: 'Hay un libro en la mesa.', en: 'There is a book on the table. (singular)' },
            { es: 'Hay tres libros en la mesa.', en: 'There are three books on the table. (plural — same word!)' },
            { es: 'Hay mucha gente en el parque.', en: 'There are many people in the park.' },
            { es: 'No hay pan.', en: 'There is no bread.' },
            { es: 'Hay un problema.', en: 'There is a problem.' },
            { es: '¿Hay clase mañana?', en: 'Is there class tomorrow?' }
          ]
        },
        {
          heading: 'How to <em>ask</em> with hay',
          body: 'For questions, just add question marks. The word order stays the same — no inversion needed.',
          examples: [
            { es: '¿Hay un baño aquí?', en: 'Is there a bathroom here?' },
            { es: '¿Cuántos estudiantes hay en la clase?', en: 'How many students are there in the class?' },
            { es: '¿Hay algo de comer?', en: 'Is there anything to eat?' },
            { es: '¿Qué hay en tu mochila?', en: 'What\'s in your backpack? (lit. "what is there in...")' }
          ]
        },
        {
          heading: 'How to <em>negate</em> hay',
          body: 'Just add <strong>no</strong> before it.',
          examples: [
            { es: 'No hay tiempo.', en: 'There is no time.' },
            { es: 'No hay nadie aquí.', en: 'There is no one here.' },
            { es: 'No hay problema.', en: 'There is no problem.' },
            { es: 'No hay nada en la mesa.', en: 'There is nothing on the table.' }
          ]
        },
        {
          heading: '<em>Hay</em> in other tenses',
          body: 'When you need to say "there WAS / there WERE / there WILL BE," haber shifts to its imperfect or future forms — but still stays as ONE word for both singular and plural:',
          conjugation: [
            ['Present', '<strong>hay</strong> (there is / there are)'],
            ['Imperfect (past description)', '<strong>había</strong> (there was / there were)'],
            ['Preterite (past completed)', '<strong>hubo</strong> (there was / there were — one moment)'],
            ['Future', '<strong>habrá</strong> (there will be)'],
            ['Conditional', '<strong>habría</strong> (there would be)']
          ]
        },
        {
          heading: 'Examples across <em>tenses</em>',
          body: '',
          examples: [
            { es: 'Hoy hay tres exámenes.', en: 'Today there are three exams. (present)' },
            { es: 'Había mucha gente en la fiesta.', en: 'There were many people at the party. (imperfect — describing the scene)' },
            { es: 'Hubo un accidente anoche.', en: 'There was an accident last night. (preterite — one specific event)' },
            { es: 'Habrá clase mañana.', en: 'There will be class tomorrow. (future)' },
            { es: 'Habría más estudiantes si no lloviera.', en: 'There would be more students if it weren\'t raining. (conditional)' }
          ]
        },
        {
          type: 'tip',
          heading: '<em>Hay</em> vs. <em>estar</em>',
          body: 'These two get confused all the time. Here\'s the honest distinction:<br><br>• <strong>Hay</strong> introduces something for the first time — answers "what exists?" or "what\'s there?"<br>• <strong>Está/Están</strong> describes a KNOWN thing\'s location — answers "where is it?"<br><br>Compare:<br><br>• <em>Hay un libro en la mesa.</em> (There IS a book on the table.) → introducing the book; we didn\'t know it was there.<br>• <em>El libro está en la mesa.</em> (THE book is on the table.) → we already know about the book; saying where it is.<br><br>Quick rule: if you can put "a/an/some" before the noun in English, use hay. If you can put "the" before it, use estar.<br><br>• "There\'s A problem." → <em>Hay un problema.</em><br>• "THE problem is serious." → <em>El problema es/está serio.</em><br>• "There ARE people in the park." → <em>Hay gente en el parque.</em><br>• "THE people are in the park." → <em>La gente está en el parque.</em>'
        },
        {
          type: 'tip',
          heading: 'Common <em>expressions</em> with hay',
          body: 'Some phrases use hay in ways worth memorizing:<br><br>• <strong>hay que + infinitive</strong> = "one must / one has to" — a general necessity, no specific subject. <em>Hay que estudiar.</em> (One must study. / You have to study. / We need to study.)<br>• <strong>no hay de qué</strong> = "you\'re welcome / no problem" — literal: "there isn\'t of what (to thank for)"<br>• <strong>¿qué hay?</strong> = "what\'s up?" — casual greeting in some regions<br>• <strong>hay veces (que)</strong> = "there are times (when)" — <em>Hay veces que no entiendo nada.</em> (There are times when I don\'t understand anything.)<br><br>The <em>hay que</em> construction is huge — it\'s the most natural way to express obligation without specifying who. Different from <em>tener que</em> (which requires a subject) and <em>deber</em> (more formal). You\'ll hear hay que constantly in spoken Spanish.'
        },
        {
          type: 'mistakes',
          heading: '<em>Hay</em> traps',
          body: 'Where students slip:',
          items: [
            'Trying to <strong>pluralize hay</strong> — wrong. <em>"Hayn cinco libros"</em> doesn\'t exist. Hay is invariable: same word for one or many.',
            'Using <strong>"es" or "son"</strong> instead of hay — wrong. <em>"Es un problema"</em> means "it is a problem" (identifying something). <em>"Hay un problema"</em> means "there is a problem" (saying it exists). Different meanings!',
            'Mixing up <strong>hay and está</strong> — common trap. <em>"Hay el libro en la mesa"</em> is wrong (you can\'t use hay with "el" = the, a definite article). With "el/la/los/las," use está/están. With "un/una/unos/unas/numbers," use hay.',
            'Forgetting that <strong>había is for description</strong>, not for one event — subtle. <em>"Había un accidente"</em> = "There was an accident going on" (describing a scene). <em>"Hubo un accidente"</em> = "An accident happened" (the event itself). Preterite vs. imperfect distinction applies to haber too.',
            'Using <strong>habían</strong> as a plural — VERY common error, even among native speakers. <em>"Habían tres personas"</em> is widely heard but technically wrong. Standard grammar says <em>"había tres personas"</em> — había stays singular regardless of what follows. (You\'ll hear "habían" plenty in spoken Spanish; recognize it, but write "había" in formal contexts.)',
            'Translating "<strong>there is/are</strong>" literally as something with ser — wrong. English "there is" doesn\'t mean ALLÍ ES (literal). The "there" is a structural placeholder, not a location. Use hay.',
            'Confusing <strong>hay que</strong> with <strong>tener que</strong> — different uses. <em>Hay que estudiar</em> = general advice/necessity, no subject. <em>Tienes que estudiar</em> = YOU specifically have to study. Hay que is impersonal; tener que is personal.'
          ]
        }
      ],
      quiz: [
        { q: 'How do you say "There are five students" in Spanish?', options: [
          { text: 'Es cinco estudiantes.', correct: false },
          { text: 'Hay cinco estudiantes.', correct: true },
          { text: 'Están cinco estudiantes.', correct: false }
        ]},
        { q: 'How do you say "There was a party last night"? (one event)', options: [
          { text: 'Había una fiesta anoche.', correct: false },
          { text: 'Hubo una fiesta anoche.', correct: true },
          { text: 'Hay una fiesta anoche.', correct: false }
        ]},
        { q: '"_____ estudiar más" = "One has to study more."', options: [
          { text: 'Tener que', correct: false },
          { text: 'Hay que', correct: true },
          { text: 'Es que', correct: false }
        ]}
      ]
    },

    // ============================================================================
    // LESSON 9 — Contractions: AL and DEL (Spanish 1)
    // ============================================================================
    // Slotted slightly later than subject pronouns because students need to know
    // "el/la/los/las" and basic prepositions before contractions make sense.
    {
      id: 'contractions-al-del',
      num: '9',
      level: 'sp1',
      title: 'Contractions: <em>al</em> and <em>del</em>',
      tag: 'Foundations · Articles',
      summary: 'Spanish has only TWO mandatory contractions: a + el = al, and de + el = del. They\'re short, but they\'re required — leaving them uncontracted is wrong.',
      sections: [
        {
          heading: 'The two <em>mandatory</em> contractions',
          body: 'English has lots of optional contractions (don\'t, can\'t, won\'t — but "do not, cannot, will not" are also fine). Spanish has only TWO contractions, but they\'re REQUIRED — you can\'t skip them.<br><br><strong>1. a + el = al</strong> (meaning "to the")<br>When the preposition <em>a</em> ("to / at") meets the masculine singular article <em>el</em> ("the"), they MUST combine into <em>al</em>.<br><br><strong>2. de + el = del</strong> (meaning "of the" / "from the")<br>When <em>de</em> ("of / from") meets <em>el</em>, they MUST combine into <em>del</em>.<br><br>That\'s the entire list. Two contractions. They\'re everywhere — in addresses, dates, talking about going places, describing things — and you cannot skip them.'
        },
        {
          heading: 'Examples with <em>"al"</em>',
          body: '',
          examples: [
            { es: 'Voy al cine.', en: 'I\'m going to the movies. (NOT "voy a el cine")' },
            { es: 'Llegamos al hotel a las nueve.', en: 'We arrive at the hotel at nine.' },
            { es: 'Mi hermano va al gimnasio cada día.', en: 'My brother goes to the gym every day.' },
            { es: 'Vamos al parque.', en: 'We\'re going to the park.' },
            { es: 'Llamé al doctor.', en: 'I called the doctor. (a + personal a + el doctor = al doctor)' }
          ]
        },
        {
          heading: 'Examples with <em>"del"</em>',
          body: '',
          examples: [
            { es: 'El libro es del profesor.', en: 'The book belongs to the teacher. (NOT "de el profesor")' },
            { es: 'Vengo del parque.', en: 'I\'m coming from the park.' },
            { es: 'Es la casa del señor García.', en: 'It\'s Mr. García\'s house. (lit. "the house of the Mr. García")' },
            { es: 'El primero de mayo es el Día del Trabajador.', en: 'May 1st is Worker\'s Day. (of the worker)' },
            { es: 'Salgo del trabajo a las cinco.', en: 'I leave work at five.' }
          ]
        },
        {
          type: 'tip',
          heading: 'When the contractions <em>DON\'T</em> happen',
          body: 'Only ONE article triggers contraction: the masculine singular <em>el</em>. The other articles (<em>la, los, las</em>) NEVER contract. So:<br><br>• <em>a + la = a la</em> (no contraction) — <em>Voy a la escuela.</em><br>• <em>a + los = a los</em> (no contraction) — <em>Voy a los conciertos.</em><br>• <em>a + las = a las</em> (no contraction) — <em>Voy a las tiendas.</em><br>• <em>de + la = de la</em> (no contraction) — <em>El libro es de la profesora.</em><br>• <em>de + los = de los</em> — <em>el coche de los padres.</em><br>• <em>de + las = de las</em> — <em>la maestra de las niñas.</em><br><br>Only masculine singular contracts. The others stay as two words.<br><br>Also: when <em>el</em> is part of a proper name or capitalized title (like a movie or book title — <em>El Padrino</em>, <em>El Quijote</em>), it does NOT contract:<br><br>• <em>Vamos a ver El Padrino esta noche.</em> (Not "al Padrino")<br>• <em>El autor de El Quijote es Cervantes.</em> (Not "del Quijote")<br><br>The contraction only applies when <em>el</em> is functioning as the everyday article "the," not when it\'s part of a title or name.'
        },
        {
          type: 'tip',
          heading: 'The "<em>personal a</em>" + contractions',
          body: 'In Spanish, when a verb takes a person as its direct object, you add <strong>a</strong> before the person. This is called the "personal a."<br><br>• <em>Veo a María.</em> (I see María.) — personal a before a name<br>• <em>Llamo a mi mamá.</em> (I call my mom.)<br><br>If the person is described with <em>el</em>, the personal <em>a + el</em> still contracts to <em>al</em>:<br><br>• <em>Veo al profesor.</em> (I see the teacher.) ← <em>a + el profesor → al profesor</em><br>• <em>Conozco al jefe de tu hermano.</em> (I know your brother\'s boss.)<br><br>The personal a is sneaky. It looks invisible in English because we don\'t mark it. But Spanish DOES — and if the object is "the [masculine person]," the contraction rule kicks in just like with movement.'
        },
        {
          type: 'mistakes',
          heading: 'Contraction <em>traps</em>',
          body: 'Where students slip:',
          items: [
            'Writing <strong>"a el"</strong> instead of <strong>"al"</strong> — wrong. <em>"Voy a el cine"</em> should be <em>"Voy al cine."</em> Contraction is mandatory.',
            'Writing <strong>"de el"</strong> instead of <strong>"del"</strong> — wrong. <em>"El libro es de el profesor"</em> should be <em>"del profesor."</em>',
            'Trying to contract with <strong>la, los, las</strong> — wrong. Only <em>el</em> contracts. <em>"Voy ala escuela"</em> is wrong; it stays <em>"a la escuela."</em> No contraction with la, los, las, or with un/una/unos/unas.',
            'Contracting <strong>el</strong> when it\'s part of a title — wrong. <em>"Voy a ver al Padrino"</em> should be <em>"Voy a ver El Padrino"</em> if you mean the movie. The article in titles stays uncontracted.',
            'Forgetting that <strong>personal a + el</strong> contracts — wrong. <em>"Veo a el profesor"</em> should be <em>"Veo al profesor."</em> Personal a follows the same rule.',
            'Trying to contract <strong>él</strong> (with accent — the pronoun "he") — wrong. <em>Él</em> is the subject pronoun "he," not the article "the." Different word. <em>"Voy con él"</em> stays <em>"con él"</em> — no contraction. The accent matters!',
            'Confusing <strong>de</strong> with <strong>del</strong> when no article is needed — sometimes the <em>de</em> alone is correct because there\'s no article. <em>"Soy de Cincinnati"</em> (I\'m from Cincinnati) — no <em>el</em> needed; no contraction. <em>"Soy del Perú"</em> (I\'m from Peru) — Spanish historically uses <em>el</em> with some country names, so it contracts to <em>del</em>.',
            'Writing <strong>"al"</strong> when it should be just "a" — there must be a noun after for the contraction to apply. <em>"Voy al"</em> alone is incomplete. The full form is <em>"voy al cine, al parque, al banco"</em> etc.'
          ]
        }
      ],
      quiz: [
        { q: 'Which is correct: "I\'m going to the movies"?', options: [
          { text: 'Voy a el cine.', correct: false },
          { text: 'Voy al cine.', correct: true },
          { text: 'Voy ael cine.', correct: false }
        ]},
        { q: 'Which is correct: "The car of the teacher (m.)"?', options: [
          { text: 'El coche de el profesor.', correct: false },
          { text: 'El coche del profesor.', correct: true },
          { text: 'El coche de la profesor.', correct: false }
        ]},
        { q: 'Which is correct? (la profesora is feminine)', options: [
          { text: 'Hablo a la profesora.', correct: true },
          { text: 'Hablo ala profesora.', correct: false },
          { text: 'Hablo al profesora.', correct: false }
        ]}
      ]
    },

    {
      id: 'subject-pronouns',
      num: '10',
      level: 'sp1',
      title: 'Subject <em>pronouns</em>',
      tag: 'Foundations · Pronouns',
      summary: 'Yo, tú, él, ella, nosotros… the words that mean "I, you, he, she, we, they."',
      sections: [
        {
          heading: 'The <em>six</em> subject groups',
          body: 'Spanish verbs change form depending on who is doing the action. There are six "people" — six different conjugations. Learn the pronouns first; then verb endings will make sense.',
          conjugation: [
            ['1st sing. — I', '<span class="ending">yo</span>'],
            ['2nd sing. — you (informal)', '<span class="ending">tú</span>'],
            ['3rd sing. — he / she / you (formal)', '<span class="ending">él / ella / usted</span>'],
            ['1st plur. — we', '<span class="ending">nosotros / nosotras</span>'],
            ['2nd plur. — you all (Spain)', '<span class="ending">vosotros / vosotras</span>'],
            ['3rd plur. — they / you all', '<span class="ending">ellos / ellas / ustedes</span>']
          ]
        },
        {
          heading: 'Tú vs. <em>usted</em>',
          body: '<strong>Tú</strong> is informal — used with friends, family, kids, classmates. <strong>Usted</strong> (often abbreviated Ud.) is formal — used to show respect to elders, teachers, strangers, or in professional settings. <strong>Usted</strong> uses he/she verb endings (3rd person singular) even though it means "you." This trips people up at first — just memorize it.'
        },
        {
          heading: 'Vosotros: only in <em>Spain</em>',
          body: '<strong>Vosotros</strong> means "you all" — but only people in Spain use it regularly. In Latin America, "you all" is always <strong>ustedes</strong>, even in casual speech. If you\'re studying Spanish for travel in Mexico or South America, you can mostly skip vosotros. (Most US schools teach Latin American Spanish.)'
        },
        {
          heading: 'Nosotros vs. <em>nosotras</em>',
          body: 'Use <strong>nosotros</strong> for a group that includes any men, or for mixed groups. Use <strong>nosotras</strong> only for groups that are all female. Same logic for ellos/ellas (they) and vosotros/vosotras (Spain "you all").',
          examples: [
            { es: 'Yo soy estudiante.', en: 'I am a student.' },
            { es: 'Tú hablas español muy bien.', en: 'You speak Spanish very well.' },
            { es: 'Ella es mi hermana.', en: 'She is my sister.' },
            { es: 'Nosotros vivimos en Cincinnati.', en: 'We live in Cincinnati.' },
            { es: 'Ustedes son muy amables.', en: 'You all are very kind.' }
          ]
        },
        {
          heading: 'Compound <em>subjects</em>',
          body: 'In real Spanish, subjects often combine: "María y yo," "Tú y Carlos," "Julia y María." These take the same verb endings as the pronoun they\'re equivalent to. The rule is simple:',
          conjugation: [
            ['Anything + <strong>yo</strong>', '→ <span class="ending">nosotros / nosotras</span> (we form)'],
            ['Anything + <strong>tú</strong> (no yo)', '→ <span class="ending">ustedes</span> (Latin Am.) / <span class="ending">vosotros</span> (Spain)'],
            ['Two third-person subjects', '→ <span class="ending">ellos / ellas</span> (they form)']
          ]
        },
        {
          heading: 'Examples in <em>action</em>',
          body: 'Notice: the verb agrees with the GROUP the subject describes — not just the last person in the list.',
          examples: [
            { es: 'María y yo cantamos.', en: 'María and I sing. (María + yo = nosotros → cantamos)' },
            { es: 'Mi hermana y yo somos estudiantes.', en: 'My sister and I are students. (= nosotras → somos)' },
            { es: 'Tú y Carlos viven aquí.', en: 'You and Carlos live here. (= ustedes → viven, in Latin Am.)' },
            { es: 'Julia y María hablan español.', en: 'Julia and María speak Spanish. (= ellas → hablan)' },
            { es: 'Pedro y Ana trabajan juntos.', en: 'Pedro and Ana work together. (= ellos → trabajan)' }
          ]
        },
        {
          heading: 'Gender with compound <em>subjects</em>',
          body: 'When the compound subject becomes nosotros/ellos/vosotros: if everyone in the group is female, use the feminine form (nosotras, ellas, vosotras). If even ONE male is in the group, use the masculine form. <em>"Mi hermana y yo (a girl)"</em> = nosotras. <em>"Mi hermano y yo (a girl)"</em> = nosotros, because there\'s a male.'
        },
        {
          type: 'tip',
          heading: 'Where you\'ll see <em>different</em> forms',
          body: 'Spanish has regional variation in subject pronouns:<br><br>• <strong>Vosotros</strong> (you all, informal) is used in <strong>Spain</strong>. In Latin America, most speakers use <em>ustedes</em> for "you all" regardless of formality.<br><br>• <strong>Vos</strong> (you, informal singular) is used instead of (or alongside) <em>tú</em> in <strong>Argentina, Uruguay, Paraguay, Costa Rica, Guatemala, parts of Colombia and Central America</strong>. Argentines say <em>vos sos</em> instead of <em>tú eres</em>. This is called <em>voseo</em> — you\'ll meet it in a future lesson.<br><br>For US Spanish classes, <em>tú</em> and <em>ustedes</em> are the safe defaults. But don\'t be surprised when you hear <em>vos</em> in real Argentine speech.'
        },
        {
          type: 'mistakes',
          heading: 'Pronoun <em>traps</em>',
          body: 'These show up in nearly every Spanish 1 class:',
          items: [
            'Using <strong>"yo"</strong> too much — Spanish verbs already show who\'s doing the action, so you usually drop the pronoun. Say <em>Hablo español</em>, not <em>Yo hablo español</em>. Use <em>yo</em> only for emphasis or contrast (<em>Yo hablo español; ella habla inglés.</em>).',
            'Forgetting to use <strong>usted</strong> with teachers, elders, and strangers — using <em>tú</em> with the wrong person can be disrespectful. When in doubt, use usted.',
            'Confusing <strong>tú</strong> (you) and <strong>tu</strong> (your) — both exist, but the subject pronoun has an accent: <em>Tú tienes tu libro</em> (You have your book).',
            'Using <strong>"ellos"</strong> for a mixed group with all-female-except-one-man — actually correct! Even one male in the group makes it ellos. This isn\'t a mistake but it surprises students.',
            'Treating <strong>"vosotros"</strong> as required vocabulary — only Spaniards use it. In Latin America, just learn ustedes and you\'re fine for both formal and informal "you all."',
            'Saying <strong>"nosotros somos amigos"</strong> when both speakers are women — should be <em>nosotras somos amigas</em>. Pronouns and adjectives both agree.'
          ]
        }
      ],
      quiz: [
        { q: 'Which pronoun would you use to address your teacher politely?', options: [
          { text: 'tú', correct: false },
          { text: 'usted', correct: true },
          { text: 'vosotros', correct: false }
        ]},
        { q: 'In Latin America, "you all" (informal or formal) is:', options: [
          { text: 'vosotros', correct: false },
          { text: 'tú', correct: false },
          { text: 'ustedes', correct: true }
        ]},
        { q: '"María y yo" takes the same verb form as which pronoun?', options: [
          { text: 'yo', correct: false },
          { text: 'nosotros / nosotras', correct: true },
          { text: 'ellos / ellas', correct: false }
        ]}
      ]
    },
    {
      id: 'ar-verbs',
      num: '11',
      level: 'sp1',
      title: 'Regular <em>-AR</em> verbs',
      tag: 'Foundations · Verbs',
      summary: 'How to conjugate verbs ending in -ar — like hablar (to speak) and estudiar (to study) — in the present tense.',
      sections: [
        {
          heading: 'The <em>infinitive</em> form',
          body: 'A verb in its base form is called the <strong>infinitive</strong>. In English, infinitives start with "to" — to speak, to eat, to live. In Spanish, every infinitive ends in <strong>-ar</strong>, <strong>-er</strong>, or <strong>-ir</strong>. To conjugate a regular -ar verb in the present tense: drop the -ar, add the right ending for who\'s doing the action.'
        },
        {
          heading: 'Hablar — <em>to speak</em>',
          body: 'Drop the -ar from <strong>habl<u>ar</u></strong>, leaving the stem <strong>habl-</strong>. Then add the endings:',
          conjugation: [
            ['yo', 'habl<span class="ending">o</span>  (I speak)'],
            ['tú', 'habl<span class="ending">as</span>  (you speak)'],
            ['él / ella / usted', 'habl<span class="ending">a</span>  (he / she / you speak)'],
            ['nosotros', 'habl<span class="ending">amos</span>  (we speak)'],
            ['vosotros', 'habl<span class="ending">áis</span>  (you all — Spain)'],
            ['ellos / ellas / ustedes', 'habl<span class="ending">an</span>  (they / you all speak)']
          ]
        },
        {
          heading: 'The <em>same</em> endings work for every regular -AR verb',
          body: 'Once you know <strong>-o, -as, -a, -amos, -áis, -an</strong>, you can conjugate any regular -ar verb. Try it with <em>estudiar</em> (to study), <em>trabajar</em> (to work), <em>caminar</em> (to walk).',
          examples: [
            { es: 'Yo estudio español todos los días.', en: 'I study Spanish every day.' },
            { es: 'Mi padre trabaja en un hospital.', en: 'My father works in a hospital.' },
            { es: 'Nosotros caminamos al parque.', en: 'We walk to the park.' },
            { es: 'Ellos cantan en el coro.', en: 'They sing in the choir.' }
          ]
        },
        {
          heading: 'You usually <em>drop</em> the pronoun',
          body: 'Because the verb ending tells you who\'s doing the action, Spanish often drops the subject pronoun. <em>"Hablo español"</em> already means "I speak Spanish" — you don\'t need <em>yo</em>. Use the pronoun for emphasis or clarity ("YO hablo, no tú" — I speak, not you).'
        },
        {
          type: 'mistakes',
          heading: '-AR verb <em>traps</em>',
          body: 'These show up in nearly every Spanish 1 class:',
          items: [
            'Forgetting to <strong>drop the pronoun</strong> — students fresh from English want to say <em>"Yo hablo"</em> every time. Just <em>"Hablo"</em> is more natural.',
            'Confusing <strong>tú forms</strong> with <strong>él/ella</strong> forms — <em>hablas</em> (you speak) vs <em>habla</em> (he/she speaks). The "s" is everything.',
            'Forgetting the <strong>accent on vosotros</strong> — <em>habláis</em>, not "hablais." The accent is required.',
            'Writing <strong>"-amos"</strong> for nosotros when the verb is -ER or -IR — only -AR verbs end in <em>-amos</em>. -ER ends in <em>-emos</em>, -IR ends in <em>-imos</em>.',
            'Translating English <strong>"do/does"</strong> word-for-word — English uses "do" for questions ("Do you speak Spanish?"), but Spanish doesn\'t. Just ask <em>"¿Hablas español?"</em> — no extra verb needed.',
            'Translating English <strong>"-ing"</strong> as a -AR verb — "I am speaking" is just <em>"Hablo"</em> in Spanish, not <em>"estoy hablando"</em> unless you really need that specific ongoing-action emphasis. Default to the simple present.'
          ]
        }
      ],
      quiz: [
        { q: 'What is the "yo" form of cantar (to sing)?', options: [
          { text: 'cantas', correct: false },
          { text: 'canto', correct: true },
          { text: 'cantamos', correct: false }
        ]},
        { q: 'Which sentence means "We work on Mondays"?', options: [
          { text: 'Trabajo los lunes.', correct: false },
          { text: 'Trabajan los lunes.', correct: false },
          { text: 'Trabajamos los lunes.', correct: true }
        ]},
        { q: 'The "ellos" ending for regular -ar verbs is:', options: [
          { text: '-an', correct: true },
          { text: '-en', correct: false },
          { text: '-amos', correct: false }
        ]}
      ]
    },
    {
      id: 'er-ir-verbs',
      num: '12',
      level: 'sp1',
      title: 'Regular <em>-ER</em> and <em>-IR</em> verbs',
      tag: 'Foundations · Verbs',
      summary: 'Verbs ending in -er (comer, beber) and -ir (vivir, escribir) follow nearly the same pattern — with one tiny difference.',
      sections: [
        {
          heading: 'Comer — <em>to eat</em> (an -ER verb)',
          body: 'Drop the -er, add the endings:',
          conjugation: [
            ['yo', 'com<span class="ending">o</span>  (I eat)'],
            ['tú', 'com<span class="ending">es</span>  (you eat)'],
            ['él / ella / usted', 'com<span class="ending">e</span>  (he / she / you eat)'],
            ['nosotros', 'com<span class="ending">emos</span>  (we eat)'],
            ['vosotros', 'com<span class="ending">éis</span>  (you all — Spain)'],
            ['ellos / ellas / ustedes', 'com<span class="ending">en</span>  (they / you all eat)']
          ]
        },
        {
          heading: 'Vivir — <em>to live</em> (an -IR verb)',
          body: '-IR verbs use almost the same endings — only "nosotros" and "vosotros" differ.',
          conjugation: [
            ['yo', 'viv<span class="ending">o</span>  (I live)'],
            ['tú', 'viv<span class="ending">es</span>  (you live)'],
            ['él / ella / usted', 'viv<span class="ending">e</span>  (he / she / you live)'],
            ['nosotros', 'viv<span class="ending">imos</span>  (we live) ← different!'],
            ['vosotros', 'viv<span class="ending">ís</span>  (you all — Spain) ← different!'],
            ['ellos / ellas / ustedes', 'viv<span class="ending">en</span>  (they / you all live)']
          ]
        },
        {
          heading: 'The <em>only</em> difference between -ER and -IR',
          body: 'They share four endings out of six! Only <strong>nosotros</strong> (-emos vs -imos) and <strong>vosotros</strong> (-éis vs -ís) differ. So really, learn -ar endings, then -er endings, then just adjust two endings for -ir verbs.',
          examples: [
            { es: 'Yo como pizza los viernes.', en: 'I eat pizza on Fridays.' },
            { es: 'Nosotros leemos en clase.', en: 'We read in class.' },
            { es: 'Tú vives en Cincinnati.', en: 'You live in Cincinnati.' },
            { es: 'Mis primos escriben cartas.', en: 'My cousins write letters.' }
          ]
        },
        {
          type: 'mistakes',
          heading: 'Where -ER and -IR <em>diverge</em>',
          body: 'The two patterns are MOSTLY identical, except for two forms. That\'s where the mistakes happen:',
          items: [
            '<strong>Nosotros</strong> form — -ER verbs use <em>-emos</em>, -IR verbs use <em>-imos</em>. So <em>comemos</em> (we eat) but <em>vivimos</em> (we live). Easy to flip if you\'re not paying attention.',
            '<strong>Vosotros</strong> form — -ER uses <em>-éis</em>, -IR uses <em>-ís</em>. <em>Coméis</em> vs <em>vivís</em>. Both have accents.',
            'Writing <strong>"-amos"</strong> on an -ER or -IR verb — that\'s an -AR ending. <em>"Comamos"</em> is NOT "we eat" (it\'s a subjunctive form). Correct is <em>"comemos."</em>',
            'Confusing <strong>"tú" comes</strong> with the noun <em>"comes"</em> in English — yes, the Spanish word for "you eat" looks identical to the English word "comes" (a different verb). Trust the grammar.',
            'Writing <strong>vivar</strong> or <strong>comir</strong> — these aren\'t real verbs. The infinitives are <em>vivir</em> (to live) and <em>comer</em> (to eat). Make sure you have the right -IR vs -ER.',
            'Forgetting that <strong>most "I see/I hear/I do"</strong> verbs are -ER or -IR — ver (to see), oír (to hear), comer, escribir, vivir. -AR is more often for "regular daily activities" (hablar, trabajar, caminar) while -ER and -IR cover more cognitive and creative actions.'
          ]
        }
      ],
      quiz: [
        { q: 'What is the "tú" form of comer (to eat)?', options: [
          { text: 'comes', correct: true },
          { text: 'comas', correct: false },
          { text: 'come', correct: false }
        ]},
        { q: 'Which is the "nosotros" form of vivir (to live)?', options: [
          { text: 'vivemos', correct: false },
          { text: 'vivimos', correct: true },
          { text: 'vivamos', correct: false }
        ]},
        { q: 'How many endings do -er and -ir verbs share?', options: [
          { text: 'All six', correct: false },
          { text: 'Four out of six', correct: true },
          { text: 'Only two', correct: false }
        ]}
      ]
    },
    {
      id: 'ser-vs-estar',
      num: '13',
      level: 'sp1',
      title: '<em>Ser</em> vs. <em>Estar</em>',
      tag: 'Common confusions · Verbs',
      summary: 'Spanish has two verbs that both mean "to be." Knowing which to use is one of the biggest steps to sounding natural.',
      sections: [
        {
          heading: 'Two verbs, <em>one</em> English meaning',
          body: 'Both <strong>ser</strong> and <strong>estar</strong> mean "to be." But they\'re used in different situations. The simplest rule of thumb: <strong>ser</strong> = permanent / essential / who you are. <strong>estar</strong> = temporary / location / how you feel right now.'
        },
        {
          heading: 'Conjugating <em>ser</em>',
          body: 'Ser is irregular — memorize it.',
          conjugation: [
            ['yo', '<span class="ending">soy</span>'],
            ['tú', '<span class="ending">eres</span>'],
            ['él / ella / usted', '<span class="ending">es</span>'],
            ['nosotros', '<span class="ending">somos</span>'],
            ['vosotros', '<span class="ending">sois</span>'],
            ['ellos / ellas / ustedes', '<span class="ending">son</span>']
          ]
        },
        {
          heading: 'Conjugating <em>estar</em>',
          body: 'Estar is also irregular. Note the accents on most forms.',
          conjugation: [
            ['yo', '<span class="ending">estoy</span>'],
            ['tú', '<span class="ending">estás</span>'],
            ['él / ella / usted', '<span class="ending">está</span>'],
            ['nosotros', '<span class="ending">estamos</span>'],
            ['vosotros', '<span class="ending">estáis</span>'],
            ['ellos / ellas / ustedes', '<span class="ending">están</span>']
          ]
        },
        {
          heading: 'When to use <em>ser</em>',
          body: 'Identity, profession, origin, nationality, time, dates, possession, material — basically anything <strong>essential</strong> or <strong>permanent</strong>.',
          examples: [
            { es: 'Soy estudiante.', en: 'I am a student. (identity)' },
            { es: 'Ella es de México.', en: 'She is from Mexico. (origin)' },
            { es: 'Es la una.', en: 'It is one o\'clock. (time)' },
            { es: 'El libro es de María.', en: 'The book is María\'s. (possession)' }
          ]
        },
        {
          heading: 'When to use <em>estar</em>',
          body: 'Feelings, locations, conditions, ongoing actions — basically anything <strong>temporary</strong> or <strong>changeable</strong>.',
          examples: [
            { es: 'Estoy cansado.', en: 'I am tired. (feeling)' },
            { es: 'Madrid está en España.', en: 'Madrid is in Spain. (location)' },
            { es: 'La sopa está caliente.', en: 'The soup is hot. (condition)' },
            { es: 'Ellos están estudiando.', en: 'They are studying. (ongoing action)' }
          ]
        },
        {
          heading: 'The <em>changing-meaning</em> adjectives — important',
          body: 'Here\'s where ser vs estar gets fascinating. Some adjectives <strong>change their meaning completely</strong> depending on whether you use <em>ser</em> or <em>estar</em>. Mixing these up can be embarrassing or just plain confusing. Memorize this list:',
          examples: [
            { es: 'ser aburrido / estar aburrido', en: 'to be BORING (personality) / to be BORED (right now)' },
            { es: 'ser listo / estar listo', en: 'to be SMART / to be READY' },
            { es: 'ser rico / estar rico', en: 'to be RICH (wealthy) / to be DELICIOUS (food) or HOT/attractive' },
            { es: 'ser malo / estar malo', en: 'to be BAD (a bad person) / to be SICK or to taste BAD' },
            { es: 'ser bueno / estar bueno', en: 'to be GOOD (a good person) / to taste GOOD or look attractive (food/people)' },
            { es: 'ser verde / estar verde', en: 'to be GREEN (color) / to be UNRIPE or INEXPERIENCED' },
            { es: 'ser cansado / estar cansado', en: 'to be TIRESOME / to be TIRED' },
            { es: 'ser vivo / estar vivo', en: 'to be CLEVER, sharp / to be ALIVE' },
            { es: 'ser orgulloso / estar orgulloso', en: 'to be ARROGANT / to be PROUD (of something specific)' },
            { es: 'ser callado / estar callado', en: 'to be QUIET by nature / to be QUIET right now (silent)' }
          ]
        },
        {
          type: 'tip',
          heading: 'The <em>mental model</em> — ser vs estar',
          body: 'Forget the "permanent vs temporary" rule from earlier — it works most of the time but breaks down on some cases (someone is dead — that\'s permanent, but you say <em>está muerto</em>). A better model:<br><br>• <strong>Ser</strong> answers "WHAT IS IT?" — the essential identity, the inherent quality, who or what something fundamentally is.<br>• <strong>Estar</strong> answers "HOW IS IT?" or "WHERE IS IT?" — the state, condition, or location at a moment in time.<br><br><em>El cielo es azul</em> (the sky IS blue — that\'s its identity).<br><em>El cielo está nublado</em> (the sky is cloudy right now — that\'s its current state).<br><br>Try the "what is it / how is it" test before defaulting to "permanent vs temporary." It catches more cases correctly.'
        },
        {
          type: 'mistakes',
          heading: 'Ser vs Estar — <em>the big traps</em>',
          body: 'This is the hardest concept in Spanish 1. Here are the mistakes that show up over and over:',
          items: [
            'Using <strong>ser</strong> for location — almost always wrong. Locations use <em>estar</em>: <em>"Estoy en casa"</em> (I am at home), <em>"Los libros están en la mesa"</em> (the books are on the table). The ONE exception: events use <em>ser</em> for "where they take place" (<em>"La fiesta es en mi casa"</em> — the party IS at my house).',
            'Using <strong>estar</strong> for who someone IS — wrong. Professions, nationalities, and identity always use <em>ser</em>: <em>"Soy estudiante"</em>, <em>"Soy americano"</em>, <em>"Es mi hermano."</em>',
            'Saying <strong>"Soy aburrido"</strong> when you mean "I am bored" — this actually means "I am a boring person." For "I am bored RIGHT NOW," say <em>"Estoy aburrido."</em> Big difference.',
            'Saying <strong>"La comida está rica"</strong> to mean "the food IS rich" — actually correct! But know what it means: it means "the food is DELICIOUS." For "rich food" (fattening), use a different word like <em>"pesado"</em> or <em>"grasoso."</em>',
            'Confusing <strong>"ser de"</strong> (origin/material) with <strong>"estar de"</strong> (temporary role) — <em>"Soy de Cincinnati"</em> (I am FROM Cincinnati) vs <em>"Estoy de mesero"</em> (I am WORKING as a waiter, temporarily). Different uses.',
            'Using <strong>ser</strong> for feelings and moods — wrong. <em>"Estoy feliz"</em> (I am happy right now), not <em>"Soy feliz."</em> Though <em>"Soy una persona feliz"</em> (I am a happy person, by nature) IS correct because it describes identity.',
            'Saying <strong>"Es las tres"</strong> for "it\'s three o\'clock" — should be <em>"Son las tres."</em> Time uses <em>ser</em>, AND it uses the plural <em>son</em> for any hour except 1:00 (<em>"Es la una"</em>).',
            'Using <strong>estar</strong> for dates — should be <em>ser</em>. <em>"Hoy es lunes"</em> (today IS Monday), not <em>"Hoy está lunes."</em>',
            'Translating English <strong>"to be"</strong> as a single Spanish verb — there isn\'t one. You have to choose ser or estar every single time. There\'s no shortcut. The good news: once you internalize the patterns, it becomes automatic.'
          ]
        }
      ],
      quiz: [
        { q: 'Which sentence is correct: "I am a teacher"?', options: [
          { text: 'Yo estoy maestro.', correct: false },
          { text: 'Yo soy maestro.', correct: true },
          { text: 'Yo está maestro.', correct: false }
        ]},
        { q: 'Which sentence is correct: "The coffee is hot"?', options: [
          { text: 'El café es caliente.', correct: false },
          { text: 'El café está caliente.', correct: true },
          { text: 'El café son caliente.', correct: false }
        ]},
        { q: 'For describing where something is located, you use:', options: [
          { text: 'ser', correct: false },
          { text: 'estar', correct: true },
          { text: 'either one', correct: false }
        ]}
      ]
    },
    {
      id: 'adjective-agreement',
      num: '14',
      level: 'sp1',
      title: 'Adjective <em>agreement</em>',
      tag: 'Foundations · Adjectives',
      summary: 'Adjectives in Spanish change form to match the noun they describe — gender and number must agree.',
      sections: [
        {
          heading: 'Adjectives <em>change</em> with the noun',
          body: 'In English, "tall" doesn\'t change: a tall boy, a tall girl, tall children. In Spanish, the adjective shifts to match the noun in <strong>gender</strong> and <strong>number</strong>.'
        },
        {
          heading: 'The four forms',
          body: 'For adjectives ending in -o, you have four forms — masculine singular, feminine singular, masculine plural, feminine plural.',
          conjugation: [
            ['Masc. singular', 'el chico <span class="ending">alto</span>  (the tall boy)'],
            ['Fem. singular', 'la chica <span class="ending">alta</span>  (the tall girl)'],
            ['Masc. plural', 'los chicos <span class="ending">altos</span>  (the tall boys)'],
            ['Fem. plural', 'las chicas <span class="ending">altas</span>  (the tall girls)']
          ]
        },
        {
          heading: 'Adjectives ending in <em>-e</em> or a consonant',
          body: 'Adjectives ending in -e or in a consonant don\'t change between masculine and feminine — they only show plural forms.',
          conjugation: [
            ['Sing.', 'un libro <span class="ending">grande</span> / una mesa <span class="ending">grande</span>  (a big book / a big table)'],
            ['Plur.', 'libros <span class="ending">grandes</span> / mesas <span class="ending">grandes</span>'],
            ['Sing.', 'un examen <span class="ending">difícil</span> / una clase <span class="ending">difícil</span>'],
            ['Plur.', 'exámenes <span class="ending">difíciles</span> / clases <span class="ending">difíciles</span>']
          ]
        },
        {
          heading: 'Adjectives go <em>after</em> the noun (usually)',
          body: 'In Spanish, adjectives almost always come AFTER the noun: <em>una casa <strong>grande</strong></em> (a big house), <em>un libro <strong>interesante</strong></em>. A few common adjectives like <em>bueno, malo, gran</em> can go before for emphasis.',
          examples: [
            { es: 'La casa roja es bonita.', en: 'The red house is pretty.' },
            { es: 'Tengo dos perros pequeños.', en: 'I have two small dogs.' },
            { es: 'Es una clase interesante.', en: 'It\'s an interesting class.' },
            { es: 'Las profesoras son simpáticas.', en: 'The (female) teachers are nice.' }
          ]
        },
        {
          heading: 'When <em>position</em> changes meaning',
          body: 'Most adjectives in Spanish go AFTER the noun: <em>un libro interesante</em>, <em>una casa grande</em>. But a small group of common adjectives can go EITHER before or after — and the meaning <strong>changes</strong> depending on position. This trips students up constantly.<br><br>The pattern: <strong>after the noun = literal/objective meaning</strong>; <strong>before the noun = figurative/subjective meaning</strong>.',
          examples: [
            { es: 'un amigo viejo', en: 'an OLD friend (literally elderly)' },
            { es: 'un viejo amigo', en: 'a LONG-TIME friend (known for years; could be young)' },
            { es: 'un hombre grande', en: 'a BIG / LARGE man (physical size)' },
            { es: 'un gran hombre', en: 'a GREAT man (admirable; "gran" before masc. singular)' },
            { es: 'una mujer pobre', en: 'a POOR woman (no money)' },
            { es: 'una pobre mujer', en: 'a POOR (pitiful, unfortunate) woman' },
            { es: 'mi propia casa', en: 'my OWN house (ownership)' },
            { es: 'mi casa propia', en: 'my OWN house (also possession, very similar)' },
            { es: 'un coche nuevo', en: 'a NEW car (brand new, just made)' },
            { es: 'un nuevo coche', en: 'a NEW car (new TO ME — maybe used)' },
            { es: 'el mismo libro', en: 'the SAME book' },
            { es: 'el libro mismo', en: 'the book ITSELF' }
          ]
        },
        {
          type: 'tip',
          heading: 'The <em>"gran" rule</em>',
          body: 'A few common adjectives <strong>shorten</strong> when they come before a masculine singular noun:<br><br>• <em>grande</em> → <em>gran</em> (before any singular noun, masc. or fem.): <em>un gran hombre, una gran mujer</em><br>• <em>bueno</em> → <em>buen</em> (before masc. singular): <em>un buen amigo</em> (NOT "un bueno amigo")<br>• <em>malo</em> → <em>mal</em> (before masc. singular): <em>un mal día</em> (a bad day)<br>• <em>primero</em> → <em>primer</em> (before masc. singular): <em>el primer día</em> (the first day)<br>• <em>tercero</em> → <em>tercer</em> (before masc. singular): <em>el tercer libro</em><br>• <em>ninguno</em> → <em>ningún</em>; <em>alguno</em> → <em>algún</em><br><br>These shorter forms are NOT optional — they\'re required.'
        },
        {
          type: 'mistakes',
          heading: 'Agreement <em>traps</em>',
          body: 'The classic agreement mistakes:',
          items: [
            'Putting the adjective in <strong>English order</strong> — saying <em>"la roja casa"</em> instead of <em>"la casa roja."</em> In Spanish, most descriptive adjectives come AFTER the noun.',
            'Forgetting to make the adjective <strong>plural</strong> — <em>"las casas roja"</em> is wrong. Both the noun AND the adjective must be plural: <em>"las casas rojas."</em>',
            'Forgetting the <strong>feminine form</strong> when describing a woman or feminine noun — <em>"María es alto"</em> is wrong. Use <em>alta</em>.',
            'Treating adjectives that end in <strong>-e or a consonant</strong> as if they had to change for gender — they don\'t. <em>"Inteligente"</em> works for males and females (un chico inteligente, una chica inteligente). Same with <em>fácil, joven, popular, feliz</em>.',
            'Not shortening <strong>bueno/malo/primero</strong> before masculine singular nouns — <em>"un bueno día"</em> should be <em>"un buen día."</em> <em>"El primero día"</em> should be <em>"el primer día."</em>',
            'Writing <strong>"grande"</strong> before a masculine singular noun — should be <em>gran</em>: <em>"un gran hombre,"</em> not <em>"un grande hombre."</em>',
            'Treating <strong>nationalities</strong> as proper nouns and capitalizing them — <em>mexicano</em>, <em>americano</em>, <em>peruano</em> are all lowercase in Spanish. The country names ARE capitalized, but the nationalities are not.'
          ]
        }
      ],
      quiz: [
        { q: 'How would you say "the small girls" (chica = girl, pequeño = small)?', options: [
          { text: 'las chicas pequeño', correct: false },
          { text: 'las chicas pequeñas', correct: true },
          { text: 'los chicos pequeños', correct: false }
        ]},
        { q: 'The adjective "grande" with a feminine plural noun (mesas) becomes:', options: [
          { text: 'grande', correct: false },
          { text: 'grandas', correct: false },
          { text: 'grandes', correct: true }
        ]},
        { q: 'In Spanish, adjectives most often appear:', options: [
          { text: 'before the noun', correct: false },
          { text: 'after the noun', correct: true },
          { text: 'wherever you want', correct: false }
        ]}
      ]
    },
    {
      id: 'weather',
      num: '15',
      level: 'sp1',
      title: 'Talking about the <em>weather</em>',
      tag: 'Practical Spanish · Weather',
      summary: 'How to ask "what\'s the weather like?" and describe sun, rain, cold, heat, and seasons.',
      sections: [
        {
          heading: 'The basic <em>question</em>',
          body: 'In Spanish, the most common way to ask about the weather uses the verb <strong>hacer</strong> (to make / to do). Literally, the question asks "what weather does it make?" — but it just means "what\'s the weather like?"',
          examples: [
            { es: '¿Qué tiempo hace?', en: 'What\'s the weather like?' },
            { es: '¿Cómo está el clima?', en: 'How\'s the weather/climate?' },
            { es: '¿Qué tiempo hace hoy?', en: 'What\'s the weather like today?' }
          ]
        },
        {
          heading: 'Weather expressions with <em>hacer</em>',
          body: 'Most weather descriptions use "hace" (third person singular of hacer). Notice that English uses "is" but Spanish uses "makes" — don\'t translate word-for-word.',
          conjugation: [
            ['It is sunny', '<span class="ending">Hace</span> sol'],
            ['It is hot', '<span class="ending">Hace</span> calor'],
            ['It is cold', '<span class="ending">Hace</span> frío'],
            ['It is windy', '<span class="ending">Hace</span> viento'],
            ['It is cool', '<span class="ending">Hace</span> fresco'],
            ['It is nice weather', '<span class="ending">Hace</span> buen tiempo'],
            ['It is bad weather', '<span class="ending">Hace</span> mal tiempo']
          ]
        },
        {
          heading: 'Other weather verbs (<em>not</em> hacer)',
          body: 'Some weather phenomena don\'t use hacer — they have their own verbs. These work like English "it rains" / "it snows".',
          conjugation: [
            ['It rains / It is raining', '<span class="ending">Llueve</span> (from llover)'],
            ['It snows / It is snowing', '<span class="ending">Nieva</span> (from nevar)'],
            ['It is cloudy', '<span class="ending">Está</span> nublado'],
            ['It is sunny (alt.)', '<span class="ending">Está</span> soleado'],
            ['There is fog', '<span class="ending">Hay</span> niebla'],
            ['There is a storm', '<span class="ending">Hay</span> tormenta']
          ]
        },
        {
          heading: 'Seasons — <em>las estaciones</em>',
          body: 'The four seasons of the year. Note: in the Southern Hemisphere (Argentina, Chile, Peru below the equator), the seasons are flipped — December is summer there!',
          conjugation: [
            ['Spring', 'la <span class="ending">primavera</span>'],
            ['Summer', 'el <span class="ending">verano</span>'],
            ['Fall / Autumn', 'el <span class="ending">otoño</span>'],
            ['Winter', 'el <span class="ending">invierno</span>']
          ]
        },
        {
          heading: 'Useful <em>vocabulary</em>',
          body: 'A few more weather words you\'ll hear constantly.',
          examples: [
            { es: 'la lluvia', en: 'the rain' },
            { es: 'la nieve', en: 'the snow' },
            { es: 'el sol', en: 'the sun' },
            { es: 'la nube', en: 'the cloud' },
            { es: 'el viento', en: 'the wind' },
            { es: 'la tormenta', en: 'the storm' },
            { es: 'el relámpago', en: 'lightning' },
            { es: 'el trueno', en: 'thunder' },
            { es: 'el paraguas', en: 'the umbrella' }
          ]
        },
        {
          heading: 'Sample <em>conversation</em>',
          body: 'How a real conversation about weather might go:',
          examples: [
            { es: '— ¿Qué tiempo hace en Cincinnati hoy?', en: 'What\'s the weather like in Cincinnati today?' },
            { es: '— Hace frío y está nublado. Tal vez llueva.', en: 'It\'s cold and cloudy. Maybe it will rain.' },
            { es: '— Aquí en Lima hace sol y calor.', en: 'Here in Lima it\'s sunny and hot.' },
            { es: '— ¡Qué envidia!', en: 'I\'m jealous!' }
          ]
        },
        {
          type: 'tip',
          heading: 'Three verbs, three <em>weather patterns</em>',
          body: 'Spanish uses different verbs for different kinds of weather, and you have to know which goes with which. Here\'s the mental map:<br><br>• <strong>HACER + noun</strong> — for "objective" weather conditions (the kind you describe with nouns like <em>sol, frío, calor, viento</em>). <em>Hace sol.</em> <em>Hace frío.</em> Literally "it makes sun / it makes cold."<br><br>• <strong>ESTAR + adjective</strong> — for cloud/sky states (described with adjectives). <em>Está nublado.</em> (It\'s cloudy.) <em>Está despejado.</em> (It\'s clear.)<br><br>• <strong>The verb itself</strong> — for precipitation (its own verb). <em>Llueve.</em> (It rains.) <em>Nieva.</em> (It snows.) These conjugate only in 3rd person.<br><br>Quick rule of thumb: if you\'re describing something the sky IS, use estar. If you\'re describing what the weather IS DOING with elements (sun, wind, cold), use hace. If something is falling from the sky, use the verb itself.'
        },
        {
          type: 'mistakes',
          heading: 'Weather <em>traps</em>',
          body: 'Where students go wrong when talking about the weather:',
          items: [
            'Saying <strong>"es sol"</strong> or <strong>"está sol"</strong> — wrong. Use <em>"hace sol."</em> Sun, wind, heat, and cold all use HACE, not ES or ESTÁ.',
            'Saying <strong>"hace nublado"</strong> — wrong. Nublado is an ADJECTIVE (cloudy), so it pairs with estar: <em>"está nublado."</em>',
            'Translating "I am cold" as <strong>"Estoy frío"</strong> — this means "I am cold (to the touch)" like a dead body. For "I feel cold," use TENER: <em>"Tengo frío."</em> Same with hot: <em>"Tengo calor"</em> (I feel hot), not "estoy caliente" (which has a sexual connotation).',
            'Trying to conjugate <strong>llover or nevar in the "yo" or "tú" form</strong> — these verbs only conjugate in 3rd person singular. <em>Llueve.</em> <em>Nieva.</em> There\'s no "yo lluevo."',
            'Using <strong>"caliente"</strong> for weather — <em>caliente</em> describes objects (a cup of coffee). For "hot weather," use <em>"hace calor."</em>',
            'Forgetting that <strong>weather can use the imperfect</strong> in past narration — <em>"Hacía sol y los pájaros cantaban"</em> (It was sunny and the birds were singing). When setting a past scene, weather goes in the imperfect.'
          ]
        }
      ],
      quiz: [
        { q: 'How do you say "It\'s sunny" in Spanish?', options: [
          { text: 'Es sol', correct: false },
          { text: 'Hace sol', correct: true },
          { text: 'Está sol', correct: false }
        ]},
        { q: 'Which of these does NOT use "hace"?', options: [
          { text: 'It rains (llueve)', correct: true },
          { text: 'It is hot', correct: false },
          { text: 'It is windy', correct: false }
        ]},
        { q: 'In December, in Argentina, what season is it?', options: [
          { text: 'invierno (winter)', correct: false },
          { text: 'verano (summer)', correct: true },
          { text: 'otoño (fall)', correct: false }
        ]}
      ]
    },
    {
      id: 'gustar',
      num: '16',
      level: 'sp1',
      title: '<em>Gustar</em> & "backward" verbs',
      tag: 'Tricky verbs · Likes & dislikes',
      summary: 'Gustar doesn\'t mean "to like" — it means "to be pleasing to." Once you see the pattern, a whole family of verbs makes sense.',
      sections: [
        {
          heading: 'Gustar is "<em>backward</em>"',
          body: 'In English: "I like pizza." (I = subject, pizza = object). In Spanish: <em>"Me gusta la pizza"</em> — but it literally means <strong>"Pizza is pleasing to me"</strong>. The pizza is the subject; "me" (to me) is the indirect object. This flip is why students get tripped up.'
        },
        {
          heading: 'The <em>real</em> formula',
          body: 'Use only TWO forms of gustar in most cases: <strong>gusta</strong> (when one thing is pleasing) and <strong>gustan</strong> (when several things are pleasing). The pronoun before it tells you who likes it.',
          conjugation: [
            ['(to me) — me', '<span class="ending">me</span> gusta / <span class="ending">me</span> gustan'],
            ['(to you, informal) — te', '<span class="ending">te</span> gusta / <span class="ending">te</span> gustan'],
            ['(to him/her/you formal) — le', '<span class="ending">le</span> gusta / <span class="ending">le</span> gustan'],
            ['(to us) — nos', '<span class="ending">nos</span> gusta / <span class="ending">nos</span> gustan'],
            ['(to you all, Spain) — os', '<span class="ending">os</span> gusta / <span class="ending">os</span> gustan'],
            ['(to them/you all) — les', '<span class="ending">les</span> gusta / <span class="ending">les</span> gustan']
          ]
        },
        {
          heading: 'Singular vs. <em>plural</em>',
          body: 'The verb agrees with what is liked, NOT who likes it. <em>"Me gusta el libro"</em> (one book → gusta). <em>"Me gustan los libros"</em> (multiple books → gustan). When followed by an infinitive verb (or several), use the singular: <em>"Me gusta cantar y bailar"</em>.',
          examples: [
            { es: 'Me gusta el chocolate.', en: 'I like chocolate. (lit: "Chocolate is pleasing to me.")' },
            { es: 'Me gustan los perros.', en: 'I like dogs. (plural noun → gustan)' },
            { es: 'A Marcos le gusta el fútbol.', en: 'Marcos likes soccer.' },
            { es: 'Nos gusta viajar.', en: 'We like to travel.' },
            { es: '¿Te gustan las películas de terror?', en: 'Do you like horror movies?' }
          ]
        },
        {
          heading: 'The "<em>a</em>" trick for clarification',
          body: 'Because <em>le</em> and <em>les</em> can mean "to him, to her, to you (formal), to them, to you all," Spanish often adds <em>a + person</em> at the start to clarify or emphasize: <em>"<strong>A mi madre</strong> le gusta el café"</em> (My mother likes coffee). For emphasis with "me, te" too: <em>"<strong>A mí</strong> me gusta el té"</em> (I like tea — me, specifically).'
        },
        {
          heading: 'Other "<em>backward</em>" verbs work the same way',
          body: 'A whole family of verbs follows this pattern. Once you know gustar, you can use these instantly:',
          conjugation: [
            ['encantar', 'to love (something) — Me encanta la música.'],
            ['interesar', 'to be interesting to — Me interesa la historia.'],
            ['molestar', 'to bother — Me molesta el ruido.'],
            ['faltar', 'to be missing / lacking — Me falta dinero.'],
            ['doler (o→ue)', 'to hurt — Me duele la cabeza.'],
            ['importar', 'to matter / care about — No me importa.'],
            ['fascinar', 'to fascinate — Me fascinan las estrellas.'],
            ['quedar', 'to have left / fit — Me quedan dos dólares.']
          ]
        },
        {
          type: 'tip',
          heading: 'The <em>"backward verb" mental model</em>',
          body: 'Here\'s the trick that makes gustar finally click. <strong>Gustar doesn\'t actually mean "to like."</strong> It literally means "<em>to be pleasing to</em>."<br><br>So the English sentence "I like pizza" — if you translate literally backward to Spanish — comes out as: "<em>Pizza is pleasing to me.</em>"<br><br>That\'s why the structure looks "backward": the PIZZA is the subject (it\'s the thing doing the pleasing), and ME (or "to me") is the indirect object (the recipient).<br><br><em>Me gusta la pizza</em> = "To me, the pizza is pleasing." Literal but accurate.<br><br>Once you flip your mental model this way, the rest follows automatically:<br><br>• The verb agrees with what is pleasing (singular thing → <em>gusta</em>, plural things → <em>gustan</em>), NOT with the person who likes.<br>• "I like X" needs <em>me gusta(n)</em>, not "yo gusto."<br>• "Yo gusto" actually means "<em>I am pleasing</em>" — i.e., I am attractive. Watch out!'
        },
        {
          type: 'mistakes',
          heading: 'Gustar <em>traps</em>',
          body: 'The five most common gustar mistakes:',
          items: [
            'Saying <strong>"Yo gusto"</strong> for "I like" — this actually means "I am pleasing" (i.e., I am attractive). Use <em>"Me gusta…"</em> instead. This is the #1 mistake; correcting it instantly makes you sound more fluent.',
            'Saying <strong>"Me gusto"</strong> with -o ending — wrong. Gustar conjugates based on the THING that\'s pleasing, not on you. Singular thing → <em>me gusta</em>. Plural things → <em>me gustan</em>. Never "me gusto" unless you mean "I am pleasing to myself" (vain).',
            'Forgetting to <strong>match singular/plural</strong> — <em>"Me gusta los tacos"</em> is wrong (tacos is plural). Should be <em>"Me gustan los tacos."</em> The verb matches what you like.',
            'Forgetting to include the <strong>article</strong> — <em>"Me gusta pizza"</em> isn\'t quite right; should be <em>"Me gusta la pizza."</em> Use the definite article (el/la/los/las) with the thing being liked.',
            'Confusing <strong>"me gusta él"</strong> and <strong>"él me gusta"</strong> — both technically work but the structure feels different. To say "I like him," <em>"Me gusta él"</em> or just <em>"Me gusta"</em> with him implied is fine.',
            'Translating English <strong>"I love"</strong> as <em>amar</em> for things — in Spanish, <em>amar</em> is reserved for romantic love (or strong love for family/God). For "I love pizza," use <em>"Me encanta la pizza"</em> (literally "pizza enchants me"). Encantar is the "I love it" of casual speech.',
            'Forgetting that <strong>other backward verbs follow the same pattern</strong> — interesar, molestar, encantar, doler, faltar all work like gustar. <em>"Me duele la cabeza"</em> (my head hurts — literally "the head hurts to me"). <em>"Me interesan los libros"</em> (books interest me).'
          ]
        }
      ],
      quiz: [
        { q: 'Which is correct: "I like pizza"?', options: [
          { text: 'Yo gusto pizza.', correct: false },
          { text: 'Me gusta la pizza.', correct: true },
          { text: 'Yo me gusta pizza.', correct: false }
        ]},
        { q: 'How would you say "We like the books" (plural)?', options: [
          { text: 'Nos gusta los libros.', correct: false },
          { text: 'Nos gustan los libros.', correct: true },
          { text: 'Nosotros gustamos los libros.', correct: false }
        ]},
        { q: 'How would you say "My head hurts"?', options: [
          { text: 'Me duele la cabeza.', correct: true },
          { text: 'Yo duelo mi cabeza.', correct: false },
          { text: 'Me duelen la cabeza.', correct: false }
        ]}
      ]
    },
    {
      id: 'indefinites',
      num: '17',
      level: 'sp1',
      title: 'Indefinite & negative <em>words</em>',
      tag: 'Foundations · Vocabulary',
      summary: 'How to say "something/nothing," "someone/no one," "always/never," "also/neither" — and the famous Spanish double negative.',
      sections: [
        {
          heading: 'The matched <em>pairs</em>',
          body: 'Spanish has tidy pairs: every "indefinite" word (something, someone, always, also) has a "negative" partner (nothing, no one, never, neither). Learn them as pairs.',
          conjugation: [
            ['something', '<span class="ending">algo</span>  ↔  <span class="ending">nada</span>  (nothing)'],
            ['someone', '<span class="ending">alguien</span>  ↔  <span class="ending">nadie</span>  (no one)'],
            ['some / any', '<span class="ending">alguno/a</span>  ↔  <span class="ending">ninguno/a</span>  (none)'],
            ['always', '<span class="ending">siempre</span>  ↔  <span class="ending">nunca</span>  (never)'],
            ['also / too', '<span class="ending">también</span>  ↔  <span class="ending">tampoco</span>  (neither)'],
            ['or … or', '<span class="ending">o … o</span>  ↔  <span class="ending">ni … ni</span>  (neither … nor)']
          ]
        },
        {
          heading: 'The double <em>negative</em>',
          body: 'In English, "I don\'t have nothing" is bad grammar. In Spanish, it\'s mandatory! The standard pattern is: <strong>no</strong> + verb + <strong>negative word</strong>. Both negatives are required.',
          examples: [
            { es: 'No tengo nada.', en: 'I don\'t have anything. (lit: I don\'t have nothing.)' },
            { es: 'No veo a nadie.', en: 'I don\'t see anyone.' },
            { es: 'No voy nunca al gimnasio.', en: 'I never go to the gym.' },
            { es: 'No me gusta tampoco.', en: 'I don\'t like it either.' }
          ]
        },
        {
          heading: 'When the negative comes <em>first</em>',
          body: 'If you put the negative word BEFORE the verb, you drop the "no". Both versions are correct and equally common.',
          examples: [
            { es: 'Nada tengo. = No tengo nada.', en: 'I have nothing.' },
            { es: 'Nadie viene. = No viene nadie.', en: 'Nobody is coming.' },
            { es: 'Nunca como carne. = No como carne nunca.', en: 'I never eat meat.' }
          ]
        },
        {
          heading: 'Alguno and ninguno <em>shorten</em>',
          body: 'Before a masculine singular noun, <strong>alguno</strong> becomes <strong>algún</strong> and <strong>ninguno</strong> becomes <strong>ningún</strong>. They also have feminine forms (alguna, ninguna) and plural (algunos, algunas — but ninguno almost never goes plural in real speech).',
          examples: [
            { es: '¿Tienes algún libro de Lorca?', en: 'Do you have any books by Lorca? (masc. sing → algún)' },
            { es: 'No tengo ningún problema.', en: 'I don\'t have any problem.' },
            { es: 'Algunas chicas estudian aquí.', en: 'Some girls study here. (fem. plur → algunas)' }
          ]
        },
        {
          heading: 'También vs. <em>tampoco</em> in real conversation',
          body: 'These pop up constantly when agreeing or disagreeing with statements: <em>"Me gusta el café." — "A mí también."</em> (Me too.) <em>"No me gusta el café." — "A mí tampoco."</em> (Me neither.) Use <strong>también</strong> after positive statements, <strong>tampoco</strong> after negative ones.'
        },
        {
          type: 'tip',
          heading: 'The <em>double-negative rule</em>',
          body: 'In Spanish, two negatives DON\'T make a positive — they reinforce each other. This is the opposite of English, and it\'s where students go wrong constantly.<br><br>In English, "I don\'t have anything" uses ONE negative ("don\'t") and one positive ("anything").<br><br>In Spanish, "I don\'t have anything" uses TWO negatives: <em>"No tengo nada."</em> Literally "I don\'t have nothing" — which sounds wrong in English but is the only correct way in Spanish.<br><br>The rule: <strong>if the negative word comes AFTER the verb, you also need "no" BEFORE the verb.</strong><br><br>• <em>No tengo nada.</em> (I have nothing.) ← "no" + nada<br>• <em>No veo a nadie.</em> (I see no one.) ← "no" + nadie<br>• <em>No voy nunca al gimnasio.</em> (I never go to the gym.) ← "no" + nunca<br><br>OR you can flip the negative word to the FRONT and drop the "no":<br><br>• <em>Nada tengo.</em> (literary; uncommon)<br>• <em>Nunca voy al gimnasio.</em> (common — "Never do I go to the gym")<br><br>One negative before the verb OR two negatives sandwiching it. Never just one negative AFTER the verb.'
        },
        {
          type: 'mistakes',
          heading: 'Indefinite <em>traps</em>',
          body: 'Where students slip up on indefinites:',
          items: [
            'Saying <strong>"Tengo nada"</strong> for "I have nothing" — wrong, missing the "no." Should be <em>"No tengo nada"</em> (with two negatives) or <em>"Nada tengo"</em> (with negative first).',
            'Saying <strong>"No tengo algo"</strong> for "I don\'t have anything" — wrong. When the sentence is negative, switch the indefinite to its negative form: <em>"No tengo nada."</em> Algo and nada don\'t coexist in the same clause.',
            'Saying <strong>"Veo a nadie"</strong> — missing the "no." Should be <em>"No veo a nadie."</em>',
            'Confusing <strong>también and tampoco</strong> — también goes after positive statements ("Me gusta el café." → "A mí también."). Tampoco goes after negative statements ("No me gusta." → "A mí tampoco."). Mixing them up is a common slip.',
            'Forgetting the <strong>personal "a"</strong> with <em>alguien / nadie</em> when they\'re objects — <em>"Veo a alguien"</em> (I see someone), not <em>"Veo alguien."</em> When the direct object is a person, you need the "a."',
            'Using <strong>"algún / ningún"</strong> incorrectly with feminine nouns — these shorten before masculine singular nouns. With feminine, use the full form: <em>"alguna chica"</em> (NOT "algún chica"); <em>"ninguna idea"</em> (NOT "ningún idea").',
            'Treating <strong>"nada"</strong> as a synonym for "no" — they\'re different. <em>Nada</em> means "nothing." For "no" (as in answering a question), use <em>no</em>.'
          ]
        }
      ],
      quiz: [
        { q: 'How do you say "I don\'t have anything" in Spanish?', options: [
          { text: 'Yo tengo algo.', correct: false },
          { text: 'No tengo nada.', correct: true },
          { text: 'No tengo algo.', correct: false }
        ]},
        { q: 'Your friend says "No me gusta el brócoli." How do you agree?', options: [
          { text: 'A mí también.', correct: false },
          { text: 'A mí tampoco.', correct: true },
          { text: 'Yo siempre.', correct: false }
        ]},
        { q: 'What is the negative pair of "siempre"?', options: [
          { text: 'nada', correct: false },
          { text: 'nunca', correct: true },
          { text: 'tampoco', correct: false }
        ]}
      ]
    },
    {
      id: 'stem-changers',
      num: '18',
      level: 'sp1',
      title: 'Stem-<em>changing</em> verbs',
      tag: 'Verbs · Present tense',
      summary: 'Some verbs change their stem in 4 of 6 forms — a "boot" of changes. Once you see the pattern, hundreds of verbs make sense.',
      sections: [
        {
          heading: 'The "<em>boot</em>" pattern',
          body: 'In the present tense, certain verbs change a vowel in their stem — but only in <strong>4 out of 6</strong> forms. The "nosotros" and "vosotros" forms keep the original spelling. If you draw a box around the changed forms, it looks like a boot 👢.'
        },
        {
          heading: 'Type 1: e → ie',
          body: 'The "e" in the stem changes to "ie." Examples: <em>pensar</em> (to think), <em>querer</em> (to want), <em>preferir</em> (to prefer), <em>empezar</em> (to begin), <em>entender</em> (to understand), <em>perder</em> (to lose), <em>cerrar</em> (to close), <em>sentir</em> (to feel).',
          conjugation: [
            ['yo', 'p<span class="ending">ie</span>nso'],
            ['tú', 'p<span class="ending">ie</span>nsas'],
            ['él / ella / usted', 'p<span class="ending">ie</span>nsa'],
            ['nosotros', 'pensamos  ← no change!'],
            ['vosotros', 'pensáis  ← no change!'],
            ['ellos / ellas / ustedes', 'p<span class="ending">ie</span>nsan']
          ]
        },
        {
          heading: 'Type 2: o → ue',
          body: 'The "o" in the stem changes to "ue." Examples: <em>poder</em> (to be able to), <em>dormir</em> (to sleep), <em>volver</em> (to return), <em>encontrar</em> (to find), <em>recordar</em> (to remember), <em>contar</em> (to tell/count), <em>mostrar</em> (to show), <em>almorzar</em> (to have lunch).',
          conjugation: [
            ['yo', 'd<span class="ending">ue</span>rmo'],
            ['tú', 'd<span class="ending">ue</span>rmes'],
            ['él / ella / usted', 'd<span class="ending">ue</span>rme'],
            ['nosotros', 'dormimos  ← no change!'],
            ['vosotros', 'dormís  ← no change!'],
            ['ellos / ellas / ustedes', 'd<span class="ending">ue</span>rmen']
          ]
        },
        {
          heading: 'Type 3: e → i (only -IR verbs)',
          body: 'A small group of -IR verbs change "e" to plain "i". Examples: <em>pedir</em> (to ask for), <em>servir</em> (to serve), <em>repetir</em> (to repeat), <em>seguir</em> (to follow), <em>vestir</em> (to dress).',
          conjugation: [
            ['yo', 'p<span class="ending">i</span>do'],
            ['tú', 'p<span class="ending">i</span>des'],
            ['él / ella / usted', 'p<span class="ending">i</span>de'],
            ['nosotros', 'pedimos  ← no change!'],
            ['vosotros', 'pedís  ← no change!'],
            ['ellos / ellas / ustedes', 'p<span class="ending">i</span>den']
          ]
        },
        {
          heading: 'Type 4: u → ue (just <em>jugar</em>)',
          body: 'Only one common verb does this: <strong>jugar</strong> (to play). Same boot pattern.',
          conjugation: [
            ['yo', 'j<span class="ending">ue</span>go'],
            ['tú', 'j<span class="ending">ue</span>gas'],
            ['él / ella / usted', 'j<span class="ending">ue</span>ga'],
            ['nosotros', 'jugamos  ← no change!'],
            ['vosotros', 'jugáis  ← no change!'],
            ['ellos / ellas / ustedes', 'j<span class="ending">ue</span>gan']
          ]
        },
        {
          heading: 'Quick examples in <em>context</em>',
          body: '',
          examples: [
            { es: 'Yo quiero un café.', en: 'I want a coffee. (querer: e→ie)' },
            { es: 'Ella duerme ocho horas.', en: 'She sleeps eight hours. (dormir: o→ue)' },
            { es: 'Pedimos pizza los viernes.', en: 'We order pizza on Fridays. (pedir → no change in nosotros)' },
            { es: 'Mis hermanos juegan al fútbol.', en: 'My brothers play soccer. (jugar: u→ue)' }
          ]
        },
        {
          type: 'tip',
          heading: 'The <em>"boot"</em> mental model',
          body: 'Here\'s the trick that makes stem-changers click: when you write out the six conjugated forms in a 2x3 grid (yo/nosotros, tú/vosotros, él/ellos), the forms that STEM-CHANGE form a "boot" shape — yo, tú, él, and ellos change. Nosotros and vosotros DON\'T change.<br><br><strong>The boot:</strong><br>• yo: qu<strong>ie</strong>ro ✓ change<br>• tú: qu<strong>ie</strong>res ✓ change<br>• él: qu<strong>ie</strong>re ✓ change<br>• nosotros: queremos ✗ NO change<br>• vosotros: queréis ✗ NO change<br>• ellos: qu<strong>ie</strong>ren ✓ change<br><br>The "boot" includes everything except the long side along the middle (nosotros and vosotros). Why? Because the stress falls on a different syllable in those forms. The stem only changes when it\'s stressed.<br><br>Remember: <strong>only the present tense uses the boot pattern</strong>. In the imperfect, future, and conditional, stem-changers behave like regular verbs (no boot, no stem change). The preterite has its own rule for -IR stem-changers (only the 3rd person changes — covered in the preterite lesson).'
        },
        {
          type: 'mistakes',
          heading: 'Stem-changer <em>traps</em>',
          body: 'The patterns are predictable, but these are where students slip:',
          items: [
            'Changing the stem in <strong>nosotros / vosotros</strong> — wrong. Those forms stay regular. <em>"Nosotros queremos"</em> (NOT "quieremos"). <em>"Nosotros dormimos"</em> (NOT "duermimos").',
            'Forgetting that <strong>jugar is u→ue</strong>, not o→ue — it\'s the only u→ue verb in everyday Spanish. <em>"Yo juego al fútbol"</em> (NOT "jugo"). Easy to forget because it\'s a unique pattern.',
            'Confusing <strong>pedir (e→i)</strong> with <strong>perder (e→ie)</strong> — both have an "e" but they change differently. <em>"Pido un café"</em> (pedir = to order/ask for, e→i) vs <em>"pierdo el libro"</em> (perder = to lose, e→ie).',
            'Trying to stem-change <strong>regular -AR / -ER / -IR verbs</strong> like hablar or comer — they don\'t change. Stem-changing is a property of specific verbs you have to learn, not a rule that applies to all verbs.',
            'Forgetting that stem-changers <strong>also affect the present subjunctive</strong> — same boot pattern. <em>"Quiera, quieras, quiera, queramos, queráis, quieran."</em> Save this for later but know it\'s coming.',
            'Trying to stem-change verbs in the <strong>imperfect or conditional</strong> — they DON\'T stem-change in those tenses. <em>"Yo dormía"</em> (NOT "duermía"), <em>"yo dormiría"</em> (NOT "duermiría"). The stem only changes in the present and (for -IR verbs) in the preterite 3rd person.',
            'Memorizing every stem-changer as a separate exception — better strategy: learn the patterns (e→ie, o→ue, e→i, u→ue) and the verbs that fit each, then trust the boot pattern.'
          ]
        }
      ],
      quiz: [
        { q: 'Which form of "querer" (e→ie) goes with "yo"?', options: [
          { text: 'quero', correct: false },
          { text: 'quiero', correct: true },
          { text: 'queremos', correct: false }
        ]},
        { q: 'What is the "nosotros" form of "dormir" (o→ue)?', options: [
          { text: 'duermos', correct: false },
          { text: 'duermimos', correct: false },
          { text: 'dormimos', correct: true }
        ]},
        { q: 'In stem-changing verbs in the present tense, which TWO forms do NOT change?', options: [
          { text: 'yo and tú', correct: false },
          { text: 'nosotros and vosotros', correct: true },
          { text: 'él and ellos', correct: false }
        ]}
      ]
    },
    {
      id: 'ir-dar-ver',
      num: '19',
      level: 'sp1',
      title: '<em>Ir</em>, <em>dar</em>, and <em>ver</em>',
      tag: 'Irregular verbs · Present tense',
      summary: 'Three of the most common irregular verbs in Spanish: to go, to give, and to see. Memorize all three together.',
      sections: [
        {
          heading: 'Why memorize <em>these three</em>',
          body: 'These three verbs come up constantly. They\'re all irregular but in interesting, related ways — and once you know them, you unlock huge amounts of everyday Spanish (and the "ir + a + infinitive" future, which is one of the most useful structures in the language).'
        },
        {
          heading: '<em>Ir</em> — to go',
          body: 'Highly irregular. The yo form is "voy" — there\'s no trace of "ir" in it!',
          conjugation: [
            ['yo', '<span class="ending">voy</span>'],
            ['tú', '<span class="ending">vas</span>'],
            ['él / ella / usted', '<span class="ending">va</span>'],
            ['nosotros', '<span class="ending">vamos</span>'],
            ['vosotros', '<span class="ending">vais</span>'],
            ['ellos / ellas / ustedes', '<span class="ending">van</span>']
          ]
        },
        {
          heading: '<em>Dar</em> — to give',
          body: 'Looks like a regular -ar verb except in the "yo" form (doy, not "do") and the vosotros form drops the accent.',
          conjugation: [
            ['yo', '<span class="ending">doy</span>'],
            ['tú', '<span class="ending">das</span>'],
            ['él / ella / usted', '<span class="ending">da</span>'],
            ['nosotros', '<span class="ending">damos</span>'],
            ['vosotros', '<span class="ending">dais</span>'],
            ['ellos / ellas / ustedes', '<span class="ending">dan</span>']
          ]
        },
        {
          heading: '<em>Ver</em> — to see',
          body: 'The "yo" form is irregular ("veo" instead of expected "vo"), but everything else follows -er rules.',
          conjugation: [
            ['yo', '<span class="ending">veo</span>'],
            ['tú', '<span class="ending">ves</span>'],
            ['él / ella / usted', '<span class="ending">ve</span>'],
            ['nosotros', '<span class="ending">vemos</span>'],
            ['vosotros', '<span class="ending">veis</span>'],
            ['ellos / ellas / ustedes', '<span class="ending">ven</span>']
          ]
        },
        {
          heading: 'Common <em>uses</em>',
          body: '',
          examples: [
            { es: 'Voy a la escuela los lunes.', en: 'I go to school on Mondays. (ir + a)' },
            { es: '¿Adónde vas?', en: 'Where are you going?' },
            { es: 'Doy clases de guitarra.', en: 'I give guitar classes.' },
            { es: 'Mis padres me dan dinero.', en: 'My parents give me money.' },
            { es: 'Veo una película esta noche.', en: 'I\'m seeing/watching a movie tonight.' },
            { es: 'No veo nada.', en: 'I don\'t see anything.' }
          ]
        },
        {
          type: 'mistakes',
          heading: 'Ir / dar / ver <em>traps</em>',
          body: 'Three of the most common Spanish verbs, three sets of mistakes:',
          items: [
            'Saying <strong>"yo iro"</strong> or <strong>"yo io"</strong> for "I go" — wrong. The yo form of ir is <em>"voy."</em> Ir is one of the most irregular verbs in Spanish. Memorize: voy, vas, va, vamos, vais, van.',
            'Forgetting that <strong>ir always needs "a"</strong> before a destination — <em>"Voy a la escuela"</em> (NOT "Voy la escuela"). The "a" attaches the place. Same in past: <em>"Fui al cine"</em> (a + el = al).',
            'Confusing <strong>ir (to go)</strong> with <strong>ver (to see)</strong> in the preterite — both have <em>"fui"</em> as their yo form. Context decides: <em>"Fui a la fiesta"</em> = "I went to the party" (ir); <em>"Fui estudiante allí"</em> = "I was a student there" (ser). Ver in preterite is <em>"vi"</em>, not "fui."',
            'Saying <strong>"yo do"</strong> for "I give" — wrong. Dar\'s yo form is <em>"doy."</em> Then dar conjugates almost regularly: das, da, damos, dais, dan. But notice the yo form is irregular like estar and ir.',
            'Forgetting that <strong>dar takes indirect objects</strong> — you give something TO someone. <em>"Le doy el libro a María"</em> (I give the book to María). The le is required for clarity. Just <em>"Doy el libro a María"</em> is technically grammatical but sounds incomplete.',
            'Saying <strong>"yo vo"</strong> for "I see" — wrong. The yo form of ver is <em>"veo"</em> (notice the e is kept from the infinitive ver-). This same e is kept in the imperfect: <em>"veía, veías..."</em> (NOT "vía"). Ver is unusual that way.',
            'Confusing <strong>ver (to see/watch)</strong> with <strong>mirar (to watch/look at)</strong> — both can translate as "watch," but they\'re different. <em>Ver una película</em> = to see/watch a movie (general action). <em>Mirar la televisión</em> = to look at/watch TV (focused attention). For passive viewing, ver is more common.'
          ]
        }
      ],
      quiz: [
        { q: 'What is the "yo" form of "ir"?', options: [
          { text: 'iro', correct: false },
          { text: 'voy', correct: true },
          { text: 'va', correct: false }
        ]},
        { q: 'What is the "yo" form of "dar"?', options: [
          { text: 'do', correct: false },
          { text: 'doy', correct: true },
          { text: 'da', correct: false }
        ]},
        { q: 'What is the "yo" form of "ver"?', options: [
          { text: 'vo', correct: false },
          { text: 'veo', correct: true },
          { text: 've', correct: false }
        ]}
      ]
    },
    {
      id: 'ir-a-infinitive',
      num: '20',
      level: 'sp1',
      title: '<em>Ir + a +</em> infinitive',
      tag: 'Verb structures · Future',
      summary: 'The easiest way to talk about the future in Spanish: "I am going to ___." Use it constantly — it sounds natural and avoids the proper future tense.',
      sections: [
        {
          heading: 'The "<em>going-to</em>" future',
          body: 'In English, instead of saying "I will eat," you can say "I\'m going to eat." Spanish does the same — and uses this construction constantly. The formula is dead simple: <strong>conjugated form of ir + a + infinitive</strong>.'
        },
        {
          heading: 'The <em>formula</em>',
          body: 'Take the present-tense form of <em>ir</em>, add "a," then add any verb in its infinitive form (the unconjugated -ar/-er/-ir version).',
          conjugation: [
            ['I am going to speak', '<span class="ending">voy a</span> hablar'],
            ['You are going to eat', '<span class="ending">vas a</span> comer'],
            ['She is going to study', '<span class="ending">va a</span> estudiar'],
            ['We are going to travel', '<span class="ending">vamos a</span> viajar'],
            ['You all are going to learn', '<span class="ending">vais a</span> aprender'],
            ['They are going to leave', '<span class="ending">van a</span> salir']
          ]
        },
        {
          heading: 'Real-world <em>examples</em>',
          body: '',
          examples: [
            { es: 'Voy a estudiar esta noche.', en: 'I\'m going to study tonight.' },
            { es: '¿Vas a ir a la fiesta?', en: 'Are you going to go to the party?' },
            { es: 'Mañana vamos a tener un examen.', en: 'Tomorrow we are going to have a test.' },
            { es: 'Mis padres van a comprar una casa.', en: 'My parents are going to buy a house.' },
            { es: 'Voy a comer pizza para la cena.', en: 'I am going to eat pizza for dinner.' }
          ]
        },
        {
          heading: 'Why this is so <em>useful</em>',
          body: 'Spanish has a "real" future tense (hablaré, comerás…) but native speakers often prefer "ir + a + infinitive" in casual conversation — just like English speakers say "I\'m going to…" more than "I will…" in everyday talk. Learn this structure first; the formal future tense can wait.'
        },
        {
          type: 'mistakes',
          heading: '"<em>Going to</em>" traps',
          body: 'These mistakes are easy to make if you\'re thinking in English:',
          items: [
            'Forgetting the <strong>"a"</strong> — saying <em>"Voy comer"</em> instead of <em>"Voy a comer."</em> The "a" is required between the conjugated <em>ir</em> and the infinitive.',
            'Conjugating the <strong>second verb</strong> — saying <em>"Voy a como"</em> instead of <em>"Voy a comer."</em> The second verb stays in infinitive form (the -AR/-ER/-IR form). Only <em>ir</em> gets conjugated.',
            'Using <strong>"ir a + ir"</strong> for "I\'m going to go" — actually correct! <em>"Voy a ir al cine"</em> (I\'m going to go to the movies). It sounds redundant but it\'s natural Spanish.',
            'Confusing this with <strong>"ir + present participle"</strong> in English — "I am going" in the sense of "I am currently going somewhere" is just <em>"Voy"</em> (not "estoy yendo"). The <em>"voy a + infinitive"</em> structure ONLY means future intention.',
            'Translating <strong>"I went to eat"</strong> using <em>fui a comer</em> in the preterite — this works for past plans (<em>"Ayer fui a comer con mi familia"</em>) but be careful: in the past, you can also use the simple preterite (<em>"Ayer comí con mi familia"</em>) which is often more natural.',
            'Using <strong>"voy a" + a noun</strong> instead of an infinitive — wrong. The structure is <em>voy a + VERB</em>, not <em>voy a + noun</em>. If you want to say "I\'m going to the store," that\'s <em>"Voy a la tienda"</em> (different structure: ir + a + place).'
          ]
        }
      ],
      quiz: [
        { q: 'How do you say "I am going to eat"?', options: [
          { text: 'Voy comer.', correct: false },
          { text: 'Voy a comer.', correct: true },
          { text: 'Voy a como.', correct: false }
        ]},
        { q: 'Which is correct for "We are going to travel to Spain"?', options: [
          { text: 'Vamos viajar a España.', correct: false },
          { text: 'Vamos a viajar a España.', correct: true },
          { text: 'Vamos a viajamos a España.', correct: false }
        ]},
        { q: 'In "ir + a + infinitive," what form must the second verb be in?', options: [
          { text: 'Conjugated for the speaker', correct: false },
          { text: 'In the infinitive (unconjugated, ending in -ar/-er/-ir)', correct: true },
          { text: 'Past tense', correct: false }
        ]}
      ]
    },
    {
      id: 'tener-venir-idioms',
      num: '21',
      level: 'sp1',
      title: '<em>Tener</em> & <em>venir</em> + idioms',
      tag: 'Irregular verbs · Common expressions',
      summary: 'Tener and venir are nearly twins. Plus a list of "tener" idioms you\'ll use every day — like "tener hambre" (to be hungry).',
      sections: [
        {
          heading: '<em>Tener</em> — to have',
          body: 'Tener is one of the most-used verbs in Spanish. The yo form ("tengo") is irregular, plus stems change in 4 of 6 forms.',
          conjugation: [
            ['yo', '<span class="ending">tengo</span>'],
            ['tú', 't<span class="ending">ie</span>nes'],
            ['él / ella / usted', 't<span class="ending">ie</span>ne'],
            ['nosotros', '<span class="ending">tenemos</span>'],
            ['vosotros', '<span class="ending">tenéis</span>'],
            ['ellos / ellas / ustedes', 't<span class="ending">ie</span>nen']
          ]
        },
        {
          heading: '<em>Venir</em> — to come',
          body: 'Venir conjugates almost identically to tener. Memorize one and you nearly know the other.',
          conjugation: [
            ['yo', '<span class="ending">vengo</span>'],
            ['tú', 'v<span class="ending">ie</span>nes'],
            ['él / ella / usted', 'v<span class="ending">ie</span>ne'],
            ['nosotros', '<span class="ending">venimos</span>'],
            ['vosotros', '<span class="ending">venís</span>'],
            ['ellos / ellas / ustedes', 'v<span class="ending">ie</span>nen']
          ]
        },
        {
          heading: '<em>Tener</em> idioms — Spanish uses "to have" where English uses "to be"',
          body: 'This is one of the biggest mental shifts for English speakers. In Spanish, you don\'t say "I am hungry" — you say "I have hunger." Same for thirst, age, fear, and more.',
          conjugation: [
            ['to be hungry', 'tener <span class="ending">hambre</span>'],
            ['to be thirsty', 'tener <span class="ending">sed</span>'],
            ['to be cold', 'tener <span class="ending">frío</span>'],
            ['to be hot', 'tener <span class="ending">calor</span>'],
            ['to be sleepy', 'tener <span class="ending">sueño</span>'],
            ['to be afraid', 'tener <span class="ending">miedo</span>'],
            ['to be in a hurry', 'tener <span class="ending">prisa</span>'],
            ['to be lucky', 'tener <span class="ending">suerte</span>'],
            ['to be right', 'tener <span class="ending">razón</span>'],
            ['to be ___ years old', 'tener <span class="ending">___ años</span>']
          ]
        },
        {
          heading: 'Idioms in <em>action</em>',
          body: 'Notice that these expressions use "tener" + a noun — never an adjective.',
          examples: [
            { es: 'Tengo hambre. ¿Cuándo comemos?', en: 'I\'m hungry. When do we eat?' },
            { es: 'Tienes razón. Yo estaba equivocado.', en: 'You\'re right. I was wrong.' },
            { es: 'Tengo dieciséis años.', en: 'I am sixteen years old.' },
            { es: 'Tenemos prisa — el avión sale a las seis.', en: 'We\'re in a hurry — the plane leaves at six.' },
            { es: 'Mi hermana tiene miedo de las arañas.', en: 'My sister is afraid of spiders.' }
          ]
        },
        {
          heading: 'Asking <em>age</em> — the most common idiom',
          body: 'Spanish never says "How old are you?" literally. You ask "How many years do you have?" — <em>"¿Cuántos años tienes?"</em> Then you reply: <em>"Tengo dieciséis años"</em> (I have sixteen years = I am sixteen).'
        },
        {
          type: 'tip',
          heading: 'The <em>body-state</em> rule',
          body: 'Here\'s a pattern that catches almost every Spanish 1 student off guard:<br><br>In English, body states use "to be": <em>I am hungry, I am thirsty, I am hot, I am cold, I am scared, I am sleepy.</em><br><br>In Spanish, you "HAVE" these states with <em>tener</em>:<br><br>• <em>tengo hambre</em> — I am hungry (I have hunger)<br>• <em>tengo sed</em> — I am thirsty (I have thirst)<br>• <em>tengo calor</em> — I am hot (I have heat)<br>• <em>tengo frío</em> — I am cold (I have cold)<br>• <em>tengo sueño</em> — I am sleepy (I have sleepiness)<br>• <em>tengo miedo</em> — I am afraid (I have fear)<br>• <em>tengo prisa</em> — I am in a hurry (I have haste)<br>• <em>tengo razón</em> — I am right (I have reason)<br>• <em>tengo suerte</em> — I am lucky (I have luck)<br>• <em>tengo X años</em> — I am X years old<br><br>The word that follows tener is a NOUN (hambre, sed, calor), not an adjective. That\'s why you can\'t say <em>"tengo hambriento"</em> — hambriento is an adjective. The noun is <em>hambre</em>.<br><br>This is one of the most important patterns in Spanish 1. Once you internalize "states use tener + noun, not estar + adjective," you\'ll stop making the most common Spanish 1 mistake.'
        },
        {
          type: 'mistakes',
          heading: 'Tener idiom <em>traps</em>',
          body: 'These are some of the most predictable Spanish 1 errors — and the easiest to fix once named:',
          items: [
            'Saying <strong>"Estoy hambriento"</strong> or <strong>"Soy hambre"</strong> for "I am hungry" — both wrong. Use <em>"Tengo hambre."</em> Same with sed, calor, frío, sueño.',
            'Saying <strong>"Yo soy 16"</strong> or <strong>"Yo estoy 16 años"</strong> for "I am 16" — both wrong. Use <em>"Tengo 16 años"</em> (I have 16 years). Age is something you HAVE in Spanish, not something you ARE.',
            'Saying <strong>"Estoy caliente"</strong> when you mean "I am hot (temperature)" — this has a sexual meaning in Spanish. For temperature, say <em>"Tengo calor"</em> (I feel hot). For weather, say <em>"Hace calor"</em> (it\'s hot out).',
            'Saying <strong>"Tengo asustado"</strong> for "I\'m scared" — wrong. Asustado is an adjective. Use the noun: <em>"Tengo miedo."</em> If you want to use the adjective, pair it with estar: <em>"Estoy asustado."</em>',
            'Forgetting <strong>"mucho"</strong> for emphasis — <em>"Tengo mucha hambre"</em> means "I\'m very hungry." Note that <em>mucho</em> agrees with the noun: <em>mucha hambre</em> (fem.), <em>mucho frío</em> (masc.), <em>muchas ganas</em> (plural fem.). Don\'t use <em>muy</em> here.',
            'Mixing up <strong>tener and venir</strong> conjugations — they look similar (both have a "yo go" form, both are e→ie stem-changers), but they are different verbs. <em>Vengo a clase</em> (I come to class) is different from <em>Tengo clase</em> (I have class).',
            'Using <strong>"tener ganas"</strong> wrong — the structure is <em>"tener ganas DE + infinitive"</em>: <em>"Tengo ganas de comer pizza"</em> (I feel like eating pizza). Not "tengo ganas comer."'
          ]
        }
      ],
      quiz: [
        { q: 'How do you say "I am hungry" in Spanish?', options: [
          { text: 'Yo soy hambre.', correct: false },
          { text: 'Yo estoy hambre.', correct: false },
          { text: 'Tengo hambre.', correct: true }
        ]},
        { q: 'How do you ask "How old are you?" in Spanish?', options: [
          { text: '¿Cuán viejo eres?', correct: false },
          { text: '¿Cuántos años tienes?', correct: true },
          { text: '¿Qué edad estás?', correct: false }
        ]},
        { q: 'What is the "yo" form of "venir"?', options: [
          { text: 'veno', correct: false },
          { text: 'vienes', correct: false },
          { text: 'vengo', correct: true }
        ]}
      ]
    },
    {
      id: 'phrases-of-need-obligation',
      num: '22',
      level: 'sp1',
      title: 'Phrases of <em>need</em> & <em>obligation</em>',
      tag: 'Verb structures · Infinitive phrases',
      summary: 'Four super-useful structures that all share one move: a conjugated phrase + an infinitive. Hay que (necessity), tener que (obligation), favor de (polite request), acabar de (just did).',
      sections: [
        {
          heading: 'The big <em>idea</em>',
          body: 'Spanish has a handful of structures that work the same way: a fixed phrase, followed by a verb in its <strong>infinitive</strong> form (the unchanged -ar/-er/-ir form). Once you see this pattern, four high-frequency expressions click at once. The trick is knowing which one to pick — they have similar English translations but different meanings in Spanish.',
          conjugation: [
            ['Necessity (general)', '<span class="ending">hay que</span> + infinitive'],
            ['Obligation (personal)', '<span class="ending">tener que</span> + infinitive'],
            ['Polite request', '<span class="ending">favor de</span> + infinitive'],
            ['Recent past (just did)', '<span class="ending">acabar de</span> + infinitive']
          ]
        },
        {
          heading: 'Phrases of <em>necessity</em> — hay que + infinitive',
          body: '<strong>Hay que</strong> expresses a general necessity — "one must," "it\'s necessary to," "you have to" (universal "you"). It does NOT specify who has to do it; it\'s impersonal advice or a general rule. The phrase never changes — always "hay que," regardless of who you\'re talking to.',
          examples: [
            { es: 'Hay que estudiar mucho para aprender una lengua.', en: 'One must study a lot to learn a language.' },
            { es: 'Hay que tener paciencia.', en: 'You have to have patience. (general advice)' },
            { es: 'Hay que llegar a tiempo.', en: 'One must arrive on time. (general rule)' },
            { es: 'Para vivir bien, hay que dormir lo suficiente.', en: 'To live well, one must sleep enough.' }
          ]
        },
        {
          heading: 'Phrases of <em>obligation</em> — tener que + infinitive',
          body: '<strong>Tener que</strong> assigns the obligation to a specific person. Conjugate <em>tener</em> for whoever has the obligation, then add <em>que</em> + infinitive. This is the most common way to say someone "has to" do something in Spanish.',
          conjugation: [
            ['yo', '<span class="ending">tengo que</span> + inf.'],
            ['tú', '<span class="ending">tienes que</span> + inf.'],
            ['él / ella / usted', '<span class="ending">tiene que</span> + inf.'],
            ['nosotros', '<span class="ending">tenemos que</span> + inf.'],
            ['vosotros', '<span class="ending">tenéis que</span> + inf.'],
            ['ellos / ellas / ustedes', '<span class="ending">tienen que</span> + inf.']
          ]
        },
        {
          heading: 'Tener que in <em>action</em>',
          body: '',
          examples: [
            { es: 'Tengo que estudiar para el examen.', en: 'I have to study for the test.' },
            { es: '¿Tienes que trabajar mañana?', en: 'Do you have to work tomorrow?' },
            { es: 'Tenemos que limpiar la casa.', en: 'We have to clean the house.' },
            { es: 'Mi hermano tiene que hacer la tarea.', en: 'My brother has to do the homework.' }
          ]
        },
        {
          heading: 'Hay que <em>vs.</em> tener que',
          body: 'The distinction is simple but important. Use <strong>tener que</strong> when a specific person has to do something. Use <strong>hay que</strong> when stating a general rule that applies to anyone. <em>"Tengo que llegar a las ocho"</em> = I personally have to arrive at 8. <em>"Hay que llegar a tiempo"</em> = One must arrive on time (general rule for everyone). English often uses "have to" for both, but Spanish keeps them distinct.'
        },
        {
          heading: 'Polite <em>requests</em> — favor de + infinitive',
          body: '<strong>Favor de</strong> is a soft, polite way to ask someone to do something — gentler than a command. You\'ll see it constantly on signs, in instructions, and in formal writing. The literal idea is "(do me) the favor of (doing X)." The phrase never changes — always "favor de" + infinitive.',
          examples: [
            { es: 'Favor de cerrar la puerta.', en: 'Please close the door.' },
            { es: 'Favor de no fumar.', en: 'Please do not smoke. (common on signs)' },
            { es: 'Favor de hablar más despacio.', en: 'Please speak more slowly.' },
            { es: 'Favor de apagar el teléfono.', en: 'Please turn off your phone.' },
            { es: 'Favor de esperar aquí.', en: 'Please wait here.' }
          ]
        },
        {
          heading: 'When to use favor de vs. a <em>command</em>',
          body: 'Spanish has direct commands too (<em>cierra la puerta</em> = "close the door!"), but they can feel abrupt with strangers or in formal settings. <strong>Favor de</strong> + infinitive softens the request — closer to English "please ___" than "Close the door!" It\'s the polite default for public signs, polite instructions, and asking favors of people you don\'t know well.'
        },
        {
          heading: '<em>Recent past</em> — acabar de + infinitive',
          body: 'A different category entirely: <strong>acabar de</strong> expresses something that <em>just happened</em>. Conjugate <em>acabar</em> in the present tense, add <em>de</em> + infinitive. The English equivalent is "to have just (done)." Note: even though acabar is in the present, the meaning is about the recent past.',
          conjugation: [
            ['yo', '<span class="ending">acabo de</span> + inf.'],
            ['tú', '<span class="ending">acabas de</span> + inf.'],
            ['él / ella / usted', '<span class="ending">acaba de</span> + inf.'],
            ['nosotros', '<span class="ending">acabamos de</span> + inf.'],
            ['vosotros', '<span class="ending">acabáis de</span> + inf.'],
            ['ellos / ellas / ustedes', '<span class="ending">acaban de</span> + inf.']
          ]
        },
        {
          heading: 'Acabar de in <em>action</em>',
          body: '',
          examples: [
            { es: 'Acabo de comer.', en: 'I just ate.' },
            { es: 'Mi madre acaba de llegar.', en: 'My mother just arrived.' },
            { es: 'Acabamos de ver una película increíble.', en: 'We just watched an amazing movie.' },
            { es: '¿Acabas de salir del trabajo?', en: 'Did you just leave work?' }
          ]
        },
        {
          heading: 'Putting it all <em>together</em>',
          body: 'All four structures share the same simple shape — a fixed or conjugated phrase, then an infinitive. Pick based on meaning:',
          conjugation: [
            ['"One must study"', '<span class="ending">Hay que</span> estudiar.'],
            ['"I have to study"', '<span class="ending">Tengo que</span> estudiar.'],
            ['"Please study"', '<span class="ending">Favor de</span> estudiar.'],
            ['"I just studied"', '<span class="ending">Acabo de</span> estudiar.']
          ]
        },
        {
          type: 'tip',
          heading: 'Choosing between <em>hay que / tener que / deber / necesitar</em>',
          body: 'Spanish has multiple ways to say "must" or "should," and they\'re NOT interchangeable. The difference is mostly about who\'s obligated:<br><br>• <strong>hay que + infinitive</strong> — GENERAL necessity. No specific person. Like English "one must" or "you have to" (impersonal). <em>"Hay que estudiar para el examen"</em> = "One must study for the exam" / "You\'ve gotta study for the exam." Doesn\'t pin the obligation on anyone in particular.<br><br>• <strong>tener que + infinitive</strong> — PERSONAL obligation. The conjugated tener tells you exactly who has to do it. <em>"Tengo que estudiar"</em> (I have to). <em>"Tienes que estudiar"</em> (you have to). Stronger and more specific than hay que.<br><br>• <strong>deber + infinitive</strong> — MORAL obligation or advice. Like English "should" or "ought to." <em>"Debes estudiar más"</em> = "You should study more" (a recommendation, not a hard demand). Softer than tener que.<br><br>• <strong>necesitar + infinitive</strong> — practical NEED. <em>"Necesito estudiar"</em> = "I need to study." More about practical necessity than moral duty.<br><br>Quick test: <em>Hay que / tener que</em> = "have to" (necessity). <em>Deber</em> = "should" (advice). <em>Necesitar</em> = "need to" (practical).'
        },
        {
          type: 'mistakes',
          heading: 'Obligation <em>traps</em>',
          body: 'Where students slip:',
          items: [
            'Conjugating <strong>hay que</strong> for a specific person — wrong. <em>Hay que</em> is impersonal and never changes. You can\'t say "yo hay que estudiar." Use <em>tengo que</em> for personal: <em>"Tengo que estudiar."</em>',
            'Using <strong>tener que</strong> with a noun instead of an infinitive — wrong. <em>"Tengo que tarea"</em> isn\'t right. The structure is <em>tener que + INFINITIVE</em>. If you want to say "I have homework," that\'s just <em>"Tengo tarea"</em> (no "que").',
            'Forgetting the <strong>"que"</strong> — <em>"Tengo estudiar"</em> is missing the connector. Must be <em>"Tengo que estudiar."</em>',
            'Using <strong>deber</strong> for hard necessity — <em>deber</em> is softer ("should"). For "you MUST study," use <em>"Tienes que estudiar"</em> or <em>"Debes estudiar."</em> Deber is the gentler nudge.',
            'Confusing <strong>acabar de</strong> with <strong>acabar</strong> — they\'re different. <em>"Acabar de + infinitive"</em> means "to have just done." <em>"Acabar"</em> alone means "to finish." <em>"Acabo de comer"</em> = "I just ate." <em>"Acabé de comer"</em> = "I finished eating."',
            'Translating <strong>"It\'s necessary to…"</strong> as <em>"Es necesario"</em> + verb — you can do this, but it\'s formal. The everyday version is just <em>"Hay que…"</em> Save "es necesario" for writing or formal speech.'
          ]
        }
      ],
      quiz: [
        { q: 'Which expresses a GENERAL necessity (no specific person)?', options: [
          { text: 'tener que + infinitive', correct: false },
          { text: 'hay que + infinitive', correct: true },
          { text: 'acabar de + infinitive', correct: false }
        ]},
        { q: 'How would you politely write "Please close the door" on a sign?', options: [
          { text: 'Tengo que cerrar la puerta.', correct: false },
          { text: 'Favor de cerrar la puerta.', correct: true },
          { text: 'Acabo de cerrar la puerta.', correct: false }
        ]},
        { q: 'How do you say "I just ate"?', options: [
          { text: 'Acabé comer.', correct: false },
          { text: 'Acabo de comer.', correct: true },
          { text: 'Tengo que comer.', correct: false }
        ]}
      ]
    },
    {
      id: 'possessive-adjectives',
      num: '23',
      level: 'sp1',
      title: 'Possessive <em>adjectives</em>',
      tag: 'Foundations · Adjectives',
      summary: 'How to say "my, your, his, her, our, their" in Spanish — and why "nuestro" has four forms but "mi" only has two.',
      sections: [
        {
          heading: 'Possessives <em>agree</em> with what is possessed',
          body: 'In English, "my" stays the same: my book, my house, my friends. In Spanish, possessives change form to match the <strong>thing owned</strong>, not the owner. They agree in <strong>number</strong> always, and some agree in <strong>gender</strong> too.'
        },
        {
          heading: 'The basic <em>set</em>',
          body: 'These four shift only for number (singular/plural). They do NOT change for gender.',
          conjugation: [
            ['my', '<span class="ending">mi</span> / <span class="ending">mis</span>  (mi casa, mis casas)'],
            ['your (informal)', '<span class="ending">tu</span> / <span class="ending">tus</span>  (tu libro, tus libros)'],
            ['his / her / your (formal) / their', '<span class="ending">su</span> / <span class="ending">sus</span>  (su perro, sus perros)']
          ]
        },
        {
          heading: 'The "<em>four-form</em>" possessives',
          body: 'Two possessives — <strong>nuestro</strong> (our) and <strong>vuestro</strong> (your-all, Spain only) — work like adjectives ending in -o. They agree in BOTH gender AND number.',
          conjugation: [
            ['our (m. sing)', '<span class="ending">nuestro</span> libro'],
            ['our (f. sing)', '<span class="ending">nuestra</span> casa'],
            ['our (m. plur)', '<span class="ending">nuestros</span> libros'],
            ['our (f. plur)', '<span class="ending">nuestras</span> casas'],
            ['your-all (Spain)', '<span class="ending">vuestro/a/os/as</span>  (same pattern)']
          ]
        },
        {
          heading: 'Why <em>su</em> is the most confusing',
          body: '<strong>Su</strong> alone can mean: his, her, its, your (formal "usted"), your-all (formal "ustedes"), or their. Context usually makes it clear, but when it doesn\'t, Spanish uses <em>de + person</em> to clarify: <em>"el libro de él"</em> (his book), <em>"el libro de ellos"</em> (their book).',
          examples: [
            { es: 'Su madre es médica.', en: 'His/Her/Your/Their mother is a doctor. (ambiguous!)' },
            { es: 'La madre de ella es médica.', en: 'HER mother is a doctor. (clarified)' }
          ]
        },
        {
          heading: 'Common <em>examples</em>',
          body: 'Notice how the possessive matches the noun, not the speaker.',
          examples: [
            { es: 'Mi hermano se llama Carlos.', en: 'My brother is named Carlos.' },
            { es: 'Mis padres viven en México.', en: 'My parents live in Mexico. (plural noun → mis)' },
            { es: '¿Cómo se llama tu profesora?', en: 'What\'s your teacher\'s name?' },
            { es: 'Nuestra casa es azul.', en: 'Our house is blue. (fem. sing → nuestra)' },
            { es: 'Nuestros amigos llegan mañana.', en: 'Our friends arrive tomorrow. (masc. plur → nuestros)' }
          ]
        },
        {
          type: 'tip',
          heading: 'The <em>body-parts and clothing</em> rule',
          body: 'Here\'s a counterintuitive Spanish rule: <strong>with body parts and clothing, you usually use the DEFINITE ARTICLE (el/la/los/las) instead of the possessive.</strong><br><br>In English, we say "I wash MY hands." In Spanish, you say <em>"Me lavo LAS manos"</em> (literally "I wash MYSELF the hands").<br><br>Why? Because the reflexive pronoun (<em>me</em>) already tells you whose hands they are — yours. Adding <em>mis manos</em> would be redundant.<br><br>This applies to:<br><br>• Body parts: <em>Me cepillo los dientes</em> (I brush my teeth). <em>Le duele la cabeza</em> (His head hurts — literally "the head hurts to him"). <em>Levanta la mano</em> (Raise your hand).<br><br>• Clothing being put on or taken off: <em>Me pongo la chaqueta</em> (I put on my jacket). <em>Se quita los zapatos</em> (He takes off his shoes).<br><br>Using the possessive (<em>mis manos</em>, <em>mi cabeza</em>) for these situations sounds unnatural and gives away that you\'re thinking in English. Use the article and let the reflexive do the work.<br><br>You CAN use the possessive if you\'re emphasizing ownership or contrast: <em>"Es MI cabeza, no la tuya"</em> (It\'s MY head, not yours). But that\'s a special case.'
        },
        {
          type: 'mistakes',
          heading: 'Possessive <em>traps</em>',
          body: 'These mistakes show up over and over:',
          items: [
            'Saying <strong>"Me lavo mis manos"</strong> — wrong. With body parts plus reflexive verbs, use the article: <em>"Me lavo las manos."</em> Same with teeth, hair, face.',
            'Saying <strong>"Mi cabeza duele"</strong> for "My head hurts" — should be <em>"Me duele la cabeza"</em> (literally "the head hurts to me"). Body parts in pain use the indirect-object + article structure.',
            'Treating <strong>"mi" and "mis"</strong> as interchangeable — wrong. <em>Mi</em> goes with singular nouns (<em>mi libro, mi casa</em>); <em>mis</em> with plurals (<em>mis libros, mis casas</em>). Same for tu/tus and su/sus.',
            'Confusing <strong>tu (your)</strong> with <strong>tú (you)</strong> — both exist, but they\'re different words. The possessive has NO accent: <em>"Tú tienes tu libro."</em> ("You have your book.")',
            'Using <strong>"su / sus"</strong> when context is unclear — <em>su</em> can mean "his, her, your (formal), their." For clarity, you can use the long form: <em>"el libro de él"</em> (his book) vs <em>"el libro de ella"</em> (her book). Spanish speakers often add the de + pronoun when ambiguity could confuse.',
            'Capitalizing <strong>nuestra/nuestro</strong> as if it were "Our" in English — keep them lowercase in normal sentences. And remember they agree in BOTH gender AND number: <em>nuestro perro</em>, <em>nuestra casa</em>, <em>nuestros perros</em>, <em>nuestras casas</em>.',
            'Forgetting that <strong>vuestro</strong> (your-all, informal) only exists in Spain — Latin American Spanish uses <em>su / sus</em> for both formal and informal "your-all."'
          ]
        }
      ],
      quiz: [
        { q: 'Which is correct: "my parents"?', options: [
          { text: 'mi padres', correct: false },
          { text: 'mis padres', correct: true },
          { text: 'mío padres', correct: false }
        ]},
        { q: 'How do you say "our house" (casa is feminine)?', options: [
          { text: 'nuestro casa', correct: false },
          { text: 'nuestra casa', correct: true },
          { text: 'nuestras casa', correct: false }
        ]},
        { q: '"Su libro" could mean any of these EXCEPT:', options: [
          { text: 'his book', correct: false },
          { text: 'their book', correct: false },
          { text: 'my book', correct: true }
        ]}
      ]
    },
    {
      id: 'tu-vs-usted',
      num: '24',
      level: 'sp1',
      title: '<em>Tú</em>, <em>usted</em>, and <em>vos</em>',
      tag: 'Social Spanish · Formality',
      summary: 'Which "you" to use isn\'t about grammar — it\'s about respect, age, and where you are. Plus a peek at "vos," the Argentine wildcard.',
      sections: [
        {
          heading: 'Spanish has <em>two</em> (or three) ways to say "you"',
          body: 'English uses "you" for everyone — your teacher, your dog, the president, your best friend. Spanish makes a distinction: informal vs. formal. Choosing wrong won\'t make people angry, but using <strong>tú</strong> with someone who expects <strong>usted</strong> can come across as too familiar, even disrespectful.'
        },
        {
          heading: 'Use <em>tú</em> with…',
          body: 'Anyone you have a casual, friendly, or close relationship with:',
          examples: [
            { es: '— Friends and classmates', en: '' },
            { es: '— Family members (siblings, cousins, parents — though Spanish-speaking households vary)', en: '' },
            { es: '— Children and teenagers', en: '' },
            { es: '— Anyone roughly your own age in casual settings', en: '' },
            { es: '— Pets, God in prayer, etc.', en: '' }
          ]
        },
        {
          heading: 'Use <em>usted</em> with…',
          body: 'Anyone you want to show respect or maintain distance with:',
          examples: [
            { es: '— Older adults you don\'t know well', en: '' },
            { es: '— Your teachers, professors, doctors, lawyers', en: '' },
            { es: '— Your boss or someone in authority', en: '' },
            { es: '— Strangers in formal situations (clerks, officials)', en: '' },
            { es: '— Sometimes: in-laws and grandparents (varies by family)', en: '' }
          ]
        },
        {
          heading: 'The <em>verb form</em> trick',
          body: '<strong>Usted uses the "he/she" verb endings</strong> (3rd person singular) — not the "tú" endings. This trips up beginners. So even though "usted" means "you," the verb looks like "él/ella."',
          conjugation: [
            ['Informal: ¿Hablas español?', '"You speak Spanish?" (tú)'],
            ['Formal: ¿Habla usted español?', '"Do you speak Spanish?" (usted — uses él/ella form)'],
            ['Informal: ¿Tienes hambre?', '"Are you hungry?" (tú)'],
            ['Formal: ¿Tiene usted hambre?', '"Are you hungry?" (usted)']
          ]
        },
        {
          heading: 'The plural: <em>ustedes</em> everywhere (almost)',
          body: 'For "you all," Spanish has two options — but in <strong>Latin America</strong>, they only use <strong>ustedes</strong>, both for formal and informal. In <strong>Spain</strong>, people use <strong>vosotros</strong> for informal "you all" and ustedes for formal. Most US Spanish classes teach Latin American Spanish, so you can almost always just use <em>ustedes</em>.'
        },
        {
          heading: 'Bonus: <em>vos</em> — the Argentine wildcard',
          body: 'In Argentina, Uruguay, Paraguay, and parts of Central America (Costa Rica, Nicaragua, El Salvador, Honduras), people use <strong>vos</strong> instead of (or alongside) tú. It\'s informal — same social role as tú — but has its own verb forms! In Buenos Aires, "vos" is the default and tú sounds foreign.',
          examples: [
            { es: 'Argentina: ¿Vos hablás español? = Tú hablas español?', en: 'Do you speak Spanish? (informal)' },
            { es: 'Argentina: ¿Vos tenés hambre? = ¿Tú tienes hambre?', en: 'Are you hungry?' },
            { es: 'Argentina: ¿Querés un mate?', en: 'Do you want a mate? (popular Argentine drink)' }
          ]
        },
        {
          heading: 'How do I know <em>which</em> to use?',
          body: 'When unsure: <strong>start with usted</strong> and let the other person invite you to switch. Many Latin American countries (Mexico, Colombia) have a moment in conversation where someone says <em>"Podemos tutearnos"</em> ("we can use tú with each other") — that\'s your green light to switch. With kids, classmates, and obvious peers, just use tú. With your teacher, always start with usted unless they tell you otherwise.'
        },
        {
          type: 'tip',
          heading: 'A <em>country-by-country</em> guide',
          body: 'Formality norms vary significantly across the Spanish-speaking world. Here\'s a rough map:<br><br>• <strong>Spain</strong> — Tú is dominant in most social situations. Even with older strangers, tú is increasingly common. Usted is reserved for very formal contexts (legal, doctor, very elderly). Vosotros is alive and well for "you all."<br><br>• <strong>Mexico</strong> — More formal than Spain. Usted is the default with anyone older, in service contexts (waiters, shopkeepers), and at work. Tú is for friends, family, and clear peers. Switch to tú only after invitation.<br><br>• <strong>Argentina / Uruguay</strong> — VOS replaces tú entirely. Hearing tú in Buenos Aires sounds foreign. Usted is used formally as elsewhere, but everyday informal "you" is <em>vos</em>: <em>vos sos, vos tenés, vos querés</em>.<br><br>• <strong>Costa Rica</strong> — Uses USTED with almost everyone, including with friends and family! Tú sounds strange to many Costa Ricans. Some speakers also use vos.<br><br>• <strong>Colombia</strong> — Varies by region. Bogotá and inland areas tend to be more usted-heavy (even with friends in some families). Coastal Colombia (Cartagena) uses tú more. Antioquia (Medellín) uses vos in informal speech.<br><br>• <strong>Central America</strong> — A mix. Vos is common in Nicaragua, Honduras, El Salvador, Guatemala (less so), often alongside tú and usted in a three-way system.<br><br><strong>For US Spanish classes:</strong> learn tú + usted + ustedes. That covers you for most of Latin America. Vos and vosotros are recognition skills — you should understand them when you hear them, but you don\'t need to produce them.'
        },
        {
          type: 'mistakes',
          heading: 'Formality <em>traps</em>',
          body: 'Where students slip when navigating tú/usted/vos:',
          items: [
            'Using <strong>tú verb endings with usted</strong> — wrong. <em>"Usted hablas español"</em> is incorrect. Usted uses 3rd-person (he/she) endings: <em>"Usted habla español."</em>',
            'Forgetting that <strong>usted matches the él/ella form</strong> across ALL tenses — not just present. <em>"Usted comió"</em>, <em>"Usted vivía"</em>, <em>"Usted vendrá."</em> Always third-person singular.',
            'Mixing <strong>tú and usted in the same conversation</strong> with the same person — wrong. Pick one and stay consistent. Switching mid-conversation is jarring (unless someone invites you to switch).',
            'Using <strong>"Vd."</strong> in modern writing — this is the old abbreviation for usted. Still seen in formal documents, but in modern texts, just write out "usted."',
            'Assuming <strong>vosotros works in Latin America</strong> — it doesn\'t. Use <em>ustedes</em> for "you all" with anyone. Save vosotros for Spain.',
            'Trying to use <strong>vos verb forms in non-voseo countries</strong> — saying "vos hablás" in Mexico or Spain sounds odd. Use voseo only when you\'re in a voseo region or speaking with someone from one.',
            'Getting the <strong>vos verb forms wrong</strong> — they\'re distinct: <em>vos hablás</em> (NOT "vos hablas"), <em>vos tenés</em> (NOT "vos tienes"), <em>vos querés</em> (NOT "vos quieres"). The stress shifts; stem-changers don\'t change. You don\'t need to use voseo, but recognize it.'
          ]
        }
      ],
      quiz: [
        { q: 'Which "you" should you use when speaking to your teacher in most Spanish-speaking countries?', options: [
          { text: 'tú', correct: false },
          { text: 'usted', correct: true },
          { text: 'either is fine', correct: false }
        ]},
        { q: 'Usted uses the same verb endings as:', options: [
          { text: 'tú', correct: false },
          { text: 'él/ella (he/she)', correct: true },
          { text: 'yo', correct: false }
        ]},
        { q: 'In Argentina, what word do people often use instead of tú?', options: [
          { text: 'usted', correct: false },
          { text: 'vos', correct: true },
          { text: 'vosotros', correct: false }
        ]}
      ]
    },
    {
      id: 'numbers-0-100',
      num: '25',
      level: 'sp1',
      title: 'Numbers <em>0 to 100</em>',
      tag: 'Foundations · Numbers',
      summary: 'Counting from cero to cien. Includes the irregular teens, the one-word twenties, and the "y" pattern starting at 31.',
      sections: [
        {
          heading: 'Numbers <em>0–15</em>: memorize these',
          body: 'The first sixteen numbers are unique words. There\'s no shortcut — you have to learn them. The good news: most are short and easy to say.',
          conjugation: [
            ['0', '<span class="ending">cero</span>'],
            ['1, 2, 3', '<span class="ending">uno</span>, <span class="ending">dos</span>, <span class="ending">tres</span>'],
            ['4, 5, 6', '<span class="ending">cuatro</span>, <span class="ending">cinco</span>, <span class="ending">seis</span>'],
            ['7, 8, 9', '<span class="ending">siete</span>, <span class="ending">ocho</span>, <span class="ending">nueve</span>'],
            ['10, 11, 12', '<span class="ending">diez</span>, <span class="ending">once</span>, <span class="ending">doce</span>'],
            ['13, 14, 15', '<span class="ending">trece</span>, <span class="ending">catorce</span>, <span class="ending">quince</span>']
          ]
        },
        {
          heading: 'Numbers <em>16–19</em>: the teens',
          body: 'Starting at 16, you can see a pattern: <em>dieci-</em> + the ones digit. They\'re written as a single word with an accent on <em>dieciséis</em>.',
          conjugation: [
            ['16', '<span class="ending">dieciséis</span>  (literally: "diez y seis" → one word)'],
            ['17', '<span class="ending">diecisiete</span>'],
            ['18', '<span class="ending">dieciocho</span>'],
            ['19', '<span class="ending">diecinueve</span>']
          ]
        },
        {
          heading: 'Numbers <em>20–29</em>: the twenties',
          body: '20 is <strong>veinte</strong>. Numbers 21-29 are written as one word, starting with <em>veinti-</em>. Note the accents on veintidós, veintitrés, and veintiséis.',
          conjugation: [
            ['20', '<span class="ending">veinte</span>'],
            ['21', '<span class="ending">veintiuno</span>'],
            ['22, 23', '<span class="ending">veintidós</span>, <span class="ending">veintitrés</span>'],
            ['24, 25', '<span class="ending">veinticuatro</span>, <span class="ending">veinticinco</span>'],
            ['26, 27', '<span class="ending">veintiséis</span>, <span class="ending">veintisiete</span>'],
            ['28, 29', '<span class="ending">veintiocho</span>, <span class="ending">veintinueve</span>']
          ]
        },
        {
          heading: 'Numbers <em>30–99</em>: the "y" pattern',
          body: 'From 31 onward, the rule shifts: write the <strong>tens word</strong> + <strong>y</strong> + <strong>ones word</strong> as THREE separate words. The tens are: treinta, cuarenta, cincuenta, sesenta, setenta, ochenta, noventa.',
          conjugation: [
            ['30', '<span class="ending">treinta</span>'],
            ['40', '<span class="ending">cuarenta</span>'],
            ['50', '<span class="ending">cincuenta</span>'],
            ['60', '<span class="ending">sesenta</span>'],
            ['70', '<span class="ending">setenta</span>  (not "siete-enta"!)'],
            ['80', '<span class="ending">ochenta</span>'],
            ['90', '<span class="ending">noventa</span>  (not "nueve-nta"!)']
          ]
        },
        {
          heading: 'Putting it <em>together</em>',
          body: 'Use the formula: <em>[tens] y [ones]</em> with a space-y-space in the middle.',
          examples: [
            { es: 'treinta y uno', en: '31' },
            { es: 'cuarenta y cinco', en: '45' },
            { es: 'cincuenta y ocho', en: '58' },
            { es: 'sesenta y nueve', en: '69' },
            { es: 'ochenta y dos', en: '82' },
            { es: 'noventa y nueve', en: '99' }
          ]
        },
        {
          heading: '<em>100</em>: cien (just cien)',
          body: 'When 100 is by itself (or comes before a noun), it\'s simply <strong>cien</strong>. Not "ciento," not "un cien" — just cien. The form <em>ciento</em> only appears in 101-199 (covered in the lesson on bigger numbers).',
          examples: [
            { es: 'cien', en: '100' },
            { es: 'cien dólares', en: 'one hundred dollars' },
            { es: 'cien personas', en: 'one hundred people' }
          ]
        },
        {
          heading: 'Three common <em>uses</em>',
          body: 'Numbers do real work in everyday Spanish:',
          examples: [
            { es: 'Tengo dieciséis años.', en: 'I am sixteen years old.' },
            { es: 'Mi teléfono es cinco-cinco-cinco, dos uno cuatro siete.', en: 'My phone is 555-2147.' },
            { es: 'La camisa cuesta treinta y cinco dólares.', en: 'The shirt costs $35.' }
          ]
        },
        {
          type: 'tip',
          heading: 'Number <em>pronunciation</em> traps',
          body: 'Numbers are full of small pronunciation quirks that trip up English speakers:<br><br>• <strong>cuarenta</strong> (40) — pronounced "kwa-REN-ta." The "u" after "q" makes a "kw" sound (different from regular qu-words where u is silent like in "que"). Same for <em>cuatro, cuarenta, cincuenta, cuándo</em>.<br><br>• <strong>cincuenta</strong> (50) — "seen-KWEN-ta." The "u" here is pronounced.<br><br>• <strong>veinte</strong> (20) — "BEYN-teh." V sounds like a soft B in Spanish. Not "vine."<br><br>• <strong>setenta</strong> (70) vs <strong>sesenta</strong> (60) — easy to confuse. Sesenta starts with "ses-," setenta with "set-." Listen carefully.<br><br>• <strong>once</strong> (11) — "ON-seh," not "wonce."<br><br>• <strong>cero</strong> (0) — "SEH-ro," not "ZEH-ro." Spanish "c" before e/i is "s" (Latin America) or "th" (Spain).<br><br>Practice these out loud — numbers come up constantly in real conversation (prices, ages, phone numbers, time, dates) and rushing through them with English pronunciation will trip you up.'
        },
        {
          type: 'mistakes',
          heading: 'Number <em>traps</em>',
          body: 'Numbers seem easy until you trip on one of these:',
          items: [
            'Writing <strong>"diez y seis"</strong> for 16 — wrong. From 16 to 29, numbers are written as ONE word: <em>dieciséis, diecisiete, dieciocho, diecinueve, veinte, veintiuno, veintidós...</em> Notice the accents: <em>dieciséis, veintidós, veintitrés, veintiséis</em>.',
            'Writing <strong>"treinta y cinco"</strong> as one word — wrong. From 31 onward, numbers are THREE separate words connected by "y": <em>treinta y uno, cuarenta y dos, sesenta y cinco</em>.',
            'Saying <strong>"uno chico"</strong> for "one boy" — wrong. <em>Uno</em> shortens to <em>un</em> before masculine singular nouns: <em>un chico</em>. Same for veintiuno → veintiún: <em>veintiún libros</em> (NOT "veintiuno libros").',
            'Forgetting that <strong>numbers agree with feminine nouns</strong> for ONE: <em>una chica</em> (one girl), <em>veintiuna chicas</em> (21 girls — NOT veintiuno), <em>treinta y una mujeres</em> (31 women). Only the "one" part agrees; the tens don\'t.',
            'Saying <strong>"diecicinco"</strong> for 15 — wrong. 15 is <em>quince</em>, an irregular form. Same for 11 (once), 12 (doce), 13 (trece), 14 (catorce), 15 (quince). The "diez +" pattern only starts at 16.',
            'Confusing <strong>cien</strong> and <strong>ciento</strong> — exactly 100 is <em>cien</em>: <em>cien dólares</em>. 101-199 use <em>ciento</em>: <em>ciento uno, ciento cincuenta</em>. The shortened "cien" only appears before nouns (cien libros) or as exactly 100.',
            'Writing <strong>numbers as digits</strong> in formal Spanish writing — for essays and tests, spell out numbers under 30 or so (<em>quince</em>, <em>veinticinco</em>). Use digits for large numbers, prices, dates, and statistics.'
          ]
        }
      ],
      quiz: [
        { q: 'How do you write 17 in Spanish?', options: [
          { text: 'diez y siete', correct: false },
          { text: 'diecisiete', correct: true },
          { text: 'dieci siete', correct: false }
        ]},
        { q: 'How do you write 45?', options: [
          { text: 'cuarentaicinco', correct: false },
          { text: 'cuarenta cinco', correct: false },
          { text: 'cuarenta y cinco', correct: true }
        ]},
        { q: 'How do you say exactly 100?', options: [
          { text: 'ciento', correct: false },
          { text: 'un cien', correct: false },
          { text: 'cien', correct: true }
        ]}
      ]
    },
    {
      id: 'mente-adverbs',
      num: '26',
      level: 'sp1',
      title: 'Adverbs with <em>-mente</em>',
      tag: 'Foundations · Adverbs',
      summary: 'Spanish has a brilliantly simple rule for turning adjectives into adverbs: just add -mente. The English equivalent of "-ly."',
      sections: [
        {
          heading: 'The <em>-mente</em> rule',
          body: 'In English, you add <strong>-ly</strong> to make an adverb from an adjective: quick → quickly, happy → happily. Spanish does the exact same thing with <strong>-mente</strong>. The trick: you add -mente to the <strong>feminine singular</strong> form of the adjective.'
        },
        {
          heading: 'The <em>formula</em>',
          body: 'Take the feminine singular form of the adjective, then tack on -mente. If the adjective doesn\'t change for gender (like <em>fácil</em>, <em>feliz</em>, <em>inteligente</em>), just add -mente directly.',
          conjugation: [
            ['rápido (m.) → rápida (f.) + mente', '<span class="ending">rápidamente</span>  (quickly)'],
            ['lento → lenta + mente', '<span class="ending">lentamente</span>  (slowly)'],
            ['feliz (no gender change) + mente', '<span class="ending">felizmente</span>  (happily)'],
            ['fácil + mente', '<span class="ending">fácilmente</span>  (easily)'],
            ['inteligente + mente', '<span class="ending">inteligentemente</span>  (intelligently)']
          ]
        },
        {
          heading: 'Accents <em>stay</em>',
          body: 'A small but important detail: if the original adjective has a written accent, it <strong>keeps</strong> the accent in the adverb form. <em>Rápido</em> → <em>rápidamente</em>. <em>Fácil</em> → <em>fácilmente</em>. <em>Difícil</em> → <em>difícilmente</em>. The accent never moves and never disappears.'
        },
        {
          heading: 'Common <em>-mente</em> adverbs to know',
          body: 'Once you spot the pattern, you can recognize hundreds of these.',
          conjugation: [
            ['probable + mente', '<span class="ending">probablemente</span>  (probably)'],
            ['final + mente', '<span class="ending">finalmente</span>  (finally)'],
            ['inmediato → inmediata + mente', '<span class="ending">inmediatamente</span>  (immediately)'],
            ['frecuente + mente', '<span class="ending">frecuentemente</span>  (frequently)'],
            ['tranquilo → tranquila + mente', '<span class="ending">tranquilamente</span>  (calmly)'],
            ['real + mente', '<span class="ending">realmente</span>  (really, truly)'],
            ['absoluto → absoluta + mente', '<span class="ending">absolutamente</span>  (absolutely)']
          ]
        },
        {
          heading: 'In <em>action</em>',
          body: '',
          examples: [
            { es: 'Ella habla rápidamente.', en: 'She speaks quickly.' },
            { es: 'Finalmente terminé la tarea.', en: 'I finally finished the homework.' },
            { es: 'Lo hice fácilmente.', en: 'I did it easily.' },
            { es: 'Realmente me gusta esta canción.', en: 'I really like this song.' },
            { es: 'El niño duerme tranquilamente.', en: 'The child is sleeping calmly.' }
          ]
        },
        {
          heading: 'When you chain <em>two</em> adverbs',
          body: 'A neat rule: if you have <strong>two -mente adverbs in a row</strong> joined by "y" or "pero," <strong>drop the -mente from the first one</strong> and leave it only on the second. The first stays in its feminine adjective form.',
          examples: [
            { es: 'Habla lenta y claramente.', en: 'He speaks slowly and clearly. (NOT lentamente y claramente)' },
            { es: 'Trabaja rápida pero cuidadosamente.', en: 'She works quickly but carefully.' }
          ]
        },
        {
          heading: 'When <em>not</em> to use -mente',
          body: 'Not every English "-ly" word becomes -mente. Common exceptions: <em>bien</em> (well, not "buenamente"), <em>mal</em> (badly), <em>despacio</em> (slowly — alternative to lentamente), <em>así</em> (like this). When in doubt with everyday speech, native speakers often prefer shorter alternatives: <em>"habla despacio"</em> sounds more natural than <em>"habla lentamente"</em> in casual conversation.'
        },
        {
          type: 'tip',
          heading: 'The <em>formation</em> rule, simplified',
          body: 'The pattern is mechanical once you know it:<br><br><strong>Step 1:</strong> Take the adjective. If it has separate masculine/feminine forms (-o / -a), use the FEMININE form. <em>rápido / rápida</em> → use <em>rápida</em>.<br><br><strong>Step 2:</strong> Add <strong>-mente</strong>. <em>rápida + mente = rápidamente</em>.<br><br><strong>Step 3:</strong> If the original adjective had an accent mark, KEEP IT. <em>rápida</em> has an accent → <em>rápidamente</em> keeps it.<br><br>If the adjective has only one form (ends in -e or a consonant), just add -mente directly:<br><br>• <em>fácil → fácilmente</em> (easily)<br>• <em>feliz → felizmente</em> (happily)<br>• <em>frecuente → frecuentemente</em> (frequently)<br>• <em>general → generalmente</em> (generally)<br><br>Once you internalize "feminine form + mente," forming new adverbs becomes automatic. From <em>perfecto</em> → <em>perfectamente</em>. From <em>lento</em> → <em>lentamente</em>. From <em>cuidadoso</em> → <em>cuidadosamente</em>. It works on most adjectives.'
        },
        {
          type: 'mistakes',
          heading: '-mente <em>traps</em>',
          body: 'Where students go wrong with -mente adverbs:',
          items: [
            'Using the <strong>masculine form</strong> as the base — wrong. <em>"Rápidomente"</em> isn\'t a word. Use the feminine form: <em>"rápidamente."</em>',
            'Dropping the <strong>accent mark</strong> from the original adjective — wrong. <em>"Rapidamente"</em> is missing the accent. The accent on the original adjective stays: <em>"rápidamente, fácilmente, prácticamente."</em>',
            'Forgetting that two consecutive -mente adverbs <strong>drop the first -mente</strong> — wrong to say <em>"lentamente y claramente."</em> Correct: <em>"lenta y claramente."</em> Only the LAST adverb keeps the -mente; the others stay in feminine adjective form.',
            'Using -mente <strong>when there\'s a shorter alternative</strong> — saying <em>"buenamente"</em> for "well" is wrong. Use <em>bien</em>. For "badly," use <em>mal</em>, not <em>"malamente."</em> Both bien and mal already work as adverbs without -mente.',
            'Placing -mente adverbs <strong>between verb and object</strong> like English does — wrong. <em>"Hablo rápidamente español"</em> sounds awkward. Better: <em>"Hablo español rápidamente"</em> or <em>"Rápidamente, hablo español."</em> Adverbs usually come AFTER the verb-object pair or at the start of the sentence.',
            'Trying to make -mente adverbs <strong>from nouns</strong> — wrong. -mente attaches to adjectives only. You can\'t make "amormente" or "casa-mente" — those aren\'t words.',
            'Overusing -mente in <strong>casual speech</strong> — Spanish speakers often prefer shorter alternatives in conversation. <em>"Habla despacio"</em> sounds more natural than <em>"habla lentamente."</em> <em>"Con cuidado"</em> sounds more natural than <em>"cuidadosamente"</em> in everyday talk. Save -mente adverbs for writing and formal speech.'
          ]
        }
      ],
      quiz: [
        { q: 'How do you say "quickly" in Spanish?', options: [
          { text: 'rápidomente', correct: false },
          { text: 'rápidamente', correct: true },
          { text: 'rápidemente', correct: false }
        ]},
        { q: 'To form a -mente adverb, you start with which form of the adjective?', options: [
          { text: 'masculine singular', correct: false },
          { text: 'feminine singular', correct: true },
          { text: 'plural', correct: false }
        ]},
        { q: 'Which sentence is correct?', options: [
          { text: 'Habla lentamente y claramente.', correct: false },
          { text: 'Habla lenta y claramente.', correct: true },
          { text: 'Habla lentamente y clara.', correct: false }
        ]}
      ]
    },
    {
      id: 'yo-go-verbs',
      num: '27',
      level: 'sp1',
      title: 'The "<em>yo-go</em>" verbs',
      tag: 'Irregular verbs · Present tense',
      summary: 'A whole family of common verbs is regular EXCEPT in the "yo" form, which ends in -go. Memorize them once and they unlock daily Spanish.',
      sections: [
        {
          heading: 'What is a <em>yo-go</em>?',
          body: 'A "yo-go" is the nickname for a group of common Spanish verbs that follow this pattern: they\'re basically regular (or stem-changing) in five of the six forms, but the <strong>yo</strong> form is irregular and ends in <strong>-go</strong>. The other forms (tú, él/ella, nosotros, vosotros, ellos) follow normal rules.'
        },
        {
          heading: 'The <em>core</em> ten yo-go verbs',
          body: 'Memorize these ten. They\'re some of the most common verbs in the language.',
          conjugation: [
            ['tener — to have', '<span class="ending">tengo</span>  (yo)'],
            ['hacer — to do/make', '<span class="ending">hago</span>'],
            ['salir — to go out/leave', '<span class="ending">salgo</span>'],
            ['poner — to put/place', '<span class="ending">pongo</span>'],
            ['traer — to bring', '<span class="ending">traigo</span>'],
            ['decir — to say/tell', '<span class="ending">digo</span>'],
            ['oír — to hear', '<span class="ending">oigo</span>'],
            ['venir — to come', '<span class="ending">vengo</span>'],
            ['caer — to fall', '<span class="ending">caigo</span>'],
            ['valer — to be worth', '<span class="ending">valgo</span>']
          ]
        },
        {
          heading: 'The pattern in <em>full</em>',
          body: 'Let\'s look at <strong>hacer</strong> as an example. Notice that ONLY the yo form is irregular — the other five forms follow regular -er endings.',
          conjugation: [
            ['yo', '<span class="ending">hago</span>  ← irregular!'],
            ['tú', 'haces  (regular -er)'],
            ['él / ella / usted', 'hace'],
            ['nosotros', 'hacemos'],
            ['vosotros', 'hacéis'],
            ['ellos / ellas / ustedes', 'hacen']
          ]
        },
        {
          heading: 'Stem changes + <em>yo-go</em>',
          body: 'Some yo-go verbs are ALSO stem-changers in their other forms. The most common: <strong>tener</strong> (yo: tengo, but tú: tienes — e→ie elsewhere), <strong>venir</strong> (yo: vengo, but tú: vienes — e→ie elsewhere), <strong>decir</strong> (yo: digo, but tú: dices — e→i elsewhere). These combine both patterns.',
          conjugation: [
            ['tener', 'tengo, t<span class="ending">ie</span>nes, t<span class="ending">ie</span>ne, tenemos, tenéis, t<span class="ending">ie</span>nen'],
            ['venir', 'vengo, v<span class="ending">ie</span>nes, v<span class="ending">ie</span>ne, venimos, venís, v<span class="ending">ie</span>nen'],
            ['decir', 'digo, d<span class="ending">i</span>ces, d<span class="ending">i</span>ce, decimos, decís, d<span class="ending">i</span>cen']
          ]
        },
        {
          heading: 'Close <em>cousins</em>',
          body: 'A few more verbs have irregular "yo" forms that DON\'T end in -go, but you\'ll meet them in the same chapter. Worth memorizing alongside the yo-gos:',
          conjugation: [
            ['ver — to see', '<span class="ending">veo</span>  (not "vo")'],
            ['saber — to know (facts)', '<span class="ending">sé</span>  (just one syllable!)'],
            ['dar — to give', '<span class="ending">doy</span>'],
            ['estar — to be', '<span class="ending">estoy</span>'],
            ['ir — to go', '<span class="ending">voy</span>'],
            ['ser — to be', '<span class="ending">soy</span>'],
            ['conocer — to know (people)', '<span class="ending">conozco</span>  (z added before -co)']
          ]
        },
        {
          heading: 'Yo-gos in <em>action</em>',
          body: '',
          examples: [
            { es: 'Tengo dos hermanos.', en: 'I have two siblings.' },
            { es: 'Hago la tarea por la noche.', en: 'I do my homework at night.' },
            { es: 'Salgo con mis amigos los viernes.', en: 'I go out with my friends on Fridays.' },
            { es: 'Pongo la mesa antes de cenar.', en: 'I set the table before dinner.' },
            { es: 'Vengo de Cincinnati.', en: 'I come from Cincinnati.' },
            { es: 'Digo la verdad siempre.', en: 'I always tell the truth.' }
          ]
        },
        {
          heading: 'Why this <em>matters</em>',
          body: 'Once you learn the yo-go family as a group, six of the most common Spanish verbs suddenly make sense. The pattern is consistent: drop the -er or -ir ending, swap in "-go" for the yo form, and conjugate the rest normally. It\'s one of the most efficient memorization wins in Spanish.'
        },
        {
          type: 'mistakes',
          heading: 'Yo-go <em>traps</em>',
          body: 'The pattern is simple, but here\'s where students slip:',
          items: [
            'Applying yo-go to <strong>tú, él, or other forms</strong> — wrong. The -go is ONLY for the yo form. <em>"Tú tengo"</em> is incorrect; correct is <em>"tú tienes."</em>',
            'Trying to put a <strong>stem-change in the yo form</strong> — for verbs that are BOTH yo-go AND stem-changers (like tener: e→ie, venir: e→ie), the yo form uses yo-go and SKIPS the stem change. So it\'s <em>"tengo"</em> (NOT "tiengo"), <em>"vengo"</em> (NOT "viengo"). Stem-change comes back for tú/él/ellos: <em>tienes, tiene, tienen</em>.',
            'Forgetting that <strong>poner, salir, hacer, decir</strong> are all yo-go — students remember tener and venir but forget the rest. <em>"Pongo, salgo, hago, digo."</em> All yo-go.',
            'Saying <strong>"haco"</strong> for hacer — wrong. The yo form is <em>"hago"</em> (c becomes g). Same with decir → <em>"digo"</em> (c becomes g + stem change).',
            'Mixing up <strong>caer (to fall)</strong> — it\'s actually a yo-go verb too: <em>"caigo"</em> (I fall). And so are <em>traer → traigo</em> (I bring) and <em>oír → oigo</em> (I hear). These are extended yo-go family members.',
            'Forgetting that yo-go ALSO appears in the <strong>present subjunctive</strong> — the yo-go stem is used for ALL forms of the subjunctive. <em>Tenga, tengas, tenga, tengamos, tengáis, tengan</em>. Same pattern for venga, salga, ponga, haga, diga. This shows up in Spanish 2-3.',
            'Trying to add -go to <strong>regular verbs</strong> like hablar, comer, vivir — they don\'t have yo-go. <em>"Yo habla"</em> would be wrong (correct: yo hablo). Yo-go is a property of specific verbs only.'
          ]
        }
      ],
      quiz: [
        { q: 'What is the "yo" form of "tener"?', options: [
          { text: 'teno', correct: false },
          { text: 'tengo', correct: true },
          { text: 'tieno', correct: false }
        ]},
        { q: 'Which form follows the yo-go pattern?', options: [
          { text: 'hablo (yo, hablar)', correct: false },
          { text: 'pongo (yo, poner)', correct: true },
          { text: 'comemos (nosotros, comer)', correct: false }
        ]},
        { q: 'In yo-go verbs, which OTHER forms are also irregular besides yo?', options: [
          { text: 'All five other forms', correct: false },
          { text: 'None — only yo is irregular (though stem-changers add their own pattern)', correct: true },
          { text: 'Only nosotros', correct: false }
        ]}
      ]
    },
    {
      id: 'time-and-dates',
      num: '28',
      level: 'sp1',
      title: 'Telling time & giving the <em>date</em>',
      tag: 'Practical Spanish · Time',
      summary: 'How to tell time, ask the time, give the date in writing — and why "5/12" in Spanish means December 5th, NOT May 12th.',
      sections: [
        {
          heading: 'Asking the <em>time</em>',
          body: 'There\'s one standard question: <strong>¿Qué hora es?</strong> (literally "what hour is it?"). The answer follows a strict pattern that depends on whether it\'s one o\'clock (singular) or any other hour (plural).',
          examples: [
            { es: '¿Qué hora es?', en: 'What time is it?' },
            { es: 'Es la una.', en: 'It\'s one o\'clock. (singular — "es la")' },
            { es: 'Son las dos.', en: 'It\'s two o\'clock. (plural — "son las")' },
            { es: 'Son las cinco en punto.', en: 'It\'s exactly five o\'clock.' }
          ]
        },
        {
          heading: 'Adding minutes — "<em>y</em>" and "<em>menos</em>"',
          body: 'For minutes 1-30, add the minutes with <strong>y</strong> ("and"). For 31-59, you typically use the next hour with <strong>menos</strong> ("minus" / "less"). Quarter past = <em>y cuarto</em>. Half past = <em>y media</em>. Quarter to = <em>menos cuarto</em>.',
          conjugation: [
            ['3:00', '<span class="ending">Son las tres</span> (en punto)'],
            ['3:15', '<span class="ending">Son las tres y cuarto</span>'],
            ['3:20', '<span class="ending">Son las tres y veinte</span>'],
            ['3:30', '<span class="ending">Son las tres y media</span>'],
            ['3:45', '<span class="ending">Son las cuatro menos cuarto</span> (lit. "four minus quarter")'],
            ['3:50', '<span class="ending">Son las cuatro menos diez</span>']
          ]
        },
        {
          heading: 'AM / PM in <em>Spanish</em>',
          body: 'Spanish uses descriptions of the day, not "AM" or "PM": <strong>de la mañana</strong> (morning, roughly 6 AM-noon), <strong>de la tarde</strong> (afternoon, noon-7 PM), <strong>de la noche</strong> (night, after dark). For exactly midnight or noon, say <em>medianoche</em> and <em>mediodía</em>.',
          examples: [
            { es: 'Son las ocho de la mañana.', en: 'It\'s 8 AM. (morning)' },
            { es: 'Son las tres de la tarde.', en: 'It\'s 3 PM. (afternoon)' },
            { es: 'Son las once de la noche.', en: 'It\'s 11 PM. (night)' },
            { es: 'Es mediodía.', en: 'It\'s noon.' },
            { es: 'Es medianoche.', en: 'It\'s midnight.' }
          ]
        },
        {
          heading: '"<em>At</em>" what time — using "a la / a las"',
          body: 'When telling someone WHEN something happens, use <strong>a la</strong> (for 1:00) or <strong>a las</strong> (everything else). Don\'t confuse "es la / son las" (it IS that time) with "a la / a las" (AT that time).',
          examples: [
            { es: '¿A qué hora empieza la clase?', en: 'At what time does class start?' },
            { es: 'La clase empieza a las nueve.', en: 'Class starts at nine.' },
            { es: 'Como a la una.', en: 'I eat at one.' },
            { es: 'El concierto es a las ocho de la noche.', en: 'The concert is at 8 PM.' }
          ]
        },
        {
          heading: 'Giving the <em>date</em>',
          body: 'The Spanish date format is: <strong>el [day] de [month] de [year]</strong>. You read the day as a regular number (dos, tres, cuatro...), except the 1st of the month uses <strong>primero</strong> (first). Months are <strong>not capitalized</strong>.',
          examples: [
            { es: 'el primero de enero', en: 'January 1st (use "primero" for the 1st)' },
            { es: 'el quince de marzo', en: 'March 15' },
            { es: 'el cuatro de julio de dos mil veintiséis', en: 'July 4, 2026' },
            { es: '¿Cuál es la fecha de hoy?', en: 'What is today\'s date?' },
            { es: 'Hoy es martes, doce de mayo.', en: 'Today is Tuesday, May 12.' }
          ]
        },
        {
          heading: '⚠️ The numerical date <em>trap</em>',
          body: 'This catches almost every English speaker. In Spanish (and most of the world!), the numerical date format is <strong>day/month/year</strong>, NOT month/day/year. So <strong>5/12</strong> in Spanish means <strong>December 5th</strong> (el cinco de diciembre) — NOT May 12th. Always read it as <em>día/mes/año</em>.',
          conjugation: [
            ['5/12 (Spanish)', '<span class="ending">December 5</span>  — el 5 de diciembre'],
            ['5/12 (US English)', 'May 12  — different meaning!'],
            ['12/5 (Spanish)', '<span class="ending">May 12</span>  — el 12 de mayo'],
            ['1/1/2026 (Spanish)', '<span class="ending">January 1, 2026</span>'],
            ['4/7/2026 (Spanish)', '<span class="ending">July 4, 2026</span>  (NOT April 7!)']
          ]
        },
        {
          heading: 'How to avoid <em>confusion</em>',
          body: 'When writing dates in Spanish for an international audience, spell out the month when possible: <em>"4 de julio de 2026"</em> is unambiguous. When you see a numerical date in a Spanish-language document, always read day first, month second. This affects birthdays, deadlines, appointments — anywhere a date gets written down.'
        },
        {
          type: 'tip',
          heading: 'The <em>ser-only</em> rule for time and dates',
          body: 'Both time and dates use <strong>ser</strong>, never <em>estar</em>. This is one of the few absolute rules in Spanish.<br><br><strong>For time:</strong><br>• <em>Es la una</em> (It\'s 1:00) — singular because una is one<br>• <em>Son las dos / tres / cuatro</em>... (It\'s 2:00 / 3:00 / 4:00...) — plural for everything else<br>• <em>Eran las tres</em> (It was 3:00) — imperfect, still ser<br><br><strong>For dates:</strong><br>• <em>Hoy es lunes</em> (Today is Monday)<br>• <em>Es el dos de junio</em> (It\'s the 2nd of June)<br>• <em>Era el 4 de julio</em> (It was July 4th) — imperfect, still ser<br><br><strong>For the first of the month:</strong> Spanish uses <em>"el primero"</em> (NOT "el uno"). So <em>"el primero de mayo"</em> (May 1st). For every other day, use the cardinal number: <em>el dos, el tres, el veintidós</em>.<br><br>Quick test: anything about WHEN it is — time, date, day of week — uses <strong>ser</strong>. Anything about CONDITION or location uses estar.'
        },
        {
          type: 'mistakes',
          heading: 'Time and date <em>traps</em>',
          body: 'The most common time/date mistakes:',
          items: [
            'Saying <strong>"Es las tres"</strong> for "It\'s 3:00" — wrong. Use <em>"Son las tres."</em> The verb is plural for any hour except one.',
            'Saying <strong>"Son la una"</strong> for "It\'s 1:00" — wrong. Use <em>"Es la una."</em> Singular for 1:00 because "una" is singular.',
            'Using <strong>estar</strong> for time or dates — wrong. <em>"Está las tres"</em> or <em>"Hoy está lunes"</em> are both incorrect. Always use ser: <em>"Son las tres," "Hoy es lunes."</em>',
            'Saying <strong>"el uno de mayo"</strong> for May 1st — wrong. The first of the month is special: <em>"el primero de mayo."</em> For all other dates, use the cardinal number.',
            'Reading dates in <strong>English order</strong> — when you see "4/7/2026" in a Spanish-language document, it\'s July 4th (4 de julio), NOT April 7. Day comes first in Spanish-speaking countries.',
            'Forgetting that <strong>days of the week and months are lowercase</strong> in Spanish — <em>"lunes, martes, enero, febrero."</em> Only capitalize them at the start of a sentence.',
            'Forgetting <strong>"y" and "menos"</strong> for time — to say "It\'s 3:15," use <em>"Son las tres y cuarto"</em> (literally "It\'s three and quarter"). For "It\'s 2:45," you can say <em>"Son las tres menos cuarto"</em> (three minus quarter) or <em>"Son las dos y cuarenta y cinco."</em> Both work.',
            'Translating <strong>"at" + time</strong> with the wrong preposition — Spanish uses <em>a</em>: <em>"La clase es a las nueve"</em> (Class is AT 9:00). NOT "en las nueve" or "para las nueve."'
          ]
        }
      ],
      quiz: [
        { q: 'How do you say "It\'s 1:00"?', options: [
          { text: 'Son las una.', correct: false },
          { text: 'Es la una.', correct: true },
          { text: 'Es las uno.', correct: false }
        ]},
        { q: 'In Spanish, what does the numerical date "3/9/2026" mean?', options: [
          { text: 'March 9, 2026', correct: false },
          { text: 'September 3, 2026', correct: true },
          { text: 'Either, it\'s ambiguous', correct: false }
        ]},
        { q: 'Which is correct for "Class starts at 8"?', options: [
          { text: 'La clase empieza son las ocho.', correct: false },
          { text: 'La clase empieza a las ocho.', correct: true },
          { text: 'La clase empieza es las ocho.', correct: false }
        ]}
      ]
    },
    {
      id: 'nationalities',
      num: '29',
      level: 'sp1',
      title: '<em>Nationalities</em>',
      tag: 'Foundations · Adjectives',
      summary: 'How to say where someone is from. Nationalities are adjectives, not nouns — they agree in gender and number, and they\'re NOT capitalized.',
      sections: [
        {
          heading: 'Three things English speakers <em>get wrong</em>',
          body: 'Before the forms, three rules that catch every English speaker off guard: <strong>(1)</strong> Nationalities in Spanish are <strong>adjectives</strong>, not nouns. "I am Mexican" → <em>"Soy mexicano"</em>, not "Soy un mexicano." <strong>(2)</strong> They <strong>agree in gender and number</strong> with the person. A man is <em>mexicano</em>; a woman is <em>mexicana</em>; a group of men or mixed is <em>mexicanos</em>; a group of women is <em>mexicanas</em>. <strong>(3)</strong> Nationalities are <strong>never capitalized</strong> in Spanish, unlike English. Spanish writes "español" with a small "e."'
        },
        {
          heading: 'Asking & answering <em>where you\'re from</em>',
          body: 'There are two common patterns. One uses <em>ser</em> + nationality. The other uses <em>ser de</em> + country name.',
          examples: [
            { es: '¿De dónde eres?', en: 'Where are you from?' },
            { es: 'Soy de México.', en: 'I\'m from Mexico. (using ser de + country)' },
            { es: 'Soy mexicano. / Soy mexicana.', en: 'I\'m Mexican. (using ser + nationality adjective)' },
            { es: '¿De dónde es ella?', en: 'Where is she from?' },
            { es: 'Es de Argentina. Es argentina.', en: 'She\'s from Argentina. She\'s Argentinean.' }
          ]
        },
        {
          heading: 'Pattern 1: Ending in -<em>o</em> (4 forms)',
          body: 'This is the most common pattern. The masculine singular ends in -o, and the other three forms follow regular adjective rules.',
          conjugation: [
            ['Mexico', '<span class="ending">mexicano / mexicana / mexicanos / mexicanas</span>'],
            ['Colombia', '<span class="ending">colombiano / colombiana / -nos / -nas</span>'],
            ['Argentina', '<span class="ending">argentino / argentina / -nos / -nas</span>'],
            ['Cuba', '<span class="ending">cubano / cubana / -nos / -nas</span>'],
            ['Italy', '<span class="ending">italiano / italiana / -nos / -nas</span>'],
            ['Russia', '<span class="ending">ruso / rusa / rusos / rusas</span>'],
            ['China', '<span class="ending">chino / china / chinos / chinas</span>'],
            ['Korea', '<span class="ending">coreano / coreana / -nos / -nas</span>'],
            ['Brazil', '<span class="ending">brasileño / brasileña / -ños / -ñas</span>']
          ]
        },
        {
          heading: 'Pattern 2: Ending in a <em>consonant</em> (4 forms, often with accent)',
          body: 'Nationalities that end in a consonant in the masculine singular form take an -a for feminine — they have 4 forms, just like the -o pattern. Watch out: <strong>many of these LOSE their accent</strong> in the feminine and plural forms, because adding a syllable changes the stress pattern.',
          conjugation: [
            ['Spain', '<span class="ending">español / española / españoles / españolas</span>'],
            ['England (English)', '<span class="ending">inglés / inglesa / ingleses / inglesas</span>  ← loses accent'],
            ['France (French)', '<span class="ending">francés / francesa / franceses / francesas</span>  ← loses accent'],
            ['Japan', '<span class="ending">japonés / japonesa / japoneses / japonesas</span>  ← loses accent'],
            ['Portugal', '<span class="ending">portugués / portuguesa / -es / -as</span>  ← loses accent'],
            ['Germany', '<span class="ending">alemán / alemana / alemanes / alemanas</span>  ← loses accent'],
            ['Ireland', '<span class="ending">irlandés / irlandesa / -es / -as</span>  ← loses accent']
          ]
        },
        {
          heading: 'Pattern 3: Ending in -<em>e</em> or -<em>í</em> (2 forms only)',
          body: 'Some nationalities don\'t change for gender — only for number. These usually end in -<strong>e</strong> (canadiense) or -<strong>í</strong> (israelí, marroquí).',
          conjugation: [
            ['Canada', '<span class="ending">canadiense / canadienses</span>  (same for m/f)'],
            ['United States', '<span class="ending">estadounidense / estadounidenses</span>'],
            ['Costa Rica', '<span class="ending">costarricense / costarricenses</span>'],
            ['Nicaragua', '<span class="ending">nicaragüense / nicaragüenses</span>'],
            ['Belgium', '<span class="ending">belga / belgas</span>'],
            ['Israel', '<span class="ending">israelí / israelíes</span>'],
            ['Morocco', '<span class="ending">marroquí / marroquíes</span>'],
            ['Iran', '<span class="ending">iraní / iraníes</span>']
          ]
        },
        {
          heading: 'Spanish-speaking <em>nationalities</em> — all 21',
          body: 'Memorize the nationalities of all 21 Spanish-speaking countries. Your geography section (Mundo) covers the countries themselves.',
          conjugation: [
            ['Mexico', '<span class="ending">mexicano/a</span>'],
            ['Spain', '<span class="ending">español/a</span>'],
            ['Argentina', '<span class="ending">argentino/a</span>'],
            ['Colombia', '<span class="ending">colombiano/a</span>'],
            ['Peru', '<span class="ending">peruano/a</span>'],
            ['Venezuela', '<span class="ending">venezolano/a</span>'],
            ['Chile', '<span class="ending">chileno/a</span>'],
            ['Ecuador', '<span class="ending">ecuatoriano/a</span>'],
            ['Guatemala', '<span class="ending">guatemalteco/a</span>'],
            ['Cuba', '<span class="ending">cubano/a</span>'],
            ['Bolivia', '<span class="ending">boliviano/a</span>'],
            ['Dominican Rep.', '<span class="ending">dominicano/a</span>'],
            ['Honduras', '<span class="ending">hondureño/a</span>'],
            ['Paraguay', '<span class="ending">paraguayo/a</span>'],
            ['El Salvador', '<span class="ending">salvadoreño/a</span>'],
            ['Nicaragua', '<span class="ending">nicaragüense</span>  (no gender change)'],
            ['Costa Rica', '<span class="ending">costarricense</span>  (no gender change)'],
            ['Panama', '<span class="ending">panameño/a</span>'],
            ['Uruguay', '<span class="ending">uruguayo/a</span>'],
            ['Puerto Rico', '<span class="ending">puertorriqueño/a</span>'],
            ['Equatorial Guinea', '<span class="ending">ecuatoguineano/a</span>']
          ]
        },
        {
          heading: 'Common <em>non-Spanish-speaking</em> nationalities',
          body: 'High school students hear these all the time — in songs, movies, news, conversations about classmates\' heritage. Worth knowing alongside the Spanish-speaking ones.',
          conjugation: [
            ['United States', '<span class="ending">estadounidense</span>  (more precise) / <span class="ending">norteamericano/a</span>'],
            ['Canada', '<span class="ending">canadiense</span>'],
            ['England', '<span class="ending">inglés/inglesa</span>'],
            ['United Kingdom (British)', '<span class="ending">británico/a</span>'],
            ['Ireland', '<span class="ending">irlandés/irlandesa</span>'],
            ['France', '<span class="ending">francés/francesa</span>'],
            ['Germany', '<span class="ending">alemán/alemana</span>'],
            ['Italy', '<span class="ending">italiano/a</span>'],
            ['Portugal', '<span class="ending">portugués/portuguesa</span>'],
            ['Russia', '<span class="ending">ruso/a</span>'],
            ['China', '<span class="ending">chino/a</span>'],
            ['Japan', '<span class="ending">japonés/japonesa</span>'],
            ['Korea', '<span class="ending">coreano/a</span>'],
            ['Vietnam', '<span class="ending">vietnamita</span>  (no gender change)'],
            ['India', '<span class="ending">indio/a</span> / <span class="ending">hindú</span>'],
            ['Brazil', '<span class="ending">brasileño/a</span>'],
            ['Australia', '<span class="ending">australiano/a</span>'],
            ['Egypt', '<span class="ending">egipcio/a</span>'],
            ['Greece', '<span class="ending">griego/a</span>']
          ]
        },
        {
          heading: 'A word about "<em>American</em>"',
          body: 'In English, "American" is shorthand for "from the United States." But Spanish speakers from Latin America are <strong>also Americans</strong> — they live in the Americas! Calling yourself <em>americano</em> can sound slightly imprecise (or even mildly imperialist) to a Mexican or Argentine speaker. The more respectful and accurate term is <strong>estadounidense</strong> (literally "United-Statesian"). Many speakers also use <em>norteamericano</em> (North American), though that technically includes Canada and Mexico too. <em>Estadounidense</em> is the cleanest choice.'
        },
        {
          heading: 'Nationalities in <em>real sentences</em>',
          body: '',
          examples: [
            { es: 'Mi madre es mexicana y mi padre es estadounidense.', en: 'My mother is Mexican and my father is American.' },
            { es: 'Los profesores son colombianos.', en: 'The teachers (m. or mixed) are Colombian.' },
            { es: 'Las estudiantes japonesas estudian biología.', en: 'The Japanese (female) students study biology.' },
            { es: 'Mi mejor amigo es canadiense.', en: 'My best friend is Canadian.' },
            { es: 'Somos puertorriqueños, pero vivimos en Cincinnati.', en: 'We\'re Puerto Rican, but we live in Cincinnati.' },
            { es: 'El cantante es español, no mexicano.', en: 'The singer is Spanish, not Mexican.' }
          ]
        },
        {
          type: 'tip',
          heading: '<em>"Americano"</em> vs <em>"estadounidense"</em>',
          body: 'Calling yourself <em>"americano"</em> when you mean a US citizen can be controversial. Here\'s why:<br><br><strong>América</strong> in Spanish refers to <strong>both continents</strong> — North AND South America. By that logic, every Mexican, Brazilian, Colombian, Argentine, Canadian, and US citizen is "americano." So when a US citizen says <em>"Soy americano,"</em> some Spanish speakers (especially Latin Americans) hear it as US-centric — as if the US has claimed the whole hemisphere\'s name.<br><br>The respectful alternative is <strong>estadounidense</strong> (from Estados Unidos = United States). It\'s longer and harder to say, but it\'s precise and avoids the issue.<br><br>In practice:<br>• In Latin America: <em>"Soy estadounidense"</em> is preferred. Locals will appreciate the precision.<br>• In Spain: <em>"americano"</em> is more commonly accepted for US citizens, but estadounidense still works.<br>• In casual conversation, "americano" is widely understood for "US citizen," but in academic or formal contexts, use estadounidense.<br><br>For a US Spanish class, defaulting to <em>estadounidense</em> shows cultural awareness. It\'s the right call.'
        },
        {
          type: 'mistakes',
          heading: 'Nationality <em>traps</em>',
          body: 'Where students go wrong with nationalities:',
          items: [
            'Capitalizing nationalities — wrong. <em>"Soy Americano"</em> should be <em>"Soy estadounidense"</em> (or "Soy americano" — both lowercase). Nationalities, languages, and adjectives derived from country names are all LOWERCASE in Spanish. Only the country name itself is capitalized: <em>"Vivo en México, soy mexicano."</em>',
            'Using <strong>"un / una"</strong> with nationality after ser — usually wrong. <em>"Soy un mexicano"</em> sounds odd. Use just <em>"Soy mexicano"</em> — like with professions. Use the article only if you\'re specifying or contrasting: <em>"Soy UN mexicano que vive en Estados Unidos."</em>',
            'Saying <strong>"americano"</strong> for US citizens without thinking about it — technically all of the Americas count as American. For US-specific identity, <em>estadounidense</em> is more precise and respectful, especially in Latin American contexts.',
            'Forgetting that <strong>nationalities ending in consonants</strong> add -a for feminine — <em>francés / francesa, alemán / alemana, japonés / japonesa, inglés / inglesa, irlandés / irlandesa.</em> Note that the accent often drops in the feminine form (francés → francesa) because of stress shift.',
            'Treating <strong>nationalities ending in -ense</strong> (estadounidense, canadiense, costarricense) as if they had separate masculine/feminine forms — they don\'t. <em>"Mi madre es canadiense, mi padre es canadiense."</em> Same form for both.',
            'Using a <strong>nationality as a noun</strong> in a way that sounds dehumanizing — saying <em>"los mexicanos hacen X"</em> as a sweeping generalization is awkward in any language. Better: <em>"la gente de México"</em> or specifying the community you mean.',
            'Confusing <strong>language names with nationalities</strong> — they often look identical (mexicano = Mexican person OR nothing, español = Spaniard OR the Spanish language). Context usually decides. For languages: <em>"Hablo español"</em> (I speak Spanish). For nationality: <em>"Soy español"</em> (I am Spanish).'
          ]
        }
      ],
      quiz: [
        { q: 'Which is correct in Spanish?', options: [
          { text: 'Soy Mexicano.', correct: false },
          { text: 'Soy mexicano.', correct: true },
          { text: 'Soy un mexicano.', correct: false }
        ]},
        { q: 'How would you describe two female friends from Japan?', options: [
          { text: 'Son japonés.', correct: false },
          { text: 'Son japonesas.', correct: true },
          { text: 'Son japoneses.', correct: false }
        ]},
        { q: 'What\'s the most precise word for someone from the United States?', options: [
          { text: 'americano', correct: false },
          { text: 'estadounidense', correct: true },
          { text: 'norteamérica', correct: false }
        ]}
      ]
    },
    {
      id: 'reflexive-verbs',
      num: '30',
      level: 'sp1',
      title: '<em>Reflexive</em> verbs',
      tag: 'Verbs · Daily routine',
      summary: 'When the subject does something to itself: me lavo (I wash myself), te despiertas (you wake up), se acuesta (he goes to bed). The full pattern, with the daily-routine verbs you\'ll use every day.',
      sections: [
        {
          heading: 'What "<em>reflexive</em>" actually means',
          body: 'A verb is <strong>reflexive</strong> when the subject and the object are the same person — the action "reflects" back onto the doer. In English we usually say it with "myself, yourself, himself…": "I wash <em>myself</em>," "She looks at <em>herself</em> in the mirror." Spanish has a more compact way to express this: a small pronoun (<strong>me, te, se, nos, os, se</strong>) placed right before the verb.'
        },
        {
          heading: 'How to <em>spot</em> a reflexive verb',
          body: 'In a dictionary, reflexive verbs are written with <strong>"-se"</strong> attached to the end of the infinitive. So <em>lavar</em> is "to wash (something or someone)," but <em>lavarse</em> is "to wash oneself." The "-se" is a tag meaning "this verb takes a reflexive pronoun." When you conjugate, the "-se" splits off and becomes one of the six reflexive pronouns.',
          conjugation: [
            ['lavar', 'to wash (something else, like dishes)'],
            ['lavarse', '<span class="ending">to wash oneself</span>  (reflexive)'],
            ['levantar', 'to lift (something or someone)'],
            ['levantarse', '<span class="ending">to get (oneself) up</span>'],
            ['llamar', 'to call (someone on the phone)'],
            ['llamarse', '<span class="ending">to be called / be named</span>']
          ]
        },
        {
          heading: 'The six <em>reflexive</em> pronouns',
          body: 'Each subject pronoun has a matching reflexive pronoun. Place it directly <strong>before</strong> the conjugated verb. Note: <em>se</em> covers a lot of ground — it works for "himself, herself, yourself (formal), themselves, yourselves."',
          conjugation: [
            ['yo', '<span class="ending">me</span>'],
            ['tú', '<span class="ending">te</span>'],
            ['él / ella / usted', '<span class="ending">se</span>'],
            ['nosotros', '<span class="ending">nos</span>'],
            ['vosotros', '<span class="ending">os</span>'],
            ['ellos / ellas / ustedes', '<span class="ending">se</span>']
          ]
        },
        {
          heading: 'Full conjugation: <em>lavarse</em>',
          body: 'Here\'s the complete present-tense conjugation. Notice the verb itself is conjugated as a regular -ar verb (lavar) — the reflexive pronoun just rides along in front.',
          conjugation: [
            ['yo', '<span class="ending">me</span> lavo  (I wash myself)'],
            ['tú', '<span class="ending">te</span> lavas  (you wash yourself)'],
            ['él / ella / usted', '<span class="ending">se</span> lava  (he/she/you washes/wash)'],
            ['nosotros', '<span class="ending">nos</span> lavamos  (we wash ourselves)'],
            ['vosotros', '<span class="ending">os</span> laváis  (you all wash yourselves — Spain)'],
            ['ellos / ellas / ustedes', '<span class="ending">se</span> lavan  (they / you all wash themselves)']
          ]
        },
        {
          heading: 'Daily routine — the <em>core</em> reflexives',
          body: 'Reflexive verbs are EVERYWHERE in daily-routine vocabulary. These ten are the ones every Spanish 1 student needs:',
          conjugation: [
            ['llamarse', 'to be named — <em>Me llamo Jason.</em>'],
            ['despertarse (e→ie)', 'to wake up — <em>Me despierto a las siete.</em>'],
            ['levantarse', 'to get up — <em>Me levanto temprano.</em>'],
            ['ducharse', 'to shower — <em>Me ducho por la mañana.</em>'],
            ['bañarse', 'to bathe — <em>Mi hijo se baña antes de dormir.</em>'],
            ['lavarse', 'to wash (oneself) — <em>Me lavo las manos.</em>'],
            ['cepillarse', 'to brush (oneself) — <em>Me cepillo los dientes.</em>'],
            ['vestirse (e→i)', 'to get dressed — <em>Me visto rápido.</em>'],
            ['acostarse (o→ue)', 'to go to bed — <em>Me acuesto a las once.</em>'],
            ['dormirse (o→ue)', 'to fall asleep — <em>Me duermo viendo la tele.</em>']
          ]
        },
        {
          heading: 'Reflexive ≠ <em>physical</em>',
          body: 'A common confusion: not every reflexive verb is about a physical act on yourself. Many reflexive verbs in Spanish describe <strong>emotional states, identity, or routines</strong>. English doesn\'t mark these as "reflexive" at all — they just happen to BE reflexive in Spanish.',
          conjugation: [
            ['llamarse', 'to be named  (NOT "to call oneself")'],
            ['sentirse (e→ie)', 'to feel — <em>Me siento bien.</em>'],
            ['divertirse (e→ie)', 'to have fun — <em>Nos divertimos mucho.</em>'],
            ['enojarse', 'to get angry — <em>Se enoja fácilmente.</em>'],
            ['preocuparse', 'to worry — <em>No te preocupes.</em>'],
            ['casarse (con)', 'to get married (to) — <em>Se casa en junio.</em>'],
            ['quedarse', 'to stay — <em>Me quedo en casa.</em>'],
            ['irse', 'to leave / go away — <em>Me voy ahora.</em>']
          ]
        },
        {
          heading: 'When the <em>same verb</em> changes meaning',
          body: 'Some verbs have one meaning when used normally, and a DIFFERENT meaning when made reflexive. This is one of the trickiest things to learn — but it\'s a real productivity boost once you see the pattern.',
          examples: [
            { es: 'ir → irse', en: 'to go → to leave / go away. "Voy a la tienda" = I go to the store. "Me voy" = I\'m leaving.' },
            { es: 'dormir → dormirse', en: 'to sleep → to fall asleep. "Duermo ocho horas" = I sleep 8 hrs. "Me duermo en clase" = I fall asleep in class.' },
            { es: 'poner → ponerse', en: 'to put → to put on (clothes) / to become. "Pongo el libro" = I put the book down. "Me pongo el abrigo" = I put on my coat.' },
            { es: 'llamar → llamarse', en: 'to call (phone) → to be named. "Llamo a María" = I call María. "Me llamo Jason" = My name is Jason.' },
            { es: 'sentir → sentirse', en: 'to feel (something) → to feel (a way). "Siento el frío" = I feel the cold. "Me siento bien" = I feel good.' }
          ]
        },
        {
          heading: 'Where to put the <em>pronoun</em>',
          body: 'The reflexive pronoun has TWO valid positions when an infinitive is involved (like in "ir + a + infinitive" or "tener que + infinitive"). Both are equally correct.',
          examples: [
            { es: 'Voy a bañarme. = Me voy a bañar.', en: 'I\'m going to bathe. (pronoun attaches to infinitive OR sits before the conjugated verb)' },
            { es: 'Tengo que levantarme. = Me tengo que levantar.', en: 'I have to get up.' },
            { es: 'Quiero acostarme. = Me quiero acostar.', en: 'I want to go to bed.' },
            { es: 'Empezamos a vestirnos. = Nos empezamos a vestir.', en: 'We\'re starting to get dressed.' }
          ]
        },
        {
          heading: 'A full <em>daily routine</em> in Spanish',
          body: 'Reflexives chained together to describe a whole morning — exactly the kind of paragraph students need to be able to produce:',
          examples: [
            { es: 'Me despierto a las seis y media.', en: 'I wake up at six-thirty.' },
            { es: 'Me levanto inmediatamente.', en: 'I get up immediately.' },
            { es: 'Me ducho por diez minutos.', en: 'I shower for ten minutes.' },
            { es: 'Me cepillo los dientes y me visto.', en: 'I brush my teeth and get dressed.' },
            { es: 'Después, me voy a la escuela.', en: 'After, I leave for school.' },
            { es: 'Por la noche, me acuesto a las once y me duermo enseguida.', en: 'At night, I go to bed at eleven and fall asleep right away.' }
          ]
        },
        {
          type: 'tip',
          heading: 'Verbs that <em>change meaning</em> when reflexive',
          body: 'Here\'s where reflexive verbs get genuinely interesting: some verbs <strong>completely change their meaning</strong> when they become reflexive. These aren\'t about doing something to yourself — they\'re different verbs that happen to share a root.<br><br>The most common pairs:<br><br>• <em>dormir</em> (to sleep) → <em>dormirse</em> (to FALL ASLEEP)<br>  <em>"Duermo ocho horas"</em> (I sleep 8 hours) vs <em>"Me duermo en el sofá"</em> (I fall asleep on the couch)<br><br>• <em>ir</em> (to go) → <em>irse</em> (to LEAVE / go away)<br>  <em>"Voy a la fiesta"</em> (I\'m going to the party) vs <em>"Me voy"</em> (I\'m leaving / I\'m out of here)<br><br>• <em>llevar</em> (to take/carry) → <em>llevarse</em> (to TAKE WITH ONE, or to get along with)<br>  <em>"Llevo el libro"</em> (I take the book) vs <em>"Me llevo bien con mi hermana"</em> (I get along well with my sister)<br><br>• <em>poner</em> (to put) → <em>ponerse</em> (to PUT ON clothing / BECOME)<br>  <em>"Pongo el libro en la mesa"</em> (I put the book on the table) vs <em>"Me pongo la chaqueta"</em> (I put on my jacket); also <em>"Se puso triste"</em> (he became sad)<br><br>• <em>quitar</em> (to remove) → <em>quitarse</em> (to TAKE OFF clothing)<br>  <em>"Quita los platos"</em> (Take the plates away) vs <em>"Me quito los zapatos"</em> (I take off my shoes)<br><br>• <em>acordar</em> (to agree) → <em>acordarse</em> (to REMEMBER)<br>  <em>"Acordamos un precio"</em> (We agreed on a price) vs <em>"Me acuerdo de él"</em> (I remember him)<br><br>• <em>parecer</em> (to seem) → <em>parecerse</em> (to LOOK LIKE / resemble)<br>  <em>"Parece bueno"</em> (It seems good) vs <em>"Me parezco a mi madre"</em> (I look like my mother)<br><br>• <em>volver</em> (to return) → <em>volverse</em> (to TURN AROUND or to BECOME)<br>  <em>"Vuelvo a casa"</em> (I return home) vs <em>"Se volvió loco"</em> (He went crazy / became crazy)<br><br>When in doubt: if the meaning matches "do X to oneself," it\'s a true reflexive (me lavo = I wash myself). If the reflexive version has its own distinct meaning, treat it as a different verb to memorize.'
        },
        {
          type: 'mistakes',
          heading: 'Reflexive <em>traps</em>',
          body: 'Where students slip with reflexive verbs:',
          items: [
            'Forgetting the <strong>reflexive pronoun</strong> — wrong. <em>"Levanto a las siete"</em> means "I lift (something) at 7." For "I get up at 7," you need the reflexive: <em>"Me levanto a las siete."</em> Skipping the pronoun changes the meaning.',
            'Using the wrong <strong>pronoun for the person</strong> — the pronoun has to match the subject. <em>"Me lavas las manos"</em> means "you wash my hands" (wrong reflexive). Correct for "you wash your hands" is <em>"Te lavas las manos."</em> Match pronoun to subject.',
            'Putting the pronoun in the <strong>wrong position</strong> — usually it goes BEFORE the conjugated verb: <em>"Me levanto."</em> But with infinitives and gerunds, it can attach to the end: <em>"Voy a levantarme"</em> (I\'m going to get up) OR <em>"Me voy a levantar"</em> — both correct.',
            'Using <strong>"mis manos"</strong> instead of "las manos" — wrong. With reflexives + body parts, use the definite article: <em>"Me lavo las manos"</em> (NOT "me lavo mis manos"). The reflexive already tells whose hands.',
            'Conjugating reflexive verbs as if the pronoun WEREN\'T part of the verb — wrong. <em>"Yo se levanta"</em> is incorrect. The pronoun must match: <em>"Yo me levanto, tú te levantas, él se levanta."</em>',
            'Treating <strong>"ir"</strong> and <strong>"irse"</strong> as interchangeable — they\'re different. <em>"Voy"</em> = I\'m going (somewhere). <em>"Me voy"</em> = I\'m leaving. Same goes for dormir/dormirse, llevar/llevarse, etc.',
            'Forgetting that <strong>some verbs are ONLY reflexive</strong> — like <em>quejarse</em> (to complain), <em>arrepentirse</em> (to regret), <em>atreverse</em> (to dare). These don\'t exist without the pronoun. You can\'t say <em>"yo quejo"</em>; it has to be <em>"yo me quejo."</em>',
            'Translating English <strong>"to wake up"</strong> as just despertar — wrong. To wake up = <em>despertarse</em> (reflexive). To wake someone else up = <em>despertar</em>. <em>"Despierto a mi hermano"</em> (I wake up my brother) vs <em>"Me despierto a las seis"</em> (I wake up at 6).'
          ]
        }
      ],
      quiz: [
        { q: 'Which is the correct "yo" form of "levantarse"?', options: [
          { text: 'levanto', correct: false },
          { text: 'me levanto', correct: true },
          { text: 'se levanto', correct: false }
        ]},
        { q: 'How would you say "My name is Carlos"?', options: [
          { text: 'Mi nombre Carlos.', correct: false },
          { text: 'Me llamo Carlos.', correct: true },
          { text: 'Yo llamo Carlos.', correct: false }
        ]},
        { q: '"Me voy" means…', options: [
          { text: 'I go', correct: false },
          { text: 'I\'m leaving / going away', correct: true },
          { text: 'I myself', correct: false }
        ]}
      ]
    },
    {
      id: 'direct-object-pronouns',
      num: '31',
      level: 'sp1',
      title: '<em>Direct</em> object pronouns',
      tag: 'Pronouns · Object placement',
      summary: 'Lo, la, los, las — the short words that replace "it / him / her / them" so you don\'t have to repeat the noun.',
      sections: [
        {
          heading: 'What a <em>direct object</em> is',
          body: 'A <strong>direct object</strong> is the thing or person that <em>receives</em> the action of the verb. To find it, ask the verb "what?" or "whom?" In <em>"I see the book,"</em> the verb is "see," and what do I see? "The book." So "the book" is the direct object. Same in Spanish: <em>"Veo el libro"</em> → el libro is the direct object.'
        },
        {
          heading: 'Why <em>pronouns</em> exist',
          body: 'Direct object pronouns let you replace a noun you\'ve already mentioned, so you don\'t sound repetitive. English does this with "it / him / her / them." Compare: <em>"Do you see the book? Yes, I see <strong>it</strong>."</em> Without the pronoun, you\'d have to say "Yes, I see the book" every time. Spanish has its own set of these short pronouns.'
        },
        {
          heading: 'The full <em>set</em>',
          body: 'Eight forms total. The first/second person forms (me, te, nos, os) work for people only — they mean "me, you, us, you all." The third person forms (lo, la, los, las) work for any noun — people, animals, things — and have to agree with the noun in gender and number.',
          conjugation: [
            ['me — me', '<span class="ending">me</span>  ("Mi madre me llama" — My mother calls me.)'],
            ['you (informal) — te', '<span class="ending">te</span>  ("Te veo" — I see you.)'],
            ['him / it (masc.) / you (formal masc.)', '<span class="ending">lo</span>  ("Lo conozco" — I know him / I know it.)'],
            ['her / it (fem.) / you (formal fem.)', '<span class="ending">la</span>  ("La compré" — I bought it [feminine].)'],
            ['us — nos', '<span class="ending">nos</span>  ("Nos invitan" — They invite us.)'],
            ['you all (Spain) — os', '<span class="ending">os</span>  ("Os llamo mañana" — I\'ll call you all tomorrow.)'],
            ['them (masc. or mixed) / you all (formal)', '<span class="ending">los</span>  ("Los veo" — I see them / I see you all.)'],
            ['them (fem.) / you all (formal fem.)', '<span class="ending">las</span>  ("Las compro" — I buy them.)']
          ]
        },
        {
          heading: 'Where the pronoun <em>goes</em>',
          body: 'Direct object pronouns are placed <strong>BEFORE the conjugated verb</strong> — the opposite of English. <em>"I see it"</em> → English puts "it" after; Spanish puts it before: <em>"Lo veo."</em> This trips up English speakers constantly, so practice it consciously.',
          examples: [
            { es: '¿Tienes el libro? — Sí, lo tengo.', en: 'Do you have the book? — Yes, I have it.' },
            { es: '¿Conoces a María? — Sí, la conozco.', en: 'Do you know María? — Yes, I know her.' },
            { es: 'Mi padre me llama por teléfono.', en: 'My father calls me on the phone.' },
            { es: 'Las manzanas están ricas. Las como todos los días.', en: 'The apples are tasty. I eat them every day.' }
          ]
        },
        {
          heading: 'Agreement with <em>gender</em> and <em>number</em>',
          body: 'The third-person pronouns (lo / la / los / las) must agree with the noun they\'re replacing. Same gender, same number. If the noun is feminine plural, you need <em>las</em>.',
          examples: [
            { es: 'el libro → lo', en: 'masculine singular thing' },
            { es: 'la mesa → la', en: 'feminine singular thing' },
            { es: 'los libros → los', en: 'masculine plural' },
            { es: 'las mesas → las', en: 'feminine plural' },
            { es: '¿Quieres este libro? — Sí, lo quiero.', en: 'Do you want this book? — Yes, I want it. (book = masc. sing → lo)' },
            { es: '¿Comes las galletas? — Sí, las como.', en: 'Are you eating the cookies? — Yes, I\'m eating them. (cookies = fem. plur → las)' }
          ]
        },
        {
          heading: 'With <em>infinitives</em> — two valid positions',
          body: 'When a sentence has a conjugated verb PLUS an infinitive (like "voy a ___" or "quiero ___"), you have a choice: put the pronoun BEFORE the conjugated verb, OR attach it to the END of the infinitive. Both are correct, both are common.',
          examples: [
            { es: 'Lo voy a comprar. = Voy a comprarlo.', en: 'I\'m going to buy it.' },
            { es: 'Te quiero ver. = Quiero verte.', en: 'I want to see you.' },
            { es: 'Las necesitamos preparar. = Necesitamos prepararlas.', en: 'We need to prepare them.' },
            { es: 'Lo puedo hacer. = Puedo hacerlo.', en: 'I can do it.' }
          ]
        },
        {
          heading: 'The "<em>personal a</em>" disappears',
          body: 'When the direct object is a specific person, Spanish puts an "a" before it: <em>"Veo <strong>a</strong> María."</em> But once you replace María with a pronoun, the "a" disappears: <em>"La veo."</em> Don\'t say "A la veo" — that\'s a common mistake.'
        },
        {
          type: 'mistakes',
          heading: 'Direct object pronoun <em>traps</em>',
          body: 'Where students go wrong with direct object pronouns:',
          items: [
            'Putting the pronoun <strong>AFTER the conjugated verb</strong> — wrong in standard Spanish. <em>"Tengo lo"</em> should be <em>"Lo tengo."</em> With ONE conjugated verb, the pronoun goes BEFORE it.',
            'Using <strong>"lo"</strong> for both masculine and feminine objects — wrong. Lo is masculine; la is feminine. <em>"Veo la casa"</em> → <em>"La veo"</em> (not "Lo veo"). The pronoun matches the gender of what it replaces.',
            'Saying <strong>"A la veo"</strong> for "I see her" — wrong. The personal "a" is for when the direct object is a NAMED PERSON, but it DISAPPEARS when you replace the person with a pronoun. <em>"Veo a María"</em> → <em>"La veo"</em> (NOT "A la veo").',
            'Confusing <strong>"lo" and "le"</strong> — different pronouns. Lo is direct object (the thing acted ON); le is indirect object (the person FOR WHOM). <em>"Lo veo"</em> (I see him/it) vs <em>"Le doy"</em> (I give to him/her). Big difference.',
            'Forgetting <strong>"los/las"</strong> for plural objects — wrong. Plural objects need plural pronouns: <em>"Tengo los libros"</em> → <em>"Los tengo"</em> (not "Lo tengo"). Same for feminine plural: <em>"Veo las películas"</em> → <em>"Las veo."</em>',
            'Forgetting the <strong>accent mark when attaching</strong> — when you attach a pronoun to an infinitive or gerund, you may need to add an accent to preserve the original stress. <em>"Mira"</em> + lo = <em>"míralo"</em> (notice the accent appeared). <em>"Cómpralo"</em>, <em>"diciéndolo,"</em> <em>"haciéndolas."</em>',
            'Trying to attach pronouns to <strong>conjugated verbs</strong> — wrong in modern Spanish (except for affirmative commands). <em>"Tengolo"</em> is not a word. Pronouns ONLY attach to infinitives, gerunds, and affirmative commands. Otherwise, they go BEFORE the conjugated verb.',
            'Translating English <strong>"it"</strong> as "ello" or just dropping it — wrong. "It" as a direct object is <em>lo</em> (for masculine nouns) or <em>la</em> (for feminine nouns). Spanish always picks gender based on the noun being replaced. <em>"¿Tienes el libro? Sí, lo tengo."</em> NOT "ello tengo."'
          ]
        }
      ],
      quiz: [
        { q: 'How would you replace "el libro" in "Tengo el libro"?', options: [
          { text: 'Tengo la.', correct: false },
          { text: 'Lo tengo.', correct: true },
          { text: 'Tengo lo.', correct: false }
        ]},
        { q: 'Which is correct: "I see them" (referring to two female friends)?', options: [
          { text: 'Los veo.', correct: false },
          { text: 'Las veo.', correct: true },
          { text: 'Les veo.', correct: false }
        ]},
        { q: 'Which sentence is INCORRECT?', options: [
          { text: 'Quiero verte.', correct: false },
          { text: 'Te quiero ver.', correct: false },
          { text: 'Quiero te ver.', correct: true }
        ]}
      ]
    },
    {
      id: 'indirect-object-pronouns',
      num: '32',
      level: 'sp1',
      title: '<em>Indirect</em> object pronouns',
      tag: 'Pronouns · Object placement',
      summary: 'Le, les, me, te, nos, os — the pronouns for "to whom" or "for whom" something is done. The bridge to using gustar, dar, decir, and dozens more.',
      sections: [
        {
          heading: 'What an <em>indirect</em> object is',
          body: 'An <strong>indirect object</strong> is the person <em>to whom</em> or <em>for whom</em> the action is done. To find it, ask "to whom?" or "for whom?" In <em>"I give María the book,"</em> the direct object is "the book" (what is given?), and the indirect object is "María" (to whom?). English often hides the indirect object: <em>"I gave her a gift"</em> means "I gave a gift TO her." Spanish keeps it explicit with a small pronoun.'
        },
        {
          heading: 'The <em>six</em> indirect object pronouns',
          body: 'Notice four of these are the same as direct object pronouns (me, te, nos, os). Only the third person changes — instead of lo/la/los/las, you use <strong>le / les</strong>. And critically, <strong>le and les don\'t change for gender</strong>. "Le" can mean "to him, to her, to you (formal)" — context decides.',
          conjugation: [
            ['(to/for) me', '<span class="ending">me</span>'],
            ['(to/for) you (informal)', '<span class="ending">te</span>'],
            ['(to/for) him / her / you (formal)', '<span class="ending">le</span>  ← no gender change'],
            ['(to/for) us', '<span class="ending">nos</span>'],
            ['(to/for) you all (Spain)', '<span class="ending">os</span>'],
            ['(to/for) them / you all (formal)', '<span class="ending">les</span>  ← no gender change']
          ]
        },
        {
          heading: 'Same placement <em>rules</em> as direct objects',
          body: 'Like direct objects, indirect object pronouns go <strong>BEFORE the conjugated verb</strong>, or attached to the end of an infinitive. Same flexibility.',
          examples: [
            { es: 'Le doy el regalo a María.', en: 'I give the gift TO María. (Le = to María)' },
            { es: 'Mi madre me escribe cartas.', en: 'My mother writes me letters.' },
            { es: 'Les hablo a mis padres todos los días.', en: 'I talk to my parents every day.' },
            { es: 'Te voy a comprar un café. = Voy a comprarte un café.', en: 'I\'m going to buy you a coffee.' }
          ]
        },
        {
          heading: 'The <em>redundant</em> "a + person"',
          body: 'Spanish often <strong>doubles up</strong> — using both the pronoun AND "a + person" in the same sentence. This sounds repetitive in English but is normal in Spanish, especially for emphasis or clarity. Since <em>le</em> is ambiguous (could be him, her, or you-formal), Spanish adds "a + the actual person" to clarify.',
          examples: [
            { es: 'Le doy el libro a María.', en: 'I give the book to María. (le AND "a María" — both!)' },
            { es: 'Les escribo a mis abuelos.', en: 'I write to my grandparents.' },
            { es: 'A mí me gusta el café.', en: 'I like coffee. ("a mí" + "me" both used for emphasis)' },
            { es: '¿A ti te interesa la historia?', en: 'Are YOU interested in history? (emphasis)' }
          ]
        },
        {
          heading: 'Verbs that <em>always</em> use indirect objects',
          body: 'A whole family of verbs structures itself around the indirect object. Some you already know — they\'re the "gustar-style" verbs from Lesson 16.',
          conjugation: [
            ['gustar', 'to be pleasing to — <em>Me gusta el chocolate.</em>'],
            ['encantar', 'to delight — <em>A ella le encanta bailar.</em>'],
            ['interesar', 'to be of interest to — <em>Nos interesa la historia.</em>'],
            ['doler (o→ue)', 'to hurt — <em>Le duele la cabeza.</em>'],
            ['molestar', 'to bother — <em>Te molesta el ruido.</em>'],
            ['faltar', 'to be lacking — <em>Me falta dinero.</em>'],
            ['dar', 'to give — <em>Les damos un regalo.</em>'],
            ['decir', 'to say/tell — <em>Le digo la verdad.</em>'],
            ['escribir', 'to write (to) — <em>Te escribo una carta.</em>'],
            ['mandar / enviar', 'to send (to) — <em>Les mando un mensaje.</em>'],
            ['prestar', 'to lend — <em>Me prestas tu lápiz.</em>'],
            ['regalar', 'to give as a gift — <em>Le regalo flores.</em>'],
            ['preguntar', 'to ask — <em>Le pregunto a mi madre.</em>'],
            ['contestar / responder', 'to answer — <em>Le contesto al profesor.</em>'],
            ['enseñar', 'to teach (to) — <em>Nos enseña español.</em>'],
            ['explicar', 'to explain — <em>Te explico la lección.</em>']
          ]
        },
        {
          heading: 'Direct vs. indirect — the <em>quick test</em>',
          body: 'Confused about which pronoun to use? Two questions: <strong>(1)</strong> What is the verb acting on? That\'s the direct object → use lo/la/los/las. <strong>(2)</strong> To whom or for whom? That\'s the indirect object → use le/les. Example: <em>"I give María the book."</em> What do I give? "The book" (direct). To whom? "María" (indirect). So both pronouns exist in this sentence — and that\'s exactly what the next lesson covers.'
        },
        {
          type: 'tip',
          heading: 'The <em>redundant le</em> construction',
          body: 'Here\'s something that looks weird at first: Spanish often uses an indirect object pronoun even when the indirect object is also named in the sentence. This is called "redundant le" — and it\'s not redundant in real Spanish, it\'s required.<br><br><strong>The pattern:</strong> <em>"Le doy el libro a María."</em><br>(Literally: "TO HER I give the book to María.")<br><br>Why double it up? Because Spanish wants to make CLEAR who the indirect object is, and the pronoun anticipates it before the full noun appears. It might sound strange to English ears, but it\'s standard:<br><br>• <em>Le compré flores a mi madre.</em> (I bought flowers for my mother.)<br>• <em>Les digo la verdad a mis amigos.</em> (I tell my friends the truth.)<br>• <em>¿Le mandaste el correo al profesor?</em> (Did you send the email to the teacher?)<br><br>The redundant le/les is especially common with:<br>• <em>dar, decir, comprar, mandar, regalar, enseñar, explicar</em> — verbs of giving, telling, sending<br>• Any time the indirect object is a specific named person<br><br>Skipping the le when the named indirect object is present is grammatically possible but sounds slightly off to native speakers. Use the redundant le and your Spanish will sound more natural.'
        },
        {
          type: 'mistakes',
          heading: 'Indirect object <em>traps</em>',
          body: 'Where students slip with indirect object pronouns:',
          items: [
            'Confusing <strong>"le" with "lo / la"</strong> — different jobs. <em>Le</em> is "to him / to her / to you (formal)" (indirect). <em>Lo / la</em> is "him / her / it" (direct). <em>"Le doy"</em> = "I give to him." <em>"Lo veo"</em> = "I see him." Different sentences, different pronouns.',
            'Forgetting the <strong>redundant le</strong> when an indirect object is named — <em>"Doy el libro a María"</em> sounds incomplete. Native speakers prefer <em>"Le doy el libro a María."</em> The pronoun anticipates the noun.',
            'Putting the pronoun <strong>AFTER the conjugated verb</strong> — wrong. <em>"Hablo le"</em> should be <em>"Le hablo."</em> Indirect object pronouns go BEFORE the conjugated verb.',
            'Using <strong>"les"</strong> when speaking to "ustedes" but forgetting it\'s ALSO plural for "ellos/ellas" — <em>les</em> covers all four (them masculine, them feminine, you formal plural). Context tells you which.',
            'Translating English <strong>"I give him a book"</strong> directly as <em>"Yo doy él un libro"</em> — wrong. English drops the "to," but Spanish needs the pronoun. <em>"Le doy un libro."</em> Adding "a él" for clarity: <em>"Le doy un libro a él."</em>',
            'Forgetting that <strong>verbs like gustar, encantar, doler</strong> always use indirect object pronouns — they\'re a whole family of "backward" verbs. <em>"Me gusta el café"</em> = "Coffee is pleasing TO ME" (indirect object).',
            'Confusing <strong>"a + person"</strong> with the indirect object marker — when you see "a + person" after certain verbs, it can be either: <em>"Veo a María"</em> = direct object (personal a). <em>"Doy el libro a María"</em> = indirect object. The verb tells you which. Veo (see) acts ON Maria → direct. Doy (give) gives the book TO María → indirect.'
          ]
        }
      ],
      quiz: [
        { q: 'Which pronoun would replace "a mis hermanos" in "Hablo a mis hermanos"?', options: [
          { text: 'los', correct: false },
          { text: 'les', correct: true },
          { text: 'las', correct: false }
        ]},
        { q: '"Le doy el libro" is ambiguous because "le" could mean…', options: [
          { text: 'only "to him"', correct: false },
          { text: 'to him, to her, OR to you (formal)', correct: true },
          { text: 'only "to her"', correct: false }
        ]},
        { q: 'Why does Spanish often say "Le doy el libro A MARÍA"?', options: [
          { text: 'It\'s a grammatical error to repeat', correct: false },
          { text: 'To clarify whom "le" refers to', correct: true },
          { text: 'Because "le" is just a sound, not a real word', correct: false }
        ]}
      ]
    },
    {
      id: 'double-object-pronouns',
      num: '33',
      level: 'sp1',
      title: '<em>Double</em> object pronouns',
      tag: 'Pronouns · Object placement',
      summary: 'When both indirect AND direct pronouns show up together — the moment Spanish starts to feel really compact. Plus the famous "le → se" rule.',
      sections: [
        {
          heading: 'When <em>both</em> pronouns appear',
          body: 'In real Spanish, sentences often have BOTH a direct and an indirect object. <em>"I give it to her."</em> — "it" = direct, "to her" = indirect. Spanish handles this by stacking both pronouns together. The rule is simple: <strong>indirect comes first, then direct, then the verb.</strong>'
        },
        {
          heading: 'The basic <em>order</em>: I.D.V.',
          body: 'A memory trick: <strong>I.D.V.</strong> — Indirect, Direct, Verb. Always in that order.',
          conjugation: [
            ['I give it to you', '<span class="ending">Te lo doy.</span>  (te = indirect / lo = direct / doy = verb)'],
            ['She tells it to me', '<span class="ending">Me lo dice.</span>'],
            ['We send them to you all', '<span class="ending">Os los mandamos.</span>  (Spain)'],
            ['They write them to us', '<span class="ending">Nos las escriben.</span>'],
            ['Mom buys it for me', '<span class="ending">Mamá me lo compra.</span>']
          ]
        },
        {
          heading: 'The big <em>rule</em>: le + lo = se lo',
          body: 'Here\'s where it gets tricky. When BOTH pronouns start with "L" (le + lo, le + la, le + los, le + las, les + lo, etc.), Spanish hates the sound of "le lo." So <strong>le and les change to "se"</strong> right before another L-pronoun. The meaning stays exactly the same — only the spelling and sound change.',
          conjugation: [
            ['le lo → <span class="ending">se lo</span>', '"I give it to him" — Se lo doy.  (NOT "le lo doy")'],
            ['le la → <span class="ending">se la</span>', '"I send it to her" — Se la mando.'],
            ['le los → <span class="ending">se los</span>', '"I give them to you (formal)" — Se los doy.'],
            ['le las → <span class="ending">se las</span>', '"I write them to him" — Se las escribo.'],
            ['les lo → <span class="ending">se lo</span>', '"I give it to them" — Se lo doy.'],
            ['les los → <span class="ending">se los</span>', '"I send them to them" — Se los mando.']
          ]
        },
        {
          heading: 'Why the <em>"a + person"</em> matters even more here',
          body: 'Because <em>se</em> is now even more ambiguous (it could mean "to him, to her, to you, to them, to you all" — five possibilities!), Spanish very often clarifies with "a + person."',
          examples: [
            { es: 'Se lo doy a María.', en: 'I give it to María. (the "se" + "a María" together clarify)' },
            { es: 'Se las escribimos a los profesores.', en: 'We write them (e.g., emails) to the teachers.' },
            { es: 'Se lo pregunto a usted.', en: 'I ask it to you (formal).' }
          ]
        },
        {
          heading: 'Placement: still <em>BEFORE</em> the verb',
          body: 'The pair sticks together. Either both pronouns BEFORE the conjugated verb, OR both attached to the end of an infinitive/gerund. Never separated.',
          examples: [
            { es: 'Te lo voy a decir. = Voy a decírtelo.', en: 'I\'m going to tell it to you.' },
            { es: 'Se las quiero dar. = Quiero dárselas.', en: 'I want to give them to her.' },
            { es: 'Nos lo está explicando. = Está explicándonoslo.', en: 'He\'s explaining it to us.' }
          ]
        },
        {
          heading: 'About those <em>accent marks</em>',
          body: 'Notice the examples above: when you attach pronouns to the END of an infinitive or gerund, the word gains syllables — which often shifts its natural stress. Spanish solves this by adding a written accent so the original stressed syllable still gets the emphasis. <em>"decir"</em> alone has its stress on "-cir" (Rule 2). Attach <em>"-te-lo"</em> and now you have <em>"decirtelo"</em> — without an accent, the stress would shift. So write it as <strong>"decírtelo"</strong> — the accent saves the original pronunciation.',
          examples: [
            { es: 'decir → decírtelo', en: 'to tell it to you (accent on í)' },
            { es: 'dar → dárselas', en: 'to give them to him/her (accent on á)' },
            { es: 'comprar → comprármelo', en: 'to buy it for me (accent on á)' },
            { es: 'explicando → explicándonoslo', en: 'explaining it to us (accent on á)' }
          ]
        },
        {
          heading: 'Worked <em>example</em>',
          body: 'Let\'s build up a complex sentence step by step. Start with: <em>"I give the book to María."</em><br><br>(1) Full form: <em>Doy <strong>el libro</strong> a María.</em><br>(2) Replace "el libro" with direct object pronoun: <em>Lo doy a María.</em><br>(3) Replace "a María" with indirect object pronoun (le): <em>Le lo doy.</em><br>(4) But "le lo" → "se lo": <em><strong>Se lo doy.</strong></em><br>(5) Optional clarifier: <em>Se lo doy a María.</em><br><br>Final answer: <em>Se lo doy.</em> Three short words. That compact power is why Spanish speakers can sound so efficient.'
        },
        {
          heading: 'Real <em>practice</em> sentences',
          body: '',
          examples: [
            { es: 'Mi tía siempre me los manda.', en: 'My aunt always sends them to me.' },
            { es: '¿Me lo compras?', en: 'Will you buy it for me?' },
            { es: 'Se la presto.', en: 'I lend it to him/her/you/them. (note: 5 possibilities!)' },
            { es: 'Mi padre nos lo explica.', en: 'My father explains it to us.' },
            { es: 'Quiero regalárselas a mi madre.', en: 'I want to give them to my mother (as a gift). (accent on regalár)' }
          ]
        },
        {
          type: 'mistakes',
          heading: 'Double object <em>traps</em>',
          body: 'Double objects are the hardest part of Spanish object pronouns. Here are the most common errors:',
          items: [
            'Forgetting the <strong>le → se</strong> rule — wrong. When le or les is followed by lo/la/los/las, the indirect pronoun BECOMES <em>se</em>. <em>"Le lo doy"</em> is never correct; should be <em>"Se lo doy."</em> Same for les: <em>"Se la mando."</em>',
            'Putting the pronouns in the <strong>wrong order</strong> — wrong. The order is always: <strong>indirect, then direct, then verb</strong>. So "me lo das" (you give it to me), NOT "lo me das." Memorize: people pronoun before thing pronoun.',
            'Forgetting the <strong>accent mark when attaching to infinitives or commands</strong> — wrong. When you attach BOTH pronouns to the end of a verb, you usually need an accent to preserve the original stress. <em>"Dar"</em> + se + lo = <em>"dárselo"</em> (note the accent on dár). <em>"Cómpramelo,"</em> <em>"diciéndoselo."</em>',
            'Translating English <strong>"give it to me"</strong> as <em>"da lo a mí"</em> — wrong. English has the pronouns floating around; Spanish stacks them: <em>"Dámelo"</em> (give-to-me-it, all attached). Or with negative command: <em>"No me lo des"</em> (don\'t give it to me).',
            'Trying to make <strong>"se lo"</strong> mean "to himself" — be careful. <em>Se lo</em> usually means "(to someone else) it" because the original le BECAME se. To mean "to himself / to herself," that\'s a reflexive use of se. Context decides: <em>"Se lo dice"</em> could mean "She tells it to him" (le → se) OR "She tells it to herself" (true reflexive). Native speakers know from context.',
            'Forgetting <strong>"a + clarification"</strong> when "se lo" is ambiguous — because <em>se lo</em> can mean "to him/her/you/them/yourself," Spanish often adds <em>"a él / a ella / a usted / a ellos"</em> to clarify. <em>"Se lo doy a María"</em> (I give it to María). Use this when context isn\'t clear.',
            'Stacking <strong>3 pronouns or more</strong> — Spanish stops at 2 object pronouns. If you need to add more clarification, use <em>"a él / a ella / a usted"</em> phrases. Don\'t stack three pronouns; it doesn\'t happen.',
            'Splitting the pronouns from the verb — wrong. <em>"Me lo siempre dice"</em> is incorrect. Pronouns hug each other and the verb tightly: <em>"Siempre me lo dice"</em> (or attached: <em>"siempre quiere decírmelo"</em>). Nothing goes between them.'
          ]
        }
      ],
      quiz: [
        { q: 'In Spanish, when both pronouns appear, the order is:', options: [
          { text: 'Direct, then indirect, then verb', correct: false },
          { text: 'Indirect, then direct, then verb', correct: true },
          { text: 'Either order works', correct: false }
        ]},
        { q: '"Le lo doy" should actually be written as:', options: [
          { text: 'Le lo doy. (it\'s fine as-is)', correct: false },
          { text: 'Se lo doy.', correct: true },
          { text: 'Lo le doy.', correct: false }
        ]},
        { q: 'How would you say "I want to tell it to you" with the pronouns attached to the infinitive?', options: [
          { text: 'Quiero decirtelo.', correct: false },
          { text: 'Quiero decírtelo.', correct: true },
          { text: 'Quiero tedicirlo.', correct: false }
        ]}
      ]
    },

    // ============================================================================
    // PRETERITE LESSONS (34-39) — Spanish 2
    // ============================================================================

    // ---------- LESSON 34: Regular preterite ----------
    {
      id: 'preterite-regular',
      number: '34',
      level: 'sp2',
      title: 'The <em>preterite</em>: regular forms',
      summary: 'The preterite is the most common past tense — it tells what happened, what someone did, what occurred at a specific moment.',
      sections: [
        {
          heading: 'What the <em>preterite</em> does',
          body: 'The preterite (<em>el pretérito</em>) tells about completed past actions — things that happened, started, ended, or occurred at a specific moment. It\'s the most common past tense in Spanish.<br><br>Compare:<br>• Present: <em>Como tacos.</em> → I eat tacos.<br>• Preterite: <em>Comí tacos ayer.</em> → I ate tacos yesterday.<br><br>If it happened and finished, you use the preterite. Time markers like <em>ayer</em> (yesterday), <em>anoche</em> (last night), <em>el año pasado</em> (last year), and <em>una vez</em> (one time) usually signal the preterite.'
        },
        {
          heading: '-AR <em>endings</em>',
          body: 'Take an -AR verb like <em>hablar</em>. Drop the -AR and add these endings:',
          conjugation: [
            ['yo', 'habl<strong>é</strong>'],
            ['tú', 'habl<strong>aste</strong>'],
            ['él / ella / usted', 'habl<strong>ó</strong>'],
            ['nosotros', 'habl<strong>amos</strong>'],
            ['vosotros', 'habl<strong>asteis</strong>'],
            ['ellos / ellas / ustedes', 'habl<strong>aron</strong>']
          ]
        },
        {
          heading: '-ER and -IR <em>endings</em>',
          body: 'These two share the SAME preterite endings. Take a verb like <em>comer</em> or <em>vivir</em>, drop the ending, and add:',
          conjugation: [
            ['yo', 'com<strong>í</strong> / viv<strong>í</strong>'],
            ['tú', 'com<strong>iste</strong> / viv<strong>iste</strong>'],
            ['él / ella / usted', 'com<strong>ió</strong> / viv<strong>ió</strong>'],
            ['nosotros', 'com<strong>imos</strong> / viv<strong>imos</strong>'],
            ['vosotros', 'com<strong>isteis</strong> / viv<strong>isteis</strong>'],
            ['ellos / ellas / ustedes', 'com<strong>ieron</strong> / viv<strong>ieron</strong>']
          ]
        },
        {
          heading: 'The "nosotros <em>trap</em>"',
          body: 'Notice something important: for -AR and -IR verbs, the <em>nosotros</em> form looks identical to the present tense.<br><br>• <em>Hablamos español.</em> = "We speak Spanish" OR "We spoke Spanish."<br>• <em>Vivimos en Lima.</em> = "We live in Lima" OR "We lived in Lima."<br><br>Context tells you which. A time word like <em>ayer</em> or <em>el año pasado</em> makes it clearly preterite.'
        },
        {
          heading: 'Examples in <em>action</em>',
          body: '',
          examples: [
            { es: 'Ayer estudié para el examen.', en: 'Yesterday I studied for the exam.' },
            { es: '¿Hablaste con tu madre anoche?', en: 'Did you speak with your mother last night?' },
            { es: 'Comimos pizza el viernes.', en: 'We ate pizza on Friday.' },
            { es: 'Mis padres viajaron a México.', en: 'My parents traveled to Mexico.' },
            { es: 'Mi hermana abrió todos sus regalos.', en: 'My sister opened all her gifts.' }
          ]
        },
        {
          type: 'mistakes',
          heading: 'Regular preterite <em>traps</em>',
          body: 'The preterite is mostly regular, but these mistakes are common:',
          items: [
            'Forgetting the <strong>accent on yo and él/ella forms</strong> — wrong. <em>"Yo hable"</em> should be <em>"Yo hablé."</em> <em>"Él hablo"</em> should be <em>"Él habló."</em> Without the accents, you have the present-tense yo form or the wrong meaning entirely.',
            'Adding an accent to <strong>monosyllabic preterite forms</strong> — wrong. <em>"Vi, fui, fue, di, dio"</em> are all one syllable and take NO accent. Don\'t write <em>"vió"</em> or <em>"dió."</em>',
            'Confusing <strong>-AR present "nosotros"</strong> with preterite — both are identical. <em>"Hablamos"</em> = we speak OR we spoke. Context decides. Same with -IR: <em>"vivimos"</em> = we live OR we lived.',
            'Using preterite for <strong>ongoing past states</strong> — wrong. <em>"Yo fui pequeño"</em> means "I was small for a moment" (weird). For "I was small (as a child)," use imperfect: <em>"Yo era pequeño."</em>',
            'Mixing up <strong>preterite endings between -ER and -IR</strong> verbs — actually they\'re IDENTICAL in the preterite. Both use -í, -iste, -ió, -imos, -isteis, -ieron. This is one of the easier parts of preterite.',
            'Putting an accent on <strong>nosotros forms</strong> — wrong. <em>"Hablámos, comímos, vivímos"</em> are all wrong. The yo and él/ella forms have accents; nosotros doesn\'t.'
          ]
        }
      ],
      quiz: [
        { q: 'Yo _____ (hablar) con mi profesora ayer.', options: [
          { text: 'hablé', correct: true },
          { text: 'hablaba', correct: false },
          { text: 'hablo', correct: false }
        ]},
        { q: 'Nosotros _____ (comer) tacos anoche.', options: [
          { text: 'comeremos', correct: false },
          { text: 'comimos', correct: true },
          { text: 'comemos', correct: false }
        ]},
        { q: 'Mis amigos _____ (vivir) en Madrid el año pasado.', options: [
          { text: 'vivían', correct: false },
          { text: 'vivieron', correct: true },
          { text: 'vivirán', correct: false }
        ]}
      ]
    },

    // ---------- LESSON 35: Orthographic changers (-car/-gar/-zar) ----------
    {
      id: 'preterite-cargarzar',
      number: '35',
      level: 'sp2',
      title: 'Preterite: <em>-car / -gar / -zar</em> spelling changes',
      summary: 'Verbs ending in -car, -gar, and -zar change their spelling in the YO form of the preterite — to preserve their original sounds.',
      sections: [
        {
          heading: 'Why the <em>spelling</em> changes',
          body: 'In Spanish, the letter <em>c</em> before <em>e</em> or <em>i</em> sounds like an English "s" (or in Spain, "th"). But before <em>a/o/u</em>, it sounds like a hard "k." Same idea for <em>g</em>: hard before a/o/u, soft (like a Spanish "j") before e/i.<br><br>So if a verb ends in -car, -gar, or -zar, what happens in the yo form of the preterite (which ends in -é)? The vowel changes from a to é, and that would change how the consonant sounds — unless we change the spelling to preserve the original sound. Only the YO form changes. Every other form is regular.'
        },
        {
          heading: '-CAR <em>verbs</em>: c → qu',
          body: 'Verbs ending in -car change to -qué in the yo form. The "qu" preserves the hard "k" sound.<br><br><em>buscar</em> (to look for):',
          conjugation: [
            ['yo', 'bus<strong>qué</strong>'],
            ['tú', 'buscaste'],
            ['él / ella', 'buscó'],
            ['nosotros', 'buscamos'],
            ['vosotros', 'buscasteis'],
            ['ellos', 'buscaron']
          ]
        },
        {
          heading: 'Other -CAR <em>verbs</em>',
          body: 'Same pattern: <em>sacar → saqué</em>, <em>tocar → toqué</em>, <em>practicar → practiqué</em>, <em>explicar → expliqué</em>, <em>buscar → busqué</em>.',
          examples: [
            { es: 'Busqué mi libro toda la mañana.', en: 'I looked for my book all morning.' },
            { es: 'Saqué muchas fotos en el viaje.', en: 'I took a lot of photos on the trip.' },
            { es: 'Toqué la guitarra en la fiesta.', en: 'I played the guitar at the party.' }
          ]
        },
        {
          heading: '-GAR <em>verbs</em>: g → gu',
          body: 'Verbs ending in -gar change to -gué in the yo form. The "u" is silent — it\'s there only to keep the "g" sounding hard.<br><br><em>llegar</em> (to arrive):',
          conjugation: [
            ['yo', 'lle<strong>gué</strong>'],
            ['tú', 'llegaste'],
            ['él / ella', 'llegó'],
            ['nosotros', 'llegamos'],
            ['vosotros', 'llegasteis'],
            ['ellos', 'llegaron']
          ]
        },
        {
          heading: 'Other -GAR <em>verbs</em>',
          body: '<em>pagar → pagué</em>, <em>llegar → llegué</em>, <em>jugar → jugué</em>, <em>apagar → apagué</em>, <em>entregar → entregué</em>.',
          examples: [
            { es: 'Llegué a casa muy tarde.', en: 'I arrived home very late.' },
            { es: 'Pagué la cuenta en el restaurante.', en: 'I paid the bill at the restaurant.' },
            { es: 'Jugué al fútbol con mis amigos.', en: 'I played soccer with my friends.' }
          ]
        },
        {
          heading: '-ZAR <em>verbs</em>: z → c',
          body: 'Verbs ending in -zar change to -cé in the yo form. Spanish almost never writes "ze" — it uses "ce" instead.<br><br><em>empezar</em> (to begin):',
          conjugation: [
            ['yo', 'empe<strong>cé</strong>'],
            ['tú', 'empezaste'],
            ['él / ella', 'empezó'],
            ['nosotros', 'empezamos'],
            ['vosotros', 'empezasteis'],
            ['ellos', 'empezaron']
          ]
        },
        {
          heading: 'Other -ZAR <em>verbs</em>',
          body: '<em>empezar → empecé</em>, <em>comenzar → comencé</em>, <em>almorzar → almorcé</em>, <em>cruzar → crucé</em>, <em>abrazar → abracé</em>.',
          examples: [
            { es: 'Empecé a estudiar a las ocho.', en: 'I began to study at eight.' },
            { es: 'Almorcé con mi familia el domingo.', en: 'I had lunch with my family on Sunday.' },
            { es: 'Crucé la calle con cuidado.', en: 'I crossed the street carefully.' }
          ]
        },
        {
          type: 'mistakes',
          heading: 'Spelling-change <em>traps</em>',
          body: 'These spelling shifts are predictable but easy to forget:',
          items: [
            'Writing <strong>"buscé, llegé, empezé"</strong> — all wrong. The whole point of these patterns is to change the spelling to preserve the original sound. <em>Busqué, llegué, empecé.</em>',
            'Applying the change to <strong>every form</strong> — wrong. Only the <strong>yo form</strong> changes. Tú, él/ella, nosotros, vosotros, ellos all keep the regular spelling: <em>buscaste, buscó, buscamos, buscasteis, buscaron.</em>',
            'Forgetting that <strong>jugar is -GAR</strong> — yes, jugar follows the -gar rule. The yo form is <em>"jugué"</em> (NOT "jugé"). Easy to forget because jugar is also a stem-changer.',
            'Adding accents to the <strong>changed forms</strong> — be careful. <em>"Busqué"</em> needs the accent because it\'s yo preterite of an -AR verb. The accent is on the é, not on the consonant. <em>"Llegué, empecé"</em> — same accent rule.',
            'Confusing the <strong>spelling rules</strong> with stem-changing — these are different. Almorzar is BOTH a stem-changer in present (almuerzo) AND has the -zar spelling change in preterite (almorcé). The two rules don\'t overlap; they operate at different times.',
            'Forgetting the <strong>spelling change shows up in subjunctive too</strong> — same logic applies: <em>busque, busques, busque, busquemos, busquéis, busquen.</em> Save this for later; just know it\'s coming.'
          ]
        }
      ],
      quiz: [
        { q: 'Yo _____ (buscar) las llaves por toda la casa.', options: [
          { text: 'buscé', correct: false },
          { text: 'busqué', correct: true },
          { text: 'buscó', correct: false }
        ]},
        { q: 'Yo _____ (llegar) tarde a la clase.', options: [
          { text: 'llegé', correct: false },
          { text: 'llegué', correct: true },
          { text: 'llegó', correct: false }
        ]},
        { q: 'Yo _____ (empezar) el proyecto ayer.', options: [
          { text: 'empezé', correct: false },
          { text: 'empezó', correct: false },
          { text: 'empecé', correct: true }
        ]}
      ]
    },

    // ---------- LESSON 36: Leer-pattern verbs (i→y + accents) ----------
    {
      id: 'preterite-leer-pattern',
      number: '36',
      level: 'sp2',
      title: 'Preterite: <em>leer</em>, <em>oír</em>, <em>huir</em> &amp; friends',
      summary: 'Some verbs change i → y in the 3rd person preterite. Most also need accent marks on the í. -uir verbs follow a related pattern with no accents.',
      sections: [
        {
          heading: 'Two interacting <em>rules</em>',
          body: 'A small but important family of verbs has TWO things happening in the preterite:<br><br><strong>Rule 1:</strong> The unstressed <em>i</em> changes to <em>y</em> in the 3rd-person singular (<em>él/ella</em>) and plural (<em>ellos</em>). An <em>i</em> sandwiched between two vowels can\'t survive — it morphs into <em>y</em>.<br><br><strong>Rule 2:</strong> In all other forms, the <em>í</em> takes an accent mark. This is to break a diphthong — to mark <em>í</em> as its own stressed syllable, not absorbed into the vowel next to it.<br><br>These two rules work together. Let\'s see them.'
        },
        {
          heading: '<em>Leer</em> (to read)',
          body: 'Watch where the y appears and where the accents go:',
          conjugation: [
            ['yo', 'le<strong>í</strong>'],
            ['tú', 'le<strong>í</strong>ste'],
            ['él / ella', 'le<strong>y</strong>ó'],
            ['nosotros', 'le<strong>í</strong>mos'],
            ['vosotros', 'le<strong>í</strong>steis'],
            ['ellos', 'le<strong>y</strong>eron']
          ]
        },
        {
          heading: 'Other verbs that follow <em>leer</em>',
          body: 'Same exact pattern (i→y in 3rd person, accents on í elsewhere):<br><br>• <em>creer</em> (to believe): creí, creíste, <strong>creyó</strong>, creímos, creísteis, <strong>creyeron</strong><br>• <em>caer</em> (to fall): caí, caíste, <strong>cayó</strong>, caímos, caísteis, <strong>cayeron</strong><br>• <em>oír</em> (to hear): oí, oíste, <strong>oyó</strong>, oímos, oísteis, <strong>oyeron</strong>',
          examples: [
            { es: 'Leí una novela peruana este verano.', en: 'I read a Peruvian novel this summer.' },
            { es: 'Ella creyó la historia inmediatamente.', en: 'She believed the story immediately.' },
            { es: 'Mis amigos oyeron un ruido extraño.', en: 'My friends heard a strange noise.' }
          ]
        },
        {
          heading: 'The <em>-uir</em> verbs: same i→y, but NO accents',
          body: 'Verbs ending in <em>-uir</em> (huir, construir, destruir, incluir, contribuir) ALSO change i→y in the 3rd person — but they do <strong>not</strong> take the accent marks on the í in other forms.<br><br>Why? The <em>ui</em> combination is a natural diphthong (a single syllable), so the <em>i</em> doesn\'t need an accent to mark it as separate.<br><br><em>huir</em> (to flee):',
          conjugation: [
            ['yo', 'hui'],
            ['tú', 'huiste'],
            ['él / ella', 'hu<strong>y</strong>ó'],
            ['nosotros', 'huimos'],
            ['vosotros', 'huisteis'],
            ['ellos', 'hu<strong>y</strong>eron']
          ]
        },
        {
          heading: 'Other <em>-uir</em> verbs',
          body: 'Same pattern as huir (i→y in 3rd person, no accents):<br><br>• <em>construir</em> (to build): construí, construiste, <strong>construyó</strong>, construimos, construisteis, <strong>construyeron</strong><br>• <em>destruir</em> (to destroy): destruí, destruiste, <strong>destruyó</strong>, destruimos, destruisteis, <strong>destruyeron</strong><br>• <em>incluir</em> (to include): incluí, incluiste, <strong>incluyó</strong>, incluimos, incluisteis, <strong>incluyeron</strong><br><br>Almost any verb ending in -uir follows this same pattern.',
          examples: [
            { es: 'Los incas construyeron Machu Picchu hace siglos.', en: 'The Incas built Machu Picchu centuries ago.' },
            { es: 'El terremoto destruyó muchas casas.', en: 'The earthquake destroyed many houses.' },
            { es: 'El profesor incluyó tres preguntas extra.', en: 'The teacher included three extra questions.' }
          ]
        }
      ],
      quiz: [
        { q: 'Mi hermana _____ (leer) tres libros en vacaciones.', options: [
          { text: 'leió', correct: false },
          { text: 'leyó', correct: true },
          { text: 'leio', correct: false }
        ]},
        { q: 'Los obreros _____ (construir) la casa en seis meses.', options: [
          { text: 'construieron', correct: false },
          { text: 'construyeron', correct: true },
          { text: 'construían', correct: false }
        ]},
        { q: 'Yo _____ (oír) un ruido raro anoche. (Note the accent.)', options: [
          { text: 'oi', correct: false },
          { text: 'oí', correct: true },
          { text: 'oyé', correct: false }
        ]}
      ]
    },

    // ---------- LESSON 37: Ir / dar / ser / ver ----------
    {
      id: 'preterite-ir-dar-ser-ver',
      number: '37',
      level: 'sp2',
      title: 'Preterite: <em>ir</em>, <em>dar</em>, <em>ser</em>, <em>ver</em>',
      summary: 'Four common verbs with unusual preterite forms. Ir and ser are identical. Dar and ver share the same endings.',
      sections: [
        {
          heading: 'Four <em>oddballs</em> together',
          body: 'These four verbs (<em>ir, dar, ser, ver</em>) don\'t follow regular preterite patterns. But there\'s order in the chaos:<br><br>• <em>Ir</em> and <em>ser</em> have <strong>identical preterite forms</strong>.<br>• <em>Dar</em> and <em>ver</em> use the <strong>-ER/-IR endings but without any accent marks</strong>.<br><br>Knowing the pairings makes it easier to memorize all four.'
        },
        {
          heading: '<em>Ir</em> and <em>ser</em>: identical forms',
          body: 'Yes, really — context tells you which verb is meant.',
          conjugation: [
            ['yo', 'fui'],
            ['tú', 'fuiste'],
            ['él / ella', 'fue'],
            ['nosotros', 'fuimos'],
            ['vosotros', 'fuisteis'],
            ['ellos', 'fueron']
          ]
        },
        {
          heading: 'Telling <em>ir</em> from <em>ser</em>',
          body: 'Context does the work. <em>Ir</em> is followed by <strong>a + place</strong>. <em>Ser</em> just describes.<br><br>• <em>Fui al mercado.</em> → I went to the market. (ir)<br>• <em>Fui estudiante allí.</em> → I was a student there. (ser)<br>• <em>Fueron muy amables.</em> → They were very kind. (ser)<br>• <em>Fueron a Madrid.</em> → They went to Madrid. (ir)'
        },
        {
          heading: '<em>Dar</em> (to give)',
          body: 'Uses -ER/-IR endings, but with NO accent marks. Notice <em>di, dio</em> instead of <em>dí, dió</em>.',
          conjugation: [
            ['yo', 'di'],
            ['tú', 'diste'],
            ['él / ella', 'dio'],
            ['nosotros', 'dimos'],
            ['vosotros', 'disteis'],
            ['ellos', 'dieron']
          ]
        },
        {
          heading: '<em>Ver</em> (to see)',
          body: 'Same pattern as <em>dar</em> — -ER endings without accents.',
          conjugation: [
            ['yo', 'vi'],
            ['tú', 'viste'],
            ['él / ella', 'vio'],
            ['nosotros', 'vimos'],
            ['vosotros', 'visteis'],
            ['ellos', 'vieron']
          ]
        },
        {
          heading: 'Examples in <em>action</em>',
          body: '',
          examples: [
            { es: 'Mi familia fue al Perú el año pasado.', en: 'My family went to Peru last year. (ir)' },
            { es: 'El concierto fue increíble.', en: 'The concert was incredible. (ser)' },
            { es: 'Mis padres me dieron un regalo bonito.', en: 'My parents gave me a nice gift. (dar)' },
            { es: 'Vimos una película muy buena anoche.', en: 'We saw a very good movie last night. (ver)' },
            { es: 'Diste tu opinión claramente.', en: 'You gave your opinion clearly. (dar)' }
          ]
        },
        {
          type: 'mistakes',
          heading: 'Ir / dar / ser / ver preterite <em>traps</em>',
          body: 'These four irregulars are common but tricky:',
          items: [
            'Adding an accent to <strong>any of these forms</strong> — wrong. <em>"Fuí, díste, vió, díó"</em> are all wrong. These verbs take NO accent marks in the preterite. <em>"Fui, diste, vio, dio."</em>',
            'Saying <strong>"fuemos"</strong> for "we went/we were" — wrong. The nosotros form is <em>"fuimos."</em> (Same form for ir and ser.) Easy to mess up because of the e in fue.',
            'Spelling <strong>"vimos"</strong> as "vímos" or "veímos" — wrong. The ver preterite is short and clean: <em>vi, viste, vio, vimos, visteis, vieron.</em> No accent, no extra e.',
            'Mixing up <strong>imperfect "iba"</strong> with preterite "fui" — these are different tenses with different meanings. <em>"Iba al cine"</em> = "I used to go / was going to the movies" (imperfect). <em>"Fui al cine"</em> = "I went to the movies" (one completed event). Don\'t treat them as interchangeable.',
            'Trying to distinguish <strong>ir from ser by the verb form</strong> — impossible. They\'re identical in the preterite. Context decides: <em>"Fui a México"</em> = ir (with "a + place"). <em>"Fui presidente del club"</em> = ser (no place, predicate noun).',
            'Using <strong>"di"</strong> for dar in places where you should use <em>"hice"</em> — different verbs. <em>"Di un regalo"</em> = I gave a gift (dar). <em>"Hice un regalo"</em> = I made a gift (hacer). Same in past, different verbs. Pick by meaning.'
          ]
        }
      ],
      quiz: [
        { q: 'El año pasado, mis amigos y yo _____ a Madrid.', options: [
          { text: 'fuimos', correct: true },
          { text: 'fuemos', correct: false },
          { text: 'íbamos', correct: false }
        ]},
        { q: 'Mi abuela me _____ (dar) cien dólares por mi cumpleaños.', options: [
          { text: 'dio', correct: true },
          { text: 'dió', correct: false },
          { text: 'daba', correct: false }
        ]},
        { q: 'Anoche, ¿_____ (tú, ver) la película nueva?', options: [
          { text: 'viste', correct: true },
          { text: 'vistes', correct: false },
          { text: 'veías', correct: false }
        ]}
      ]
    },

    // ---------- LESSON 38: Stem-changing -IR verbs ----------
    {
      id: 'preterite-stem-ir',
      number: '38',
      level: 'sp2',
      title: 'Preterite: stem-changing <em>-IR</em> verbs',
      summary: 'Only -IR verbs stem-change in the preterite. The change happens only in the 3rd-person forms (él, ellos): e→i or o→u.',
      sections: [
        {
          heading: 'The <em>rule</em>',
          body: '<strong>Only -IR verbs</strong> stem-change in the preterite. <strong>-AR and -ER verbs do not.</strong><br><br>So <em>cerrar</em> (e→ie in present) is REGULAR in the preterite: cerré, cerraste, cerró… No stem change.<br><br>But <em>pedir</em> (e→i in present) DOES stem-change in the preterite — only in the 3rd-person forms.<br><br>The change is:<br>• <strong>e → i</strong> for verbs like pedir, servir, repetir, sentir<br>• <strong>o → u</strong> for dormir and morir<br><br>And it ONLY happens to <em>él/ella/usted</em> and <em>ellos/ellas/ustedes</em>. Other forms are regular.'
        },
        {
          heading: '<em>Pedir</em> (e → i)',
          body: '',
          conjugation: [
            ['yo', 'pedí'],
            ['tú', 'pediste'],
            ['él / ella', 'p<strong>i</strong>dió'],
            ['nosotros', 'pedimos'],
            ['vosotros', 'pedisteis'],
            ['ellos', 'p<strong>i</strong>dieron']
          ]
        },
        {
          heading: 'Other e→i <em>-IR</em> verbs',
          body: '• <em>servir</em> (to serve): serví, serviste, <strong>sirvió</strong>, servimos, servisteis, <strong>sirvieron</strong><br>• <em>repetir</em> (to repeat): repetí, repetiste, <strong>repitió</strong>, repetimos, repetisteis, <strong>repitieron</strong><br>• <em>sentir</em> (to feel): sentí, sentiste, <strong>sintió</strong>, sentimos, sentisteis, <strong>sintieron</strong><br>• <em>vestirse</em> (to get dressed): me vestí, te vestiste, <strong>se vistió</strong>, nos vestimos, os vestisteis, <strong>se vistieron</strong>',
          examples: [
            { es: 'El mesero nos sirvió la comida rápido.', en: 'The waiter served us the food quickly.' },
            { es: 'Mi hermana se vistió para la fiesta.', en: 'My sister got dressed for the party.' },
            { es: 'Los estudiantes repitieron la frase.', en: 'The students repeated the sentence.' }
          ]
        },
        {
          heading: '<em>Dormir</em> (o → u)',
          body: 'For <em>dormir</em> and <em>morir</em>, the o changes to u in the 3rd-person forms.',
          conjugation: [
            ['yo', 'dormí'],
            ['tú', 'dormiste'],
            ['él / ella', 'd<strong>u</strong>rmió'],
            ['nosotros', 'dormimos'],
            ['vosotros', 'dormisteis'],
            ['ellos', 'd<strong>u</strong>rmieron']
          ]
        },
        {
          heading: '<em>Morir</em> (o → u)',
          body: 'Same exact pattern as dormir.',
          examples: [
            { es: 'Mi abuelo durmió diez horas.', en: 'My grandfather slept ten hours.' },
            { es: 'Los soldados murieron en la batalla.', en: 'The soldiers died in the battle.' },
            { es: 'Nosotros dormimos en un hotel pequeño.', en: 'We slept in a small hotel.' }
          ]
        },
        {
          heading: '<em>Reír</em> and <em>sonreír</em>: the double-i drop',
          body: '<em>Reír</em> (to laugh) and <em>sonreír</em> (to smile) are e→i stem-changers, but they have an extra quirk: in the 3rd person, the verb already needs an <em>i</em> (-ió, -ieron) AND the stem change wants to add another. Spanish refuses to write two <em>i</em>s in a row, so one of them drops.<br><br><em>reír</em>:',
          conjugation: [
            ['yo', 'reí'],
            ['tú', 'reíste'],
            ['él / ella', 'rió <em style="opacity:0.5;">(not riió)</em>'],
            ['nosotros', 'reímos'],
            ['vosotros', 'reísteis'],
            ['ellos', 'rieron <em style="opacity:0.5;">(not riieron)</em>']
          ]
        },
        {
          heading: '<em>Sonreír</em> follows the same pattern',
          body: '<em>sonreír</em> (to smile): sonreí, sonreíste, <strong>sonrió</strong>, sonreímos, sonreísteis, <strong>sonrieron</strong>.',
          examples: [
            { es: 'Mi hija rió mucho con el chiste.', en: 'My daughter laughed a lot at the joke.' },
            { es: 'Los niños sonrieron al ver el regalo.', en: 'The children smiled when they saw the gift.' }
          ]
        },
        {
          heading: '<em>Divertirse</em> — a reflexive e→ie/i stem-changer',
          body: '<em>Divertirse</em> (to have fun) is reflexive and e→ie in the present, e→i in the preterite\'s 3rd-person forms.',
          conjugation: [
            ['yo', 'me divertí'],
            ['tú', 'te divertiste'],
            ['él / ella', 'se div<strong>i</strong>rtió'],
            ['nosotros', 'nos divertimos'],
            ['vosotros', 'os divertisteis'],
            ['ellos', 'se div<strong>i</strong>rtieron']
          ]
        }
      ],
      quiz: [
        { q: 'En el restaurante, el mesero _____ (servir) la comida.', options: [
          { text: 'serbió', correct: false },
          { text: 'sirvió', correct: true },
          { text: 'servió', correct: false }
        ]},
        { q: 'Anoche, mis hermanos _____ (dormir) muy poco.', options: [
          { text: 'dormieron', correct: false },
          { text: 'durmieron', correct: true },
          { text: 'dormían', correct: false }
        ]},
        { q: 'Mi tío contó un chiste y todos _____ (reír) mucho.', options: [
          { text: 'riieron', correct: false },
          { text: 'reieron', correct: false },
          { text: 'rieron', correct: true }
        ]}
      ]
    },

    // ---------- LESSON 39: Pattern irregulars (U/I/J stems) ----------
    {
      id: 'preterite-pattern-irregulars',
      number: '39',
      level: 'sp2',
      title: 'Preterite: <em>pattern irregulars</em> (U / I / J stems)',
      summary: 'A group of high-frequency verbs share special preterite forms with NO accent marks. Sorted by stem-vowel: U-stem, I-stem, and J-stem.',
      sections: [
        {
          heading: 'A shared <em>pattern</em>',
          body: 'About a dozen very common verbs share a special preterite pattern. They take these endings — note the <strong>no accent marks anywhere</strong> (compare with the regular preterite, where yo and él forms get accents):<br><br><strong>Shared endings:</strong> <em>-e, -iste, -o, -imos, -isteis, -ieron</em><br><br>The trick is just remembering what the <strong>stem</strong> becomes. They sort into three groups by what the stem vowel turns into: <strong>U-stem, I-stem, J-stem</strong>.'
        },
        {
          heading: 'U-stem <em>verbs</em>',
          body: 'For these, the stem vowel becomes <strong>U</strong>:<br><br>• <em>andar</em> (to walk) → <strong>anduv-</strong>: anduve, anduviste, anduvo, anduvimos, anduvisteis, anduvieron<br>• <em>estar</em> → <strong>estuv-</strong>: estuve, estuviste, estuvo, estuvimos, estuvisteis, estuvieron<br>• <em>tener</em> → <strong>tuv-</strong>: tuve, tuviste, tuvo, tuvimos, tuvisteis, tuvieron<br>• <em>poder</em> → <strong>pud-</strong>: pude, pudiste, pudo, pudimos, pudisteis, pudieron<br>• <em>poner</em> → <strong>pus-</strong>: puse, pusiste, puso, pusimos, pusisteis, pusieron<br>• <em>saber</em> → <strong>sup-</strong>: supe, supiste, supo, supimos, supisteis, supieron',
          examples: [
            { es: 'Estuve en la casa de mi abuela todo el sábado.', en: 'I was at my grandmother\'s house all Saturday.' },
            { es: 'Anoche tuvimos una conversación larga.', en: 'Last night we had a long conversation.' },
            { es: 'No pude ir a la fiesta porque estaba enfermo.', en: 'I couldn\'t go to the party because I was sick.' }
          ]
        },
        {
          heading: 'I-stem <em>verbs</em>',
          body: 'For these, the stem vowel becomes <strong>I</strong>:<br><br>• <em>hacer</em> → <strong>hic-</strong>: hice, hiciste, <strong>hizo</strong>, hicimos, hicisteis, hicieron<br>(Note: <em>hizo</em> — the c changes to z before o, to keep the "s" sound.)<br>• <em>querer</em> → <strong>quis-</strong>: quise, quisiste, quiso, quisimos, quisisteis, quisieron<br>• <em>venir</em> → <strong>vin-</strong>: vine, viniste, vino, vinimos, vinisteis, vinieron',
          examples: [
            { es: 'Hice mi tarea antes de cenar.', en: 'I did my homework before dinner.' },
            { es: 'Mi hermana vino a casa el fin de semana.', en: 'My sister came home for the weekend.' },
            { es: '¿Qué hizo tu padre el sábado?', en: 'What did your father do on Saturday?' }
          ]
        },
        {
          heading: 'J-stem <em>verbs</em>: the third-person <em>i</em> drop',
          body: 'These verbs have a <strong>J</strong> in their preterite stem. They have one extra rule: in <strong>ellos</strong>, the ending is <em>-eron</em>, not <em>-ieron</em>. The <em>i</em> drops out.<br><br>• <em>decir</em> → <strong>dij-</strong>: dije, dijiste, dijo, dijimos, dijisteis, <strong>dijeron</strong> (NOT dijieron)<br>• <em>traer</em> → <strong>traj-</strong>: traje, trajiste, trajo, trajimos, trajisteis, <strong>trajeron</strong> (NOT trajieron)<br>• <em>conducir</em> → <strong>conduj-</strong>: conduje, condujiste, condujo, condujimos, condujisteis, <strong>condujeron</strong> (NOT condujieron)<br>• <em>traducir</em> → <strong>traduj-</strong>: traduje, tradujiste, tradujo, tradujimos, tradujisteis, <strong>tradujeron</strong> (NOT tradujieron)'
        },
        {
          heading: 'The <em>-ducir</em> productive class',
          body: 'Almost any verb ending in <strong>-ducir</strong> follows the J-stem pattern: <em>producir → produje</em>, <em>reducir → reduje</em>, <em>introducir → introduje</em>, <em>deducir → deduje</em>. Once you know the pattern, you can confidently conjugate -ducir verbs you\'ve never seen.',
          examples: [
            { es: 'Mi padre condujo el carro durante seis horas.', en: 'My father drove the car for six hours.' },
            { es: 'Ellos dijeron la verdad finalmente.', en: 'They finally told the truth.' },
            { es: 'Mi hermana tradujo el documento al inglés.', en: 'My sister translated the document to English.' }
          ]
        },
        {
          heading: 'Common <em>trap</em>: no accents anywhere',
          body: 'A lot of students reflexively want to write <em>tuvé, tuvó, pusé, hicé</em>. Don\'t! These pattern irregulars have <strong>NO accent marks</strong> on any form. The endings are <em>-e, -iste, -o, -imos, -isteis, -ieron</em> (or <em>-eron</em> for J-stems). That\'s it. No accents.'
        }
      ],
      quiz: [
        { q: '¿Dónde _____ (tú, estar) anoche? Te llamé y no contestaste.', options: [
          { text: 'estaste', correct: false },
          { text: 'estuviste', correct: true },
          { text: 'estabaste', correct: false }
        ]},
        { q: 'Mis padres me _____ (decir) que viene el lunes.', options: [
          { text: 'decieron', correct: false },
          { text: 'dijieron', correct: false },
          { text: 'dijeron', correct: true }
        ]},
        { q: 'Mi madre _____ (hacer) un pastel delicioso para mi cumpleaños.', options: [
          { text: 'hació', correct: false },
          { text: 'hizo', correct: true },
          { text: 'hacía', correct: false }
        ]}
      ]
    },

    // ============================================================================
    // IMPERFECT LESSONS (40-41) — Spanish 2
    // ============================================================================

    // ---------- LESSON 40: Regular imperfect ----------
    {
      id: 'imperfect-regular',
      number: '40',
      level: 'sp2',
      title: 'The <em>imperfect</em>: regular forms',
      summary: 'The imperfect tense paints the past — habits, ongoing states, descriptions, and "how things used to be." It is the most regular tense in Spanish.',
      sections: [
        {
          heading: 'What the <em>imperfect</em> does',
          body: 'The imperfect (<em>el imperfecto</em>) describes the past, but in a different way than the preterite does. While preterite tells what <strong>happened</strong>, imperfect describes what <strong>was happening</strong>, what <strong>used to happen</strong>, or what <strong>things were like</strong>.<br><br>Use the imperfect for:<br><br>• <strong>Habits in the past</strong> — what you used to do regularly. <em>Jugaba al fútbol todos los días.</em> → I used to play soccer every day.<br>• <strong>Ongoing past states</strong> — how things were. <em>Mi abuela era muy alta.</em> → My grandmother was very tall.<br>• <strong>Descriptions in the past</strong> — the scene, the weather, the feelings. <em>Hacía sol y los pájaros cantaban.</em> → It was sunny and the birds were singing.<br>• <strong>Time and age in the past</strong> — <em>Eran las tres.</em> (It was three o\'clock.) / <em>Tenía diez años.</em> (I was ten years old.)<br><br>Trigger words: <em>siempre</em>, <em>todos los días</em>, <em>generalmente</em>, <em>a menudo</em>, <em>de niño/a</em>, <em>cuando era joven</em>, <em>mientras</em>.'
        },
        {
          heading: 'The <em>good news</em>: it is the most regular tense',
          body: 'No stem changes. No spelling changes. No orthographic shifts. Just two endings patterns — one for -AR verbs, one for -ER and -IR verbs (which share endings). Once you know these two patterns, you can conjugate almost any verb in the imperfect.<br><br>Only THREE verbs in all of Spanish are irregular in the imperfect — and those get their own lesson next.'
        },
        {
          heading: '-AR <em>endings</em>',
          body: 'Take an -AR verb like <em>hablar</em>. Drop the -AR. Add these endings — notice the <strong>b</strong> in every single form, and the accent on the <em>nosotros</em> form:',
          conjugation: [
            ['yo', 'habl<strong>aba</strong>'],
            ['tú', 'habl<strong>abas</strong>'],
            ['él / ella / usted', 'habl<strong>aba</strong>'],
            ['nosotros', 'habl<strong>ábamos</strong>'],
            ['vosotros', 'habl<strong>abais</strong>'],
            ['ellos / ellas / ustedes', 'habl<strong>aban</strong>']
          ]
        },
        {
          heading: 'A <em>quirk</em> of -AR imperfect',
          body: 'Notice that the <strong>yo</strong> and <strong>él/ella</strong> forms are <em>identical</em>: both are <em>hablaba</em>. Context tells you which.<br><br>• <em>Yo hablaba con mi madre.</em> → I was talking with my mother.<br>• <em>Mi padre hablaba con mi madre.</em> → My father was talking with my mother.<br><br>Spanish speakers often drop the <em>yo</em> in other tenses, but with the imperfect they\'ll usually keep it in if there\'s any chance of confusion.'
        },
        {
          heading: '-ER and -IR <em>endings</em>',
          body: 'These two share the SAME imperfect endings. Take a verb like <em>comer</em> or <em>vivir</em>. Drop the ending and add these — notice the accent on EVERY form (the <em>í</em> needs the accent to mark it as its own syllable, not absorbed into a diphthong):',
          conjugation: [
            ['yo', 'com<strong>ía</strong> / viv<strong>ía</strong>'],
            ['tú', 'com<strong>ías</strong> / viv<strong>ías</strong>'],
            ['él / ella / usted', 'com<strong>ía</strong> / viv<strong>ía</strong>'],
            ['nosotros', 'com<strong>íamos</strong> / viv<strong>íamos</strong>'],
            ['vosotros', 'com<strong>íais</strong> / viv<strong>íais</strong>'],
            ['ellos / ellas / ustedes', 'com<strong>ían</strong> / viv<strong>ían</strong>']
          ]
        },
        {
          heading: 'The same <em>yo</em> = <em>él</em> quirk',
          body: 'Just like -AR verbs, the -ER/-IR imperfect has the <strong>yo</strong> and <strong>él/ella</strong> forms identical (<em>comía / vivía</em>). Use context — or include the pronoun if needed for clarity.'
        },
        {
          heading: 'Examples in <em>action</em>',
          body: '',
          examples: [
            { es: 'De niño, jugaba al fútbol todos los días.', en: 'As a child, I used to play soccer every day.' },
            { es: 'Mi abuela cocinaba comida deliciosa los domingos.', en: 'My grandmother used to cook delicious food on Sundays.' },
            { es: 'Hacía sol y los pájaros cantaban en los árboles.', en: 'It was sunny and the birds were singing in the trees.' },
            { es: 'Cuando vivíamos en Lima, comíamos ceviche todos los viernes.', en: 'When we lived in Lima, we used to eat ceviche every Friday.' },
            { es: 'Mis padres trabajaban mucho cuando yo era pequeño.', en: 'My parents worked a lot when I was little.' },
            { es: 'Eran las ocho de la noche y llovía mucho.', en: 'It was eight at night and it was raining hard.' }
          ]
        },
        {
          heading: 'Recognizing <em>imperfect signals</em>',
          body: 'When you see these expressions, lean toward imperfect:<br><br>• <em>siempre</em> (always), <em>nunca</em> (never)<br>• <em>todos los días</em>, <em>todos los lunes</em>, <em>cada semana</em><br>• <em>de niño / de joven</em> (as a child / as a youth)<br>• <em>cuando era pequeño / cuando vivía en…</em><br>• <em>mientras</em> (while)<br>• <em>generalmente</em>, <em>normalmente</em>, <em>a menudo</em><br><br>These suggest something repeated, ongoing, or descriptive — exactly what the imperfect describes.'
        },
        {
          type: 'mistakes',
          heading: 'Regular imperfect <em>traps</em>',
          body: 'The imperfect is the most regular Spanish tense, but watch out for these:',
          items: [
            'Forgetting the <strong>accent on the -ía endings</strong> — wrong. <em>"Comia, vivia"</em> should always be <em>"comía, vivía."</em> The accent is required on the í of every form: comía, comías, comía, comíamos, comíais, comían.',
            'Forgetting the <strong>accent on the -ábamos form</strong> — wrong. <em>"Hablabamos"</em> should be <em>"hablábamos."</em> Only the nosotros form gets the accent in -AR imperfect. All other forms (hablaba, hablabas, hablaba, hablabais, hablaban) have NO accent.',
            'Stem-changing in the <strong>imperfect</strong> — wrong. Stem-changers DO NOT change in imperfect. <em>"Dormía"</em> (NOT "duermía"). <em>"Pedía"</em> (NOT "pidía"). <em>"Quería"</em> (NOT "quiería"). The imperfect is gentle that way.',
            'Mixing up <strong>yo and él forms</strong> — they\'re identical in imperfect. <em>"Yo hablaba" = "Él hablaba"</em> — same form. Use context or include the pronoun for clarity.',
            'Using imperfect for <strong>completed past actions</strong> — wrong. For "I ate breakfast yesterday," use preterite (<em>"Ayer comí desayuno"</em>), NOT imperfect (<em>"comía"</em>). Imperfect describes ongoing or repeated past, not completed events.',
            'Saying <strong>"Era diez años"</strong> for "I was 10 years old" — wrong. Age uses tener: <em>"Tenía diez años."</em> Use the imperfect of tener, not ser.'
          ]
        }
      ],
      quiz: [
        { q: 'De niño, yo _____ (jugar) al fútbol todos los sábados.', options: [
          { text: 'jugué', correct: false },
          { text: 'jugaba', correct: true },
          { text: 'juego', correct: false }
        ]},
        { q: 'Cuando _____ (vivir) en Lima, comíamos pescado fresco.', options: [
          { text: 'vivíamos', correct: true },
          { text: 'vivimos', correct: false },
          { text: 'vivamos', correct: false }
        ]},
        { q: 'Mis abuelos siempre _____ (hablar) español en casa.', options: [
          { text: 'hablaron', correct: false },
          { text: 'hablan', correct: false },
          { text: 'hablaban', correct: true }
        ]}
      ]
    },

    // ---------- LESSON 41: The three irregular imperfect verbs ----------
    {
      id: 'imperfect-irregulars',
      number: '41',
      level: 'sp2',
      title: 'Imperfect: the <em>only three</em> irregulars',
      summary: 'Across all of Spanish, only three verbs are irregular in the imperfect: ir, ser, and ver. Once you know these three, every other verb follows the regular patterns.',
      sections: [
        {
          heading: 'The <em>good news</em>: only three',
          body: 'Spanish has one of the most beautifully simple imperfect tenses of any major language. <strong>Only three verbs</strong> are irregular in the imperfect: <em>ir</em> (to go), <em>ser</em> (to be), and <em>ver</em> (to see).<br><br>That\'s it. Every other verb — no matter how irregular it is in other tenses — follows the regular -AR or -ER/-IR pattern from the last lesson. Even hardcore irregulars like <em>tener, hacer, decir, poner</em> all become regular in the imperfect.<br><br>• <em>tener</em> → tenía, tenías, tenía, teníamos, teníais, tenían (regular -ER)<br>• <em>decir</em> → decía, decías, decía, decíamos, decíais, decían (regular -IR)<br>• <em>poner</em> → ponía, ponías, ponía, poníamos, poníais, ponían (regular -ER)<br><br>So learn these three, and you\'re essentially done with imperfect.'
        },
        {
          heading: '<em>Ir</em> (to go)',
          body: 'Just memorize these. There\'s no pattern to derive — it\'s its own thing.',
          conjugation: [
            ['yo', '<strong>iba</strong>'],
            ['tú', '<strong>ibas</strong>'],
            ['él / ella / usted', '<strong>iba</strong>'],
            ['nosotros', '<strong>íbamos</strong>'],
            ['vosotros', '<strong>ibais</strong>'],
            ['ellos / ellas / ustedes', '<strong>iban</strong>']
          ]
        },
        {
          heading: '<em>Ir</em> usage',
          body: 'Often used to describe a habitual past movement or where you used to go.',
          examples: [
            { es: 'De niño, iba a la playa con mi familia cada verano.', en: 'As a child, I used to go to the beach with my family every summer.' },
            { es: 'Mis amigos siempre iban al cine los viernes.', en: 'My friends always used to go to the movies on Fridays.' },
            { es: 'Mientras íbamos al supermercado, vimos un accidente.', en: 'While we were going to the supermarket, we saw an accident.' }
          ]
        },
        {
          heading: '<em>Ser</em> (to be)',
          body: 'Used constantly for descriptions in the past — what someone was like, who they were, time, age, weather descriptions.',
          conjugation: [
            ['yo', '<strong>era</strong>'],
            ['tú', '<strong>eras</strong>'],
            ['él / ella / usted', '<strong>era</strong>'],
            ['nosotros', '<strong>éramos</strong>'],
            ['vosotros', '<strong>erais</strong>'],
            ['ellos / ellas / ustedes', '<strong>eran</strong>']
          ]
        },
        {
          heading: '<em>Ser</em> usage',
          body: '',
          examples: [
            { es: 'Mi abuelo era un hombre muy alto y serio.', en: 'My grandfather was a very tall and serious man.' },
            { es: 'Cuando éramos niños, vivíamos en un pueblo pequeño.', en: 'When we were children, we lived in a small town.' },
            { es: 'Eran las once de la noche cuando llegamos.', en: 'It was eleven at night when we arrived.' },
            { es: 'La casa de mi abuela era enorme.', en: 'My grandmother\'s house was enormous.' }
          ]
        },
        {
          heading: '<em>Ver</em> (to see)',
          body: 'Strangely, <em>ver</em> is irregular but only in a sneaky way — it keeps the <strong>e</strong> from the infinitive (<em>ver</em>) before adding the regular -ER endings. So you get <em>veía</em> instead of the expected <em>vía</em>.',
          conjugation: [
            ['yo', 'v<strong>eía</strong>'],
            ['tú', 'v<strong>eías</strong>'],
            ['él / ella / usted', 'v<strong>eía</strong>'],
            ['nosotros', 'v<strong>eíamos</strong>'],
            ['vosotros', 'v<strong>eíais</strong>'],
            ['ellos / ellas / ustedes', 'v<strong>eían</strong>']
          ]
        },
        {
          heading: '<em>Ver</em> usage',
          body: 'Often used for what someone "used to see" or what they "could see" in a past scene.',
          examples: [
            { es: 'De niño, veía dibujos animados todos los sábados.', en: 'As a child, I used to watch cartoons every Saturday.' },
            { es: 'Desde mi ventana, veíamos las montañas a lo lejos.', en: 'From my window, we used to see the mountains in the distance.' },
            { es: 'Mis hermanos veían demasiada televisión.', en: 'My siblings used to watch too much TV.' }
          ]
        },
        {
          heading: 'A <em>memory trick</em>',
          body: 'Three irregulars, three short stems to memorize: <strong>iba</strong>, <strong>era</strong>, <strong>veía</strong>. Some teachers call them the "I-E-V" verbs (Ir, sEr, Ver). All three keep regular endings — they\'re just unusual in their stems.<br><br>And remember: only the <strong>nosotros</strong> form takes the accent on the stem syllable (<em>íbamos, éramos, veíamos</em>). Most other forms don\'t have accents (except for <em>ver</em>, which gets accents on the <em>í</em> in every form just like a regular -ER verb).'
        }
      ],
      quiz: [
        { q: 'Cuando yo _____ (ser) joven, vivía en el campo.', options: [
          { text: 'era', correct: true },
          { text: 'fui', correct: false },
          { text: 'seía', correct: false }
        ]},
        { q: 'Todos los domingos, mis primos y yo _____ (ir) al parque.', options: [
          { text: 'fuimos', correct: false },
          { text: 'íbamos', correct: true },
          { text: 'iremos', correct: false }
        ]},
        { q: 'Cuando era niña, _____ (ver) muchas películas con mi padre.', options: [
          { text: 'vía', correct: false },
          { text: 'vi', correct: false },
          { text: 'veía', correct: true }
        ]}
      ]
    },

    // ============================================================================
    // LESSON 42 — Preterite vs. Imperfect (the capstone contrast lesson)
    // ============================================================================
    {
      id: 'preterite-vs-imperfect',
      number: '42',
      level: 'sp2',
      title: 'Preterite <em>vs.</em> Imperfect',
      summary: 'The hardest grammar choice in Spanish 2: when to use preterite and when to use imperfect. Trigger words, the "while-when" construction, and the common English-speaker traps.',
      sections: [
        {
          heading: 'A <em>mental model</em>, not a rule',
          body: 'Every student wants a clean rule like "preterite = past tense, imperfect = other past tense." There isn\'t one. What works better is a mental model:<br><br>• <strong>Preterite</strong> is the <em>action</em> of the story. What happened. What moved the plot forward. Things that started, ended, or occurred at a specific moment.<br><br>• <strong>Imperfect</strong> is the <em>background</em> of the story. The scene. The weather. What someone was wearing. What was ongoing while other things happened. Descriptions, habits, and "the way things were."<br><br>Here\'s the truth most students miss: <strong>most of any story is background, not action.</strong> If you write a paragraph about your childhood, the imperfect will appear far more often than the preterite. That feels wrong to English speakers, but it\'s correct.'
        },
        {
          heading: 'The <em>American-student trap</em>',
          body: 'US students consistently <strong>overuse the preterite</strong>. Two reasons:<br><br>1. <strong>English doesn\'t distinguish these the way Spanish does.</strong> "I was walking" and "I walked" feel like stylistic choices in English, not grammatical ones. In Spanish, they are very different choices with different meanings.<br><br>2. <strong>Spanish curricula teach the preterite first.</strong> So students mentally treat preterite as "the past tense" and imperfect as the awkward extra one. The opposite is closer to true.<br><br>Watch what this trap looks like in practice:<br><br>❌ <em>Yo fui pequeño y jugué al fútbol.</em> ← Wrong<br>✅ <em>Yo era pequeño y jugaba al fútbol.</em> ← Right<br><br>"Being little" is an ongoing past state. "Used to play soccer" is a habit. Both want imperfect. The student who defaulted to preterite is saying something closer to "I was small (briefly) and I played soccer (once)" — which is nonsense.<br><br>❌ <em>Mi abuela fue muy alta y tuvo el pelo blanco.</em> ← Wrong<br>✅ <em>Mi abuela era muy alta y tenía el pelo blanco.</em> ← Right<br><br>Describing what someone <em>was like</em> is imperfect, always. The preterite version sounds like "my grandmother was tall for a moment" — wrong.'
        },
        {
          heading: 'Trigger words for the <em>IMPERFECT</em>',
          body: 'When you see these phrases, lean strongly toward imperfect:<br><br><strong>Repeated or habitual:</strong><br>• <em>siempre</em> (always)<br>• <em>nunca</em> (never)<br>• <em>todos los días / los lunes / los veranos</em> (every day / Monday / summer)<br>• <em>cada semana / cada año</em> (every week / every year)<br>• <em>generalmente, normalmente</em> (generally, normally)<br>• <em>a menudo</em> (often)<br>• <em>a veces, muchas veces</em> (sometimes, many times)<br>• <em>frecuentemente, con frecuencia</em> (frequently)<br>• <em>de vez en cuando</em> (from time to time)<br><br><strong>Past states (how things WERE):</strong><br>• <em>de niño / de niña / de joven</em> (as a child / as a youth)<br>• <em>cuando era joven / pequeño / estudiante</em> (when I was young / little / a student)<br>• <em>cuando vivía en…</em> (when I was living in…)<br>• <em>cuando tenía X años</em> (when I was X years old)<br><br><strong>Ongoing/simultaneous:</strong><br>• <em>mientras</em> (while) — almost always wants imperfect<br>• <em>en aquellos años / en esos tiempos</em> (in those years / in those times)'
        },
        {
          heading: 'Trigger words for the <em>PRETERITE</em>',
          body: 'When you see these phrases, lean strongly toward preterite:<br><br><strong>A specific time:</strong><br>• <em>ayer</em> (yesterday)<br>• <em>anoche</em> (last night)<br>• <em>esta mañana, esta tarde</em> (this morning, this afternoon)<br>• <em>el lunes pasado / la semana pasada / el año pasado</em> (last Monday / last week / last year)<br>• <em>en (year)</em> — e.g. <em>en 2022</em><br><br><strong>A number of times:</strong><br>• <em>una vez, dos veces, tres veces</em> (one time, two times, three times)<br><br><strong>Sequencing of events:</strong><br>• <em>primero, luego, después, finalmente</em> (first, then, after, finally)<br>• <em>entonces</em> (then)<br><br><strong>Sudden-event markers:</strong><br>• <em>de repente</em> (suddenly)<br>• <em>en ese momento</em> (at that moment)<br>• <em>al final</em> (in the end)<br>• <em>por fin</em> (finally / at last)'
        },
        {
          heading: 'The <em>headline construction</em>: while X was happening, Y happened',
          body: 'This is the single most important sentence structure in this whole lesson. Pay attention.<br><br>When you describe a scene that was happening (background) and then an event broke into it (action), Spanish uses <strong>imperfect for the background</strong> and <strong>preterite for the event</strong> — together in one sentence.<br><br>Pattern: <strong>(imperfect background) + cuando / mientras + (preterite event)</strong><br><br>Or: <strong>Mientras + (imperfect background) + (preterite event)</strong><br><br>Look at how this works:<br><br>• <em>Caminaba por la calle <strong>cuando</strong> vi a mi amigo.</em><br>I <strong>was walking</strong> down the street <strong>when</strong> I <strong>saw</strong> my friend.<br>(Walking = ongoing background → imperfect. Seeing = the event that interrupted → preterite.)<br><br>• <em>Dormía <strong>cuando</strong> sonó el teléfono.</em><br>I <strong>was sleeping</strong> <strong>when</strong> the phone <strong>rang</strong>.<br><br>• <em><strong>Mientras</strong> mi madre cocinaba, mi padre llegó a casa.</em><br><strong>While</strong> my mother <strong>was cooking</strong>, my father <strong>arrived</strong> home.<br><br>• <em>Hacía sol y los pájaros cantaban <strong>cuando</strong> empezó a llover.</em><br>It <strong>was sunny</strong> and the birds <strong>were singing</strong> <strong>when</strong> it <strong>started</strong> to rain.<br><br>Notice: in every one of these, the background goes on for a while, and the preterite verb is what suddenly happens. That\'s the rhythm of this construction.'
        },
        {
          heading: 'Why this trips <em>up English speakers</em>',
          body: 'In English, we can say "I walked down the street when I saw my friend" and it sounds fine. So students mirror it: ❌ <em>Caminé por la calle cuando vi a mi amigo.</em><br><br>That\'s wrong. In Spanish, that sentence would mean "I walked the entire street (a completed action) when I saw my friend" — which doesn\'t make logical sense as a connected sentence.<br><br>The fix: <strong>when there\'s a "cuando" or "mientras" connecting two past actions, the background one is almost always imperfect.</strong> Use this as a quick check.'
        },
        {
          heading: 'Worked examples — <em>why this tense?</em>',
          body: 'Let\'s walk through some specific sentences and SHOW the reasoning.<br><br><strong>1.</strong> <em>De niña, vivía en Lima y nadaba en el mar todos los días.</em><br>"De niña" → imperfect signal. "Todos los días" → another imperfect signal. Both verbs are habits or ongoing past states. Imperfect on both. ✓<br><br><strong>2.</strong> <em>Ayer fui al mercado y compré frutas.</em><br>"Ayer" → preterite signal. Two completed events with a specific time. Preterite on both. ✓<br><br><strong>3.</strong> <em>Era una noche oscura y hacía frío. De repente, oí un ruido extraño.</em><br>"Era" and "hacía" → describing the scene → imperfect. "De repente" → sudden-event signal → preterite for "oí." The classic background-then-event pattern. ✓<br><br><strong>4.</strong> <em>Cuando tenía diez años, mi familia se mudó a Cincinnati.</em><br>"Cuando tenía X años" → imperfect signal (age in the past). "Se mudó" is a single completed event → preterite. Both are right because they\'re doing different jobs. ✓<br><br><strong>5.</strong> <em>Mientras estudiábamos para el examen, mi hermano llegó con pizza.</em><br>"Mientras" + ongoing activity → imperfect (estudiábamos). Then a single event broke in → preterite (llegó). ✓'
        },
        {
          heading: 'A <em>quick-decision</em> checklist',
          body: 'When you\'re unsure which tense to use, ask these questions in order:<br><br><strong>1.</strong> Is there an imperfect trigger word (siempre, todos los días, de niño, mientras, cuando + age, etc.)? → IMPERFECT<br><br><strong>2.</strong> Is there a preterite trigger word (ayer, una vez, el año pasado, de repente, etc.)? → PRETERITE<br><br><strong>3.</strong> Is the verb describing what something WAS LIKE (age, weather, appearance, feelings)? → IMPERFECT<br><br><strong>4.</strong> Is the verb describing a SINGLE COMPLETED EVENT? → PRETERITE<br><br><strong>5.</strong> Is the verb the background in a "while X was happening, Y happened" sentence? → IMPERFECT for the background, PRETERITE for the event<br><br>If you\'re still stuck after all five, default to imperfect. Most US students default to preterite, and they\'re usually wrong.'
        },
        {
          type: 'tip',
          heading: 'Special meaning shifts: <em>saber, conocer, querer, poder</em>',
          body: 'A few verbs you already know have DIFFERENT MEANINGS in preterite vs. imperfect. This is one of the most striking and often-tested patterns in Spanish 2:<br><br><strong>SABER</strong><br>• imperfect (<em>sabía</em>) = "knew (a fact)" — ongoing<br>• preterite (<em>supe</em>) = "FOUND OUT" — the moment of learning<br>&nbsp;&nbsp;<em>Sabía que venía.</em> = I knew she was coming. (had the info already)<br>&nbsp;&nbsp;<em>Supe que venía ayer.</em> = I FOUND OUT she was coming yesterday. (the moment I learned it)<br><br><strong>CONOCER</strong><br>• imperfect (<em>conocía</em>) = "knew (a person/place)" — ongoing<br>• preterite (<em>conocí</em>) = "MET (for the first time)" — the moment of first meeting<br>&nbsp;&nbsp;<em>Conocía a María desde hace años.</em> = I had known María for years.<br>&nbsp;&nbsp;<em>Conocí a María en la fiesta.</em> = I MET María at the party.<br><br><strong>QUERER</strong><br>• imperfect (<em>quería</em>) = "wanted" — ongoing desire<br>• preterite affirmative (<em>quiso</em>) = "TRIED" — made the attempt<br>• preterite negative (<em>no quiso</em>) = "REFUSED" — actively rejected<br>&nbsp;&nbsp;<em>Quería ir al cine.</em> = I wanted to go to the movies.<br>&nbsp;&nbsp;<em>Quise ir al cine pero estaba cerrado.</em> = I tried to go to the movies but it was closed.<br>&nbsp;&nbsp;<em>No quiso ayudarme.</em> = She refused to help me.<br><br><strong>PODER</strong><br>• imperfect (<em>podía</em>) = "could / was able to" — general ability<br>• preterite affirmative (<em>pude</em>) = "MANAGED TO" — succeeded at something difficult<br>• preterite negative (<em>no pude</em>) = "FAILED TO" — couldn\'t accomplish it<br>&nbsp;&nbsp;<em>Podía nadar muy bien de joven.</em> = I could swim very well when I was young.<br>&nbsp;&nbsp;<em>Pude abrir la puerta.</em> = I managed to open the door (it was difficult).<br>&nbsp;&nbsp;<em>No pude encontrar las llaves.</em> = I couldn\'t / failed to find the keys.<br><br>These four verbs are worth memorizing carefully. They appear in real Spanish constantly, and using the wrong tense changes the meaning of your sentence. For a deeper dive on saber and conocer specifically, see Lesson 48 (Saber/Conocer + Pedir/Preguntar).'
        }
      ],
      quiz: [
        { q: 'Cuando yo _____ niño, mi familia y yo íbamos a la playa cada verano. (Notice "cuando era niño" + "cada verano" — both signal one tense.)', options: [
          { text: 'fui', correct: false },
          { text: 'era', correct: true },
          { text: 'soy', correct: false }
        ]},
        { q: 'Anoche, después de cenar, mis padres _____ una película. (Notice "anoche" — a specific time in the past.)', options: [
          { text: 'veían', correct: false },
          { text: 'vieron', correct: true },
          { text: 'ven', correct: false }
        ]},
        { q: 'Mientras mi hermana _____ la tarea, sonó el teléfono. (Background + sudden event = which tense for "doing the homework"?)', options: [
          { text: 'hizo', correct: false },
          { text: 'hacía', correct: true },
          { text: 'hace', correct: false }
        ]}
      ]
    },

    // ============================================================================
    // COMMANDS FAMILY (Spanish 2) — six interconnected lessons
    // L34.1 Tú commands · L34.2 Usted/Ustedes · L34.3 Nosotros · L34.4 With single
    // object pronouns · L34.5 With double object pronouns · L34.6 Reflexive
    // ============================================================================

    // ---------- LESSON 43: Tú Commands ----------
    {
      id: 'tu-commands',
      num: '43',
      level: 'sp2',
      title: 'Tú <em>commands</em>',
      tag: 'Imperatives · Informal',
      summary: 'How to tell a friend "do it" — affirmative tú commands look like third-person present (¡habla! ¡come!), but the eight irregulars don\'t. Negative tú commands use a totally different stem.',
      sections: [
        {
          heading: 'What is a <em>command</em>?',
          body: 'A command (imperative) is what you use to tell someone to do (or not do) something: "Eat your dinner!" "Don\'t touch that!" "Open the door!" Spanish has different command forms depending on WHO you\'re talking to — formal vs. informal, one person vs. many. This lesson covers <strong>tú commands</strong>, used when you\'re talking to one person you know well: a friend, a sibling, a classmate, a child.<br><br>Two forms to learn: affirmative ("do it") and negative ("don\'t do it"). They use DIFFERENT verb forms — that\'s the part that trips students up.'
        },
        {
          heading: 'Affirmative tú commands: <em>regular verbs</em>',
          body: 'For most verbs, the affirmative tú command is identical to the <strong>third-person singular (él/ella)</strong> form of the present tense. Drop the final -s.<br><br>You already know these forms — you\'re just using them to give orders:',
          conjugation: [
            ['hablar (to speak)', 'él habla → <strong>¡habla!</strong> "speak!"'],
            ['comer (to eat)', 'él come → <strong>¡come!</strong> "eat!"'],
            ['escribir (to write)', 'él escribe → <strong>¡escribe!</strong> "write!"'],
            ['estudiar (to study)', 'él estudia → <strong>¡estudia!</strong> "study!"'],
            ['leer (to read)', 'él lee → <strong>¡lee!</strong> "read!"'],
            ['abrir (to open)', 'él abre → <strong>¡abre!</strong> "open!"']
          ]
        },
        {
          heading: 'Examples in <em>action</em>',
          body: '',
          examples: [
            { es: '¡Habla más despacio!', en: 'Speak more slowly!' },
            { es: '¡Come tus verduras!', en: 'Eat your vegetables!' },
            { es: '¡Escribe tu nombre aquí!', en: 'Write your name here!' },
            { es: '¡Estudia para el examen!', en: 'Study for the exam!' },
            { es: '¡Abre la puerta, por favor!', en: 'Open the door, please!' }
          ]
        },
        {
          heading: 'Stem-changers <em>still change</em>',
          body: 'If a verb has a stem-change in the present tense, that stem-change CARRIES OVER into the affirmative tú command — because the command is built off the third-person form, which also stem-changes:',
          conjugation: [
            ['cerrar (e→ie)', 'él cierra → <strong>¡cierra!</strong> "close!"'],
            ['dormir (o→ue)', 'él duerme → <strong>¡duerme!</strong> "sleep!"'],
            ['pedir (e→i)', 'él pide → <strong>¡pide!</strong> "ask for!"'],
            ['volver (o→ue)', 'él vuelve → <strong>¡vuelve!</strong> "come back!"'],
            ['empezar (e→ie)', 'él empieza → <strong>¡empieza!</strong> "start!"']
          ]
        },
        {
          type: 'tip',
          heading: 'The <em>eight irregular</em> tú commands',
          body: 'These eight verbs DON\'T follow the "drop the -s" rule. Their affirmative tú commands are short, one-syllable, and just need to be memorized. The good news: they\'re extremely common, so you\'ll see them everywhere.<br><br>The classic mnemonic: <strong>"Vin Diesel has ten weapons"</strong> — each verb maps to one letter cluster.',
          conjugation: [
            ['venir (to come)', '<strong>ven</strong> — "come!"'],
            ['decir (to say)', '<strong>di</strong> — "say!" / "tell!"'],
            ['salir (to leave)', '<strong>sal</strong> — "leave!" / "go out!"'],
            ['hacer (to do/make)', '<strong>haz</strong> — "do!" / "make!"'],
            ['tener (to have)', '<strong>ten</strong> — "have!" / "hold!"'],
            ['ir (to go)', '<strong>ve</strong> — "go!"'],
            ['poner (to put)', '<strong>pon</strong> — "put!"'],
            ['ser (to be)', '<strong>sé</strong> — "be!" (with accent to distinguish from "se")']
          ]
        },
        {
          heading: 'Irregulars in <em>action</em>',
          body: '',
          examples: [
            { es: '¡Ven aquí!', en: 'Come here!' },
            { es: '¡Dime la verdad!', en: 'Tell me the truth!' },
            { es: '¡Sal de mi cuarto!', en: 'Get out of my room!' },
            { es: '¡Haz tu tarea!', en: 'Do your homework!' },
            { es: '¡Ten cuidado!', en: 'Be careful! / Watch out!' },
            { es: '¡Ve al médico!', en: 'Go to the doctor!' },
            { es: '¡Pon la mesa!', en: 'Set the table!' },
            { es: '¡Sé bueno!', en: 'Be good!' }
          ]
        },
        {
          heading: 'Negative tú commands: <em>a different beast</em>',
          body: 'Negative tú commands ("don\'t do it") do NOT use the same form as affirmative. Instead they use the <strong>present subjunctive tú form</strong>.<br><br>The fast pattern: take the <em>yo</em> form of the verb in present tense, drop the -o, and add:<br>• <strong>-es</strong> for -AR verbs<br>• <strong>-as</strong> for -ER / -IR verbs<br><br>(This is "opposite endings" — the AR endings get -E, the ER/IR endings get -A. Same idea as subjunctive.)',
          conjugation: [
            ['hablar', 'hablo → habl- → <strong>no hables</strong> "don\'t speak"'],
            ['comer', 'como → com- → <strong>no comas</strong> "don\'t eat"'],
            ['escribir', 'escribo → escrib- → <strong>no escribas</strong> "don\'t write"'],
            ['estudiar', 'estudio → estudi- → <strong>no estudies</strong> "don\'t study"'],
            ['hacer', 'hago → hag- → <strong>no hagas</strong> "don\'t do"'],
            ['tener', 'tengo → teng- → <strong>no tengas</strong> "don\'t have"'],
            ['salir', 'salgo → salg- → <strong>no salgas</strong> "don\'t leave"'],
            ['venir', 'vengo → veng- → <strong>no vengas</strong> "don\'t come"']
          ]
        },
        {
          heading: 'Negative tú commands in <em>action</em>',
          body: '',
          examples: [
            { es: '¡No hables tan rápido!', en: 'Don\'t speak so fast!' },
            { es: '¡No comas eso!', en: 'Don\'t eat that!' },
            { es: '¡No salgas sin chaqueta!', en: 'Don\'t go out without a jacket!' },
            { es: '¡No hagas ruido!', en: 'Don\'t make noise!' },
            { es: '¡No vengas tarde!', en: 'Don\'t come late!' },
            { es: '¡No seas malo!', en: 'Don\'t be mean!' }
          ]
        },
        {
          type: 'tip',
          heading: 'The <em>five "yo-go" → no-gas</em> shortcut',
          body: 'Many of the irregular yo-go verbs you already know follow a clean pattern for negative commands. The "yo-go" stem (the irregular tengo, vengo, salgo, etc.) carries straight into the negative command:<br><br>• tener → tengo → <strong>no tengas</strong><br>• venir → vengo → <strong>no vengas</strong><br>• salir → salgo → <strong>no salgas</strong><br>• poner → pongo → <strong>no pongas</strong><br>• hacer → hago → <strong>no hagas</strong><br>• decir → digo → <strong>no digas</strong><br>• traer → traigo → <strong>no traigas</strong><br>• caer → caigo → <strong>no caigas</strong><br><br>Truly irregular negative tú commands (don\'t follow this pattern): <strong>ir → no vayas</strong>, <strong>ser → no seas</strong>, <strong>dar → no des</strong>, <strong>estar → no estés</strong>, <strong>saber → no sepas</strong>. Memorize these five.'
        },
        {
          type: 'tip',
          heading: 'When to use commands <em>vs. softer ways</em> to ask',
          body: 'Direct commands in Spanish can sound abrupt, especially without "por favor" or with strangers. Even between friends, Spanish speakers often soften commands with these alternatives:<br><br>• <strong>¿Puedes…?</strong> = "Can you…?" — <em>¿Puedes pasarme la sal?</em> (Can you pass me the salt?)<br>• <strong>¿Podrías…?</strong> = "Could you…?" (more polite) — <em>¿Podrías ayudarme?</em><br>• <strong>Adding "por favor"</strong> at the end — <em>Cierra la puerta, por favor.</em><br>• <strong>Using the future tense as a soft command</strong> in spoken Spanish — <em>Me harás un favor</em>… (lit. "you will do me a favor…")<br><br>Direct commands like "¡Cállate!" (Shut up!) or "¡Ven aquí!" (Come here!) are fine between close friends, kids, or in urgent situations. But in polite contexts or with strangers, use ustedes/usted commands or soften with poder.'
        },
        {
          type: 'mistakes',
          heading: 'Tú command <em>traps</em>',
          body: 'Where students slip:',
          items: [
            'Confusing <strong>habla (affirmative command)</strong> with <strong>habla (he/she speaks)</strong> — same form, different uses. Context tells you which. <em>"¡Habla más alto!"</em> with exclamation = command. <em>"Él habla bien"</em> = statement.',
            'Using the affirmative form with "no" — wrong. <em>"¡No habla!"</em> doesn\'t work as a negative command. The negative form requires subjunctive: <em>"¡No hables!"</em>',
            'Forgetting the irregular tú commands and saying <em>"¡pone la mesa!"</em> instead of <em>"¡pon la mesa!"</em> — the eight irregulars are short for a reason. Memorize them.',
            'Writing <strong>"se"</strong> instead of <strong>"sé"</strong> for "be!" — the accent matters. <em>"Sé bueno"</em> (be good) vs. <em>"se"</em> (a reflexive/pronoun particle).',
            'Mixing up <strong>ve (go!)</strong> and <strong>ve (he/she sees)</strong> — same form, different verbs. <em>"¡Ve a la escuela!"</em> (Go to school!) vs. <em>"Él ve la luz"</em> (He sees the light). Context tells you.',
            'Trying to use the <strong>infinitive</strong> as a command — wrong in spoken Spanish. <em>"¡Hablar más despacio!"</em> doesn\'t work in normal speech. (Note: infinitive IS used in written instructions like "Cortar en cuadritos" on a recipe, but not in face-to-face commands.)',
            'Using <strong>"no haz"</strong> as a negative command — wrong. <em>Haz</em> is the affirmative form ONLY. Negative is <em>no hagas</em> (built from yo-go form hago).',
            'Forgetting that <strong>stem-changes carry over</strong> in affirmative — <em>"¡cerra la puerta!"</em> instead of <em>"¡cierra la puerta!"</em> Stem-changers stay stem-changed.',
            'Writing accents wrong on negatives — most negative tú commands DON\'T need an accent. <em>"¡No hables!"</em>, not <em>"¡No háblés!"</em>. Accents only appear when needed for normal stress rules.'
          ]
        }
      ],
      quiz: [
        { q: 'How do you say "Eat your vegetables!" (tú command)?', options: [
          { text: '¡Come tus verduras!', correct: true },
          { text: '¡Comes tus verduras!', correct: false },
          { text: '¡Comas tus verduras!', correct: false }
        ]},
        { q: 'How do you say "Don\'t speak so loudly!" (tú command)?', options: [
          { text: '¡No habla tan alto!', correct: false },
          { text: '¡No hables tan alto!', correct: true },
          { text: '¡No habla tan alto!', correct: false }
        ]},
        { q: 'Which of these is an IRREGULAR affirmative tú command?', options: [
          { text: 'come (eat!)', correct: false },
          { text: 'habla (speak!)', correct: false },
          { text: 'ven (come!)', correct: true }
        ]}
      ]
    },

    // ---------- LESSON 44: Usted/Ustedes Commands ----------
    {
      id: 'usted-commands',
      num: '44',
      level: 'sp2',
      title: 'Usted &amp; Ustedes <em>commands</em>',
      tag: 'Imperatives · Formal',
      summary: 'How to give polite commands to someone you address as "usted" — and how to give commands to any group. The formal/plural commands use the present subjunctive form. ONE form does both affirmative AND negative (just add "no").',
      sections: [
        {
          heading: 'Who gets <em>usted commands</em>?',
          body: 'In Spanish, you choose your "you" based on relationship. Tú commands (the previous lesson) are for friends, family, kids, classmates — people you know well. <strong>Usted commands</strong> are for everyone else: shopkeepers, taxi drivers, your boss, your teacher, your friends\' parents, anyone older you don\'t know intimately, anyone you want to show respect to.<br><br><strong>Ustedes commands</strong> are for any group of people — formal OR informal. In Latin America, there\'s no distinction: you use ustedes for your friends AND for a crowd of strangers. (Spain uses vosotros for informal groups, but that\'s a separate topic.)<br><br>The big honest takeaway: if you travel in any Spanish-speaking country, you will use usted/ustedes commands constantly — at restaurants, in stores, in taxis, at hotels. Master these and you can navigate real-world Spanish situations politely.'
        },
        {
          heading: 'The <em>basic rule</em>',
          body: 'Usted and ustedes commands use the <strong>present subjunctive form</strong> of the verb. That sounds intimidating, but for most verbs the recipe is simple:<br><br><strong>Take the yo form of the present tense. Drop the -o. Add the "opposite" ending:</strong><br>• For -AR verbs: add <strong>-e</strong> (usted) or <strong>-en</strong> (ustedes)<br>• For -ER/-IR verbs: add <strong>-a</strong> (usted) or <strong>-an</strong> (ustedes)<br><br>"Opposite" because -AR verbs that normally end in -a now end in -e, and -ER/-IR verbs that normally end in -e now end in -a. This is the same rule as the negative tú form, just for a different "you."',
          conjugation: [
            ['hablar', 'hablo → habl- → <strong>hable</strong> (usted) / <strong>hablen</strong> (ustedes)'],
            ['comer', 'como → com- → <strong>coma</strong> (usted) / <strong>coman</strong> (ustedes)'],
            ['escribir', 'escribo → escrib- → <strong>escriba</strong> (usted) / <strong>escriban</strong> (ustedes)'],
            ['cerrar (e→ie)', 'cierro → cierr- → <strong>cierre</strong> (usted) / <strong>cierren</strong> (ustedes)'],
            ['dormir (o→ue)', 'duermo → duerm- → <strong>duerma</strong> (usted) / <strong>duerman</strong> (ustedes)'],
            ['pedir (e→i)', 'pido → pid- → <strong>pida</strong> (usted) / <strong>pidan</strong> (ustedes)'],
            ['hacer (yo-go)', 'hago → hag- → <strong>haga</strong> (usted) / <strong>hagan</strong> (ustedes)'],
            ['tener (yo-go)', 'tengo → teng- → <strong>tenga</strong> (usted) / <strong>tengan</strong> (ustedes)'],
            ['salir (yo-go)', 'salgo → salg- → <strong>salga</strong> (usted) / <strong>salgan</strong> (ustedes)']
          ]
        },
        {
          heading: 'Examples in <em>action</em>',
          body: '',
          examples: [
            { es: 'Hable más despacio, por favor.', en: 'Speak more slowly, please. (to one person, formally)' },
            { es: 'Coma todo lo que quiera.', en: 'Eat whatever you want. (formal singular)' },
            { es: 'Escriban sus nombres aquí, por favor.', en: 'Write your names here, please. (to a group)' },
            { es: 'Cierre la puerta, por favor.', en: 'Close the door, please.' },
            { es: 'Tomen asiento.', en: 'Take a seat. (telling a group to sit down)' },
            { es: 'Vengan conmigo, por favor.', en: 'Come with me, please. (to a group)' },
            { es: 'Haga una fila, por favor.', en: 'Make a line, please. (formal singular)' }
          ]
        },
        {
          heading: 'Negative form: <em>just add "no"</em>',
          body: 'Here\'s the beautiful part: unlike tú commands (where affirmative and negative are completely different forms), <strong>usted and ustedes commands use the SAME form for both affirmative and negative</strong>. Just put "no" in front.',
          examples: [
            { es: 'Hable más alto. / No hable tan rápido.', en: 'Speak louder. / Don\'t speak so fast.' },
            { es: 'Coma. / No coma eso.', en: 'Eat. / Don\'t eat that.' },
            { es: 'Vengan. / No vengan tarde.', en: 'Come. / Don\'t come late.' },
            { es: 'Salga. / No salga sin chaqueta.', en: 'Leave. / Don\'t leave without a jacket.' },
            { es: 'Hagan ruido. / No hagan ruido.', en: 'Make noise. / Don\'t make noise.' }
          ]
        },
        {
          type: 'tip',
          heading: 'The <em>five irregular</em> usted commands',
          body: 'Five verbs don\'t follow the "yo form → drop -o" pattern because their yo forms don\'t end in -o, or because they\'re just truly irregular. Memorize these:',
          conjugation: [
            ['dar (to give)', '<strong>dé</strong> (usted) / <strong>den</strong> (ustedes) — accent on "dé" distinguishes it from the preposition "de"'],
            ['ir (to go)', '<strong>vaya</strong> (usted) / <strong>vayan</strong> (ustedes)'],
            ['ser (to be)', '<strong>sea</strong> (usted) / <strong>sean</strong> (ustedes)'],
            ['estar (to be)', '<strong>esté</strong> (usted) / <strong>estén</strong> (ustedes) — accents on the ending vowels'],
            ['saber (to know)', '<strong>sepa</strong> (usted) / <strong>sepan</strong> (ustedes)']
          ]
        },
        {
          heading: 'Irregulars in <em>action</em>',
          body: '',
          examples: [
            { es: 'Vaya con cuidado.', en: 'Go carefully. / Be careful out there.' },
            { es: 'No vayan por esa calle.', en: 'Don\'t go down that street. (to a group)' },
            { es: 'Sea paciente, por favor.', en: 'Be patient, please.' },
            { es: 'No sean tímidos.', en: 'Don\'t be shy. (to a group)' },
            { es: 'Esté tranquilo.', en: 'Stay calm. / Don\'t worry.' },
            { es: 'Déme un café, por favor.', en: 'Give me a coffee, please. (with pronoun attached — preview of next lesson)' },
            { es: 'Sepa que estamos aquí para ayudarle.', en: 'Know that we\'re here to help you.' }
          ]
        },
        {
          type: 'tip',
          heading: 'When to use usted commands in <em>real life</em>',
          body: 'Usted commands are everywhere in real-world Spanish situations. You\'ll use them constantly when:<br><br>• <strong>Talking to a waiter/server:</strong> <em>"Tráigame la cuenta, por favor."</em> (Bring me the check, please.)<br>• <strong>Talking to a taxi driver:</strong> <em>"Pare aquí, por favor."</em> (Stop here, please.) / <em>"Lléveme al aeropuerto."</em> (Take me to the airport.)<br>• <strong>At a store:</strong> <em>"Muéstreme ese, por favor."</em> (Show me that one, please.)<br>• <strong>Asking for directions:</strong> <em>"Disculpe, ¿dígame cómo llego al hotel?"</em> (Excuse me, tell me how to get to the hotel?)<br>• <strong>To a stranger you bump into:</strong> <em>"Perdóneme."</em> (Excuse me / I\'m sorry.)<br><br>The <strong>"por favor"</strong> at the end is almost always added. Even though the command is grammatically formal/polite, Spanish speakers typically soften commands further with "por favor" to be polite. Skipping it sounds curt.<br><br>Also: in many Latin American countries, especially Colombia and parts of Central America, people use usted even with friends and family — it\'s a marker of warmth and respect, not necessarily distance. Don\'t assume usted always means "formal stranger."'
        },
        {
          type: 'tip',
          heading: '<em>Ustedes</em> in Latin America vs. Spain',
          body: 'Important geographic note that affects ALL plural commands:<br><br>• In <strong>Latin America</strong> (and the Caribbean, US), <em>ustedes</em> is the ONLY plural "you" — used for ANY group, whether your best friends or a roomful of strangers. There\'s no separate informal/formal distinction for groups.<br>• In <strong>Spain</strong>, <em>ustedes</em> is reserved for formal groups (a board of directors, a roomful of strangers). For informal groups of friends/family, Spaniards use <em>vosotros</em>, which has its own command forms (¡venid! ¡comed! ¡salid!).<br><br>For students learning Spanish in the US, you\'ll basically only use ustedes for ALL plural "you" — which is simpler. If you travel to Spain, you\'ll hear vosotros but can usually get by with ustedes (Spaniards will understand you, even if they\'d say it differently).<br><br>This lesson focuses on ustedes since that\'s what\'s most useful for our region. The Vosotros Commands as a separate topic would only matter for travelers to Spain.'
        },
        {
          heading: 'Side-by-side: <em>tú vs. usted</em> commands',
          body: 'It helps to see how the same idea changes form when you switch from informal to formal "you":',
          conjugation: [
            ['<strong>"speak!"</strong>', 'tú: <em>¡habla!</em> · usted: <em>¡hable!</em>'],
            ['<strong>"don\'t speak"</strong>', 'tú: <em>no hables</em> · usted: <em>no hable</em>'],
            ['<strong>"come!"</strong>', 'tú: <em>¡ven!</em> · usted: <em>¡venga!</em>'],
            ['<strong>"go!"</strong>', 'tú: <em>¡ve!</em> · usted: <em>¡vaya!</em>'],
            ['<strong>"be!"</strong>', 'tú: <em>¡sé!</em> · usted: <em>¡sea!</em>'],
            ['<strong>"do it!"</strong>', 'tú: <em>¡haz!</em> · usted: <em>¡haga!</em>'],
            ['<strong>"leave!"</strong>', 'tú: <em>¡sal!</em> · usted: <em>¡salga!</em>'],
            ['<strong>"don\'t worry"</strong>', 'tú: <em>no te preocupes</em> · usted: <em>no se preocupe</em>']
          ]
        },
        {
          type: 'mistakes',
          heading: 'Usted command <em>traps</em>',
          body: 'Where students slip:',
          items: [
            'Using the <strong>tú command form</strong> with usted — wrong. <em>"¡Habla más despacio, señor!"</em> sounds rude. The formal form is <em>"¡Hable más despacio, por favor!"</em>',
            'Forgetting that <strong>affirmative and negative use the same form</strong> — wrong to overthink. <em>Hable / No hable</em> use the SAME verb form. No different "negative usted" to memorize.',
            'Writing <strong>"de"</strong> instead of <strong>"dé"</strong> — accent matters. <em>"De su nombre"</em> means "of your name." <em>"Dé su nombre"</em> means "give your name" (command). The accent is required.',
            'Mixing up <strong>ustedes vs. vosotros</strong> in Spain — wrong for the context. In Spain, telling your friends "¡vengan!" sounds overly formal. Use vosotros there. In Latin America, ustedes works for everyone.',
            'Forgetting <strong>stem-changes carry over</strong> — wrong. <em>"Cierra la puerta"</em> (tú) becomes <em>"Cierre la puerta"</em> (usted), not <em>"Cerre la puerta."</em> Same stem change, different ending.',
            'Forgetting the <strong>five irregular usted commands</strong> — common error. <em>"Ire al banco"</em> doesn\'t work; the correct is <em>"Vaya al banco."</em> Memorize: dé, vaya, sea, esté, sepa.',
            'Forgetting <strong>"por favor"</strong> in real speech — grammatically optional, but skipping it sounds curt. Spanish speakers almost always soften usted commands with "por favor" or "si es tan amable" (if you\'d be so kind).',
            'Using <strong>usted</strong> when <strong>tú</strong> is expected — sometimes feels weird. If you\'re talking to a teenage cashier, defaulting to usted might come across as overly stiff. In Latin America, gauge the context. In Spain, usted is more sharply reserved for genuinely formal situations.',
            'Pluralizing the wrong word — wrong. <em>"Hables los nombres"</em> doesn\'t work because it mixes tú singular with plural object. The verb agrees with the SUBJECT (the person you\'re commanding), not the object. <em>"Diga sus nombres"</em> (formal singular) or <em>"Digan sus nombres"</em> (group).'
          ]
        }
      ],
      quiz: [
        { q: 'How do you say "Come here, please" formally to a stranger? (usted)', options: [
          { text: '¡Ven aquí, por favor!', correct: false },
          { text: '¡Venga aquí, por favor!', correct: true },
          { text: '¡Vienes aquí, por favor!', correct: false }
        ]},
        { q: 'How do you say "Don\'t be late" to a group of students? (ustedes)', options: [
          { text: 'No sean tarde.', correct: false },
          { text: 'No lleguen tarde.', correct: true },
          { text: 'No llegan tarde.', correct: false }
        ]},
        { q: 'Which of these is an IRREGULAR usted command?', options: [
          { text: 'hable (speak!)', correct: false },
          { text: 'coma (eat!)', correct: false },
          { text: 'vaya (go!)', correct: true }
        ]}
      ]
    },

    // ---------- LESSON 45: Reflexive Commands ----------
    {
      id: 'reflexive-commands',
      num: '45',
      level: 'sp2',
      title: 'Reflexive <em>commands</em>',
      tag: 'Imperatives · Reflexives',
      summary: 'How to tell someone to wake up, sit down, calm down, or get going — commands with reflexive verbs work differently. Affirmative ATTACHES the pronoun (with an accent!). Negative SEPARATES it. Master this pattern and you\'ll have direct/double object pronouns sorted out too.',
      sections: [
        {
          heading: 'Why <em>reflexive commands</em> deserve their own lesson',
          body: 'You already know reflexive verbs — <em>levantarse</em> (to get oneself up), <em>sentarse</em> (to sit oneself down), <em>callarse</em> (to shut oneself up). And you know reflexive verbs need their pronoun (me, te, se, nos, se).<br><br>What\'s NEW with commands is <strong>where the pronoun goes</strong>:<br><br>• <strong>Affirmative commands:</strong> pronoun ATTACHES to the END of the verb → <em>¡levántate!</em><br>• <strong>Negative commands:</strong> pronoun goes BEFORE the verb → <em>¡no te levantes!</em><br><br>This sounds small. It\'s not. This pattern — attach in affirmative, separate in negative — is the SAME rule that governs ALL command-with-pronoun combinations (direct objects, indirect objects, double pronouns, all of them). Master it here with reflexives, and you\'ve mastered it for everything else.'
        },
        {
          heading: 'Affirmative reflexive <em>tú commands</em>',
          body: 'Take the affirmative tú command, attach the reflexive pronoun "te" to the end. The verb form ITSELF doesn\'t change — only where the pronoun goes.<br><br>One catch: when you attach the pronoun, the word gets longer. Spanish needs to PRESERVE the original stress. That usually means adding an accent mark on the stressed vowel of the original verb.',
          conjugation: [
            ['levantarse (to get up)', 'levanta + te → <strong>¡levántate!</strong> (accent on the original stress)'],
            ['sentarse (to sit down)', 'sienta + te → <strong>¡siéntate!</strong>'],
            ['callarse (to be quiet)', 'calla + te → <strong>¡cállate!</strong>'],
            ['vestirse (to get dressed)', 'viste + te → <strong>¡vístete!</strong>'],
            ['despertarse (to wake up)', 'despierta + te → <strong>¡despiértate!</strong>'],
            ['ducharse (to take a shower)', 'ducha + te → <strong>¡dúchate!</strong>'],
            ['cepillarse (to brush)', 'cepilla + te → <strong>¡cepíllate!</strong>'],
            ['irse (to leave / go away)', 've + te → <strong>¡vete!</strong> (one syllable + te, no accent needed)']
          ]
        },
        {
          heading: 'Examples in <em>action</em>',
          body: '',
          examples: [
            { es: '¡Levántate! Ya son las siete.', en: 'Get up! It\'s already seven.' },
            { es: '¡Cállate! Estoy hablando por teléfono.', en: 'Be quiet! I\'m on the phone.' },
            { es: '¡Vístete rápido!', en: 'Get dressed quickly!' },
            { es: '¡Lávate las manos antes de comer.', en: 'Wash your hands before eating.' },
            { es: '¡Vete a tu cuarto!', en: 'Go to your room! (lit. take yourself off)' },
            { es: '¡Siéntate aquí conmigo.', en: 'Sit down here with me.' }
          ]
        },
        {
          heading: 'Negative reflexive <em>tú commands</em>',
          body: 'For negative reflexive commands, two changes happen at once:<br><br>1. The verb form switches to the negative tú command (subjunctive form): <em>levantes, sientes, calles, vistas…</em><br>2. The reflexive pronoun MOVES to BEFORE the verb (after "no"): <em>no TE levantes, no TE sientes</em>.<br><br>And — because the pronoun is now a separate word — there\'s NO accent added. The verb keeps its natural stress.',
          conjugation: [
            ['levantarse', '<strong>no te levantes</strong> "don\'t get up"'],
            ['sentarse', '<strong>no te sientes</strong> "don\'t sit down"'],
            ['callarse', '<strong>no te calles</strong> "don\'t be quiet"'],
            ['vestirse', '<strong>no te vistas</strong> "don\'t get dressed"'],
            ['despertarse', '<strong>no te despiertes</strong> "don\'t wake up"'],
            ['ducharse', '<strong>no te duches</strong> "don\'t shower"'],
            ['cepillarse', '<strong>no te cepilles</strong> "don\'t brush"'],
            ['irse', '<strong>no te vayas</strong> "don\'t leave"']
          ]
        },
        {
          heading: 'Side-by-side: <em>affirmative vs. negative</em>',
          body: 'The contrast is dramatic. Notice what changes (and what doesn\'t):',
          conjugation: [
            ['"get up!"', 'AFF: <em>¡levántate!</em> · NEG: <em>¡no te levantes!</em>'],
            ['"sit down!"', 'AFF: <em>¡siéntate!</em> · NEG: <em>¡no te sientes!</em>'],
            ['"be quiet!"', 'AFF: <em>¡cállate!</em> · NEG: <em>¡no te calles!</em>'],
            ['"leave!"', 'AFF: <em>¡vete!</em> · NEG: <em>¡no te vayas!</em>']
          ]
        },
        {
          heading: 'Reflexive <em>usted commands</em>',
          body: 'Usted commands work the same way as tú commands — only the pronoun changes. Instead of <em>te</em>, you use <em>se</em> (since usted is formally third-person).',
          conjugation: [
            ['levantarse', '¡<strong>levántese</strong>! / no <strong>se</strong> levante'],
            ['sentarse', '¡<strong>siéntese</strong>! / no <strong>se</strong> siente'],
            ['vestirse', '¡<strong>vístase</strong>! / no <strong>se</strong> vista'],
            ['preocuparse', '¡<strong>no se preocupe</strong>! "don\'t worry" (formal — very common)'],
            ['callarse', '¡<strong>cállese</strong>! / no <strong>se</strong> calle'],
            ['irse', '¡<strong>váyase</strong>! / no <strong>se</strong> vaya']
          ]
        },
        {
          heading: 'Reflexive <em>ustedes commands</em>',
          body: 'Same pattern for plural commands. The pronoun is <em>se</em> (since ustedes uses third-person plural).',
          examples: [
            { es: '¡Siéntense, por favor!', en: 'Please sit down! (to a group)' },
            { es: '¡Cállense, niños!', en: 'Be quiet, kids!' },
            { es: '¡No se preocupen!', en: 'Don\'t worry! (to a group)' },
            { es: '¡Vístanse rápido, llegamos tarde!', en: 'Get dressed quickly, we\'re late!' },
            { es: '¡No se duerman en clase!', en: 'Don\'t fall asleep in class!' }
          ]
        },
        {
          type: 'tip',
          heading: 'The <em>accent rule</em>, demystified',
          body: 'Why does <em>¡levántate!</em> have an accent when <em>levanta</em> (without the pronoun) doesn\'t?<br><br>Spanish has a default stress rule: words ending in a vowel, -n, or -s have stress on the second-to-last syllable. <em>"Levanta"</em> = le-VAN-ta. Stress on "VAN." Normal.<br><br>When you attach <em>te</em>, the word becomes <em>"levantate"</em> = le-van-TA-te. Default rule would now put stress on "TA" — wrong! Spanish wants to PRESERVE the original "VAN" stress, so we mark it: <em>levántate</em>. The accent forces the stress to stay where it belongs.<br><br>Quick mental check: count syllables BACK from the end. Spanish wants the stress on the 3rd-from-last syllable here. That\'s called <strong>esdrújula</strong> — and esdrújulas ALWAYS take an accent.<br><br>Quick rule of thumb: <strong>any time you attach a pronoun to a 2+ syllable affirmative command, you almost always need to add an accent.</strong> One-syllable commands like <em>"vete"</em> stay simple (only 2 syllables total, default rule keeps the stress correctly). Everything else: add the accent on the original stressed vowel.'
        },
        {
          type: 'tip',
          heading: 'Reflexive commands you\'ll hear <em>constantly</em>',
          body: 'These are so common in everyday Spanish that you\'ll start to recognize them without thinking:<br><br>• <strong>¡Cállate!</strong> / <strong>¡Cállese!</strong> = Shut up! / Be quiet! (informal/formal)<br>• <strong>¡Tranquilízate!</strong> / <strong>¡Cálmate!</strong> = Calm down!<br>• <strong>¡Apúrate!</strong> = Hurry up! (heard EVERYWHERE in Latin America)<br>• <strong>¡Date prisa!</strong> = Hurry up! (more common in Spain)<br>• <strong>¡Acuérdate de…</strong> = Remember to… <em>(¡Acuérdate de la tarea!)</em><br>• <strong>¡Cuídate!</strong> = Take care! (very common goodbye)<br>• <strong>¡No te preocupes!</strong> = Don\'t worry!<br>• <strong>¡Olvídalo!</strong> = Forget it! (technically not reflexive but uses the same attachment pattern)<br><br>The last one — <em>¡Olvídalo!</em> — is a sneaky preview of the next lesson. It uses the direct object pronoun <em>lo</em> attached to the command, with an accent. Same exact pattern as reflexives. Master reflexives here and that lesson will feel easy.'
        },
        {
          type: 'mistakes',
          heading: 'Reflexive command <em>traps</em>',
          body: 'Where students slip:',
          items: [
            'Forgetting the <strong>accent</strong> in affirmative — wrong. <em>"¡Levantate!"</em> is missing the accent. Should be <em>"¡Levántate!"</em> 2+ syllable commands with attached pronouns almost always need accents.',
            'Putting the pronoun BEFORE in <strong>affirmative</strong> — wrong. <em>"¡Te levanta!"</em> doesn\'t work. Affirmative ATTACHES the pronoun to the end. Negative is the one that separates.',
            'Putting the pronoun AFTER in <strong>negative</strong> — wrong. <em>"¡No levántate!"</em> doesn\'t work. Negative SEPARATES the pronoun — it goes between "no" and the verb. <em>"¡No te levantes!"</em>',
            'Using <strong>te</strong> with an usted command — wrong. The pronoun has to match the verb form. Usted uses <em>se</em>, not <em>te</em>. <em>"¡Levántese!"</em> with se, not <em>"¡Levántate!"</em>',
            'Adding an accent <strong>where it doesn\'t belong</strong> — wrong. <em>"¡Véte!"</em> doesn\'t need an accent (it\'s only 2 syllables, default rule keeps stress right). Just <em>"¡Vete!"</em>',
            'Adding an accent <strong>in negative</strong> — wrong. The pronoun is separated from the verb in negative, so there\'s nothing to "preserve" — verb keeps its normal stress. <em>"¡No te lévantes!"</em> is wrong. Just <em>"¡No te levantes!"</em>',
            'Using the wrong <strong>reflexive pronoun</strong> for the verb — match the SUBJECT. Tú → te. Usted → se. Ustedes → se. Nosotros → nos. Even "irse" follows this: ¡vete! (tú), ¡váyase! (usted), ¡váyanse! (ustedes), ¡vámonos! (nosotros).',
            'Confusing <strong>levanta</strong> (affirmative command form) with <strong>levantes</strong> (negative subjunctive form) — both are tú commands but only in different contexts. Affirmative uses the present-tense él/ella form. Negative uses the subjunctive form. Different forms, different uses.',
            'Forgetting the <strong>"no" itself</strong> — wrong. <em>"Te levantes"</em> alone doesn\'t mean anything as a command. The negative command requires "no" before the pronoun + verb. <em>"No te levantes."</em>'
          ]
        }
      ],
      quiz: [
        { q: 'How do you say "Sit down!" to a friend (tú)?', options: [
          { text: '¡Te sienta!', correct: false },
          { text: '¡Siéntate!', correct: true },
          { text: '¡Sienta te!', correct: false }
        ]},
        { q: 'How do you say "Don\'t worry!" to a group (ustedes)?', options: [
          { text: '¡No preocupense!', correct: false },
          { text: '¡No se preocupen!', correct: true },
          { text: '¡No preocúpense!', correct: false }
        ]},
        { q: 'Which is correctly written?', options: [
          { text: '¡Levántate!', correct: true },
          { text: '¡Levantate!', correct: false },
          { text: '¡Lévantate!', correct: false }
        ]}
      ]
    },

    // ---------- LESSON 46: Commands with Single Object Pronouns ----------
    {
      id: 'commands-single-pronouns',
      num: '46',
      level: 'sp2',
      title: 'Commands with <em>object pronouns</em>',
      tag: 'Imperatives · Pronouns',
      summary: 'Take a command, add ONE pronoun (direct or indirect — lo, la, le, me, te, nos…). Same attachment pattern as reflexives: ATTACH in affirmative (with accent), SEPARATE in negative. Once you have this, double pronouns are a small step.',
      sections: [
        {
          heading: 'The <em>same pattern</em>, new pronouns',
          body: 'You already know the pattern from reflexive commands:<br><br>• <strong>Affirmative:</strong> pronoun ATTACHES to the verb (with an accent on 2+ syllable commands)<br>• <strong>Negative:</strong> pronoun SEPARATES, goes before the verb<br><br>This lesson extends that pattern to <strong>direct and indirect object pronouns</strong>. Same rule. New pronouns.<br><br><strong>Direct object pronouns</strong> answer "what?" or "whom?" → me, te, <strong>lo, la</strong>, nos, os, <strong>los, las</strong><br><br><strong>Indirect object pronouns</strong> answer "to whom?" or "for whom?" → me, te, <strong>le</strong>, nos, os, <strong>les</strong>'
        },
        {
          heading: 'Affirmative: <em>attach the pronoun</em>',
          body: 'Take an affirmative command. Glue the pronoun directly onto the end. Add an accent on the originally-stressed vowel for 2+ syllable commands.',
          conjugation: [
            ['<em>come la pizza!</em> → <strong>¡cómela!</strong>', '"eat it!" (lo/la replaces "la pizza")'],
            ['<em>compra el libro!</em> → <strong>¡cómpralo!</strong>', '"buy it!" (lo replaces "el libro")'],
            ['<em>llama a María!</em> → <strong>¡llámala!</strong>', '"call her!" (la replaces "María")'],
            ['<em>dime la verdad!</em> → <strong>¡dímela!</strong>', '"tell it to me!" (me + la, but we\'ll see double pronouns next lesson — for now focus on single)'],
            ['<em>escribe a tu mamá!</em> → <strong>¡escríbele!</strong>', '"write to her!" (le replaces "a tu mamá")'],
            ['<em>habla a los profesores!</em> → <strong>¡háblales!</strong>', '"talk to them!" (les replaces "a los profesores")']
          ]
        },
        {
          heading: 'Examples in <em>action</em>',
          body: '',
          examples: [
            { es: '¡Cómpralo! Está en oferta.', en: 'Buy it! It\'s on sale. (lo = "el libro" or any masc. obj.)' },
            { es: '¡Cómela toda!', en: 'Eat it all! (la = "la sopa")' },
            { es: '¡Llámame esta noche!', en: 'Call me tonight! (me = direct object — me)' },
            { es: '¡Dime!', en: 'Tell me! / Talk to me! (literally "tell to me")' },
            { es: '¡Dale el regalo!', en: 'Give him/her the gift! (le = "to him/her")' },
            { es: '¡Escríbeles pronto!', en: 'Write to them soon! (les = "to them")' }
          ]
        },
        {
          heading: 'Negative: <em>separate the pronoun</em>',
          body: 'For negative commands, the pronoun goes BEFORE the verb. No accent needed (the verb keeps its natural stress, and the pronoun is a separate word).',
          conjugation: [
            ['<strong>no lo compres</strong>', '"don\'t buy it!"'],
            ['<strong>no la comas</strong>', '"don\'t eat it!"'],
            ['<strong>no me llames</strong>', '"don\'t call me!"'],
            ['<strong>no le digas nada</strong>', '"don\'t tell him/her anything"'],
            ['<strong>no nos esperes</strong>', '"don\'t wait for us"'],
            ['<strong>no los traigas</strong>', '"don\'t bring them"']
          ]
        },
        {
          heading: 'Negative in <em>action</em>',
          body: '',
          examples: [
            { es: '¡No lo compres! Es muy caro.', en: 'Don\'t buy it! It\'s too expensive.' },
            { es: '¡No la mires!', en: 'Don\'t look at her!' },
            { es: '¡No me digas eso.', en: 'Don\'t tell me that.' },
            { es: '¡No le pidas dinero a tu hermano.', en: 'Don\'t ask your brother for money. (le = "to your brother")' },
            { es: '¡No los olvides!', en: 'Don\'t forget them!' },
            { es: '¡No me dejes solo.', en: 'Don\'t leave me alone.' }
          ]
        },
        {
          heading: 'Same rule, <em>usted commands</em>',
          body: 'The pattern works identically with formal commands. Just swap the verb form.',
          conjugation: [
            ['<em>traiga la cuenta!</em> → <strong>¡tráigala!</strong>', '"bring it (the bill)!"'],
            ['<em>llame al doctor!</em> → <strong>¡llámelo!</strong>', '"call him (the doctor)!"'],
            ['<em>déme un café!</em> → <strong>¡démelo!</strong>', '"give it to me!" (preview of double pronouns)'],
            ['<strong>no lo haga</strong>', '"don\'t do it" (negative, pronoun separates)'],
            ['<strong>no me llame tarde</strong>', '"don\'t call me late"'],
            ['<strong>no le diga la verdad</strong>', '"don\'t tell him/her the truth"']
          ]
        },
        {
          type: 'tip',
          heading: 'The <em>accent rule</em>, refined for pronouns',
          body: 'You learned in the reflexive lesson that 2+ syllable affirmative commands need an accent when a pronoun attaches. Same rule applies here, but let\'s look at it precisely:<br><br>• <strong>1-syllable command + 1 pronoun = 2 syllables total → usually NO accent needed.</strong><br>  Examples: <em>dame</em> (give me), <em>dile</em> (tell him), <em>hazlo</em> (do it), <em>ponlo</em> (put it), <em>vete</em> (leave)<br><br>• <strong>2-syllable command + 1 pronoun = 3 syllables → ACCENT REQUIRED.</strong><br>  Examples: <em>cómpralo</em> (buy it), <em>cómela</em> (eat it), <em>llámame</em> (call me), <em>dímelo</em> (tell it to me)<br><br>• <strong>3-syllable command + 1 pronoun = 4 syllables → ACCENT REQUIRED.</strong><br>  Examples: <em>repítelo</em> (repeat it), <em>regálamelo</em> (already 5 syllables — and double pronoun, next lesson)<br><br>The accent goes on the <strong>vowel that was already stressed in the original command</strong>. <em>Compra</em> had stress on "com" — so <em>cómpralo</em> keeps that accent. <em>Come</em> had stress on "co" — so <em>cómela</em> keeps it there.<br><br>Quick test: if attaching pronoun makes the word 3+ syllables, you almost certainly need to mark the accent.'
        },
        {
          type: 'tip',
          heading: 'When to use <em>lo</em> vs. <em>le</em>',
          body: 'This is a real source of confusion. The honest distinction:<br><br>• <strong>lo, la, los, las</strong> are <strong>direct objects</strong> — replace WHAT or WHOM. The thing the action happens TO.<br>• <strong>le, les</strong> are <strong>indirect objects</strong> — replace TO WHOM or FOR WHOM. The recipient.<br><br>Try this test: ask "what?" after the verb.<br>• "Buy WHAT?" → "the book" → <em>el libro</em> → direct object → <strong>cómpralo</strong>.<br>• "Give TO WHOM?" → "to him" → <em>a él</em> → indirect object → <strong>dale</strong>.<br><br>Some verbs naturally take direct objects (comer, comprar, ver, beber, leer, mirar). Some take indirect (decir, dar, escribir, mandar, hablar — when followed by "to someone").<br><br>Many verbs can take BOTH — that\'s where double object pronouns come in (next lesson). For now: if there\'s ONE object, identify whether it\'s the thing being acted upon (direct) or the recipient (indirect).<br><br><strong>Heads up:</strong> in Spain (especially central and northern), many speakers use <em>le</em> as a direct object pronoun for masculine people. <em>"¿Viste a Juan? — Sí, le vi."</em> instead of <em>"lo vi."</em> This is called <em>leísmo</em> and is technically accepted by the RAE for masculine human direct objects. In Latin America, the standard <em>lo/la</em> direct-object system is more consistent. We\'ll use the Latin American standard in this lesson.'
        },
        {
          type: 'tip',
          heading: 'Common command + pronoun phrases',
          body: 'These will start to feel natural with practice:<br><br>• <strong>¡Dime!</strong> = Tell me! / Talk to me! (Spanish answers a friend\'s "hey…" with this constantly)<br>• <strong>¡Dame!</strong> / <strong>¡Dame un momento!</strong> = Give me! / Give me a minute!<br>• <strong>¡Mírame!</strong> = Look at me!<br>• <strong>¡Escúchame!</strong> = Listen to me!<br>• <strong>¡Espérame!</strong> = Wait for me!<br>• <strong>¡Llámame!</strong> = Call me!<br>• <strong>¡Olvídalo!</strong> = Forget it!<br>• <strong>¡Hazlo!</strong> = Do it!<br>• <strong>¡Cómelo todo!</strong> = Eat it all!<br>• <strong>¡Tómalo con calma!</strong> = Take it easy!<br><br>Negative versions you\'ll hear constantly:<br>• <strong>¡No me digas!</strong> = You don\'t say! / No way!<br>• <strong>¡No te preocupes!</strong> = Don\'t worry! (technically reflexive)<br>• <strong>¡No me molestes!</strong> = Don\'t bother me!<br>• <strong>¡No lo sé!</strong> = I don\'t know it! (wait, this is a statement not a command — but the lo placement before "sé" is the same pattern)'
        },
        {
          type: 'mistakes',
          heading: 'Object pronoun command <em>traps</em>',
          body: 'Where students slip:',
          items: [
            'Putting the pronoun BEFORE in <strong>affirmative</strong> — wrong. <em>"¡Lo come!"</em> sounds like a statement (he/she eats it). For a command: <em>"¡Cómelo!"</em> with the pronoun attached.',
            'Putting the pronoun AFTER in <strong>negative</strong> — wrong. <em>"¡No cómelo!"</em> doesn\'t work. Negative separates: <em>"¡No lo comas!"</em>',
            'Forgetting the <strong>accent</strong> when attaching to a 2+ syllable command — wrong. <em>"¡Compralo!"</em> is missing the accent. Should be <em>"¡Cómpralo!"</em>',
            'Adding an accent when <strong>none is needed</strong> (1-syllable command + 1 pronoun) — wrong. <em>"¡Dáme!"</em> shouldn\'t have an accent. Just <em>"¡Dame!"</em> (2 syllables total, default stress works fine).',
            'Using <strong>lo for a feminine direct object</strong> — wrong. <em>"Cómprala"</em> for "la pizza," not <em>"cómpralo."</em> Pronouns must agree in gender with what they replace.',
            'Using <strong>lo or la when you need le</strong> — wrong. <em>"Hábla a María"</em> takes an indirect object (talk TO María). So: <em>"Háblale"</em>, not <em>"Háblala."</em> Talking-TO someone is indirect.',
            'Mismatching pronoun and verb form — wrong. <em>"¡Cómalo!"</em> mixes tú command stem (com-) with usted ending. Should be <em>"¡Cómela!"</em> (tú) or <em>"¡Cómala!"</em> (usted).',
            'Forgetting that <strong>negative commands use subjunctive</strong> — wrong. <em>"¡No lo come!"</em> uses the present-tense form. Negative needs subjunctive: <em>"¡No lo comas!"</em>',
            'Translating English word order directly — wrong. English says "buy it" (command + pronoun). Spanish in affirmative ALSO attaches: <em>cómpralo</em>. But in negative, English keeps the same order ("don\'t buy it") while Spanish moves the pronoun: <em>no lo compres</em>. Different rules for different polarities.',
            'Using a <strong>full noun phrase along with the pronoun</strong> — usually wrong (or redundant). <em>"¡Cómpralo el libro!"</em> sounds odd because you\'ve already said "lo" (it). Either use the pronoun OR the full noun, not both. <em>"¡Compra el libro!"</em> OR <em>"¡Cómpralo!"</em>'
          ]
        }
      ],
      quiz: [
        { q: 'How do you say "Buy it!" (tú command, referring to "el libro")?', options: [
          { text: '¡Lo compra!', correct: false },
          { text: '¡Cómpralo!', correct: true },
          { text: '¡Compralo!', correct: false }
        ]},
        { q: 'How do you say "Don\'t tell me!" (tú command)?', options: [
          { text: '¡No dime!', correct: false },
          { text: '¡No me digas!', correct: true },
          { text: '¡No me dices!', correct: false }
        ]},
        { q: 'Which pronoun matches "Call HER!" → ¡Llám___! (referring to María)', options: [
          { text: '¡Llámalo!', correct: false },
          { text: '¡Llámala!', correct: true },
          { text: '¡Llámale!', correct: false }
        ]}
      ]
    },

    // ---------- LESSON 47: Commands with Double Object Pronouns ----------
    {
      id: 'commands-double-pronouns',
      num: '47',
      level: 'sp2',
      title: 'Commands with <em>double object pronouns</em>',
      tag: 'Imperatives · Double Pronouns',
      summary: 'When a command has BOTH an indirect object AND a direct object, you stack the pronouns: "give it to me!" → ¡dámelo! Order matters (indirect comes first). And the famous le→se rule: when both pronouns start with L, the first one becomes "se" to avoid two L-sounds in a row.',
      sections: [
        {
          heading: 'When you need <em>two pronouns</em>',
          body: 'You\'ve been building toward this. So far you can say:<br><br>• <em>Dale el regalo.</em> = Give him the gift. (le = indirect, "el regalo" = direct noun)<br>• <em>Dáselo.</em> = Give it to him. (BOTH replaced with pronouns)<br><br>The pattern: when you replace BOTH the recipient AND the thing, you need TWO pronouns. The result is what Spanish calls a <strong>double object pronoun</strong> construction.<br><br>This is the most common pattern in everyday spoken Spanish. Speakers love efficiency — saying "give it to me" with one short word (dámelo) is faster than the noun-heavy version.<br><br>You\'ve actually already SEEN double pronouns in earlier lessons: <em>¡dímelo!</em> (tell it to me!) is a double pronoun command. Now we\'ll formalize the rules.'
        },
        {
          heading: 'The two key <em>rules</em>',
          body: '<strong>Rule 1 — Order: indirect ALWAYS comes before direct.</strong><br><br>Indirect (the recipient) goes first. Direct (the thing being acted on) goes second. Think of it as "to whom" before "what."<br><br>• me + lo, te + lo, se + lo, nos + lo, se + lo<br>• me + la, te + la, se + la, nos + la, se + la<br>• me + los, te + los, se + los, nos + los, se + los<br>• me + las, te + las, se + las, nos + las, se + las<br><br>Notice the pattern: indirect pronoun (1st position) + direct pronoun (2nd position).<br><br><strong>Rule 2 — The le → se transformation.</strong><br><br>Here\'s the twist: when both pronouns would start with L (le + lo, le + la, le + los, le + las, les + lo, etc.), Spanish doesn\'t say "lelo" — that\'s phonetically clunky. Instead, the first L pronoun changes to SE.<br><br>• <em>le + lo → se lo</em><br>• <em>le + la → se la</em><br>• <em>les + los → se los</em><br>• <em>les + las → se las</em><br><br>This is called the "le → se" rule. It applies whenever <em>le</em> or <em>les</em> would meet a third-person direct object pronoun (lo, la, los, las).'
        },
        {
          heading: 'Building <em>step by step</em>',
          body: 'Let\'s build a double-pronoun command piece by piece.',
          conjugation: [
            ['Step 1: Original sentence', '<em>Da el regalo a tu hermano.</em> (Give the gift to your brother.)'],
            ['Step 2: Replace direct object', '<em>Da<strong>lo</strong> a tu hermano.</em> (Give it to your brother.)'],
            ['Step 3: Replace indirect object too', '<em>Da<strong>le</strong><strong>lo</strong>.</em> — but wait, two Ls in a row!'],
            ['Step 4: Apply le → se rule', '<em>Da<strong>se</strong><strong>lo</strong>.</em> = ¡Dáselo! "Give it to him!"'],
            ['Final: Add accent for stress', '<strong>¡Dáselo!</strong> (3 syllables, original stress on "da" preserved)']
          ]
        },
        {
          heading: 'Examples — <em>affirmative tú</em>',
          body: '',
          examples: [
            { es: '¡Dámelo!', en: 'Give it to me! (me + lo)' },
            { es: '¡Tráemelos!', en: 'Bring them to me! (me + los)' },
            { es: '¡Cómpramela!', en: 'Buy it for me! (me + la)' },
            { es: '¡Dímelo!', en: 'Tell it to me! / Say it to me!' },
            { es: '¡Dáselo!', en: 'Give it to him/her! (le → se + lo)' },
            { es: '¡Háganselas!', en: 'Do them for them! (ustedes + les + las → se + las)' },
            { es: '¡Mándaselos!', en: 'Send them to her! (le → se + los)' },
            { es: '¡Léenoslo!', en: 'Read it to us! (nos + lo)' }
          ]
        },
        {
          heading: 'Examples — <em>negative tú</em>',
          body: 'Same rules apply, but pronouns separate from the verb and go BEFORE.',
          examples: [
            { es: 'No me lo digas.', en: 'Don\'t tell it to me.' },
            { es: 'No me la compres.', en: 'Don\'t buy it for me.' },
            { es: 'No se lo des.', en: 'Don\'t give it to him/her. (le → se + lo)' },
            { es: 'No te los pongas.', en: 'Don\'t put them on. (reflexive te + direct los)' },
            { es: 'No nos lo cuentes.', en: 'Don\'t tell it to us.' },
            { es: 'No se los mandes.', en: 'Don\'t send them to them. (les → se + los)' }
          ]
        },
        {
          heading: 'Examples — <em>usted commands</em>',
          body: 'Formal commands work identically — same pronoun order, same le→se rule, same attachment in affirmative.',
          examples: [
            { es: '¡Démelo, por favor.', en: 'Give it to me, please. (formal — me + lo, attached)' },
            { es: '¡Tráigamela cuando pueda.', en: 'Bring it to me when you can. (formal — me + la)' },
            { es: '¡Cómpresela mañana.', en: 'Buy it for her tomorrow. (formal — le → se + la)' },
            { es: 'No se lo diga.', en: 'Don\'t tell it to him/her. (formal, negative)' },
            { es: 'No me lo mande por correo.', en: 'Don\'t send it to me by mail.' },
            { es: '¡Páseme la sal, por favor.', en: 'Pass me the salt, please. (me + sal as full noun — only ONE pronoun here, comparison)' }
          ]
        },
        {
          type: 'tip',
          heading: 'Why does <em>le → se</em>?',
          body: 'It\'s purely phonetic — Spanish doesn\'t like saying two L-pronouns in a row.<br><br>If we tried to say <em>"dáleelo"</em> or <em>"dálelo"</em>, the "le-lo" sequence sounds clunky and unclear. So Spanish developed this elegant fix: when "le" or "les" meets "lo," "la," "los," or "las," the FIRST one (the indirect) changes to "se" — which is phonetically distinct from any L sound.<br><br>This same rule applies to ALL constructions with double object pronouns, not just commands. You\'ll see it in statements too:<br><br>• <em>Le doy el libro a Juan.</em> = I give the book to Juan.<br>• <em>Se lo doy.</em> = I give it to him. (le → se + lo)<br><br>The "se" here has NOTHING to do with the reflexive "se" — it just looks identical. Spanish has multiple "se"s: reflexive se, impersonal se, passive se, and now this "le-substitute" se. Context tells you which one is happening.<br><br>If you want, you can clarify who the "se" refers to: <em>"Dáselo a él"</em> (give it to HIM) or <em>"Dáselo a ella"</em> (give it to HER) or <em>"Dáselo a ellos"</em> (give it to THEM). The "a él/a ella/a ellos" tag isn\'t required, but Spanish speakers add it when context isn\'t clear.'
        },
        {
          type: 'tip',
          heading: 'The <em>accent rule</em> with two pronouns',
          body: 'With ONE pronoun, we said: 2+ syllable affirmative commands need an accent.<br><br>With TWO pronouns attached, the word gets even longer. The accent rule is now even MORE consistent — almost every double-pronoun affirmative command needs an accent. Count syllables:<br><br>• <em>Dame</em> (2 syllables, no accent) + <em>lo</em> = <em>Dámelo</em> (3 syllables, accent now required)<br>• <em>Dí</em> (1 syllable) + <em>me</em> + <em>lo</em> = <em>Dímelo</em> (3 syllables, accent required)<br>• <em>Cómpra</em> (was 2 syllables WITH accent on com) + <em>me</em> + <em>lo</em> = <em>Cómpramelo</em> (4 syllables, accent still needed on "com")<br>• <em>Trae</em> (1 syllable command) + <em>me</em> + <em>la</em> = <em>Tráemela</em> (3 syllables, accent on "tra")<br><br>The accent goes on the <strong>vowel that was originally stressed in the bare command form</strong> — it doesn\'t shift. Compra had stress on "com" → cómpramelo keeps stress on "com." Just mark the accent so it stays put despite the extra syllables.<br><br>Quick mental shortcut: <strong>any affirmative command with TWO pronouns attached needs an accent.</strong> No exceptions you\'ll encounter in normal Spanish.'
        },
        {
          type: 'tip',
          heading: 'Translating <em>real sentences</em>',
          body: 'When you encounter English sentences like "Give it to me!" or "Tell them to her!", here\'s a step-by-step approach:<br><br>1. <strong>Identify the indirect object</strong> (the recipient — "to whom" / "for whom").<br>2. <strong>Identify the direct object</strong> (the thing — "what").<br>3. <strong>Pick the pronouns:</strong> me/te/le/nos/les for indirect, lo/la/los/las for direct.<br>4. <strong>Check the gender</strong> of the direct object to pick lo/la/los/las.<br>5. <strong>Apply le → se</strong> if both are L pronouns.<br>6. <strong>Determine affirmative or negative</strong> → attach with accent or separate before verb.<br><br>Example: "Don\'t give the book to María."<br>1. Indirect = "to María" → le<br>2. Direct = "the book" → lo (el libro is masc.)<br>3. Pronouns: le + lo<br>4. Direct is masc. singular → lo confirmed<br>5. le + lo → se + lo (le→se rule)<br>6. Negative → separate: <strong>"No se lo des."</strong><br><br>Example: "Buy them (the apples) for me!"<br>1. Indirect = "for me" → me<br>2. Direct = "them (the apples)" → las (las manzanas, fem. plural)<br>3. Pronouns: me + las<br>4. No L-clash, so no le→se<br>5. Affirmative tú → attach: <strong>"¡Cómpramelas!"</strong> (accent on "com")'
        },
        {
          type: 'mistakes',
          heading: 'Double pronoun command <em>traps</em>',
          body: 'Where students slip:',
          items: [
            '<strong>Wrong order</strong> — putting direct before indirect. <em>"¡Dálome!"</em> is wrong. Indirect comes FIRST: <em>"¡Dámelo!"</em>',
            '<strong>Forgetting le → se</strong> — wrong. <em>"¡Dálelo!"</em> doesn\'t work. When le meets lo, le becomes se: <em>"¡Dáselo!"</em>',
            '<strong>Applying le → se when not needed</strong> — wrong. The rule ONLY applies when BOTH pronouns would start with L. <em>"¡Dáseme!"</em> when you mean "give it to me" is wrong — me doesn\'t start with L, so le doesn\'t need to change: <em>"¡Dámelo!"</em>',
            '<strong>Forgetting the accent</strong> in affirmative — wrong. <em>"¡Damelo!"</em> is missing the accent. Should be <em>"¡Dámelo!"</em> Three+ syllable command-with-pronouns ALWAYS need an accent.',
            '<strong>Adding accent in negative</strong> — wrong. <em>"¡No se lo des!"</em> is correct. Don\'t write <em>"¡No se lo dés!"</em> — when pronouns are separated, the verb keeps its natural stress.',
            '<strong>Confusing "se" types</strong> — the "se" in <em>Dáselo</em> is NOT reflexive. It\'s the replacement for "le" (or "les"). Different "se" than <em>"Cállate"</em>. Same letters, different grammatical role.',
            '<strong>Gender mismatch</strong> — wrong. <em>"¡Cómpramelo!"</em> when referring to "la manzana" doesn\'t work. The direct object pronoun must match the gender of the thing: <em>"¡Cómpramela!"</em>',
            '<strong>Using both noun AND pronoun</strong> — usually wrong. <em>"¡Dáselo el libro!"</em> sounds redundant because you\'ve already said "lo." Either say <em>"¡Dale el libro!"</em> OR <em>"¡Dáselo!"</em>, not both. (Spanish speakers DO sometimes add "a él/a ella" for clarification of who se refers to: <em>"¡Dáselo a tu hermano!"</em> — but that\'s clarifying who, not duplicating what.)',
            '<strong>Wrong verb form for negative</strong> — wrong. Negative still requires subjunctive verb form. <em>"¡No se lo das!"</em> is wrong; should be <em>"¡No se lo des!"</em>',
            '<strong>Mixing tú and usted</strong> in the verb/pronoun pair — wrong. <em>"¡Démelo!"</em> with the "dé" usted form but TÚ-style direct attach is fine for usted. But <em>"¡Damelo!"</em> with tú "da" form is also fine for tú. Don\'t mix: <em>"¡Dasélo!"</em> mixes formality levels weirdly.',
            '<strong>Pluralizing the wrong pronoun</strong> — wrong. <em>"Give them to her"</em> with "los regalos" → indirect singular (le → se) + direct plural (los): <em>"¡Dáselos!"</em>, not <em>"¡Daselos!"</em> (accent needed) and not <em>"¡Dáseloss!"</em>'
          ]
        }
      ],
      quiz: [
        { q: 'How do you say "Give it to me!" (tú command, "it" = el libro)?', options: [
          { text: '¡Dalomo!', correct: false },
          { text: '¡Dámelo!', correct: true },
          { text: '¡Damelo!', correct: false }
        ]},
        { q: 'How do you say "Give it to him!" (tú command, "it" = el libro)?', options: [
          { text: '¡Dálelo!', correct: false },
          { text: '¡Dáselo!', correct: true },
          { text: '¡Dáleslo!', correct: false }
        ]},
        { q: 'How do you say "Don\'t tell it to her!" (tú command)?', options: [
          { text: '¡No se lo digas!', correct: true },
          { text: '¡No le lo digas!', correct: false },
          { text: '¡No le digas lo!', correct: false }
        ]}
      ]
    },

    // ---------- LESSON 48: Saber/Conocer + Pedir/Preguntar ----------
    {
      id: 'saber-conocer-pedir-preguntar',
      num: '48',
      level: 'sp2',
      title: '<em>Saber</em> &amp; <em>Conocer</em> · <em>Pedir</em> &amp; <em>Preguntar</em>',
      tag: 'Confusable Pairs',
      summary: 'Two classic "watch out for English overlap" pairs. Saber and conocer both translate as "to know" but cover different territory. Pedir and preguntar both translate as "to ask" but mean different things. Get these right and your Spanish suddenly feels much more natural.',
      sections: [
        {
          heading: 'Why <em>two pairs</em> in one lesson',
          body: 'English does something Spanish doesn\'t — it uses ONE verb where Spanish needs TWO. We say "I know" for both facts (I know the answer) and people (I know María). We say "to ask" for both questions (asking what time it is) and requests (asking for help).<br><br>Spanish makes these distinctions explicit. When you say "saber" instead of "conocer" (or vice versa), you\'re communicating WHAT KIND of knowing. When you choose "pedir" vs. "preguntar," you\'re communicating WHAT KIND of asking.<br><br>These two pairs operate on the same principle, which is why they\'re taught together. Get the framework once, apply it twice.'
        },
        {
          heading: 'Part 1: <em>Saber vs. Conocer</em>',
          body: 'Both mean "to know" in English. But they cover completely different territory:<br><br>• <strong>SABER</strong> = to know <em>information, facts, or HOW TO do something</em><br>• <strong>CONOCER</strong> = to know <em>a person, place, or thing through experience</em> (familiarity)<br><br>The fastest mental shortcut: <strong>"Saber facts. Conocer faces."</strong> (And places. And things you\'ve experienced.)'
        },
        {
          heading: '<em>Saber</em>: facts and skills',
          body: 'Use saber for:<br><br>1. <strong>Knowing information</strong> (a fact, an answer, a date, a number)<br>2. <strong>Knowing HOW to do something</strong> (a skill — followed by an infinitive)<br><br>It\'s irregular in the yo form: <em>sé</em>.',
          conjugation: [
            ['yo', '<strong>sé</strong>'],
            ['tú', 'sabes'],
            ['él / ella / usted', 'sabe'],
            ['nosotros', 'sabemos'],
            ['vosotros', 'sabéis'],
            ['ellos / ellas / ustedes', 'saben']
          ]
        },
        {
          heading: '<em>Saber</em> in action',
          body: '',
          examples: [
            { es: 'Sé la respuesta.', en: 'I know the answer. (a fact)' },
            { es: '¿Sabes qué hora es?', en: 'Do you know what time it is? (information)' },
            { es: 'No sé su nombre.', en: 'I don\'t know his/her name. (information)' },
            { es: '¿Sabes nadar?', en: 'Do you know how to swim? (skill + infinitive)' },
            { es: 'Mi hermana sabe tocar la guitarra.', en: 'My sister knows how to play guitar.' },
            { es: 'No sabíamos que era tu cumpleaños.', en: 'We didn\'t know it was your birthday.' }
          ]
        },
        {
          heading: '<em>Conocer</em>: people, places, things through experience',
          body: 'Use conocer for:<br><br>1. <strong>Knowing a person</strong> (being personally familiar with someone)<br>2. <strong>Knowing a place</strong> (having been there)<br>3. <strong>Knowing a thing</strong> (being familiar with a book, song, movie, etc.)<br><br>It\'s also irregular in the yo form: <em>conozco</em>.',
          conjugation: [
            ['yo', '<strong>conozco</strong>'],
            ['tú', 'conoces'],
            ['él / ella / usted', 'conoce'],
            ['nosotros', 'conocemos'],
            ['vosotros', 'conocéis'],
            ['ellos / ellas / ustedes', 'conocen']
          ]
        },
        {
          heading: '<em>Conocer</em> in action',
          body: 'Note: when conocer takes a person as its object, Spanish adds the "personal a" — a small word that has no English equivalent.',
          examples: [
            { es: 'Conozco a María.', en: 'I know María. (a person — note the personal "a")' },
            { es: '¿Conoces a mi hermano?', en: 'Do you know my brother?' },
            { es: 'Conocemos un buen restaurante cerca de aquí.', en: 'We know a good restaurant near here.' },
            { es: '¿Conoces España?', en: 'Have you been to Spain? / Do you know Spain? (a place)' },
            { es: 'No conozco esa canción.', en: 'I don\'t know that song. (a thing — familiarity)' },
            { es: 'Mi mamá conoce a tu mamá desde hace años.', en: 'My mom has known your mom for years.' }
          ]
        },
        {
          heading: 'Side by side: <em>same English, different Spanish</em>',
          body: 'The trickiest cases are where English uses "to know" for both. Watch the context:',
          conjugation: [
            ['"I know the answer."', '<strong>Sé</strong> la respuesta. (fact)'],
            ['"I know María."', '<strong>Conozco</strong> a María. (person)'],
            ['"I know how to drive."', '<strong>Sé</strong> conducir. (skill + infinitive)'],
            ['"I know this city well."', '<strong>Conozco</strong> bien esta ciudad. (place / familiarity)'],
            ['"Do you know what time it is?"', '¿<strong>Sabes</strong> qué hora es? (information)'],
            ['"Do you know my dad?"', '¿<strong>Conoces</strong> a mi papá? (person)'],
            ['"She knows three languages."', 'Ella <strong>sabe</strong> tres idiomas. (information/skills — knows them as facts)'],
            ['"She knows that movie."', 'Ella <strong>conoce</strong> esa película. (familiarity with a thing)']
          ]
        },
        {
          type: 'tip',
          heading: '<em>Saber/Conocer in the preterite</em> — meanings change!',
          body: 'This is one of the most striking things in Spanish 2 and worth knowing now. When you use these verbs in the PRETERITE tense (the "one-time event" past), they take on DIFFERENT meanings:<br><br>• <strong>CONOCÍ</strong> = "I MET (for the first time)" — NOT "I knew."<br>  <em>Conocí a María en la fiesta.</em> = I met María at the party.<br><br>• <strong>SUPE</strong> = "I FOUND OUT" — NOT "I knew."<br>  <em>Supe la verdad ayer.</em> = I found out the truth yesterday.<br><br>For the "knew" meaning in the past, use the IMPERFECT:<br><br>• <strong>CONOCÍA a María</strong> = "I knew María" (ongoing, before that moment)<br>• <strong>SABÍA la verdad</strong> = "I knew the truth" (already had the information)<br><br>So the contrast in past tense:<br>• <em>Cuando lo conocí…</em> = "When I MET him…" (preterite, the meeting event)<br>• <em>Cuando lo conocía bien…</em> = "When I knew him well…" (imperfect, ongoing relationship)<br><br>You\'ll see these distinctions again in Lesson 42: Preterite vs. Imperfect. This is the kind of pattern that students who master the contrast sound genuinely fluent in.'
        },
        {
          heading: 'Part 2: <em>Pedir vs. Preguntar</em>',
          body: 'Both translate as "to ask" in English. But just like saber/conocer, Spanish separates two different types of asking:<br><br>• <strong>PEDIR</strong> = to ask FOR something / to REQUEST<br>• <strong>PREGUNTAR</strong> = to ask a QUESTION / to inquire<br><br>The key mental shortcut: <strong>"Pedir = request. Preguntar = question."</strong>'
        },
        {
          heading: '<em>Pedir</em>: asking for things',
          body: 'Use pedir when you\'re asking for or requesting an OBJECT, FAVOR, or ACTION.<br><br>Pedir is an e→i stem-changer.',
          conjugation: [
            ['yo', 'pido'],
            ['tú', 'pides'],
            ['él / ella / usted', 'pide'],
            ['nosotros', 'pedimos'],
            ['vosotros', 'pedís'],
            ['ellos / ellas / ustedes', 'piden']
          ]
        },
        {
          heading: '<em>Pedir</em> in action',
          body: '',
          examples: [
            { es: 'Pido un café, por favor.', en: 'I\'ll have / I order a coffee, please.' },
            { es: 'Mi hermano me pidió ayuda.', en: 'My brother asked me for help.' },
            { es: 'Te pido un favor.', en: 'I\'m asking you a favor.' },
            { es: 'Siempre piden agua sin gas.', en: 'They always ask for / order still water.' },
            { es: '¿Qué vas a pedir en el restaurante?', en: 'What are you going to order at the restaurant?' },
            { es: 'No me pidas dinero.', en: 'Don\'t ask me for money.' }
          ]
        },
        {
          heading: '<em>Preguntar</em>: asking questions',
          body: 'Use preguntar when you\'re asking a QUESTION (seeking information, expecting an answer).<br><br>Preguntar is regular.',
          conjugation: [
            ['yo', 'pregunto'],
            ['tú', 'preguntas'],
            ['él / ella / usted', 'pregunta'],
            ['nosotros', 'preguntamos'],
            ['vosotros', 'preguntáis'],
            ['ellos / ellas / ustedes', 'preguntan']
          ]
        },
        {
          heading: '<em>Preguntar</em> in action',
          body: '',
          examples: [
            { es: 'Voy a preguntar al profesor.', en: 'I\'m going to ask the teacher (a question).' },
            { es: 'Me preguntó qué hora era.', en: 'He/she asked me what time it was.' },
            { es: 'Pregúntale a tu mamá.', en: 'Ask your mom.' },
            { es: 'Siempre me preguntan de dónde soy.', en: 'They always ask me where I\'m from.' },
            { es: 'No preguntes cosas tan personales.', en: 'Don\'t ask such personal things.' },
            { es: 'Pregunta si está abierto.', en: 'Ask if it\'s open.' }
          ]
        },
        {
          heading: 'Side by side: <em>same English, different Spanish</em>',
          body: 'Watch the difference between "asking FOR something" and "asking a question":',
          conjugation: [
            ['"I\'m going to ask for the bill."', 'Voy a <strong>pedir</strong> la cuenta. (requesting a thing)'],
            ['"I\'m going to ask the waiter."', 'Voy a <strong>preguntar</strong>le al mesero. (seeking information)'],
            ['"She asked me for money."', 'Me <strong>pidió</strong> dinero. (requesting an object)'],
            ['"She asked me about money."', 'Me <strong>preguntó</strong> sobre el dinero. (asking a question about a topic)'],
            ['"Ask him for a favor."', '<strong>Pídele</strong> un favor.'],
            ['"Ask him if he can help."', '<strong>Pregúntale</strong> si puede ayudar.']
          ]
        },
        {
          type: 'tip',
          heading: 'A common confusion: <em>preguntar por</em>',
          body: 'There\'s a useful idiom that bridges both verbs:<br><br><strong>preguntar POR alguien</strong> = "to ask ABOUT someone" or "to ask AFTER someone"<br><br>It\'s preguntar (asking a question), but with "por" the meaning shifts to inquiring about a person\'s wellbeing or whereabouts:<br><br>• <em>Mi mamá pregunta por ti.</em> = "My mom asks about you / asks how you\'re doing."<br>• <em>Pregunté por ella en el hotel.</em> = "I asked about her at the hotel" (looking for her, asking where she is).<br><br>This is different from <em>preguntar a alguien</em> (asking someone something) and different from <em>pedir</em> (requesting something).<br><br>Quick distinctions:<br>• <em>Le preguntó algo.</em> = She asked him something. (information)<br>• <em>Le pidió algo.</em> = She asked him for something. (request)<br>• <em>Preguntó por él.</em> = She asked about him. (inquiring about his wellbeing)'
        },
        {
          type: 'tip',
          heading: 'The <em>"to play"</em> bonus pair',
          body: 'A free bonus: Spanish has another pair you should know about that follows the same logic — jugar vs. tocar. Both translate as "to play":<br><br>• <strong>JUGAR</strong> = to play (a sport, game, or play in general — like kids playing)<br>• <strong>TOCAR</strong> = to play (an instrument) — also "to touch"<br><br>• <em>Juego al fútbol</em> = I play soccer.<br>• <em>Toco la guitarra</em> = I play the guitar.<br>• <em>Los niños juegan en el parque.</em> = The kids play in the park.<br>• <em>¿Quién toca el piano?</em> = Who plays piano?<br><br>This is the same kind of distinction — one English verb, two Spanish meanings. Once you internalize the saber/conocer and pedir/preguntar framework, jugar/tocar comes easily.'
        },
        {
          type: 'mistakes',
          heading: 'Saber/Conocer + Pedir/Preguntar <em>traps</em>',
          body: 'Where students slip:',
          items: [
            'Using <strong>saber</strong> when you mean a person — wrong. <em>"Sé a María"</em> doesn\'t work. People = conocer. Should be <em>"Conozco a María."</em>',
            'Using <strong>conocer</strong> for facts — wrong. <em>"Conozco la respuesta"</em> doesn\'t work. Facts/info = saber. Should be <em>"Sé la respuesta."</em>',
            'Forgetting the <strong>personal "a"</strong> with conocer + a person — wrong. <em>"Conozco María"</em> should be <em>"Conozco a María."</em>',
            'Using <strong>saber</strong> alone where it needs an infinitive — context matters. <em>"Sé español"</em> = "I know Spanish (as a language/facts)." But for skills, you need an infinitive: <em>"Sé hablar español"</em> = "I know how to speak Spanish."',
            'Using <strong>preguntar</strong> for requests — wrong. <em>"Pregunto un café"</em> doesn\'t work. Asking for an object = pedir. Should be <em>"Pido un café."</em>',
            'Using <strong>pedir</strong> for questions — wrong. <em>"Pido qué hora es"</em> doesn\'t work. Asking a question = preguntar. Should be <em>"Pregunto qué hora es"</em> or more naturally <em>"¿Sabes qué hora es?"</em>',
            'Mixing up <strong>"preguntar a"</strong> and <strong>"preguntar por"</strong> — different meanings. <em>Pregúntale</em> = ask him (a question). <em>Pregunta por él</em> = ask about him (inquiring).',
            'Translating "<strong>ask him a question</strong>" with pedir — wrong. <em>"Pedirle una pregunta"</em> doesn\'t work as you\'d expect. You ask questions with preguntar: <em>"Hazle una pregunta"</em> (make him a question) or just <em>"Pregúntale algo."</em>',
            'Forgetting that <strong>pedir is a stem-changer</strong> — <em>"Pedo un café"</em> is wrong. It\'s <em>"Pido un café."</em> (e→i in present tense, all forms except nosotros/vosotros)',
            'Saying <strong>"conocí a María por 5 años"</strong> for "I knew María for 5 years" — wrong. Conocí = met (one event). For the "knew" meaning use imperfect: <em>"Conocía a María por / desde hace 5 años."</em>',
            'Using <strong>saber/conocer</strong> in commands wrong — sepa is irregular (no, sé bueno = be good is from SER, not SABER). Memorize: yo sé (saber), yo soy (ser), tú sé (ser command).'
          ]
        }
      ],
      quiz: [
        { q: 'How do you say "I know María" in Spanish?', options: [
          { text: 'Sé a María.', correct: false },
          { text: 'Conozco a María.', correct: true },
          { text: 'Conozco María.', correct: false }
        ]},
        { q: 'How do you say "I\'ll order a coffee, please" in Spanish?', options: [
          { text: 'Pregunto un café, por favor.', correct: false },
          { text: 'Pido un café, por favor.', correct: true },
          { text: 'Sé un café, por favor.', correct: false }
        ]},
        { q: '"I met him at the party last night" — which verb form?', options: [
          { text: 'Lo conocía en la fiesta anoche.', correct: false },
          { text: 'Lo conocí en la fiesta anoche.', correct: true },
          { text: 'Lo sabía en la fiesta anoche.', correct: false }
        ]}
      ]
    },

    // ---------- LESSON 49: Object Pronouns with Progressives ----------
    {
      id: 'pronouns-progressives',
      num: '49',
      level: 'sp2',
      title: 'Object Pronouns with <em>Progressives</em>',
      tag: 'Pronouns · Progressives',
      summary: 'When you say "I am doing it" in Spanish, you have TWO equally-correct options: place the pronoun before the auxiliary (lo estoy haciendo) OR attach it to the gerund (estoy haciéndolo). Both work. Same flexibility applies to infinitive constructions (quiero hacerlo / lo quiero hacer). Master the choice and you sound natural.',
      sections: [
        {
          heading: 'A <em>two-word verb</em>, two pronoun positions',
          body: 'You already know the present progressive: <em>estar</em> + gerund (-ando / -iendo). It expresses an action happening right now:<br><br>• <em>Estoy comiendo.</em> = I am eating.<br>• <em>Estás trabajando.</em> = You are working.<br>• <em>Estamos viendo una película.</em> = We are watching a movie.<br><br>What\'s new in this lesson: when you add an object pronoun, you have a CHOICE about where it goes. Spanish allows two positions, and both are completely correct:<br><br>• <strong>BEFORE the auxiliary:</strong> <em>Lo estoy comiendo.</em> = I am eating it.<br>• <strong>ATTACHED to the gerund:</strong> <em>Estoy comiéndolo.</em> = I am eating it.<br><br>Both mean exactly the same thing. Both are equally common in real speech. Native speakers freely switch between them. The choice is mostly stylistic — like English allowing both "I cannot" and "I can\'t."'
        },
        {
          heading: 'The <em>two positions</em>, side by side',
          body: 'Watch how the same idea can be expressed both ways:',
          conjugation: [
            ['"I am doing it."', '<strong>Lo estoy haciendo</strong> · <strong>Estoy haciéndolo</strong>'],
            ['"She is calling me."', '<strong>Me está llamando</strong> · <strong>Está llamándome</strong>'],
            ['"They are watching us."', '<strong>Nos están mirando</strong> · <strong>Están mirándonos</strong>'],
            ['"He is telling her the truth."', '<strong>Se la está diciendo</strong> · <strong>Está diciéndosela</strong>'],
            ['"We are buying them."', '<strong>Los estamos comprando</strong> · <strong>Estamos comprándolos</strong>'],
            ['"I am washing my hands."', '<strong>Me estoy lavando las manos</strong> · <strong>Estoy lavándome las manos</strong>']
          ]
        },
        {
          heading: 'Rule 1: <em>Before the auxiliary</em>',
          body: 'The pronoun goes BEFORE the conjugated form of <em>estar</em>. No accent needed (estar keeps its natural stress).<br><br>This pattern feels familiar because it\'s the same place you put pronouns in simple present-tense statements: <em>"Lo veo"</em> (I see it) → <em>"Lo estoy viendo"</em> (I am seeing it / I am watching it).',
          examples: [
            { es: 'Lo estoy leyendo.', en: 'I am reading it.' },
            { es: 'Las estamos esperando.', en: 'We are waiting for them.' },
            { es: 'Me está hablando.', en: 'He/she is talking to me.' },
            { es: 'Se está vistiendo.', en: 'He/she is getting dressed.' },
            { es: 'Te lo estoy diciendo.', en: 'I am telling it to you.' },
            { es: 'No me lo estás contando todo.', en: 'You\'re not telling me everything.' }
          ]
        },
        {
          heading: 'Rule 2: <em>Attached to the gerund</em>',
          body: 'The pronoun ATTACHES to the gerund (-ando / -iendo form). When you attach, you almost always need to add an <strong>accent mark</strong> to preserve the original stress.<br><br>The accent goes on the syllable that WOULD have been stressed in the gerund alone. <em>"Haciendo"</em> = ha-CIEN-do. Stress on "cien." When you attach "lo" → <em>"haciéndolo"</em> = ha-cien-DO-lo without an accent puts stress on "do," which is wrong. The accent forces stress to stay on "cien."',
          examples: [
            { es: 'Estoy leyéndolo.', en: 'I am reading it.' },
            { es: 'Estamos esperándolas.', en: 'We are waiting for them.' },
            { es: 'Está hablándome.', en: 'He/she is talking to me.' },
            { es: 'Está vistiéndose.', en: 'He/she is getting dressed.' },
            { es: 'Estoy diciéndotelo.', en: 'I am telling it to you.' },
            { es: 'No estás contándomelo todo.', en: 'You\'re not telling me everything.' }
          ]
        },
        {
          type: 'tip',
          heading: 'The <em>accent rule</em> for attached gerunds',
          body: 'Gerunds end in -ando or -iendo. The natural stress falls on the <strong>second-to-last syllable</strong> (the "AN" in <em>ha-blAN-do</em>, the "IEN" in <em>com-IEN-do</em>).<br><br>When you attach a pronoun, the word gets longer, and Spanish would shift stress unless you mark it. So:<br><br>• <em>hablando + me</em> = <strong>hablándome</strong> (accent on the "A" of -an-)<br>• <em>comiendo + lo</em> = <strong>comiéndolo</strong> (accent on the "E" of -ien-)<br>• <em>diciendo + se + lo</em> = <strong>diciéndoselo</strong> (still accent on "ien" even with two pronouns)<br>• <em>levantando + se</em> = <strong>levantándose</strong> (accent on "an" of -an-)<br><br>The rule: <strong>any time you attach a pronoun to a gerund, add an accent on the vowel of -ando/-iendo.</strong> Don\'t overthink which vowel — it\'s always the one in the -ando/-iendo suffix.<br><br>The accent is REQUIRED in writing. In speech, native speakers naturally preserve the stress without thinking. But on paper, missing the accent is a real grammatical error.'
        },
        {
          heading: 'Pronoun <em>order</em> with double pronouns',
          body: 'When you have BOTH an indirect and a direct object pronoun (like in the previous lessons), the order rules from before still apply: <strong>indirect comes first, direct comes second.</strong> Same le→se rule too.<br><br>You can attach BOTH to the gerund (with accent), OR put both before the auxiliary:',
          examples: [
            { es: 'Te lo estoy explicando. / Estoy explicándotelo.', en: 'I am explaining it to you.' },
            { es: 'Me las está comprando. / Está comprándomelas.', en: 'He/she is buying them for me.' },
            { es: 'Se lo estoy diciendo. / Estoy diciéndoselo.', en: 'I am telling it to him/her. (le→se rule!)' },
            { es: 'Nos los están mandando. / Están mandándonoslos.', en: 'They are sending them to us.' },
            { es: 'No te la estoy contando bien. / No estoy contándotela bien.', en: 'I\'m not telling it (the story) to you right.' }
          ]
        },
        {
          heading: 'Reflexive verbs in <em>progressive</em>',
          body: 'Reflexive verbs follow the same two-position pattern. The reflexive pronoun (me, te, se, nos, se) either goes BEFORE estar or attaches to the gerund.',
          examples: [
            { es: 'Me estoy duchando. / Estoy duchándome.', en: 'I am taking a shower.' },
            { es: 'Te estás vistiendo. / Estás vistiéndote.', en: 'You are getting dressed.' },
            { es: 'Se está cepillando los dientes. / Está cepillándose los dientes.', en: 'He/she is brushing his/her teeth.' },
            { es: 'Nos estamos divirtiendo. / Estamos divirtiéndonos.', en: 'We are having fun.' },
            { es: 'Se están preparando para salir. / Están preparándose para salir.', en: 'They are getting ready to go out.' }
          ]
        },
        {
          type: 'tip',
          heading: 'The <em>same flexibility</em> with infinitives',
          body: 'Spanish offers this same "two-position choice" with ANY two-verb construction where one verb is conjugated and the other is in infinitive form. The most common is with modal verbs (querer, poder, deber, necesitar, tener que, ir a + infinitive):<br><br>• <em>Quiero verlo.</em> = <em>Lo quiero ver.</em> = I want to see it.<br>• <em>Puedo ayudarte.</em> = <em>Te puedo ayudar.</em> = I can help you.<br>• <em>Voy a hacerlo.</em> = <em>Lo voy a hacer.</em> = I am going to do it.<br>• <em>Tengo que llamarla.</em> = <em>La tengo que llamar.</em> = I have to call her.<br>• <em>Necesitamos comprarlos.</em> = <em>Los necesitamos comprar.</em> = We need to buy them.<br><br>Both versions are equally correct and equally common. The "attached to infinitive" version doesn\'t need an accent (infinitives end in -ar/-er/-ir, which are 1-syllable endings — the stress doesn\'t shift even with attached pronouns).<br><br>Once you internalize this with progressives, you\'ve got it for infinitives too.'
        },
        {
          type: 'tip',
          heading: 'Which position should YOU use?',
          body: 'Honest answer: both are correct, so use whichever feels more natural to you. Some patterns from real speakers:<br><br>• <strong>Before the auxiliary</strong> (lo estoy haciendo) is slightly more common in fast, casual everyday speech. It\'s also easier for English speakers because the pronoun comes early, like in English ("I AM IT doing" structure).<br><br>• <strong>Attached to the gerund</strong> (estoy haciéndolo) is slightly more common in formal or written Spanish. It also has a more "literary" feel. Some speakers attach for longer, more deliberate statements.<br><br>• In <strong>negative</strong> constructions, "before" placement (No lo estoy haciendo) is slightly more common than the attached version (No estoy haciéndolo) — but again, both work.<br><br>My recommendation for learners: <strong>master the "before" position first</strong> because it\'s slightly easier. Then learn the "attached" version so you can recognize it when you hear it. Use whichever feels natural in your own speech — Spanish speakers will understand both.<br><br>And honestly: most native speakers don\'t even notice which version they\'re using. They just flow back and forth based on rhythm and emphasis.'
        },
        {
          type: 'mistakes',
          heading: 'Pronoun + progressive <em>traps</em>',
          body: 'Where students slip:',
          items: [
            'Splitting the pronoun and the verb — wrong. <em>"Estoy lo haciendo"</em> doesn\'t work. The pronoun goes EITHER before the auxiliary OR attached to the gerund — never floating between them.',
            'Forgetting the <strong>accent</strong> when attaching — wrong. <em>"Estoy haciendolo"</em> is missing the accent. Should be <em>"Estoy haciéndolo."</em> The accent on the gerund vowel is required in writing.',
            'Adding the accent in the WRONG position — wrong. <em>"Estoy haciendólo"</em> has the accent on the wrong vowel. It should be on the -ie-/-ien- syllable: <em>"haciéndolo."</em>',
            'Putting the <strong>direct before indirect</strong> with double pronouns — wrong. <em>"Estoy explicándolote"</em> has the order reversed. Indirect first: <em>"Estoy explicándotelo."</em>',
            'Forgetting the <strong>le→se rule</strong> in attached form — wrong. <em>"Estoy diciéndolelo"</em> doesn\'t work. When le meets lo, le becomes se: <em>"Estoy diciéndoselo."</em>',
            'Using the <strong>wrong gerund form</strong> — wrong. <em>"Estoy comendo"</em> is wrong (should be <em>"comiendo"</em>). <em>"Estoy haciendo"</em> uses an irregular gerund based on the yo-go pattern.',
            'Treating it as a <strong>required</strong> choice — wrong. Some students think there\'s a "right" position. There isn\'t. Both work. Use whichever sounds natural.',
            'Confusing this with simple <strong>present-tense pronoun placement</strong> — these are different. With simple present (<em>"Lo veo"</em>), the pronoun ALWAYS goes before the verb. With progressive, you have the CHOICE of two positions. Same for infinitive constructions.',
            'Trying to <strong>attach the pronoun to estar</strong> — wrong. <em>"Estoylo haciendo"</em> doesn\'t work. The auxiliary (estar) stays free of pronouns. Pronouns either go BEFORE estar or attach to the GERUND, never to estar itself.',
            'Putting the pronoun <strong>after the gerund without attaching</strong> — wrong. <em>"Estoy haciendo lo"</em> with a space doesn\'t work. If you place the pronoun after, it MUST attach (and get the accent): <em>"Estoy haciéndolo."</em>'
          ]
        }
      ],
      quiz: [
        { q: 'Which of these is correctly written?', options: [
          { text: 'Estoy haciendolo.', correct: false },
          { text: 'Estoy haciéndolo.', correct: true },
          { text: 'Estoy lo haciendo.', correct: false }
        ]},
        { q: 'How can you say "I am telling it to her" — which TWO are both correct?', options: [
          { text: 'Se lo estoy diciendo / Estoy diciéndoselo', correct: true },
          { text: 'Le lo estoy diciendo / Estoy diciéndolelo', correct: false },
          { text: 'Lo se estoy diciendo / Estoy lo diciendo se', correct: false }
        ]},
        { q: 'Which version is grammatically wrong?', options: [
          { text: 'Me estoy duchando.', correct: false },
          { text: 'Estoy duchándome.', correct: false },
          { text: 'Estoy me duchando.', correct: true }
        ]}
      ]
    },

    // ---------- LESSON 50: Possessive Pronouns ----------
    {
      id: 'possessive-pronouns',
      num: '50',
      level: 'sp2',
      title: 'Possessive <em>Pronouns</em>',
      tag: 'Pronouns · Possessives',
      summary: 'You\'ve been using possessive ADJECTIVES (mi libro, tu casa) for a while. Now meet possessive PRONOUNS (el mío, la tuya) — the words that REPLACE a noun entirely. "Whose pen is this?" "It\'s mine" → "Es el mío." They agree in both gender AND number with the thing being possessed, not with the owner.',
      sections: [
        {
          heading: 'Quick review: <em>possessive adjectives</em>',
          body: 'You learned these in Lesson 23. Possessive ADJECTIVES go BEFORE a noun and tell us who owns it:<br><br>• <strong>mi</strong> libro = my book<br>• <strong>tu</strong> casa = your house<br>• <strong>su</strong> coche = his/her/your(formal) car<br>• <strong>nuestra</strong> familia = our family<br>• <strong>vuestros</strong> amigos = your (plural, Spain) friends<br>• <strong>sus</strong> hermanos = their / your(formal) brothers<br><br>These adjectives agree only in number (singular vs. plural), and nuestro/vuestro also in gender. They\'re short and always sit IN FRONT of the noun.<br><br>This lesson is about something different: when you want to DROP the noun entirely and just say "mine" or "yours" — that\'s a possessive PRONOUN.'
        },
        {
          heading: 'What possessive <em>pronouns</em> do',
          body: 'A possessive pronoun REPLACES a noun. Instead of repeating "the book," you can say "mine" or "the one that is mine."<br><br>Look at the difference:<br><br>• <em>"Mi libro es rojo. <strong>Tu libro</strong> es azul."</em> → adjective + noun, normal<br>• <em>"Mi libro es rojo. <strong>El tuyo</strong> es azul."</em> → pronoun replaces "tu libro" entirely<br><br>"El tuyo" literally means "the yours" — Spanish uses an article + a special form of the possessive word. English does the same thing with "mine" / "yours" / "his" / "hers" / "ours" / "theirs."<br><br>The pattern: <strong>article (el/la/los/las) + special possessive form</strong>. The article AND the possessive must both agree with the gender and number of the THING being possessed.'
        },
        {
          heading: 'The <em>full chart</em>',
          body: 'Memorize these. Notice they agree with the thing owned, not the owner:',
          conjugation: [
            ['my / mine', '<strong>el mío</strong>, <strong>la mía</strong>, <strong>los míos</strong>, <strong>las mías</strong>'],
            ['your / yours (tú)', '<strong>el tuyo</strong>, <strong>la tuya</strong>, <strong>los tuyos</strong>, <strong>las tuyas</strong>'],
            ['his, hers, your (usted)', '<strong>el suyo</strong>, <strong>la suya</strong>, <strong>los suyos</strong>, <strong>las suyas</strong>'],
            ['our / ours', '<strong>el nuestro</strong>, <strong>la nuestra</strong>, <strong>los nuestros</strong>, <strong>las nuestras</strong>'],
            ['your / yours (vosotros, Spain)', '<strong>el vuestro</strong>, <strong>la vuestra</strong>, <strong>los vuestros</strong>, <strong>las vuestras</strong>'],
            ['their, your (ustedes)', '<strong>el suyo</strong>, <strong>la suya</strong>, <strong>los suyos</strong>, <strong>las suyas</strong>']
          ]
        },
        {
          heading: 'Examples in <em>action</em>',
          body: 'Note: the article matches the gender AND number of what\'s owned — not who owns it.',
          examples: [
            { es: '¿Es este tu coche? Sí, es el mío.', en: 'Is this your car? Yes, it\'s mine. (el = "el coche")' },
            { es: 'Mi casa es vieja. La tuya es nueva.', en: 'My house is old. Yours is new. (la = "la casa")' },
            { es: 'Mis libros son aburridos. Los tuyos son interesantes.', en: 'My books are boring. Yours are interesting.' },
            { es: 'Nuestras hijas son pequeñas. Las suyas ya son grandes.', en: 'Our daughters are little. Theirs/his/hers are already grown up.' },
            { es: 'Tu opinión importa. La mía también.', en: 'Your opinion matters. Mine does too.' },
            { es: 'Estos zapatos no son míos. Son los suyos.', en: 'These shoes aren\'t mine. They\'re his/hers/theirs.' }
          ]
        },
        {
          heading: 'Without the article: <em>after ser</em>',
          body: 'After the verb <strong>ser</strong>, you can drop the article and use just the possessive form:<br><br>• <em>Es <strong>mío</strong>.</em> = "It\'s mine." (instead of "Es el mío")<br>• <em>La pluma es <strong>tuya</strong>.</em> = "The pen is yours."<br>• <em>Estos libros son <strong>nuestros</strong>.</em> = "These books are ours."<br><br>Both forms work after ser, but the article-less version is more common in everyday speech. With the article ("es el mío") emphasizes "MINE, specifically" rather than "ours" or "yours."',
          examples: [
            { es: '¿De quién es este abrigo? Es mío.', en: 'Whose coat is this? It\'s mine.' },
            { es: 'Esa idea no es mía. Es de mi hermano.', en: 'That idea isn\'t mine. It\'s my brother\'s.' },
            { es: 'Las llaves son tuyas, ¿verdad?', en: 'The keys are yours, right?' },
            { es: 'El triunfo es nuestro.', en: 'The victory is ours.' },
            { es: 'Esta canción es suya — la escribió ella.', en: 'This song is hers — she wrote it.' }
          ]
        },
        {
          type: 'tip',
          heading: 'When <em>"el suyo"</em> is ambiguous',
          body: 'The possessive "suyo/suya/suyos/suyas" can mean: his, hers, theirs, your (formal usted), your (plural ustedes). That\'s a LOT of meanings packed into one word.<br><br>Spanish speakers solve this by adding clarification when the context isn\'t clear:<br><br>• <em>el libro suyo</em> → ambiguous (whose?)<br>• <em>el libro de él</em> = "his book" (literally "the book of him")<br>• <em>el libro de ella</em> = "her book"<br>• <em>el libro de ellos</em> = "their (masc.) book"<br>• <em>el libro de usted</em> = "your (formal) book"<br>• <em>el libro de ustedes</em> = "your (plural) book"<br><br>This "de + pronoun" structure is REALLY common in real spoken Spanish — much more common than relying on suyo alone. When you want to be clear, switch to "de él / de ella / de ellos / de usted / de ustedes" instead of "suyo."<br><br>Example: <em>"¿Es tu coche?"</em> → <em>"No, es de ella."</em> (No, it\'s hers) — much clearer than "es suyo."'
        },
        {
          type: 'tip',
          heading: '<em>Lo</em> + possessive: "what\'s mine"',
          body: 'Bonus pattern: when you want to talk about "what is mine" / "what is yours" in an abstract sense (not pointing to a specific object), use <strong>lo</strong> + possessive:<br><br>• <em>Lo mío</em> = "what is mine" / "my stuff" / "my thing"<br>• <em>Lo tuyo</em> = "what is yours" / "your thing"<br>• <em>Lo suyo</em> = "what is his/hers/yours/theirs"<br>• <em>Lo nuestro</em> = "what is ours" / "our thing" / "our relationship"<br><br>Examples:<br>• <em>Lo mío es la música.</em> = "Music is my thing." (lit. "What\'s mine is music.")<br>• <em>Lo nuestro fue especial.</em> = "What we had was special." (often used about a romantic relationship)<br>• <em>Cada quien con lo suyo.</em> = "To each their own."<br>• <em>Eso no es lo mío.</em> = "That\'s not my thing / not for me."<br><br>"Lo" + possessive is GENDER-NEUTRAL — it refers to a concept, situation, or abstract idea, not a specific noun. You\'ll hear it constantly in songs, movies, and everyday speech.'
        },
        {
          heading: 'Side by side: <em>adjective vs. pronoun</em>',
          body: 'It helps to see both forms together so the difference is clear:',
          conjugation: [
            ['<strong>my book / mine</strong>', 'adj: <em>mi libro</em> · pron: <em>el mío</em>'],
            ['<strong>your house / yours</strong>', 'adj: <em>tu casa</em> · pron: <em>la tuya</em>'],
            ['<strong>his cars / his</strong>', 'adj: <em>sus coches</em> · pron: <em>los suyos</em>'],
            ['<strong>our daughters / ours</strong>', 'adj: <em>nuestras hijas</em> · pron: <em>las nuestras</em>'],
            ['<strong>their dogs / theirs</strong>', 'adj: <em>sus perros</em> · pron: <em>los suyos</em>'],
            ['<strong>my idea / mine</strong>', 'adj: <em>mi idea</em> · pron: <em>la mía</em>']
          ]
        },
        {
          type: 'mistakes',
          heading: 'Possessive pronoun <em>traps</em>',
          body: 'Where students slip:',
          items: [
            'Using the <strong>short adjective form</strong> as a pronoun — wrong. <em>"Este libro es mi"</em> doesn\'t work. The pronoun form is <em>mío</em>, not <em>mi</em>. The adjective and pronoun are DIFFERENT WORDS.',
            'Forgetting <strong>gender agreement</strong> with the thing owned — wrong. <em>"La casa es el mío"</em> uses the wrong gender. Casa is feminine, so: <em>"La casa es la mía"</em> or just <em>"La casa es mía."</em>',
            'Forgetting <strong>number agreement</strong> with the thing owned — wrong. <em>"Los libros son el mío"</em> uses singular. Should be: <em>"Los libros son los míos"</em> or <em>"Los libros son míos."</em>',
            'Confusing <strong>"suyo"</strong> meanings — common error. <em>Es suyo</em> could mean "It\'s his," "It\'s hers," "It\'s yours (formal)," "It\'s theirs," or "It\'s yours (plural)." When ambiguous, switch to <em>"Es de él / de ella / de usted / de ellos / de ustedes."</em>',
            'Using <strong>"mi"</strong> after ser — wrong. <em>"Es mi"</em> doesn\'t work alone. Use the pronoun form: <em>"Es mío"</em> or <em>"Es el mío."</em>',
            'Mixing up <strong>"mío"</strong> and <strong>"mi"</strong> spellings — both have an accent, but in different places when conjugated. <em>mío</em> is the pronoun (with accent on í). <em>mi</em> the adjective has no accent. Confusing this is a real error.',
            'Treating it like English — wrong order. English: "Yours is bigger." Spanish: <em>"El tuyo es más grande."</em> (with the article). Without the article it sounds incomplete in a comparison context.',
            'Using <strong>lo mío</strong> for a specific concrete object — wrong. <em>Lo mío</em> is ABSTRACT/conceptual. For "my book" specifically, you say <em>el mío</em>, not <em>lo mío.</em>',
            'Forgetting <strong>nuestro/vuestro</strong> have FOUR forms (gender + number). Many students think only -o changes. But: <em>nuestro/nuestra/nuestros/nuestras</em> all exist. <em>"La pluma es nuestro"</em> is wrong; should be <em>"nuestra."</em>',
            'Skipping the article in COMPARISONS — wrong. <em>"Mi coche es viejo, tuyo es nuevo"</em> is incomplete. In a contrast, you need the article: <em>"Mi coche es viejo, el tuyo es nuevo."</em> The article matters in this construction.'
          ]
        }
      ],
      quiz: [
        { q: 'How do you say "These books are mine" with a possessive pronoun?', options: [
          { text: 'Estos libros son mi.', correct: false },
          { text: 'Estos libros son míos.', correct: true },
          { text: 'Estos libros son los mí.', correct: false }
        ]},
        { q: 'How do you say "Yours (tú) is bigger" with a possessive pronoun (referring to "la casa")?', options: [
          { text: 'Tu es más grande.', correct: false },
          { text: 'El tuyo es más grande.', correct: false },
          { text: 'La tuya es más grande.', correct: true }
        ]},
        { q: '"Whose pen is this?" — "It\'s hers." Which is BEST?', options: [
          { text: 'Es suyo.', correct: false },
          { text: 'Es de ella.', correct: true },
          { text: 'Es la mía.', correct: false }
        ]}
      ]
    },

    // ============================================================================
    // SPANISH 3 / ADVANCED — Conditional + Present Perfect
    // ============================================================================

    // ---------- LESSON 51: The Conditional ----------
    {
      id: 'conditional',
      number: '51',
      level: 'sp3',
      title: 'The <em>conditional</em> tense',
      summary: 'The "would" tense — what would happen, what someone would do, polite suggestions, and hypothetical situations. One of the most regular tenses in Spanish.',
      sections: [
        {
          heading: 'What the <em>conditional</em> does',
          body: 'The conditional (<em>el condicional</em>) is Spanish\'s "would" tense. It describes what <strong>would happen</strong>, what someone <strong>would do</strong>, or how things <strong>would be</strong> — usually in a hypothetical or conditional situation.<br><br>Common uses:<br><br>• <strong>Hypothetical situations</strong> — <em>Yo viajaría a Perú.</em> → I would travel to Peru.<br>• <strong>Polite requests / softening</strong> — <em>¿Podrías ayudarme?</em> → Could you help me? (more polite than ¿Puedes ayudarme?)<br>• <strong>What someone would do</strong> — <em>Mi madre nunca diría eso.</em> → My mother would never say that.<br>• <strong>"If" situations (paired with past subjunctive in Sp4)</strong> — <em>Si tuviera tiempo, leería más.</em> → If I had time, I would read more.<br><br>You\'ve already encountered the conditional in writing prompts like "Si pudiera viajar en el tiempo…" (If I could travel in time…). This lesson teaches you to form it correctly.'
        },
        {
          heading: 'How to <em>form it</em> — incredibly easy',
          body: 'The conditional is one of the most regular tenses in Spanish. Here\'s the rule:<br><br><strong>Take the WHOLE infinitive (don\'t drop the ending!) and add these endings:</strong><br><br>-ía, -ías, -ía, -íamos, -íais, -ían<br><br>That\'s it. -AR, -ER, and -IR verbs ALL get the same endings, attached to the WHOLE infinitive. No drop, no swap. Notice these are the same endings as imperfect -ER/-IR verbs (-ía family).'
        },
        {
          heading: 'Regular conditional — <em>hablar</em> (to speak)',
          body: '',
          conjugation: [
            ['yo', 'hablar<strong>ía</strong>'],
            ['tú', 'hablar<strong>ías</strong>'],
            ['él / ella / usted', 'hablar<strong>ía</strong>'],
            ['nosotros', 'hablar<strong>íamos</strong>'],
            ['vosotros', 'hablar<strong>íais</strong>'],
            ['ellos / ellas / ustedes', 'hablar<strong>ían</strong>']
          ]
        },
        {
          heading: 'Same pattern — <em>comer</em> and <em>vivir</em>',
          body: '<em>comer</em>: comería, comerías, comería, comeríamos, comeríais, comerían<br><br><em>vivir</em>: viviría, vivirías, viviría, viviríamos, viviríais, vivirían<br><br>See the pattern? Just stick those endings onto the whole infinitive. Every regular verb works this way.'
        },
        {
          heading: 'The same <em>yo</em> = <em>él</em> quirk',
          body: 'Just like the imperfect, the <strong>yo</strong> and <strong>él/ella</strong> forms are identical (<em>hablaría</em> for both). Context tells you which — or include the pronoun if needed for clarity.'
        },
        {
          heading: 'Irregular <em>stems</em> — the same 12 from future',
          body: 'Here\'s the great news: the irregular verbs in conditional are <strong>exactly the same 12 verbs</strong> that are irregular in the future, and they use the <strong>exact same stems</strong>. If you know the future irregulars, you already know the conditional irregulars.<br><br>Each irregular has a modified stem, and the regular conditional endings (-ía, -ías, etc.) attach to that stem.<br><br><strong>Drop a vowel:</strong><br>• <em>poder</em> → <strong>podr</strong>-: podría, podrías, podría, podríamos, podríais, podrían<br>• <em>querer</em> → <strong>querr</strong>-: querría, querrías, querría…<br>• <em>saber</em> → <strong>sabr</strong>-: sabría, sabrías, sabría…<br>• <em>haber</em> → <strong>habr</strong>-: habría, habrías, habría…<br>• <em>caber</em> → <strong>cabr</strong>-: cabría, cabrías…'
        },
        {
          heading: 'More irregular <em>stems</em>',
          body: '<strong>Swap a vowel for a "d":</strong><br>• <em>tener</em> → <strong>tendr</strong>-: tendría, tendrías, tendría, tendríamos, tendríais, tendrían<br>• <em>poner</em> → <strong>pondr</strong>-: pondría, pondrías…<br>• <em>venir</em> → <strong>vendr</strong>-: vendría, vendrías…<br>• <em>salir</em> → <strong>saldr</strong>-: saldría, saldrías…<br>• <em>valer</em> → <strong>valdr</strong>-: valdría, valdrías…<br><br><strong>Strange shortenings:</strong><br>• <em>hacer</em> → <strong>har</strong>-: haría, harías, haría, haríamos, haríais, harían<br>• <em>decir</em> → <strong>dir</strong>-: diría, dirías, diría, diríamos, diríais, dirían'
        },
        {
          heading: 'Examples in <em>action</em>',
          body: '',
          examples: [
            { es: 'Yo viajaría a México el próximo año.', en: 'I would travel to Mexico next year.' },
            { es: 'Con un millón de dólares, compraría una casa nueva.', en: 'With a million dollars, I would buy a new house.' },
            { es: '¿Podrías ayudarme con la tarea?', en: 'Could you help me with the homework? (polite)' },
            { es: 'Mi abuela no diría eso nunca.', en: 'My grandmother would never say that.' },
            { es: 'Nosotros tendríamos más tiempo si vivieras cerca.', en: 'We would have more time if you lived close by.' },
            { es: 'Yo iría contigo, pero estoy enfermo.', en: 'I would go with you, but I\'m sick.' }
          ]
        },
        {
          heading: 'A <em>real-world</em> note',
          body: 'In English, "would" is sometimes ambiguous — it can mean "would (hypothetically)" OR "used to" (a past habit). Spanish doesn\'t mix these up. For "I would go to the beach every summer" (a past habit), use the <strong>imperfect</strong> (iba), NOT the conditional. The conditional is reserved for hypotheticals and politeness.<br><br>❌ <em>De niño, iría a la playa cada verano.</em> ← Wrong<br>✅ <em>De niño, iba a la playa cada verano.</em> ← Right (past habit → imperfect)'
        },
        {
          type: 'mistakes',
          heading: 'Conditional <em>traps</em>',
          body: 'Where students slip with the conditional:',
          items: [
            'Using the conditional for <strong>past habits</strong> ("would go" in the sense of "used to go") — wrong. As the note above says: <em>"De niño iría"</em> should be <em>"De niño iba"</em> (imperfect for past habits).',
            '<strong>Dropping the vowel of the infinitive</strong> for regular verbs — wrong. The conditional keeps the WHOLE infinitive. <em>"Hablar + ía = hablaría"</em> (NOT "hablía"). Only irregular verbs (poder, tener, etc.) change their stem.',
            'Forgetting the <strong>accent on every form</strong> — wrong. <em>"Hablaria"</em> should be <em>"hablaría."</em> Every single form gets an accent on the í of the ending: hablaría, hablarías, hablaría, hablaríamos, hablaríais, hablarían.',
            'Using the <strong>WRONG irregular stem</strong> — the irregular stems are the SAME as future stems: poder → podr-, querer → querr-, tener → tendr-, salir → saldr-, decir → dir-, hacer → har-. If you know future irregulars, you know conditional irregulars.',
            'Stem-changing in conditional — wrong. Like the imperfect, the conditional does NOT stem-change. <em>"Dormiría"</em> (NOT "durmiría"). <em>"Pediría"</em> (NOT "pidiría"). <em>"Quería"</em> conditional is <em>"querría"</em> — note the double r is from the irregular stem (querr-), not a stem-change.',
            'Mixing up the <strong>yo and él forms</strong> — they\'re identical (hablaría = both). Just like imperfect. Use context or include the pronoun.',
            'Translating English <strong>"would" + verb</strong> automatically as conditional — be careful. Sometimes "would" in English signals a different Spanish structure: "I wish he would come" = <em>"Ojalá viniera"</em> (past subjunctive, not conditional). Match the FUNCTION, not the word.'
          ]
        }
      ],
      quiz: [
        { q: 'Con un millón de dólares, yo _____ (viajar) por todo el mundo.', options: [
          { text: 'viajé', correct: false },
          { text: 'viajaría', correct: true },
          { text: 'viajaba', correct: false }
        ]},
        { q: '¿_____ (tú, poder) prestarme tu libro? (polite request)', options: [
          { text: 'Podrías', correct: true },
          { text: 'Puedes', correct: false },
          { text: 'Pudiste', correct: false }
        ]},
        { q: 'Mi padre dijo que _____ (venir) a casa el sábado.', options: [
          { text: 'vendrá', correct: false },
          { text: 'vino', correct: false },
          { text: 'vendría', correct: true }
        ]}
      ]
    },

    // ---------- LESSON 52: Present Perfect ----------
    {
      id: 'present-perfect',
      number: '52',
      level: 'sp3',
      title: 'The <em>present perfect</em>',
      summary: 'The "have done" tense — actions completed at an unspecified past time, things that happened recently, life experiences. Uses haber + past participle.',
      sections: [
        {
          heading: 'What the <em>present perfect</em> does',
          body: 'The present perfect (<em>el pretérito perfecto</em>) describes actions that <strong>have happened</strong> at some point — usually recently, or as part of someone\'s life experience. It\'s the "have done" tense.<br><br>Common uses:<br><br>• <strong>Recent completed actions</strong> — <em>He comido ya.</em> → I have already eaten.<br>• <strong>Life experiences</strong> — <em>He viajado a tres países.</em> → I have traveled to three countries.<br>• <strong>Things that happened "today / this week / this year"</strong> — <em>Esta semana hemos estudiado mucho.</em> → This week we have studied a lot.<br><br>Trigger words: <em>ya</em> (already), <em>todavía no / aún no</em> (not yet), <em>alguna vez</em> (ever), <em>nunca</em> (never), <em>esta semana, este mes, este año, hoy</em>.'
        },
        {
          heading: 'The <em>structure</em>: haber + past participle',
          body: 'The present perfect is a <strong>compound tense</strong> — that means it uses TWO verbs together. The first is a helper verb (<em>haber</em>), and the second is the <strong>past participle</strong> of the main verb.<br><br><strong>Pattern: haber (conjugated) + past participle</strong>'
        },
        {
          heading: 'Step 1: Conjugate <em>haber</em>',
          body: 'In the present tense, <em>haber</em> (the helper "to have") is conjugated like this. Memorize these — they\'re used in every perfect tense in Spanish.',
          conjugation: [
            ['yo', '<strong>he</strong>'],
            ['tú', '<strong>has</strong>'],
            ['él / ella / usted', '<strong>ha</strong>'],
            ['nosotros', '<strong>hemos</strong>'],
            ['vosotros', '<strong>habéis</strong>'],
            ['ellos / ellas / ustedes', '<strong>han</strong>']
          ]
        },
        {
          heading: 'Step 2: Form the <em>past participle</em>',
          body: 'The past participle is what English does with "-ed" or "-en" (walked, eaten, spoken). In Spanish, it has two simple patterns:<br><br>• <strong>-AR verbs:</strong> drop -ar, add <strong>-ado</strong>. <em>hablar → hablado</em> (spoken), <em>cantar → cantado</em> (sung).<br>• <strong>-ER and -IR verbs:</strong> drop the ending, add <strong>-ido</strong>. <em>comer → comido</em> (eaten), <em>vivir → vivido</em> (lived).<br><br>That\'s 90% of verbs done.'
        },
        {
          heading: 'Put it <em>together</em> — comer (to eat)',
          body: 'Combine the conjugated <em>haber</em> with the past participle <em>comido</em>:',
          conjugation: [
            ['yo', 'he <strong>comido</strong>'],
            ['tú', 'has <strong>comido</strong>'],
            ['él / ella / usted', 'ha <strong>comido</strong>'],
            ['nosotros', 'hemos <strong>comido</strong>'],
            ['vosotros', 'habéis <strong>comido</strong>'],
            ['ellos / ellas / ustedes', 'han <strong>comido</strong>']
          ]
        },
        {
          heading: 'Important: <em>two words</em>, never split',
          body: 'The two pieces (<em>haber</em> + past participle) stay together. NOTHING goes between them — not even <em>no</em>.<br><br>✅ <em>No he comido.</em> → I haven\'t eaten. (no comes BEFORE the whole thing)<br>❌ <em>He no comido.</em> ← Wrong<br><br>Same with pronouns:<br>✅ <em>Lo he visto.</em> → I have seen it. (pronoun BEFORE haber)<br>❌ <em>He lo visto.</em> ← Wrong<br><br>And the past participle <strong>never changes</strong> — no gender, no number agreement. Always ends in -o.'
        },
        {
          heading: 'Irregular <em>past participles</em>',
          body: 'About 10 common verbs have irregular past participles. You just memorize them.<br><br>• <em>hacer</em> → <strong>hecho</strong> (done/made)<br>• <em>decir</em> → <strong>dicho</strong> (said)<br>• <em>ver</em> → <strong>visto</strong> (seen)<br>• <em>escribir</em> → <strong>escrito</strong> (written)<br>• <em>abrir</em> → <strong>abierto</strong> (opened)<br>• <em>poner</em> → <strong>puesto</strong> (put)<br>• <em>volver</em> → <strong>vuelto</strong> (returned)<br>• <em>morir</em> → <strong>muerto</strong> (dead/died)<br>• <em>romper</em> → <strong>roto</strong> (broken)<br>• <em>resolver</em> → <strong>resuelto</strong> (solved)<br>• <em>cubrir</em> → <strong>cubierto</strong> (covered)<br>• <em>descubrir</em> → <strong>descubierto</strong> (discovered)<br><br>Anything built on these follows the same pattern: <em>describir → descrito</em>, <em>devolver → devuelto</em>, etc.'
        },
        {
          heading: 'Examples in <em>action</em>',
          body: '',
          examples: [
            { es: 'He visitado España tres veces.', en: 'I have visited Spain three times.' },
            { es: '¿Has comido alguna vez ceviche peruano?', en: 'Have you ever eaten Peruvian ceviche?' },
            { es: 'Mis hermanos han escrito cartas a sus amigos.', en: 'My siblings have written letters to their friends.' },
            { es: 'Todavía no hemos visto esa película.', en: 'We haven\'t seen that movie yet.' },
            { es: 'Mi madre ha hecho un pastel delicioso.', en: 'My mother has made a delicious cake.' },
            { es: 'Esta semana he estudiado mucho.', en: 'This week I have studied a lot.' }
          ]
        },
        {
          heading: 'When to use it vs. the <em>preterite</em>',
          body: 'Here\'s the tricky part: the preterite ("I ate") and the present perfect ("I have eaten") OVERLAP. In Spain, the present perfect is used more — for anything that happened today or recently. In Latin America, the preterite is preferred for almost any past action.<br><br>Quick guidance for your writing:<br><br>• <em>Hoy he comido tacos.</em> (Spain-style) / <em>Hoy comí tacos.</em> (Latin American style) — both correct.<br>• <em>Ayer comí tacos.</em> — preterite preferred (specific past time).<br>• <em>He comido tacos muchas veces en mi vida.</em> — present perfect (life experience).<br><br>For US students learning Latin American Spanish, default to preterite for clear past events. Use present perfect mostly for life experiences and "have you ever" type questions.'
        },
        {
          type: 'mistakes',
          heading: 'Present perfect <em>traps</em>',
          body: 'Where students slip with this compound tense:',
          items: [
            'Splitting <strong>haber and the past participle</strong> — wrong. <em>"He no comido"</em> should be <em>"No he comido."</em> The pieces stay together. NOTHING goes between them — not adverbs, not pronouns, not negatives.',
            'Putting <strong>object pronouns between</strong> the two pieces — wrong. <em>"He lo visto"</em> should be <em>"Lo he visto."</em> Pronouns go BEFORE haber, never between.',
            'Forgetting the <strong>irregular past participles</strong> — wrong. <em>"He hacido"</em> should be <em>"He hecho."</em> <em>"He escribido"</em> should be <em>"He escrito."</em> Memorize the list: hecho, dicho, visto, escrito, abierto, puesto, vuelto, muerto, roto.',
            'Making the participle <strong>agree with gender or number</strong> — wrong, in this tense. <em>"He comida"</em> or <em>"He comidos"</em> is wrong. With haber, the past participle is ALWAYS in its base form ending in -o: <em>"He comido, has comido, hemos comido."</em> Never changes.',
            'Saying <strong>"habemos"</strong> for nosotros — wrong. The we-form of haber is <em>"hemos"</em> (NOT "habemos," which doesn\'t exist as a real word in modern Spanish — though it\'s used by some speakers, it\'s considered nonstandard).',
            'Confusing <strong>haber with tener</strong> — both can translate as "to have," but they\'re different. <em>Tener</em> = to possess (Tengo un libro = I have a book). <em>Haber</em> = the auxiliary "have" of the perfect tenses (He leído un libro = I have read a book). Different verbs entirely.',
            'Using present perfect for <strong>specific past times</strong> — sometimes wrong. <em>"Ayer he comido tacos"</em> works in Spain but sounds odd in Latin America. For specific times (ayer, anoche, el lunes), Latin Americans use preterite: <em>"Ayer comí tacos."</em> Save present perfect for unspecified or recent past.'
          ]
        }
      ],
      quiz: [
        { q: '¿Tú _____ (ver) la película nueva? — Sí, ya la he visto.', options: [
          { text: 'has visto', correct: true },
          { text: 'viste', correct: false },
          { text: 'veías', correct: false }
        ]},
        { q: 'Mi hermana _____ (escribir) tres ensayos esta semana.', options: [
          { text: 'ha escribido', correct: false },
          { text: 'ha escrito', correct: true },
          { text: 'escribió', correct: false }
        ]},
        { q: 'Nosotros nunca _____ (comer) comida coreana.', options: [
          { text: 'hemos comido', correct: true },
          { text: 'han comido', correct: false },
          { text: 'habemos comido', correct: false }
        ]}
      ]
    },

    // ============================================================================
    // LESSON 53 — Present Subjunctive (Spanish 3) — the mood, not a tense
    // ============================================================================
    {
      id: 'present-subjunctive',
      number: '53',
      level: 'sp3',
      title: 'The <em>present subjunctive</em>',
      summary: 'The subjunctive isn\'t a tense — it\'s a MOOD. Used after expressions of doubt, emotion, wish, hope, and command. The doorway to nuanced Spanish.',
      sections: [
        {
          heading: 'A <em>mood</em>, not a tense',
          body: 'Everything you\'ve learned so far has been the <strong>indicative mood</strong> — verbs that report facts, states, and certainties. The present, preterite, imperfect, future — all indicative.<br><br>The <strong>subjunctive</strong> is different. It\'s used when you\'re NOT stating a fact, but rather expressing:<br><br>• <strong>Wishes</strong> — what you WANT or HOPE someone else does<br>• <strong>Doubt</strong> — what you DON\'T believe is true<br>• <strong>Emotion</strong> — what you FEEL about something happening<br>• <strong>Influence</strong> — what you ASK or RECOMMEND someone do<br>• <strong>Impersonal opinions</strong> — what IS important / necessary / possible<br><br>English barely uses the subjunctive anymore. We say "I hope he comes" and use the same verb form as "He comes." But Spanish keeps a separate mood for these situations.<br><br>Don\'t panic. The subjunctive is one of those topics that seems impossible for a few weeks and then suddenly clicks. This lesson teaches the form and the most common triggers. The trick is repeated exposure — keep reading, listening, practicing.'
        },
        {
          heading: 'The <em>core construction</em>: subject change + "que"',
          body: 'The subjunctive almost always appears in a specific sentence shape:<br><br><strong>(subject 1) + (main verb in indicative) + que + (subject 2) + (verb in subjunctive)</strong><br><br>Three pieces matter:<br><br>1. There are <strong>TWO subjects</strong> — one in each clause. Different people.<br>2. They\'re connected by <strong>que</strong>.<br>3. The first verb is normal (indicative); the second verb is subjunctive.<br><br>Example: <em>Yo quiero que tú estudies.</em><br>(I want that you study = I want you to study.)<br>→ Yo and tú are two different subjects. The first verb (quiero) is normal. The second verb (estudies) is subjunctive.<br><br><strong>Crucial:</strong> if there\'s no subject change — if you\'re talking about yourself wanting to do something yourself — you DON\'T use the subjunctive. You use an infinitive.<br><br>• <em>Quiero estudiar.</em> (I want to study.) — One subject, infinitive.<br>• <em>Quiero que tú estudies.</em> (I want you to study.) — Two subjects, subjunctive.<br><br>This is the single most common trap with the subjunctive. Always check: are there two different subjects?'
        },
        {
          heading: 'How to <em>form</em> the present subjunctive',
          body: 'Here\'s the recipe — and it\'s easier than you think:<br><br><strong>Step 1:</strong> Take the <strong>yo form</strong> of the present indicative.<br>(Why? Because yo-go verbs, stem-changers, and almost every irregular shows up in the yo form. By starting there, you inherit every irregularity automatically.)<br><br><strong>Step 2:</strong> Drop the <strong>-o</strong>.<br><br><strong>Step 3:</strong> Add the OPPOSITE vowel endings:<br>• For <strong>-AR verbs</strong>: add endings starting with <strong>-e</strong><br>• For <strong>-ER and -IR verbs</strong>: add endings starting with <strong>-a</strong><br><br>This is called the "opposite vowel" trick. -AR verbs use the typical -ER/-IR endings; -ER/-IR verbs use the -AR endings. Spanish is messing with you on purpose.'
        },
        {
          heading: 'Regular <em>-AR</em> verbs: hablar',
          body: 'Yo form: <em>hablo</em>. Drop the -o → <em>habl-</em>. Add the e-endings:',
          conjugation: [
            ['yo', 'habl<strong>e</strong>'],
            ['tú', 'habl<strong>es</strong>'],
            ['él / ella / usted', 'habl<strong>e</strong>'],
            ['nosotros', 'habl<strong>emos</strong>'],
            ['vosotros', 'habl<strong>éis</strong>'],
            ['ellos / ellas / ustedes', 'habl<strong>en</strong>']
          ]
        },
        {
          heading: 'Regular <em>-ER</em> and <em>-IR</em> verbs',
          body: 'Yo form of comer: <em>como</em>. Drop the -o → <em>com-</em>. Add the a-endings:<br><br><strong>comer</strong>: coma, comas, coma, comamos, comáis, coman<br><strong>vivir</strong>: viva, vivas, viva, vivamos, viváis, vivan<br><strong>escribir</strong>: escriba, escribas, escriba, escribamos, escribáis, escriban<br><br>Same endings for -ER and -IR — and notice they look exactly like the present tense of -AR verbs. That\'s the "opposite vowel" effect.'
        },
        {
          heading: 'The <em>yo-form rule</em> in action',
          body: 'Because we start from the yo form, every irregular yo carries over to ALL forms of the subjunctive automatically. Watch:<br><br>• <strong>tener</strong> → yo form <em>tengo</em> → subjunctive: <em>tenga, tengas, tenga, tengamos, tengáis, tengan</em><br>• <strong>venir</strong> → yo form <em>vengo</em> → subjunctive: <em>venga, vengas, venga, vengamos, vengáis, vengan</em><br>• <strong>hacer</strong> → yo form <em>hago</em> → subjunctive: <em>haga, hagas, haga, hagamos, hagáis, hagan</em><br>• <strong>decir</strong> → yo form <em>digo</em> → subjunctive: <em>diga, digas, diga, digamos, digáis, digan</em><br>• <strong>conocer</strong> → yo form <em>conozco</em> → subjunctive: <em>conozca, conozcas, conozca, conozcamos, conozcáis, conozcan</em><br>• <strong>oír</strong> → yo form <em>oigo</em> → subjunctive: <em>oiga, oigas, oiga, oigamos, oigáis, oigan</em><br><br>All the yo-go verbs (tener, venir, poner, salir, hacer, decir, traer, oír, caer) work this way. The yo form does the heavy lifting.'
        },
        {
          heading: 'Stem-changers in the <em>subjunctive</em>',
          body: 'Stem-changing verbs follow the boot pattern in the subjunctive too — same as present indicative. Yo, tú, él, and ellos stem-change; nosotros and vosotros don\'t.<br><br><strong>querer (e→ie):</strong> quiera, quieras, quiera, queramos, queráis, quieran<br><strong>poder (o→ue):</strong> pueda, puedas, pueda, podamos, podáis, puedan<br><strong>pedir (e→i):</strong> pida, pidas, pida, pidamos, pidáis, pidan<br><br>Special wrinkle for <strong>-IR stem-changers</strong>: in the subjunctive, the stem ALSO changes in the nosotros and vosotros forms (just slightly differently). <em>sentir</em> (e→ie/i): sienta, sientas, sienta, <strong>sintamos</strong>, <strong>sintáis</strong>, sientan. <em>dormir</em> (o→ue/u): duerma, duermas, duerma, <strong>durmamos</strong>, <strong>durmáis</strong>, duerman.<br><br>This -IR-only quirk is real but easy to forget. If you mess it up, native speakers will understand you anyway.'
        },
        {
          heading: 'The <em>spelling-change</em> verbs',
          body: 'Just like in the preterite yo form, verbs ending in -car, -gar, -zar shift their spelling in the subjunctive — but this time in ALL forms (because the subjunctive endings start with e, which would change the sound otherwise).<br><br><strong>buscar:</strong> busque, busques, busque, busquemos, busquéis, busquen (c→qu)<br><strong>llegar:</strong> llegue, llegues, llegue, lleguemos, lleguéis, lleguen (g→gu)<br><strong>empezar:</strong> empiece, empieces, empiece, empecemos, empecéis, empiecen (z→c, and the stem still changes for -ar verb)<br><br>Same logic as the preterite shifts you already learned: Spanish preserves the consonant sound across vowel changes.'
        },
        {
          heading: 'The <em>only 6 irregulars</em>: D.I.S.H.E.S.',
          body: 'Six verbs don\'t follow the yo-form rule. They have their own subjunctive stems. The common mnemonic is <strong>D.I.S.H.E.S.</strong>:<br><br>• <strong>D</strong>ar → dé, des, dé, demos, deis, den (notice the accent on dé to distinguish from <em>de</em> the preposition)<br>• <strong>I</strong>r → vaya, vayas, vaya, vayamos, vayáis, vayan<br>• <strong>S</strong>aber → sepa, sepas, sepa, sepamos, sepáis, sepan<br>• <strong>H</strong>aber → haya, hayas, haya, hayamos, hayáis, hayan (used in compound subjunctive tenses)<br>• <strong>E</strong>star → esté, estés, esté, estemos, estéis, estén (notice the accents on the singular forms)<br>• <strong>S</strong>er → sea, seas, sea, seamos, seáis, sean<br><br>Memorize these. They show up constantly because they\'re among the most common Spanish verbs.'
        },
        {
          heading: 'When to <em>use</em> it: the WEIRDO triggers',
          body: 'A widely-taught mnemonic for the subjunctive triggers is <strong>WEIRDO</strong>. The main verb (in the indicative) falls into one of these six categories, and the verb after <em>que</em> goes into the subjunctive:<br><br><strong>W — Wishes / Want / Hope</strong><br>• <em>querer que</em>, <em>esperar que</em>, <em>desear que</em>, <em>preferir que</em><br>• <em>Quiero que estudies más.</em> (I want you to study more.)<br><br><strong>E — Emotion</strong><br>• <em>alegrarse de que</em>, <em>sentir que</em>, <em>temer que</em>, <em>tener miedo de que</em>, <em>me gusta que</em>, <em>me molesta que</em><br>• <em>Me alegra que estés aquí.</em> (I\'m glad you\'re here.)<br><br><strong>I — Impersonal expressions</strong><br>• <em>es importante que</em>, <em>es necesario que</em>, <em>es posible que</em>, <em>es bueno que</em>, <em>es triste que</em><br>• <em>Es importante que llegues a tiempo.</em> (It\'s important that you arrive on time.)<br><br><strong>R — Recommendations / Requests / Commands</strong><br>• <em>recomendar que</em>, <em>sugerir que</em>, <em>pedir que</em>, <em>insistir en que</em>, <em>decir que</em> (as a command)<br>• <em>Te pido que me ayudes.</em> (I ask you to help me.)<br><br><strong>D — Doubt / Disbelief / Denial</strong><br>• <em>dudar que</em>, <em>no creer que</em>, <em>no pensar que</em>, <em>no es verdad que</em>, <em>negar que</em><br>• <em>Dudo que llueva mañana.</em> (I doubt it will rain tomorrow.)<br><br><strong>O — Ojalá</strong> (and similar wishes for the future)<br>• <em>Ojalá llueva pronto.</em> (I hope it rains soon.)<br><br>If your main verb fits one of these six categories AND there\'s a subject change, the verb after que goes into the subjunctive. Otherwise, it stays indicative.'
        },
        {
          heading: 'Examples in <em>action</em>',
          body: '',
          examples: [
            { es: 'Quiero que mis padres estén orgullosos de mí.', en: 'I want my parents to be proud of me. (W — want)' },
            { es: 'Mi profesor recomienda que estudiemos cada noche.', en: 'My teacher recommends that we study every night. (R — recommend)' },
            { es: 'Es necesario que tengas paciencia.', en: 'It\'s necessary that you have patience. (I — impersonal)' },
            { es: 'No creo que María venga a la fiesta.', en: 'I don\'t think María is coming to the party. (D — doubt)' },
            { es: 'Me alegra que hayas llegado bien.', en: 'I\'m glad you arrived safely. (E — emotion; with present perfect subjunctive)' },
            { es: 'Ojalá ganen el partido.', en: 'I hope they win the game. (O — ojalá)' },
            { es: 'Es posible que llueva esta tarde.', en: 'It\'s possible that it will rain this afternoon. (I — impersonal)' },
            { es: 'Te pido que seas honesto conmigo.', en: 'I ask you to be honest with me. (R — request)' }
          ]
        },
        {
          type: 'tip',
          heading: 'When it\'s <em>NOT</em> subjunctive',
          body: 'Three common scenarios where you might expect the subjunctive but it\'s actually indicative:<br><br><strong>1. No subject change → use infinitive instead</strong><br>• ❌ <em>Quiero que estudie.</em> (Wait, who? Ambiguous, sounds incomplete.)<br>• ✅ <em>Quiero estudiar.</em> (I want to study — same subject for both verbs.)<br>• ✅ <em>Quiero que tú estudies.</em> (I want you to study — different subjects.)<br><br><strong>2. Strong belief / certainty → indicative</strong><br>• ❌ <em>Creo que sea cierto.</em><br>• ✅ <em>Creo que es cierto.</em> (I believe it\'s true — affirming belief uses indicative)<br>• ✅ <em>No creo que sea cierto.</em> (I don\'t believe it\'s true — DENYING belief uses subjunctive)<br><br>The flip: positive belief is indicative; negative belief is subjunctive. Same with <em>pensar, suponer, estar seguro de</em>.<br><br><strong>3. Reporting facts → indicative</strong><br>• ❌ <em>Sé que tengas razón.</em><br>• ✅ <em>Sé que tienes razón.</em> (I know you\'re right — saying you KNOW uses indicative)<br><br>Knowledge is fact. Doubt is subjunctive. <em>Saber que</em> is always indicative.'
        },
        {
          type: 'tip',
          heading: 'The <em>"sequence of tenses"</em> connection',
          body: 'You\'ve already met the past subjunctive (Lesson 59). Here\'s how it fits together:<br><br>• <strong>Present main verb → present subjunctive</strong><br><em>Quiero que vengas.</em> (I want you to come.)<br><br>• <strong>Past main verb → past subjunctive</strong><br><em>Quería que vinieras.</em> (I wanted you to come.)<br><br>The tense of the main verb determines whether the subordinate verb is present or past subjunctive. Spanish calls this <em>la concordancia de tiempos</em> (sequence of tenses).<br><br>For now, focus on the present subjunctive. Once it feels natural, the past subjunctive (which uses preterite-based forms) will slot in easily.'
        },
        {
          type: 'mistakes',
          heading: 'Present subjunctive <em>traps</em>',
          body: 'Where students slip when first learning the subjunctive:',
          items: [
            'Using <strong>indicative when subjunctive is required</strong> — wrong. <em>"Quiero que tú estudias"</em> should be <em>"Quiero que tú estudies."</em> After querer + que (with a subject change), the second verb MUST be subjunctive.',
            'Using <strong>subjunctive when there\'s NO subject change</strong> — wrong. <em>"Quiero que yo estudie"</em> sounds weird; if YOU want YOURSELF to study, just say <em>"Quiero estudiar."</em> Subjunctive needs a subject change.',
            'Forgetting that <strong>creer que (affirmative) takes indicative</strong> — wrong. <em>"Creo que sea verdad"</em> should be <em>"Creo que es verdad."</em> Believing something AFFIRMS reality → indicative. Only <em>no creo que</em> denies it → subjunctive.',
            'Using <strong>indicative endings on -AR subjunctive</strong> — wrong. <em>"Quiero que hablas"</em> should be <em>"Quiero que hables."</em> The opposite-vowel trick: -AR verbs use e-endings in the subjunctive.',
            'Forgetting the <strong>nosotros subjunctive vowel</strong> — <em>hablemos</em> (not "hablamos") for the subjunctive. The indicative nosotros of hablar is <em>hablamos</em>; the subjunctive is <em>hablemos</em>. One vowel different, BIG difference in meaning.',
            'Skipping the <strong>yo-form irregularity</strong> — wrong. <em>"Quiero que tenes"</em> should be <em>"Quiero que tengas"</em> (from yo form <em>tengo</em>). Always start from the yo form to inherit irregularities.',
            'Forgetting the <strong>DISHES irregulars</strong> — these don\'t follow the yo-form rule. <em>"Quiero que vayes"</em> is wrong; should be <em>"Quiero que vayas."</em> Same for dé, sepa, haya, esté, sea.',
            'Confusing <strong>"que" the connector with "qué" the question word</strong> — the subjunctive connector <em>que</em> has NO accent. The question word <em>qué</em> (what) HAS an accent. Don\'t mix them up in writing.',
            'Using <strong>subjunctive after expressions of certainty</strong> — wrong. <em>"Es verdad que sea cierto"</em> is wrong; should be <em>"Es verdad que es cierto."</em> <em>Es verdad, es cierto, estoy seguro</em> all affirm reality → indicative.',
            'Forgetting that <strong>ojalá ALWAYS triggers subjunctive</strong> — even without "que." <em>"Ojalá llueva"</em> (I hope it rains). NEVER <em>"Ojalá llueve."</em> Ojalá comes from Arabic ("if God wills") and grammatically demands the subjunctive every time.',
            'Trying to use the subjunctive in <strong>direct yes/no questions</strong> — usually wrong. <em>"¿Quieres que vaya?"</em> (Do you want me to go?) uses subjunctive correctly because it embeds a wish. But <em>"¿Va María?"</em> (Is María going?) just asks a fact — indicative. The trigger is meaning, not the question mark.'
          ]
        },
        {
          type: 'tip',
          heading: 'A <em>final note</em>',
          body: 'The subjunctive feels overwhelming at first because it touches every major topic at once: verb formation, sentence structure, meaning, register. Don\'t try to master it in one week.<br><br>What works:<br><br>1. <strong>Memorize the DISHES irregulars first.</strong> Six verbs, six conjugations. Do them cold. They show up constantly.<br><br>2. <strong>Drill three triggers at a time.</strong> Start with the W (wishes — quiero que, espero que). Get fluent there. Then add D (doubt — no creo que, dudo que). Then E (emotion — me alegra que). Layer the triggers in.<br><br>3. <strong>Read Spanish dialogue.</strong> Subjunctive shows up in nearly every conversation between native speakers. The more you see <em>"Quiero que…"</em> and <em>"Espero que…"</em> in real Spanish, the more your ear builds the pattern.<br><br>4. <strong>Don\'t fear mistakes.</strong> Even C2-level speakers occasionally pick indicative when subjunctive is "correct" — and they\'re still understood. The subjunctive is the difference between "good" and "elegant" Spanish, not "right" and "wrong."'
        }
      ],
      quiz: [
        { q: 'Mi madre quiere que yo _____ (estudiar) más.', options: [
          { text: 'estudio', correct: false },
          { text: 'estudie', correct: true },
          { text: 'estudiaba', correct: false }
        ]},
        { q: 'No creo que él _____ (tener) razón.', options: [
          { text: 'tiene', correct: false },
          { text: 'tenga', correct: true },
          { text: 'tendría', correct: false }
        ]},
        { q: 'Es importante que nosotros _____ (llegar) a tiempo.', options: [
          { text: 'lleguemos', correct: true },
          { text: 'llegamos', correct: false },
          { text: 'llegaremos', correct: false }
        ]}
      ]
    },

    // ============================================================================
    // LESSON 54 — Verb Transitivity Reference (Spanish 2 reference / lookup lesson)
    // ============================================================================
    {
      id: 'verb-transitivity',
      number: '54',
      level: 'sp2',
      title: 'Verb <em>transitivity</em> reference',
      summary: 'Which Spanish verbs take direct objects, indirect objects, both, or neither. Use this as a lookup when you\'re trying to figure out which pronoun a verb needs.',
      sections: [
        {
          heading: 'Why this <em>matters</em>',
          body: 'When you use object pronouns, you need to know what kind of object the verb takes. Verbs fall into a few categories:<br><br>• <strong>Transitive</strong> — takes a direct object (the thing acted on). Use <em>lo/la/los/las</em>.<br>• <strong>Indirect-object verbs</strong> — like gustar, encantar. The "thing" is the subject; the person uses <em>me/te/le/nos/os/les</em>.<br>• <strong>Ditransitive</strong> — takes BOTH a direct AND indirect object. Like dar, decir, mandar. You can use BOTH pronouns.<br>• <strong>Intransitive</strong> — takes no object. Like ir, dormir, llegar. No object pronouns at all.<br>• <strong>Reflexive-only</strong> — must always be used with a reflexive pronoun.<br>• <strong>Spanish-uses-preposition</strong> — verbs that look transitive in English but require a preposition in Spanish (jugar A, casarse CON, soñar CON).<br><br>Knowing which group a verb belongs to is the difference between sounding fluent and sounding confused. Bookmark this page.'
        },
        {
          heading: 'Direct-object verbs (<em>transitive</em>)',
          body: 'These take a direct object — the thing being acted on. To pronominalize, use <em>lo, la, los, las</em>. The person doing the action is the subject; the object is what receives the action.',
          examples: [
            { es: 'comer', en: 'to eat — Como tacos. → Los como.' },
            { es: 'ver', en: 'to see — Veo la película. → La veo.' },
            { es: 'leer', en: 'to read — Leo el libro. → Lo leo.' },
            { es: 'beber', en: 'to drink — Bebo el agua. → La bebo.' },
            { es: 'comprar', en: 'to buy — Compro las flores. → Las compro.' },
            { es: 'tener', en: 'to have — Tengo la llave. → La tengo.' },
            { es: 'hacer', en: 'to do/make — Hago la tarea. → La hago.' },
            { es: 'querer', en: 'to want / love — Quiero el coche. → Lo quiero. (with people: Quiero a mi madre. → La quiero.)' },
            { es: 'estudiar', en: 'to study — Estudio español. → Lo estudio.' },
            { es: 'escribir', en: 'to write — Escribo la carta. → La escribo.' },
            { es: 'conocer', en: 'to know (people/places) — Conozco a María. → La conozco.' },
            { es: 'saber', en: 'to know (facts) — Sé la respuesta. → La sé.' },
            { es: 'buscar', en: 'to look for — Busco las llaves. → Las busco. (no preposition!)' },
            { es: 'esperar', en: 'to wait for / hope — Espero el autobús. → Lo espero. (no preposition!)' },
            { es: 'mirar', en: 'to watch — Miro la tele. → La miro. (no preposition!)' },
            { es: 'escuchar', en: 'to listen to — Escucho la radio. → La escucho. (no preposition!)' },
            { es: 'pagar', en: 'to pay (for) — Pago la cena. → La pago. (no preposition!)' },
            { es: 'pedir', en: 'to ask for / order — Pido la pizza. → La pido. (no preposition!)' }
          ]
        },
        {
          type: 'tip',
          heading: '"No preposition" <em>warning</em>',
          body: 'Six Spanish verbs notably do NOT use a preposition the way their English equivalents do:<br><br>• <strong>buscar</strong> ≠ "look FOR" — just <em>buscar X</em><br>• <strong>esperar</strong> ≠ "wait FOR" — just <em>esperar X</em><br>• <strong>mirar</strong> ≠ "look AT" — just <em>mirar X</em><br>• <strong>escuchar</strong> ≠ "listen TO" — just <em>escuchar X</em><br>• <strong>pagar</strong> ≠ "pay FOR" — just <em>pagar X</em> (you can also say <em>pagar por X</em>)<br>• <strong>pedir</strong> ≠ "ask FOR" — just <em>pedir X</em><br><br>Students translate "I look for my keys" as <em>"Busco POR mis llaves"</em> — wrong. Just <em>"Busco mis llaves."</em> The verb already has "for" built in.'
        },
        {
          heading: 'Indirect-object verbs (the <em>gustar family</em>)',
          body: 'These verbs work BACKWARD compared to English. The thing being liked/interesting/etc. is the SUBJECT (does the verb-agreeing). The person experiencing it gets the indirect-object pronoun (<em>me, te, le, nos, os, les</em>).',
          examples: [
            { es: 'gustar', en: 'to be pleasing to — Me gusta el café. (Coffee is pleasing to me.)' },
            { es: 'encantar', en: 'to enchant / love — Me encanta la música.' },
            { es: 'interesar', en: 'to interest — Me interesan los libros. (plural verb because libros is plural)' },
            { es: 'molestar', en: 'to bother — Me molesta el ruido.' },
            { es: 'faltar', en: 'to be lacking / missing — Me falta dinero.' },
            { es: 'doler', en: 'to hurt — Me duele la cabeza. (My head hurts to me.)' },
            { es: 'importar', en: 'to matter / care — No me importa.' },
            { es: 'fascinar', en: 'to fascinate — Me fascinan las estrellas.' },
            { es: 'quedar', en: 'to have left / fit — Me quedan dos dólares.' },
            { es: 'parecer', en: 'to seem — Me parece interesante.' },
            { es: 'tocar', en: 'to be one\'s turn — Te toca a ti.' },
            { es: 'sorprender', en: 'to surprise — Me sorprende la noticia.' },
            { es: 'preocupar', en: 'to worry — Me preocupa el examen.' },
            { es: 'apetecer', en: 'to feel like (food/drink) — ¿Te apetece un café?' }
          ]
        },
        {
          heading: 'Ditransitive verbs (take <em>BOTH</em> direct and indirect)',
          body: 'These are the "give X to Y" / "tell X to Y" verbs. They take TWO objects: a thing (direct) and a person (indirect). When you use both as pronouns, remember the <strong>le → se</strong> rule.',
          examples: [
            { es: 'dar', en: 'to give — Le doy el libro a María. → Se lo doy.' },
            { es: 'decir', en: 'to say/tell — Le digo la verdad a mi madre. → Se la digo.' },
            { es: 'mandar', en: 'to send — Le mando una carta a mi tío. → Se la mando.' },
            { es: 'enviar', en: 'to send — Le envío un correo al profesor. → Se lo envío.' },
            { es: 'regalar', en: 'to give as a gift — Le regalo flores a mi madre. → Se las regalo.' },
            { es: 'comprar', en: 'to buy (for someone) — Le compro un libro a mi hermano. → Se lo compro.' },
            { es: 'mostrar', en: 'to show — Le muestro las fotos a mi padre. → Se las muestro.' },
            { es: 'enseñar', en: 'to teach / show — Le enseño español a la clase. → Se lo enseño.' },
            { es: 'explicar', en: 'to explain — Le explico la lección al estudiante. → Se la explico.' },
            { es: 'prestar', en: 'to lend — Le presto el carro a mi amiga. → Se lo presto.' },
            { es: 'devolver', en: 'to return (something) — Le devuelvo el libro a María. → Se lo devuelvo.' },
            { es: 'preguntar', en: 'to ask (a question) — Le pregunto la hora a mi tío. → Se la pregunto.' },
            { es: 'contar', en: 'to tell (a story) — Le cuento un cuento a mi hijo. → Se lo cuento.' },
            { es: 'ofrecer', en: 'to offer — Le ofrezco un café al invitado. → Se lo ofrezco.' }
          ]
        },
        {
          heading: 'Intransitive verbs (no <em>object</em>)',
          body: 'These verbs don\'t take a direct object at all. You don\'t need lo/la/le with them. They usually involve motion, state, or a self-contained action.',
          examples: [
            { es: 'ir', en: 'to go — Voy al cine. (no direct object — "al cine" is location)' },
            { es: 'venir', en: 'to come — Vienes mañana?' },
            { es: 'llegar', en: 'to arrive — Llegamos tarde.' },
            { es: 'salir', en: 'to leave / go out — Salgo de casa.' },
            { es: 'entrar', en: 'to enter — Entré en la tienda.' },
            { es: 'dormir', en: 'to sleep — Duermo ocho horas.' },
            { es: 'vivir', en: 'to live — Vivo en Cincinnati.' },
            { es: 'nacer', en: 'to be born — Nací en 1990.' },
            { es: 'morir', en: 'to die — Mi abuelo murió.' },
            { es: 'caminar', en: 'to walk — Camino al parque.' },
            { es: 'correr', en: 'to run — Corro cada mañana.' },
            { es: 'nadar', en: 'to swim — Nado en la piscina.' },
            { es: 'reír', en: 'to laugh — Me río mucho.' },
            { es: 'llorar', en: 'to cry — La niña llora.' },
            { es: 'crecer', en: 'to grow — Los niños crecen rápido.' }
          ]
        },
        {
          heading: 'Reflexive-only verbs (<em>always need</em> a pronoun)',
          body: 'A small group of verbs ONLY exist in reflexive form. You can\'t use them without me/te/se/nos/os/se.',
          examples: [
            { es: 'quejarse (de)', en: 'to complain — Me quejo del ruido.' },
            { es: 'arrepentirse (de)', en: 'to regret — Me arrepiento de mi decisión.' },
            { es: 'atreverse (a)', en: 'to dare — No me atrevo a hacerlo.' },
            { es: 'jactarse (de)', en: 'to boast — Se jacta de su éxito.' },
            { es: 'darse cuenta (de)', en: 'to realize — Me doy cuenta de la verdad.' },
            { es: 'fijarse (en)', en: 'to notice — Me fijé en su pelo.' },
            { es: 'enterarse (de)', en: 'to find out about — Me enteré de la noticia.' },
            { es: 'olvidarse (de)', en: 'to forget — Me olvidé de mi cita.' },
            { es: 'acordarse (de)', en: 'to remember — Me acuerdo de ese día.' },
            { es: 'burlarse (de)', en: 'to make fun of — Se burlan de él.' }
          ]
        },
        {
          type: 'tip',
          heading: 'Verbs that take <em>specific prepositions</em>',
          body: 'Some verbs that look transitive in English actually require a preposition in Spanish. Memorize these — they\'re common errors:<br><br><strong>Verbs that take "a":</strong><br>• <em>jugar A</em> (to play a sport/game) — <em>Juego al fútbol</em><br>• <em>asistir A</em> (to attend) — <em>Asisto a la clase</em><br>• <em>parecerse A</em> (to look like) — <em>Me parezco a mi madre</em><br>• <em>oler A</em> (to smell like) — <em>Huele a café</em><br>• <em>saber A</em> (to taste like) — <em>Sabe a limón</em><br><br><strong>Verbs that take "de":</strong><br>• <em>depender DE</em> — <em>Depende de ti</em><br>• <em>salir DE</em> (to leave a place) — <em>Salgo de la casa</em><br>• <em>tratarse DE</em> (to be about) — <em>Se trata de un libro nuevo</em><br>• <em>burlarse DE</em>, <em>darse cuenta DE</em>, <em>enterarse DE</em>, <em>olvidarse DE</em>, <em>acordarse DE</em>, <em>quejarse DE</em> (most reflexive-only verbs above)<br><br><strong>Verbs that take "con":</strong><br>• <em>casarse CON</em> (to marry someone) — <em>Me casé con Juan</em><br>• <em>soñar CON</em> (to dream of/about) — <em>Sueño con viajar</em><br>• <em>contar CON</em> (to count on) — <em>Cuento contigo</em><br>• <em>encontrarse CON</em> (to meet up with) — <em>Me encuentro con María</em><br><br><strong>Verbs that take "en":</strong><br>• <em>entrar EN/A</em> (to enter — both work) — <em>Entró en la casa</em><br>• <em>pensar EN</em> (to think about) — <em>Pienso en ti</em><br>• <em>consistir EN</em> (to consist of) — <em>Consiste en tres partes</em><br>• <em>insistir EN</em> (to insist on) — <em>Insiste en venir</em>'
        },
        {
          heading: 'The "<em>backward verb</em>" mental check',
          body: 'When you encounter a new verb and aren\'t sure which kind it is, ask:<br><br><strong>(1) Does the THING do the verb to the PERSON?</strong> (Like gustar, doler, fascinar.) → Indirect-object verb. Use me/te/le.<br><br><strong>(2) Does the PERSON do the verb to a THING?</strong> (Like comer, leer, escribir.) → Transitive (direct object). Use lo/la.<br><br><strong>(3) Does the PERSON do the verb, giving or transferring something to ANOTHER PERSON?</strong> (Like dar, decir, mandar.) → Ditransitive. Both pronouns.<br><br><strong>(4) Does the verb just describe what someone IS DOING with no object?</strong> (Like dormir, caminar, llegar.) → Intransitive. No object pronouns.<br><br>This quick check usually gets you the right answer.'
        }
      ],
      quiz: [
        { q: 'Which group does "gustar" belong to?', options: [
          { text: 'Direct-object verb (transitive)', correct: false },
          { text: 'Indirect-object verb (backward)', correct: true },
          { text: 'Intransitive verb', correct: false }
        ]},
        { q: 'Which sentence is WRONG?', options: [
          { text: 'Busco mis llaves.', correct: false },
          { text: 'Espero el autobús.', correct: false },
          { text: 'Busco por mis llaves.', correct: true }
        ]},
        { q: 'Which verb is reflexive-only (always needs me/te/se)?', options: [
          { text: 'comer', correct: false },
          { text: 'gustar', correct: false },
          { text: 'quejarse', correct: true }
        ]}
      ]
    },

    // ============================================================================
    // LESSON 55 — Past Participles as Adjectives (Spanish 2)
    // ============================================================================
    {
      id: 'participles-as-adjectives',
      number: '55',
      level: 'sp2',
      title: 'Past participles as <em>adjectives</em>',
      summary: 'Past participles aren\'t just for the perfect tenses. They double as adjectives — describing states, conditions, and results. When they work as adjectives, they agree with gender and number like any other adjective.',
      sections: [
        {
          heading: 'Two <em>jobs</em> for one form',
          body: 'You just learned past participles for the present perfect tense (<em>he comido, has visto, hemos escrito</em>). But that\'s only one job they do.<br><br>Past participles also work as <strong>adjectives</strong> — describing the resulting state of something. And when they do, they follow all the rules of regular adjectives: they agree in gender and number with the noun they describe.<br><br>Compare these two uses:<br><br>• <strong>As part of a perfect tense (with HABER):</strong><br><em>He cerrado la puerta.</em> (I have closed the door.) → cerrado stays in -o form, never changes.<br><br>• <strong>As an adjective (with ESTAR):</strong><br><em>La puerta está cerrada.</em> (The door is closed.) → cerrada agrees with puerta (feminine).<br><br>Same word — <em>cerrado/cerrada</em> — different jobs.'
        },
        {
          heading: 'How to <em>form</em> the past participle (refresher)',
          body: 'Same rules as the present perfect lesson:<br><br>• <strong>-AR verbs:</strong> drop the -ar, add <strong>-ado</strong>. <em>cerrar → cerrado</em>, <em>preparar → preparado</em>, <em>pintar → pintado</em>.<br>• <strong>-ER and -IR verbs:</strong> drop the ending, add <strong>-ido</strong>. <em>perder → perdido</em>, <em>vestir → vestido</em>, <em>aburrir → aburrido</em>.<br><br>And remember the irregulars (these also work as adjectives — and they ALSO agree in gender/number when used that way):<br><br>• <em>abrir → abierto</em> (open, opened)<br>• <em>cubrir → cubierto</em> (covered)<br>• <em>decir → dicho</em> (said)<br>• <em>escribir → escrito</em> (written)<br>• <em>hacer → hecho</em> (done, made)<br>• <em>morir → muerto</em> (dead)<br>• <em>poner → puesto</em> (put, placed)<br>• <em>resolver → resuelto</em> (solved)<br>• <em>romper → roto</em> (broken)<br>• <em>ver → visto</em> (seen)<br>• <em>volver → vuelto</em> (returned)'
        },
        {
          heading: 'The <em>agreement</em> rule',
          body: 'When the past participle works as an adjective, it agrees with the noun in <strong>both gender AND number</strong>. Just like any other adjective:',
          conjugation: [
            ['Masculine singular', 'cerrad<strong>o</strong>, escrit<strong>o</strong>, abiert<strong>o</strong>, roto'],
            ['Feminine singular', 'cerrad<strong>a</strong>, escrit<strong>a</strong>, abiert<strong>a</strong>, rota'],
            ['Masculine plural', 'cerrad<strong>os</strong>, escrit<strong>os</strong>, abiert<strong>os</strong>, rotos'],
            ['Feminine plural', 'cerrad<strong>as</strong>, escrit<strong>as</strong>, abiert<strong>as</strong>, rotas']
          ]
        },
        {
          heading: 'The classic structure: <em>estar + past participle</em>',
          body: 'The most common use of participles as adjectives is with <strong>estar</strong> to describe the RESULTING state of an action — what something is LIKE after something has been done to it.',
          examples: [
            { es: 'La puerta está cerrada.', en: 'The door is closed.' },
            { es: 'Los libros están abiertos en la mesa.', en: 'The books are open on the table.' },
            { es: 'La ventana está rota.', en: 'The window is broken.' },
            { es: 'Las cartas están escritas en español.', en: 'The letters are written in Spanish.' },
            { es: 'La comida está preparada.', en: 'The food is prepared.' },
            { es: 'Mi hermano está casado.', en: 'My brother is married.' },
            { es: 'Estoy cansado.', en: 'I am tired. (cansar → cansado: the state of being tired)' },
            { es: 'María está sentada en el sofá.', en: 'María is seated on the sofa.' }
          ]
        },
        {
          heading: 'Past participles <em>before nouns</em>',
          body: 'Past participles can also describe nouns directly, just like any adjective — usually placed AFTER the noun (like most Spanish adjectives).',
          examples: [
            { es: 'una ventana rota', en: 'a broken window' },
            { es: 'una puerta cerrada', en: 'a closed door' },
            { es: 'un libro abierto', en: 'an open book' },
            { es: 'una carta escrita', en: 'a written letter' },
            { es: 'una casa pintada', en: 'a painted house' },
            { es: 'unas flores muertas', en: 'some dead flowers' },
            { es: 'los platos sucios', en: 'the dirty plates (sucio is an adjective, but the structure is the same)' },
            { es: 'un examen resuelto', en: 'a solved exam' }
          ]
        },
        {
          type: 'tip',
          heading: '<em>Ser vs estar</em> + past participle',
          body: 'The verb you pair with the participle changes the meaning subtly:<br><br>• <strong>ESTAR + past participle</strong> describes the <strong>resulting state</strong>. What something IS LIKE right now, after something happened.<br><em>La puerta está cerrada.</em> = The door is in a closed state. (Someone closed it earlier; now it\'s closed.)<br><br>• <strong>SER + past participle</strong> is rarer — it creates the <strong>passive voice</strong> (the action itself is being done).<br><em>La puerta fue cerrada por el guardia.</em> = The door was closed by the guard. (Focus on the action, with the doer named.)<br><br>For everyday speech, <strong>estar + participle</strong> is far more common. Save ser + participle for formal writing or when you specifically want the passive voice. In casual Spanish, speakers often skip the passive entirely: instead of <em>"la puerta fue cerrada por el guardia,"</em> they\'ll say <em>"el guardia cerró la puerta"</em> (active voice — the guard closed the door).'
        },
        {
          type: 'tip',
          heading: 'Some "<em>adjectives</em>" you didn\'t realize were participles',
          body: 'Many Spanish adjectives you already know are technically past participles in disguise:<br><br>• <em>cansado</em> (tired) — from <em>cansar</em> (to tire)<br>• <em>aburrido</em> (bored / boring) — from <em>aburrir</em> (to bore)<br>• <em>casado</em> (married) — from <em>casar</em> (to marry off)<br>• <em>preocupado</em> (worried) — from <em>preocupar</em> (to worry)<br>• <em>perdido</em> (lost) — from <em>perder</em> (to lose)<br>• <em>enojado</em> (angry) — from <em>enojar</em> (to anger)<br>• <em>dormido</em> (asleep) — from <em>dormir</em> (to sleep)<br>• <em>despierto</em> (awake) — irregular participle of <em>despertar</em><br>• <em>roto</em> (broken) — irregular participle of <em>romper</em><br><br>You\'ve been using past-participle adjectives all along without realizing it. The grammar is just naming what you already know how to do.'
        },
        {
          type: 'mistakes',
          heading: 'Participle-as-adjective <em>traps</em>',
          body: 'Where students slip:',
          items: [
            'Forgetting to <strong>agree the participle</strong> with the noun — wrong. <em>"La puerta está cerrado"</em> should be <em>"cerrada"</em> (feminine). When the participle is an adjective, it MUST agree in gender and number.',
            'Adding agreement <strong>with haber</strong> — wrong. With haber, the participle stays in -o ALWAYS. <em>"Ella ha comida"</em> is wrong; <em>"Ella ha comido"</em> is right. Agreement only happens when the participle is acting as an adjective (with estar, with ser, or directly modifying a noun).',
            'Forgetting that <strong>irregulars also agree</strong> — wrong. <em>"Las ventanas están rota"</em> should be <em>"rotas"</em>. Same for <em>escrito → escritas, abierto → abiertas, puesto → puestas, vuelto → vueltas</em>. The irregular form doesn\'t exempt them from agreement.',
            'Confusing <strong>ser aburrido</strong> with <strong>estar aburrido</strong> — different meanings! <em>"Soy aburrido"</em> = "I am a boring person" (personality, with ser). <em>"Estoy aburrido"</em> = "I am bored right now" (state, with estar). This is the classic Spanish-class trap.',
            'Using <strong>ser + participle</strong> for everyday "the door is closed" type sentences — wrong (or at least unnatural). Use estar for resulting states: <em>"La puerta está cerrada."</em> Save ser + participle for true passive voice with an explicit doer.',
            'Treating participles as <strong>invariable adverbs</strong> — they\'re not adverbs. They\'re adjectives when used this way and must agree. Adverbs (like <em>lentamente</em>) don\'t agree; participle-adjectives do.',
            'Forgetting that <strong>"sentado"</strong> describes the state, not the action — <em>"Estoy sentado"</em> = "I am sitting / seated." For the action of sitting down, use the reflexive verb <em>sentarse</em>: <em>"Me siento."</em> The participle describes the resulting state.'
          ]
        }
      ],
      quiz: [
        { q: 'How do you say "The windows are open" in Spanish? (ventanas is feminine plural)', options: [
          { text: 'Las ventanas están abierto.', correct: false },
          { text: 'Las ventanas están abiertas.', correct: true },
          { text: 'Las ventanas han abierto.', correct: false }
        ]},
        { q: 'Which is correct: "I have written the letter" (carta is feminine)?', options: [
          { text: 'He escrito la carta.', correct: true },
          { text: 'He escrita la carta.', correct: false },
          { text: 'Estoy escrito la carta.', correct: false }
        ]},
        { q: '"María está aburrida" means:', options: [
          { text: 'María is a boring person', correct: false },
          { text: 'María is bored right now', correct: true },
          { text: 'María has gotten bored', correct: false }
        ]}
      ]
    },

    // ============================================================================
    // LESSON 56 — Comparatives and Superlatives (Spanish 2)
    // ============================================================================
    {
      id: 'comparatives-superlatives',
      number: '56',
      level: 'sp2',
      title: 'Comparatives and <em>superlatives</em>',
      summary: 'How to say "bigger than," "as smart as," "the best in the class," and "extremely tall." Plus the four key irregulars: mejor, peor, mayor, menor.',
      sections: [
        {
          heading: 'Three <em>kinds</em> of comparisons',
          body: 'Spanish lets you compare things in three ways:<br><br>• <strong>More / less than</strong> (comparison of inequality): <em>María is taller THAN Juan</em> → <em>María es más alta QUE Juan.</em><br>• <strong>As ... as</strong> (comparison of equality): <em>Pedro is as smart AS María</em> → <em>Pedro es tan inteligente COMO María.</em><br>• <strong>The most / least</strong> (superlative): <em>María is the tallest IN the class</em> → <em>María es la más alta DE la clase.</em><br><br>Each has its own structure. Let\'s learn them.'
        },
        {
          heading: 'Comparison of <em>inequality</em>: más / menos ... que',
          body: 'For "more than" or "less than," use this pattern:<br><br><strong>subject + verb + más/menos + adjective + que + comparison</strong><br><br>Or with adverbs or nouns, same structure — the adjective slot just changes.',
          examples: [
            { es: 'María es más alta que Juan.', en: 'María is taller than Juan.' },
            { es: 'Mi hermano es menos paciente que yo.', en: 'My brother is less patient than I am.' },
            { es: 'Esta clase es más difícil que la otra.', en: 'This class is harder than the other one.' },
            { es: 'Como menos chocolate que mi hermana.', en: 'I eat less chocolate than my sister.' },
            { es: 'Hablo más rápido que tú.', en: 'I speak faster than you.' },
            { es: 'Mis padres tienen más dinero que mis abuelos.', en: 'My parents have more money than my grandparents.' }
          ]
        },
        {
          heading: 'With <em>numbers</em>: más de / menos de',
          body: 'When the comparison is with a specific NUMBER, use <strong>más de</strong> or <strong>menos de</strong> instead of <em>más que / menos que</em>.',
          examples: [
            { es: 'Tengo más de veinte dólares.', en: 'I have more than 20 dollars.' },
            { es: 'Hay menos de diez estudiantes en la clase.', en: 'There are fewer than 10 students in the class.' },
            { es: 'Vivo en Cincinnati hace más de cinco años.', en: 'I\'ve been living in Cincinnati for more than 5 years.' },
            { es: 'El libro cuesta menos de quince dólares.', en: 'The book costs less than 15 dollars.' }
          ]
        },
        {
          heading: 'Comparison of <em>equality</em>: tan ... como',
          body: 'For "as ... as" (with adjectives or adverbs), use this pattern:<br><br><strong>subject + verb + tan + adjective/adverb + como + comparison</strong><br><br>With NOUNS, use <strong>tanto/tanta/tantos/tantas + noun + como</strong> (the "tanto" agrees with the noun).',
          examples: [
            { es: 'Pedro es tan inteligente como María.', en: 'Pedro is as smart as María.' },
            { es: 'Corro tan rápido como mi hermano.', en: 'I run as fast as my brother.' },
            { es: 'Tengo tantos libros como tú.', en: 'I have as many books as you. (tantos agrees with libros = masc. plur.)' },
            { es: 'Bebe tanta agua como yo.', en: 'He drinks as much water as I do. (tanta agrees with agua = fem.)' },
            { es: 'Mi padre trabaja tanto como mi madre.', en: 'My father works as much as my mother. (tanto as adverb, no agreement)' }
          ]
        },
        {
          heading: '<em>Superlatives</em>: the most / the least',
          body: 'For "the tallest," "the most beautiful," "the best," use this pattern:<br><br><strong>el/la/los/las + (noun) + más/menos + adjective + DE + group</strong><br><br>Important: "in" the group is translated as <strong>de</strong> (NOT "en"). This is a common error.',
          examples: [
            { es: 'María es la chica más alta de la clase.', en: 'María is the tallest girl in the class.' },
            { es: 'Mi hermano es el más inteligente de la familia.', en: 'My brother is the smartest in the family.' },
            { es: 'Esta es la mejor pizza de Cincinnati.', en: 'This is the best pizza in Cincinnati.' },
            { es: 'Es el libro más interesante del año.', en: 'It is the most interesting book of the year.' },
            { es: 'Soy el menos atlético de mis amigos.', en: 'I am the least athletic of my friends.' }
          ]
        },
        {
          heading: 'The <em>irregular</em> comparatives',
          body: 'Four common adjectives have IRREGULAR comparative forms — you don\'t say "más bueno" or "más malo" in standard Spanish. Use these instead:',
          conjugation: [
            ['<em>bueno</em> (good)', '<strong>mejor</strong> (better)'],
            ['<em>malo</em> (bad)', '<strong>peor</strong> (worse)'],
            ['<em>viejo</em> (old) — for people', '<strong>mayor</strong> (older / greater)'],
            ['<em>joven</em> (young)', '<strong>menor</strong> (younger / lesser)'],
            ['<em>grande</em> (big) — figurative', '<strong>mayor</strong> (greater) — for importance'],
            ['<em>pequeño</em> (small) — figurative', '<strong>menor</strong> (lesser / younger)']
          ]
        },
        {
          heading: 'Using the <em>irregular comparatives</em>',
          body: '',
          examples: [
            { es: 'Esta película es mejor que la otra.', en: 'This movie is better than the other one.' },
            { es: 'Mi hermana mayor vive en Nueva York.', en: 'My older sister lives in New York.' },
            { es: 'Mi nota es peor que la tuya.', en: 'My grade is worse than yours.' },
            { es: 'Soy la menor de la familia.', en: 'I am the youngest in the family.' },
            { es: 'Es el mejor restaurante de la ciudad.', en: 'It is the best restaurant in the city. (mejor + de = superlative)' },
            { es: 'Mis abuelos son mayores que mis padres.', en: 'My grandparents are older than my parents.' }
          ]
        },
        {
          type: 'tip',
          heading: 'When <em>mayor / menor</em> means "older / younger"',
          body: 'Spanish has a quirk: for AGE of PEOPLE, use <em>mayor</em> (older) and <em>menor</em> (younger), NOT <em>más viejo</em> or <em>más joven</em>.<br><br>• <em>"Soy mayor que mi hermano"</em> (I am older than my brother) ✓<br>• <em>"Soy más viejo que mi hermano"</em> — technically grammatical, but sounds rude. "Más viejo" can imply "more elderly," which isn\'t flattering.<br><br>For things or animals (not people), <em>más viejo</em> works fine: <em>"Este edificio es más viejo que el otro"</em> (This building is older than the other one).<br><br>For ABSTRACT importance or magnitude (a "greater problem," a "lesser concern"), <em>mayor</em> and <em>menor</em> are the right call: <em>"un problema mayor"</em> (a greater/bigger problem in importance).'
        },
        {
          heading: 'The <em>absolute superlative</em>: -ísimo',
          body: 'Spanish has a special suffix for "extremely X" — the <strong>-ísimo</strong> ending. Instead of saying "muy alto," you can say "altísimo" (extremely tall). It gives extra punch.<br><br>The rule:<br><br>• Take the adjective<br>• Drop the final vowel (if any)<br>• Add <strong>-ísimo</strong> (or <em>-ísima, -ísimos, -ísimas</em> for agreement)',
          examples: [
            { es: 'alto → altísimo', en: 'tall → extremely tall' },
            { es: 'bueno → buenísimo', en: 'good → really good' },
            { es: 'grande → grandísimo', en: 'big → huge' },
            { es: 'rápido → rapidísimo', en: 'fast → super fast' },
            { es: 'fácil → facilísimo', en: 'easy → super easy' },
            { es: 'rico → riquísimo', en: 'delicious → SUPER delicious (c → qu before í)' },
            { es: 'mucho → muchísimo', en: 'a lot → a HUGE amount' },
            { es: 'poco → poquísimo', en: 'a little → very little (c → qu)' }
          ]
        },
        {
          type: 'tip',
          heading: 'Spelling changes with <em>-ísimo</em>',
          body: 'When attaching -ísimo, some adjectives need a spelling shift to preserve the sound:<br><br>• <strong>c → qu</strong> before í: <em>rico → riquísimo, poco → poquísimo</em><br>• <strong>g → gu</strong> before í: <em>largo → larguísimo</em><br>• <strong>z → c</strong> before í: <em>feliz → felicísimo</em><br><br>These follow the same logic as the -car/-gar/-zar preterite spelling shifts you learned earlier. The point is always: preserve the original consonant sound across vowel changes.<br><br>Also note: <strong>accents on the original word usually disappear</strong> when -ísimo attaches, because the stress shifts. <em>fácil → facilísimo</em> (the accent on fácil drops because the stress is now on í).'
        },
        {
          type: 'mistakes',
          heading: 'Comparison and superlative <em>traps</em>',
          body: 'Where students slip when comparing things:',
          items: [
            'Saying <strong>"más bueno"</strong> for "better" — wrong. Use the irregular <em>mejor</em>: <em>"Este libro es mejor que el otro."</em> Same with malo → peor, NOT "más malo."',
            'Saying <strong>"más viejo"</strong> for older PEOPLE — usually wrong. For age, use <em>mayor</em>: <em>"Mi hermano es mayor que yo."</em> Save "más viejo" for things, animals, or buildings.',
            'Translating "in the class" as <strong>"en la clase"</strong> in superlatives — wrong. Use <em>de</em>: <em>"el mejor estudiante DE la clase"</em> (NOT "en la clase"). This is THE most common superlative error.',
            'Using <strong>"más que"</strong> with numbers — wrong. Numbers take <em>más de / menos de</em>: <em>"más de veinte dólares"</em> (NOT "más que veinte").',
            'Forgetting that <strong>"tanto"</strong> with nouns AGREES in gender and number — <em>"tantas amigas como"</em> (NOT "tanto amigas"). With adjectives/adverbs, <em>tan</em> stays invariable: <em>"tan inteligente como."</em>',
            'Using <strong>"tan ... que"</strong> when you mean "as ... as" — wrong structure. <em>"Tan como"</em> = as ... as. <em>"Tan ... que"</em> means "so ... that" (a different meaning): <em>"Es tan alto que toca el techo"</em> (he\'s so tall that he touches the ceiling).',
            'Forgetting <strong>articles in superlatives</strong> — wrong. The superlative ALWAYS uses an article: <em>"María es la más alta"</em> (NOT "María es más alta" if you mean "the tallest"). The article is what makes it a superlative rather than a regular comparative.',
            'Spelling <strong>-ísimo</strong> without the accent — wrong. The accent is required: <em>altísimo, buenísimo, rapidísimo.</em> Without the accent, the word would be pronounced differently.',
            'Translating English <strong>"more better"</strong> or <strong>"more worse"</strong> literally — these aren\'t correct in English either, and they\'re definitely not correct in Spanish. Use <em>mejor</em> or <em>peor</em> alone — no "más" added.',
            'Confusing <strong>mejor / mayor</strong> — they look similar but mean different things. <em>Mejor</em> = better (quality). <em>Mayor</em> = older / greater (age, magnitude). <em>"Mi hermana mayor"</em> = older sister; <em>"la mejor estudiante"</em> = the best student. Different words, different jobs.'
          ]
        }
      ],
      quiz: [
        { q: 'Which means "María is the tallest in the class"?', options: [
          { text: 'María es más alta en la clase.', correct: false },
          { text: 'María es la más alta de la clase.', correct: true },
          { text: 'María es tan alta como la clase.', correct: false }
        ]},
        { q: 'How do you say "I have more than 30 dollars"?', options: [
          { text: 'Tengo más que treinta dólares.', correct: false },
          { text: 'Tengo más de treinta dólares.', correct: true },
          { text: 'Tengo tantos como treinta dólares.', correct: false }
        ]},
        { q: 'Which is the correct way to say "Pedro is older than I am" (about age)?', options: [
          { text: 'Pedro es más viejo que yo.', correct: false },
          { text: 'Pedro es mayor que yo.', correct: true },
          { text: 'Pedro es el más viejo de yo.', correct: false }
        ]}
      ]
    },

    // ============================================================================
    // LESSON 57 — Past Perfect (Pluperfect) — Spanish 3
    // ============================================================================
    {
      id: 'past-perfect',
      number: '57',
      level: 'sp3',
      title: 'The <em>past perfect</em> (pluperfect)',
      summary: 'The "had done" tense — for actions that happened BEFORE another past action. Same structure as present perfect, but with haber in the imperfect.',
      sections: [
        {
          heading: 'What the <em>past perfect</em> does',
          body: 'The past perfect (<em>el pluscuamperfecto</em>) describes a past action that happened <strong>before another past action</strong>. It\'s English\'s "had done" tense.<br><br>The key concept: there are TWO past moments in the sentence. One happened earlier than the other. The earlier one uses past perfect; the later one uses preterite or imperfect.<br><br>Examples:<br><br>• <em>Cuando llegué a la fiesta, mis amigos ya habían comido.</em><br>(When I arrived at the party, my friends had already eaten.)<br>→ "Eating" happened BEFORE "arriving." Both are past, but eating is earlier.<br><br>• <em>Yo nunca había visto la nieve antes de vivir en Ohio.</em><br>(I had never seen snow before living in Ohio.)<br>→ "Seeing snow" is the earlier past; "living in Ohio" is the later context.<br><br>Common trigger words: <em>ya</em> (already), <em>todavía no</em> (not yet), <em>antes de</em> (before), <em>cuando</em> (when), <em>nunca</em> (never).'
        },
        {
          heading: 'The <em>structure</em>: imperfect haber + past participle',
          body: 'The past perfect uses the same compound structure as the present perfect, but with haber in the <strong>imperfect</strong> instead of the present.<br><br><strong>Pattern: haber (imperfect) + past participle</strong>'
        },
        {
          heading: 'Step 1: <em>Haber</em> in the imperfect',
          body: 'Haber follows the regular -ER imperfect pattern. Notice the accent on every form:',
          conjugation: [
            ['yo', '<strong>había</strong>'],
            ['tú', '<strong>habías</strong>'],
            ['él / ella / usted', '<strong>había</strong>'],
            ['nosotros', '<strong>habíamos</strong>'],
            ['vosotros', '<strong>habíais</strong>'],
            ['ellos / ellas / ustedes', '<strong>habían</strong>']
          ]
        },
        {
          heading: 'Step 2: Past participle <em>(refresher)</em>',
          body: 'Same as before:<br><br>• -AR verbs → -ado: <em>hablar → hablado, cantar → cantado</em><br>• -ER/-IR verbs → -ido: <em>comer → comido, vivir → vivido</em><br><br>And the irregulars: <em>hecho, dicho, visto, escrito, abierto, puesto, vuelto, muerto, roto, resuelto, cubierto</em>.<br><br>As with present perfect, the past participle is FROZEN — it stays in -o form and never agrees with gender or number when used with haber.'
        },
        {
          heading: 'Put it <em>together</em>: comer (to eat)',
          body: '',
          conjugation: [
            ['yo', 'había <strong>comido</strong>'],
            ['tú', 'habías <strong>comido</strong>'],
            ['él / ella / usted', 'había <strong>comido</strong>'],
            ['nosotros', 'habíamos <strong>comido</strong>'],
            ['vosotros', 'habíais <strong>comido</strong>'],
            ['ellos / ellas / ustedes', 'habían <strong>comido</strong>']
          ]
        },
        {
          heading: 'Examples in <em>action</em>',
          body: 'Notice how each sentence has TWO past moments — and the past perfect always describes the earlier one:',
          examples: [
            { es: 'Cuando llegué, mis amigos ya habían comido.', en: 'When I arrived, my friends had already eaten.' },
            { es: 'Yo nunca había visto la nieve antes de vivir en Ohio.', en: 'I had never seen snow before living in Ohio.' },
            { es: 'Mi hermana dijo que había escrito tres ensayos.', en: 'My sister said she had written three essays.' },
            { es: 'No fuimos al cine porque ya habíamos visto la película.', en: 'We didn\'t go to the movies because we had already seen the film.' },
            { es: 'Antes de cumplir veinte años, yo había viajado a tres países.', en: 'Before turning twenty, I had traveled to three countries.' },
            { es: 'Mis padres me regalaron el libro que yo había pedido.', en: 'My parents gave me the book that I had asked for.' }
          ]
        },
        {
          type: 'tip',
          heading: 'The <em>"reported speech"</em> use',
          body: 'A very common use of the past perfect is in <strong>reported speech</strong> — when someone tells you what another person said or thought about an earlier event.<br><br>Direct: <em>"Comí pizza."</em> → <em>Ella dijo que había comido pizza.</em><br>(She said that she had eaten pizza.)<br><br>Direct: <em>"He visto esa película."</em> → <em>Me dijo que había visto esa película.</em><br>(He told me he had seen that movie.)<br><br>The pattern: when you report what someone said about a past event, the past tense in the original becomes past perfect in your report.<br><br>This is one of the most natural-sounding uses of the past perfect, and it shows up constantly in narratives and storytelling.'
        },
        {
          type: 'mistakes',
          heading: 'Past perfect <em>traps</em>',
          body: 'Where students slip with the pluperfect:',
          items: [
            'Using <strong>present perfect</strong> when you should use past perfect — wrong. <em>"Cuando llegué, mis amigos ya han comido"</em> mixes tenses awkwardly. When the main story is in past tense, the "earlier" action also goes in the past framework: <em>"Cuando llegué, mis amigos ya habían comido."</em>',
            'Splitting <strong>haber and the participle</strong> — wrong. <em>"Había no comido"</em> should be <em>"No había comido."</em> Same as present perfect: the two pieces stay together. Negatives and pronouns go BEFORE haber.',
            'Making the past participle <strong>agree with gender or number</strong> — wrong. With haber (in any tense), the participle stays in -o. <em>"Había comida"</em> is wrong; it stays <em>"había comido"</em> even if the subject is feminine.',
            'Forgetting the <strong>accent on había forms</strong> — wrong. <em>"Habia, habiamos"</em> are missing accents. Every form of imperfect haber needs the accent on the í: <em>había, habías, había, habíamos, habíais, habían.</em>',
            'Using past perfect when the actions are <strong>simultaneous</strong> — wrong. Past perfect is for an action BEFORE another past action. If two things happen at the same time in the past, use preterite + imperfect (or both preterite). <em>"Mientras estudiaba, llegó mi hermano"</em> (NOT había llegado).',
            'Mixing up <strong>past perfect with present perfect</strong> — they look similar but mean different things. Present perfect: <em>"He visto esa película"</em> (I have seen). Past perfect: <em>"Yo había visto esa película antes"</em> (I had seen it before). The auxiliary tense distinguishes them.',
            'Translating "I have eaten" as past perfect — wrong. "I have eaten" is present perfect (<em>he comido</em>). "I had eaten" is past perfect (<em>había comido</em>). Match the English carefully.'
          ]
        }
      ],
      quiz: [
        { q: 'Cuando llegué a clase, el profesor ya _____ (empezar) la lección.', options: [
          { text: 'ha empezado', correct: false },
          { text: 'había empezado', correct: true },
          { text: 'habría empezado', correct: false }
        ]},
        { q: 'Mis padres me dijeron que ellos _____ (visitar) ese lugar antes.', options: [
          { text: 'habían visitado', correct: true },
          { text: 'visitaron', correct: false },
          { text: 'han visitado', correct: false }
        ]},
        { q: 'Antes de los diez años, yo _____ (leer) ese libro tres veces.', options: [
          { text: 'he leído', correct: false },
          { text: 'leo', correct: false },
          { text: 'había leído', correct: true }
        ]}
      ]
    },

    // ============================================================================
    // LESSON 58 — Future Perfect — Spanish 3
    // ============================================================================
    {
      id: 'future-perfect',
      number: '58',
      level: 'sp3',
      title: 'The <em>future perfect</em>',
      summary: 'The "will have done" tense — for actions completed BEFORE some future point. Also used to speculate about the past ("I wonder if she has arrived...").',
      sections: [
        {
          heading: 'What the <em>future perfect</em> does',
          body: 'The future perfect (<em>el futuro perfecto</em>) is the rarest of the four perfect tenses, but it has two important uses:<br><br><strong>1. Actions COMPLETED before a future point</strong><br>Use it to predict that something will be DONE by a certain future moment.<br><em>Para el año que viene, habré terminado mis estudios.</em><br>(By next year, I will have finished my studies.)<br><br><strong>2. Speculation about the past</strong> (a uniquely Spanish use)<br>Use it to wonder or guess about something that probably happened.<br><em>¿Dónde estará Juan? Habrá llegado tarde.</em><br>(Where could Juan be? He must have arrived late.)<br><br>In English, we use "must have" or "probably" for this second use. In Spanish, you can use the future perfect for the same effect.<br><br>Trigger words: <em>para + future date</em> (by next year, by Monday), <em>antes de</em> (before), <em>cuando</em> + subjunctive (when X happens).'
        },
        {
          heading: 'The <em>structure</em>: future haber + past participle',
          body: 'Same compound formula. Just haber in the future this time.<br><br><strong>Pattern: haber (future) + past participle</strong>'
        },
        {
          heading: 'Step 1: <em>Haber</em> in the future',
          body: 'Haber\'s future is irregular — it uses the stem <strong>habr-</strong> (same as the conditional and future stem you already know). Add regular future endings:',
          conjugation: [
            ['yo', '<strong>habré</strong>'],
            ['tú', '<strong>habrás</strong>'],
            ['él / ella / usted', '<strong>habrá</strong>'],
            ['nosotros', '<strong>habremos</strong>'],
            ['vosotros', '<strong>habréis</strong>'],
            ['ellos / ellas / ustedes', '<strong>habrán</strong>']
          ]
        },
        {
          heading: 'Put it <em>together</em>: comer (to eat)',
          body: '',
          conjugation: [
            ['yo', 'habré <strong>comido</strong>'],
            ['tú', 'habrás <strong>comido</strong>'],
            ['él / ella / usted', 'habrá <strong>comido</strong>'],
            ['nosotros', 'habremos <strong>comido</strong>'],
            ['vosotros', 'habréis <strong>comido</strong>'],
            ['ellos / ellas / ustedes', 'habrán <strong>comido</strong>']
          ]
        },
        {
          heading: 'Examples — <em>future completion</em>',
          body: '',
          examples: [
            { es: 'Para junio, habré terminado mis estudios.', en: 'By June, I will have finished my studies.' },
            { es: 'Cuando llegues, ya habré preparado la cena.', en: 'When you arrive, I will have already prepared dinner.' },
            { es: 'Antes de los treinta años, habré viajado por toda Europa.', en: 'Before turning 30, I will have traveled all over Europe.' },
            { es: 'Para el próximo lunes, los estudiantes habrán entregado sus ensayos.', en: 'By next Monday, the students will have turned in their essays.' }
          ]
        },
        {
          heading: 'Examples — <em>speculation about the past</em>',
          body: 'This use is uniquely Spanish — it doesn\'t have a direct English equivalent. Spanish speakers love it for casual conversation:',
          examples: [
            { es: '¿Por qué no contesta el teléfono? — Habrá salido.', en: 'Why isn\'t he answering the phone? — He must have gone out.' },
            { es: 'María se ve muy cansada. Habrá trabajado mucho.', en: 'María looks really tired. She must have worked a lot.' },
            { es: 'No están en casa. Habrán ido al cine.', en: 'They\'re not home. They must have gone to the movies.' },
            { es: '¿Dónde estarán mis llaves? Las habré dejado en el coche.', en: 'Where could my keys be? I must have left them in the car.' }
          ]
        },
        {
          type: 'tip',
          heading: '<em>When to skip</em> the future perfect',
          body: 'Honestly? Spanish speakers often skip the future perfect in casual speech, replacing it with simpler structures.<br><br>Instead of <em>"Habré terminado para junio,"</em> many speakers say <em>"Para junio voy a terminar"</em> (more casual) or <em>"Para junio termino"</em> (present-tense future, very natural).<br><br>For speculation, instead of <em>"Habrá salido,"</em> speakers often say <em>"Seguramente salió"</em> or <em>"Tal vez salió."</em><br><br>The future perfect isn\'t wrong — it\'s elegant and precise. But don\'t feel like you MUST use it. Recognize it when you read or hear it; produce it when you want sophistication; substitute simpler structures when speed matters.<br><br>This is the least-used of the four perfect tenses in everyday Spanish. Spanish 4 textbooks teach it; Spanish speakers use it lightly.'
        },
        {
          type: 'mistakes',
          heading: 'Future perfect <em>traps</em>',
          body: 'Where students slip:',
          items: [
            'Forgetting the <strong>irregular future stem</strong> — wrong. <em>"Haberé"</em> should be <em>"habré."</em> The future of haber uses the stem habr- (drops the e). All forms: habré, habrás, habrá, habremos, habréis, habrán.',
            'Splitting haber and the participle (same as other perfects) — wrong. <em>"Habré no comido"</em> should be <em>"No habré comido."</em> The two pieces stay together; negatives go BEFORE haber.',
            'Trying to use future perfect for <strong>"just" past actions</strong> — wrong. For "I have just done X," use <em>"acabo de + infinitive"</em> (Acabo de comer = I just ate), not future perfect.',
            'Confusing the <strong>speculation use with English "will have"</strong> — the speculation meaning isn\'t about future at all. <em>"Habrá salido"</em> can mean "He must have gone out" (about the PAST), not "He will have gone out." Context decides.',
            'Forgetting that the <strong>participle stays in -o</strong> — wrong, same rule. <em>"Habré comida"</em> is wrong; it stays <em>"habré comido"</em> even if the speaker is female.',
            'Using future perfect when <strong>simple future is enough</strong> — overkill. "I will eat at 8" is <em>"Comeré a las ocho"</em> (or <em>"Voy a comer a las ocho"</em>), NOT <em>"Habré comido a las ocho"</em> (which means "I will already have eaten BY 8" — a different meaning).',
            'Replacing all <strong>"must have"</strong> phrases with future perfect — be careful. <em>"He must have gone out"</em> can be <em>"Habrá salido"</em> OR <em>"Debió de salir"</em> (using deber de + infinitive). Both work; the future perfect is one option.'
          ]
        }
      ],
      quiz: [
        { q: 'Para el año que viene, yo _____ (terminar) mis estudios.', options: [
          { text: 'he terminado', correct: false },
          { text: 'habré terminado', correct: true },
          { text: 'había terminado', correct: false }
        ]},
        { q: '¿Por qué no contesta? — _____ (salir) ya.', options: [
          { text: 'Habrá salido', correct: true },
          { text: 'Había salido', correct: false },
          { text: 'Ha salido', correct: false }
        ]},
        { q: 'What is the "yo" form of haber in the future?', options: [
          { text: 'haberé', correct: false },
          { text: 'habré', correct: true },
          { text: 'habría', correct: false }
        ]}
      ]
    },

    // ============================================================================
    // LESSON 59 — Past (Imperfect) Subjunctive — Spanish 3 / Advanced
    // ============================================================================
    {
      id: 'past-subjunctive',
      number: '59',
      level: 'sp3',
      title: 'The <em>past subjunctive</em> (imperfect subjunctive)',
      summary: 'The most useful advanced tense in Spanish — it powers hypotheticals ("if I had money..."), polite requests ("I would like..."), and reported speech about emotions and doubts. The pairing with the conditional unlocks elegant Spanish.',
      sections: [
        {
          heading: 'Why this <em>matters</em>',
          body: 'The past subjunctive (<em>el imperfecto del subjuntivo</em>) is the most useful "advanced" tense in Spanish — and one of the most beautiful. It powers some of the most common patterns native speakers use every day:<br><br>• <strong>Hypothetical "if" sentences</strong> — <em>Si tuviera tiempo, leería más.</em> (If I had time, I would read more.)<br>• <strong>Polite requests</strong> — <em>Quisiera un café, por favor.</em> (I would like a coffee, please.)<br>• <strong>Wishes about the past or impossible present</strong> — <em>Ojalá ganara la lotería.</em> (I wish I would win the lottery.)<br>• <strong>Reported speech in past tense</strong> — <em>Me dijo que estudiara más.</em> (He told me to study more.)<br>• <strong>Past-tense emotions and doubts</strong> — <em>Era importante que llegáramos temprano.</em> (It was important that we arrive early.)<br><br>Without the past subjunctive, your Spanish stays simple. With it, you can express hypotheticals, politeness, and nuance the way native speakers do.<br><br>This is a Spanish 3-4 topic. Take your time.'
        },
        {
          heading: 'The <em>secret</em>: it\'s built from the preterite',
          body: 'Here\'s the trick that makes the past subjunctive easy: you don\'t have to learn 66 new irregular stems. The past subjunctive is built directly from the <strong>third-person plural preterite form</strong> (the "ellos/ellas" form).<br><br><strong>The recipe:</strong><br><br>1. Take the <em>ellos</em> form of the preterite (hablar → hablaron)<br>2. Drop the <strong>-ron</strong> ending<br>3. Add the past subjunctive endings: <strong>-ra, -ras, -ra, -ramos, -rais, -ran</strong><br><br>(Note: the nosotros form requires an accent: <em>-ramos</em> with stress on the syllable before — e.g., <em>habláramos</em>.)<br><br>So if you know the preterite — and you do, because we built six lessons on it — the past subjunctive comes almost for free. Every irregular, every spelling change, every stem shift carries over automatically.'
        },
        {
          heading: 'Step-by-step <em>example</em>: hablar',
          body: '<strong>Step 1:</strong> Preterite ellos form → <em>hablaron</em><br><strong>Step 2:</strong> Drop -ron → <em>habla-</em><br><strong>Step 3:</strong> Add endings:',
          conjugation: [
            ['yo', 'habla<strong>ra</strong>'],
            ['tú', 'habla<strong>ras</strong>'],
            ['él / ella / usted', 'habla<strong>ra</strong>'],
            ['nosotros', 'habl<strong>áramos</strong> (accent!)'],
            ['vosotros', 'habla<strong>rais</strong>'],
            ['ellos / ellas / ustedes', 'habla<strong>ran</strong>']
          ]
        },
        {
          heading: 'More <em>regular</em> verbs',
          body: 'Same recipe — take the preterite ellos form, drop -ron, add the endings:<br><br><strong>comer</strong>: comieron → comie- → comiera, comieras, comiera, comiéramos, comierais, comieran<br><br><strong>vivir</strong>: vivieron → vivie- → viviera, vivieras, viviera, viviéramos, vivierais, vivieran<br><br><strong>estudiar</strong>: estudiaron → estudia- → estudiara, estudiaras, estudiara, estudiáramos, estudiarais, estudiaran<br><br>Notice the pattern: the nosotros form ALWAYS gets an accent on the syllable before -ramos.'
        },
        {
          heading: 'Irregulars come <em>FREE</em>',
          body: 'The beauty of the preterite-based recipe: every irregular automatically works. You don\'t need to memorize new stems.<br><br><strong>tener</strong>: tuvieron → tuvie- → <em>tuviera, tuvieras, tuviera, tuviéramos, tuvierais, tuvieran</em><br><strong>ser/ir</strong>: fueron → fue- → <em>fuera, fueras, fuera, fuéramos, fuerais, fueran</em> (same for both!)<br><strong>poder</strong>: pudieron → pudie- → <em>pudiera, pudieras, pudiera, pudiéramos, pudierais, pudieran</em><br><strong>hacer</strong>: hicieron → hicie- → <em>hiciera, hicieras, hiciera, hiciéramos, hicierais, hicieran</em><br><strong>decir</strong>: dijeron → dije- → <em>dijera, dijeras, dijera, dijéramos, dijerais, dijeran</em><br><strong>traer</strong>: trajeron → traje- → <em>trajera, trajeras, trajera, trajéramos, trajerais, trajeran</em><br><strong>leer</strong>: leyeron → leye- → <em>leyera, leyeras, leyera, leyéramos, leyerais, leyeran</em><br><strong>dormir</strong>: durmieron → durmie- → <em>durmiera, durmieras, durmiera, durmiéramos, durmierais, durmieran</em><br><br>The i→y verbs, the J-stem verbs, the stem-changers — all of them inherit their irregularity from the preterite and pass it forward to the past subjunctive. Memorize the preterite well; the past subjunctive comes for free.'
        },
        {
          type: 'tip',
          heading: 'Two valid <em>endings</em>: -ra and -se',
          body: 'You may encounter a second set of past subjunctive endings: <strong>-se, -ses, -se, -semos, -seis, -sen</strong>. So <em>hablara</em> can also be <em>hablase</em>.<br><br>Both forms are 100% correct and mean the same thing. The split:<br><br>• <strong>-ra forms</strong> are dominant in Latin America and in modern Spain. This is what you should learn to produce.<br>• <strong>-se forms</strong> are more common in writing, formal speech, and in older texts. They still appear in literature.<br><br>For Spanish 3-4, focus on the <strong>-ra</strong> forms. Recognize -se forms when you read them, but use -ra when you speak or write.'
        },
        {
          heading: 'Use #1: hypothetical <em>"if"</em> sentences',
          body: 'This is the MOST important use of the past subjunctive. It pairs with the <strong>conditional</strong> tense (which you already know) to form hypothetical sentences.<br><br><strong>The pattern:</strong> <em>Si + past subjunctive, + conditional</em><br><br>It expresses something contrary to fact — what WOULD happen if something WERE true (but it isn\'t).',
          examples: [
            { es: 'Si tuviera tiempo, leería más.', en: 'If I had time, I would read more. (but I don\'t have time)' },
            { es: 'Si fuera rico, viajaría por todo el mundo.', en: 'If I were rich, I would travel the whole world. (but I\'m not rich)' },
            { es: 'Si pudiera hablar con él, le diría la verdad.', en: 'If I could talk to him, I would tell him the truth.' },
            { es: 'Si no estuviera enfermo, iría a la fiesta.', en: 'If I weren\'t sick, I would go to the party.' },
            { es: 'Si supieras lo que sé, no harías eso.', en: 'If you knew what I know, you wouldn\'t do that.' },
            { es: '¿Qué harías si ganaras la lotería?', en: 'What would you do if you won the lottery?' }
          ]
        },
        {
          type: 'tip',
          heading: 'The <em>three "if" structures</em> in Spanish',
          body: 'Spanish has three different "if" patterns. The past subjunctive is just one of them:<br><br><strong>1. REAL conditions</strong> — Si + present, + present/future<br><em>Si tengo tiempo, leo.</em> (If I have time, I read.) — possible in the present<br><em>Si tengo tiempo, leeré.</em> (If I have time, I will read.) — possible in the future<br><br><strong>2. HYPOTHETICAL conditions</strong> (contrary to fact, present) — Si + past subjunctive, + conditional<br><em>Si tuviera tiempo, leería.</em> (If I had time, I would read.) — but I don\'t<br><br><strong>3. UNREAL conditions about the past</strong> (Spanish 4+) — Si + past perfect subjunctive, + conditional perfect<br><em>Si hubiera tenido tiempo, habría leído.</em> (If I had had time, I would have read.) — but I didn\'t<br><br>Pattern 2 is where the past subjunctive shines. The rule: <strong>if the situation is contrary to current reality</strong>, use past subjunctive in the "if" clause and conditional in the "then" clause.'
        },
        {
          heading: 'Use #2: polite <em>requests</em>',
          body: 'The past subjunctive (especially of <em>querer, poder, deber</em>) softens requests beautifully. Compare:<br><br>• <em>Quiero un café.</em> = "I want a coffee." (direct, blunt)<br>• <em>Quisiera un café.</em> = "I would like a coffee." (polite, indirect)<br><br>This is one of the most common uses in everyday spoken Spanish. It\'s how educated speakers ask for things in restaurants, stores, and formal situations.',
          examples: [
            { es: 'Quisiera un café, por favor.', en: 'I would like a coffee, please.' },
            { es: '¿Pudiera ayudarme con esto?', en: 'Could you help me with this? (very polite)' },
            { es: 'Quisiéramos hacer una reserva.', en: 'We would like to make a reservation.' },
            { es: 'Debieras descansar más.', en: 'You really should rest more. (gentle advice)' }
          ]
        },
        {
          heading: 'Use #3: wishes with <em>ojalá</em>',
          body: 'The expression <em>ojalá</em> (I hope / I wish) often pairs with the past subjunctive to express wishes for things that aren\'t (or weren\'t) true.<br><br>• <em>Ojalá</em> + present subjunctive = "I hope" (something real or possible)<br>• <em>Ojalá</em> + past subjunctive = "I wish" (something contrary to fact)',
          examples: [
            { es: 'Ojalá ganara la lotería.', en: 'I wish I would win the lottery. (but probably won\'t)' },
            { es: 'Ojalá pudiera viajar a España.', en: 'I wish I could travel to Spain. (but can\'t right now)' },
            { es: 'Ojalá tuviera más tiempo.', en: 'I wish I had more time.' },
            { es: 'Ojalá fuera tan fácil.', en: 'I wish it were that easy.' }
          ]
        },
        {
          heading: 'Use #4: reported speech about <em>commands or wishes</em>',
          body: 'When you report what someone TOLD, ASKED, or WANTED in the past, the verb in the reported clause often goes into the past subjunctive.',
          examples: [
            { es: 'Mi madre me dijo que limpiara mi cuarto.', en: 'My mother told me to clean my room.' },
            { es: 'El profesor quería que estudiáramos más.', en: 'The teacher wanted us to study more.' },
            { es: 'Me pidió que le ayudara con la tarea.', en: 'She asked me to help her with the homework.' },
            { es: 'Era importante que llegáramos temprano.', en: 'It was important that we arrive early.' },
            { es: 'No creía que fuera posible.', en: 'I didn\'t think it was possible.' }
          ]
        },
        {
          heading: 'Use #5: <em>como si</em> ("as if")',
          body: 'The expression <em>como si</em> (as if) ALWAYS triggers the past subjunctive. Always.',
          examples: [
            { es: 'Habla como si fuera experto.', en: 'He speaks as if he were an expert.' },
            { es: 'Me mira como si no me conociera.', en: 'She looks at me as if she didn\'t know me.' },
            { es: 'Actúa como si tuviera todo el dinero del mundo.', en: 'He acts as if he had all the money in the world.' },
            { es: 'Camina como si estuviera cansada.', en: 'She walks as if she were tired.' }
          ]
        },
        {
          type: 'tip',
          heading: 'When to <em>use</em> past subjunctive — the trigger list',
          body: 'Past subjunctive shows up after specific triggers. Memorize this short list and you\'ll catch most cases:<br><br><strong>1. After "si"</strong> when the situation is contrary to fact (hypothetical "if I were/had/could…"). Pairs with conditional.<br><br><strong>2. After "ojalá"</strong> for impossible wishes.<br><br><strong>3. After "como si"</strong> — always, no exceptions.<br><br><strong>4. After past-tense main verbs that express wishes, doubts, emotions, or commands</strong>:<br>• <em>quería que…</em> (wanted that)<br>• <em>esperaba que…</em> (hoped that)<br>• <em>dudaba que…</em> (doubted that)<br>• <em>me pidió que…</em> (asked me to)<br>• <em>me dijo que…</em> (told me to — when it\'s a command)<br>• <em>era importante que…</em> / <em>era posible que…</em> (it was important/possible that)<br><br><strong>5. After "quisiera, pudiera, debiera"</strong> for polite requests and gentle advice.<br><br>If the trigger is in a PAST tense (preterite, imperfect, conditional), the subjunctive that follows is past subjunctive. If the trigger is present, you\'d use present subjunctive instead — that\'s called "sequence of tenses."'
        },
        {
          type: 'mistakes',
          heading: 'Past subjunctive <em>traps</em>',
          body: 'The past subjunctive is genuinely hard. Here are the most common errors:',
          items: [
            'Using <strong>imperfect indicative</strong> instead of past subjunctive in "if" sentences — wrong. <em>"Si tenía tiempo, leería"</em> is incorrect. Must be <em>"Si tuviera tiempo, leería."</em> The "if" clause in hypotheticals takes past subjunctive, not imperfect.',
            'Forgetting the <strong>accent on the nosotros form</strong> — wrong. <em>"Habláramos"</em> needs the accent. Without it, the stress would land on the wrong syllable. Same with all verbs: <em>tuviéramos, fuéramos, comiéramos, pudiéramos.</em>',
            'Mixing <strong>-ra and -se forms</strong> within the same clause — pick one and stick with it. <em>"Si tuviera tiempo, hablase con él"</em> sounds clunky. Either <em>"Si tuviera... hablaría"</em> or <em>"Si tuviese... hablaría"</em>. Don\'t mix.',
            'Translating English <strong>"I wish I were"</strong> with imperfect — wrong. "I wish I were rich" is <em>"Ojalá fuera rico"</em> (past subjunctive of ser), NOT <em>"Ojalá era rico."</em>',
            'Translating <strong>"He told me to..."</strong> as a direct command — wrong. <em>"Me dijo que estudia más"</em> is wrong. When you\'re reporting a past command, the reported clause goes into past subjunctive: <em>"Me dijo que estudiara más."</em>',
            'Using <strong>present subjunctive</strong> after a past-tense trigger — wrong. If the main verb is in past tense (quería, esperaba, era importante), the subjunctive that follows must be past subjunctive: <em>"Quería que vinieras"</em> (NOT "Quería que vengas").',
            'Forgetting that <strong>ir and ser share the same past subjunctive</strong> — they\'re identical: <em>fuera, fueras, fuera, fuéramos, fuerais, fueran</em>. Context tells you which: <em>"Si fuera rico"</em> = "if I were rich" (ser); <em>"Si fuera a México"</em> = "if I went to Mexico" (ir).',
            'Trying to apply <strong>past subjunctive after "si" in REAL conditions</strong> — wrong. "If I have time, I read" is real (could happen), so use indicative: <em>"Si tengo tiempo, leo."</em> Past subjunctive is ONLY for contrary-to-fact hypotheticals.',
            'Forgetting that <strong>como si</strong> always takes past subjunctive — there are no exceptions. Even when the rest of the sentence is in present tense, <em>como si</em> demands past subjunctive: <em>"Habla como si fuera experto"</em> (not "como si es experto").',
            'Using the <strong>conditional in both clauses</strong> of an if-sentence — wrong. The "if" clause takes past subjunctive; the "then" clause takes conditional. <em>"Si tendría tiempo, leería"</em> is wrong. <em>"Si tuviera tiempo, leería"</em> is right. Conditional NEVER goes in the "si" clause.'
          ]
        },
        {
          type: 'tip',
          heading: 'A <em>final encouragement</em>',
          body: 'The past subjunctive is the door between intermediate and advanced Spanish. Most US Spanish 3-4 students struggle with it for months before it clicks. Don\'t feel bad if it takes a while.<br><br>Three things will speed up the click:<br><br>1. <strong>Master your preterite first.</strong> Every past subjunctive form is built from the preterite ellos form. If your preterite is shaky, the past subjunctive will feel impossible. If your preterite is solid, this lesson becomes mechanical.<br><br>2. <strong>Internalize the "si + past subj + conditional" pattern.</strong> Practice the structure with simple verbs until it becomes automatic: <em>"Si tuviera... iría... podría... haría..."</em> Once you can do that without thinking, you can substitute any verb.<br><br>3. <strong>Read Spanish literature.</strong> The past subjunctive is everywhere in good Spanish prose. The more you see it in real sentences, the more your ear will pick up the patterns. García Márquez, Allende, Borges — any of them. Even just one short story.<br><br>You\'ve made it this far. The past subjunctive is the final boss of basic Spanish grammar — and you\'re ready for it.'
        }
      ],
      quiz: [
        { q: 'Si yo _____ (tener) más tiempo, leería más libros.', options: [
          { text: 'tenía', correct: false },
          { text: 'tuviera', correct: true },
          { text: 'tendría', correct: false }
        ]},
        { q: '_____ (querer, yo) un café, por favor. (polite request)', options: [
          { text: 'Quiero', correct: false },
          { text: 'Quería', correct: false },
          { text: 'Quisiera', correct: true }
        ]},
        { q: 'Mi madre me dijo que _____ (limpiar) mi cuarto.', options: [
          { text: 'limpiara', correct: true },
          { text: 'limpie', correct: false },
          { text: 'limpio', correct: false }
        ]}
      ]
    },

    // ============================================================================
    // LESSON 60 — Pluperfect Subjunctive & Past Conditionals — Spanish 3 / Advanced
    // ============================================================================
    {
      id: 'pluperfect-subjunctive',
      number: '60',
      level: 'sp3',
      title: 'The <em>pluperfect subjunctive</em> &amp; past conditionals',
      summary: 'The "had done" of the subjunctive — hubiera + past participle. It powers past contrary-to-fact regrets ("If I had known, I would have come") and pairs with the conditional perfect. The capstone of the subjunctive.',
      sections: [
        {
          heading: 'What it <em>does</em>',
          body: 'The pluperfect subjunctive (<em>el pluscuamperfecto de subjuntivo</em>) is the subjunctive\'s version of "had done." It is the tense of <strong>regret, hindsight, and roads not taken</strong> — the things that DIDN\'T happen, but that you imagine.<br><br>Its number-one job is the <strong>past contrary-to-fact "if" sentence</strong>:<br><br>• <em>Si <strong>hubiera</strong> estudiado, <strong>habría</strong> aprobado.</em><br>(If I had studied, I would have passed — but I didn\'t study, so I didn\'t pass.)<br><br>This is Spanish 4 / AP territory. It builds directly on three earlier lessons: the <strong>past subjunctive</strong> (Lesson 59), the <strong>past perfect</strong> (Lesson 57), and the <strong>perfect-tense structure</strong> in general. Make sure those feel solid before you dig in here.'
        },
        {
          heading: 'The <em>structure</em>: hubiera + past participle',
          body: 'Like all the perfect tenses, this is a <strong>compound tense</strong> — two verbs working together. The formula is haber in the <strong>past subjunctive</strong> plus the past participle.<br><br><strong>Pattern: hubiera (or hubiese) + past participle</strong><br><br>Compare the whole "had done" family so you can see exactly where this one sits:<br><br>• <em>había comido</em> = past perfect, <strong>indicative</strong> — a FACT ("I had eaten")<br>• <em>hubiera comido</em> = pluperfect <strong>subjunctive</strong> — HYPOTHETICAL / contrary-to-fact ("(if) I had eaten")<br><br>Same "had + participle" idea; the difference is mood. The indicative reports what really happened; the subjunctive imagines what didn\'t.'
        },
        {
          heading: 'Step 1: <em>haber</em> in the past subjunctive',
          body: 'Take the past subjunctive of <em>haber</em>. Remember the Lesson 59 recipe — it comes from the preterite <em>ellos</em> form (<em>hubieron</em> → drop <strong>-ron</strong> → <em>hubie-</em> → add the endings):',
          conjugation: [
            ['yo', '<strong>hubiera</strong>'],
            ['tú', '<strong>hubieras</strong>'],
            ['él / ella / usted', '<strong>hubiera</strong>'],
            ['nosotros', '<strong>hubiéramos</strong> (accent!)'],
            ['vosotros', '<strong>hubierais</strong>'],
            ['ellos / ellas / ustedes', '<strong>hubieran</strong>']
          ]
        },
        {
          heading: 'Step 2: the past participle <em>(refresher)</em>',
          body: 'Exactly the same participle you already know:<br><br>• -AR verbs → <strong>-ado</strong>: <em>hablar → hablado</em><br>• -ER / -IR verbs → <strong>-ido</strong>: <em>comer → comido, vivir → vivido</em><br><br>And the usual irregulars: <em>hecho, dicho, visto, escrito, abierto, puesto, vuelto, muerto, roto, resuelto, cubierto</em>.<br><br>As always with <em>haber</em>, the participle is <strong>frozen in -o</strong> — it never agrees with gender or number.'
        },
        {
          heading: 'Put it <em>together</em>: comer (to eat)',
          body: '',
          conjugation: [
            ['yo', 'hubiera <strong>comido</strong>'],
            ['tú', 'hubieras <strong>comido</strong>'],
            ['él / ella / usted', 'hubiera <strong>comido</strong>'],
            ['nosotros', 'hubiéramos <strong>comido</strong>'],
            ['vosotros', 'hubierais <strong>comido</strong>'],
            ['ellos / ellas / ustedes', 'hubieran <strong>comido</strong>']
          ]
        },
        {
          heading: 'Use #1: past <em>"if"</em> sentences (the big one)',
          body: 'This is the third and final "if" structure — you met the first two in Lesson 59. The pattern:<br><br><strong>Si + pluperfect subjunctive, + conditional perfect</strong><br><br>It describes something contrary to fact <strong>in the past</strong>: what WOULD HAVE happened if something HAD BEEN true — but it wasn\'t, and it\'s over now.',
          examples: [
            { es: 'Si hubiera sabido, habría venido.', en: 'If I had known, I would have come. (but I didn\'t know)' },
            { es: 'Si hubieras estudiado, habrías aprobado el examen.', en: 'If you had studied, you would have passed the exam.' },
            { es: 'Si no hubiera llovido, habríamos ido a la playa.', en: 'If it hadn\'t rained, we would have gone to the beach.' },
            { es: 'Si me lo hubieras dicho, te habría ayudado.', en: 'If you had told me, I would have helped you.' },
            { es: '¿Qué habrías hecho si hubieras ganado la lotería?', en: 'What would you have done if you had won the lottery?' }
          ]
        },
        {
          type: 'tip',
          heading: 'The <em>three "if" structures</em>, completed',
          body: 'Here are all three side by side. As you move down the list, you move <strong>further from reality</strong>:<br><br><strong>1. REAL</strong> (it might happen) — Si + present, + present/future<br><em>Si tengo tiempo, leo / leeré.</em> (If I have time, I read / will read.)<br><br><strong>2. PRESENT hypothetical</strong> (not true now) — Si + past subjunctive, + conditional<br><em>Si tuviera tiempo, leería.</em> (If I had time, I would read — but I don\'t.)<br><br><strong>3. PAST hypothetical</strong> (didn\'t happen, it\'s over) — Si + pluperfect subjunctive, + conditional perfect<br><em>Si hubiera tenido tiempo, habría leído.</em> (If I had had time, I would have read — but I didn\'t.)<br><br>#1 could still come true; #2 isn\'t true right now; #3 is permanently in the past. This lesson is all about #3.'
        },
        {
          heading: 'The partner tense: the <em>conditional perfect</em>',
          body: 'The "then" half of a past "if" sentence uses the <strong>conditional perfect</strong> — <em>habría</em> + past participle ("would have done"). It is simply <em>haber</em> in the conditional plus the participle:',
          conjugation: [
            ['yo', 'habría <strong>hablado</strong>'],
            ['tú', 'habrías <strong>hablado</strong>'],
            ['él / ella / usted', 'habría <strong>hablado</strong>'],
            ['nosotros', 'habríamos <strong>hablado</strong>'],
            ['vosotros', 'habríais <strong>hablado</strong>'],
            ['ellos / ellas / ustedes', 'habrían <strong>hablado</strong>']
          ]
        },
        {
          type: 'tip',
          heading: 'What native speakers <em>actually</em> say',
          body: 'In real speech, many native speakers use <em>hubiera</em> in <strong>both</strong> clauses:<br><br>• <em>Si hubiera sabido, <strong>hubiera</strong> venido.</em> (instead of "habría venido")<br><br>This is extremely common and fully accepted in conversation. The textbook pairing — <em>hubiera</em> in the "si" clause and <em>habría</em> in the result — is what you should write on an exam, but don\'t be surprised when you hear <em>hubiera ... hubiera</em> everywhere.'
        },
        {
          heading: 'Use #2: regrets with <em>ojalá</em>',
          body: '<em>Ojalá</em> + pluperfect subjunctive expresses a <strong>wish or regret about the past</strong> — something you wish HAD (or hadn\'t) happened, but it\'s too late now.',
          examples: [
            { es: 'Ojalá hubiera estudiado más.', en: 'I wish I had studied more. (regret)' },
            { es: 'Ojalá no se hubieran ido tan pronto.', en: 'I wish they hadn\'t left so soon.' },
            { es: 'Ojalá lo hubiera sabido antes.', en: 'I wish I had known earlier.' }
          ]
        },
        {
          heading: 'Use #3: <em>como si</em> + pluperfect ("as if … had")',
          body: '<em>Como si</em> ("as if") always triggers the subjunctive. When the imagined comparison is in the <strong>past</strong> — "as if X had happened" — it takes the pluperfect subjunctive.',
          examples: [
            { es: 'Me habló como si nada hubiera pasado.', en: 'He spoke to me as if nothing had happened.' },
            { es: 'Actuaba como si hubiera visto un fantasma.', en: 'She was acting as if she had seen a ghost.' }
          ]
        },
        {
          type: 'tip',
          heading: 'Two valid forms: <em>hubiera</em> and <em>hubiese</em>',
          body: 'Just like the simple past subjunctive, <em>haber</em> has a second set of forms: <strong>hubiese, hubieses, hubiese, hubiésemos, hubieseis, hubiesen</strong>.<br><br>So <em>hubiera comido</em> can also be <em>hubiese comido</em> — both are 100% correct and identical in meaning. The <strong>-ra</strong> forms dominate everyday speech across Latin America and Spain; the <strong>-se</strong> forms show up more in writing and literature. Produce <strong>-ra</strong>; recognize <strong>-se</strong> when you read it.'
        },
        {
          type: 'mistakes',
          heading: 'Pluperfect subjunctive <em>traps</em>',
          body: 'Where students slip with this final piece of the subjunctive:',
          items: [
            'Using the <strong>indicative</strong> <em>había</em> in the "if" clause — wrong. <em>"Si había sabido…"</em> states a fact; a contrary-to-fact hypothetical needs the subjunctive: <em>"Si hubiera sabido…"</em>',
            'Using the <strong>simple conditional</strong> in the result of a fully past hypothetical — usually wrong. <em>"Si hubiera estudiado, aprobaría"</em> mixes a past cause with a present result. For a fully past idea, use the conditional perfect: <em>"…habría aprobado."</em>',
            'Putting the <strong>conditional (habría) in the "si" clause</strong> — wrong, same rule as Lesson 59. <em>"Si habría sabido"</em> is incorrect. The "si" clause never takes <em>habría</em>; it takes <em>hubiera</em>.',
            'Making the <strong>participle agree</strong> — wrong. With <em>haber</em> the participle stays in -o: <em>"Si hubiera comida"</em> should be <em>"hubiera comido"</em>, even with a feminine subject.',
            'Forgetting the <strong>accent on hubiéramos / habríamos</strong> — both nosotros forms need their accent.',
            'Splitting <strong>haber and the participle</strong> — wrong. <em>"Hubiera no sabido"</em> should be <em>"No hubiera sabido."</em> Negatives and pronouns go BEFORE haber.',
            'Confusing <strong>había / habría / hubiera</strong> — three different jobs. <em>había sabido</em> = "I had known" (fact); <em>habría sabido</em> = "I would have known" (result); <em>hubiera sabido</em> = "(if) I had known" (hypothetical).'
          ]
        }
      ],
      quiz: [
        { q: 'Si yo _____ (saber) la verdad, habría actuado de otra manera.', options: [
          { text: 'había sabido', correct: false },
          { text: 'hubiera sabido', correct: true },
          { text: 'sabría', correct: false }
        ]},
        { q: '"If you had called me, I would have answered." → Si me hubieras llamado, _____', options: [
          { text: 'te contestaría', correct: false },
          { text: 'te había contestado', correct: false },
          { text: 'te habría contestado', correct: true }
        ]},
        { q: 'Ojalá _____ (estudiar, yo) más para el examen. (a regret about the past)', options: [
          { text: 'hubiera estudiado', correct: true },
          { text: 'estudiara', correct: false },
          { text: 'había estudiado', correct: false }
        ]}
      ]
    }
,
    {
      id: 'future-simple',
      num: '51',
      level: 'sp2',
      title: 'The <em>future</em> tense',
      tag: 'Verbs · Tenses',
      summary: 'Two ways to say what "will" happen: the easy <em>ir a</em> + infinitive, and the one-word future tense. Plus the twelve irregular stems.',
      sections: [
        {
          heading: 'Two ways to talk about the <em>future</em>',
          body: 'Spanish has two everyday ways to express the future, and English does the exact same thing. You can say "I <em>am going to</em> study" (<em>voy a estudiar</em>) or "I <em>will</em> study" (<em>estudiaré</em>). The first is the <strong>informal future</strong> (<em>ir a</em> + infinitive) — the one you\'ll use most in speech. The second is the <strong>simple future</strong> — one word, slightly more formal, and very common in writing. Learn the easy one first, then add the second.'
        },
        {
          heading: 'The easy future: <em>ir a</em> + infinitive',
          body: 'Take the verb <strong>ir</strong> (to go), conjugate it in the present, add <strong>a</strong>, then the infinitive of whatever you\'re going to do. That\'s it — the second verb never changes. This is the fastest way to start talking about the future today.',
          conjugation: [
            ['yo', 'voy a hablar — I\'m going to talk'],
            ['tú', 'vas a comer — you\'re going to eat'],
            ['él/ella/usted', 'va a salir — he/she is going to leave'],
            ['nosotros', 'vamos a estudiar — we\'re going to study'],
            ['vosotros', 'vais a viajar — you all are going to travel'],
            ['ellos/ustedes', 'van a volver — they\'re going to return']
          ]
        },
        {
          heading: 'The simple future: <em>one</em> set of endings',
          body: 'Here\'s the good news that makes the future tense the easiest tense in Spanish: <strong>every verb uses the same endings</strong>, and you attach them to the <strong>whole infinitive</strong> — you don\'t chop anything off. No -ar/-er/-ir sorting. The endings are: <strong>-é, -ás, -á, -emos, -éis, -án</strong>. Notice all but the nosotros form carry a written accent.',
          conjugation: [
            ['yo', 'hablar<span class="ending">é</span> — I will speak'],
            ['tú', 'hablar<span class="ending">ás</span> — you will speak'],
            ['él/ella/usted', 'hablar<span class="ending">á</span> — he/she will speak'],
            ['nosotros', 'hablar<span class="ending">emos</span> — we will speak'],
            ['vosotros', 'hablar<span class="ending">éis</span> — you all will speak'],
            ['ellos/ustedes', 'hablar<span class="ending">án</span> — they will speak']
          ]
        },
        {
          heading: 'Same endings for <em>-er</em> and <em>-ir</em> verbs',
          body: 'Because the stem is the entire infinitive, -er and -ir verbs work identically — just glue the same six endings onto the full infinitive.',
          conjugation: [
            ['comer', 'comeré, comerás, comerá, comeremos, comeréis, comerán'],
            ['vivir', 'viviré, vivirás, vivirá, viviremos, viviréis, vivirán'],
            ['ser', 'seré, serás, será, seremos, seréis, serán'],
            ['ir', 'iré, irás, irá, iremos, iréis, irán']
          ]
        },
        {
          heading: 'The twelve <em>irregular</em> stems',
          body: 'Only twelve verbs are irregular in the future, and they\'re irregular in a friendly way: the <strong>endings stay exactly the same</strong> — only the stem changes. Learn these twelve stems and you\'ve mastered every irregular future form. They fall into three tidy groups.',
          conjugation: [
            ['Drop the vowel', 'haber → habr-, poder → podr-, querer → querr-, saber → sabr-, caber → cabr-'],
            ['Vowel → d', 'poner → pondr-, salir → saldr-, tener → tendr-, valer → valdr-, venir → vendr-'],
            ['Just weird (2)', 'decir → dir-, hacer → har-'],
            ['Example (tener)', 'tendré, tendrás, tendrá, tendremos, tendréis, tendrán'],
            ['Example (hacer)', 'haré, harás, hará, haremos, haréis, harán']
          ]
        },
        {
          heading: 'A bonus use: the future of <em>probability</em>',
          body: 'Spanish uses the future tense for a second thing English doesn\'t: <strong>guessing about the present</strong>. When you wonder or speculate about what\'s happening right now, you can use the future. <em>¿Qué hora será?</em> means "I wonder what time it is." <em>Estará en casa</em> means "He\'s probably at home." Context tells you whether the future is about the future or about a present guess.',
          examples: [
            { es: '¿Dónde estará María?', en: 'I wonder where María is. / Where can María be? (guess about now)' },
            { es: 'Serán las tres.', en: 'It\'s probably three o\'clock. (guess about now)' },
            { es: 'Tendrá unos treinta años.', en: 'He must be around thirty. (guess about now)' }
          ]
        },
        {
          heading: 'When to use <em>which</em>',
          body: 'Both futures are correct and often interchangeable, but there are tendencies worth knowing.',
          examples: [
            { es: 'Voy a llamarte esta noche.', en: 'Near-future plans and spoken intentions lean on ir a + infinitive.' },
            { es: 'El mundo cambiará mucho en cien años.', en: 'Predictions, promises, and writing lean on the simple future.' },
            { es: 'Te ayudaré, no te preocupes.', en: 'Promises and firm intentions sound natural in the simple future.' }
          ]
        },
        {
          type: 'mistakes',
          heading: 'What English speakers <em>get wrong</em>',
          body: 'The future trips people up in a few predictable places.',
          items: [
            'Chopping the infinitive. The stem is the <strong>whole infinitive</strong>: it\'s <em>comeré</em>, never "comé." Don\'t remove the -er/-ir.',
            'Forgetting the accents. Five of the six forms carry a written accent (<em>hablaré, hablarás, hablará, hablaréis, hablarán</em>) — only <em>hablaremos</em> has none. Dropping them is a spelling error.',
            'Using the irregular endings, not stems. The irregular verbs change only the <strong>stem</strong>; the endings never change. It\'s <em>tendré</em>, not "tendaré."',
            'Adding "a" to the simple future. It\'s <em>ir a</em> + infinitive OR the one-word future — never both. Say <em>voy a hablar</em> or <em>hablaré</em>, not "voy a hablaré."',
            'Translating "will you...?" as a future. In Spanish a polite request is usually the present or <em>poder</em>: <em>¿Me pasas la sal?</em> / <em>¿Puedes...?</em> — not the future tense.'
          ]
        }
      ],
      quiz: [
        { q: 'What do you attach the future endings to?', options: [
          { text: 'The whole infinitive (hablar-, comer-, vivir-)', correct: true },
          { text: 'The stem after dropping -ar/-er/-ir', correct: false },
          { text: 'The yo form of the present tense', correct: false }
        ]},
        { q: 'Which is the correct future form of "tener" for "yo"?', options: [
          { text: 'teneré', correct: false },
          { text: 'tendré', correct: true },
          { text: 'tenaré', correct: false }
        ]},
        { q: 'What does "¿Dónde estará?" most likely mean?', options: [
          { text: 'Where was he?', correct: false },
          { text: 'I wonder where he is. (a guess about now)', correct: true },
          { text: 'Where should he go?', correct: false }
        ]}
      ]
    }
,
    {
      id: 'por-para',
      num: '52',
      level: 'sp2',
      title: 'Por vs. <em>para</em>',
      tag: 'Prepositions · Usage',
      summary: 'Both translate as "for," but they\'re not interchangeable. One clear framework: <em>para</em> points forward to a goal or destination; <em>por</em> points back to a cause, or through a means.',
      sections: [
        {
          heading: 'Why this one feels <em>hard</em>',
          body: 'English collapses a lot of ideas into one little word: "for." Spanish splits that job between <strong>por</strong> and <strong>para</strong>, and they are <em>not</em> interchangeable — picking the wrong one can change the meaning of your sentence. The good news: there\'s a simple mental picture that resolves most cases, and the rest are fixed phrases you\'ll memorize.'
        },
        {
          heading: 'The big idea: <em>direction</em> vs. <em>cause</em>',
          body: 'Picture an arrow. <strong>PARA</strong> is an arrow pointing <em>forward</em> — toward a destination, a recipient, a deadline, a goal, a purpose. <strong>POR</strong> looks <em>backward</em> or <em>around</em> — the cause behind something, the route you move through, the means you use, or an exchange. If you can ask "toward what goal/who?" it\'s usually <em>para</em>. If you can ask "because of what? through what? in exchange for what?" it\'s usually <em>por</em>.'
        },
        {
          heading: 'Uses of <em>PARA</em> (goal / destination)',
          body: 'Think "aimed at." Almost every use of <em>para</em> involves a target you\'re heading toward.',
          conjugation: [
            ['Purpose / goal', 'Estudio <strong>para</strong> aprender. — I study (in order) to learn. (para + infinitive = "in order to")'],
            ['Recipient', 'Este regalo es <strong>para</strong> ti. — This gift is for you.'],
            ['Destination', 'Salimos <strong>para</strong> Madrid. — We\'re leaving for Madrid.'],
            ['Deadline', 'La tarea es <strong>para</strong> el lunes. — The homework is due for Monday.'],
            ['Opinion', '<strong>Para</strong> mí, es la mejor. — For me / in my opinion, it\'s the best.'],
            ['Comparison ("for a...")', '<strong>Para</strong> ser niño, cocina muy bien. — For a kid, he cooks very well.']
          ]
        },
        {
          heading: 'Uses of <em>POR</em> (cause / means / motion through)',
          body: 'Think "because of," "through," or "in exchange." <em>Por</em> covers the reason, the route, the method, and the trade.',
          conjugation: [
            ['Cause / reason', 'Lo hago <strong>por</strong> amor. — I do it out of / because of love.'],
            ['Gratitude', 'Gracias <strong>por</strong> tu ayuda. — Thanks for your help.'],
            ['Duration', 'Estudié <strong>por</strong> dos horas. — I studied for two hours.'],
            ['Motion through / along', 'Caminamos <strong>por</strong> el parque. — We walk through the park.'],
            ['Means / transport', 'Te llamo <strong>por</strong> teléfono. — I\'ll call you by phone. · Viajo <strong>por</strong> tren.'],
            ['Exchange / price', 'Pagué veinte dólares <strong>por</strong> el libro. — I paid $20 for the book.'],
            ['"Per"', 'dos veces <strong>por</strong> semana — twice per week'],
            ['Part of the day', '<strong>por</strong> la mañana / <strong>por</strong> la noche — in the morning / at night']
          ]
        },
        {
          heading: 'Minimal pairs that <em>flip</em> the meaning',
          body: 'The clearest way to feel the difference is to see the same sentence with each preposition. The choice changes what you mean.',
          examples: [
            { es: 'Lo hice por ti. / Lo hice para ti.', en: 'I did it because of you (for your sake). / I did it for you (to give to you).' },
            { es: 'Trabajo por la mañana. / Salgo para el trabajo.', en: 'I work in the morning. / I leave for work (destination).' },
            { es: 'Estudio por la beca. / Estudio para la beca.', en: 'I study because of the scholarship. / I study (in order) to get the scholarship.' }
          ]
        },
        {
          heading: 'Fixed expressions with <em>por</em>',
          body: 'Some of the most common phrases in Spanish just use <em>por</em> — memorize them as whole units and you\'ll never have to decide.',
          examples: [
            { es: 'por favor', en: 'please' },
            { es: 'por eso', en: 'that\'s why / therefore' },
            { es: 'por supuesto', en: 'of course' },
            { es: 'por fin', en: 'finally / at last' },
            { es: 'por ejemplo', en: 'for example' },
            { es: 'por lo menos', en: 'at least' }
          ]
        },
        {
          type: 'mistakes',
          heading: 'What English speakers <em>get wrong</em>',
          body: 'Because both mean "for," the errors are predictable — and easy to fix once you know the framework.',
          items: [
            'Using <em>para</em> for duration. Time you spend doing something is <strong>por</strong>: <em>Estudié por dos horas</em>, not "para dos horas."',
            'Using <em>por</em> for a deadline. A due date is a goal you\'re aiming at → <strong>para</strong>: <em>Es para el lunes</em>, not "por el lunes."',
            'Using <em>para</em> to say thanks. Gratitude is a cause → <strong>por</strong>: <em>Gracias por todo</em>, never "gracias para."',
            'Mixing up "in order to." <em>para</em> + infinitive means "in order to" (purpose): <em>Como para vivir</em> — I eat in order to live.',
            'Overthinking fixed phrases. <em>por favor, por eso, por supuesto</em> are set expressions — don\'t try to reason them out, just memorize them.'
          ]
        }
      ],
      quiz: [
        { q: 'Which sentence correctly expresses "Thanks for your help"?', options: [
          { text: 'Gracias para tu ayuda.', correct: false },
          { text: 'Gracias por tu ayuda.', correct: true },
          { text: 'Gracias de tu ayuda.', correct: false }
        ]},
        { q: 'To say homework is due "for Monday," you use…', options: [
          { text: 'para el lunes (a deadline / goal)', correct: true },
          { text: 'por el lunes (a cause)', correct: false },
          { text: 'either one, they\'re interchangeable', correct: false }
        ]},
        { q: '"Estudio ___ aprender" (I study in order to learn) needs…', options: [
          { text: 'por', correct: false },
          { text: 'para', correct: true },
          { text: 'no preposition', correct: false }
        ]}
      ]
    }
,
    {
      id: 'ling-what', num: '1', level: 'ling',
      title: 'What is <em>linguistics?</em>',
      tag: 'Lingüística · Start here',
      summary: 'Linguists study language as a system — and they describe how people really speak, not how they "should."',
      sections: [
        { heading: 'A science, not a rulebook', body: 'Linguistics is the study of how language actually works. The key mindset: linguists are <strong>descriptive</strong>, not <strong>prescriptive</strong> — they describe how people really speak instead of policing how they "should." Every variety of Spanish, from a professor\'s lecture to street slang, follows precise hidden rules.' },
        { heading: 'The five branches', body: 'Most of linguistics fits into five questions:<br><br>• <strong>Phonetics &amp; phonology</strong> — what are the sounds?<br>• <strong>Morphology</strong> — how are words built?<br>• <strong>Syntax</strong> — how are sentences built?<br>• <strong>Semantics</strong> — how is meaning made?<br>• <strong>Sociolinguistics &amp; dialectology</strong> — how does language vary by place and group?' },
        { type: 'tip', heading: 'You already think like a linguist', body: 'Every time you notice "Spanish puts the adjective <em>after</em> the noun" or "they drop the s at the end of words here," you are doing linguistics. This unit just gives names to patterns you already sense.' },
      ],
      quiz: [
        { q: 'Linguistics is mainly…', options: [{ text: 'Descriptive — it describes how people really speak', correct: true }, { text: 'Prescriptive — it enforces "correct" speech', correct: false }, { text: 'Memorizing vocabulary', correct: false }] },
        { q: 'Which branch studies how <em>sentences</em> are built?', options: [{ text: 'Phonetics', correct: false }, { text: 'Syntax', correct: true }, { text: 'Semantics', correct: false }] },
        { q: 'Which branch studies how Spanish <em>varies by region</em>?', options: [{ text: 'Sociolinguistics / dialectology', correct: true }, { text: 'Morphology', correct: false }, { text: 'Semantics', correct: false }] },
      ]
    },
    {
      id: 'ling-sounds', num: '2', level: 'ling',
      title: 'The sounds of <em>Spanish</em>',
      tag: 'Lingüística · Phonetics',
      summary: 'Five clean vowels, letters that change sound by position, and a steady machine-gun rhythm.',
      sections: [
        { heading: 'Five pure vowels', body: 'Spanish has exactly <strong>five vowel sounds</strong> (a, e, i, o, u), and each never changes. English has around twelve, and they glide. That steadiness is the backbone of the Spanish accent.', examples: [{ es: 'a e i o u', en: 'always “ah eh ee oh oo”' }, { es: 'English “a”', en: 'cat, cake, car, about — all different' }] },
        { heading: 'The same letter, two sounds', body: 'Spanish sounds shift automatically by position (linguists call these <strong>allophones</strong>). <strong>b, d, g</strong> are hard at the start of a word (<em>burro, dedo, gato</em>) but <strong>soften</strong> between vowels: the <em>d</em> in <em>nada</em> becomes the soft "th" of English <em>this</em>, and the <em>b</em> in <em>la boca</em> turns into a gentle "v"-like sound. Native speakers never notice they do it.' },
        { heading: 'Crisp, clipped consonants', body: 'English puffs air after p, t, k — say "pin" with a paper at your lips and it flutters. Spanish does not: "pino" leaves it still. Spanish also prefers simple <strong>consonant-vowel</strong> syllables, which adds to its even, clipped feel.' },
        { heading: 'The signature sounds', body: '<strong>rr</strong> is a rolled trill (perro); a single <strong>r</strong> is a quick tap (pero). <strong>ñ</strong> is "ny" (niño). <strong>j</strong> and soft <strong>g</strong> are a throaty "h" (jirafa, gente).' },
        { type: 'tip', heading: 'Machine-gun rhythm', body: 'Spanish is <strong>syllable-timed</strong> — every syllable takes about the same length, giving that steady rat-a-tat. English is <strong>stress-timed</strong> and squashes unstressed syllables. It is a big reason the two languages sound so different even at the same speed.' },
      ],
      quiz: [
        { q: 'How many vowel sounds does Spanish have?', options: [{ text: 'Five', correct: true }, { text: 'Twelve', correct: false }, { text: 'Three', correct: false }] },
        { q: 'Between vowels, the <em>d</em> in <em>nada</em> softens to a sound like…', options: [{ text: 'English "th" in <em>this</em>', correct: true }, { text: 'English "d" in <em>dog</em>', correct: false }, { text: 'It goes silent', correct: false }] },
        { q: 'Spanish rhythm is described as…', options: [{ text: 'Syllable-timed and steady', correct: true }, { text: 'Stress-timed like English', correct: false }, { text: 'Random', correct: false }] },
      ]
    },
    {
      id: 'ling-morphology', num: '3', level: 'ling',
      title: 'How words are <em>built</em>',
      tag: 'Lingüística · Morphology',
      summary: 'Spanish is inflectional — it packs meaning into endings where English needs extra words.',
      sections: [
        { heading: 'Meaning lives in the endings', body: 'Spanish is an <strong>inflectional</strong> language: a single ending can carry several pieces of meaning at once. In <em>habl<strong>amos</strong></em>, the "-amos" says <em>we</em> + <em>present</em> + <em>indicative</em>, all in one. English spreads that across separate words.', examples: [{ es: 'hablo / hablas / hablamos', en: 'I / you / we speak' }] },
        { heading: 'One verb, dozens of forms', body: 'A single Spanish verb has roughly <strong>50 forms</strong> across its tenses and moods. English usually has four or five: speak, speaks, spoke, spoken, speaking. That is why verb practice is such a big part of Spanish.' },
        { heading: 'Everything agrees', body: 'Change one thing and the whole phrase follows. <em>el gato negro</em> → <em>los gatos negros</em>: article, noun, and adjective all turn plural together. English only changes the noun ("the black cats").' },
        { type: 'tip', heading: 'Add a feeling with -ito', body: 'Endings can add emotion, not just grammar. <em>perro</em> → <em>perrito</em> (cute little dog); <em>casa</em> → <em>casona</em> (big old house); <em>ahora</em> → <em>ahorita</em> (right now-ish). English needs whole extra words to do this.' },
      ],
      quiz: [
        { q: 'Calling Spanish "inflectional" means…', options: [{ text: 'Endings carry several meanings at once', correct: true }, { text: 'It has no grammar', correct: false }, { text: 'Word order does all the work', correct: false }] },
        { q: 'Compared to English, a Spanish verb has…', options: [{ text: 'Far more forms', correct: true }, { text: 'Exactly the same number', correct: false }, { text: 'Only one form', correct: false }] },
        { q: '<em>perrito</em> is an example of…', options: [{ text: 'A diminutive (adds "cute/small")', correct: true }, { text: 'A plural', correct: false }, { text: 'A verb tense', correct: false }] },
      ]
    },
    {
      id: 'ling-syntax', num: '4', level: 'ling',
      title: 'How sentences are <em>built</em>',
      tag: 'Lingüística · Syntax',
      summary: 'The structural features that make Spanish sentences work differently from English.',
      sections: [
        { heading: 'You can drop the subject', body: 'Spanish is a <strong>pro-drop</strong> language: the verb ending already says who, so the subject pronoun is optional. <em>Hablo español</em> needs no "yo." Because the ending carries that information, Spanish can also reorder words freely for emphasis: <em>María lo hizo</em> / <em>Lo hizo María</em>.' },
        { heading: 'Adjectives usually follow', body: 'Spanish puts most adjectives <strong>after</strong> the noun: <em>casa blanca</em> (white house), not "blanca casa." Putting it before can change the feel: <em>un gran hombre</em> (a great man) vs <em>un hombre grande</em> (a big man).' },
        { heading: 'Structures English doesn\'t have', body: '• The <strong>personal "a"</strong>: when the object is a specific person, Spanish inserts <em>a</em> — <em>Veo <strong>a</strong> María</em>. English has nothing like it.<br>• <strong>Two verbs for "to be"</strong>: <em>ser</em> (identity/permanent) vs <em>estar</em> (state/location) — <em>es alto</em> (he is tall) vs <em>está cansado</em> (he is tired).' },
        { type: 'tip', heading: 'Backwards verbs & double negatives', body: '<em>Me gusta el café</em> literally says "the coffee pleases me" — the thing you like is the grammatical subject. And double negatives are <strong>required</strong>, not wrong: <em>No vi nada</em> = "I didn\'t see anything," literally "I didn\'t see nothing."' },
      ],
      quiz: [
        { q: '"Pro-drop" means Spanish can…', options: [{ text: 'Leave out the subject pronoun', correct: true }, { text: 'Drop the verb', correct: false }, { text: 'Skip all articles', correct: false }] },
        { q: 'The "personal a" appears when the object is…', options: [{ text: 'a specific person', correct: true }, { text: 'a place', correct: false }, { text: 'a number', correct: false }] },
        { q: '<em>No vi nada</em> shows that Spanish…', options: [{ text: 'Requires double negatives', correct: true }, { text: 'Has no negatives', correct: false }, { text: 'Copies English word order', correct: false }] },
      ]
    },
    {
      id: 'ling-history', num: '5', level: 'ling',
      title: 'Where Spanish <em>comes from</em>',
      tag: 'Lingüística · History',
      summary: 'Spanish is Latin worn smooth by centuries of speech — and the changes are astonishingly regular.',
      sections: [
        { heading: 'It started as street Latin', body: 'Spanish is a <strong>Romance language</strong>, a descendant of Latin like French, Italian, and Portuguese. It grew not from the Latin of books but from <em>Vulgar Latin</em> — the everyday speech Roman soldiers and settlers brought to Spain after about 200 BCE.' },
        { heading: 'Latin, reshaped — regular sound changes', body: 'As Latin wore down into Spanish, the same changes happened again and again:', examples: [{ es: 'petra → piedra · focum → fuego', en: 'stressed Latin e and o broke into ie and ue' }, { es: 'farina → harina · facere → hacer', en: 'Latin f- became h- (now silent)' }, { es: 'noctem → noche · lactem → leche', en: 'Latin -ct- became -ch-' }, { es: 'clamare → llamar · pluvia → lluvia', en: 'cl-, pl-, fl- became ll-' }] },
        { type: 'tip', heading: 'Why your verbs stem-change', body: 'That first rule is still alive in your grammar. The Latin "stressed o → ue" change is exactly why <em>poder → puede</em> and <em>tener → tiene</em> stem-change today — the diphthong only appears where the stress falls. You have been using a 2,000-year-old sound law all along.' },
        { heading: 'Arabic and the Americas', body: 'Nearly 800 years of <em>al-Ándalus</em> (711–1492) layered in thousands of Arabic words (<em>ojalá, almohada, azúcar, álgebra</em>) — Arabic is Spanish\'s second-biggest source after Latin. Then, after 1492, indigenous American languages gave Spanish (and the world) <em>papa, tomate, chocolate, huracán</em>.' },
      ],
      quiz: [
        { q: 'Spanish is a "Romance language," meaning it descends from…', options: [{ text: 'Latin', correct: true }, { text: 'Arabic', correct: false }, { text: 'Greek', correct: false }] },
        { q: 'Spanish verb stem-changes like <em>poder → puede</em> trace back to…', options: [{ text: 'A regular Latin sound change (o → ue)', correct: true }, { text: 'Arabic influence', correct: false }, { text: 'English', correct: false }] },
        { q: 'After Latin, the biggest source of Spanish vocabulary is…', options: [{ text: 'Arabic', correct: true }, { text: 'German', correct: false }, { text: 'Greek', correct: false }] },
      ]
    },
    {
      id: 'ling-loanwords', num: '6', level: 'ling',
      title: 'Words Spanish <em>borrowed &amp; shares</em>',
      tag: 'Lingüística · Vocabulary',
      summary: 'Free vocabulary from shared Latin roots — plus the false friends that fool you.',
      sections: [
        { heading: 'Cognates: free vocabulary', body: 'Because Spanish and English both drew heavily on Latin, <strong>thousands</strong> of words look alike and mean the same: <em>nación/nation, familia/family, animal, importante, posible</em>. Endings are predictable too: English <em>-tion</em> ↔ Spanish <em>-ción</em> (nation → nación). You already recognize more Spanish than you think.' },
        { heading: 'Words Spanish took in', body: 'Spanish itself is full of borrowings: around <strong>4,000</strong> words from Arabic (<em>ojalá, azúcar, aceite</em>) and many from indigenous American languages (<em>papa, chocolate, huracán</em>). More recently, English tech words (<em>el wifi, tuitear</em>).' },
        { type: 'mistakes', heading: 'False friends — watch out', body: 'A few words look like English but mean something else:', items: ['<em>embarazada</em> = pregnant (NOT embarrassed)', '<em>éxito</em> = success (NOT exit)', '<em>librería</em> = bookstore (NOT library)', '<em>ropa</em> = clothes (NOT rope)', '<em>actualmente</em> = currently (NOT actually)'] },
      ],
      quiz: [
        { q: 'A "cognate" is a word that…', options: [{ text: 'Looks alike and shares meaning across languages', correct: true }, { text: 'Is always a false friend', correct: false }, { text: 'Has no English relative', correct: false }] },
        { q: 'English "-tion" usually matches the Spanish ending…', options: [{ text: '-ción', correct: true }, { text: '-mente', correct: false }, { text: '-azo', correct: false }] },
        { q: '<em>librería</em> means…', options: [{ text: 'Bookstore', correct: true }, { text: 'Library', correct: false }, { text: 'Freedom', correct: false }] },
      ]
    },
    {
      id: 'ling-acquisition', num: '7', level: 'ling',
      title: 'How we <em>learn languages</em>',
      tag: 'Lingüística · ¿Sabías que…?',
      summary: 'The science of picking up a language — and what it means for your own Spanish.',
      sections: [
        { heading: 'First language vs. second', body: 'Babies acquire their first language just by being surrounded by it — no lessons, no charts. Learning a second language later takes more effort, but adults have an edge: you can use strategy, patterns, and reading to move faster than a toddler.' },
        { heading: 'The "critical period"', body: 'There seems to be a window (closing around puberty) for picking up a <strong>native accent</strong> effortlessly — which is why most adult learners keep an accent. The good news: <strong>grammar and vocabulary have no such deadline</strong>. You can master them at any age.' },
        { heading: 'Comprehensible input', body: 'One influential idea (from Stephen Krashen) is that we acquire language mainly by <strong>understanding messages slightly above our level</strong> — not by drilling rules. That is why lots of reading and listening is so powerful.' },
        { heading: 'When learning stalls — or fades', body: 'Acquisition is not always forward motion:<br><br>• <strong>Fossilization</strong> — errors can "freeze" and stop improving, even at a fluent level, once you are understood "well enough" and stop getting feedback.<br>• <strong>Attrition</strong> — "use it or lose it." A language you stop using fades — a second language, or even a first for many heritage speakers.<br>• <strong>Suppression</strong> — sometimes a language is lost by force: colonization, school punishments, and social pressure pushed generations to abandon indigenous and immigrant languages. Much of the Spanish-speaking world carries this history.' },
        { type: 'tip', heading: '¿Sabías que…? — quick facts', body: '• The most common <strong>1,000–2,000 words</strong> cover the great majority of everyday speech.<br>• <strong>Spaced repetition</strong> (reviewing right before you forget) beats cramming — exactly how the <em>Repaso</em> tool here works.<br>• Stress and fear raise the "<strong>affective filter</strong>" and block learning, so low-pressure practice helps.<br>• Lifelong bilingualism is linked to sharper focus and may <strong>delay dementia</strong> symptoms by years.' },
      ],
      quiz: [
        { q: 'According to the "critical period," what is hardest to fully master as an adult?', options: [{ text: 'A native-like accent', correct: true }, { text: 'Vocabulary', correct: false }, { text: 'Reading', correct: false }] },
        { q: 'When a learner\'s errors "freeze" and stop improving, that is…', options: [{ text: 'Fossilization', correct: true }, { text: 'Attrition', correct: false }, { text: 'Acquisition', correct: false }] },
        { q: 'Which study method does the science favor?', options: [{ text: 'Spaced repetition over cramming', correct: true }, { text: 'Cramming the night before', correct: false }, { text: 'Never reviewing', correct: false }] },
      ]
    },
    {
      id: 'ling-dialects', num: '8', level: 'ling',
      title: 'One language, many <em>accents</em>',
      tag: 'Lingüística · Dialects',
      summary: 'Spanish spans 20+ countries. Here are the famous features linguists use to tell regions apart.',
      sections: [
        { heading: 'How you say "you" — and voseo', body: 'Spanish has several words for "you," and the choice marks where you are from. <strong>tú</strong> (informal) and <strong>usted</strong> (formal) are everywhere; <strong>vosotros</strong> (informal plural) lives in Spain, while Latin America uses <strong>ustedes</strong> for everyone. And about a third of Latin America uses <strong>vos</strong> instead of <em>tú</em>, with its own verbs: <em>vos tenés, vos sos, vos hablás</em>. <em>Voseo</em> is actually an <strong>archaism</strong> — an older form that survived in the Americas after dying out in Spain.' },
        { heading: 'Seseo: the "th" line', body: 'Most of Spain distinguishes two sounds: <em>casa</em> (/s/) vs <em>caza</em> (a "th" sound, /θ/). Almost everywhere else — all of Latin America, the Canary Islands, southern Spain — both are simply /s/. This merger is called <strong>seseo</strong>. (In parts of Andalusia it flips the other way, using "th" for both: <strong>ceceo</strong>.) Neither is more correct — just different regions.' },
        { heading: 'Yeísmo: the ll / y merger', body: 'Traditionally <em>ll</em> (/ʎ/) and <em>y</em> (/ʝ/) were different sounds. Today most speakers merge them, so <em>calle</em> and <em>cayó</em> share one sound — that is <strong>yeísmo</strong>. In Argentina and Uruguay the merged sound became a "sh": <em>calle</em> sounds like "ca-she."' },
        { heading: 'The disappearing "s"', body: 'In the Caribbean, much of coastal Latin America, and southern Spain, an <em>s</em> at the end of a syllable softens to "h" or vanishes: <em>las casas</em> → "lah casah." Linguists call this <strong>s-aspiration</strong> or <strong>debuccalization</strong>. Vocabulary shifts too — a city bus is <em>guagua</em> in the Caribbean, <em>camión</em> in Mexico, <em>colectivo</em> in Argentina.' },
        { type: 'tip', heading: 'There is no "best" Spanish', body: 'Even pronouns vary: in central Spain you hear <strong>leísmo</strong> — <em>le vi</em> for "I saw him," where the textbook says <em>lo vi</em>. Every region thinks its own Spanish is the "normal" one. Textbooks teach a neutral standard, but all of these varieties are fully correct — knowing the differences just makes you a flexible listener.' },
      ],
      quiz: [
        { q: 'Pronouncing <em>casa</em> and <em>caza</em> both with /s/ is called…', options: [{ text: 'seseo', correct: true }, { text: 'ceceo', correct: false }, { text: 'yeísmo', correct: false }] },
        { q: 'Yeísmo is the merger of…', options: [{ text: 'll and y', correct: true }, { text: 's and z', correct: false }, { text: 'b and v', correct: false }] },
        { q: 'In the Caribbean, <em>las casas</em> often sounds like…', options: [{ text: '"lah casah" (s → h)', correct: true }, { text: '"las casas", very crisp', correct: false }, { text: '"lath cathath"', correct: false }] },
        { q: '<em>vos tenés</em> (voseo) is mainly heard in…', options: [{ text: 'Argentina and parts of Latin America', correct: true }, { text: 'Spain only', correct: false }, { text: 'Nowhere today', correct: false }] },
      ]
    }
,
    {
      id: 'ling-vowels', num: 'P01', level: 'ling',
      title: 'The <em>vowels</em>',
      tag: 'Lingüística · Phonology',
      summary: 'Spanish has just five vowel sounds — but how they team up is the secret to the accent.',
      sections: [
        { heading: 'Five sounds, always the same', body: 'Spanish vowels are the easiest part of the language: there are only <strong>five</strong>, and each makes <strong>one sound, every time</strong> — no surprises. a = "ah", e = "eh", i = "ee", o = "oh", u = "oo". They stay short and crisp; a Spanish vowel never gets lazy or mumbled the way English ones do.', examples: [{ es: 'casa · mesa · piso', en: 'clear a, e, i' }, { es: 'English "the / a"', en: 'often mumbled to "uh"' }] },
        { heading: 'Strong vowels vs. weak vowels', body: 'Linguists split the five into two teams:<br>• <strong>Strong</strong> (open): <strong>a, e, o</strong><br>• <strong>Weak</strong> (closed): <strong>i, u</strong><br>This teamwork decides whether two vowels share a syllable or split apart.' },
        { heading: 'Diphthongs — two vowels, one beat', body: 'When a weak vowel (i or u) bumps into another vowel, they glide together into a <strong>single syllable</strong> — a <strong>diphthong</strong>. Say <em>bien, agua, cielo, cuatro</em>: each squeezes two vowels into one beat.', examples: [{ es: 'bien', en: '1 syllable (ie glides)' }, { es: 'a-gua', en: 'ua glides together' }] },
        { heading: 'Hiatus — when they split', body: 'But two <strong>strong</strong> vowels each keep their own syllable — that split is called <strong>hiatus</strong>: <em>ma-es-tro, le-er, ca-os</em>. A written accent can also force the split: <em>dí-a, pa-ís</em>.' },
        { type: 'tip', heading: 'Why this matters', body: 'Diphthong or hiatus tells you <strong>how many syllables</strong> a word has — and that controls <strong>stress and accent marks</strong> (coming up in this unit). These little vowel rules are the hidden engine behind a lot of Spanish spelling.' },
      ],
      quiz: [
        { q: 'How many vowel sounds does Spanish have?', options: [{ text: 'Five', correct: true }, { text: 'Twelve', correct: false }, { text: 'Three', correct: false }] },
        { q: 'A <em>diphthong</em> is…', options: [{ text: 'Two vowels gliding into one syllable', correct: true }, { text: 'A silent letter', correct: false }, { text: 'Two separate words', correct: false }] },
        { q: 'The "weak" vowels are…', options: [{ text: 'i and u', correct: true }, { text: 'a and o', correct: false }, { text: 'all five', correct: false }] },
      ]
    },
    {
      id: 'ling-consonants', num: 'P02', level: 'ling',
      title: 'Consonants &amp; <em>glides</em>',
      tag: 'Lingüística · Phonology',
      summary: 'Most Spanish consonants are close to English — plus a few stars and two half-vowel "glides."',
      sections: [
        { heading: 'Mostly familiar', body: 'Good news: most Spanish consonants sound close to their English cousins — m, n, l, p, t, k, f, s, ch. Spanish p, t, k are just <strong>softer</strong> (no puff of air). Only a handful of consonants are truly new.' },
        { heading: 'The stars to know', body: '• <strong>ñ</strong> = "ny" (<em>niño</em>)<br>• <strong>rr</strong> = a rolled trill; a single <strong>r</strong> = a quick tap (<em>perro</em> vs <em>pero</em>)<br>• <strong>j</strong> and soft <strong>g</strong> = a throaty "h" (<em>jamón, gente</em>)<br>• <strong>h</strong> = always silent (<em>hola</em>)' },
        { heading: 'Glides: the half-vowels', body: 'When <strong>i</strong> or <strong>u</strong> starts a diphthong, it stops acting like a vowel and behaves like a consonant — a <strong>glide</strong> (or semivowel). The i in <em>tierra</em> is a "y"-glide; the u in <em>fuego</em> is a "w"-glide. They slide into the next vowel.', examples: [{ es: 'tierra', en: 'i = "y" glide' }, { es: 'fuego', en: 'u = "w" glide' }] },
        { type: 'tip', heading: 'b and v are the SAME sound', body: 'Spanish makes <strong>no difference</strong> between b and v — both are the same /b/ sound. <em>vaca</em> and <em>baca</em> are pronounced identically. (That is why even native speakers sometimes mix them up in spelling.)' },
      ],
      quiz: [
        { q: 'The letter <em>ñ</em> sounds like…', options: [{ text: '"ny" as in canyon', correct: true }, { text: '"n" then a pause', correct: false }, { text: 'a silent letter', correct: false }] },
        { q: 'In Spanish, b and v are…', options: [{ text: 'The same sound', correct: true }, { text: 'Totally different sounds', correct: false }, { text: 'Both silent', correct: false }] },
        { q: 'A "glide" is…', options: [{ text: 'An i or u sliding into another vowel', correct: true }, { text: 'A rolled r', correct: false }, { text: 'A silent h', correct: false }] },
      ]
    },
    {
      id: 'ling-allophony', num: 'P03', level: 'ling',
      title: 'One letter, <em>many sounds</em>',
      tag: 'Lingüística · Phonology',
      summary: 'The same letter can quietly change its sound depending on its neighbors — and words blend together.',
      sections: [
        { heading: 'Hard and soft b, d, g', body: '<strong>b, d, g</strong> are "hard" at the start of a word or after a pause (<em>burro, dedo, gato</em>), but they <strong>soften</strong> between vowels: the d in <em>nada</em> becomes the soft "th" of English <em>this</em>; the b in <em>la boca</em> turns breathy. These automatic variants of one sound are called <strong>allophones</strong>.' },
        { heading: 'Words blend together', body: 'In real speech, the end of one word melts into the next — linguists call this <strong>sandhi</strong>. <em>los amigos</em> comes out "lo-sa-mi-gos"; <em>el hielo</em> runs together. Spanish loves to keep syllables flowing without gaps.', examples: [{ es: 'los amigos', en: '→ "lo-sa-mi-gos"' }, { es: 'mis hermanos', en: '→ "mi-ser-ma-nos"' }] },
        { heading: 'Long double sounds', body: 'When the same consonant ends one word and starts the next, it can stretch into one long sound — a <strong>geminate</strong>: <em>las salas, el ladrón</em>. (Inside a single word, only <em>rr</em>, <em>cc</em>, and <em>nn</em> double up.)' },
        { type: 'tip', heading: 'Why Spanish sounds so smooth', body: 'These blends are why fluent Spanish sounds like one flowing ribbon instead of separate, choppy words. Do not fight it — letting the sounds connect is what makes you sound natural.' },
      ],
      quiz: [
        { q: 'Between vowels, b, d, and g…', options: [{ text: 'Soften to gentler sounds', correct: true }, { text: 'Get louder and harder', correct: false }, { text: 'Go silent', correct: false }] },
        { q: '"Sandhi" describes…', options: [{ text: 'Words blending into each other in speech', correct: true }, { text: 'A spelling rule', correct: false }, { text: 'A verb tense', correct: false }] },
        { q: 'Different automatic versions of one sound are called…', options: [{ text: 'Allophones', correct: true }, { text: 'Vowels', correct: false }, { text: 'Accents', correct: false }] },
      ]
    },
    {
      id: 'ling-spelling', num: 'P04', level: 'ling',
      title: 'Spelling ↔ <em>sound</em>',
      tag: 'Lingüística · Phonology',
      summary: 'Spanish spelling is wonderfully regular — once you know a handful of rules.',
      sections: [
        { heading: 'One letter, one sound (mostly)', body: 'Unlike English, Spanish spelling almost always tells you the sound: learn the letter, read the word. There is no "though / through / tough." Only a few letters do double duty, and there are clear rules for them.' },
        { heading: 'The c and g rule', body: 'c and g change depending on the next vowel:<br>• <em>ca, co, cu</em> = hard "k" — but <em>ce, ci</em> = "s" (or "th" in Spain)<br>• <em>ga, go, gu</em> = hard "g" — but <em>ge, gi</em> = throaty "h"<br>To keep the hard sound before e/i, Spanish spells <strong>que/qui</strong> and <strong>gue/gui</strong> (the u is silent).', examples: [{ es: 'queso · guitarra', en: 'silent u keeps the hard sound' }, { es: 'gente · cielo', en: 'soft before e/i' }] },
        { heading: 'Almost no silent letters', body: '<strong>h</strong> is always silent (<em>hola, hora</em>). The <strong>u</strong> is silent in <em>que, qui, gue, gui</em> — unless it wears two dots (diéresis): <em>pingüino, vergüenza</em>, where you DO say it.' },
        { type: 'tip', heading: 'Same sound, two spellings', body: 'A few sounds can be written more than one way — and that is what spelling tests check:<br>• "b" sound = <strong>b</strong> or <strong>v</strong><br>• throat "h" = <strong>j</strong> or <strong>g</strong>(e/i)<br>• "s" sound = <strong>s</strong>, <strong>c</strong>(e/i), or <strong>z</strong>' },
      ],
      quiz: [
        { q: 'The letter <em>h</em> in Spanish is…', options: [{ text: 'Always silent', correct: true }, { text: 'Always a hard sound', correct: false }, { text: 'Pronounced like English h', correct: false }] },
        { q: 'To write a hard "k" sound before e or i, Spanish uses…', options: [{ text: 'qu (que, qui)', correct: true }, { text: 'c (ce, ci)', correct: false }, { text: 'k always', correct: false }] },
        { q: 'In <em>pingüino</em>, the two dots over the u mean…', options: [{ text: 'You DO pronounce the u', correct: true }, { text: 'The u is silent', correct: false }, { text: 'It is a typo', correct: false }] },
      ]
    },
    {
      id: 'ling-stress', num: 'P05', level: 'ling',
      title: 'Syllables &amp; <em>stress</em>',
      tag: 'Lingüística · Phonology',
      summary: 'Where the beat falls — and the one rule that explains every accent mark.',
      sections: [
        { heading: 'Splitting syllables', body: 'Spanish likes each syllable to start with a consonant and end with a vowel: <em>ca-sa, pe-lo-ta, e-le-fan-te</em>. That open, even shape is what gives Spanish its steady, syllable-by-syllable rhythm.' },
        { heading: 'The two default stress rules', body: 'With no accent mark, just two rules decide where the beat falls:<br>• Words ending in a <strong>vowel, -n, or -s</strong> → stress the <strong>second-to-last</strong> syllable (<em>CA-sa, HA-blan, ZA-pa-tos</em>)<br>• Words ending in <strong>any other consonant</strong> → stress the <strong>last</strong> syllable (<em>ha-BLAR, pa-PEL, ciu-DAD</em>)' },
        { heading: 'When you need a tilde (´)', body: 'The written accent marks the <strong>exception</strong> to those two rules. <em>ca-FÉ</em> ends in a vowel but is stressed on the last syllable, so it needs the mark. Same with <em>LÁ-piz</em> and <em>RÁ-pi-do</em>. The tilde simply says "the beat goes <em>here</em>, not where you would expect."' },
        { type: 'tip', heading: 'The accent is information', body: 'An accent mark is never decoration. It tells you exactly which syllable to hit — and sometimes which word you mean: <em>sí</em> (yes) vs <em>si</em> (if), <em>tú</em> (you) vs <em>tu</em> (your), <em>él</em> (he) vs <em>el</em> (the).' },
      ],
      quiz: [
        { q: '<em>casa</em> (ends in a vowel) is stressed on the…', options: [{ text: 'Second-to-last syllable', correct: true }, { text: 'Last syllable', correct: false }, { text: 'First syllable always', correct: false }] },
        { q: 'A word ending in -r, like <em>hablar</em>, is stressed on the…', options: [{ text: 'Last syllable', correct: true }, { text: 'Second-to-last syllable', correct: false }, { text: 'Middle', correct: false }] },
        { q: 'A written accent mark (tilde) shows…', options: [{ text: 'The exception to the stress rules', correct: true }, { text: 'That a letter is silent', correct: false }, { text: 'A plural', correct: false }] },
      ]
    }
,
    {
      id: 'ling-spain', num: 'D01', level: 'ling',
      title: 'Spain: <em>north &amp; south</em>',
      tag: 'Lingüística · Dialects',
      summary: 'The same country, two very different accents — and islands that sound American.',
      sections: [
        { heading: 'The north: the "th" accent', body: 'In central and northern Spain (Castilian), people <strong>distinguish</strong> two sounds: <em>casa</em> (/s/) and <em>caza</em> (a "th", /θ/). They pronounce every <em>s</em> crisply and use <strong>vosotros</strong> for "you all." This is the Spanish most textbooks picture.' },
        { heading: 'The south: relaxed Andalusian', body: 'In Andalusia (the south) speech is faster and softer: both sounds merge to /s/ (<strong>seseo</strong>) — or sometimes both become "th" (<strong>ceceo</strong>) — and the <em>s</em> at the end of a syllable fades to "h": <em>las casas</em> → "lah casah." Final consonants often drop.', examples: [{ es: '¿Cómo estás?', en: '→ "¿Cómo ehtá?"' }, { es: 'los niños', en: '→ "loh niño"' }] },
        { heading: 'The Canary Islands 🇮🇨 — a bridge to the Americas', body: 'The Canaries sound surprisingly <strong>Latin American</strong>: seseo, s-aspiration, and <strong>ustedes</strong> instead of vosotros. Centuries of ships sailing to the New World tied the two together.' },
        { type: 'tip', heading: 'No accent is "purer"', body: 'Madrid\'s "th" is not more correct than Seville\'s "s" — they are just different regions of one language. Spaniards understand each other fine.' },
      ],
      quiz: [
        { q: 'In northern Spain, <em>casa</em> and <em>caza</em> are…', options: [{ text: 'Two different sounds (/s/ vs "th")', correct: true }, { text: 'Exactly the same', correct: false }, { text: 'Both silent', correct: false }] },
        { q: 'A classic Andalusian feature is…', options: [{ text: 'The s at the end of a syllable fading to "h"', correct: true }, { text: 'Rolling every r twice', correct: false }, { text: 'Adding extra vowels', correct: false }] },
        { q: 'The Canary Islands use…', options: [{ text: 'ustedes (like Latin America)', correct: true }, { text: 'vosotros only', correct: false }, { text: 'no "you all" word', correct: false }] },
      ]
    },
    {
      id: 'ling-mexcentam', num: 'D02', level: 'ling',
      title: 'Mexico &amp; <em>Central America</em>',
      tag: 'Lingüística · Dialects',
      summary: 'Crisp highland Spanish, Aztec words, and the return of "vos."',
      sections: [
        { heading: 'Mexican Spanish 🇲🇽', body: 'Central Mexican Spanish keeps its <strong>s</strong> strong and clear, but often <strong>squeezes the unstressed vowels</strong>, especially next to s: <em>necesitas</em> can sound like "nec\'sitas." It is full of <strong>Nahuatl</strong> (Aztec) words: <em>cuate</em> (buddy), <em>elote</em> (corn on the cob), <em>chamaco</em> (kid).' },
        { heading: 'Coast vs. highland', body: 'On Mexico\'s hot coasts the <em>s</em> softens (more Caribbean-sounding), while the central highlands keep it sharp. One country, several accents.' },
        { heading: 'Central America & voseo 🇬🇹🇭🇳🇸🇻🇳🇮🇨🇷', body: 'From Guatemala to Costa Rica, most people use <strong>vos</strong> instead of <em>tú</em> (<em>vos tenés, vos sos</em>), and the <em>s</em> often weakens to "h" at the ends of syllables — a bridge between Mexican and Caribbean styles.' },
        { type: 'tip', heading: 'Nahuatl is everywhere', body: 'Words like <em>chocolate, tomate, aguacate, chile</em> traveled from Nahuatl into Spanish — and then into English. You speak a little Aztec every day.' },
      ],
      quiz: [
        { q: '<em>chocolate</em> and <em>tomate</em> came into Spanish from…', options: [{ text: 'Nahuatl (Aztec)', correct: true }, { text: 'Arabic', correct: false }, { text: 'Italian', correct: false }] },
        { q: 'Across most of Central America, people say…', options: [{ text: 'vos instead of tú', correct: true }, { text: 'vosotros', correct: false }, { text: 'only usted', correct: false }] },
        { q: 'Central Mexican Spanish tends to…', options: [{ text: 'Keep the s strong but squeeze vowels', correct: true }, { text: 'Drop every s', correct: false }, { text: 'Roll every r', correct: false }] },
      ]
    },
    {
      id: 'ling-caribbean', num: 'D03', level: 'ling',
      title: 'The <em>Caribbean</em> &amp; the coasts',
      tag: 'Lingüística · Dialects',
      summary: 'Fast, musical Spanish where the s disappears and the rhythm takes over.',
      sections: [
        { heading: 'The disappearing s 🇨🇺🇩🇴🇵🇷', body: 'In Cuba, the Dominican Republic, Puerto Rico, and the Caribbean coasts, the syllable-final <em>s</em> almost always becomes "h" or vanishes: <em>¿cómo estás?</em> → "¿cómo ehtá?" It is the region\'s signature sound.' },
        { heading: 'Other coastal sounds', body: 'The <em>n</em> at the end of a word is often pushed to the back of the mouth (like the "ng" in "sing"), and in Puerto Rico the <em>r</em> can turn into an "l": <em>Puerto Rico</em> → "Puelto Rico." African heritage shaped the region\'s rhythm and vocabulary.' },
        { heading: 'The Pacific coast too 🇨🇴🇪🇨', body: 'The Pacific coasts of Colombia and Ecuador share these lowland features — a soft s, a flowing rhythm — along with a strong Afro-Hispanic culture.' },
        { type: 'tip', heading: 'Fast is not careless', body: 'Dropping sounds follows strict, predictable rules. Caribbean Spanish is not "lazy" — it is a complete, consistent system, just a different one.' },
      ],
      quiz: [
        { q: 'The most famous Caribbean feature is…', options: [{ text: 'The s fading to "h" or disappearing', correct: true }, { text: 'Rolling every r', correct: false }, { text: 'Adding the "th" sound', correct: false }] },
        { q: 'In Puerto Rico, the <em>r</em> can sometimes become…', options: [{ text: 'an "l"', correct: true }, { text: 'a "th"', correct: false }, { text: 'silent vowels', correct: false }] },
        { q: 'Caribbean Spanish dropping sounds is…', options: [{ text: 'A consistent, rule-based system', correct: true }, { text: 'Random and careless', correct: false }, { text: 'A spelling mistake', correct: false }] },
      ]
    },
    {
      id: 'ling-andes', num: 'D04', level: 'ling',
      title: 'The <em>Andes</em> &amp; Paraguay',
      tag: 'Lingüística · Dialects',
      summary: 'Mountain Spanish that keeps its s — shaped by Quechua, Aymara, and Guaraní.',
      sections: [
        { heading: 'Highland Spanish 🇵🇪🇧🇴', body: 'High in the Andes (Peru, Bolivia, highland Ecuador), people keep the <strong>s</strong> strong and clear — the opposite of the Caribbean. The <em>rr</em> can become a buzzy, almost "zh" sound.' },
        { heading: 'Living between two languages', body: 'Millions of Andeans grow up <strong>bilingual</strong> in Spanish and <strong>Quechua</strong> or <strong>Aymara</strong>. Those languages lend everyday words — <em>papa, cancha, poncho, choclo</em> — and shape the local Spanish.' },
        { heading: 'Paraguay & Guaraní 🇵🇾', body: 'Paraguay is the most bilingual country in the Americas: nearly everyone speaks <strong>Guaraní</strong> alongside Spanish and blends them into a mix called <em>jopara</em>. Paraguay also uses <strong>voseo</strong>.' },
        { type: 'tip', heading: 'Contact changes language', body: 'When two languages live side by side for centuries, they trade words and sounds. Andean and Paraguayan Spanish are perfect, living examples of language contact.' },
      ],
      quiz: [
        { q: 'Compared to the Caribbean, Andean Spanish tends to…', options: [{ text: 'Keep the s strong and clear', correct: true }, { text: 'Drop the s even more', correct: false }, { text: 'Add a "th" sound', correct: false }] },
        { q: 'In Paraguay, most people also speak…', options: [{ text: 'Guaraní', correct: true }, { text: 'Italian', correct: false }, { text: 'Arabic', correct: false }] },
        { q: 'Words like <em>papa</em> and <em>poncho</em> come from…', options: [{ text: 'Andean languages (Quechua/Aymara)', correct: true }, { text: 'English', correct: false }, { text: 'Latin', correct: false }] },
      ]
    },
    {
      id: 'ling-southerncone', num: 'D05', level: 'ling',
      title: 'The <em>Southern Cone</em>',
      tag: 'Lingüística · Dialects',
      summary: 'The "sh" sound, voseo, and an Italian sing-song — plus Chile\'s famous slang.',
      sections: [
        { heading: 'River Plate Spanish 🇦🇷🇺🇾', body: 'In Argentina and Uruguay, <em>ll</em> and <em>y</em> become a "sh": <em>calle</em> = "ca-SHE," <em>yo</em> = "SHO." They use <strong>vos</strong> (<em>vos sos, vos tenés</em>) and a melodic, almost <strong>Italian-sounding</strong> intonation — the legacy of huge Italian immigration.' },
        { heading: 'Chilean Spanish 🇨🇱', body: 'Chile is famous for being hard to follow: the <em>s</em> aspirates, final sounds drop, and the slang is intense (<em>cachái</em> = "you get it?", <em>po</em>, <em>al tiro</em> = "right away"). Chileans also use special vos-style verb endings: <em>¿cómo estái?</em>' },
        { heading: 'Why so different?', body: 'Italian immigration in Argentina, distance from Spain, and contact with neighbors all pushed Southern Cone Spanish in its own direction over time.' },
        { type: 'tip', heading: '"Che" and "po"', body: 'Tiny filler words give the region away instantly: <em>che</em> in Argentina (it is even where "Che" Guevara got his nickname), <em>po</em> in Chile.' },
      ],
      quiz: [
        { q: 'In Argentina and Uruguay, <em>calle</em> sounds like…', options: [{ text: '"ca-she"', correct: true }, { text: '"ca-ye" exactly as spelled', correct: false }, { text: '"ca-the"', correct: false }] },
        { q: 'River Plate intonation is shaped by…', options: [{ text: 'Italian immigration', correct: true }, { text: 'Arabic', correct: false }, { text: 'Guaraní', correct: false }] },
        { q: 'Chilean Spanish is known for…', options: [{ text: 'Heavy slang and dropped sounds', correct: true }, { text: 'Rolling every r twice', correct: false }, { text: 'Speaking very slowly', correct: false }] },
      ]
    },
    {
      id: 'ling-contact', num: 'D06', level: 'ling',
      title: 'Creoles &amp; <em>Spanish in the USA</em>',
      tag: 'Lingüística · Dialects',
      summary: 'Where Spanish blended into brand-new languages — and where it now grows fastest.',
      sections: [
        { heading: 'Palenquero: freedom\'s language 🇨🇴', body: 'In San Basilio de Palenque, Colombia — the first <strong>free</strong> town founded by escaped enslaved Africans — people created <strong>Palenquero</strong>, a new language blending Spanish with Central African (Bantu) languages. It is its own tongue, not just an accent.' },
        { heading: 'Chavacano: Spanish in Asia 🇵🇭', body: 'In the Philippines (mostly around Zamboanga), <strong>Chavacano</strong> is a Spanish-based <strong>creole</strong>: Spanish words with Filipino grammar. Spoken by hundreds of thousands, it is the only Spanish creole in Asia — a leftover of colonial history.' },
        { heading: 'Spanish in the USA 🇺🇸', body: 'The United States is now one of the largest Spanish-speaking countries on Earth. Its Spanish blends every variety (Mexican, Caribbean, Central American) and mixes with English through <strong>code-switching</strong> — "Spanglish": <em>parquear</em> (to park), <em>el lonche</em> (lunch).' },
        { type: 'tip', heading: 'Creole vs. dialect', body: 'A <strong>dialect</strong> is a variety of one language; a <strong>creole</strong> is a brand-new language born when two blend. Palenquero and Chavacano are creoles — not just accents.' },
      ],
      quiz: [
        { q: 'Palenquero (Colombia) is best described as…', options: [{ text: 'A new creole language, not just an accent', correct: true }, { text: 'A Spanish accent', correct: false }, { text: 'A type of Italian', correct: false }] },
        { q: 'Chavacano is spoken in…', options: [{ text: 'The Philippines', correct: true }, { text: 'Argentina', correct: false }, { text: 'Spain', correct: false }] },
        { q: 'Mixing Spanish and English (parquear, el lonche) is called…', options: [{ text: 'Code-switching / Spanglish', correct: true }, { text: 'Seseo', correct: false }, { text: 'Voseo', correct: false }] },
      ]
    }
  ];

  function isLessonCompleted(lessonId) {
    if (!STATE.completedLessons) STATE.completedLessons = {};
    return !!STATE.completedLessons[lessonId];
  }

  // Lessons filter state
  let lessonsFilter = 'all'; // 'all' | 'sp1' | 'sp2' | 'sp3'
  let lessonsView = 'grid';  // 'grid' | 'list' — persists in localStorage

  // Restore saved view preference on init (if any)
  try {
    const savedView = localStorage.getItem('tertulia_lessons_view');
    if (savedView === 'list' || savedView === 'grid') lessonsView = savedView;
  } catch(e) {}

  function setLessonsFilter(level, btn) {
    lessonsFilter = level;
    if (btn && btn.parentElement) {
      btn.parentElement.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
    }
    renderLessonsList();
  }

  function setLessonsView(view, btn) {
    lessonsView = view;
    try { localStorage.setItem('tertulia_lessons_view', view); } catch(e) {}
    if (btn && btn.parentElement) {
      btn.parentElement.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
    }
    renderLessonsList();
  }

  // Infer a lesson's level from explicit `level` field, or from old-schema fallback
  function getLessonLevel(l) {
    if (l.level) return l.level;
    // Older schema: leave unspecified — treat as Spanish 1-2 general (visible in 'all', 'sp1', 'sp2')
    return null;
  }

  // Lingüística hub — lists only the linguistics lessons as color-accented cards
  const LING_ICONS = {
    'ling-what': '🧠', 'ling-sounds': '🔊', 'ling-morphology': '🧱', 'ling-syntax': '🔗',
    'ling-history': '📜', 'ling-loanwords': '🌍', 'ling-acquisition': '🧒', 'ling-dialects': '🗣️',
    'ling-vowels': '🅰️', 'ling-consonants': '🔠', 'ling-allophony': '🔁', 'ling-spelling': '✍️', 'ling-stress': '📏',
    'ling-spain': '🇪🇸', 'ling-mexcentam': '🌮', 'ling-caribbean': '🏝️', 'ling-andes': '⛰️', 'ling-southerncone': '🧉', 'ling-contact': '🔀'
  };
  // Hub groups — keeps the section organized as it grows. Any ling lesson not
  // listed here drops into a "More" group at the end.
  const LING_GROUPS = [
    { label: 'Foundations', ids: ['ling-what'] },
    { label: 'Phonology — the sound system', ids: ['ling-sounds', 'ling-vowels', 'ling-consonants', 'ling-allophony', 'ling-spelling', 'ling-stress'] },
    { label: 'Words & grammar', ids: ['ling-morphology', 'ling-syntax', 'ling-loanwords'] },
    { label: 'Spanish through history', ids: ['ling-history'] },
    { label: 'Spanish around the world', ids: ['ling-dialects', 'ling-spain', 'ling-mexcentam', 'ling-caribbean', 'ling-andes', 'ling-southerncone', 'ling-contact'] },
    { label: 'Language & the mind', ids: ['ling-acquisition'] }
  ];
  function renderLinguistica() {
    const grid = document.getElementById('linguisticaGrid');
    if (!grid) return;
    const byId = {};
    LESSONS.filter(l => l.level === 'ling').forEach(l => { byId[l.id] = l; });
    const card = l => {
      const done = isLessonCompleted(l.id);
      const ico = LING_ICONS[l.id] || '📐';
      const tag = (l.tag || '').split('·').pop().trim();
      return `
        <a href="#/lesson/${l.id}" class="ling-card ${done ? 'completed' : ''}">
          <span class="lc-done">✓</span>
          <span class="lc-ico">${ico}</span>
          <h3>${l.title}</h3>
          <div class="lc-tag">${tag}</div>
          <p>${l.summary || ''}</p>
        </a>`;
    };
    const placed = {};
    let html = '';
    LING_GROUPS.forEach(g => {
      const cards = g.ids.filter(id => byId[id]).map(id => { placed[id] = true; return card(byId[id]); });
      if (!cards.length) return;
      html += `<div class="ling-group-label">${g.label}</div><div class="ling-grid">${cards.join('')}</div>`;
    });
    // Anything not assigned to a group yet
    const leftovers = LESSONS.filter(l => l.level === 'ling' && !placed[l.id]);
    if (leftovers.length) {
      html += `<div class="ling-group-label">More</div><div class="ling-grid">${leftovers.map(card).join('')}</div>`;
    }
    grid.innerHTML = html;
  }

  function renderLessonsList() {
    const gridContainer = document.getElementById('lessonGrid');
    const listContainer = document.getElementById('lessonList');
    if (!gridContainer) return;

    // Toggle which container is visible
    if (gridContainer) gridContainer.style.display = lessonsView === 'grid' ? '' : 'none';
    if (listContainer) listContainer.style.display = lessonsView === 'list' ? '' : 'none';

    // Sync the view-toggle pills (in case render is called via filter change while view-pills weren't clicked)
    const gridBtn = document.getElementById('lessons-view-grid');
    const listBtn = document.getElementById('lessons-view-list');
    if (gridBtn && listBtn) {
      gridBtn.classList.toggle('active', lessonsView === 'grid');
      listBtn.classList.toggle('active', lessonsView === 'list');
    }

    // Linguistics lessons live in their own #/linguistica hub, not the grammar list
    let lessons = LESSONS.filter(l => l.level !== 'ling');
    if (lessonsFilter !== 'all') {
      lessons = lessons.filter(l => {
        const lv = getLessonLevel(l);
        if (lv) return lv === lessonsFilter;
        // For older lessons without an explicit level: show under sp1 AND sp2 (they're foundation)
        return lessonsFilter === 'sp1' || lessonsFilter === 'sp2';
      });
    }
    if (lessons.length === 0) {
      const empty = `<div class="topic-empty" style="grid-column:1/-1;"><h4>No lessons at that level yet</h4><p>Try a different filter.</p></div>`;
      if (gridContainer) gridContainer.innerHTML = empty;
      if (listContainer) listContainer.innerHTML = empty;
      return;
    }

    if (lessonsView === 'grid') {
      gridContainer.innerHTML = lessons.map(l => {
        const completed = isLessonCompleted(l.id);
        const num = l.num || l.number || '';
        const tag = l.tag || '';
        const lv = getLessonLevel(l);
        const levelBadge = lv === 'sp1' ? '<span class="topic-level sp1">Spanish 1</span>' :
                           lv === 'sp2' ? '<span class="topic-level sp2">Spanish 2</span>' :
                           lv === 'sp3' ? '<span class="topic-level sp3">Spanish 3</span>' : '';
        const metaParts = [];
        if (num) metaParts.push('Lesson ' + num);
        if (tag) metaParts.push(tag);
        return `
          <a href="#/lesson/${l.id}" class="lesson-card ${completed ? 'completed' : ''}">
            <div class="lesson-num">${metaParts.join(' · ')} ${levelBadge}</div>
            <h3>${l.title}</h3>
            <p>${l.summary}</p>
            <div class="lesson-meta">${completed ? 'Completed ✓' : 'up to 15 Lucas'}</div>
          </a>
        `;
      }).join('');
    } else {
      // LIST view — compact rows
      listContainer.innerHTML = lessons.map(l => {
        const completed = isLessonCompleted(l.id);
        const num = l.num || l.number || '';
        const tag = l.tag || '';
        const lv = getLessonLevel(l);
        const levelClass = lv || 'sp1';
        const levelLabel = lv === 'sp1' ? 'Sp 1' : lv === 'sp2' ? 'Sp 2' : lv === 'sp3' ? 'Sp 3' : '';
        return `
          <a href="#/lesson/${l.id}" class="lesson-row ${completed ? 'completed' : ''}">
            <div class="row-num">${num ? num : ''}</div>
            <div class="row-title">${l.title}</div>
            <div class="row-tag">${tag}</div>
            <div class="row-level ${levelClass}">${levelLabel}${completed ? ' · ✓' : ''}</div>
          </a>
        `;
      }).join('');
    }
  }

  let currentLesson = null;
  let currentLessonAnswers = [];

  function buildLessonResources(lessonId) {
    const res = LESSON_RESOURCES[lessonId];
    if (!res) return '';
    const items = [];

    // PDFs first — these are most likely teacher-assigned material
    (res.pdfs || []).forEach(p => {
      items.push({
        icon: '📄',
        kind: 'PDF',
        label: p.label,
        href: p.url,
        external: true
      });
    });

    // Verb drills
    (res.drills || []).forEach(d => {
      items.push({
        icon: '📝',
        kind: 'Drill',
        label: d.label,
        href: '#/verbos',
        onclick: `setDrillFromLesson('${d.tense}', '${d.group}')`
      });
    });

    // Games
    (res.games || []).forEach(gId => {
      const game = GAMES[gId];
      if (!game) return;
      items.push({
        icon: game.icon || '🎮',
        kind: 'Game',
        label: game.title.replace(/<[^>]+>/g, ''),
        href: '#/game/' + gId
      });
    });

    // Vocab decks
    (res.decks || []).forEach(deckId => {
      const deck = decks[deckId];
      if (!deck) return;
      const deckLabels = {
        cotidiano: 'Everyday', familia: 'Family', comida: 'Food', saludos: 'Greetings',
        viajes: 'Travel', deportes: 'Sports', colores: 'Colors', clases: 'Classes',
        salon: 'Classroom', escuela: 'School Life', relaciones: 'Relationships',
        adjetivos: 'Adjectives', adverbios: 'Adverbs', cuerpo: 'Body parts', peru: 'Perú', espana: 'España', argentina: 'Argentina', mexico: 'México', colombia: 'Colombia', diadelosmuertos: 'Día de los Muertos', futbol: 'El fútbol', cumpleanos: '¡Feliz cumpleaños!', emociones: 'Emotions',
        literatura: 'Literature', verbosAr: '-AR verbs', verbosEr: '-ER verbs', verbosIr: '-IR verbs',
        gente: 'People', pronombres: 'Pronouns', teneridioms: 'Tener idioms', numeros: 'Numbers',
        calendario: 'Calendar', tiempo: 'Weather & seasons', aeropuerto: 'Air travel', rutina: 'Daily routine',
        restaurante: 'Restaurant', fiestas: 'Holidays', tecnologia: 'Technology', gustar: 'Gustar verbs',
        preguntas: 'Question words', ropa: 'Clothing', lugares: 'Places in town', casa: 'House & furniture',
        preposiciones: 'Prepositions', profesiones: 'Professions', animales: 'Animals', hora: 'Telling time', mandatos: 'Classroom commands'
      };
      items.push({
        icon: '📚',
        kind: 'Vocab',
        label: (deckLabels[deckId] || deckId) + ' deck',
        href: '#/vocabulario',
        onclick: `loadDeckFromLesson('${deckId}')`
      });
    });

    // External links
    (res.links || []).forEach(l => {
      items.push({
        icon: '🔗',
        kind: 'Link',
        label: l.label,
        href: l.url,
        external: true
      });
    });

    // Reading library cross-references
    (res.readings || []).forEach(rId => {
      const reading = READING_TEXTS && READING_TEXTS.find && READING_TEXTS.find(r => r.id === rId);
      if (!reading) return;
      items.push({
        icon: '📖',
        kind: 'Reading',
        label: reading.title.replace(/<[^>]+>/g, ''),
        href: '#/reading/' + rId
      });
    });

    // Writing topic cross-references
    (res.writingTopics || []).forEach(tId => {
      const topic = WRITING_TOPICS && WRITING_TOPICS.find && WRITING_TOPICS.find(t => t.id === tId);
      if (!topic) return;
      items.push({
        icon: '✍️',
        kind: 'Writing',
        label: topic.title.replace(/<[^>]+>/g, ''),
        href: '#/topic/' + tId
      });
    });

    // Speaking topic cross-references
    (res.speakingTopics || []).forEach(tId => {
      const topic = SPEAKING_TOPICS && SPEAKING_TOPICS.find && SPEAKING_TOPICS.find(t => t.id === tId);
      if (!topic) return;
      items.push({
        icon: '🎤',
        kind: 'Speaking',
        label: topic.title.replace(/<[^>]+>/g, ''),
        href: '#/topic/' + tId
      });
    });

    // Listening clip cross-references (by clip id from any of the three escucha sub-arrays)
    (res.listening || []).forEach(lId => {
      // DICTATION_CLIPS is an object with beginner/intermediate/advanced subarrays;
      // the other two are arrays. Flatten everything to one searchable list.
      const dictArrays = (typeof DICTATION_CLIPS !== 'undefined') ? Object.values(DICTATION_CLIPS).filter(Array.isArray) : [];
      const compArr = (typeof COMPREHENSION_STORIES !== 'undefined' && Array.isArray(COMPREHENSION_STORIES)) ? COMPREHENSION_STORIES : [];
      const fillArr = (typeof FILL_BLANK_CLIPS !== 'undefined' && Array.isArray(FILL_BLANK_CLIPS)) ? FILL_BLANK_CLIPS : [];
      const allClips = [].concat(...dictArrays, compArr, fillArr);
      const found = allClips.find(c => c && c.id === lId);
      if (!found) return;
      items.push({
        icon: '🎧',
        kind: 'Listening',
        label: (found.title || found.text || found.id).replace(/<[^>]+>/g, '').substring(0, 60),
        href: '#/escucha'
      });
    });

    if (items.length === 0) return '';

    const itemsHtml = items.map(it => {
      const target = it.external ? ' target="_blank" rel="noopener"' : '';
      const onclickAttr = it.onclick ? ' onclick="' + it.onclick + '"' : '';
      return `
        <a class="resource-card" href="${it.href}"${target}${onclickAttr}>
          <span class="resource-icon">${it.icon}</span>
          <span class="resource-body">
            <span class="resource-kind">${it.kind}</span>
            <span class="resource-label">${it.label}</span>
          </span>
          <span class="resource-arrow">→</span>
        </a>
      `;
    }).join('');

    return `
      <div class="lesson-resources-card">
        <h4>Related <em>practice</em></h4>
        <div class="resource-list">${itemsHtml}</div>
      </div>
    `;
  }

  // Helpers used by the resource links to deep-link into drills/decks
  function setDrillFromLesson(tense, group) {
    drillTense = tense;
    drillGroup = group;
    // Update pill UI to reflect the selection — after the page renders
    setTimeout(() => {
      // Rebuild the group picker first (it changes content based on tense)
      rebuildGroupPickerForMode();
      // Tense
      document.querySelectorAll('#drill-tense-picker .pill').forEach(p => {
        const onClickAttr = p.getAttribute('onclick') || '';
        p.classList.toggle('active', onClickAttr.indexOf("'" + tense + "'") !== -1);
      });
      // Group
      document.querySelectorAll('#drill-group-picker .pill').forEach(p => {
        const onClickAttr = p.getAttribute('onclick') || '';
        p.classList.toggle('active', onClickAttr.indexOf("'" + group + "'") !== -1);
      });
      newDrill();
    }, 50);
  }

  function loadDeckFromLesson(deckId) {
    setTimeout(() => {
      // Find the deck pill that matches this ID and click it
      const pill = Array.from(document.querySelectorAll('.deck-pick .pill')).find(p => {
        const onClickAttr = p.getAttribute('onclick') || '';
        return onClickAttr.indexOf("'" + deckId + "'") !== -1;
      });
      if (pill) pill.click();
    }, 50);
  }

  function renderLessonDetail(lessonId) {
    const lesson = LESSONS.find(l => l.id === lessonId);
    const container = document.getElementById('lesson-detail-content');
    if (!lesson) {
      container.innerHTML = '<p style="color: var(--ink-soft); padding: 24px 0;">Lesson not found. <a href="#/lecciones">Back to lessons</a></p>';
      return;
    }
    currentLesson = lesson;
    currentLessonAnswers = new Array(lesson.quiz.length).fill(null);

    const sectionsHtml = lesson.sections.map(s => {
      // Special section types render as distinct callout boxes
      if (s.type === 'mistakes') {
        let html = `<div class="lesson-callout mistakes"><div class="callout-label">⚠ Common mistakes — watch out</div>`;
        if (s.heading) html += `<h4 class="callout-heading">${s.heading}</h4>`;
        if (s.body) html += `<div class="callout-body">${s.body}</div>`;
        if (s.items) {
          html += '<ul class="mistakes-list">';
          s.items.forEach(item => {
            html += `<li>${item}</li>`;
          });
          html += '</ul>';
        }
        html += '</div>';
        return html;
      }
      if (s.type === 'tip') {
        let html = `<div class="lesson-callout tip"><div class="callout-label">💡 Real-world note</div>`;
        if (s.heading) html += `<h4 class="callout-heading">${s.heading}</h4>`;
        if (s.body) html += `<div class="callout-body">${s.body}</div>`;
        html += '</div>';
        return html;
      }

      // Default: standard section with optional conjugation table + examples
      let html = `<div class="section"><h3>${s.heading}</h3>`;
      if (s.body) html += `<p>${s.body}</p>`;
      if (s.conjugation) {
        html += '<div class="lesson-conjugation">';
        s.conjugation.forEach(([pronoun, form]) => {
          html += `<div class="conj-row"><span class="pronoun">${pronoun}</span><span class="form">${form}</span></div>`;
        });
        html += '</div>';
      }
      if (s.examples) {
        html += '<div class="lesson-examples">';
        s.examples.forEach(ex => {
          html += `<div class="example"><span class="es">${ex.es}</span><span class="en">— ${ex.en}</span></div>`;
        });
        html += '</div>';
      }
      html += '</div>';
      return html;
    }).join('');

    const resourcesHtml = buildLessonResources(lessonId);

    const quizHtml = lesson.quiz.map((q, i) => `
      <div class="quiz-q" data-qidx="${i}">
        <div class="quiz-q-label">Question ${String(i + 1).padStart(2, '0')}</div>
        <div class="quiz-q-text">${q.q}</div>
        <div class="quiz-options">
          ${q.options.map((opt, oi) => `
            <button class="quiz-opt" data-correct="${opt.correct}" onclick="answerLessonQuiz(this, ${i}, ${oi})">${opt.text}</button>
          `).join('')}
        </div>
      </div>
    `).join('');

    const num = lesson.num || lesson.number || '';
    const tag = lesson.tag || '';
    const lv = getLessonLevel(lesson);
    const levelBadge = lv === 'sp1' ? '<span class="topic-level sp1">Spanish 1</span>' :
                       lv === 'sp2' ? '<span class="topic-level sp2">Spanish 2</span>' :
                       lv === 'sp3' ? '<span class="topic-level sp3">Spanish 3</span>' : '';
    const headerLine = [tag, num ? 'Lesson ' + num : ''].filter(Boolean).join(' · ');

    container.innerHTML = `
      <div class="lesson-detail-card">
        <span class="lesson-tag">${headerLine} ${levelBadge}</span>
        <h2>${lesson.title}</h2>
        ${sectionsHtml}
      </div>
      ${resourcesHtml}
      <div class="reading-quiz-card">
        <h4>Quick <em>check</em></h4>
        <div class="quiz-intro">Get all 3 right to earn 15 Lucas (one-time per lesson)</div>
        ${quizHtml}
        <div id="lesson-completion-banner"></div>
      </div>
    `;
  }

  function answerLessonQuiz(btn, qIdx, oIdx) {
    if (!currentLesson) return;
    if (btn.classList.contains('correct') || btn.classList.contains('wrong')) return;
    if (currentLessonAnswers[qIdx] !== null) return;
    const isCorrect = btn.dataset.correct === 'true';
    const siblings = btn.parentElement.querySelectorAll('.quiz-opt');
    siblings.forEach(s => s.disabled = true);
    currentLessonAnswers[qIdx] = isCorrect;

    if (isCorrect) {
      btn.classList.add('correct');
    } else {
      btn.classList.add('wrong');
      siblings.forEach(s => { if (s.dataset.correct === 'true') s.classList.add('correct'); });
    }

    if (currentLessonAnswers.every(a => a !== null)) {
      const score = currentLessonAnswers.filter(a => a).length;
      const total = currentLessonAnswers.length;
      const banner = document.getElementById('lesson-completion-banner');
      const alreadyCompleted = isLessonCompleted(currentLesson.id);

      if (score === total && !alreadyCompleted) {
        if (!STATE.completedLessons) STATE.completedLessons = {};
        STATE.completedLessons[currentLesson.id] = { score, total, completedAt: new Date().toISOString() };
        awardCoins(15, 'Lesson complete: ' + currentLesson.title.replace(/<[^>]+>/g, ''));
        banner.innerHTML = `
          <div class="reading-completion-banner">
            <span class="coin-icon"></span>
            <div>
              <div style="font-family: 'DM Serif Display', serif; font-size: 22px; font-style: italic; color: var(--ocre);">${score} / ${total}</div>
              <div style="color: rgba(244,237,224,0.8); font-size: 14px; margin-top: 2px;">Earned 15 Lucas — lesson complete!</div>
            </div>
          </div>
        `;
      } else if (score === total) {
        banner.innerHTML = `
          <div class="reading-completion-banner">
            <span class="coin-icon"></span>
            <div>
              <div style="font-family: 'DM Serif Display', serif; font-size: 22px; font-style: italic; color: var(--ocre);">${score} / ${total}</div>
              <div style="color: rgba(244,237,224,0.8); font-size: 14px; margin-top: 2px;">Already completed earlier — great review!</div>
            </div>
          </div>
        `;
      } else {
        banner.innerHTML = `
          <div class="reading-completion-banner" style="background: rgba(196, 61, 42, 0.08); border-color: rgba(196, 61, 42, 0.3);">
            <div>
              <div style="font-family: 'DM Serif Display', serif; font-size: 22px; font-style: italic; color: var(--rojo);">${score} / ${total}</div>
              <div style="color: rgba(244,237,224,0.8); font-size: 14px; margin-top: 2px;">Read again and retry to earn full credit.</div>
            </div>
          </div>
        `;
      }
      saveState();
      renderLessonsList(); // refresh card states
    }
  }

  // ============== FAMILY TREE GAME ==============
  // A fixed 3-generation family. Names are randomized every round, so students must
  // READ the tree rather than memorize it. Questions ask "¿Quién es [relación] de
  // [nombre]?" — including chained relations like "la abuela de la prima de X".
  // Multiple choice (the names shown in the tree). Uses the standard game engine.
  const FAM_NAMES_M = ['Diego','Mateo','Javier','Carlos','Andrés','Pablo','Tomás','Lucas','Manuel','Felipe','Rafael','Hugo','Emilio','Marcos','Nicolás','Álvaro'];
  const FAM_NAMES_F = ['Lucía','Sofía','Elena','Carmen','Marta','Valeria','Paula','Isabel','Daniela','Rosa','Clara','Adriana','Pilar','Natalia','Beatriz','Inés'];

  // Fixed graph. Genders are fixed so relationship words stay determinate; only the
  // names change. Nodes: A,B = grandparents; C,D,E = their children; F = spouse of C;
  // I = spouse of D; G,H = children of C&F; J,K = children of D&I. (E is single.)
  const FAM_GENDER  = { A:'m', B:'f', C:'f', F:'m', D:'m', I:'f', E:'f', G:'m', H:'f', J:'f', K:'m' };
  const FAM_PARENTS = { C:['A','B'], D:['A','B'], E:['A','B'], G:['C','F'], H:['C','F'], J:['D','I'], K:['D','I'] };
  const FAM_SPOUSE  = { A:'B', B:'A', C:'F', F:'C', D:'I', I:'D' };
  const FAM_NODES   = ['A','B','C','D','E','F','I','G','H','J','K'];

  function famParents(x) { return FAM_PARENTS[x] || []; }
  function famChildren(x) { return FAM_NODES.filter(n => famParents(n).includes(x)); }
  function famSiblings(x) {
    const p = famParents(x);
    if (!p.length) return [];
    return FAM_NODES.filter(n => {
      if (n === x) return false;
      const q = famParents(n);
      return q.length && q.every(r => p.includes(r)) && p.every(r => q.includes(r));
    });
  }
  function famUniq(a) { return Array.from(new Set(a)); }
  function famByGender(list, g) { return list.filter(n => FAM_GENDER[n] === g); }

  // Each relation: given node x, return the array of matching nodes. The generator
  // only uses a relation when it yields exactly ONE person in this tree.
  const FAM_RELS = [
    { label: 'la madre',   fn: x => famByGender(famParents(x), 'f') },
    { label: 'el padre',   fn: x => famByGender(famParents(x), 'm') },
    { label: 'el hijo',    fn: x => famByGender(famChildren(x), 'm') },
    { label: 'la hija',    fn: x => famByGender(famChildren(x), 'f') },
    { label: 'el hermano', fn: x => famByGender(famSiblings(x), 'm') },
    { label: 'la hermana', fn: x => famByGender(famSiblings(x), 'f') },
    { label: 'el abuelo',  fn: x => famByGender(famUniq(famParents(x).flatMap(famParents)), 'm') },
    { label: 'la abuela',  fn: x => famByGender(famUniq(famParents(x).flatMap(famParents)), 'f') },
    { label: 'el nieto',   fn: x => famByGender(famUniq(famChildren(x).flatMap(famChildren)), 'm') },
    { label: 'la nieta',   fn: x => famByGender(famUniq(famChildren(x).flatMap(famChildren)), 'f') },
    { label: 'el tío',     fn: x => famByGender(famUniq(famParents(x).flatMap(famSiblings)), 'm') },
    { label: 'la tía',     fn: x => famByGender(famUniq(famParents(x).flatMap(famSiblings)), 'f') },
    { label: 'el sobrino', fn: x => famByGender(famUniq(famSiblings(x).flatMap(famChildren)), 'm') },
    { label: 'la sobrina', fn: x => famByGender(famUniq(famSiblings(x).flatMap(famChildren)), 'f') },
    { label: 'el primo',   fn: x => famByGender(famUniq(famParents(x).flatMap(famSiblings).flatMap(famChildren)), 'm') },
    { label: 'la prima',   fn: x => famByGender(famUniq(famParents(x).flatMap(famSiblings).flatMap(famChildren)), 'f') },
    { label: 'el esposo',  fn: x => (FAM_SPOUSE[x] && FAM_GENDER[FAM_SPOUSE[x]] === 'm') ? [FAM_SPOUSE[x]] : [] },
    { label: 'la esposa',  fn: x => (FAM_SPOUSE[x] && FAM_GENDER[FAM_SPOUSE[x]] === 'f') ? [FAM_SPOUSE[x]] : [] },
    { label: 'el suegro',  fn: x => FAM_SPOUSE[x] ? famByGender(famParents(FAM_SPOUSE[x]), 'm') : [] },
    { label: 'la suegra',  fn: x => FAM_SPOUSE[x] ? famByGender(famParents(FAM_SPOUSE[x]), 'f') : [] },
    { label: 'el yerno',   fn: x => famByGender(famUniq(famByGender(famChildren(x), 'f').map(c => FAM_SPOUSE[c]).filter(Boolean)), 'm') },
    { label: 'la nuera',   fn: x => famByGender(famUniq(famByGender(famChildren(x), 'm').map(c => FAM_SPOUSE[c]).filter(Boolean)), 'f') },
    { label: 'el cuñado',  fn: x => famByGender(famUniq([...famSiblings(x).map(s => FAM_SPOUSE[s]).filter(Boolean), ...(FAM_SPOUSE[x] ? famSiblings(FAM_SPOUSE[x]) : [])]), 'm') },
    { label: 'la cuñada',  fn: x => famByGender(famUniq([...famSiblings(x).map(s => FAM_SPOUSE[s]).filter(Boolean), ...(FAM_SPOUSE[x] ? famSiblings(FAM_SPOUSE[x]) : [])]), 'f') }
  ];

  // Assign a distinct, gender-correct name to each node.
  function famAssignNames() {
    const m = [...FAM_NAMES_M].sort(() => Math.random() - 0.5);
    const f = [...FAM_NAMES_F].sort(() => Math.random() - 0.5);
    const name = {}; let mi = 0, fi = 0;
    FAM_NODES.forEach(n => { name[n] = FAM_GENDER[n] === 'm' ? m[mi++] : f[fi++]; });
    return name;
  }

  // One node box in the SVG tree. `hl` highlights the anchor person of the question.
  function famBox(x, y, label, hl) {
    const w = 120, h = 40;
    return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="6" '
      + 'fill="' + (hl ? 'var(--ocre)' : 'var(--paper)') + '" '
      + 'stroke="' + (hl ? 'var(--rojo)' : 'var(--paper)') + '" stroke-opacity="' + (hl ? 1 : 0.5) + '" stroke-width="' + (hl ? 3 : 1) + '"/>'
      + '<text x="' + (x + w / 2) + '" y="' + (y + h / 2 + 5.5) + '" text-anchor="middle" font-family="Fraunces, serif" font-size="16" font-weight="600" fill="var(--ink)">' + label + '</text>';
  }

  // The fixed-layout family tree as inline SVG. Colors use CSS vars so it adapts to
  // the dark game card (and to themes). `highlight` is the node id to emphasize.
  function famTreeSVG(name, highlight) {
    const L = 'stroke="var(--paper)" stroke-opacity="0.4" stroke-width="1.5"';
    const heart = (x, y) => '<text x="' + x + '" y="' + y + '" text-anchor="middle" font-size="15" fill="var(--ocre)">♥</text>';
    const lines = ''
      // gen-1 couple + drop to the children's bus
      + '<line x1="370" y1="34" x2="390" y2="34" ' + L + '/>' + heart(380, 39)
      + '<line x1="380" y1="54" x2="380" y2="120" ' + L + '/>'
      + '<line x1="170" y1="120" x2="600" y2="120" ' + L + '/>'
      + '<line x1="170" y1="120" x2="170" y2="190" ' + L + '/>'
      + '<line x1="380" y1="120" x2="380" y2="170" ' + L + '/>'
      + '<line x1="600" y1="120" x2="600" y2="190" ' + L + '/>'
      // gen-2 left couple (C–F) + their kids
      + '<line x1="160" y1="190" x2="180" y2="190" ' + L + '/>' + heart(170, 195)
      + '<line x1="170" y1="210" x2="170" y2="290" ' + L + '/>'
      + '<line x1="100" y1="290" x2="240" y2="290" ' + L + '/>'
      + '<line x1="100" y1="290" x2="100" y2="320" ' + L + '/>'
      + '<line x1="240" y1="290" x2="240" y2="320" ' + L + '/>'
      // gen-2 right couple (D–I) + their kids
      + '<line x1="590" y1="190" x2="610" y2="190" ' + L + '/>' + heart(600, 195)
      + '<line x1="600" y1="210" x2="600" y2="290" ' + L + '/>'
      + '<line x1="530" y1="290" x2="670" y2="290" ' + L + '/>'
      + '<line x1="530" y1="290" x2="530" y2="320" ' + L + '/>'
      + '<line x1="670" y1="290" x2="670" y2="320" ' + L + '/>';
    const box = (x, y, id) => famBox(x, y, name[id], id === highlight);
    return '<svg viewBox="0 0 760 380" width="100%" style="max-width:560px;display:block;margin:0 auto;height:auto;" xmlns="http://www.w3.org/2000/svg">'
      + lines
      + box(250, 14, 'A') + box(390, 14, 'B')
      + box(40, 170, 'C') + box(180, 170, 'F') + box(320, 170, 'E') + box(470, 170, 'D') + box(610, 170, 'I')
      + box(40, 320, 'G') + box(180, 320, 'H') + box(470, 320, 'J') + box(610, 320, 'K')
      + '</svg>';
  }

  // Build one round: pick a single- or two-hop relation chain that resolves to
  // exactly one person, render the tree (anchor highlighted), and offer 4 names.
  function generateFamilyTreeRound() {
    const name = famAssignNames();
    const rndNode = () => FAM_NODES[Math.floor(Math.random() * FAM_NODES.length)];
    const rndRel = () => FAM_RELS[Math.floor(Math.random() * FAM_RELS.length)];
    // single hop: "[r] de X" → exactly one person, not X itself
    const trySingle = () => {
      const x = rndNode(), r1 = rndRel();
      const s1 = famUniq(r1.fn(x));
      if (s1.length !== 1 || s1[0] === x) return null;
      return { label: '¿Quién es ' + r1.label + ' de <strong>' + name[x] + '</strong>?', anchor: x, ans: s1[0] };
    };
    // two-hop chain: "[r2] de [r1] de X" — each hop resolves to exactly one person
    const tryChain = () => {
      const x = rndNode(), r1 = rndRel();
      const s1 = famUniq(r1.fn(x));
      if (s1.length !== 1) return null;
      const y = s1[0], r2 = rndRel();
      const s2 = famUniq(r2.fn(y));
      if (s2.length !== 1) return null;
      const z = s2[0];
      if (z === x || z === y) return null; // avoid trivial round-trips
      // "de" + "el …" contracts to "del" (but stays "de" before a proper name)
      const mid = r1.label.startsWith('el ') ? 'del ' + r1.label.slice(3) : 'de ' + r1.label;
      return { label: '¿Quién es ' + r2.label + ' ' + mid + ' de <strong>' + name[x] + '</strong>?', anchor: x, ans: z };
    };
    // ~55% of rounds aim for a chain (with single-hop as fallback), ~45% the reverse.
    const chainFirst = Math.random() < 0.55;
    const first = chainFirst ? tryChain : trySingle;
    const second = chainFirst ? trySingle : tryChain;
    let q = null;
    for (let i = 0; i < 120 && !q; i++) q = first();
    for (let i = 0; i < 120 && !q; i++) q = second();
    if (!q) q = { label: '¿Quién es la madre de <strong>' + name['G'] + '</strong>?', anchor: 'G', ans: 'C' };
    const correctName = name[q.ans];
    const distractors = FAM_NODES.filter(n => n !== q.ans).map(n => name[n]).sort(() => Math.random() - 0.5);
    const choices = famUniq([correctName, ...distractors]).slice(0, 4).sort(() => Math.random() - 0.5);
    return {
      promptLabel: q.label,
      promptDisplay: famTreeSVG(name, q.anchor),
      answer: correctName,
      choices
    };
  }

