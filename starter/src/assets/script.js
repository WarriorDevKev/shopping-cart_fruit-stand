const products = [];

const cherry = {
  name: "Cereza",
  price: 3.50,
  quantity: 0,
  productId: 1,
  image: "./images/cherry.jpg",
};

const soursop = {
  name: "Guanabana",
  price: 5.99,
  quantity: 0,
  productId: 2,
  image: "./images/soursop.jpg",
};

const strawberry = {
  name: "Fresa",
  price: 2.99,
  quantity: 0,
  productId: 3,
  image: "./images/strawberry.jpg",
};

const mango = {
  name: "Mango",
  price: .99,
  quantity: 0,
  productId: 4,
  image: "./images/mango.jpg",
};
/* ################################################### 
        Begin addProductToCart Function
   ################################################### 
*/

// Add products to products array
products.push(cherry, soursop, strawberry, mango);

const cart = [];

function addProductToCart(sku) {
  // Find the product by SKU
  const product = products.find((p) => p.productId === sku);

  // Check if the product is already in the cart
  const cartItem = cart.find((item) => item.productId === sku);

  if (cartItem) {
    cartItem.quantity++;
  } else {
    // Add the product to the cart with quantity of 1
    cart.push({
      productId: product.productId,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image,
    });
  }

}
/* ################################################### 
        Begin increaseQuantity Function
   ################################################### 
*/
function increaseQuantity(productId) {
  // Find the product in the cart by its productId
  const product = cart.find((product) => product.productId === productId);

  // Increase the quantity of the product in the cart by 1
  product.quantity++;

}

/* ################################################### 
        Begin decreaseQuantity Function
   ################################################### 
*/
function decreaseQuantity(productId) {
  // Find the product in the cart by its productId
  const productIndex = cart.findIndex(product => product.productId === productId);

  // If the product exists in the cart
  if (productIndex !== -1) {
    const product = cart[productIndex];

    // If the product quantity is greater than 1, decrease it by 1
    if (product.quantity > 1) {
      product.quantity--;
    }
    // Otherwise, remove the product from the cart
    else {
      cart.splice(productIndex, 1);
    }
  }
}
/* ################################################### 
        Begin removeProductFromCart Function
   ################################################### 
*/

function removeProductFromCart(productId) {
 const productIndex = cart.findIndex((item) => item.productId === productId);

  // remove product from cart
  cart.splice(productIndex, 1);
}

/* ################################################### 
        Begin cartTotal Function
   ################################################### 
*/

function cartTotal() {
  let total = 0;
  cart.forEach((product) => {
    total += product.quantity * product.price;
  });
  return (total);
}

/* ################################################### 
        Begin pay Function
   ################################################### 
*/

// need global totalPaid variable
let totalPaid = 0;

function pay(amount) {
  totalPaid += amount;

  return totalPaid - cartTotal()
}
/* ################################################### 
        Begin emptyCart Function
   ################################################### 
*/
function emptyCart() {
  cart.length--;
}

module.exports = {
  products,
  cart,
  addProductToCart,
  increaseQuantity,
  decreaseQuantity,
  removeProductFromCart,
  cartTotal,
  pay, 
  emptyCart,
  /* Uncomment the following line if completing the currency converter bonus */
  // currency
};