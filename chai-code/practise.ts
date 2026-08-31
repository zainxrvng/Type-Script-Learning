// 1. Union Types — Basics

// Write a function formatId that accepts an id which can be either a number or a string, and returns it as a string. If it's a number, pad it to 5 digits with leading zeros (e.g. 42 → "00042"). If it's a string, just return it uppercased.

function formatId (id: string | number) {

  if (typeof id === "number") {
    const newID = id.toString().padStart(5, "0")

    return console.log(newID);
    
  }
  return console.log(id.toUpperCase())
}

formatId(20)
formatId("zain")




// 2. Narrowing with typeof

// Write describeValue(value: string | number | boolean) that returns a sentence describing the value differently depending on its type (e.g. "It's a string of length 4").

// Hint: Use an if/else if chain with typeof value === "...". Try adding a final else — what does TypeScript think value's type is there? (This is a good place to explore exhaustiveness.)