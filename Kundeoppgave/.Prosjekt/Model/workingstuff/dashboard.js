let loggOutSvg = `<svg fill="#000000" height="20px" width="20px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
viewBox="0 0 490.3 490.3" xml:space="preserve">
<g>
<g>
<path d="M0,121.05v248.2c0,34.2,27.9,62.1,62.1,62.1h200.6c34.2,0,62.1-27.9,62.1-62.1v-40.2c0-6.8-5.5-12.3-12.3-12.3
   s-12.3,5.5-12.3,12.3v40.2c0,20.7-16.9,37.6-37.6,37.6H62.1c-20.7,0-37.6-16.9-37.6-37.6v-248.2c0-20.7,16.9-37.6,37.6-37.6h200.6
   c20.7,0,37.6,16.9,37.6,37.6v40.2c0,6.8,5.5,12.3,12.3,12.3s12.3-5.5,12.3-12.3v-40.2c0-34.2-27.9-62.1-62.1-62.1H62.1
   C27.9,58.95,0,86.75,0,121.05z"/>
 <path d="M385.4,337.65c2.4,2.4,5.5,3.6,8.7,3.6s6.3-1.2,8.7-3.6l83.9-83.9c4.8-4.8,4.8-12.5,0-17.3l-83.9-83.9
   c-4.8-4.8-12.5-4.8-17.3,0s-4.8,12.5,0,17.3l63,63H218.6c-6.8,0-12.3,5.5-12.3,12.3c0,6.8,5.5,12.3,12.3,12.3h229.8l-63,63
   C380.6,325.15,380.6,332.95,385.4,337.65z"/>
</g>
</g>
</svg>`;

function updateDashboard() {
  console.log("#DASH_UPDATED");
  if (model.app.loggedInUser.klasse === "Admin") {
    console.log("--> Admin dashboard");
    let html = /*HTML*/ `
    <div class="navBar dashboard">
              <div class="navBarLogo" onclick="byttSide('frontPage')">NK</div>
              <div class="navBarItem" onclick="byttSide('topicPage')">Temaer</div>
              <div class="navBarItem" onclick="byttSide('chatPage')">Meldinger</div>
              <div class="navBarItem" onclick="byttSide('newUserPage')">Ny Bruker</div>
              <div class="navBarItem" onclick="byttSide('logPage')">Logg</div>
              <div class="navBarItem" onclick="byttSide('profilePage')">Min Side</div>
              <div class="navBarItem" onclick="byttSide('elevListePage')">Elev liste</div>
              <div>   
                  <div class="navBarUser">${findUser(model.app.loggedInUser).firstname} ${findUser(model.app.loggedInUser).lastname}</div>
                  <div class="navBarUserClassIDAdmin">${findUser(model.app.loggedInUser).klasse}</div>
              </div>
    <div class="navBarItem logOutBtn" onclick="logOut()">${loggOutSvg}</div>
    </div>`;
    return html;
  } else {
    console.log("--> elev dashboard");
    let html = /*HTML*/ `
              <div class="navBar dashboard">
              <div class="navBarLogo" onclick="byttSide('frontPage')">NK</div>
              <div class="navBarItem" onclick="byttSide('topicPage')">Temaer</div>
              <div class="navBarItem" onclick="byttSide('chatPage')">Meldinger</div>
              <div class="navBarItem" onclick="byttSide('logPage')">Logg</div>
              <div class="navBarItem" onclick="byttSide('profilePage')">Min Side</div>
              <div>   
                  <div class="navBarUser">${findUser(model.app.loggedInUser).firstname} ${findUser(model.app.loggedInUser).lastname}</div>
                  <div class="navBarUserClassIDUser">${findUser(model.app.loggedInUser).klasse}</div>
              </div>
              <div class="navBarItem logOutBtn" onclick="byttSide('loginPage')" alt="Log Out">
                ${loggOutSvg}
              </div>
            </div>
                `;

    return html;
  }
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
  byttSide("loginPage");
  updateView(); // skal endres til currentPage i ferdig produkt.
}
