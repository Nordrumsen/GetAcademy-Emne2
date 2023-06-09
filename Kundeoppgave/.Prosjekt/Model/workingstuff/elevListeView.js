function updateElevListeView() {
  let html = "";
  for (let i = 0; i < model.users.length; i++) {
    html += /*HTML*/ `
     <ul id="Brukervalgelev">
        <div>${model.users[i].firstname} ${model.users[i].lastname} ${model.users[i].klasse}
        <br>
        <button onclick="fremgang(${i})">Se fremgang</button>
        <button onclick="mld(${i})">Send melding</button>
        <button onclick="rediger(${i})">Rediger profil</button>
        </div>
    </ul>
    `;
  }
  return html;
}
