// Desc: Constants for events
const mainEvents = [
  // {
  //   index: 0,
  //   eventId: 57,
  //   image:
  //     "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/WW-Miscellaneous/Sakura-Events-Main/ppa-hourglass.webp",
  //   content:
  //     "こんにちは!! Welcome to this fascinating event, where you will be set up to express your opinions on the various controversies around you. In anime, many things occur along with the natural world, which might seem controversial, but you don’t find a way to put your words out. Dive into this competition and get set to indulge with your thoughts and winning prizes if you excel in this competition.",
  //   eventName: "Prove Pursuit Attackers | Hourglass",
  //   Registerurl: "#",
  //   rules: [
  //     "Teams of three or more members should participate in the competition.",
  //     "The topic for each team is assigned randomly at the beginning of each team's turn.",
  //     "Each team should give only the points against the assigned topic and convince the judge.",
  //     "The team has to pass the following argument within 30 seconds after the previous argument.",
  //     "The teams will be given anime or non-anime-related topics based on their choice before the start of the event.",
  //   ],
  // },
  // {
  //   index: 0,
  //   eventId: 57,
  //   image:
  //     "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/WW-Miscellaneous/Sakura-Events-Main/rap-battle-drillnbass.webp",
  //   content:
  //     "Welcome to the Rap Battle, where the mic’s the weapon, and the stage is the battleground! Emcees clash with sharp rhymes, heavy punchlines, and unstoppable flows. It’s all about respect, rhythm, and raw talent. This isn’t just a show—it’s hip-hop in its purest, most explosive form. Be there or miss history!",
  //   eventName: "Rap Battle | Drill N Bass",
  //   Registerurl: "#",
  //   rules: [
  //     "Registration:",
  //     "Participants must register online before the event.",
  //     "Limited spots available; first-come, first-served basis.",
  //     "Format:",
  //     "Three rounds per battle.",
  //     "Random selection of beats; contestants adapt on the spot.",
  //     "Time limit: 2 minutes per round.",
  //     "Judging Criteria:",
  //     "Originality and creativity.",
  //     "Delivery and stage presence.",
  //     "Flow and rhythm.",
  //     "Crowd engagement.",
  //     "Language:",
  //     "English language only.",
  //     "Fair Play:",
  //     "No use of offensive language or hate speech.",
  //     "Respect opponents and judges.",
  //     "Any violation results in immediate disqualification.",
  //     "Attire:",
  //     "Casual, expressive streetwear encouraged.",
  //     "Audience Participation:",
  //     "Enthusiastic crowd participation welcomed.",
  //     "No heckling or disruptive behavior.",
  //     "Judges' Decisions:",
  //     "Judges' decisions are final.",
  //     "Scores based on a point system for each criterion.",
  //     "Technical Setup:",
  //     "Standard microphone setup provided.",
  //   ],
  // },

  {
    index: 1,
    eventId: 58,
    image: "/Images/sdg carnival.png",
    content:
      "Exciting Pictionary Competition with prizes and talkshow, brainstorming Quiz and Guesstimate with exciting prizes followed by a talkshow . Topic for all will be SDG3 , Good Health & Well-Being. ",
    eventName: "SDG Carnival | SDG Campus Club",
    rules: [
      "Proctoring will be done for all competitions.",
      "No cheating or electronic devices are allowed.",
      "Individual participation is only allowed.",
      "There'll be star marked questions in all competitions.",
      "Winners will be decided from star marked questions in case of a draw.",
      "QM's decision will be final.",
    ],
    Registerurl: "#",
  },

  {
    index: 2,
    eventId: 59,
    image: "/Images/Chitravarg.png",
    content:
      "LiteraBuzz presents a thrilling event celebrating Bollywood! Explore timeless Hindi movies, iconic songs, and your favorite stars through engaging riddles and clues. From classic hits to modern blockbusters, there's something for every fan. Test your Bollywood knowledge and relive magical moments from the silver screen in this fun-filled challenge. Don't miss the fun!",
    eventName: "ChitraVarg | LiteraBuzz",
    rules: [
      "The participants are not allowed to use their mobile phones.",
      "Only one submission per participant.",
      "Only individual entries are allowed.",
      "The answers must be legible for the final scoring.",
      "Failure to comply with event regulations will result in disqualification.",
    ],
    Registerurl: "#",
  },
  {
    index: 3,
    eventId: 60,
    image: "/Images/nitr got latent.png",
    content:
      "Get ready to shine at NITR’s Got Latent, the ultimate talent competition of our cultural fest! From singing to comedy, magic to dance, showcase your hidden skills and leave your mark. Hosted by the hilarious *Open Mic Club*, this electrifying event promises laughter, prizes, and unforgettable moments. Don’t miss your chance to be a campus star! 🌟",
    eventName: "NITR's GOT LATENT | Open Mic Club",
    rules: [
      "*Eligibility:* Open to all students of NIT Rourkela and registered students of NITRUTSAV. Solo and group performances are allowed.",
      "*Registration:* Register online or at designated spots with accurate details before the deadline.",
      "*Performance:* Acts must be original, family-friendly, and within the time limit (e.g., 1.5 minutes). Participants bring their own props; basic AV support provided.",
      "*Judging:* Evaluated on originality, creativity, stage presence, and audience engagement by the *Open Mic Club* judges. Decisions are final.",
      "*Prizes:* Winners get exciting prizes; all participants receive certificates.",
    ],
    Registerurl: "#",
  },
  // {
  //   index: 4,
  //   eventId: 61,
  //   image:
  //     "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/WW-Miscellaneous/Sakura-Events-Main/fusion-nu-poster.webp",
  //   content:
  //     "This competition has two exciting levels! In the first, participants upload a PDF showcasing their original content. The top talents will move on to the grand stage for a live performance, where they’ll compete for exclusive goodies awarded to the top 3. To make it even more special, a renowned poet will judge the finalists. ",
  //   eventName: "Poetry Slam | Kalaam ",
  //   rules: [
  //     "There will be 2 rounds. The poem can be in Hindi or English.",
  //     "In the first round, participants need to upload their original content in a PDF/DOC format. The writing should be in the exact dialect of the language (Hindi/English).",
  //     "In the second round, the top performers will be invited to perform on stage on our campus. The number of performers to be shortlisted is at the discretion of the judge strictly.",
  //     "The top 3 performers will be given goodies.",
  //     "Judges' decision shall be final.",
  //     "Plagiarism is strictly prohibited and will result in disqualification.",
  //   ],
  //   Registerurl: "#",
  // },

  {
    index: 5,
    eventId: 62,
    image: "/Images/MONOACT.png",
    content:
      "Enter the spotlight with our Monoact event, where viewers witness solo performers mesmerize audiences with their emotional jutsu, humor, and versatility. From intense monologues to comedic kawaii brilliance, participants can summon their own assistants or bring their own props, immersing themselves in a showcase of individual talent and storytelling prowess guaranteed to leave a lasting impression!",
    eventName: "Mono Act | RITVIC",
    Registerurl: "#",
    rules: [
      "Members per team: 1 performer + 2 assistants (if required)",
      "Props provided: 2 Tables, 2 Chairs, Music system, 2 Stand mic, 2 collar mic and lights.",
      "This is an individual event and will take place in 1 round.",
      "The act can be in Hindi or English or both.",
      "Props and costumes are to be arranged by the participants themselves and will carry no extra weightage.",
      "Obscenity is left to the judge's discretion.",
      "Use of fire, smoke, and water are not allowed.",
      "The participants are expected to bring their music on a pendrive.",
      "Live music is not allowed. All required instruments must be brought by the participants.",
      "Time Constraints:",
      "Performance time: 5 minutes + Stage set-up time: 2 minutes.",
      "5 marks will be deducted after every additional minute. After the 8th minute, the participant will be asked to clear the stage with an overall penalty of 15 marks.",
      "The time extended due to applause or interruption will not be added to the act timing.",
      "Criteria of judgement:",
      "Script, Direction, and Originality: 30 Marks",
      "Acting: 35 Marks",
      "Music and lights: 15 Marks",
      "Miscellaneous: 20 Marks",
    ],
  },

  {
    index: 6,
    eventId: 63,
    image: "/Images/india quiz.png",
    content:
      "The India Quiz, hosted by Quizmaster Samanway Banerjee, immerses participants in the rich cultural and historical landscape of India. Questions span food, music, film, politics, art, and architecture, offering an in-depth exploration of India’s diverse heritage",
    eventName: "India Quiz | Inquizzitive",
    Registerurl: "#",
    rules: [
      "Participants can participate in teams of 3 or less.",
      "Cross-institute teams are allowed.",
      "There will be two rounds in the quiz.",
      "First round (PRELIMS) will be written and the questions will appear on the screen.",
      "Second round (FINALS) will be an interactive round with top 8 teams from the 1st round battling it out for the podium.",
      "Decision of the QM is final and binding.",
    ],
  },

  {
    index: 7,
    eventId: 64,
    image: "/Images/mela quiz.png",
    content:
      "The MELAS Quiz, hosted by Quizmaster Berty Ashley, combines knowledge from Music, Entertainment, Literature, Arts, and Sports. It challenges participants to showcase their expertise in pop culture, blending creativity and broad cultural knowledge in an engaging format.",
    eventName: "Melas Quiz | Inquizzitive",
    Registerurl: "#",
    rules: [
      "Participants can participate in teams of 3 or less.",
      "Cross-institute teams are allowed.",
      "There will be two rounds in the quiz.",
      "First round (PRELIMS) will be written and the questions will appear on the screen.",
      "Second round (FINALS) will be an interactive round with top 8 teams from the 1st round battling it out for the podium.",
      "Decision of the QM is final and binding.",
    ],
  },

  {
    index: 8,
    eventId: 65,
    image: "/Images/general quiz.png",
    content:
      "The General Quiz, hosted by Quizmaster Berty Ashley, covers a wide range of topics, challenging participants with questions from science, history, geography, current affairs, pop culture, and more. It’s a comprehensive test of general knowledge, encouraging quick thinking across various fields.",
    eventName: "General Quiz | Inquizzitive",
    Registerurl: "#",
    rules: [
      "Participants can participate in teams of 3 or less.",
      "Cross-institute teams are allowed.",
      "There will be two rounds in the quiz.",
      "First round (PRELIMS) will be written and the questions will appear on the screen.",
      "Second round (FINALS) will be an interactive round with the top 8 teams from the 1st round battling it out for the podium.",
      "Decision of the QM is final and binding.",
    ],
  },

  {
    index: 9,
    eventId: 66,
    image: "/Images/Rap Battle.png",
    content:
      "Rap battle is an event to find, recognize and promote the rap artists and the rap culture amongst the youth. It will serve as a platform for artists to express and flaunt their writing and rapping skills",
    eventName: "NU Rap Battle | Drill N Bass",
    Registerurl: "#",
    rules: [
      "Qualifiers:",
      "Each rapper will be allowed a maximum slot of 3 minutes to perform either an original or a cover, where originals will be given more preference.",
      "Those performing a cover should bring their own beats.",
      "Rappers are also allowed to play an instrument during their performance. One must bring their own instrument.",
      "Eliminator:",
      "Rappers will be set up into brackets randomly and will be pit against competitors for 5-minute rounds.",
      "Each rapper will be given 5 words and 10 minutes to write an original verse.",
      "If agreed to by both the rappers, the bracket will be turned into a battle rap.",
      "All scoring decisions will be made by the judges, and their decision will be deemed final.",
    ],
  },

  {
    index: 10,
    eventId: 67,
    image: "/Images/beatbox.png",
    content:
      "Unleash the power of rhythm and creativity at the Beatbox Battle! Watch skilled vocalists transform their voices into dynamic beats, basslines, and sound effects in thrilling one-on-one showdowns. This electrifying event brings together innovation, passion, and the heart of hip-hop culture. Join us for an unforgettable celebration of sound and artistry!",
    eventName: "BeatBox Battle | Drill N Bass",
    Registerurl: "#",
    rules: [],
  },

  {
    index: 11,
    eventId: 68,
    image: "/Images/Artboard 1.png",
    content:
      "This competition has two exciting levels! In the first, participants upload a PDF showcasing their original content. The top talents will move on to the grand stage for a live performance, where they’ll compete for exclusive goodies awarded to the top 3. To make it even more special, a renowned poet will judge the finalists. ",
    eventName: "Expecto Poetronum | Kalaam ",
    rules: [
      "There will be 2 rounds. The poem can be in Hindi or English.",
      "In the first round, participants need to upload their original content in a PDF/DOC format. The writing should be in the exact dialect of the language (Hindi/English).",
      "In the second round, the top performers will be invited to perform on stage on our campus. The number of performers to be shortlisted is at the discretion of the judge strictly.",
      "The top 3 performers will be given goodies.",
      "Judges' decision shall be final.",
      "Plagiarism is strictly prohibited and will result in disqualification.",
    ],
    Registerurl: "#",
  },

  // {
  //   index: 9,
  //   eventId: 66,
  //   image:
  //     "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/WW-Miscellaneous/Sakura-Events-Main/vivid-thirdeye.webp",
  //   content:
  //     "Unleash the power of rhythm and creativity at the Beatbox Battle! Watch skilled vocalists transform their voices into dynamic beats, basslines, and sound effects in thrilling one-on-one showdowns. This electrifying event brings together innovation, passion, and the heart of hip-hop culture. Join us for an unforgettable celebration of sound and artistry!",
  //   eventName: "BeatBox Battle | Drill N Bass",
  //   Registerurl: "#",
  //   rules: [],
  // },

  // {
  //   index: 1,
  //   eventId: 58,
  //   image:
  //     "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/WW-Miscellaneous/Sakura-Events-Main/inq-anime-quiz.webp",
  //   content:
  //     "Embark on an exhilarating journey through the captivating world of anime with our in-house Anime Quiz! Dive into the enchanting realms of Japanese animation as we explore a kaleidoscope of genres, from action-packed shonen anime to heartwarming romance. Get ready to test your expertise on classics like DBZ and Naruto and the latest releases like Jujutsu Kaisen and Attack on Titan, as well as delve into the intriguing history and evolution of anime.",
  //   eventName: "Anime Quiz | Inquizzitive",
  //   Registerurl: "#",
  //   rules: [
  //     "Participants can participate in teams of 3 or less.",
  //     "Cross-institute teams are allowed.",
  //     "There will be two rounds in the quiz.",
  //     "First round (PRELIMS) will be written and the questions will appear on the screen.",
  //     "Second round (FINALS) will be an interactive round with top 8 teams from the 1st round battling it out for the podium.",
  //     "Decision of the QM is final and binding.",
  //   ],
  // },
  // {
  //   index: 2,
  //   eventId: 59,
  //   image:
  //     "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/WW-Miscellaneous/Sakura-Sponsors/india-meets-bharat.webp",
  //   content:
  //     "A captivating Indian Quest orchestrated by the renowned quizmaster Piyush Kedia, presents to you an opportunity to traverse the realms of food, music, film, history, politics, art and architecture from the rich culture of India. Immerse yourself in a spellbinding adventure that transcends the boundaries of imagination, exploring the multifaceted layers of India's captivating heritage!",
  //   eventName: "India Quiz | Inquizzitive",
  //   Registerurl: "#",
  //   rules: [
  //     "Participants can participate in teams of 3 or less.",
  //     "Cross-institute teams are allowed.",
  //     "There will be two rounds in the quiz.",
  //     "First round (PRELIMS) will be written and the questions will appear on the screen.",
  //     "Second round (FINALS) will be an interactive round with top 8 teams from the 1st round battling it out for the podium.",
  //     "Decision of the QM is final and binding.",
  //   ],
  // },
  // {
  //   index: 3,
  //   eventId: 60,
  //   image:
  //     "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/WW-Miscellaneous/Sakura-Events-Main/inq-melas-quiz.webp",
  //   content:
  //     "MELAS = Music, Entertainment, Literature, Arts & Sports. In this quiz hosted by the esteemed QM Aabhaas Dasgupta, participants have to bring in their Pop-Culture IQ, summon their Otaku Wisdom and fuse it with their Ninja Skills to tackle the challenges. Brace yourselves for an epic test of expertise and let those neurons be fired away.",
  //   eventName: "Melas Quiz | Inquizzitive",
  //   Registerurl: "#",
  //   rules: [
  //     "Participants can participate in teams of 3 or less.",
  //     "Cross-institute teams are allowed.",
  //     "There will be two rounds in the quiz.",
  //     "First round (PRELIMS) will be written and the questions will appear on the screen.",
  //     "Second round (FINALS) will be an interactive round with top 8 teams from the 1st round battling it out for the podium.",
  //     "Decision of the QM is final and binding.",
  //   ],
  // },
  // {
  //   index: 4,
  //   eventId: 61,
  //   image:
  //     "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/WW-Miscellaneous/Sakura-Events-Main/ss-kalaam.webp",
  //   content:
  //     "Embark on a poetic quest open to all that unfolds in 2 levels – an online screening round and the final round within our anime-centric campus. The podium awaits the top 3 performers, showering them with goodies, all to be judged by a distinguished poet serving as our honored guest.",
  //   eventName: "Sakura Symphony | Kalaam",
  //   Registerurl: "#",
  //   rules: [
  //     "There will be 2 rounds. The poem can be in Hindi or English or Urdu.",
  //     "In the first round, the participants need to upload their original content in a pdf/doc format. The writing should be in the exact dialect of the language (Hindi/English). They also need to upload a video of them reciting their same original content within 5 minutes at max. In the second round, the top performers will be invited to perform on stage in our campus. The number of performers to be shortlisted is at the discretion of our judges strictly.",
  //     "The top 3 performers will be given goodies. The final decision shall be strictly based upon the judges and shall be abiding.",
  //     "Plagiarism is strictly prohibited and will result in disqualification.",
  //   ],
  // },
  // {
  //   index: 5,
  //   eventId: 62,
  //   image:
  //     "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/WW-Miscellaneous/Sakura-Events-Main/mission-sdg.webp",
  //   content:
  //     "Unleash the ultimate otaku mastery in an event consisting of three epic rounds – where knowledge meets fun in the Ninja way! From mind-bending anime trivia that'll test your knowledge to navigating through Jenga's Shinobi precision, and facing off in a surprising board game! Join us, fellow shinobis, and elevate your anime spirit to legendary heights!",
  //   eventName: "Mission 2030 | arampus Club",
  //   Registerurl: "#",
  //   rules: [
  //     "Round 1: OTAKU TRIVIA",
  //     "Team Formation: Participants must pair up with a partner to form a team. Solo participants are also encouraged to come; they will be paired up on-spot.",
  //     "Trivia Format: The first round will take place on the Kahoot platform. Questions will be related to Anime, tailored for Otakus. The top 8 scoring teams will qualify for Round 2.",
  //     "Round 2: FRIENDLY FIRE",
  //     "Qualification: The 8 qualifying teams will proceed to Round 2. Each team will participate in a Jenga battle.",
  //     "Jenga Battle: Teammates of each team will play against each other in a Jenga match. The winner from each pair will move on to the final round.",
  //     "Round 3: FINAL SHOWDOWN",
  //     "Qualification: The 4 winners will advance to the final round.",
  //     "SDG Board Game: Participants will engage in a board game centered around Sustainable Development Goals (SDGs). The game will include cards containing questions related to SDGs. The first participant to successfully finish the board game will be declared the overall winner.",
  //     "Winner Declaration: The first participant to finish the board game will be declared the Winner of the event, and subsequently, the second and third participants to finish the game will be declared Runners-up and Second Runners-up.",
  //     "General Rules:",
  //     "Fair Play: Participants must adhere to fair play and sportsmanship throughout the event. Any form of cheating or unfair practices will result in disqualification.",
  //     "Event Organizers: Event organizers reserve the right to make any necessary decisions regarding rules and disputes.",
  //     "Equipment: Participants must bring their own mobile devices for the Kahoot trivia round. Jenga sets and the SDG board game will be provided by the organizers.",
  //     "Prizes: Prizes will be awarded to the winning participant, Runners-up participant, and Second Runners-up participant. By following these rules, the event aims to create a fun and challenging experience for participants while promoting knowledge about Anime and SDGs.",
  //   ],
  // },
  // {
  //   index: 6,
  //   eventId: 63,
  //   image:
  //     "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/WW-Miscellaneous/Sakura-Events-Main/vonu-heartbeats.webp",
  //   content:
  //     "Summoning all vocal maestros and anime music enthusiasts to participate in Voice of NU, presented by Heartbeats. Flaunt your musical prowess in two rounds, with the first round being confined to three minutes. Singers can harmonize in any Indian language, with a strict no-karaoke policy. Dive into an afternoon brimming with harmonious renditions of melodic brilliance!",
  //   eventName: "Voice of NU | Heartbeats",
  //   Registerurl: "#",
  //   rules: [
  //     "The competition will be conducted in 2 rounds:",
  //     "Round 1 Singers Choice: This is the first round of the competition where the singer/participant can sing a song of his own choice. The best ones will qualify for the second round.",
  //     "Round 2 Final Showdown: In this round, the singer will be given 2 songs of choice, and the singer has to pick one song amongst the given ones and perform impromptu. In this round, we will judge the singer’s ability to grasp and perform on the spot.",
  //     "The singers can perform any Indian language. Winners will be decided on a point-based system in all the rounds. The competition will be conducted in an auditorium. The singers will be given tanpura/scale to perform. No karaoke/background music allowed. If the singer wants to accompany himself with an instrument he can do so, but keep in mind the marking will be done only for singing not for the instrumental ability.",
  //     "Round 1 and 2 will be conducted on the same day.",
  //     "The decision of the organizers and judges is final and binding on all participants.",
  //     "The singers must not exceed the time limit, that is 3 minutes in the Round 1. Violation of any of the above-mentioned rules will lead to disqualification of the contestant.",
  //   ],
  // },
  // {
  //   index: 7,
  //   eventId: 64,
  //   image:
  //     "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/WW-Miscellaneous/Sakura-Events-Main/lal-clarion.webp",
  //   content:
  //     "Embark on a literary odyssey with Lit-A-Lympics: an exhilarating quiz game that takes you on a journey through the vibrant world of manga! Summon your inner shinobi and unlock the battle of wits. Unleash your anime prowess from crafting enchanting tales of Spirited Away to exploring the mysteries of Death Note. Join us for an epic collision of knowledge and quick thinking!",
  //   eventName: "Lit-A-lympics | Clarion",
  //   Registerurl: "#",
  //   rules: [
  //     "Internet surfing is not allowed.",
  //     "Answers must be submitted within 60 seconds after the game concludes.",
  //     "Participants are not allowed to exit ongoing rounds.",
  //     "The decisions and qualifications listed by the event coordinators are final.",
  //   ],
  // },
  // {
  //   index: 8,
  //   eventId: 65,
  //   image:
  //     "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/WW-Miscellaneous/Sakura-Events-Main/rap-battle-drillnbass.webp",
  //   content:
  //     "Rap battle is an event to uncover, acknowledge, and celebrate the prowess of rap artists and the vibrant rap culture within the anime community. This event stands as a battleground for talented artists to showcase and flex their lyrical and rapping abilities, providing a dynamic platform for self-expression and skillful prowess!",
  //   eventName: "Rap Battle | Drill N Bass",
  //   Registerurl: "#",
  //   rules: [
  //     "Registration:",
  //     "Participants must register online before the event.",
  //     "Limited spots available; first-come, first-served basis.",
  //     "Format:",
  //     "Three rounds per battle.",
  //     "Random selection of beats; contestants adapt on the spot.",
  //     "Time limit: 2 minutes per round.",
  //     "Judging Criteria:",
  //     "Originality and creativity.",
  //     "Delivery and stage presence.",
  //     "Flow and rhythm.",
  //     "Crowd engagement.",
  //     "Language:",
  //     "English language only.",
  //     "Fair Play:",
  //     "No use of offensive language or hate speech.",
  //     "Respect opponents and judges.",
  //     "Any violation results in immediate disqualification.",
  //     "Attire:",
  //     "Casual, expressive streetwear encouraged.",
  //     "Audience Participation:",
  //     "Enthusiastic crowd participation welcomed.",
  //     "No heckling or disruptive behavior.",
  //     "Judges' Decisions:",
  //     "Judges' decisions are final.",
  //     "Scores based on a point system for each criterion.",
  //     "Technical Setup:",
  //     "Standard microphone setup provided.",
  //   ],
  // },
  // {
  //   index: 9,
  //   eventId: 66,
  //   image:
  //     "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/WW-Miscellaneous/Sakura-Events-Main/reel-e-stick-ritvic-insta.webp",
  //   content:
  //     "Hey anime-warriors! It's time to unleash your artistic ninjutsu in Ritvic's Reel-E-Stick competition! Channel your inner shinobi and let your creativity blossom in cinematic form, captivating audiences far and wide. Don your thinking headbands and compete to craft stunning reels that will transport viewers to anime realms!",
  //   eventName: "Reel-E-Stick | RITVIC",
  //   Registerurl: "#",
  //   rules: [
  //     "The reel should be 30-90 seconds long.",
  //     "The reel should be made in the campus of NIT Rourkela, after coming to the campus.",
  //     "Reel can be either in portrait mode or landscape mode.",
  //     "Stock images or videos are prohibited.",
  //     "It can be made in solo, duo, or a group of 4. Any group containing members greater than 4 will be disqualified.",
  //     "The reel can be cinematic, but brownie points will be rewarded for plot-driven video.",
  //     "The act can be musical, silent, or can contain some dialogues.",
  //     "No cuss words will be entertained and any usage will result in disqualification.",
  //     "Video can't be uploaded until verified by us or until the competition is over.",
  //   ],
  // },
  // {
  //   index: 10,
  //   eventId: 67,
  //   image:
  //     "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/WW-Miscellaneous/Sakura-Events-Main/mono-act-ritvic.webp",
  //   content:
  //     "Enter the spotlight with our Monoact event, where viewers witness solo performers mesmerize audiences with their emotional jutsu, humor, and versatility. From intense monologues to comedic kawaii brilliance, participants can summon their own assistants or bring their own props, immersing themselves in a showcase of individual talent and storytelling prowess guaranteed to leave a lasting impression!",
  //   eventName: "Mono Act | RITVIC",
  //   Registerurl: "#",
  //   rules: [
  //     "Members per team: 1 performer + 2 assistants (if required)",
  //     "Props provided: 2 Tables, 2 Chairs, Music system, 2 Stand mic, 2 collar mic and lights.",
  //     "This is an individual event and will take place in 1 round.",
  //     "The act can be in Hindi or English or both.",
  //     "Props and costumes are to be arranged by the participants themselves and will carry no extra weightage.",
  //     "Obscenity is left to the judge's discretion.",
  //     "Use of fire, smoke, and water are not allowed.",
  //     "The participants are expected to bring their music on a pendrive.",
  //     "Live music is not allowed. All required instruments must be brought by the participants.",
  //     "Time Constraints:",
  //     "Performance time: 5 minutes + Stage set-up time: 2 minutes.",
  //     "5 marks will be deducted after every additional minute. After the 8th minute, the participant will be asked to clear the stage with an overall penalty of 15 marks.",
  //     "The time extended due to applause or interruption will not be added to the act timing.",
  //     "Criteria of judgement:",
  //     "Script, Direction, and Originality: 30 Marks",
  //     "Acting: 35 Marks",
  //     "Music and lights: 15 Marks",
  //     "Miscellaneous: 20 Marks",
  //   ],
  // },
  // {
  //   index: 11,
  //   eventId: 68,
  //   image:
  //     "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/WW-Miscellaneous/Sakura-Events-Main/kaarvaan-kalaam.webp",
  //   content:
  //     "Embark on an anime-infused journey into the captivating realm of poetry at Kaarvaan 3.0, brought to you by Kalaam. Gear up for mesmerizing recitations in Hindi, Urdu, and English, exploring captivating themes for the otakus! With Kalaam members as your hosts and a guest poet igniting the stage, immerse yourself for an evening brimming poetic eloquence and visual delights.",
  //   eventName: "Kaarvaan 3.0 | Kalaam",
  //   Registerurl: "#",
  //   rules: [
  //     "Hosting of the entire event will be taken care of by Kalaam members along with the background music.",
  //     "We'll have a professed poet as a guest to beautify the event.",
  //     "Approximately 8 members of Kalaam will be performing in the event and the total duration of the event will be 2 hours.",
  //     "We'll be running a slideshow throughout our event on the projector screen in BBA, which will be in line with our performing themes.",
  //   ],
  // },
  // {
  //   index: 12,
  //   eventId: 76,
  //   image:
  //     "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/WW-Miscellaneous/Sakura-Events-Main/ragnarok-euphony.webp",
  //   content: "Description Revealing Soon...",
  //   eventName: "Ragnarok- The battle of bands | Euphony",
  //   Registerurl: "#",
  //   rules: [
  //     "All bands have to perform a minimum of 4 songs. No vulgarity is allowed. Only English and Hindi songs are allowed. Regional languages are not allowed.",
  //     "10 minutes will be allotted for soundcheck, following which, a maximum of 30 minutes will be given for the performance. If bands exceed the time limit of 10+30, they shall be penalized.",
  //     "All bands must bring their own instruments. A drum kit will be provided. Bands will have to bring their own double bass pedal if they wish to use one.",
  //     "Points will be awarded for Musical performance and skill, stage presence and showmanship, and creativity and originality.",
  //   ],
  // },
  // {
  //   index: 13,
  //   eventId: 77,
  //   image:
  //     "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/WW-Miscellaneous/Sakura-Events-Main/generalquiz-inq.webp",
  //   content:
  //     "The mother of all quiz formats, the one where each and every corner of the wide world is in the syllabus. In this quiz hosted by the renowned quizmaster Aabhaas Dasgupta, you will encounter a mixed bag of questions from all sorts of topics from anything and anywhere in the world, and even more.",
  //   eventName: "General Quiz | Inquizzitive",
  //   Registerurl: "#",
  //   rules: [
  //     "Participants can participate in teams of 3 or less.",
  //     "Cross-institute teams are allowed.",
  //     "There will be two rounds in the quiz.",
  //     "First round (PRELIMS) will be written and the questions will appear on the screen.",
  //     "Second round (FINALS) will be an interactive round with the top 8 teams from the 1st round battling it out for the podium.",
  //     "Decision of the QM is final and binding.",
  //   ],
  // },
  // {
  //   index: 14,
  //   eventId: 78,
  //   image:
  //     "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/WW-Miscellaneous/Sakura-Events-Main/laughter-challenge.webp",
  //   content:
  //     "Step into the spotlight and bring on the laughs in our uproarious stand-up comedy competition, showcase your comedic genius, wit, and storytelling skills in front of a lively audience. Compete among budding comedians to deliver the most side-splitting performances and be crowned as the ultimate stand-up comedy champion!",
  //   eventName: "Laughter challenge | Open mic Club",
  //   Registerurl: "#",
  //   rules: [
  //     "This is an individual event.",
  //     "The event will be conducted in one round.",
  //     "Participants need to perform in Hindi or English or both.",
  //     "Abusive words are not allowed.",
  //     "Time Limit: 5 Minutes",
  //     "Judging Criteria:",
  //     "Content (Premises, Punchlines, etc.): 40 points",
  //     "Delivery and Stage Presence: 30 points",
  //     "Audience Engagement and Overall Impact: 30 points",
  //   ],
  // },
  // {
  //   index: 15,
  //   eventId: 119,
  //   image:
  //     "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/WW-Miscellaneous/Sakura-Events-Main/doreman.webp",
  //   content:
  //     "In round 1 the participants will embark on a quest to discover hidden cards featuring iconic Doraemon gadgets scattered throughout the academic block. Triumphantly progressing teams will find themselves at the threshold of the mystery round, where the chance to embody Doraemon awaits, allowing them to rediscover the magic of their childhood dream and save the world.",
  //   eventName: "Doraemon : Save the World | Rotaract",
  //   Registerurl: "#",
  //   rules: [
  //     "Registration will be done through the designated Google form.",
  //     "Each team will consist of 3 members.",
  //     "Participants will be given 50 minutes to search for the hidden gadgets after which they will report to Sac.",
  //     "The overall score for each team will be calculated based on the points indicated on the cards they found.",
  //   ],
  // },
];

//flagships
const flagships = [
  //   {
  //     index: 0,
  //     eventId: 69,
  //     image:
  //       "/Images/sdg carnival.png",
  //     content:
  //       "Day 2: 9am-12 Exciting Pictionary Competition with prizes and talkshow. Day 2) 9am -12 . Brainstorming Quiz and Guesstimate with exciting prizes followed by a talkshow . Topic for all will be SDG3 , Good Health & Well-Being. ",
  //     eventName: "SDG Carnival | SDG Campus Club",
  //     rules: [
  //   "Proctoring will be done for all competitions.",
  //   "No cheating or electronic devices are allowed.",
  //   "Individual participation is only allowed.",
  //   "There'll be star marked questions in all competitions.",
  //   "Winners will be decided from star marked questions in case of a draw.",
  //   "QM's decision will be final."
  // ],
  //     Registerurl: "#",
  //   },
  //   {
  //     index: 0,
  //     eventId: 69,
  //     image:
  //       "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/WW-Miscellaneous/Sakura-Events-Main/fusion-nu-poster.webp",
  //     content:
  //       "This competition has two exciting levels! In the first, participants upload a PDF showcasing their original content. The top talents will move on to the grand stage for a live performance, where they’ll compete for exclusive goodies awarded to the top 3. To make it even more special, a renowned poet will judge the finalists. ",
  //     eventName: "Poetry Slam | Kalaam - Poetry Club",
  //     rules: [
  //   "There will be 2 rounds. The poem can be in Hindi or English.",
  //   "In the first round, participants need to upload their original content in a PDF/DOC format. The writing should be in the exact dialect of the language (Hindi/English).",
  //   "In the second round, the top performers will be invited to perform on stage on our campus. The number of performers to be shortlisted is at the discretion of the judge strictly.",
  //   "The top 3 performers will be given goodies.",
  //   "Judges' decision shall be final.",
  //   "Plagiarism is strictly prohibited and will result in disqualification."
  // ],
  //     Registerurl: "#",
  //   },
  {
    index: 0,
    eventId: 69,
    image: "/Images/Battle of Bands.png",
    content:
      "Get ready for an electrifying showdown at the Battle of Bands! Talented groups take the stage, competing with powerful performances and captivating original tunes. From rock to blues, each band brings its unique style, fighting for the top spot. Don’t miss this epic night of music, energy, and raw talent!",
    eventName: "Battle of Bands | Team NU",
    Registerurl: "#",
  },
  {
    index: 1,
    eventId: 70,
    image: "/Images/nukkad.png",
    content:
      "Lights. Emotions. Action! Step into the vibrant world of Nukkad Natak, where the streets come alive with stories that matter. This competition is a platform to showcase your creativity, passion, and social awareness. From thought-provoking dialogues to impactful expressions, this is your chance to make your voice heard and your story known!",
    eventName: "NU'KKAD | RITVIC",
    Registerurl: "#",
    rules: [
      "Teams should keep the time limit in mind. Exceeding the time limit will lead to disqualification.",
      "A warning bell will be rung after 30 minutes.",
      "Mics, microphones, or speakers will not be allowed during the play, even if the teams bring their own.",
      "Use of any abusive or obscene language is prohibited.",
      "Usage of props is allowed. Teams have to bring their own props.",
      "Use of any inflammable or hazardous elements is strictly prohibited.",
      "The decision of the judges will be final and binding.",
    ],
  },

  {
    index: 2,
    eventId: 71,
    image: "/Images/FOOT.png",
    content:
      "Footloose – Dance Your Heart Out! Step into the spotlight at Footloose, Nitrutsav's electrifying dance competition! Show off your talent in solos, duos, or crews and battle for ultimate glory. With mesmerizing moves and high-energy performances, this is your chance to shine and leave the crowd in awe. Let your rhythm speak louder than words—join us and own the stage!",
    eventName: "Footloose | Synergy",
    Registerurl: "#",
    rules: ["Please Refer to the spreadsheet"],
  },

  {
    index: 3,
    eventId: 72,
    image: "/Images/BREAK.png",
    content:
      "Get ready for Breakbeats, the underground street dance battle at NIT Rourkela's cultural fest Nitrutsav! This year we are featuring two categories: 7 to Smoke (Open Style) and 3 vs 3 (All Style). It’s all about raw street vibes, real skills, and dope energy with styles like Hip-Hop, Popping, Breaking, Krumping, Waacking, Lite-feet, and Afro. Bring the heat, let's make it legendary!",
    eventName: "Breakbeats | The Mavericks",
    Registerurl: "#",
    rules: [
      {
        category: "7 to Smoke (Open Style)",
        details: [
          {
            "i) Category Overview": [
              "Open to all street dance styles (Hip-Hop, Popping, Locking, Breaking, Waacking, House, Afro, and Krump).",
              "Dancers have to show their freestyle skills to random music mixed by the DJ.",
            ],
          },
          {
            "ii) Prelims Round": [
              "Each participant performs a freestyle round.",
              "Judges assess based on foundation, techniques, and musicality.",
              "Top 8 participants with the highest scores proceed to the battle round.",
            ],
          },
          {
            "iii) Battle Format": [
              "8 Battlers are ranked sequentially (1 to 8) based on prelim scores.",
              "Battles will be face-to-face, both have to dance on the same track played by the DJ.",
              "Winner of each battle earns *1 smoke*; loser steps out, and the next battler steps in to battle with the winner.",
            ],
          },
          {
            "iv) Tie Situations": [
              "If the judge declares a tie, both battlers receive *0 smokes*, and both leave.",
              "The next two participants step into the circle for the next battle.",
            ],
          },
          {
            "v) Winning Criteria": [
              "The first battler to earn *7 smokes* is crowned the champion.",
              "The battles continue until one dancer achieves the *7 smokes*.",
            ],
          },
        ],
      },
      {
        category: "3 vs 3 (All Style)",
        details: [
          {
            "i) Category Overview": [
              "Each team consists of 3 participants.",
              "During registration, teams must provide their crew name and the name of their city/state.",
            ],
          },
        ],
      },
    ],
  },
  {
    index: 4,
    eventId: 73,
    image: "/Images/fashion.png",
    content:
      "Get ready to witness the essence of style at Fashionista, a spectacular fashion show celebrating creativity and elegance! Watch models grace the runway in stunning designs, from contemporary trends to timeless classics. This event showcases the artistry of fashion, bringing together beauty, innovation, and glamour. Join us for an unforgettable evening of couture and sophistication!",
    eventName: "Fashionista | Fusion",
    rules: [
      "The participants are not allowed to use their mobile phones.",
      "Only one submission per participant.",
      "Only individual entries are allowed.",
      "The answers must be legible for the final scoring.",
      "Failure to comply with event regulations will result in disqualification.",
    ],
    Registerurl: "#",
  },
  {
    index: 5,
    eventId: 74,
    image: "/Images/perfectly paired 1.png",
    content:
      "Step into a world of love and elegance at Perfectly Paired, a unique fashion show for couples! Witness duos grace the ramp, flaunting coordinated outfits that exude style and chemistry. From timeless classics to modern trends, this event celebrates fashion and togetherness. Join us for an enchanting evening of romance and sophistication!",
    eventName: "Perfectly Paired | Team NU",
    rules: [
      "Performance time limit is of 3 minutes max. Straight 10 marks will be deducted for exceeding the time limit.",
      "Only 1 minute extra time will be given for mic and instrument setup.",
      "The performance will be judged on its uniqueness, interaction with the audience, presentation, overall impact, and basic technicalities (like tempo, scale, etc.).",
      "Top three winners will be chosen at the end based on their performances.",
      "In case of a tie in marks, a tie-breaker round will be held where performers have to perform on the spot.",
      "A performer using cuss or vulgar words will be eliminated.",
      "Uniqueness will be of utmost priority and carries the maximum score.",
    ],
    Registerurl: "#",
  },
  //     {
  //       index: 5,
  //       eventId: 74,
  //       image:
  //         "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/WW-Miscellaneous/Sakura-Events-Main/footloose.webp",
  //       content:
  //         "Clownfish Tank challenges participants to turn the bizarre into brilliance! Judges provide a wildly absurd idea, and it’s up to participants to pitch it as essential and convincing. With limited preparation time and on-the-spot questions, this event is a hilarious test of creativity, humor, and adaptability. Embrace the ridiculous and wow the judges with your imaginative flair!",
  //       eventName: "Clownfish Tank | Hourglass",
  //       rules: [
  //         "Each participant will receive a unique, outlandish idea from the judges.",
  //     "Participants will have 1 minute to prepare their pitch based on the given idea and 2 minutes to deliver their pitch, making the absurd idea sound essential with creativity and humor.",
  //     "Judges may interrupt with questions during the pitch, pausing the timer while participants respond.",
  //     "Pitches must remain respectful, avoiding offensive language or themes, and ideas should be original and spontaneous, building solely on the provided concept.",
  //     "Participants can compete individually or in teams of up to three.",
  //     "Judging criteria include creativity, humor, and how convincingly the idea is presented."
  //       ],
  //       Registerurl: "#",
  //     },
  //     {
  //       index: 6,
  //       eventId: 75,
  //       image:
  //         "Images/nitr got latent.png",
  //       content:
  //         "Get ready to shine at NITR’s Got Latent, the ultimate talent competition of our cultural fest! From singing to comedy, magic to dance, showcase your hidden skills and leave your mark. Hosted by the hilarious *Open Mic Club*, this electrifying event promises laughter, prizes, and unforgettable moments. Don’t miss your chance to be a campus star! 🌟",
  //       eventName: "NITR's GOT LATENT | Open Mic Club",
  //       rules: [
  //         "*Eligibility:* Open to all students of NIT Rourkela and registered students of NITRUTSAV. Solo and group performances are allowed.",
  //         "*Registration:* Register online or at designated spots with accurate details before the deadline.",
  //         "*Performance:* Acts must be original, family-friendly, and within the time limit (e.g., 1.5 minutes). Participants bring their own props; basic AV support provided.",
  //         "*Judging:* Evaluated on originality, creativity, stage presence, and audience engagement by the *Open Mic Club* judges. Decisions are final.",
  //         "*Prizes:* Winners get exciting prizes; all participants receive certificates."
  //       ],
  //       Registerurl: "#",
  //     },
  //     {
  //       index: 7,
  //       eventId: 89,
  //       image:
  //         "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/WW-Miscellaneous/Sakura-Events-Main/vivid-thirdeye.webp",
  //       content:
  //         "Embark on AXIOM's thrilling treasure hunt! Solve cryptic clues, uncover QR codes, and race through checkpoints in a battle of wit and speed. Compete solo or in teams of three to claim glory. Sharpen your mind, follo+w the clues, and conquer the challenge. The treasure awaits—let the adventure begin! 🌟🔍",
  //       eventName: "Treasure Hunt | AXIOM",
  //       Registerurl: "#",
  //       rules: [
  //     "**Participation**: Compete individually or in teams of up to three members. On-spot registration is mandatory.",
  //     "**Storyline**: Read and understand the storyline; it forms the foundation for solving clues.",
  //     "**Navigation**: Follow the map and clues provided. Scan QR codes at each checkpoint to progress.",
  //     "**Tools**: Bring your own pen and paper for note-taking and solving clues.",
  //     "**Fair Play**: Seeking assistance from volunteers or external sources is prohibited and results in disqualification.",
  //     "**Cheating**: Collaboration between teams or using external help leads to immediate disqualification.",
  //     "**Timing**: The event is a race against time; the shortest completion time determines the winner.",
  //     "**Disqualification**: Violations of any rules, including seeking unauthorized help or cheating, will result in disqualification."
  //   ]
  //     },
  //     {
  //       index: 8,
  //       eventId: 89,
  //       image:
  //         "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/WW-Miscellaneous/Sakura-Events-Main/vivid-thirdeye.webp",
  //       content:
  //         "Get ready to get chills down your spine, where the flicker of candles meets the dark unknown, and the ordinary twists into the grotesque and macabre. Buckle your belts for the journey through spine-chilling legends, haunting secrets, and stories that linger longer after the final word is spoken. Each tale will take you deeper into the shadows, the recesses of your mind, where fear and fascination intertwine. Whether you believe in the supernatural or not, tonight, the veil between the real and eerie wanes. So, settle in-- but beware: the stories might just follow you home. Let the nightmares begin.",
  //       eventName: "Fear mania | Odia Sahitya Samaj",
  //       Registerurl: "#",
  //       rules: [
  //     "The time limit shall not exceed 6 minutes.",
  //     "Performance of the participants will be judged by the audience, on a scale of five.",
  //     "Languages allowed: English, Hindi, and Odia.",
  //     "The story should be bereft of any form of plagiarism, i.e., the story should not have any fragments of any popular horror or non-fiction story.",
  //     "There should not be any redundancy in the performance of the participants."
  //   ]
  //     },
  //     {
  //       index: 9,
  //       eventId: 89,
  //       image:
  //         "http://sacnitrkl.blr1.cdn.digitaloceanspaces.com/WW-Miscellaneous/Sakura-Events-Main/vivid-thirdeye.webp",
  //       content:
  //         "Rap battle is an event to find, recognize and promote the rap artists and the rap culture amongst the youth. It will serve as a platform for artists to express and flaunt their writing and rapping skills",
  //       eventName: "NU Rap Battle | Drill N Bass",
  //       Registerurl: "#",
  //       rules: [
  //     "Qualifiers:",
  //     "Each rapper will be allowed a maximum slot of 3 minutes to perform either an original or a cover, where originals will be given more preference.",
  //     "Those performing a cover should bring their own beats.",
  //     "Rappers are also allowed to play an instrument during their performance. One must bring their own instrument.",
  //     "Eliminator:",
  //     "Rappers will be set up into brackets randomly and will be pit against competitors for 5-minute rounds.",
  //     "Each rapper will be given 5 words and 10 minutes to write an original verse.",
  //     "If agreed to by both the rappers, the bracket will be turned into a battle rap.",
  //     "All scoring decisions will be made by the judges, and their decision will be deemed final."
  //   ]
  //     },
  //     {
  //       index: 10,
  //       eventId: 89,
  //       image:
  //         "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/WW-Miscellaneous/Sakura-Events-Main/vivid-thirdeye.webp",
  //       content:
  //         "Experience the art of photography at VIVID, a stunning exhibition by Third Eye. Showcasing captivating photos from the collective talent of Third Eye members, the event features beautifully lit displays and an enchanting ambiance. Explore unique perspectives, admire the creativity behind each photograph, and share your thoughts in our dedicated feedback section. Celebrate the essence of storytelling through the lens!",
  //       eventName: "VIVID | Third Eye",
  //       Registerurl: "#",
  //       rules: [
  //     "A dedicated display board will be allocated to each participant, enabling them to showcase their photographs as part of the VIVID exhibition. This initiative ensures that everyone has an equal opportunity to contribute and actively participate in the event.",
  //   ]
  //     },
  //     {
  //       index: 11,
  //       eventId: 89,
  //       image:
  //         "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/WW-Miscellaneous/Sakura-Events-Main/vivid-thirdeye.webp",
  //       content:
  //         "Footloose – Dance Your Heart Out! Step into the spotlight at Footloose, Nitrutsav's electrifying dance competition! Show off your talent in solos, duos, or crews and battle for ultimate glory. With mesmerizing moves and high-energy performances, this is your chance to shine and leave the crowd in awe. Let your rhythm speak louder than words—join us and own the stage!",
  //       eventName: "Footloose | Synergy",
  //       Registerurl: "#",
  //       rules: [
  //     "",
  //   ]
  //     },
  //     {
  //       index: 12,
  //       eventId: 89,
  //       image:
  //         "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/WW-Miscellaneous/Sakura-Events-Main/vivid-thirdeye.webp",
  //       content:
  //         "ExpA parade throughout the campus with a huge pride flag held at the front. Students hold pride flags and rainbow-painted placards related to pride. Banners for the parade, SAC decoration according to the queer theme, and queer-themed selfie points. All the students throughout the  campus can participate. Post parade and pre parade face painting and painted handprint on a canvas with everyone’s signature. Queer musical session post parade in collaboration with another club in SAC.An empowering and informative workshop that aims to create a safe and inclusive environment for all students, especially incoming freshers, in collaboration with Rainbow Dot, the LGBTQ+ club, and the Institute Counseling Services. This unique event will address the pressing issues of campus safety, and the anxieties of entering college life, and equip attendees with knowledge on how to seek help when needed erience the art of photography at VIVID, a stunning exhibition by Third Eye. Showcasing captivating photos from the collective talent of Third Eye members, the event features beautifully lit displays and an enchanting ambiance. Explore unique perspectives, admire the creativity behind each photograph, and share your thoughts in our dedicated feedback section. Celebrate the essence of storytelling through the lens!",
  //       eventName: "Pride March | Rainbow Dot",
  //       Registerurl: "#",
  //       rules: [
  //     "General decorum and discipline is needed to be maintained.",
  //   ]
  //     },
  //     {
  //       index: 13,
  //       eventId: 89,
  //       image:
  //         "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/WW-Miscellaneous/Sakura-Events-Main/vivid-thirdeye.webp",
  //       content:
  //         "Dive into the dynamic world of Nukkad Natak, where stories ignite change. Showcase your creativity and passion through thought-provoking dialogues and impactful performances. Assemble your team to inspire, engage, and shed light on social issues using drama, humor, or raw emotion. Let the streets echo with your voice—captivate, inspire, and make a difference!",
  //       eventName: "NU'KKAD | RITVIC",
  //       Registerurl: "#",
  //       rules: [
  // "Teams should keep the time limit in mind. Exceeding the time limit will lead to disqualification.",
  //     "A warning bell will be rung after 30 minutes.",
  //     "Mics, microphones, or speakers will not be allowed during the play, even if the teams bring their own.",
  //     "Use of any abusive or obscene language is prohibited.",
  //     "Usage of props is allowed. Teams have to bring their own props.",
  //     "Use of any inflammable or hazardous elements is strictly prohibited.",
  //     "The decision of the judges will be final and binding."  ]
  //     },
  //     {
  //       index: 14,
  //       eventId: 89,
  //       image:
  //         "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/WW-Miscellaneous/Sakura-Events-Main/vivid-thirdeye.webp",
  //       content:
  //         "The India Quiz, hosted by Quizmaster Samanway Banerjee, immerses participants in the rich cultural and historical landscape of India. Questions span food, music, film, politics, art, and architecture, offering an in-depth exploration of India’s diverse heritage!",
  //       eventName: "India Quiz | Inquizzitive",
  //       Registerurl: "#",
  //       rules: [
  // "Participants can participate in teams of 3 or less.",
  //     "Cross-institute teams are allowed.",
  //     "There will be two rounds in the quiz.",
  //     "First round (PRELIMS) will be written, and the questions will appear on the screen.",
  //     "Second round (FINALS) will be an interactive round with the top 8 teams from the 1st round battling it out for the podium.",
  //     "The decision of the QM is final and binding." ]
  //     },
  //     {
  //       index: 15,
  //       eventId: 89,
  //       image:
  //         "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/WW-Miscellaneous/Sakura-Events-Main/vivid-thirdeye.webp",
  //       content:
  //         "The General Quiz, hosted by Quizmaster Berty Ashley, covers a wide range of topics, challenging participants with questions from science, history, geography, current affairs, pop culture, and more. It’s a comprehensive test of general knowledge, encouraging quick thinking across various fields.",
  //       eventName: "General Quiz | Inquizzitive",
  //       Registerurl: "#",
  //       rules: [
  // "Participants can participate in teams of 3 or less.",
  //     "Cross-institute teams are allowed.",
  //     "There will be two rounds in the quiz.",
  //     "First round (PRELIMS) will be written, and the questions will appear on the screen.",
  //     "Second round (FINALS) will be an interactive round with the top 8 teams from the 1st round battling it out for the podium.",
  //     "The decision of the QM is final and binding." ]
  //     },
  //     {
  //       index: 16,
  //       eventId: 89,
  //       image:
  //         "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/WW-Miscellaneous/Sakura-Events-Main/vivid-thirdeye.webp",
  //       content:
  //         "The MELAS Quiz, hosted by Quizmaster Berty Ashley, combines knowledge from Music, Entertainment, Literature, Arts, and Sports. It challenges participants to showcase their expertise in pop culture, blending creativity and broad cultural knowledge in an engaging format.",
  //       eventName: "MELAS Quiz | Inquizzitive",
  //       Registerurl: "#",
  //       rules: [
  // "Participants can participate in teams of 3 or less.",
  //     "Cross-institute teams are allowed.",
  //     "There will be two rounds in the quiz.",
  //     "First round (PRELIMS) will be written, and the questions will appear on the screen.",
  //     "Second round (FINALS) will be an interactive round with the top 8 teams from the 1st round battling it out for the podium.",
  //     "The decision of the QM is final and binding." ]
  //     },
  //     {
  //       index: 17,
  //       eventId: 89,
  //       image:
  //         "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/WW-Miscellaneous/Sakura-Events-Main/vivid-thirdeye.webp",
  //       content:
  //         "The fifth edition of the National Institute of Technology, Rourkela International Model United Nations (NITR IMUN) will convene on 7-9 February 2025, bringing together future policymakers in a meticulously organized, two-day event to discuss and debate critical global issues.",
  //       eventName: "NITRIMUN | Cognizen",
  //       Registerurl: "#",
  //       rules: [
  //     "Rulebook and background guides will be uploaded on 1 January after the selection of executive board members for all committees.",
  //   ]
  //     },
  //     {
  //       index: 18,
  //       eventId: 89,
  //       image:
  //         "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/WW-Miscellaneous/Sakura-Events-Main/vivid-thirdeye.webp",
  //       content:
  //         "Get ready for Breakbeats, the underground street dance battle at NIT Rourkela's cultural fest Nitrutsav! This year we are featuring two categories: 7 to Smoke (Open Style) and 3 vs 3 (All Style). It’s all about raw street vibes, real skills, and dope energy with styles like Hip-Hop, Popping, Breaking, Krumping, Waacking, Lite-feet, and Afro. Bring the heat, let's make it legendary!",
  //       eventName: "Breakbeats | The Mavericks",
  //       Registerurl: "#",
  //       rules: [
  //         {
  //           category: "7 to Smoke (Open Style)",
  //           details: [
  //             {
  //               "i) Category Overview": [
  //                 "Open to all street dance styles (Hip-Hop, Popping, Locking, Breaking, Waacking, House, Afro, and Krump).",
  //                 "Dancers have to show their freestyle skills to random music mixed by the DJ."
  //               ]
  //             },
  //             {
  //               "ii) Prelims Round": [
  //                 "Each participant performs a freestyle round.",
  //                 "Judges assess based on foundation, techniques, and musicality.",
  //                 "Top 8 participants with the highest scores proceed to the battle round."
  //               ]
  //             },
  //             {
  //               "iii) Battle Format": [
  //                 "8 Battlers are ranked sequentially (1 to 8) based on prelim scores.",
  //                 "Battles will be face-to-face, both have to dance on the same track played by the DJ.",
  //                 "Winner of each battle earns *1 smoke*; loser steps out, and the next battler steps in to battle with the winner."
  //               ]
  //             },
  //             {
  //               "iv) Tie Situations": [
  //                 "If the judge declares a tie, both battlers receive *0 smokes*, and both leave.",
  //                 "The next two participants step into the circle for the next battle."
  //               ]
  //             },
  //             {
  //               "v) Winning Criteria": [
  //                 "The first battler to earn *7 smokes* is crowned the champion.",
  //                 "The battles continue until one dancer achieves the *7 smokes*."
  //               ]
  //             }
  //           ]
  //         },
  //         {
  //           category: "3 vs 3 (All Style)",
  //           details: [
  //             {
  //               "i) Category Overview": [
  //                 "Each team consists of 3 participants.",
  //                 "During registration, teams must provide their crew name and the name of their city/state."
  //               ]
  //             }
  //           ]
  //         }
  //       ]
  //     },

  //     {
  //       index: ,
  //       eventId: 89,
  //       image:
  //         "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/WW-Miscellaneous/Sakura-Events-Main/vivid-thirdeye.webp",
  //       content:
  //         "The Cursed Legacy: Embark on a spellbinding adventure in The Cursed Legacy, a treasure hunt by AXIOM, NIT Rourkela. Solve enchanted riddles, decode magical clues, and race through checkpoints to uncover a hidden treasure. With every step, the curse tightens—only the cleverest and quickest will prevail. Dare to claim the legacy and rewrite the tale of magic and mystery.",
  //       eventName: "The Cursed Legacy (Treasure Hunt) | AXIOM",
  //       Registerurl: "#",
  //       rules: [
  //         "Participation is open to individuals or teams of up to 3 members, with on-spot registration available.",
  //     "Participants must arrive on time to complete the registration process.",
  //     "Reading and understanding the storyline is essential as it provides the foundation for solving clues.",
  //     "Follow the map and clues provided, and scan QR codes at each checkpoint to proceed.",
  //     "Participants should bring their own pen and, if preferred, paper for solving clues or taking notes.",
  //     "Seeking help from volunteers, collaborating with other teams, or using external assistance is strictly prohibited.",
  //     "The winner is determined by the shortest time taken to complete the treasure hunt.",
  //     "Any violation, including seeking assistance, collaboration, or cheating, will result in immediate disqualification."

  //       ]
  //     },
];

//workshops
const workshops = [
  {
    index: 0,
    eventId: 90,
    image: "/Images/akriti clay.png",
    content:
      "Discover the joy of creating at AKRITI's Pottery Clay Workshop during NITRUTSAV! Under the guidance of an expert, explore the art of molding clay into personalized designs. Connect with peers, de-stress, and experience the soothing magic of working with clay in a lively and welcoming setting. Take home your handcrafted masterpiece as a keepsake of this artistic journey—because every creation tells a story!",
    eventName: "Clay Workshop | AKRITI",
    rules: [
      "Participants have to bring their water storage container (e.g., water bottle).",

      "Only the first 60 registrations are allowed to participate.",
      "Everyone will get the pottery wheel only for 25 minutes.",
      "Whatever participants make will be returned approximately 8 hours later after the material dries.",
    ],
    Registerurl: "#",
  },

  {
    index: 1,
    eventId: 91,
    image: "/Images/WorkShop.png",
    content:
      "We are thrilled to announce a Hip-Hop Freestyle Dance Workshop with Pradeep, India’s First 4x International Champion and Red Bull DYS World Finalist. Coming all the way from Bangalore, He will share his years of knowledge and experience to elevate your freestyle skills and passion for hip-hop dance.",
    eventName: "Dance Worshop | Team NU",
    rules: [
      "Participants have to bring their water storage container (e.g., water bottle).",

      "Only the first 60 registrations are allowed to participate.",
      "Everyone will get the pottery wheel only for 25 minutes.",
      "Whatever participants make will be returned approximately 8 hours later after the material dries.",
    ],
    Registerurl: "#",
  },
  {
    index: 2,
    eventId: 92,
    image: "/Images/VIVID.jpg",
    content:
      "Experience the art of photography at VIVID, a stunning exhibition by Third Eye. Showcasing captivating photos from the collective talent of Third Eye members, the event features beautifully lit displays and an enchanting ambiance. Explore unique perspectives, admire the creativity behind each photograph, and share your thoughts in our dedicated feedback section. Celebrate the essence of storytelling through the lens!",
    eventName: "VIVID | Third Eye",
    rules: [
      "A dedicated display board will be allocated to each participant, enabling them to showcase their photographs as part of the VIVID exhibition. This initiative ensures that everyone has an equal opportunity to contribute and actively participate in the event.",
    ],
    Registerurl: "#",
  },
  {
    index: 3,
    eventId: 93,
    image: "/Images/Lumiere.png",
    content:
      "Lumiere celebrates the Cinematics Club's finest creations, featuring aftermovies of Roots, Innovision, Cosmopolitan, and Vriddhi, capturing the essence of NITR’s iconic events. Alongside, a selection of thought-provoking short films showcases the club’s storytelling brilliance. It’s a vibrant journey through the unforgettable moments and narratives that defined our year, brought to life on screen.",
    eventName: "Lumiere | Cinematics",
    rules: [
      "Aftermovies of Iconic Events – Experience the highlights of Roots, Innovision, Cosmopolitan, and Vriddhi through stunning visuals that capture their energy and spirit.",

      "Short Film Showcase – Watch thought-provoking and creatively crafted short films exploring diverse themes and storytelling styles.",

      "Behind-the-Scenes Insights – Get a glimpse into the filmmaking process, from conceptualization to execution.",

      "Creative Achievements – Celebrate the Cinematics Club’s dedication to storytelling and visual artistry through their year-long projects.",
    ],
    Registerurl: "#",
  },

  {
    index: 4,
    eventId: 94,
    image: "/Images/Palette (1).png",
    content:
      "Palette Fusion is a three-day celebration of creativity and innovation! Participate in Art Date by painting portraits face-to-face, unleash your imagination with finger dab painting in Finger Dab, and craft wonders from waste in Trash Treasure. Whether you're a pro or a beginner, Palette Fusion offers a fun-filled artistic experience for everyone. Join us!",
    eventName: "Palette Fusion| Chitraang",
    rules: [],
    Registerurl: "#",
  },
  // {
  //   index: 2,
  //   eventId: 90,
  //   image:
  //     "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/WW-Miscellaneous/Sakura-Events-Main/pottery-workshop-akriti.webp",
  //   content:
  //     "This year's NITRUTSAV offers a Clay Workshop, where participants will learn the therapeutic and expressive nature of shaping and molding clay into unique pieces. The workshop provides a relaxed environment for students to socialize and unleash their imagination.",
  //   eventName: "Pottery Clay | AKRITI",
  //   rules: [
  //     "Participants have to bring their water storage container (e.g., water bottle).",
  //     "Gloves will be provided.",
  //     "Only the first 60 registrations are allowed to participate.",
  //     "Everyone will get the pottery wheel only for 20 minutes.",
  //     "Whatever participants make will be returned approximately 12 hours later after the material dries.",
  //   ],
  //   Registerurl: "#",
  // },
  // {
  //   index: 3,
  //   eventId: 91,
  //   image:
  //     "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/WW-Miscellaneous/Sakura-Events-Main/jeddy-mf.webp",
  //   content:
  //     "Welcome to the illest Hip Hop Dance Workshop, where we're breakin' it down with the underground vibes! Get ready to dive deep into the heart and soul of hip hop as a dope underground artist spills the real tea on the history and foundation of the game. We're talkin' bounce, rock, skate, rolls, and grooves that'll make your body move like it's straight outta the streets. It's not just a dance, it's a culture - where every step tells a story and every beat echoes the streets. So lace up your kicks, join the cipher, and let's vibe together in this workshop!",
  //   eventName: "Dance Workshop | NU Team",
  //   Registerurl: "#",
  // },
];
//Exhibitions
const guestLectures = [
  {
    index: 0,
    eventId: 93,
    image:
      "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/WW-Miscellaneous/Sakura-Events-Main/abhilash.webp",
    content:
      "Step into a journey of laughter and storytelling as Pantomime presents Abhilash Thapliyal, a seasoned actor, radio jockey and host. Widely recognized for his contributions, including an iconic role of 'SK Sir' in TVF's \"Aspirants\", Roxy in Faadu and the antagonist in Blurr, Abhilash's brilliance and stage charisma shines through. Join us for an evening of entertainment and insight on 11th of February as Pantomime brings to you the wit and wisdom of the very versatile Abhilash Thapliyal in a laughter-packed event.",
    eventName: "Abhilash Thapliyal | Pantomime",
    Registerurl: "#",
  },
  {
    index: 1,
    eventId: 94,
    image:
      "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/WW-Miscellaneous/Sakura-Events-Main/anushka.webp",
    content:
      "Hailing from a small town in Uttar Pradesh to being a prominent figure in the 'City of Dreams', Pantomime brings to you, Anushka Kaushik, popularly known as Vidhi Gupta from the web series Crash Course, Suruchi Dwivedi from Ghar Vaapasi, and many more characters that have a special place in our hearts. Join us for a ride full of laughter, fun and interaction with the one only Anushka Kaushik. Catch her on 10th February at 3:30pm for all the gup-shup and a wholesome evening filled with Anushka's enticing chirpiness, vibe and energy!",
    eventName: "Anushka Kaushik | Pantomime",
    Registerurl: "#",
  },
  {
    index: 2,
    eventId: 95,
    image:
      "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/WW-Miscellaneous/Sakura-Events-Main/medha.webp",
    content:
      "Medha Deshmukh Bhaskaran is a microbiologist and has written articles on various subjects for leading newspapers in India and the Gulf. She has authored various books, namely, Challenging Destiny, Prescription of Life, Frontiers- a relentless battle between Aurangzeb and Shivaji, Life and death of Sambhaji, and her latest work, Up against darkness. Her book, Challenging destiny has achieved a tag of national bestseller and was nominated in two categories in Raymond Crossword Book Awards, 2017. Due to demand, most of her books have been translated to Marathi and Hindi, along with audiobooks. She has authored some of the most famous works on Shivaji, Sambhaji, and their lives. Join us on 10th February for an enchanting session presented to you by Clarion at 12 noon at PPA.",
    eventName: "Medha Bhaskaran | Clarion",
    Registerurl: "#",
  },
  {
    index: 3,
    eventId: 96,
    image:
      "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/WW-Miscellaneous/Sakura-Events-Main/ilena.webp",
    content:
      "Renowned first Odissi dancer of foreign descent, Padma Shri Ileana Citaristi, celebrated for her exceptional contributions to Indian classical dance, will grace the inaugural ceremony of Nitrutsav 2024 on 9th February. With a career spanning decades, Citaristi has garnered international acclaim, seamlessly blending tradition with commitment in her performances. Don't miss this opportunity to witness the captivating artistry of a Padma Shri awardee at Nitrutsav 2024 brought to you by Nrityunjay.",
    eventName: "Padma Shri Ileana Citaristi | Nrityunjay",
    Registerurl: "#",
  },
  {
    index: 4,
    eventId: 97,
    image:
      "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/WW-Miscellaneous/Sakura-Events-Main/piyush.webp",
    content:
      "Piyush Sharma, an alumnus of IIT Bombay with a degree in Civil Engineering, transitioned from structural blueprints to the art of humour post-graduation. His comedic craftsmanship, in stark contrast to his engineering roots, leaves no one unscathed. Witness Piyush's unbridled wit at Nitrutsav 2024, brought to you by Open Mic Club on 10th February at 4:30pm, BBA as he takes the stage to construct a laughter-filled evening that defies the norms of civility and engineering precision.",
    eventName: "Piyush Sharma | OMC",
    Registerurl: "#",
  },
  {
    index: 5,
    eventId: 98,
    image:
      "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/WW-Miscellaneous/Sakura-Events-Main/vivek.webp",
    content:
      "Vivek Desai, a modern mentalist, magician, and illusionist, demonstrates mastery of the mystical arts. Renowned for his captivating skills, Desai is set to enchant the audience at Nitrutsav 2024 on 10th February at 1:30pm. Prepare to be spellbound as he seamlessly combines modern mystique with unparalleled showmanship in a performance that transcends conventional magical realms",
    eventName: "Vivek Desai | NU Team",
    Registerurl: "#",
  },
  {
    index: 6,
    eventId: 99,
    image:
      "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/WW-Miscellaneous/Sakura-Events-Main/anurag-guest.webp",
    content:
      "Anurag Halder, an acclaimed vocalist is set to grace the first pronight of Nitrutsav 2024 with an electrifying live performance, promising an exhilarating experience. With his dynamic stage presence, let's witness an enchanting evening of soul-stirring performance. Join us on the 9th of February at DTS from 8pm onwards.",
    eventName: "Anurag Halder | NU Team",
    Registerurl: "#",
  },
  {
    index: 7,
    eventId: 101,
    image:
      "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/WW-Miscellaneous/Sakura-Events-Main/nidhi.webp",
    content:
      'Nidhi Narwal, a renowned poet, storyteller, and performer is known as the "Jazbaati Ladki" to her fans as she stands out for her simplicity, evident in her craft. Hailing from Haryana, Nidhi\'s dreams have fueled her journey. Catch her on 11th February for an unforgettable experience of heartfelt expressions brought to you by Kalaam.',
    eventName: "Nidhi Narwal | Kalaam",
    Registerurl: "#",
  },
  {
    index: 8,
    eventId: 102,
    image:
      "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/WW-Miscellaneous/Sakura-Events-Main/abhishekmishra.webp",
    content:
      "Abhishek Mishra, the distinguished Executive Editor and Faculty at Drishti IAS is renowned as an interviewer for UPSC exam preparation. Embrace this opportunity to enhance your UPSC journey with the guidance of an esteemed mentor, ensuring a comprehensive and rewarding learning experience. Join him on 10th February at 10am, BBA brought to you by Aspirants. Don't miss the opportunity to attend and grab complimentary study materials from Drishti IAS.",
    eventName: "Abhishek Mishra | Aspirants",
    Registerurl: "#",
  },
  {
    index: 9,
    eventId: 103,
    image:
      "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/WW-Miscellaneous/Sakura-Events-Main/prakruti.webp",
    content:
      "Prakruti Mishra, a distinguished Indian actress renowned for her contributions to Odia film industry and Hindi television, has also been a participant of MTV Ace of Space Season 2. She is all set to grace the event of Fashionista, organised by Fusion, as an esteemed judge. Her presence will add a touch of glamour and expertise, underscoring the event's commitment to recognizing and celebrating exceptional styling and fashion",
    eventName: "Prakruti Mishra | Fusion",
    Registerurl: "#",
  },
];
//Fun Events
const funevents = [
  // {
  //   index: 0,
  //   eventId: 79,
  //   image:
  //     "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/WW-Miscellaneous/Sakura-Events-Main/hearttoheart.webp",
  //   content:
  //     "Engage in a thrilling 2-round event! The 1st round, a luck-infused game with strategic twists, pits 5-6 teams against each other. Only one advances, eliminating rivals. Round 2 is an anime aficionado's dream, testing participants' knowledge of anime characters. Individuals or teams of 3 can partake, aiming for victory through luck, strategy, and anime expertise. Are you ready to conquer both chance and anime mastery?",
  //   eventName: "FateScript-The Deathnote | Heart to Heart",
  //   Registerurl: "#",
  //   rules: [
  //     "The objective is to survive till the end by avoiding your number written on the Death Note as compared to others.",
  //     "Group Formation:",
  //     "Form groups of 1-3 participants.",
  //     "Groups will be seated in a row during the challenge.",
  //     "Numbering:",
  //     "Each participant will be assigned a unique number within the number of participants. (For example, if there are 12 participants, each participant will get a number between 1-12). This number should be kept secret from other participants.",
  //     "Death Note Allocation:",
  //     "Every participant will be provided with a Death Note.",
  //     "Writing Process:",
  //     "Participants will write a single number in the Death Note, representing the number of another participant within the range of participants in all groups. Only the person whose number is being written will be eliminated.",
  //     "Elimination:",
  //     "After each round, the participant with the highest frequency of their number being written will be eliminated. In case of a tie, a tiebreaker challenge may be introduced. Challenge depends upon organizing club.",
  //     "Repeat:",
  //     "The process continues until there are two participants remaining, one of them proceeding to the last round based upon a luck game.",
  //     "Important Rules:",
  //     "Confidentiality: Do not reveal your assigned number to other participants.",
  //     "Fair Play: Be strategic but maintain sportsmanship. Any form of cheating or sabotage will lead to disqualification.",
  //     "Writing Restrictions: Write only one number per round. Use the Death Note provided.",
  //     "Round Time Limit: Rounds will have a specified time limit; ensure your decision is made within this timeframe.",
  //   ],
  // },
  // {
  //   index: 1,
  //   eventId: 80,
  //   image:
  //     "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/WW-Miscellaneous/Sakura-Events-Main/wmw-hourglass.webp",
  //   content:
  //     "こんにちは ! Welcome to this fun “Watch Me Whisper'' event, where your understanding with your friend, lip-reading skills, and command of trending anime are tested. Thousands of anime episodes you watched, tens of characters you encountered, and many more lines read in anime assist you in this fun event. Prepare to test your lip-reading skills with \"Watch Me Whisper\"! It is a pair's game with a time limit!",
  //   eventName: "Watch Me Wishper | Hourglass",
  //   Registerurl: "#",
  //   rules: [
  //     "This game is to be played in a team of 2.",
  //     "One of the team members will pick up a card with the name of an anime character or a dialogue written on it.",
  //     "The other team member will be wearing headphones with loud music so that he/she cannot hear what the teammate is saying.",
  //     "The team member who picks up the card has to then recite or say what the card has on it.",
  //     "The player with the headphones has to guess the word or dialogue by his/her lip movements. Once he/she guesses right, the team moves on to the next card.",
  //     "Each card has some associated points, depending on the difficulty level.",
  //     "This is a time-based event where each pair will be given 1 minute, and the team with the maximum number of points wins.",
  //     "The teams will be given the choice of anime or non-anime-related dialogues before starting their event.",
  //   ],
  // },
  // {
  //   index: 2,
  //   eventId: 81,
  //   image:
  //     "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/WW-Miscellaneous/Sakura-Events-Main/ntt-hourglass.webp",
  //   content:
  //     "Kon'nichiwa! Welcoming you all to this most thrilling event, “NAME THAT THING.” It's gonna make you feel the real world of anime through a set of intriguing images from your favorite anime Shirīzu! Ready to dive into the sea of anime to witness the depth of it. Here, contestants will get the opportunity to showcase their quick thinking and wit as they attempt to identify quirky pictures.",
  //   eventName: "Name That Thing | Hourglass",
  //   Registerurl: "#",
  //   rules: [
  //     "Participants have to form a team of 2-4 members.",
  //     "The game will be conducted in two rounds. A zoomed-in image of an object or thing will be displayed on the screen for 30 seconds.",
  //     "Ten seconds will be given to the participants to quickly write their guesses for what the object is.",
  //     "Thirty points will be awarded for the correct guesses. If the guess is very close (but not correct), 10 points may be awarded, and 0 points may be awarded if the answer is completely wrong.",
  //     "The team with the maximum number of points wins.",
  //     "The teams will be given the choice of anime or non-anime-related pictures before the start of the event.",
  //   ],
  // },
  {
    index: 0,
    eventId: 79,
    image: "/Images/Guess me out.png",
    content:
      "Join the exciting “Guess Me Out” event to test your guessing skills and teamwork! In groups, teammates write chits based on a topic, and one member guesses who wrote each. Correct guesses earn points; wrong guesses risk elimination. Enjoy laughter, surprises, and the thrill of competition, with exciting prizes and goodies waiting for the best teams. Don’t miss out!",
    eventName: "Guess Me Out | Hourglass",
    Registerurl: "#",
    rules: [
      "Players are divided into groups of 5; within each group, one player is chosen as the guesser.",
      "Each player (except the guesser) receives a chit of paper, and players write something on their assigned chit that matches the current round's criteria, folding them and placing in central pile",
      "The guesser starts drawing chits from the pile individually, in the meantime, other players can give hints related to that chit.",
      "For each chit-drawn, the guesser must try to identify the player who wrote it based on the information provided.",
      "The guesser can ask the other players yes/no questions to gather additional clues, once feeling confident, they announce their guess for who wrote the chit.",
      "If the guess is correct, the guesser scores a point for that round; if the guess is incorrect, the player who wrote the chit is revealed, and negative points will be added",
      "This process continues until all the chits have been used or the 5-minute timer runs out.",
      "The team with the most points wins at the game's end.",
    ],
  },
  {
    index: 1,
    eventId: 80,
    image: "/Images/watch me whisper.png",
    content:
      'Get ready for "Watch Me Whisper," where friendship meets fun! In pairs, one participant listens to loud music while the other whispers a famous phrase from any movie or quotes. Guess it correctly within the time limit to score points, or face elimination. Strengthen your bond, laugh through the chaos, and test your lip-reading skills in this thrilling and hilarious competition.',
    eventName: "Watch Me Whisper | Hourglass",
    Registerurl: "#",
    rules: [
      "This game is to be played in a team of 2.",
      "One of the team members will pick up a card with the name of a movie/character or a dialogue written on it.",
      "The other team member will be wearing headphones with loud music so that he/she cannot hear what the teammate is saying.",
      "The team member who picks up the card has to then recite or say what the card has on it.",
      "The player with the headphones has to guess the word or dialogue by his/her lip movements.",
      "Once he/she guesses right, the team moves on to the next card.",
      "Each card has some associated points, depending on the difficulty level.",
      "This is a time-based event where each pair will be given 1 minute, and the team with the maximum number of points wins.",
    ],
  },

  {
    index: 2,
    eventId: 81,
    image: "/Images/pride parade.png",
    content:
      "A campus-wide pride parade featuring a large pride flag, rainbow placards, and themed decorations. Activities include face painting, handprint canvases, and a queer musical session. An empowering workshop with Rainbow Dot and Counseling Services will provide insights on campus safety, inclusivity, and support for freshers, fostering a safe and welcoming environment for all.",
    eventName: "Pride March | Rainbow Dot",
    Registerurl: "#",
    rules: ["General decorum and discipline is needed to be maintained."],
  },

  {
    index: 3,
    eventId: 82,
    image: "/Images/cursed legacy.png",
    content:
      "The Cursed Legacy: Embark on a spellbinding adventure in The Cursed Legacy, a treasure hunt by AXIOM, NIT Rourkela. Solve enchanted riddles, decode magical clues, and race through checkpoints to uncover a hidden treasure. With every step, the curse tightens—only the cleverest and quickest will prevail. Dare to claim the legacy and rewrite the tale of magic and mystery.",
    eventName: "The Cursed Legacy | Axiom",
    Registerurl: "#",
    rules: [
      "Participation is open to individuals or teams of up to 3 members, with on-spot registration available. ",
      "Participants must arrive on time to complete the registration process.",
      " Reading and understanding the storyline is essential as it provides the foundation for solving clues.",
      "Follow the map and clues provided, and scan QR codes at each checkpoint to proceed.",
      "Participants should bring their own pen and, if preferred, paper for solving clues or taking notes.",
      "Seeking help from volunteers, collaborating with other teams, or using external assistance is strictly prohibited. ",
      "The winner is determined by the shortest time taken to complete the treasure hunt.  ",
      "Any violation, including seeking assistance, collaboration, or cheating, will result in immediate disqualification.  ",
    ],
  },
  {
    index: 4,
    eventId: 83,
    image: "/Images/knightout.png",
    content:
      "Step into the Couples Chess Tournament, where strategy and synergy collide! Each team, composed of one boy and one girl, battles it out in an exhilarating Swiss-format competition. Teammates must alternate moves without exchanging a word, pushing their coordination and trust to the limit. In a dramatic twist, the final 30 seconds allow one player to take full control. Ready to showcase your partnership and outsmart the rest? The ultimate chess challenge awaits! ",
    eventName: "Knightout | Knights Club",
    Registerurl: "#",
    rules: ["General decorum and discipline is needed to be maintained."],
  },
  {
    index: 5,
    eventId: 84,
    image: "/Images/Riddle (1).png",
    content:
      "Engaging and interactive treasure hunt that encourages participation, promotes the Home and Hope Exhibition",
    eventName: "Riddles of Hope | Rotaract",
    Registerurl: "#",
    rules: ["General decorum and discipline is needed to be maintained."],
  },

  // {
  //   index: 4,
  //   eventId: 83,
  //   image:
  //     "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/WW-Miscellaneous/Sakura-Events-Main/damb-panto.webp",
  //   content:
  //     "Silent expressions, loud fun!🎭 Embark on a journey of wordless wonder of animated spectacle with Dumb Charades extravaganza at the OtakuOddity, presented to you by Pantomime. Each charade unfolds like a scene from our favorite anime series and sets the stage for a symphony of gestures and laughter as participants delve into the art of spontaneity and sheer joy through non-verbal communication.",
  //   eventName: "Dumb Charades | Pantomime",
  //   Registerurl: "#",
  //   rules: [
  //     "This event will consist of 2 rounds and can be played in a team of 3-4 members each.",
  //     "Round 1:",
  //     "This round consists of movie guessing and the teams will be given 3 chances from each member to guess the movie. Movies will be purely based on Indian Cinema (precisely Bollywood).",
  //     "In this round, each player has to pick a chit from the bowl containing movie names. During each turn, the player will be given 60 seconds to enact the movie, and the team has to guess.",
  //     "If the team guesses it within 30 seconds, bonus marks of 10 will be awarded to them.",
  //     "In this round, music will be played in the background to distract the teammates and the player, but they have to concentrate and cooperate among themselves.",
  //     "The teams with more points will move to the next round.",
  //     "Round 2:",
  //     "In this round, instead of acting out, the participants will be given headphones with music playing on them, and their teammates have to explain the dialogue to the one listening with the headphones.",
  //     "The teammates cannot act, and the participant wearing headphones needs to solely guess from reading lips.",
  //     "In this round, teams will be given 90 seconds, and those who take less time to guess will be the winner.",
  //     "Tie Breaker:",
  //     "For each time a tie occurs, there will be a tie-breaker round, where a movie name or dialogue will be given.",
  //     "And at the same time, both teams have to enact. The team doing it with the minimum time will be the winner.",
  //   ],
  // },
  // // {
  // //   index: 5,
  // //   eventId: 84,
  // //   image:
  // //     "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/WW-Miscellaneous/Sakura-Events-Main/printstation-realm.webp",
  // //   content:
  // //     'Unleash your inner jujutsu skills to escape the clutches of cursed spirits, titans and demons to navigate beyond the walls and find the key to freedom! Escape Room offers players to "escape" from a confined space by unraveling clues, unlocking hidden secrets, and completing tasks within a set time span. Anime inspired clues, hidden objects, and artifacts are all 3D printed, creating a unique experience!',
  // //   eventName: "Ryoiki Tenkai-Escape Quest | Printstation",
  // //   Registerurl: "#",
  // //   rules: [
  // //     "Groups of size 3 can participate in the Escape Room game.",
  // //     "There will be a total of 3 rooms to escape, which will eventually lead to the exit.",
  // //     "Retrieve the hidden artifact in all three rooms in order to move to the next room.",
  // //     "The stipulated time for each room is 4 mins which gives a total of around 12 mins for each team.",
  // //     "Clue System: players can access hints or clues when they get stuck. This may involve a game master or a 3D printed clue system within the rooms.",
  // //     "Winners will be given 3D-printed anime goodies.",
  // //   ],
  // // },
  // {
  //   index: 6,
  //   eventId: 85,
  //   image:
  //     "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/WW-Miscellaneous/Sakura-Events-Main/shinobisafari-axiom.webp",
  //   content:
  //     "Embark on an anime quest where teams shall engage in a treasure hunt, deciphering puzzles, riddles, and questions. Each conquest unlocks a clue, guiding them to the next location, where challenges await. Attuned to the symphony of AI-generated audio and captivating images, teams navigate the academic landscape. Gather your comrades, form a team of 2-3, and immerse yourselves in this anime-infused adventure!",
  //   eventName: "Shinobi Safari | Axiom",
  //   Registerurl: "#",
  //   rules: [
  //     "This is a team event in which a team of 2-3 members can participate.",
  //     "Participants have to bring their own pen and paper for solving the clues; we will not provide the same.",
  //     "In this event, participants will find QR codes in each location which they have to scan to get the next part of the story and question set.",
  //     "Each QR code will be password protected so they have to put the correct password to open the PDF.",
  //     "By solving the question set, you will be getting the next location, and by the storyline given, you can get the password for the same.",
  //     "Follow up the story carefully because it will be helpful to find the final clue at the end.",
  //     "Each team has to register itself at the registration desk; otherwise, your participation will be invalid.",
  //   ],
  // },
  // {
  //   index: 7,
  //   eventId: 86,
  //   image:
  //     "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/WW-Miscellaneous/Sakura-Sponsors/rajaranichorpolice.webp",
  //   content:
  //     "Konnichiwa, anime fam! The thrill ride of 'Raja Rani Chor Police' awaits you at NITRUTSAV’24, a mystery where your choices shape the suspense and excitement. Participants embracing unique roles, and detectives delving into the intrigue, culminating in a high-stakes showdown between the Police and the top detective. Join us for an electrifying escapade where every move reveals a deeper layer of the unfolding mystery!",
  //   eventName: "Raja Rani Chor Police | Odia Sahitya Samaja",
  //   Registerurl: "#",
  //   rules: [
  //     "Round 1 Q&A Showdown: Top 12 scorers advance to Round 2.",
  //     "Round 2 Chit Craze and Sneaky Chor Hunt:",
  //     "Top 12 draw roles: Raja, Rani, Mantri, Senapati, Rajguru, Police, and 6 Chors.",
  //     "Police spills their identity, others stay incognito.",
  //     "Detectives jot down 7 suspected Chors among the chosen dozen.",
  //     "Police vs. Chors Face-Off:",
  //     "Police gets 7 shots at Chor guesses.",
  //     "If they match/exceed top detective's Chor count, Police stay, and detectives replace Chors. Else, top detective takes Police's role. Round 2 kicks off again, rinse and repeat.",
  //     "Victor Unveiling:",
  //     "The last-standing participant in the hour claims victory. Join the quest at 'Raja Rani Chor Police' for an hour of strategy and deception!",
  //   ],
  // },
  // {
  //   index: 8,
  //   eventId: 87,
  //   image:
  //     "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/WW-Miscellaneous/Sakura-Sponsors/splitsvilla.webp",
  //   content:
  //     "If being single is getting boring and most dating apps have you snoring, then Splitsvilla is the place to look for your ideal match and let cupid work his magic to find you a catch!",
  //   eventName: "Splitsvilla | Cognizen",
  //   Registerurl: "#",
  //   rules: [
  //     "Couples may register as a team of two. Same-sex couples are also allowed.",
  //     "Use of phones and internet during the game is prohibited.",
  //     "Participants should not use derogatory language during the course of the game.",
  //     "Results declared by the organizers are final and cannot be challenged.",
  //     "In the event of a tie in any round, winners will be determined through a lucky draw.",
  //     "Respect and understanding are essential. Remember that the primary goal is to have fun and connect with each other. Enjoy.",
  //   ],
  // },
  // {
  //   index: 9,
  //   eventId: 88,
  //   image:
  //     "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/WW-Miscellaneous/Sakura-Events-Main/datefate.webp",
  //   content:
  //     "Wish to find someone with whom you can share smiles and laughter? If you are eager to build a beautiful chemistry with the unknown, then this event is for you! Get to randomly pick a name from a pool of people, still unsure with cupid’s decision? Talk your heart out with the other person, and get to know them, be a part of carefully selected mini-games to test out your compatibility and leave it in the hands of the audience to decide your fate",
  //   eventName: "Date Fate",
  //   Registerurl: "#",
  //   rules: [
  //     "Welcome to the 'Date fate' event at Nitrutsav 2024! We are thrilled to have you participate in this exciting event. To ensure a fun and respectful environment, please adhere to the following rules:",
  //     "Participants must be registered attendees of Nitrutsav 2024.",
  //     "The number of registrations is limited. Registration will be on a first-come, first-served basis.",
  //     "Registrations may be closed once the maximum limit is reached. The decision of the Nitrutsav organizing team in this regard will be final.",
  //     "Registration will be done by online or offline mode.",
  //     "Inappropriate language, gestures, or actions will not be tolerated and may lead to immediate disqualification.",
  //     "The decisions of the Nitrutsav organizing team are final and binding.",
  //   ],
  // },
  // {
  //   index: 10,
  //   eventId: 104,
  //   image:
  //     "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/WW-Miscellaneous/Sakura-Sponsors/tff.webp",
  //   content:
  //     'NITRUSTAV brings you all the ingredients “THE FAMILY FEUD”. A game where your Guild, led by The Guild Master has to answer the questions. Oi Oi on each answer the Guild will be getting points based on the survey conducted by the Association. Each guild should comprise 3-4 members, including the guild master. You are free to choose the name of your guild. The first round will be the knockout, where the guilds will play "20 sec challenge", 2 teams will be chosen for finals.',
  //   eventName: "THE FAMILY FEUD | Team Nitrutsav",
  //   Registerurl: "#",
  // },
  // {
  //   index: 11,
  //   eventId: 105,
  //   image:
  //     "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/WW-Miscellaneous/Sakura-Sponsors/password.webp",
  //   content:
  //     '"Password" is a word-guessing game, where players will pair up in a team of two and indulge in guessing a word with the help of clues.',
  //   eventName: "Password | Team Nitrutsav",
  //   Registerurl: "#",
  // },
  // {
  //   index: 12,
  //   eventId: 106,
  //   image:
  //     "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/WW-Miscellaneous/Sakura-Sponsors/squidgames.webp",
  //   content:
  //     "Step into the world of Squid Games at NITRUTSAV 2024! Join us for a series of exhilarating challenges where contestants will put their skills to the test in a variety of exciting games. From brain-teasing puzzles to strategic competitions, participants will navigate through a diverse range of challenges, each more thrilling than the last. Get ready to unleash your competitive spirit and embark on an unforgettable gaming adventure at Squid Games!",
  //   eventName: "Squid Games | Team Nitrutsav",
  //   Registerurl: "#",
  // },
  // {
  //   index: 13,
  //   eventId: 120,
  //   image:
  //     "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/WW-Miscellaneous/Sakura-Events-Main/animehunt.webp",
  //   content:
  //     "ANIME HUNT, AN OVERWHELMING QUIZ COMPETITION TO KNOW YOUR KNOWLEDGE OF ANIME WORLD AND THEIR HAPPENINGS!! EXCITING PRIZES AWAITING FOR WINNERS!! COME GIVE A TRY, IT WILL BE FUN.",
  //   eventName: "Anime Hunt | Actomania",
  //   Registerurl: "#",
  // },
  // {
  //   index: 14,
  //   eventId: 121,
  //   image:
  //     "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/WW-Miscellaneous/Sakura-Events-Main/tinpetin.webp",
  //   content:
  //     '"Tin pe Tin" sounds like an entertaining and engaging team game, full of variety and challenges! Here\'s a breakdown of each round: Balloon Bursting with Blindfolded Guidance, Ball and Cup Challenge, and a Quiz round.',
  //   eventName: "Tin pe Tin | Matrix",
  //   Registerurl: "#",
  // },
];

const clubevents = [
  {
    index: 0,
    eventId: 121,
    image: "/Images/Varnam (1).png",
    content:
      "Join us for an enchanting 30-minute classical dance showcase at the SAC Stairs , where the mesmerizing magic of Indian classical dance forms will captivate your senses. The performance will feature graceful movements, energetic beats, and engaging rhythms, providing a refreshing escape from the ordinary. Let the vibrant performances transport you into a world of tradition and art, as each dance tells a story through intricate footwork, expressive gestures, and soulful music. A perfect opportunity to unwind, reconnect, and enjoy the timeless beauty of India's rich cultural heritage.",
    eventName: "Varnaam 2.0  | Nrityunjaya",
    Registerurl: "#",
  },

  {
    index: 1,
    eventId: 122,
    image: "/Images/Kaarvaan.png",
    content:
      "Join Kalaam for a poetic extravaganza on the final day of Nitrutsav! Featuring captivating performances in Hindi, Urdu, and English, this two-hour event explores diverse themes with soulful expression. Guided by our talented hosts, it promises a vibrant celebration of creativity, language, and artistry. Don’t miss this unforgettable journey of words and emotions!",
    eventName: "Karvaan 4.0 | Kalaam",
    Registerurl: "#",
  },

  {
    index: 2,
    eventId: 123,
    image: "/Images/dnb fusion (1).png",
    content:
      "Drill N Bass is back for another earth shaking and electrifying DJ night and a band performance which is guaranteed to make your night a million times more exciting. The performance will include a live music performed by our band members followed by an energetic DJ show, which means there’s something for everyone to enjoy.",
    eventName: "Fusion | DnB",
    Registerurl: "#",
  },
];

export {
  mainEvents,
  flagships,
  workshops,
  guestLectures,
  funevents,
  clubevents,
};
// export const events = {
//   MAIN: [
//     {
//       eventId: 1,
//       eventName: "Prove Pursuit Attackers | Hourglass",
//       content:
//         "こんにちは!! Welcome to this fascinating event, where you will be set up to express your opinions on the various controversies around you. In anime, many things occur along with the natural world, which might seem controversial, but you don’t find a way to put your words out. Dive into this competition and get set to indulge with your thoughts and winning prizes if you excel in this competition.",
//       image:
//         "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/WW-Miscellaneous/Sakura-Events-Main/ppa-hourglass.webp",
//       type: "MAIN",
//       date: "2024-01-01T00:00:00.000Z",
//       time: "2024-01-01T03:30:00.000Z",
//       venue: "Venue 1",
//       rules: ["Rule1", "Rule2"],
//     },
//     {
//       eventId: 2,
//       eventName: "Anime Quiz | Inquizzitive",
//       content:
//         "Embark on an exhilarating journey through the captivating world of anime with our in-house Anime Quiz! Dive into the enchanting realms of Japanese animation and get ready to test your expertise on classics like DBZ and Naruto and the latest releases like Jujutsu Kaisen and Attack on Titan, as well as delve into the intriguing history and evolution of anime.",
//       image:
//         "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/WW-Miscellaneous/Sakura-Events-Main/inq-anime-quiz.webp",
//       type: "MAIN",
//       date: "2024-01-01T00:00:00.000Z",
//       time: "2024-01-01T03:30:00.000Z",
//       venue: "Venue 1",
//       rules: ["Rule1", "Rule2"],
//     },
//     {
//       eventId: 3,
//       eventName: "India Quiz | Inquizzitive",
//       content:
//         "A captivating Indian Quest orchestrated by the renowned quizmaster Piyush Kedia, presents to you an opportunity to traverse the realms of food, music, film, history, politics, art and architecture from the rich culture of India. Immerse yourself in a spellbinding adventure that transcends the boundaries of imagination, exploring the multifaceted layers of India's captivating heritage!",
//       image:
//         "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/WW-Miscellaneous/Sakura-Events-Main/inq-india-quiz.webp",
//       type: "MAIN",
//       date: "2024-01-01T00:00:00.000Z",
//       time: "2024-01-01T03:30:00.000Z",
//       venue: "Venue 1",
//       rules: ["Rule1", "Rule2"],
//     },
//     {
//       eventId: 4,
//       eventName: "Melas Quiz | Inquizzitive",
//       content:
//         "MELAS = Music, Entertainment, Literature, Arts & Sports. In this quiz hosted by the esteemed QM Aabhaas Dasgupta, participants have to bring in their Pop-Culture IQ, summon their Otaku Wisdom and fuse it with their Ninja Skills to tackle the challenges. Brace yourselves for an epic test of expertise and let those neurons be fired away.",
//       image:
//         "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/WW-Miscellaneous/Sakura-Events-Main/inq-melas-quiz.webp",
//       type: "MAIN",
//       date: "2024-01-01T00:00:00.000Z",
//       time: "2024-01-01T03:30:00.000Z",
//       venue: "Venue 1",
//       rules: ["Rule1", "Rule2"],
//     },
//     {
//       eventId: 5,
//       eventName: "Cosplay | Pantomine",
//       content:
//         "Beyond the costumes, beyond the reels, unleash the stories within! Dive deep into the anime realm at this extraordinary cosplay event. Transform into your favourite character from your favourite anime, surrounded by fellow fans who share the same passion for manga enchantment. From meticulously crafted costumes to epic battles of creativity, each moment is a celebration of our shared love for the anime universe.",
//       image:
//         "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/WW-Miscellaneous/Sakura-Events-Main/cosplay-panto.webp",
//       type: "MAIN",
//       date: "2024-01-01T00:00:00.000Z",
//       time: "2024-01-01T03:30:00.000Z",
//       venue: "Venue 1",
//       rules: ["Rule1", "Rule2"],
//     },
//     {
//       eventId: 6,
//       eventName: "Sakura Symphony | Kalaam",
//       content:
//         "Embark on a poetic quest open to all that unfolds in 2 levels – an online screening round and the final round within our anime-centric campus. The podium awaits the top 3 performers, showering them with goodies, all to be judged by a distinguished poet serving as our honored guest.",
//       image:
//         "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/WW-Miscellaneous/Sakura-Events-Main/ss-kalaam.webp",
//       type: "MAIN",
//       date: "2024-01-01T00:00:00.000Z",
//       time: "2024-01-01T03:30:00.000Z",
//       venue: "Venue 1",
//       rules: ["Rule1", "Rule2"],
//     },
//     {
//       eventId: 7,
//       eventName: "Mission 2030 | SDG Campus Club",
//       content:
//         "Unleash the ultimate otaku mastery in an event consisting of three epic rounds – where knowledge meets fun in the Ninja way! From mind-bending anime trivia that'll test your knowledge to navigating through Jenga's Shinobi precision, and facing off in a surprising board game! Join us, fellow shinobis, and elevate your anime spirit to legendary heights!",
//       image:
//         "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/WW-Miscellaneous/Sakura-Events-Main/mission-sdg.webp",
//       type: "MAIN",
//       date: "2024-01-01T00:00:00.000Z",
//       time: "2024-01-01T03:30:00.000Z",
//       venue: "Venue 1",
//       rules: ["Rule1", "Rule2"],
//     },
//     {
//       eventId: 8,
//       eventName: "Voice of NU | Heartbeats",
//       content:
//         "Summoning all vocal maestros and anime music enthusiasts to participate in Voice of NU, presented by Heartbeats. Flaunt your musical prowess in two rounds, with the first round being confined to three minutes. Singers can harmonize in any Indian language, with a strict no-karaoke policy. Dive into an afternoon brimming with harmonious renditions of melodic brilliance!",
//       image:
//         "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/WW-Miscellaneous/Sakura-Events-Main/vonu-heartbeats.webp",
//       type: "MAIN",
//       date: "2024-01-01T00:00:00.000Z",
//       time: "2024-01-01T03:30:00.000Z",
//       venue: "Venue 1",
//       rules: ["Rule1", "Rule2"],
//     },
//     {
//       eventId: 9,
//       eventName: "Lit-A-lympics | Clarion",
//       content:
//         "Embark on a literary odyssey with Lit-A-Lympics: an exhilarating quiz game that takes you on a journey through the vibrant world of manga! Summon your inner shinobi and unlock the battle of wits. Unleash your anime prowess from crafting enchanting tales of Spirited Away to exploring the mysteries of Death Note. Join us for an epic collision of knowledge and quick thinking!",
//       image:
//         "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/WW-Miscellaneous/Sakura-Events-Main/lal-clarion.webp",
//       type: "MAIN",
//       date: "2024-01-01T00:00:00.000Z",
//       time: "2024-01-01T03:30:00.000Z",
//       venue: "Venue 1",
//       rules: ["Rule1", "Rule2"],
//     },
//     {
//       eventId: 10,
//       eventName: "Rap Battle | Drill N Bass",
//       content:
//         "Rap battle is an event to uncover, acknowledge, and celebrate the prowess of rap artists and the vibrant rap culture within the anime community. This event stands as a battleground for talented artists to showcase and flex their lyrical and rapping abilities, providing a dynamic platform for self-expression and skillful prowess!",
//       image:
//         "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/WW-Miscellaneous/Sakura-Events-Main/rap-battle-drillnbass.webp",
//       type: "MAIN",
//       date: "2024-01-01T00:00:00.000Z",
//       time: "2024-01-01T03:30:00.000Z",
//       venue: "Venue 1",
//       rules: ["Rule1", "Rule2"],
//     },
//     {
//       eventId: 11,
//       eventName: "Reel-E-Stick | RITVIC",
//       content:
//         "Hey anime-warriors! It's time to unleash your artistic ninjutsu in Ritvic's Reel-E-Stick competition! Channel your inner shinobi and let your creativity blossom in cinematic form, captivating audiences far and wide. Don your thinking headbands and compete to craft stunning reels that will transport viewers to anime realms!",
//       image:
//         "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/WW-Miscellaneous/Sakura-Events-Main/reel-e-stick-ritvic-insta.webp",
//       type: "MAIN",
//       date: "2024-01-01T00:00:00.000Z",
//       time: "2024-01-01T03:30:00.000Z",
//       venue: "Venue 1",
//       rules: ["Rule1", "Rule2"],
//     },
//     {
//       eventId: 12,
//       eventName: "Mono Act | RITVIC",
//       content:
//         "Enter the spotlight with our Monoact event, where viewers witness solo performers mesmerize audiences with their emotional jutsu, humor, and versatility. From intense monologues to comedic kawaii brilliance, participants can summon their own assistants or bring their own props, immersing themselves in a showcase of individual talent and storytelling prowess guaranteed to leave a lasting impression!",
//       image:
//         "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/WW-Miscellaneous/Sakura-Events-Main/mono-act-ritvic-insta.webp",
//       type: "MAIN",
//       date: "2024-01-01T00:00:00.000Z",
//       time: "2024-01-01T03:30:00.000Z",
//       venue: "Venue 1",
//       rules: ["Rule1", "Rule2"],
//     },
//     {
//       eventId: 13,
//       eventName: "Kaarvaan 3.0 | Kalaam",
//       content:
//         "Embark on an anime-infused journey into the captivating realm of poetry at Kaarvaan 3.0, brought to you by Kalaam. Gear up for mesmerizing recitations in Hindi, Urdu, and English, exploring captivating themes for the otakus! With Kalaam members as your hosts and a guest poet igniting the stage, immerse yourself for an evening brimming poetic eloquence and visual delights.",
//       image:
//         "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/WW-Miscellaneous/Sakura-Events-Main/kaarvaan-kalaam.webp",
//       type: "MAIN",
//       date: "2024-01-01T00:00:00.000Z",
//       time: "2024-01-01T03:30:00.000Z",
//       venue: "Venue 1",
//       rules: ["Rule1", "Rule2"],
//     },
//   ],
//   FLAGSHIP: [
//     {
//       eventId: 14,
//       eventName: "Hunkaar | Pantomime",
//       content:
//         "The city vibrates with vitality, giving rise to Hunkaar, an enthralling theatrical experience. Illuminate the open stage with your narratives and let the magic of street theater spark conversations and inspire change. Incorporate yourself into the spellbinding narrative as we spotlight society's diverse shades, ignite revolutions with dramatic words. Join us to show your storytelling prowess at Hunkaar : The Nukkad Natak competition!",
//       image:
//         "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/WW-Miscellaneous/Sakura-Events-Main/hunkaar-pantomime.webp",
//       type: "FLAGSHIP",
//       date: "2024-01-01T00:00:00.000Z",
//       time: "2024-01-01T03:30:00.000Z",
//       venue: "Venue 1",
//       rules: ["Rule1", "Rule2"],
//     },
//     {
//       eventId: 15,
//       eventName: "Fashionista | Fusion",
//       content:
//         "Dive into the enchanting world of anime-inspired fashion show at Fashionista, a thrilling team competition where creativity takes center stage. Teams of up to 25 members will showcase their style prowess within a 20-minute time frame, featuring mesmerizing costumes and unique walking stances. Join us for an unforgettable experience, where the runway becomes a canvas for anime magic, and only the most imaginative reign supreme!",
//       image:
//         "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/WW-Miscellaneous/Sakura-Events-Main/fusion-nu-poster.webp",
//       type: "FLAGSHIP",
//       date: "2024-01-01T00:00:00.000Z",
//       time: "2024-01-01T03:30:00.000Z",
//       venue: "Venue 1",
//       rules: ["Rule1", "Rule2"],
//     },
//     {
//       eventId: 16,
//       eventName: "Maktub-Musical Night | Heartbeats",
//       content:
//         "Heartbeats unveils MAKTUB, the flagship event that promises a musical night of passion and jubilation. Don your finest anime-inspired attire and submerge yourself in an evening of enchanting soundtracks and diverse tunes performed by Heartbeats. Let the live band set the stage on fire while you gear up to the spirits of celebration. Join us in DTS for an unforgettable night of music, culture, and pure emotion!",
//       image:
//         "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/WW-Miscellaneous/Sakura-Events-Main/maktub-heartbeats.webp",
//       type: "FLAGSHIP",
//       date: "2024-01-01T00:00:00.000Z",
//       time: "2024-01-01T03:30:00.000Z",
//       venue: "Venue 1",
//       rules: ["Rule1", "Rule2"],
//     },
//     {
//       eventId: 17,
//       eventName: "NU Journalist | Clarion",
//       content:
//         "From the world of Death Note, Jujutsu Kaisen, My Hero Academia, and many more, characters have emerged straight out of the screen to take you on an adventurous ride of twists and turns! The shadow of a murder looms over their vibrant world, and no one knows who did it. Alliances crumble apart and a web of lies unravels.",
//       image:
//         "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/WW-Miscellaneous/Sakura-Events-Main/clarion-nuj.webp",
//       type: "FLAGSHIP",
//       date: "2024-01-01T00:00:00.000Z",
//       time: "2024-01-01T03:30:00.000Z",
//       venue: "Venue 1",
//       rules: ["Rule1", "Rule2"],
//     },
//     {
//       eventId: 18,
//       eventName: "Breakbeats | Team Nitrutsav",
//       content:
//         "Embark on a dance extravaganza with two dynamic categories: 1 vs 1 (solo) and Crew vs Crew (group). Unleash your moves in any street dance style—Hip-Hop, Popping, Krumping, Locking, Breaking, Waacking, Afro, Lite-feet, and more! Each category features two electrifying rounds, showcasing individual prowess or group synergy. Get ready to own the dance floor and make your mark in this thrilling clash of styles!",
//       image:
//         "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/WW-Miscellaneous/Sakura-Events/default-image.webp",
//       type: "FLAGSHIP",
//       date: "2024-01-01T00:00:00.000Z",
//       time: "2024-01-01T03:30:00.000Z",
//       venue: "Venue 1",
//       rules: ["Rule1", "Rule2"],
//     },
//     {
//       eventId: 19,
//       eventName: "Footloose | Synergy",
//       content:
//         "Anime Warriors, the spotlight is yours to claim! SYNERGY proudly unveils FOOTLOOSE. Open to students of NIT Rourkela and beyond, illuminate the stage as solo performers, dynamic duos or crews. Enlist online, guarantee your soundtrack is free from explicit vibes, and prepare to unleash your dance prowess. Let the rhythm of anime melodies lead your feet in this dance showdown, where glory awaits the boldest dancers!",
//       image:
//         "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/WW-Miscellaneous/Sakura-Events/footloose.webp",
//       type: "FLAGSHIP",
//       date: "2024-01-01T00:00:00.000Z",
//       time: "2024-01-01T03:30:00.000Z",
//       venue: "Venue 1",
//       rules: ["Rule1", "Rule2"],
//     },
//     {
//       eventId: 20,
//       eventName: "Palette | Chitraang",
//       content:
//         "Dive into the vibrant realm of 'Palette,' an anime-inspired art exhibition where colors transcend boundaries. Each piece whispers a tale, blending imagination with hues, creating a canvas that echoes the spirit of anime. Immerse yourself in this chromatic symphony and witness the magic of Palette come to life.",
//       image:
//         "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/WW-Miscellaneous/Sakura-Events-Main/palette-chitraang.webp",
//       type: "FLAGSHIP",
//       date: "2024-01-01T00:00:00.000Z",
//       time: "2024-01-01T03:30:00.000Z",
//       venue: "Venue 1",
//       rules: ["Rule1", "Rule2"],
//     },
//   ],
//   WORKSHOP: [
//     {
//       eventId: 21,
//       eventName: "Vivid | Third Eye",
//       content:
//         'Third Eye presents "Vivid," an enchanting photography exhibition that delves into the extraordinary. Each photograph tells a story, showcasing the photographer\'s commitment to their craft and the vibrant hues of nature. The exhibition resonates with viewers with its vivid storytelling.',
//       image:
//         "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/WW-Miscellaneous/Sakura-Events-Main/vivid-thirdeye.webp",
//       type: "WORKSHOP",
//       date: "2024-01-01T00:00:00.000Z",
//       time: "2024-01-01T03:30:00.000Z",
//       venue: "Venue 1",
//       rules: ["Rule1", "Rule2"],
//     },
//     {
//       eventId: 22,
//       eventName: "Pottery Clay | AKRITI",
//       content:
//         "This year's NITRUTSAV offers a Clay Workshop, where participants will learn the therapeutic and expressive nature of shaping and molding clay into unique pieces. The workshop provides a relaxed environment for students to socialize and unleash their imagination.",
//       image:
//         "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/WW-Miscellaneous/Sakura-Events-Main/pottery-workshop-akriti.webp",
//       type: "WORKSHOP",
//       date: "2024-01-01T00:00:00.000Z",
//       time: "2024-01-01T03:30:00.000Z",
//       venue: "Venue 1",
//       rules: ["Rule1", "Rule2"],
//     },
//     {
//       eventId: 23,
//       eventName: "Vivid | Third Eye",
//       content:
//         'Third Eye presents "Vivid," an enchanting photography exhibition that delves into the extraordinary. Each photograph tells a story, showcasing the photographer\'s commitment to their craft and the vibrant hues of nature. The exhibition resonates with viewers with its vivid storytelling.',
//       image:
//         "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/WW-Miscellaneous/Sakura-Events-Main/vivid-thirdeye.webp",
//       type: "WORKSHOP",
//       date: "2024-01-01T00:00:00.000Z",
//       time: "2024-01-01T03:30:00.000Z",
//       venue: "Venue 1",
//       rules: ["Rule1", "Rule2"],
//     },
//     {
//       eventId: 24,
//       eventName: "Pottery Clay | AKRITI",
//       content:
//         "This year's NITRUTSAV offers a Clay Workshop, where participants will learn the therapeutic and expressive nature of shaping and molding clay into unique pieces. The workshop provides a relaxed environment for students to socialize and unleash their imagination.",
//       image:
//         "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/WW-Miscellaneous/Sakura-Events-Main/pottery-workshop-akriti.webp",
//       type: "WORKSHOP",
//       date: "2024-01-01T00:00:00.000Z",
//       time: "2024-01-01T03:30:00.000Z",
//       venue: "Venue 1",
//       rules: ["Rule1", "Rule2"],
//     },
//     {
//       eventId: 25,
//       eventName: "Vivid | Third Eye",
//       content:
//         'Third Eye presents "Vivid," an enchanting photography exhibition that delves into the extraordinary. Each photograph tells a story, showcasing the photographer\'s commitment to their craft and the vibrant hues of nature. The exhibition resonates with viewers with its vivid storytelling.',
//       image:
//         "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/WW-Miscellaneous/Sakura-Events-Main/vivid-thirdeye.webp",
//       type: "WORKSHOP",
//       date: "2024-01-01T00:00:00.000Z",
//       time: "2024-01-01T03:30:00.000Z",
//       venue: "Venue 1",
//       rules: ["Rule1", "Rule2"],
//     },
//     {
//       eventId: 26,
//       eventName: "Pottery Clay | AKRITI",
//       content:
//         "This year's NITRUTSAV offers a Clay Workshop, where participants will learn the therapeutic and expressive nature of shaping and molding clay into unique pieces. The workshop provides a relaxed environment for students to socialize and unleash their imagination.",
//       image:
//         "https://sacnitrkl.blr1.cdn.digitaloceanspaces.com/WW-Miscellaneous/Sakura-Events-Main/pottery-workshop-akriti.webp",
//       type: "WORKSHOP",
//       date: "2024-01-01T00:00:00.000Z",
//       time: "2024-01-01T03:30:00.000Z",
//       venue: "Venue 1",
//       rules: ["Rule1", "Rule2"],
//     },
//   ],
// };
