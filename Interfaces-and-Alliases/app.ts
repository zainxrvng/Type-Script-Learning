interface User {
  name: string;
  email: string;
  password: string;
  gender?: string;
}

// we use interface when we want to show the type of of data in object

interface Admin extends User {
  admin: string;
  age: number;
}

function getDataOfUser(obj: Admin) {}

// type aliases

let zain: string | number | null; 

// this how we make an custom type
type value = string | number | null

let zain2: value

// so by looking at this we get the idea that instated of the code looking messy and long we can use type aliases like this to make it more readable and they can work on anything


// intersections

// this | is called union

type data = {
  name: string,
  email: string
}

type adminData = data & {
    getDetails(user: string): void
}

function abcd(a:adminData) {
    a.email
}

// the difference between type and interface is that type do not merge like interfaces. type is used to define the type of anything like numbers and string and so on but interfaces are only used to tell the structure of an object