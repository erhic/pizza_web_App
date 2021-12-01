class objPizza {
    constructor(size, topping, crust, price, quantity) {
        this.size = size;
        this.topping = topping;
        this.crust = crust
        this.price = price;
        this.quantity = quantity;
    }
}

const cart = [];

// function on Refresh to load  data in the local storage value
function onLoadCartItems() {
    let cartItemscount = localStorage.getItem('cartItemscount');
    if (cartItemscount) {
        document.querySelector('#cartlabel').textContent = cartItemscount;
    }
}





function placeToCart(pizzaSize, pizzatoppings, pizzacrust, price, pizzaQuantity) {
    pizza = new objPizza("pizzaSize", "pizzatoppings", "pizzacrust", parseInt(price), parseInt(pizzaQuantity));

    // Add pizza object to array cart.
    cart.push(pizza);

    //   get piza quantity
    let cartItemscount = 0;
    // Loop each pizza object
    cart.forEach(pizzaObject => {
        cartItemscount += pizzaObject.quantity;
    });

    document.getElementById("cartlabel").innerText = cartItemscount;

    let productNumbers = localStorage.getItem('cartItemscount');


    productNumbers = parseInt(cartItemscount);

    if (cartItemscount) {

        localStorage.setItem('cartItemscount', cartItemscount + 0);
        // document.getElementById("#cartlabel").textContent = cartItemscount + 1;
    } else {
        localStorage.setItem('cartItemscount', 0);
        // document.getElementById("#cartlabel").textContent = cartItemscount;

    }
    console.log('cartItemscount');
    console.log(typeof cartItemscount)
}
onLoadCartItems();