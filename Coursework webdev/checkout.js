import { cart } from "./cart.js";
import { products } from "./product.js";
import { removeFromCart } from "./cart.js";

let cartsummaryHtml = '';

cart.forEach((cartitems) => {
    let productId = cartitems.productsId;
    let matchingProduct;
    
    products.forEach((product) => {
        if (productId === product.id) {
            matchingProduct = product;
            console.log(matchingProduct);
        }
    });
    
    cartsummaryHtml += `
    <div class="cart-item-container js-cart-item-container-${matchingProduct.id}">
    <div class="delivery-date">
      Delivery date: Tuesday, June 21
    </div>

    <div class="cart-item-details-grid">
      <img class="product-image"
        src="${matchingProduct.image}">

      <div class="cart-item-details">
        <div class="product-name">
          ${matchingProduct.name}
        </div>
        <div class="product-price">$
          ${matchingProduct.priceCents/10}
        </div>
        <div class="product-quantity">
          <span>
            Quantity: <span class="quantity-label">${cartitems.quantity}</span>
          </span>
          <span class="update-quantity-link link-primary">
            Update
          </span>
          <span class="delete-quantity-link link-primary js-delete" data-product-id="${matchingProduct.id}">
            Delete
          </span>
        </div>
      </div>

      <div class="delivery-options">
        <div class="delivery-options-title">
          Choose a delivery option:
        </div>
        <div class="delivery-option">
          <input type="radio" checked
            class="delivery-option-input"
            name="delivery-option-${matchingProduct.id}">
          <div>
            <div class="delivery-option-date">
              Tuesday, June 21
            </div>
            <div class="delivery-option-price">
              FREE Shipping
            </div>
          </div>
        </div>
        <div class="delivery-option">
          <input type="radio"
            class="delivery-option-input"
            name="delivery-option-${matchingProduct.id}">
          <div>
            <div class="delivery-option-date">
              Wednesday, June 15
            </div>
            <div class="delivery-option-price">
              $4.99 - Shipping
            </div>
          </div>
        </div>
        <div class="delivery-option">
          <input type="radio"
            class="delivery-option-input"
            name="delivery-option-${matchingProduct.id}">
          <div>
            <div class="delivery-option-date">
              Monday, June 13
            </div>
            <div class="delivery-option-price">
              $9.99 - Shipping
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`;
});

document.querySelector('.js-order-summary').innerHTML = cartsummaryHtml;
//console.log(cartsummaryHtml);

document.querySelectorAll('.js-delete')
.forEach((link) =>{
    link.addEventListener('click',()=>{
        //console.log(cart);
        console.log("delete");

        const product_id = link.dataset.productId;
        //console.log(product_id)
        removeFromCart(product_id);
        //console.log(cart);
        const container = document.querySelector(`.js-cart-item-container-${product_id}`);
        container.remove();
    })
})
