console.log("Prakhar")
console.log("beautiful")

"use strict"; //treat all JS code as newer version

//alert(3+3) we are using node.js not the browser

console.log(typeof null);
console.log(typeof undefined);


// === strict

//primitive:- call by value
/* 
string, Number, Boolean, null, undefined, symbol, BigInt 
*/
const id = Symbol('123')
const id_b = Symbol('123')
console.log(id === id_b);



//Reference type (Non-Primitive):- call by function

/**
 * Array, Objects, Functions, 
 */

const heros = ["CAP", "Iron", "hulk"];
let myObj = {
    name: "Prakhar",
    age: 21
}

const myfunc = function(){
    console.log("hello world");
    
}


//********************************************************** */

//Stack memory (primitive), heap memory(Non-Primitive)

//stack
let myYoutubeName = "prakhar.com"
let anotherName = myYoutubeName

anotherName = "ChaiwithCode"

console.log(myYoutubeName);
console.log(anotherName);


//heap
let userOne = {
    gmail: "user@gmail.com",
    upi: "one@ibl"
}

let userTwo = userOne

userTwo.gmail = "prakhar@gmail.com"

console.log(userOne.gmail);
console.log(userTwo.gmail);

