function updateChatVieww(){
  let html = "";
  for (let i = 0; i < model.users.length; i++){
    html += /*HTML*/ `
    <ul id=>
    <div onclick="åpneChat(${i})">${model.users[i].firstname} ${model.users[i].lastname}
    </div>
    </ul>
`;
    
    
  }
  return html;
}
  
function åpneChat(){
  let html = "";
  html += /*HTML*/`
  <div>
    <input oninput="mld() = this.value" type="text">
    <button onclick="sendMld()">Send</button>
    </div>
  `;
}