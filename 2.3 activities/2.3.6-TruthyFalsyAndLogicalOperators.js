// Logical Operators
// ? what do you expect each line to print?
// console.log(true && false); // false
// console.log(true || false); //true
// console.log(!true); //false
// console.log(!(true && false)); //true 
// console.log(false || !false);  //true

// Logical Operators and Truthy/Falsy
// ? what do you expect each line to print?
// console.log("" && 0); //false
// console.log(undefined || null);
// console.log(!``);
// console.log(!(1 && "false"));
// console.log(NaN || !"true");

// ? TO DO: set the age variable equal to a number, then use the conditional operator to construct an expression that returns "full menu" if the age is over 10, and "kids menu" if the age is less than 10
let age;
// age = 25;
// if (age > 10) {
//     console.log("full menu");
// } else {
//     console.log("kids menu");
// }

// age > 10 ? console.log("full menu") : console.log("kids menu");


// ? TO DO: using only logical operators (no comparison operators), write an if statement that prints "The number is zero" when num is 0.
let num = 0;
// * your if statement here *
!num ? console.log("the number is 0") : null;