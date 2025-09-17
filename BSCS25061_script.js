window.onload = function(){
    if (document.title.toLowerCase().indexOf("home") !== -1){
        alert("Welcome to PandaTech!");
    }
    var y = document.getElementById("year");
    if (y){
        y.innerHTML = new Date().getFullYear();
    }
};

function checkStock(stockId){
    var el = document.getElementById(stockId);
    if (!el) return;

    var name = el.getAttribute("data-name");
    var txt = el.innerText.toLowerCase();

    if (txt.indexOf("in stock") !== -1){
        alert((name || "This product") + " is in stock");
    }else{
        alert((name || "This product") + " is out of stock");
    }
}

function validateForm(){
    var name = document.getElementById("contact-name").value;
    var email = document.getElementById("contact-email").value;
    var message = document.getElementById("contact-message").value;

    if(name === "" || email === "" || message === ""){
        alert("Please fill all fields.");
        return false;
    }
    if(!email.includes('@')){
        alert("Please enter valid email address!");
        return false;
    }
    if(name.includes('0'||'1'||'2'||'3'||'4'||'5'||'6'||'7'||'8'||'9'||'!'||'@'||'#'||'$'||'%'||'^'||'&'||'*')){
        alert("Please enter a valid name!")
        return false;
    }
    alert("Thanks! Your message has been submitted.");
     
    document.getElementById("contact-name").value = "";
    document.getElementById("contact-email").value = "";
    document.getElementById("contact-message").value = "";
    
    return false;
}

function sendMessage(){
    let input = document.getElementById("user-input").value.toLowerCase();
    let chatLog = document.getElementById("chat-log");

    let userMsg = document.createElement("p"); 
    userMsg.textContent = "You: " + input; 
    chatLog.appendChild(userMsg); 

    let reply = getBotResponse(input);

    let botMsg = document.createElement("p"); 
    botMsg.textContent = "Bot: " + reply; 
    chatLog.appendChild(botMsg);
    
    document.getElementById("user-input").value = "";
}

function getBotResponse(input) {
    if (input.includes("hello") || input.includes("hi")) {
        return "Hello!";
    } else if (input.includes("products") || input.includes("price")) {
        return "Please check the Products page.";
    } else if (input.includes("in stock") || input.includes("availability")) {
        return "Click the 'Check availability' button under a product.";
    } else if (input.includes("contact") || input.includes("email")) {
        return "You can email us at bscs25061@itu.edu.pk";
    } else if (input.includes("year")) {
        return "The current year is " + new Date().getFullYear();
    } else {
        return "I am a simple demo bot.";
    }
}
