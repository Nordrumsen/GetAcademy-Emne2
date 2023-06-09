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
  model.app.loggedInUser = false;
  byttSide('loginPage')
  updateView(); // skal endres til currentPage i ferdig produkt.
}
