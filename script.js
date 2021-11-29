$(document).ready(function() {
    $('.carousel').carousel();
});


// object to mutate
class pizzaBlueprint {
    constructor(size, topping, crust, price, quantity) {
        this.size = size;
        this.topping = topping;
        this.crust = crust
        this.price = price;
        this.quantity = quantity;
    }
}

// an array to holde details for cart
const cart = [];

//function to run on click place order button,
function placeToCart(pizzaSize, topping, crust, price, pizzaQuantity) {

    // new instance object converting  quantity to number
    pizza = new pizaDish(pizzaSize, "pineapple", "stuffed", price, parseInt(pizzaQuantity));

    // adding more element in the array declared above
    cart.push(pizza);


    let cartCount = 0;


    cart.forEach(pizzaObject => {
        cartItem = cartItem + pizzaObject.quantity;
    });

    document.getElementById("thebadge").innerText = cartItem;


}

function AddToCart() {
    pizzaSize = document.getElementById("pizzaSize").value;
    pizzaQuantity = document.getElementById("quantityReq").value;


    let priceOnSize = 600;

    if (sizeOfPizza == "small") { priceOnSize = 400; }
    elseif(sizeOfPizza == "large") { priceOnSize = 500; }
    else(sizeOfPizza == "medium") { priceOnSize = 600; }



    let priceOfTopping = 300;

    if (topOfPizza == "Prosciutto") { priceOfTopping = 300; }
    elseif(topOfPizza == "Garlic_butter") { priceOfTopping = 350; }
    else(topOfPizza == "Pepperoni") { priceOfTopping = 500; }



    let priceOfCrust = 400;


    if (crustOfPizza == "gluttedfree") { priceOfCrust = 400; }
    elseif(crustOfPizza == "crimpsy") { priceOfCrust = 550; }
    else(crustOfPizza == "stuffed") { priceOfCrust = 650; }


    // assigning price based on condition above
    price = priceOnSize + priceOfTopping + priceOfCrust;

    pizza = new pizaDish(pizzaSize, "pineapple", "stuffed", price, parseInt(pizzaQuantity));

    // Add pizza object to array cart.
    cart.push(pizza);


    let cartItemscount = 0;
    // Loop each pizza object
    cart.forEach(pizzaObject => {
        cartItem += pizzaObject.quantity;

    });

    document.getElementById("thebadge").innerText = cartItem;


}