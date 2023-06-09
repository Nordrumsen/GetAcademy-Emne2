const model = {
    // tilstand app
    app: {},
  
    // input felter til hver side
    inputs: {
      productPage: {
  
      }
    },
  
  
    // data
    products: [
      {
          id: 1,
          title: 'Spørreundersøkelse',
          checkbox1: '?',
          checkbox2: ''
      },
      {
          id: 2,
          title: '1. Har du til til påskeeggjakt i juleferien?',
      },
      {   id: 3,
          title: '2. Spørsmål',
          undertitle: 'Når passer det best med felles-møte?',
          checkbox1: 'Mandag 12.mars',
          checkbox2: 'Tirsdag 13.mars',
          checkbox3: 'Onsdag 14.mars',
          checkbox4: 'Torsdag 15.mars',
          inputfield: 'Hvis ingen dager passer, skriv en dagsom passer her:'
      },
      {
          id: 4,
          title: '3. Spørsmål',
          undertitle: 'hvilket klokkeslett passer best den dagen du valgte?',
          checkbox1:'10.00',
          checkbox2:'12.30',
          checkbox3:'14.00',
          checkbox4:'14.30'
      }
  
    ],
  
  
      productsAdmin: {
      [ 
      {
          id: 1,
          title: 'Spørsmål 1',
          meningsmålingBar: [
              'bar 1', 
              'bar 2', 
              'bar 3'
          ],
          meningsmålingTall: [
              'meningsmålingTall: 1' ,
              'meningsmålingTall: 2' ,
              'meningsmålingTall: 3' 
          ],
          button: 'Last ned PDF',
      },
      {
          id: 2,
          checkbox: 'Rediger spørsmål',
          text: 'Denne meningsmålingen lukkes om 3 dager, 3 t, 4 min.',
          checkboxxx: 'Avslutt målingen nå'
      } 
      ]
   }
  };
  //--------------------------------------------------------------------------------------------------------------------------let Alex = [
  {
      id: 1,
      name: "Alex",
      adresse: "gateveien 4",
      nummer:"94888984",
  },
  {
      name: "Marlene"
  }

] 




let Marlene = [
{
  namer: 'Objekt 1',
  adresse: 'marleneveien 15',
  adresse2: 'Bettinaveien 5',
  adresse3: 'Alexveien 10', 
  Nummer: '94243652',
}
,
{
  name: 'Objekt 2'
}

]






let Bettina= [
  {
      name:"objekt1",
      adresse:"Bettinavei 8",
      adresse2:"Marlenevei 6",
      adresse3:"Sandravei 3",
      nummer:"94986382",
  }
  ,
  {
      name:"objekt2"
  }
]







/* Philip */
const mymodel = {

app: {},

input: {},

spørreundersøkelser: [
  {
    id: 1,
    tittel: 'Spørreundersøkelse',
    spørsmål: [
      {
        spmId: 1,
        spmTxt: 'Har du tid til påskeeggjakt i juleferien?',
      },
      {
        spmId: 2,
        spmTxt: 'Når passer best med felles møte?',
        spmAlternativer: [
          {
            altId: 1,
            altTxt: 'Mandag 12.mars',
          },
          {
            altId: 2,
            altTxt: 'Tirsdag 13.mars',
          },
          {
            altId: 3,
            altTxt: 'Onsdag 14.mars',
          },
          {
            altId: 4,
            altTxt: 'Torsdag 15.mars',
          },
          {
            altId: 5,
            userAnswer: true,
            altTxt: "Annet"
          }
        ]
      },
      {

      }]
  }]

}