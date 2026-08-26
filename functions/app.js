"use strict";
// functions types 
Object.defineProperty(exports, "__esModule", { value: true });
// function hello (name: string, cb: (value:string) => void){
//   cb("max")
// }
// hello("harsh", (value:string) => {
//   console.log(value)
// })
// opptional and defualt parameters
function abc(name = "zain", age, gender) {
    console.log(name, age, gender);
}
abc('', 20, "male");
//# sourceMappingURL=app.js.map