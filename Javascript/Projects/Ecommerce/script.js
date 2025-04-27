document.addEventListener("DOMContentLoaded", () => {
  const addToCartButton1 = document.getElementById("product-1-btn");
  const addToCartButton2 = document.getElementById("product-2-btn");
  const addToCartButton3 = document.getElementById("product-3-btn");
  const addToCartButton4 = document.getElementById("product-4-btn");
  const addToCartButton5 = document.getElementById("product-5-btn");
  const addToCartButton6 = document.getElementById("product-6-btn");
  const product1Price = document.getElementById("product-1-price");
  const product2Price = document.getElementById("product-2-price");
  const product3Price = document.getElementById("product-3-price");
  const product4Price = document.getElementById("product-4-price");
  const product5Price = document.getElementById("product-5-price");
  const product6Price = document.getElementById("product-6-price");
  const product1 = document.getElementById("product-1-name");
  const product2 = document.getElementById("product-2-name");
  const product3 = document.getElementById("product-3-name");
  const product4 = document.getElementById("product-4-name");
  const product5 = document.getElementById("product-5-name");
  const product6 = document.getElementById("product-6-name");
  const checkoutButton = document.getElementById("checkout-btn");

  let total = 0;
  const cart = [];

  // Function to add product to cart
  function addToCart(product, productPrice, productName) {
    let textPrice = productPrice.textContent;
    let value = textPrice.replace("₹", "");
    total += Number(value);

    cart.push({ product: productName, price: textPrice });
    whatIsInCart(productName, textPrice);

    // Display total price
    console.log(total);
    removeCartMessage();
    showTotalPrice();
    showCheckoutButton();
  }

  function whatIsInCart(productName, productPrice) {
    const li = document.createElement("li");
    li.textContent = `${productName} - ${productPrice}`;
    li.classList.add("text-gray-300");
    li.classList.add("cursor-pointer");
    const ul = document.getElementById("cart-items");
    ul.appendChild(li);
  }

  function removeCartMessage() {
    const cartEmptyMessage = document.getElementById("cart-summary");
    if (cart.length !== 0) {
      cartEmptyMessage.classList.add("hidden");
    }
  }

  function showTotalPrice() {
    const priceElement = document.getElementById("total-price");
    priceElement.textContent = `Your total is : ₹${total}`;
    priceElement.classList.remove("hidden");
    removeCartMessage();
  }

  function showCheckoutButton() {
    const checkoutBtn = document.getElementById("checkout-btn");
    if (cart.length !== 0) {
      checkoutBtn.classList.remove("hidden");
    }
  }

  function resetCart() {
    cart.length = 0;
    const checkout = document.getElementById("checkout-btn");
    checkout.classList.add("hidden");
    const ul = document.getElementById("cart-items");
    ul.innerText = "";
    const priceElement = document.getElementById("total-price");
    priceElement.innerHTML = "";
    const cartEmptyMessage = document.getElementById("cart-summary");
    cartEmptyMessage.classList.remove("hidden");
  }

  addToCartButton1.addEventListener("click", () =>
    addToCart(product1, product1Price, product1.textContent.trim())
  );
  addToCartButton2.addEventListener("click", () =>
    addToCart(product2, product2Price, product2.textContent.trim())
  );
  addToCartButton3.addEventListener("click", () =>
    addToCart(product3, product3Price, product3.textContent.trim())
  );
  addToCartButton4.addEventListener("click", () =>
    addToCart(product4, product4Price, product4.textContent.trim())
  );
  addToCartButton5.addEventListener("click", () =>
    addToCart(product5, product5Price, product5.textContent.trim())
  );
  addToCartButton6.addEventListener("click", () =>
    addToCart(product6, product6Price, product6.textContent.trim())
  );

  checkoutButton.addEventListener("click", () => {
    alert(`Check out of ₹${total} is done.`);
    resetCart();
  });
});
