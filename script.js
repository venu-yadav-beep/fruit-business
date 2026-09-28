let cart = [];

let quantity = 1;


// Increase quantity
function increaseQuantity() {

    quantity++;

    document.getElementById("quantity").textContent = quantity;
}


// Decrease quantity
function decreaseQuantity() {

    if (quantity > 1) {

        quantity--;

    }

    document.getElementById("quantity").textContent = quantity;
}


// Add fruit to cart
function addToCart(fruitName, price) {

    let existingFruit = cart.find(
        item => item.name === fruitName
    );

    if (existingFruit) {

        existingFruit.quantity += quantity;

    } else {

        cart.push({
            name: fruitName,
            price: price,
            quantity: quantity
        });

    }

    console.log(cart);

    alert(
        quantity + " " +
        fruitName +
        " added to cart!"
    );

    quantity = 1;

    const quantityElement =
        document.getElementById("quantity");

    if (quantityElement) {
        quantityElement.textContent = quantity;
    }
}