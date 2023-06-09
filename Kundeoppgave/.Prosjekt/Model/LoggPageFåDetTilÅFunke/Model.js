const model = {
  app: {
    currentPage: "topicPage",
    isAdmin: true,
    loggedInUser: [],
  },

  inputs: {
    logPage: {
      whatHaveYouLearnedToday: "",
      selectedWeek: "",
      selectedDay: "",
      answers: [, ,],
    },
    newUserPage: {
      firstname: "",
      lastname: "",
      phoneNumber: "",
      postalCode: "",
      eMail: "",
      klasse: "", //Start IT, Get IT
      img: {
        imgSrc: "",
        imgName: "",
      },
    },
    loginPage: {
      userId: "", //
      password: "",
      errorMessage: "",
    },
    chatPage: {
      newMessageInput: "",
    },
    profilePage: {},
    studentListPage: {
      searchBar: "",
      currentFilter: "Start IT",
    },
  },
  // data
  mainQuestions: ["humør", "komm", "teamhumør"],
  log: [
    {
      whatHaveYouLearnedToday: "bla bla bla",
      week: 3,
      day: 3,
      answers: [1, 2, 3],
      userId: 3,
      module: 1,
    },
  ],
  chatMessages: [
    {
      fromUserId: "terje",
      toUserId: "per",
      messageContent: "Hallo, hva er psykologisk trygghet?",
      timeStamp: "2023-03-31 15:03", // t = '2023-03-31 15:03'; new Date(t)    .toLocaleTimeString()
      isRead: false,
    },
  ],
  users: [
    {
      userId: "admin",
      firstname: "Ola",
      lastname: "Nordmann",
      phoneNumber: "77633743",
      postalCode: "4621",
      eMail: "admin@admin.com",
      klasse: "Admin", //Start IT, Get IT
      password: "admin",
      img: {
        imgSrc: "",
        imgName: "",
      },
      log: [
        {
        whatHaveYouLearnedToday: "bla bla bla",
        week: 3,
        day: 3,
        answers: [1, 2, 3],
        userId: 3,
        module: 1,
      },
    ],
    },
    {
      userId: "elev",
      firstname: "Elev",
      lastname: "K. Elevesen",
      phoneNumber: "74368216",
      postalCode: "1613",
      eMail: "fskdjfhds@gmail.com",
      klasse: "Start IT", //Start IT, Get IT
      password: "elev",
      img: {
        imgSrc: "",
        imgName: "",
      },
    },
    {
      userId: "",
      firstname: "elevn",
      lastname: "elevesen",
      phoneNumber: "",
      postalCode: "",
      eMail: "",
      klasse: "", //Start IT, Get IT
      password: "elev",
      img: {
        imgSrc: "",
        imgName: "",
      },
    },
  ],
  temaer: [
    { id: 1, navn: "Trygghet" },
    { id: 2, navn: "Selvkontroll" },
    { id: 3, navn: "Mikrovaner" },
  ],
  utførteOppgaver: [
    { oppgaveId: 0, svar: "fhjg", userId: 1, timeStamp: "2023..." },
    { oppgaveId: 1, svar: "fhjg", userId: 1, timeStamp: "" },
  ],
  oppgaver: [
    {
      id: 0,
      Tittel: "Intro til trygghet",
      Tekst:
        "Trygghet er en viktig faktor for smidighet og godt sammarbeid i et team.",
      videoLink:
        '<iframe width="auto" height="auto" src="https://www.youtube.com/embed/oTPhiPHqIzM" title="Better Leadership and Learning with Psychological Safety - ft. Amy Edmondson" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      Type: "DropDown",
      hasCheckmark: false,
      isChecked: null,
      temaId: 1,
    },
    {
      id: 1,
      Tittel: "Oppg 1: Hva er trygghet?",
      Tekst: "",
      Type: "DropDown",
      hasCheckmark: false,
      isChecked: null,
      temaId: 1,
    },
    {
      id: 2,
      Tittel: "Oppg 2: Hvorfor er trygghet viktig?",
      Tekst:
        "Hvilke påstander er riktig om psykologisk trygghet? (Flere svaralternativ mulig)",
      Type: "DropDown",
      SvarAlt: [
        "Det handler om hvordan man fremstår ovenfor andre",
        "Det gjør oss tryggere til å eksperimentere, ta risiko, og oppnå større vekst",
        "Den lar deg bo hjemme hos moren din så lenge du vil",
        "Psykologisk trygghet er en felles oppfattelse om at teamet er trygge nok til å ta mellommenneskelig risiko",
      ],
      hasCheckmark: false,
      isChecked: null,
      temaId: 1,
    },
    {
      id: 3,
      Tittel: "Refleksjonsoppgave",
      Tekst: "Skriv en personlig refleksjon over hva du fikk ut temaet",
      Type: "Egentekst",
      hasCheckmark: true,
      isChecked: null,
      temaId: 1,
    },
    {
      id: 4,
      Tittel: "Intro til Growth Mindset",
      Tekst:
        "Growth mindset er en måte å tenke på som fremmer endring, i motsetning til fixed eller fastlåst tenkemåte, som hindrer endring.",
      videoLink:
        '<iframe width="auto" height="auto" src="https://www.youtube.com/embed/75GFzikmRY0" title="Growth Mindset Introduction: What it is, How it Works, and Why it Matters" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      Type: "Dropdown",
      hasCheckmark: false,
      isChecked: null,
      temaId: 2,
    },
    {
      id: 5,
      Tittel:
        "Oppg 1: Hva er din oppfatning av Growth Mindset? Diskuter dette i gruppen, og skriv ned hva dere tenker.",
      Tekst: "",
      Type: "Dropdown",
      hasCheckmark: true,
      isChecked: null,
      temaId: 2,
    },
    {
      id: 6,
      Tittel: "Oppg 2: Når får du bruk for Growth Mindset?",
      Tekst: "",
      Type: "Dropdown",
      SvarAlt: [
        "Hele livet.",
        "Når jeg sitter fast i tanker om at jeg ikke kan lære noe nytt",
        "Når plantene mine begynner å visne",
        "Når jeg er ikke har lyst og prøve fordi jeg er redd for å gjøre feil",
      ],
      hasCheckmark: true,
      isChecked: null,
      temaId: 2,
    },
    {
      id: 7,
      Tittel: "Oppg 2: Refleksjonsoppgave",
      Tekst: "Skriv en personlig refleksjon over hva du fikk ut temaet",
      Type: "Dropdown",
      hasCheckmark: true,
      isChecked: null,
      temaId: 2,
    },
    {
      id: 8,
      Tittel: "Intro til mikrovaner",
      Tekst:
        "All big things come from small beginnings. The seed of every habit is a single, tiny decision.",
      videoLink:
        '<iframe width="auto" height="auto" src="https://www.youtube.com/embed/S_8e-6ZHKLs" title="TINY HABITS by BJ Fogg | Core Message" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      Type: "DropDown",
      hasCheckmark: false,
      isChecked: null,
      temaId: 3,
    },
    {
      id: 9,
      Tittel: "Oppg 1: Hva er mikrovaner?",
      Tekst: "",
      Type: "DropDown",
      hasCheckmark: false,
      isChecked: null,
      temaId: 3,
    },
    {
      id: 10,
      Tittel: "Oppg 2: Hvorfor er mikrovaner viktig?",
      Tekst:
        "Hvilke påstander er riktig om mikrovaner? (Flere svaralternativ mulig)",
      Type: "DropDown",
      SvarAlt: [
        "Jeg tar store steg for å komme meg raskt til mål",
        "Jeg feirer små seire for at vanen min kan gro",
        "Jeg forenkler vanemålet mitt til det enkleste mulig, for å oppnå gjennomføringsevne",
        "Jeg varmer opp maten min i mikrobølgeovnen",
      ],
      hasCheckmark: false,
      isChecked: null,
      temaId: 3,
    },
    {
      id: 11,
      Tittel: "Refleksjonsoppgave",
      Tekst: "Skriv en personlig refleksjon over hva du fikk ut temaet",
      Type: "Egentekst",
      hasCheckmark: true,
      isChecked: null,
      temaId: 3,
    },
  ],
  nåverendeTema: 1,
};
