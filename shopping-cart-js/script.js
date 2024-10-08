// Initializing a new Map for the shopping cart
const cart = new Map();

// Function to update the cart display
function updateCartDisplay() {
    const cartItemsElement = document.getElementById('cart-items');
    const totalAmountElement = document.getElementById('total-amount');
    let total = 0;

    cartItemsElement.innerHTML = '';

    cart.forEach((quantity, productName) => {
        const itemElement = document.createElement('li');
        itemElement.textContent = `${productName}: ${quantity}`;
        cartItemsElement.appendChild(itemElement);

        // Assuming each item costs $10
        total += quantity * 10;
    });

    totalAmountElement.textContent = total;
}

// Function to add items to the cart
function addToCart(productName, quantity) {
    if (cart.has(productName)) {
        cart.set(productName, cart.get(productName) + quantity);
    } else {
        cart.set(productName, quantity);
    }

    // Update the cart display
    updateCartDisplay();
}

// Event listener for the Add to Cart button
document.getElementById('add-button').addEventListener('click', () => {
    const productName = document.getElementById('product-name').value;
    const productQuantity = parseInt(document.getElementById('product-quantity').value);

    if (productName && productQuantity > 0) {
        addToCart(productName, productQuantity);
    }

    document.getElementById('product-name').value = '';
    document.getElementById('product-quantity').value = '';
});
