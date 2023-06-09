let Progressbar1 = 0;
let Progressbar2 = 0;
let Progressbar3 = 0;

function updateProfilepageView() {
  return /* Html */ `
  <div class="ProfilepageContainAll">
  <div id="ProfilePic" ><img id="img1" src="img/${findUser(model.app.loggedInUser).imgSrc}"></div>
  <div id="ProfileName"><b>${findUser(model.app.loggedInUser).firstname} ${findUser(model.app.loggedInUser).lastname}</b></div>
  <div id="StartIT"><b>${findUser(model.app.loggedInUser).klasse}</b></div>
  <div id="Progressbars"></div>
  <div id="Bars">${updateBars()}</div>
  </div>
  `;
}


function updateBars() {
  let theme1progression =
    model.app.loggedInUser.utførteOppgaver /
    model.app.loggedInUser.oppgaver /
    100;
    
    
  let html = /* html */ `
  <div class="ProfilePage-ProgressBars">
    <label for="bar1">Tema 1: Trygghet</label>
    <progress value="${findProg()}" max ="${model.oppgaver[0,1,2,3]}"></progress>
    <!--<progress id = "bar1" class="bars" value="4" max="4"></progress>-->
    
    
    <label for="bar2">Tema 2: Growth mindset</label>
    <progress value="${findProg()}" max ="${model.oppgaver[4,5,6,7]}"></progress>
    <!--<progress id = "bar2" class="bars" value="12" max="100"></progress>-->
    
    <label for="bar3">Tema 3: Mikrovaner</label>
    <progress value="${findProg()}" max ="${model.oppgaver[8,9,10,11]}"></progress>
    <!--<progress id = "bar3" class="bars" value="76" max="100"></progress>-->
  </div>
`
  return html;
}

/* function updateBarsWithIf(){
  let html = "";
  if(model.oppgaver[0,1,2,3] == "done"){
    findProg() += 25
  }
  else if(model.oppgaver[4,5,6,7] == "done"){
    findProg() += 25
  }
  else{
    findProg() += 25
  }
} */
