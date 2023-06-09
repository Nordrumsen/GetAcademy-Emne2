//VIEW

//byttSide(newUserPage);
function updateViewNewUserPage() {
  //let pissName = model.inputs.newUserPage.firstname;
  //let JævligPåRiktig = IlleBraDetSeMarlene;
  
  let html = /*html*/ `
<h2>Legg til ny bruker</h2>

<div class="newUserPageBox">
<div class="newUserInputs">Fornavn<input onchange="model.inputs.newUserPage.firstname = this.value" type="text"> </div> <br>
<div class="newUserInputs">Etternavn<input onchange="model.inputs.newUserPage.lastname = this.value" type="text"></div><br>
<div class="newUserInputs">Telefon<input onchange="model.inputs.newUserPage.phoneNumber = this.value" type="tel"></div><br>
<div class="newUserInputs">Postnr<input onchange="model.inputs.newUserPage.postalCode = this.value" type="text"></div><br>
<div class="newUserInputs">E-post<input onchange="model.inputs.newUserPage.eMail = this.value" type="email"></div><br>
<div class="newUserInputs">Klasse<input onchange="model.inputs.newUserPage.klasse = this.value" type="text"></div><br>
<div class="newUserInputs">Passord<input onchange="model.inputs.newUserPage.password = this.value" type="text"></div><br>
<div class="newUserInputs">Bilde<input onchange="model.inputs.newUserPage.img = this.value" type="text"></div><br>
</div>

<img class="newUserPagePicture" src="" alt="">
<div class="newUserPageButtons">
<button onclick="lagreBruker()">Lagre</button>
<button onclick="velgBilde()">Velg bilde</button>
<form action="/action_page.php">
        <label for="img_file">Velg bilde</label>
        <input type="file" id="img_file" name="img_file" accept="image/*">
        <input type="submit">
    </form>
</div>
`;
return html;
}


//CONTROLLER
function lagreBruker(){
    model.users.push(model.inputs.newUserPage)
}

/* function lagreBruker(){
  når noen trykker på lagre, så skal all informasjonen til brukeren + bilde? legges til i model.users og få en id...?
} */

/* newUserPage: {
    firstname: "",
    lastname: "",
    phoneNumber: "",
    postalCode: "",
    eMail: "",
    klasse: "", //Start IT, Get IT
    img: {
      imgSrc: "",
      imgName: "",
    } */
