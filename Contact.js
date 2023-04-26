//Contact.js
export default class Contact {

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
        //showMessage("We're not sending emails yet...feature for version 2.");
        document.getElementById("formInfo").innerHTML = "We're not sending emails yet...feature for version 2.";
    }

    formatMessage() {
        //return `This is a string`;
        return `To: ${this.fullName}
                Email: ${this.email}
                Subject: ${this.subject}
                Body: ${this.message}`;
    }
}