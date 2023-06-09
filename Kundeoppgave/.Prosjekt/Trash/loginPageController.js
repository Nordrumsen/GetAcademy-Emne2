function logIn() {
  if (
    model.inputs.loginPage.userId == "terje" &&
    model.inputs.loginPage.password == "hemmelig"
  ) {
    goToLogPage();
  } else if (
    model.inputs.loginPage.userId == "Elev" &&
    model.inputs.loginPage.password == "Elev123"
  ) {
    goToMenuPage();
  } else {
    model.inputs.loginPage.errorMessage = "feil brukernavn eller passord";
    updateView();
  }
}
/* 
function newLogIn(inputName) {
  if (inputName == findUser(inputName)) {
    console.log(inputName, "if yes");
    goToMenuPage();
  } else 
}
 */
