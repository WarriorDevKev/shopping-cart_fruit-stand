const products = [];

/* 🚨 HELPER
      FUNCTION
   🚨
*/
function getProduct(productId, productList) {
  return productList.find((item) => item.productId === productId);
}
// begin item objects
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

function addProductToCart(productId) {
  let itemA = getProduct(productId, cart);
  let itemB = getProduct(productId, products);
  if (productId === itemB.productId && itemA === itemB){
    itemA.quantity++;
  } else if (productId === itemB.productId) {
    itemB.quantity++;
    cart.push(itemB);
  }
}
/* ################################################### 
        Begin increaseQuantity Function
   ################################################### 
*/
function increaseQuantity(productId) {
  // Find the product in the cart by its productId
  let addToCart = getProduct(productId, cart);
  // increment quantity of product in cart
  addToCart.quantity++;
}

/* ################################################### 
        Begin decreaseQuantity Function
   ################################################### 
*/
function decreaseQuantity(productId) {
  let decQty = getProduct(productId, cart);
  if (decQty.quantity === 1) {
    removeProductFromCart(productId);
  } else {
    decQty.quantity--;
  }
}
/* ################################################### 
        Begin removeProductFromCart Function
   ################################################### 
*/

function removeProductFromCart(productId) {
  cart.forEach((product, index) => {
    if (product.productId === productId) {
      // quantity update to zero
      product.quantity = 0;
      cart.splice(index, 1);
    }
  });
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