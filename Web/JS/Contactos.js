"use strict"


window.addEventListener("load",function (){
   
    const nameInput = document.getElementById("name");
    const mailInput = document.getElementById("mail");
    const subjectInput = document.getElementById("subject");
    const mesageInput = document.getElementById("mesage");
    const submitButton = document.getElementById("submit");
    const notificationLabel = document.getElementById("notification");
    
    submitButton.addEventListener("click",function (){
        
        let okToSend = true;
        
        if(nameInput.value == ""){
            nameInput.className = "error";
            okToSend = false;
        } else {
            nameInput.className = "";
        }
        if(mailInput.value == "" || mailInput.value.indexOf("@") == -1){
            mailInput.className = "error";
            okToSend = false;
        } else {
            mailInput.className = "";
        }
        if(subjectInput.value == "" || subjectInput.value.length > 30){
            subjectInput.className = "error";
            okToSend = false;
        } else {
            subjectInput.className = "";
        }
        if(mesageInput.value == "" || mesageInput.value.length > 200){
            mesageInput.className = "error";
            okToSend = false;
        } else {
            mesageInput.className = "";
        }
        
        if(okToSend){
            notificationLabel.innerText = "Mensaje enviado con éxito";
            notificationLabel.className="success";
            nameInput.value = "";
            mailInput.value = "";
            subjectInput.value = "";
            mesageInput.value = "";
        } else {
            notificationLabel.innerText = "Hubo un error al enviar el mensaje";
            notificationLabel.className="error";
        }
        
        
    })
    
    
})