const app=document.getElementById("app");




function updateView(){
    switch(model.app.currentPage){
        case"frontPage":
            app.innerHTML= updateDashboard();
            break;
        case"loginPage":
            app.innerHTML= updateViewLoginPage();
            break;
        case"logPage":
            app.innerHTML= updateDashboard() + updateViewLogPage();
            break;
        case"profilePage":
            app.innerHTML= updateDashboard() + updateProfilepageView();
            break;
        case"newUserPage":
            app.innerHTML= updateDashboard() + updateViewNewUserPage();
            break;
        case"topicPage":
            app.innerHTML= updateDashboard() + updateViewTopicPage();
            break;
        case"elevListePage":
            app.innerHTML= updateDashboard() + updateElevListeView();
            break;
        case"chatPage":
            app.innerHTML= updateDashboard() + updateChatPageView();
            break;
    }
}
window.onload = updateView();