// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
const price = product.querySelector(".price span");
const quantity = product.querySelector(".quantity input");
const priceNumber = parseFloat(price.innerHTML);
const quantityNumber = quantity.value;
const subtotal = product.querySelector(".subtotal span")
const subtotalPrice = priceNumber * quantityNumber
subtotal.innerHTML = subtotalPrice
console.log(typeof subtotalPrice)
}

function calculateAll() {
  const products = document.getElementsByClassName("product");
  for(let i = 0; i < products.length; i++){
    updateSubtotal(products[i])
  }

 const total = updateSubtotal(products[0]) + updateSubtotal(products[1])
 const totalPrice = document.getElementsByClassName("calculate-total")
 total = parseFloat(totalPrice.innerHTML)
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  const removeBtn = document.getElementsByClassName("btn btn-remove");
  for(let i = 0; i < removeBtn.length; i++){
    removeBtn[i].addEventListener("click", removeProduct)
  }
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
