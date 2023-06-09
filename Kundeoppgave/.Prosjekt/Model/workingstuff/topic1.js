function updateViewTopicPage() {
  let oppgaver = nytesthehe();
  console.log(oppgaver);
  let html = ``;
  html += /* html */ `
  <div id="container">
  
    <div class="BytttemaknapperContainer">
      <button class="Bytttemaknapper" onclick="changeTopicLast()">Forrige tema</button>
      <button class="Bytttemaknapper" onclick="changeTopicNext()">Neste tema</button>
    </div>
    
    <div id="Temaoverskriftnavn">${
      model.temaer[model.nåverendeTema - 1].navn
    }</div>
    <div id="colum0" class="colums">

        <div class = "Oppgaveoverskrift">${oppgaver[0].Tittel}</div> 
        <div class = "Oppgavetekst">${oppgaver[0].Tekst}</div>
        <div id="videoplayer">Se videoen under for å lære mer om tema:<br>${
          oppgaver[0].videoLink || ""
        }</div>
  
      </div>
          

      <div id="colum1" class="colums">

        <div class = "Oppgaveoverskrift">${oppgaver[1].Tittel}</div>
        <div class = "Oppgavetekst">${oppgaver[1].Tekst}</div>
    
      </div>


      <div id="colum2" class="colums">

        <div class = "Oppgaveoverskrift">${oppgaver[2].Tittel}</div> 
        <div class = "Oppgavetekst">${oppgaver[2].Tekst}</div>
        <input id="t1s1" type="checkbox">
        <label for="t1s1">${oppgaver[2].SvarAlt[0]}</label>
        <input id="t1s2" type="checkbox">
        <label for="t1s2">${oppgaver[2].SvarAlt[1]}</label>
        <input id="t1s3" type="checkbox">
        <label for="t1s3">${oppgaver[2].SvarAlt[2]}</label>
        <input id="t1s4" type="checkbox">
        <label for="t1s4">${oppgaver[2].SvarAlt[3]}</label>
    
      </div>
      

      <div id="colum3" class="colums">
          <div class = "Oppgaveoverskrift">${oppgaver[3].Tittel}</div>
          <div class = "Oppgavetekst">${oppgaver[3].Tekst}</div>
          <textarea name="refleksjonsOppgaveTema1" id="refleksjonsOppgaveTema1" cols="30" rows="10"></textarea>
          <button class="Bytttemaknapper" onclick="">Lagre</button>
      </div>

</div>
    `;
  return html;
}

function nytesthehe() {
  let OppgaverFilter = model.oppgaver.filter(
    (x) => x.temaId == model.nåverendeTema
  );
  console.log(OppgaverFilter);
  return OppgaverFilter;
}

function changeTopicNext() {
  model.nåverendeTema++;
  updateView();
}
function changeTopicLast() {
  model.nåverendeTema--;
  updateView();
}
//CONTROLLER
//funksjon laget til tema knapper:
//den skal svare på et onclick på en tema knapp:
/* function changeTopic(Tema) {
  for (let i = 0; i < model.oppgaver.length; i++) {
    if (changeTopic.clicked == tema2){
        //i et eller annet sted?
        colum0.model.oppgaver[0].Tema.[] = [4];
        
    }
  }
  
}
function changeTopicMarlene(){
    if(changeTopicMarlene == tema2)
    ${model.oppgaver[0].Tema} = ${model.oppgaver[4].Tema}       
    ${model.oppgaver[0].Tittel} = ${model.oppgaver[4].Tekst}       
    ${model.oppgaver[0].Tekst} = ${model.oppgaver[4].Tekst}  
    
    ${model.oppgaver[1].Tittel} = ${model.oppgaver[5].Tittel}
    ${model.oppgaver[1].Tekst} = ${model.oppgaver[5].Tekst}
}*/

/* function changeTopic2TwoAlex(Tema) {

    let valgtTemaColum0 = document.getElementById('colum0').innerHTML = 
    `<div>${model.oppgaver[4].Tema}</div>
    <div>${model.oppgaver[4].Tittel}</div>`

    let valgtTemaColum1 = document.getElementById('colum1').innerHTML = 
    `<div>${model.oppgaver[5].Tema}</div>
    <div>${model.oppgaver[5].Tittel}</div>`


    let valgtTemaColum2 = document.getElementById('colum2').innerHTML = 
    `<div>${model.oppgaver[6].Tema}</div>
    <div>${model.oppgaver[6].Tittel}</div>`


    let valgtTemaColum3 = document.getElementById('colum3').innerHTML = 
    `<div>${model.oppgaver[7].Tema}</div>
    <div>${model.oppgaver[7].Tittel}</div>`



    for (let i = 0; i < model.oppgaver.length; i++) {
      if (Tema == "Tema2"){
        valgt
        
      }
    }
  }

function saveProgress() {
  //Ta informasjonen fylt ut av bruker og lagre til modell
} */

//Vi må ta inputs, og pushe til model
//det skal pushes til utførte oppgaver
//vi finner ut totalen av hvor mange oppgaver det er
//Vi setter en progresjonsbar som bruker totalen av oppg
//den progresjonsbaren kan vi også sette til dasjbord
//og til "Min side"
