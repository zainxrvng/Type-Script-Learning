// functions types 

// function hello (name: string, cb: (value:string) => void){
//   cb("max")
// }


// hello("harsh", (value:string) => {
//   console.log(value)
// })


// opptional and defualt parameters

function abc (name: string = "zain", age:number, gender?:string) {
  console.log(name,age,gender);
  
}

abc('',20,"male")