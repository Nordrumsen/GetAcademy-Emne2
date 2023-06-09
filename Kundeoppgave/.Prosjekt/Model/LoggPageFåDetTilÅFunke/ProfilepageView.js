let Progressbar1 = 0;
let Progressbar2 = 0;
let Progressbar3 = 0;


function updateProfilepageView() {
  return /* Html */ `
  <div id="ProfilePic" ><img id="img1" style="width:150px" src="img/img1.jpeg"></div>
  <div id="ProfileName">${model.app.loggedInUser.firstname} ${model.app.loggedInUser.lastname}</div>
  <div id="StartIT">${model.app.loggedInUser.klasse}</div>
  <div id="Progressbars"></div>
  <div id="Bars">${updateBars()}</div>
  `;
  
}

function updateBars(){
  let theme1progression = (model.app.loggedInUser.utførteOppgaver/model.app.loggedInUser.oppgaver)/100;
  let html = /* html */`
  <label for="bar1">Tema 1:</label>
  <progress id = "bar1" value="${model.app.loggedInUser.utførteOppgaver}" max="${model.app.loggedInUser.oppgaver}"></progress>
  <label for="bar2">Tema 2:</label>
  <progress id = "bar2" value="12" max="100"></progress>
  <label for="bar3">Tema 3:</label>
  <progress id = "bar3" value="96" max="100"></progress>
`;
  return html;
}



