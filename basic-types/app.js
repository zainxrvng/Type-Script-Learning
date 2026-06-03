"use strict";
// Primative and Referance
Object.defineProperty(exports, "__esModule", { value: true });
// the difference is this
let a = "zain";
let b = a;
//
let c = [1, 2, 3, 4, 5, 6];
let d = c.pop();
console.log(c);
//
//tuples
let arr = ["zain", 20];
// enumerations
var UserRoles;
(function (UserRoles) {
    UserRoles["Admin"] = "zain";
    UserRoles["Guest"] = "guest";
    UserRoles["Super_Admin"] = "admin";
})(UserRoles || (UserRoles = {}));
console.log(UserRoles.Admin);
// any
let t; // this is any
let r;
r = 15;
r = "zain";
// unknown it make u check the type later to perfrom specific funtions
let q;
// void
function zain() {
    console.log("zain");
}
// never
function typeNever() {
    while (true) { }
}
typeNever();
console.log("hello");
//# sourceMappingURL=app.js.map