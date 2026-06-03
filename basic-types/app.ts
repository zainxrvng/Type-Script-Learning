// Primative and Referance

// the difference is this

let a = "zain";
let b = a;

//

let c = [1, 2, 3, 4, 5, 6];
let d = c.pop();
console.log(c);

//
//tuples

let arr: [string, number] = ["zain", 20];

// enumerations

enum UserRoles {
  Admin = "zain",
  Guest = "guest",
  Super_Admin = "admin",
}

console.log(UserRoles.Admin);

// any
let t; // this is any
let r: number;

r = 15;
r = "zain";

// unknown it make u check the type later to perfrom specific funtions

let q:unknown;


// void

function zain (): void {
  console.log("zain")
}

// never

function typeNever () :never{
  while (true) {}
}

typeNever()
console.log("hello");

