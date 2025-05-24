import { products } from "./product.js";
import { cart, addToCartPro } from './cart.js';
//import { quantityItems } from "./functions.js";
//import { cartIndicate } from "./functions.js";
//import { addToCart } from "./functions.js";
import { clickButton } from "./functions.js";
//Useing js to generate HTML 




    let productHtml = '';
    // Use document.createElement to create button elements and attach event listeners to them
products.forEach((product) => {
    const productElement = document.createElement('div');
    productElement.classList.add('product-img-class');
    productElement.innerHTML = `
        <div class="product-img-box">
            <img class="product-img " src="${product.image}">
        </div>
        <div class="product-img-tag">
            <div class="product-img-info"><p><b>${product.name}</b>- $${product.priceCents/10}</p></div>
            <div class="incrementer">
                <span class="minus">-</span>
                <span class="num">1</span>
                <span class="plus">+</span>
            </div>
            <button class="${product.profile.cart} js-cart-add cartButton" data-product-id="${product.id}">Add to cart</button>
        </div>`;

    // Add event listener to the newly created button
    const addButton = productElement.querySelector('.js-cart-add');
    addButton.addEventListener('click', () => {
        let data_ID = addButton.dataset.productId;
        addToCartPro(data_ID);
        //cartIndicate(product.cart_name);
        //addToCart(product.cart_name);
        console.log(cart);
        let cartquantity = 0;
        cart.forEach((item)=>{
            cartquantity += item.quantity;
            console.log(cartquantity);

        });
        document.querySelector('.js-quantity').innerHTML = cartquantity;
    });
    

    // Append the product element to the container
    document.querySelector('.js-project-grid').appendChild(productElement);
});
clickButton(); // Call clickButton function