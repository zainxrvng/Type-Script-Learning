"use strict";
// 1. Type Annotations
const myproduct = {
    id: 1,
    name: "coke",
    price: 200,
    discount: 100
};
function discountApply(myproduct) {
    if (myproduct.discount !== undefined) {
        let discountedPrice = myproduct.price - myproduct.discount;
        console.log(`the item ${myproduct.id} is this and the name of the item is this ${myproduct.name} and the product is this and the products orginal price was this ${myproduct.price} and the after discount its this ${discountedPrice}`);
    }
    else {
        console.log(`the item ${myproduct.id} is this and the name of the item is this ${myproduct.name} and the product is this and the products orginal price was this ${myproduct.price}`);
    }
}
discountApply(myproduct);
