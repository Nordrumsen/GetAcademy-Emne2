let trygghetModel = [
  //  Tema 1: Trygghet
  {
    Oppgave: 0,
    Tittel: "Intro til trygghet",
    Tekst:
      "Trygghet er en viktig faktor for smidighet og godt sammarbeid i et team.",
    Type: "DropDown",
    hasCheckmark: false,
    isChecked: null,
  },
  {
    Oppgave: 1,
    Tittel: "Oppg 1: Hva er trygghet",
    Tekst: "",
    Type: "DropDown",
    hasCheckmark: false,
    isChecked: null,
  },
  {
    Oppgave: 2,
    Tittel: "Oppg 2: Hvorfor er trygghet viktig?",
    Tekst: "",
    Type: "DropDown",
    hasCheckmark: false,
    isChecked: null,
  },
  {
    Oppgave: 3,
    Tittel: "Refleksjonsoppgave",
    Tekst: "Reflekter på hva du har gjort idag",
    Type: "Egentekst",
    hasCheckmark: true,
    isChecked: null,
  },
];

let selvkontrollModel = [
  // Tema 2: Selvkontroll
  {
    Oppgave: 0,
    Tittel: "Intro til Selvkontroll",
    Tekst:
      "Hva er din definisjon av selvkontroll? Diskuter dette i gruppen, og skriv ned hva dere tenker.",
    Type: "Dropdown",
    hasCheckmark: false,
    isChecked: null,
  },
  {
    Oppgave: 1,
    Tittel: "Oppg 1: Hva er god selvkontroll?",
    Tekst: "",
    Type: "Dropdown",
    hasCheckmark: true,
    isChecked: null,
  },
  {
    Oppgave: 2,
    Tittel: "Oppg 2: Når får du bruk for selvkontroll?",
    Tekst: "",
    Type: "Dropdown",
    hasCheckmark: true,
    isChecked: null,
  },
  {
    Oppgave: 3,
    Tittel: "Oppg 3: Refleksjonsoppgave",
    Tekst: "",
    Type: "Dropdown",
    hasCheckmark: true,
    isChecked: null,
  },
];

let GenerelOppgaveModel = [
  {
    Oppgave: 0,
    Tittel: "",
    Tekst: "",
    Type: "",
    hasCheckmark: null,
  },
  {
    Oppgave: 1,
    Tittel: "",
    Tekst: "",
    Type: "",
    hasCheckmark: null,
  },
  {
    Oppgave: 2,
    Tittel: "",
    Tekst: "",
    Type: "",
    hasCheckmark: null,
  },
  {
    Oppgave: 3,
    Tittel: "",
    Tekst: "",
    Type: "",
    hasCheckmark: null,
    isChecked: "",
  },
];

////////////////////////////////////

const model = {
  brukere: [
    {
      userID: 1,
      name: "Alexander Wiese",
      module: "Start IT",
      email: "alex@Wiese.no",
      totalLvl: 1,
    },
    {
      userID: 2,
      name: "",
      module: "Start IT",
      email: "",
    },
  ],
  temaer: [
    { id: 1, navn: "Trygghet" },
    { id: 2, navn: "Selvkontroll" },
    { id: 3, navn: "skdjhfsd" },
    { id: 4, navn: "dflhdsk" },
  ],
  utførteOppgaver: [
    { oppgaveId: 0, temaId: 1, svar: "fhjg", userId: 1 },
    { oppgaveId: 1, temaId: 1, svar: "fhjg", userId: 1 },
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
      Tittel: "Oppg 1: Hva er trygghet",
      Tekst: "",
      Type: "DropDown",
      hasCheckmark: false,
      isChecked: null,
    },
    {
      Oppgave: 2,
      Tittel: "Oppg 2: Hvorfor er trygghet viktig?",
      Tekst: "",
      Type: "DropDown",
      hasCheckmark: false,
      isChecked: null,
    },
    {
      Oppgave: 3,
      Tittel: "Refleksjonsoppgave",
      Tekst: "Reflekter på hva du har gjort idag",
      Type: "Egentekst",
      hasCheckmark: true,
      isChecked: null,
    },
    {
      Oppgave: 4,
      Tittel: "Intro til Selvkontroll",
      Tekst:
        "Hva er din definisjon av selvkontroll? Diskuter dette i gruppen, og skriv ned hva dere tenker.",
      Type: "Dropdown",
      hasCheckmark: false,
      isChecked: null,
      temaId: 2,
    },
    {
      Oppgave: 5,
      Tittel: "Oppg 1: Hva er god selvkontroll?",
      Tekst: "",
      Type: "Dropdown",
      hasCheckmark: true,
      isChecked: null,
    },
    {
      Oppgave: 2,
      Tittel: "Oppg 2: Når får du bruk for selvkontroll?",
      Tekst: "",
      Type: "Dropdown",
      hasCheckmark: true,
      isChecked: null,
    },
    {
      Oppgave: 3,
      Tittel: "Oppg 3: Refleksjonsoppgave",
      Tekst: "",
      Type: "Dropdown",
      hasCheckmark: true,
      isChecked: null,
    },
  ],
};

function hentOppgaverForTema(temaId) {
  let oppgaver = [];
  for (let oppgave of model.oppgaver) {
    if (oppgave.temaId == temaId) {
      oppgaver.push(oppgave);
    }
  }tema
  return oppgaver;
}

function sjekkStatusForTemaOgBruker(temaId, userId) {
  let oppgaver = hentOppgaverForTema(temaId);
  return {
    userId: userId,
    totaltAntallOppgaver: oppgaver.length,
    antallUtførteOppgaver: hentUtførteOppgaver(temaId, userId),
  };
}

function hentUtførteOppgaver(temaId, userId) {
  let oppgaver = [];
  for (let oppgave of model.utførteOppgaver) {
    if (oppgave.temaId == temaId && oppgave.userId == userId) {
      oppgaver.push(oppgave);
    }
  }
  return oppgaver;
}
