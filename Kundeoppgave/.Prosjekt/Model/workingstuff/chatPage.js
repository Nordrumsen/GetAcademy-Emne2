function updateChatView(){
  let html = "";
  for (let i = 0; i < model.users.length; i++) {
    
    //finn alle meldinger som skal til den innlogga brukern
    let chatMessage = model.chatMessages.find(msg => msg.toUserId == model.users[i].userId);
    let chatMessage1 = model.chatMessages.find(msg => msg.fromUserId == model.users[i].userId);
    if (chatMessage == null || undefined) continue;
    if (chatMessage1 == null || undefined) continue;

    html += /*HTML*/ `
    <div>Chatter fra:
    <ul onclick="openChat(${i}), sendMld(${i})">
        ${chatMessage.isRead ? "Lest" : "Ulest"}:
        ${model.users[i].firstname} ${model.users[i].lastname}
      </ul>
    </div>

    <div>Chat mellom deg og ${model.users[i].firstname} ${model.users[i].lastname}
    <input oninput="${model.inputs.chatPage.newMessageInput} = this.value" type="text">
    <button onclick="sendMld()">Send</button>
    </div>
    `;
  };
  return html;
}
console.log("#chatfunction kjørt")

function openChat(index){
  let chatMessage = model.chatMessages.find(msg => msg.toUserId == model.users[index].userId);
  let chatMessage1 = model.chatMessages.find(msg => msg.fromUserId == model.users[index].userId);
  chatMessage.isRead = !chatMessage.isRead;
  chatMessage1.isRead = !chatMessage1.isRead;
  updateView();
}

function sendMld(i){
  //let loggedInUser = findUser(model.app.loggedInUser)
  //loggedInUser.chatMessages.push(model.chatMessages)
  let testbruker = model.users[i].userId
}



  