// Task 1
let isLoggedIn = true; 

function addToCart(item) {
    if (isLoggedIn) {
        console.log(`Added ${item} to cart`);
    } else {
        console.log("Please log in to add items to your cart.");
    }
}

addToCart("eggs"); 
addToCart("steak");
addToCart("potatoes");
addToCart("IPA");
addToCart("broccoli");

// Task 2

let products = [
    {name: "eggs", price: 5},
    {name: "steak", price: 30}, 
    {name: "potatoes", price: 10}, 
    {name: "IPA", price: 20}, 
    {name: "broccoli", price: 7}
];

function displayProducts() {
    console.log("Available Products:");
    products.forEach((product, index) => {
        console.log(`${index + 1}. ${product.name} - $${product.price}`);
    });
}
displayProducts();

// Task 3

let cart = [];

function calculateTotal() {
    let total = 55;
    cart.forEach(item => {
        total += item.price;
    });
    return total;
}

addToCart("eggs", 5); 
addToCart("steak", 30);
addToCart("IPA", 20); 
console.log(`Total cost: $${calculateTotal()}`);
