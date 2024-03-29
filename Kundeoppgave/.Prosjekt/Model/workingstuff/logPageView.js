function goToLogPage() {
  model.app.currentPage = "logPage";
  model.inputs.logPage = {
    whatHaveYouLearnedToday: "",
    selectedWeek: 1,
    selectedDay: 1,
    answers: [],
  };
}

function updateViewLogPage() {
  if (findUser(model.app.loggedInUser).klasse === "Admin") {
    //console.log("#LOG_UPDATED")
    //model.users?

    let html = "";
    console.log("ettellerannet" + model.adminUserLog);

    html = /* Html */ `
    <ul id="VivilviseElevLista">
    ${enElevListe()}${model.elevLogg}
    </ul>
   
    
   
    `;
    /*  if(!model.adminUserLog){
      html = `${enElevListe()}${model.elevLogg}`;
    }
    else{console.log("hei"+model.elevLogg)
      html = model.elevLogg
    }
 */

    console.log(html);

    return html;
  } else {
    let html = /*HTML*/ `
  <div class="LoggPage-container">

  <h2 id="LoggOverskrift">Logg</h2>

  <div id="Ukerogdager-container">
    <div id="ukervalg-container">${createWeeksHtml()}</div>
    <div id="dagervalg-container">${createDaysHtml()}</div>
  </div>

    <div id = "textfield-logPage">
      <textarea id = "textfield-logPage-textarea" oninput="model.inputs.logPage.whatHaveYouLearnedToday=this.value"
            >${model.inputs.logPage.whatHaveYouLearnedToday}
      </textarea>
    </div>
        
      <div>${createQuestionsHtml()}</div>

      <div id ="sendloggcontainer"><button id="sendloggknapp" onclick="saveLog()">Send inn dagens logg</button>
  </div></div>
    `;
    return html;
  }
}

//spørsmål til mandag:
//1. problem med index, folk synes ikke på admin sin loggside
//
function enElevListe() {
  let html = "";
  for (let i = 0; i < model.users.length; i++) {
    if (model.users[i].userId !== "admin") {
      html +=
        /*html*/
        ` <ul onclick="visLoggForBruker(${i})">${model.users[i].firstname}  ${model.users[i].lastname}</ul>`;
    }
  }
  return html;
}

function visLoggForBruker(index) {
  let user = model.users[index];
  model.adminUserLog = user;
  console.log(model.adminUserLog);
  let logs = model.log.filter((x) => x.userId == user.userId);
  for (let i = 0; i < logs.length; i++) {
    model.elevLogg = /* html */ `
    
    <div>

    <div class ="Loggsvartekst">
    ${logs[i].whatHaveYouLearnedToday}
    </div>
    </div>
    
    <div>
    ${logs[i].answers}
    </div>
    
    </div>
    
   
    

    `;
  }
  updateView();
}

function lastLogEntries() {
  let html = "";
  for (let index = 0; index < log.length; index++) {
    html += /* HTML */ ` 
    </div>
    <div>${model.log.whatHaveYouLearnedToday[i]}
    </div>

    `;
  }
  return html;
}

//hvis bruker er admin vis studenter og utfylt logg
//hvis bruker er elev vis loggside og current loggutfylling
function createWeeksHtml() {
  let html = "";
  for (let weekNo = 1; weekNo < 9; weekNo++) {
    let style =
      model.inputs.logPage.selectedWeek == weekNo
        ? "background-color: orange"
        : "";
    html += /*HTML*/ `
            <button 
                onclick="logPageSelectWeek(${weekNo})"
                style="${style}"
                >
                Uke ${weekNo}
            </button>
        `;
  }
  return html;
}

function createDaysHtml() {
  let html = "";
  for (let dayNo = 1; dayNo < 6; dayNo++) {
    // let style = model.inputs.logPage.selectedDay == dayNo ? 'background-color: lightgreen' : '';
    let style = "";
    if (model.inputs.logPage.selectedDay == dayNo)
      style = "background-color: rgb(160, 215, 222)";
    html += /*HTML*/ `
            <button 
                onclick="logPageSelectDay(${dayNo})"
                style="${style}"
                >
                Dag ${dayNo}
            </button>
        `;
  }
  return html;
}

function createQuestionsHtml() {
  let html = "";
  for (
    let questionIndex = 0;
    questionIndex < model.mainQuestions.length;
    questionIndex++
  ) {
    let question = model.mainQuestions[questionIndex];
    let currentValue = model.inputs.logPage.answers[questionIndex] || 5;
    let starsHtml = "";
    for (let starNo = 1; starNo < 10; starNo++) {
      starsHtml += /*HTML*/ `
                <button id ="Ukerogdager-container"                    
                    onclick="selectStars(${questionIndex}, ${starNo})">
                    ${starNo <= currentValue ? "★" : "☆"}
                </button>
            `;
    }
    html += /*HTML*/ `
            <b class ="stjerneknapper">${question}</b><br/>
            <div>
                ${starsHtml} (${currentValue}/9)
            </div>
        `;
  }
  return html;
}

// if( sånn og sånn) {
//     a = 1;
// } else {
//     a = 2;
// }

// a = sånn og sånn ? 1 : 2;
