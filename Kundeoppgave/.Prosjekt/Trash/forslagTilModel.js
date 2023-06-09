const newUserModel = {
    app: {
        currentPage: "new_user",
        isAdmin: true,
    },

    inputs: {
        firstname: "",
        lastname: "",
        phoneNumber: "",
        postalCode: "",
        eMail: "",
        klasse: "", //Start IT, Get IT
        img: {
            imgSrc: "",
            imgName: "",
        }
    },

    data: {

    }
}


const chatModel = {
    app: {
        currentPage: "chat_page",
        isAdmin: true,
    },

    inputs: {
        newMessageInput: "",
    },

    data: {
        chat: [
            {
                userID: 2,
                messageContent: "Hallo, hva er psykologisk trygghet?",
                userImgSrc: "",
            },
        ],
    },
        inbox: [
        {
            UserId: 1,
            name:"@FrideFletter",
            isRead: true,
            messages: [{}]
        },
        {
            UserId: 2,
            name:"@superStudent",
            isRead: false,
            messages: [{}]
        }
    ]
}


const studentPageModel = {
    app: {
        currentPage: "profilePage",
        isAdmin: true || false,
    },

    data: {
        
    }
}


const studentListModel = {
    app: {
        currentPage: "studentList_page",
        isAdmin: true || false,
    },
    inputs:{
        searchBar: "", 
    },
    data:{
        currentFilter: "Start IT",
    }

}

const dashboardModelAdmin = {
    app:{
        currentPage: "dashboard_admin",
        isAdmin: true,
    },
    inputs: {
        
    },
    data: {
        inbox:[],
          
    }
}


const dashboardModelElever = {
    app:{
        currentPage: "dashboard_student",
        isAdmin: false,
    },
    inputs:{

    },
    data:{
        
    }
}



const model = {
    brukere: [
        {
            userID: 1,
            name: "Alexander Wiese",
            module: "Start IT",
            email: "alex@Wiese.no",
            totalLvl: 1,
            userImgSrc: "",
        },
        {
            userID:2,
            name: "",
            module: "Start IT",
            email: "",
            img: {
                imgSrc: "",
                imgName: "",
            }
        },
    ],
    temaer: [
        { id: 1, navn: 'Trygghet' },
        { id: 2, navn: 'Selvkontroll' },
        { id: 3, navn: 'skdjhfsd' },
        { id: 4, navn: 'dflhdsk' },
    ],
    utførteOppgaver: [
        { oppgaveId: 0, temaId: 1, svar: 'fhjg', userId: 1 },
        { oppgaveId: 1, temaId: 1, svar: 'fhjg', userId: 1 },
    ],
    oppgaver: [
        {
            id: 0,
            Tittel: "Intro til trygghet",
            Tekst: "Trygghet er en viktig faktor for smidighet og godt sammarbeid i et team.",
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
            Tekst: "Hva er din definisjon av selvkontroll? Diskuter dette i gruppen, og skriv ned hva dere tenker.",
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
        }
    ]
};

function hentOppgaverForTema(temaId) {
    let oppgaver = [];
    for (let oppgave of model.oppgaver) {
        if (oppgave.temaId == temaId) {
            oppgaver.push(oppgave);
        }
    }
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