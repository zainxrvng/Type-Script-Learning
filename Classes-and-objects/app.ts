// this is how make classes 

class Device {
  name = "oneplus";
  price = 40000;
  category = "digital";
}

let d1 = new Device()
let d2 = new Device()


/// constructor

/// this is the short way to wrote construstor
class BottleMaker {
  constructor(public name: string, public price: number) { }
}

new BottleMaker("zain", 1200)

// this is the long way to write the constructor
class Music {
  public name;
  public artist;
  public thumbnail;
  public length;
  public free;
  constructor(name:string, artist:string, thumbnail:string = "somethumbnail.jpg", length:number, free:boolean ) {
    this.name = name
    this.artist = artist
    this.thumbnail = thumbnail
    this.length = length
    this.free = free
  }
}