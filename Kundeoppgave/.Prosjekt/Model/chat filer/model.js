const model = {
  app: {
    currentPage: "loginPage",
    isAdmin: true,
    loggedInUser: false,
  },
  
  inputs: {
    logPage: {
      whatHaveYouLearnedToday: "",
      selectedWeek: 1,
      selectedDay: 5,
      answers: [1, 2, 3],
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
      chatId: 0,
      fromUserId: "",
      toUserId: "admin",
      messageContent: "",
      timeStamp: "2023-03-31 15:03", // t = '2023-03-31 15:03'; new Date(t)    .toLocaleTimeString()
      isRead: false,
    },
    {
      chatId: 1,
      fromUserId: "admin",
      toUserId: "",
      messageContent: "",
      timeStamp: "2023-03-31 15:03", // t = '2023-03-31 15:03'; new Date(t)    .toLocaleTimeString()
      isRead: false,
    },
    {
      chatId: 2,
      fromUserId: "admin",
      toUserId: "",
      messageContent: "",
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
      userId: "elev",
      firstname: "Knut",
      lastname: "Knutsen",
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
      { id: 3, navn: "skdjhfsd" },
      { id: 4, navn: "dflhdsk" },
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
          "Det handler om hvordan man fremstår ovenfor andre",
          "Det handler om hvordan man fremstår ovenfor andre",
          "Det handler om hvordan man fremstår ovenfor andre",
        ],
        hasCheckmark: false,
        isChecked: null,
        temaId: 1,
      },
      {
        id: 3,
        Tittel: "Refleksjonsoppgave",
        Tekst: "Reflekter på hva du har gjort idag",
        Type: "Egentekst",
        hasCheckmark: true,
        isChecked: null,
        temaId: 1,
      },
      {
        id: 4,
        Tittel: "Intro til Selvkontroll",
        Tekst:
          "Hva er din definisjon av selvkontroll? Diskuter dette i gruppen, og skriv ned hva dere tenker.",
        Type: "Dropdown",
        hasCheckmark: false,
        isChecked: null,
        temaId: 2,
      },
      {
        id: 5,
        Tittel: "Oppg 1: Hva er god selvkontroll?",
        Tekst: "",
        Type: "Dropdown",
        hasCheckmark: true,
        isChecked: null,
        temaId: 2,
      },
      {
        id: 6,
        Tittel: "Oppg 2: Når får du bruk for selvkontroll?",
        Tekst: "",
        Type: "Dropdown",
        SvarAlt: [
          "Det handler om hvordan man fremstår ovenfor andre",
          "Det handler om hvordan man fremstår ovenfor andre",
          "Det handler om hvordan man fremstår ovenfor andre",
          "Det handler om hvordan man fremstår ovenfor andre",
        ],
        hasCheckmark: true,
        isChecked: null,
        temaId: 2,
      },
      {
        id: 7,
        Tittel: "Oppg 2: Refleksjonsoppgave",
        Tekst: "",
        Type: "Dropdown",
        hasCheckmark: true,
        isChecked: null,
        temaId: 2,
      },
    ],
  nåverendeTema: 1,
};