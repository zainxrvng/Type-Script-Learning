// union is basicaly when we want to have 2 different types in one

let subs: string | number = 1 + "M"

let apiRequestStatus : "pending" | "success" | "failed" = "pending"

let orders = ["10", "20", "30"]

let currentOrder: string | undefined;

for(let order of orders ) {
  if (order === "30") {
    currentOrder = order
    break
  }
}

console.log(currentOrder)