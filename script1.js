// Write a script that prints “JavaScript is amazing”

const myVar = "JavaScript is amazing";
console.log(myVar);

//Write a script that prints “ NEXTGEN's JavaScript is amazing”:

const myNewVar = "NEXTGEN's " + myVar; //string concatenation
console.log(myNewVar);

// Write a program that declares three variables:
const student = {
    firstName: "Tobi", 
    age: 25, 
    likesJavaScript: true,
};  

console.log(student.firstName);
console.log(student.age);
console.log(student.likesJavaScript); //print each object variable

//Create a variable containing your favorite quote or sentence.
let favoriteQuote = "Social Media is not Real Life";
console.log(favoriteQuote);

const message = "This is my favorite quote:";
console.log(message, favoriteQuote); //print both messages

//Work with Numbers
const num1 = 4;
const num2 = 5;

add = num1 + num2;
substract = num1 - num2;
multiply = num1 * num2;
divide = num1 / num2; //simple arithmetic

console.log(add, substract, multiply, divide); //print all results

//Declare a boolean variable that is true if today is a weekday and false otherwise.
let weekDay = true;

if(weekDay){
    console.log("Today is a weekday");
}
else{
    console.log("It is the WEEKEND! Let's Partyyy!!");
}

//Type conversion
let evidence = false;

evidence = String(evidence); //conversion from type boolean to string

evidence += " claim";
console.log(evidence);

//temperature from celsius to farenheit
let celsius = 20;

let farenheit = (celsius * 9/5) + 32;
farenheit += "F";

console.log(celsius, farenheit);

//Data Type Identification
let lastName = "Tee";
let balance = 1000;
let isStudent = false;

console.log(typeof lastName);
console.log(typeof balance);
console.log(typeof isStudent);














//CLASS

// let x = 10;
// let y = x;
// y = 20;
// console.log(y, x)

// let person = {key: "precious"};

// let personalPerson = person

// personalPerson.key= "razak";

// console.log(person, personalPerson)

let numberArray = [1, 2, 3, 4, 5];

let figureArray = numberArray;

console.log(figureArray);

figureArray[1] = 8;

console.log(figureArray[1]);
console.log(numberArray);
// let fName="ndbdgg"
// console.log(fName.length)


let username;

// username = window.prompt("What's your username");
// console.log(username);

document.getElementById("submitBtn").onclick = function(){
    username = document.getElementById("inputText").value;

    document.getElementById("intro").textContent = `Happy New Year ${username}`;
    document.getElementById("inputText").value = "Enter your Name";
}



// console.log(cartQuantity);

// cartQuantity = cartQuantity++;

// console.log(cartQuantity);

// cartQuantity = ++cartQuantity;
// console.log(cartQuantity);

// let toothBrush = 5;
// let Quantity = window.prompt("how many");
// let totalAmount = toothBrush*Quantity;

// console.log(totalAmount)

// let modulo = 5
// answer = modulo % 2;
//     if (answer = 0){
//         console.log("even")
//     }
//     else{
//         console.log("odd")
//     }



let cartQuantity = 0;
document.getElementById("submitBtn").onclick = function(){

    document.getElementById("number").textContent = cartQuantity++;
}



