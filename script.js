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
for (let i = 0; i < cart.length; i++) {
    cart[i].addEVentListener('click', () => {
        cartItemscount(cart[i]);
    })
}



function placeToCart(size, toppings, crust, price, quantity) {
    pizza = new objPizza("size", "toppings", "crust", parseInt(price), parseInt(quantity));

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
    toCart();
    console.log('cartItemscount');
    console.log(typeof cartItemscount)
}
onLoadCartItems();



function toCart() {
    size = document.getElementById("size").value;
    quantity = document.getElementById("quantityReq").value;
    crust = document.getElementById("crust").value;
    toppings = document.getElementById("topping").value;
    console.log(size)

    let sizePrice = 0;

    if (sizePrice == "Large") {
        price = 475;
    } else if (sizePrice == "Medium") {
        price = 400;
    } else if (sizePrice == "Small") {
        price = 380;

    }

}