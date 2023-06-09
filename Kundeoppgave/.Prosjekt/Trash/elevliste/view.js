function updateElevListeView() {
    let html = "";
    for (let i = 0; i < model.users.length; i++) {
        html += /*HTML*/`
     <ul>
        ${model.users[i].firstname} ${model.users[i].lastname} ${model.users[i].klasse}
        <button onclick="fremgang(${i})">Se fremgang</button>
        <button onclick="mld(${i})">Send melding</button>
        <button onclick="rediger(${i})">Rediger profil</button>
    </ul>
    `;
    }
    return html;
}