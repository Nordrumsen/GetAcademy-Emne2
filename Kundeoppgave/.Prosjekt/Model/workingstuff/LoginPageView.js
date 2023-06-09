function updateViewLoginPage() {
    
    console.log("#loginPageView_UPDATED")
    let html = /*HTML*/ `
<div class="loginPageHeader">NØKKELKOMPETANSE</div>
<div id ="loginPageView"> 
<div class="loginPageUndertittel">Logg in med Get Academy Bruker</div>
<div class="loginPageErrorMsg">
            ${model.inputs.loginPage.errorMessage}
        </div>
        <input 
        class="loginPageInputs" 

            placeholder="brukernavn"
            type="text" 
            value="${model.inputs.loginPage.userId || ""}"
            oninput="model.inputs.loginPage.userId = this.value"
            /><br/>


        <input 
            placeholder="passord"
            class="loginPageInputs" 
            type="password" 
            value="${model.inputs.loginPage.password || ""}"
            oninput="model.inputs.loginPage.password = this.value"
            /><br/>


        
        <button class="loginPageBtns" onclick="logIn()">Logg inn</button>
`;
return html;
}
