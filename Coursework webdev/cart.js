//import { products } from "./product";

 export let cart = JSON.parse(localStorage.getItem('cart'));
 if(!cart){
    cart = [{
    },{
    }];
 }
 

export function addToCartPro(productID) {
    let matchingItem = cart.find(cartItem => cartItem.productsId === productID);
    if (matchingItem) {
        matchingItem.quantity += 1;

    } else {
        cart.push({
            productsId: productID,
            quantity: 1,
        });
    }
    saveItem();
}
export function removeFromCart(productId) {
    console.log("Before removal:", cart);
    cart = cart.filter(cartItem => cartItem.productsId !== productId);
    console.log("After removal:", cart);
    saveItem()
}

function saveItem(){
    localStorage.setItem('cart', JSON.stringify(cart));
}