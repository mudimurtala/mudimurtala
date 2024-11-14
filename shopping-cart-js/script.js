// Initializing a new Map for the shopping cart
const cart = new Map();


function updateCartDisplay() {
    const cartItemsElement = document.getElementById('cart-items');
    const totalAmountElement = document.getElementById('total-amount');
    let total = 0;
    cartItemsElement.innerHTML = '';

    cart.forEach((quantity, productName) => {
        const itemElement = document.createElement('li');
        itemElement.textContent = `${productName}: ${quantity}`;
        cartItemsElement.appendChild(itemElement);

        total += quantity * 10;
    });

    totalAmountElement.textContent = total;
}

function addToCart(productName, quantity) {
    if (cart.has(productName)) {
        cart.set(productName, cart.get(productName) + quantity);
    } else {
        cart.set(productName, quantity);
    }

    updateCartDisplay();
}

document.getElementById('add-button').addEventListener('click', () => {
    const productName = document.getElementById('product-name').value;
    const productQuantity = parseInt(document.getElementById('product-quantity').value);

    if (productName && productQuantity > 0) {
        addToCart(productName, productQuantity);
    }

    document.getElementById('product-name').value = '';
    document.getElementById('product-quantity').value = '';
});
