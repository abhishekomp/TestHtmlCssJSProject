// //Index.js
// var number = 50;
// let myName = "Abhishek ";
// //document.writeln("Hello World");
// //document.writeln(number);
// document.writeln(myName + number);
// //alert("Hello World");

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
let today = new Date("04/29/2023");
let dayOfWeek = today.getDay();
// dayOfWeek as 0,1.2,3,4,5,6
if(dayOfWeek === 0 || dayOfWeek === 6) {
    showMessage("Since it is a weekend, please be patient with my returning your email.");
}

function showMessage(message) {
    document.writeln("<p>" + message + "</p>");
    document.writeln("<hr/>")
}

