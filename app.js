// Chap #09-11

// Question #01
// var city = prompt("Enter your city");

// if(city === "Karachi"){
//     document.write("<h1>Welcome to city lights</h1>")
// }

// Question #02
// var gender = prompt("Enter Your Gender");

// if(gender === "male"){
//     document.write("Good Morning Sir");
// }
// if(gender === "female"){
//     document.write("Good Morning Ma'am");
// }

// Question #03
// var color = prompt("Enter the color of road traffic signal");

// if(color === "red"){
//     document.write("Must Stop");
// }

// if(color === "yellow"){
//     document.write("Ready to move");
// }

// if(color === "green"){
//     document.write("Move now");
// }

// Question #04
// var fuel = prompt("Enter your Car's Fuel in liters");

// if(fuel == 0.25){
//     document.write("Please refill the fuel in your car");
// }

// Question #05 (a)
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
// true

// Question #05 (b)
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// false


// Question #05 (c)
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// false

// if (c === 13) {
//     alert("condition 2 is true");
// }
// true

// if (++c < 14) {
//     alert("condition 3 is true");
// }
// false

// if (c === 14) {
//     alert("condition 4 is true");
// }
// true

// Question #05 (d)
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }

// Question #05 (e)
// if (true) {
//     alert("True");
// }
// output displaying

// if (false) {
//     alert("False");
// }
// output not displaying

// Question #05 (f)
// if ("car" < "cat") {
//     alert("car is smaller than cat");
// }
// true

// Question #06
// var obtnFirtSub = +prompt("Enter Obtain Marks of English");
// var obtnSecSub = +prompt("Enter Obtain Marks of Urdu");
// var obtnThirSub = +prompt("Enter Obtain Marks of Mathematics");
// var totMark = 300
// var obtnMark = obtnFirtSub + obtnSecSub + obtnThirSub;
// var per = obtnMark/totMark*100
// document.write("Total Marks = " + totMark );
// document.write("<br />Obtain Marks = " + obtnMark );

// if(per >= 80){
//     document.write("<br />Percentage = " + per + "%");
//     document.write("<br />Grade = A-one");
//     document.write("<br />Remarks = Excellent");
// }
// else if(per >= 70){
//     document.write("<br />Percentage = " + per + "%");
//     document.write("<br />Grade = A");
//     document.write("<br />Remarks = Good");
// }
// else if(per >= 60){
//     document.write("<br />Percentage = " + per + "%");
//     document.write("<br />Grade = B");
//     document.write("<br />Remarks = You need to improve");
// }
// else if(per <= 59){
//     document.write("<br />Percentage = " + per + "%");
//     document.write("<br />Grade = Fail");
//     document.write("<br />Remarks = Sorry");
// }

// Question #07
// var num = +prompt("Enter any number in the range of 1-10");
// var myNum = 8

// if(num === myNum){
//     document.write("Bingo! Correct answer.");
// }

// else if(++num === myNum){
//     document.write("Close enough to the correct answer.");
// }


// else if(num !== myNum){
//     document.write("Sorry! In-correct answer.");
// }

// Question #08
// var num = +prompt("Enter your number");
// var myNum = num % 3

// if(myNum === 0){
//     document.write("Your number is divisible by 3")
// }
// else{
//     document.write("Your number is not divisible by 3")
// }

// Question #09
// var num = prompt("Enter your number");
// var even = num % 2
// if(even === 0){
//     document.write("Your number is Even")
// }
// else{
//     document.write("Your number is Odd");
// }

// Question #10
// var temp = prompt("Enter The Temprature");
// if(temp >40){
//     document.write("It is too hot outside.");
// }
// else if(temp >30){
//     document.write("The Weather today is Normal.");
// }
// else if(temp >20){
//     document.write("Today’s Weather is cool.");
// }
// else if(temp >10){
//     document.write("OMG! Today’s weather is so Cool.");
// }

// Question #11
var num1 = +prompt("Enter first number");
var num2 = +prompt("Enter second number");
var opt = prompt("Enter Operator");

if(opt == "+"){
    document.write("Your addition is : " + (num1 + num2));
}
else if(opt == "-"){
    document.write("Your subtraction is : " + (num1 - num2));
}
else if(opt == "*" ){
    document.write("Your multiplication is : " + (num1 * num2));
}
else if(opt == "/" ){
    document.write("Your divsion is : " + (num1 / num2));
}
else if(opt == "%"){
    document.write("Your modulus is : " + (num1 % num2));
}

