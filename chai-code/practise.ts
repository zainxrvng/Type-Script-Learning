// 1. Union Types — Basics

// Write a function formatId that accepts an id which can be either a number or a string, and returns it as a string. If it's a number, pad it to 5 digits with leading zeros (e.g. 42 → "00042"). If it's a string, just return it uppercased.

function formatId (id: string | number) {

  if (typeof id === "number") {
    const newID = id.toString().padStart(5, "0")
    console.log(newID);
    return newID
    
  }
  const stringToUpper = id.toUpperCase();
  console.log(stringToUpper);
  return stringToUpper
}

formatId(20)
formatId("zain")




// 2. Narrowing with typeof

// Write describeValue(value: string | number | boolean) that returns a sentence describing the value differently depending on its type (e.g. "It's a string of length 4").

// Hint: Use an if/else if chain with typeof value === "...". Try adding a final else — what does TypeScript think value's type is there? (This is a good place to explore exhaustiveness.)


function describeValue(value: string | number | boolean) {

  if (typeof value === "string") {
    const sText = "hey there sexy this is a string";
    console.log(sText);
    return sText;
  }
  if (typeof value === "number") {
    const sNum = "hey there sexy i am a number";
    console.log(sNum);
    return sNum;  
  }
  const sBool = `hey there sexy i am a boolean ${value}`;
  console.log(sBool);
  return sBool;
}

describeValue("nigga")
describeValue(20)
describeValue(false)


// 3. Narrowing with in

// Given these two shapes:

// ts
 type Dog = { bark: () => void };
 type Cat = { meow: () => void };

// Write makeSound(pet: Dog | Cat) that calls the correct method.

// Hint: You can't use typeof here since both are objects. Look up the in operator for narrowing — "bark" in pet.

function sounds(animal: Dog | Cat) {

  if ("bark" in animal) {
    animal.bark()
  }
  else animal.meow()
}

sounds({bark: () => console.log("wooffff")})
sounds({meow: () => console.log("mewo")})
