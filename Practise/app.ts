// easy
// Fix the types
// The code below has wrong types. Fix the annotations so it compiles cleanly.
// let username: number = "zain";
// let isLoggedIn: string = true;
// let score: boolean = 42;

// Answers 

let username: string = "zain";
let isLoggedIn: boolean = true;
let score: number = 42;

// easy
// Tuple practice
// Declare a tuple type for a coordinate pair [latitude, longitude] — both numbers — and a third element that is a string label.
// declare the tuple type here
// let location: ___ = [24.86, 67.01, "Karachi"];

// ANSWER

let location: [number, number, string] = [24.86 , 67.01, "KARACHI"]


// medium
// Union + literal types
// Write a function setStatus that accepts only the strings "active", "inactive", or "pending" and returns nothing.
// function setStatus(status: ___): ___ {
//   console.log(status);
// }

// answer

 function setStatus(status: "active" | "inactive" |"pending"): void {
   console.log(status);
 }

//  easy
// Annotate the function
// Add explicit parameter and return type annotations to the function below.
// function add(a, b) {
//   return a + b;
// }

 function add(a:number, b:number) {
   return a + b;
 }
 add(2,2)

//  easy
// Optional parameter
// Make the greeting parameter optional with a default of "Hello". Annotate everything explicitly.
// function greet(name: string, greeting): string {
//   return `${greeting}, ${name}!`;
// }


function greet(name: string, greeting?: string): string {
  return `${greeting}, ${name}!`;
}
