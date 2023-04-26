// //Index.js
// var number = 50;
// let myName = "Abhishek ";
// //document.writeln("Hello World");
// //document.writeln(number);
// document.writeln(myName + number);
// //alert("Hello World");

const formInfo = document.getElementById("formInfo");
const contactForm = document.getElementById("contactForm");

let hasJob = true;
if (hasJob) {
    //I have a job
    //document.writeln("I currently have an assignment. Thanks for visiting.");
    showMessage("I currently have an assignment. Thanks for visiting.");
} else {
    //I need a job
    showMessage("Please look around. I am looking for an assignment.");
}

//let today = new Date();
let today = new Date("04/26/2023");
let dayOfWeek = today.getDay();
// dayOfWeek as 0,1.2,3,4,5,6
if(dayOfWeek === 0 || dayOfWeek === 6) {
    showMessage("Since it is a weekend, please be patient with my returning your email.");
}

function showMessage(message) {
    //const formInfo = document.getElementById("formInfo");
    formInfo.innerHTML = "<p>" + message + "</p>";
    // document.writeln("<p>" + message + "</p>");
    // document.writeln("<hr/>")
}

function clearMessage() {
    formInfo.innerHTML = "";
}

//Handling event of clicking a button
//const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const contact = new Contact(contactForm);
    //showMessage("Sending your message...");
    contact.send();
});

function sendMessage() {
    showMessage("Please wait, sending your email");
}

//Working with collections
const experiences = document.getElementsByClassName("experience");
for(let i = 0; i < experiences.length; i++) {
    const item = experiences[i];
    item.addEventListener("mouseenter", function(event) {
        event.target.style = "background-color: #999999;";
    });
    item.addEventListener("mouseleave", function(event) {
        event.target.style = "";
    });
}

class Contact {

    constructor(contactForm) {
        this.fullName = contactForm.elements["fullName"].value;
        this.email = contactForm.elements["email"].value;
        this.subject = contactForm.elements["subject"].value;
        this.message = contactForm.elements["msg"].value;
    }

    fullName = "";
    email = "";
    subject = "";
    message = "";

    send() {
        console.info(this.formatMessage());
        showMessage("We're not sending emails yet...feature for version 2.");
    }

    formatMessage() {
        //return `This is a string`;
        return `To: ${this.fullName}
                Email: ${this.email}
                Subject: ${this.subject}
                Body: ${this.message}`;
    }
}
