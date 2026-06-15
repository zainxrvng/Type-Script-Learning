// // this is how make classes

// class Device {
//   name = "oneplus";
//   price = 40000;
//   category = "digital";
// }

// let d1 = new Device()
// let d2 = new Device()

// /// constructor

// /// this is the short way to wrote construstor
// class BottleMaker {
//   constructor(public name: string, public price: number) { }
// }

// new BottleMaker("zain", 1200)

// // this is the long way to write the constructor
// class Music {
//   public name;
//   public artist;
//   public thumbnail;
//   public length;
//   public free;
//   constructor(name:string, artist:string, thumbnail:string = "somethumbnail.jpg", length:number, free:boolean ) {
//     this.name = name
//     this.artist = artist
//     this.thumbnail = thumbnail
//     this.length = length
//     this.free = free
//   }
// }

// // this keyword
// class ab {
//   name = "harsh"

//   changeNmae () {
//     this.name
//   }
// }

// // if you want to target the variable in the class but you are in the method or constractor you have to use this.keyword

// // Access Modifers public, Private,

// class carMaker {
//   constructor(public brand: string) {}
// }

// let b1 = new carMaker("Honda");
// b1.brand = "suzuki";

// // right now this can be changed since its delacred in public but if we chane it to private it wont allow us to change the name after being made

// class carMaker1 {
//   constructor(private brand: string) {}
// }

// let c1 = new carMaker1("Honda");
// c1.brand = "suzuki";

// // ahh so the issue is typescript will tell the dev that this is worng but it will still compile and run the code even if its worng typescript give the devs heads up but will still do its job if the devs ingore it

// class inheritance with extend public and private

// class humanMaker {
//   constructor(private name: string) {}
// }

// let m1 = new humanMaker("ali")

// class newHumanMaker extends humanMaker{
// constructor(age: number, race: string) {
//   super(name)
// }
// }

// protected

// class phoneMaker {
//   protected name: string = "redmi 13C"
// }

// class newPhoneMaker extends phoneMaker {
//   public material: string = "metal";

//   changeName() {
//     this.name = "some other name";
//   }
// }

// let b1 = new newPhoneMaker()
// b1.name = 'potty'

// // so protected and private are very simaliar but end of the day they both protect the varibale from being change outside its scope

// readonly
// class user {
//   constructor(public readonly name: string) {}

//   changeName() {
//     this.name = "hello"
//   }
// }

// let u1 = new user("Zain")

// the readonly property will show en error when we later try to change the name but if we comple the code it will still run and still change the name for the propertry as typescrpt will tell the dev something is worng please fix it but will still do it

// Optional properties

// class user {
//   constructor(public name: string, public age: number, public gender?: string) {}
// }

// let u1 = new user("zain", 18, "male")

// // its optional mean the user can just give or not give it wont matter

// // parameter Properties

// class user1 {
//   constructor(
//     public name: string,
//     public age: number,
//     public gender?: string,
//   ) {}
// }

// let u11 = new user("zain", 18, "male");

// // getter and setters

// class user3 {
//   constructor(
//     public name: string,
//     public age: number,
//     public gender?: string,
//   ) {}

//   get Name() {
//     return this.name;
//   }

//   set Name(value: string) {
//     this.name = value
//   }
// }

// let u12 = new user("zain", 18, "male");

// // static members\

// class zain {
//   static version = 1.1

//   static getRnadomNumber() {
//     return Math.random()
//   }
// }

// abstract classes and methods

class payment {
  constructor(protected amount: number, protected account: number) {}
  ispaymentvaild(amount: number) {
    return this.amount > 0;
  }
}


interface zain {
  
}