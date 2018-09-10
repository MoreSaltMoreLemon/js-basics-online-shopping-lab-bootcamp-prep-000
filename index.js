var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 let obj = {itemName: item, itemPrice: Math.floor(Math.random() * 100)};
 cart.push(obj);
 return `${obj.itemName} has been added to your cart.`;
}

function viewCart() {
  let itemsInCart = "In your cart, you have ";
  if (cart.length == 0) {
    return "Your shopping cart is empty.";
  }
  for (let item in cart) {
    itemsInCart = itemsInCart + " " + cart[item].itemName + " at $" + cart[item].itemPrice;
    if (item == cart.length -1) {
      itemsInCart = itemsInCart + ".";
    } else {
      itemsInCart = itemsInCart + ", ";
    }
  }
  return itemsInCart;
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
