function byttSide(incomingPage) {
  model.app.currentPage = incomingPage;
  updateView();
}

function findUser(userID) {
  for (let user of model.users) {
    if (user.userId == userID) {
      return user;
    }
  }
  return "";
}

function logOut() {
  model.app.loggedInUser = "";
  byttSide('loginPage')
  updateView(); // skal endres til currentPage i ferdig produkt.
}

function findProg(){
  let progImgFrontPage = 0;
  for(let i = 0; i < model.utførteOppgaver.length; i++) {
      if (model.app.loggedInUser === model.utførteOppgaver[i].userId)
      {
          progImgFrontPage++
      }
    }
    return progImgFrontPage;
}
