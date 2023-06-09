const model = {
  app: {
    currentPage: "loginPage",
    isAdmin: true,
    loggedInUser: "",
  },

  inputs: {
    logPage: {
      whatHaveYouLearnedToday: "",
      selectedWeek: 1,
      selectedDay: 5,
      answers: [1, 2, 3],
    },
    newUserPage: {
      userId: "",
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
  mainQuestions: ["Eget humør", "Kommunikasjon", "Dynamikk i teamet"],
  adminUserLog: "",
  elevLogg: "",
  log: [
    {
      whatHaveYouLearnedToday:
        "Jeg synes den første uken på Get har vært veldig lærerik. Det har vært utfordrende å være i et team med helt nye mennesker, men jeg gleder meg til de neste dagene.",
      week: 1,
      day: 5,
      answers: [7, 6, 6],
      userId: "elev",
      module: 1,
    },
    {
      whatHaveYouLearnedToday:
        "Jeg har blitt litt mer kjent med teamet mitt nå, og de er veldig hyggelige. Det er kjempegøy å kode, selv om det er en veldig bratt læringskurve.",
      week: 2,
      day: 3,
      answers: [7, 7, 7],
      userId: "elev",
      module: 1,
    },
    {
      whatHaveYouLearnedToday:
        "Det har vært spennende å begynne på modul 2. Gleder meg til å jobbe med et ekte kundeprosjekt.",
      week: 1,
      day: 4,
      answers: [8, 6, 7],
      userId: "Henriette",
      module: 2,
    },
    {
      whatHaveYouLearnedToday:
        "Vi er godt inne i kundeprosjektet nå, men model er skikkelig vanskelig. Og vi har slitt med å få til en god gruppedynamikk, men vi har tatt dette opp i gruppa nå, og forhåpentligvis blir det bedre snart.",
      week: 3,
      day: 3,
      answers: [6, 4, 3],
      userId: "Henriette",
      module: 2,
    },
    {
      whatHaveYouLearnedToday:
        "Jeg var usikker i dag når jeg starta første dag på GET. Var nervøs, men synes det har gått bra og at lærerne er snille.",
      week: 1,
      day: 1,
      answers: [6, 5, 5],
      userId: "Knut",
      module: 1,
    },
    {
      whatHaveYouLearnedToday:
        "Jeg var litt mindre nervøs i dag, har møtt teamet mitt for første gang, det var fint.",
      week: 1,
      day: 2,
      answers: [7, 7, 8],
      userId: "Knut",
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
      eMail: "admin@getacademy.no",
      klasse: "Admin", //Start IT, Get IT
      password: "admin",
      imgSrc: "img0.jpeg",
    },
    {
      userId: "elev",
      firstname: "Elev",
      lastname: "K. Elevesen",
      phoneNumber: "74368216",
      postalCode: "1613",
      eMail: "elevelevesen@getacademy.no",
      klasse: "Start IT", //Start IT, Get IT
      password: "elev",
      imgSrc: "img1.jpeg",
    },
    {
      userId: "Knut",
      firstname: "Knut",
      lastname: "Knutsen",
      phoneNumber: "90523412",
      postalCode: "3234",
      eMail: "knutknutsen@getacademy.no",
      klasse: "Start IT", //Start IT, Get IT
      password: "Knut",
      imgSrc: "img2.jpeg",
    },
    {
      userId: "Henriette",
      firstname: "Henriette",
      lastname: "Nilsen",
      phoneNumber: "45783210",
      postalCode: "3030",
      eMail: "henriettennilsen@getacademy.no",
      klasse: "Get IT", //Start IT, Get IT
      password: "Henriette",
      imgSrc: "img5.jpeg",
    },
    {
      userId: "Per",
      firstname: "Per",
      lastname: "Persson",
      phoneNumber: "93451250",
      postalCode: "2736",
      eMail: "perpersson@getacademy.no",
      klasse: "Start IT", //Start IT, Get IT
      password: "Per",
      imgSrc: "img3.jpeg",
    },
    {
      userId: "Guri",
      firstname: "Guri",
      lastname: "Olsen",
      phoneNumber: "47623409",
      postalCode: "3213",
      eMail: "guriolsen@getacademy.no",
      klasse: "Get IT", //Start IT, Get IT
      password: "Guri",
      imgSrc: "img4.jpeg",
    },
  ],
  temaer: [
    { id: 1, navn: "Trygghet" },
    { id: 2, navn: "Growth mindset" },
    { id: 3, navn: "Mikrovaner" },
  ],
  utførteOppgaver: [
    { oppgaveId: 0, svar: "Sett", userId: "elev", timeStamp: "2023..." },
    {
      oppgaveId: 1,
      svar: "Vi skal tørre og være ærlige med hverandre, og si hva vi har behov for og hvordan vi lærer best. Så får vi et godt og trygt team.",
      userId: "elev",
      timeStamp: "",
    },
    {
      oppgaveId: 2,
      svar: "isChecked: true, isChecked: true, isChecked: false, isChecked: false",
      userId: "elev",
      timeStamp: "",
    },
    {
      oppgaveId: 3,
      svar: "Synes dette tema har vært veldig fint. Har lært meg og bli trygg og komfortabel i gruppa.",
      userId: "elev",
      timeStamp: "",
    },
    { oppgaveId: 4, svar: "fhjg", userId: "elev", timeStamp: "" },
    { oppgaveId: 5, svar: "fhjg", userId: "elev", timeStamp: "" },
    { oppgaveId: 6, svar: "fhjg", userId: "elev", timeStamp: "" },
    { oppgaveId: 7, svar: "fhjg", userId: "elev", timeStamp: "" },
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
      Tekst:
        "Diskuter med teamet, hva trygghet betyr for dere. Hva er det som kan bidra med et tryggere miljø for deg og din sirkel?",
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
