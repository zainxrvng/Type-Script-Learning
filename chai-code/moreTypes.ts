let response: any = "42";

let numerricLenght: number = (response as string).length;

type book = {
  name: "string";
};

let bookString = '{"name": "who moved my cheese"}';
let bookObject = JSON.parse(bookString) as book;

console.log(bookObject.name);

const inputelement2 = document.getElementById("username") as HTMLInputElement;

let value: any;

value = "zain";
value = 19;
value = [1, 2, 3];

value.toUpperCase();

let newValue: unknown;

newValue = "zain";
newValue = 19;
newValue = [1, 2, 3];


if (newValue === "string") {
  newValue.toUpperCase()
}


try {
  
} catch (error) {
  if (error instanceof Error) {
    console.log(error.message);
  }
  console.log(error);
  
}


type Role = "admin" | "user" | "superAdmin"

function redirectUserBasedOnRole (role: Role) : void{

  if (role === "admin") {
    console.log("redirecting to admin panel");
    return
  }

  if (role === "user") {
    console.log("redirecting to user panel");
    return
  }
role;
}