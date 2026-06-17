"use strict";
// 1. Type Annotations
// Write a function greet(name: string, age: number): string that returns a greeting message.
// function hello(name: string, age:number) :string {
//   return `hello my name is ${name} and i am today ${age} years old happy to meet you`
// }
// hello("zain", 20)
// 2. Interfaces
// Create an interface Product with id, name, price, and optional discount. Write a function that applies the discount if present.
// interface productInfo {
//   id: number;
//   name: string;
//   price: number;
//   discount?: number;
// }
// const myproduct :productInfo = {
//   id: 1,
//   name: "coke",
//   price: 200,
//   discount: 100
// } 
// function discountApply(myproduct: productInfo) {
//   if (myproduct.discount !== undefined) {
//     let discountedPrice = myproduct.price - myproduct.discount;
//     console.log(
//       `the item ${myproduct.id} is this and the name of the item is this ${myproduct.name} and the product is this and the products orginal price was this ${myproduct.price} and the after discount its this ${discountedPrice}`,
//     );
//   } else {
//     console.log(
//       `the item ${myproduct.id} is this and the name of the item is this ${myproduct.name} and the product is this and the products orginal price was this ${myproduct.price}`,
//     );
//   }
// }
// discountApply(myproduct)
// . Enums
// Define an enum Direction (Up, Down, Left, Right) and write a function that moves a {x, y} point based on it.
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
function mover(x, y, direction) {
    switch (direction) {
        case Direction.Up:
            y += 1;
            break;
        case Direction.Down:
            y -= 1;
            break;
        case Direction.Left:
            x -= 1;
            break;
        case Direction.Right:
            x += 1;
            break;
    }
    console.log(x, y);
}
mover(1, 0, Direction.Up);
