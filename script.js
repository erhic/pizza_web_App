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



function placeToCart(size, toppings, crust, locationChecked, price, quantity) {
    console.log(price)
    pizza = new objPizza(size, toppings, crust, parseInt(price), parseInt(quantity));

    // Add pizza object to array cart.
    cart.push(pizza);
    console.log(cart)
        //   get piza quantity
    let cartItemscount = 0;
    // Loop each pizza object
    orderedListDiv.innerHTML = "";
    cart.forEach((pizzaObject, index) => {
        cartItemscount += pizzaObject.quantity;

        // Add pizza element to orderedListDiv
        orderedListDiv.innerHTML += "<div>Size: " + pizzaObject.size + "<br> Crust: " + pizzaObject.crust + "<br> Topping: " + pizzaObject.topping + " <br> Location: <br> " +
            "Quantity:  " + pizzaObject.quantity + "<br>Price:  " + pizzaObject.price + "<br> <button onclick='removePizza(" + index + ")'>remove</button></div> <br> "
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
    // toCart();
    console.log('cartItemscount');
    console.log(typeof cartItemscount)
}

function removePizza(index) {
    cart.splice(index, 1);

    orderedListDiv.innerHTML = "";
    cart.forEach((pizzaObject, index) => {
        // Add pizza element to orderedListDiv
        orderedListDiv.innerHTML += "<div>Size: " + pizzaObject.size + "<br> Crust: <br> Topping: <br> Location: <br> Quantity: <br>Price: </div> <br> <button onclick='removePizza(" + index + ")'>remove</button>"
    });
}


let pizasize = document.getElementById('size')
    // console.log(pizasize)
let pizacrust = document.getElementById('crust')
let pizatoping = document.getElementById('topping')
let pizalocation = document.getElementById('delivered')
let pizaquantity = document.getElementById('quantity')
let btnClicked = document.getElementById('submitbtn')
let orderedListDiv = document.getElementById('ordered-list')
console.log(btnClicked)

btnClicked.addEventListener('click', function() {
    console.log(pizasize.value)

    placeToCart(pizasize.value, pizacrust.value, pizatoping.value, pizalocation.checked,
        getTotal(pizasize.value, pizacrust.value, pizatoping.value), pizaquantity.value)

    console.log("getTotal: " + getTotal(pizasize.value, pizacrust.value, pizatoping.value))
})

function getTotal(size, crust, topping) {
    let price = 0
    if (size == 'small') {
        // console.log(price += 300)
        if (crust == "Crimpsy") {
            console.log("Total Price", price += 300 + 200)
            return price += 300 + 200
        } else if (crust == 'Gruttenfree') {
            return price += 300 + 300
        } else {
            return price += 300 + 150
        }
    } else if (size == 'medium') {
        if (crust == "Crimpsy") {
            console.log("Medium total price=", price += 650 + 200)
            return price += 650 + 200
        } else if (crust == 'Gruttenfree') {
            return price += 650 + 300
        } else {
            return price += 650 + 150
        }
    } else if (size == 'large') {
        if (crust == "Crimpsy") {
            return price += 900 + 200
        } else if (crust == 'Gruttenfree') {
            return price += 900 + 300
        } else {
            return price += 900 + 150
        }
    } else {
        return price;
    }
}