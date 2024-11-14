# Mudi's Shopping Cart Exercise

This project is a simple **Shopping Cart** implementation using HTML, CSS, and JavaScript. It demonstrates the use of JavaScript's `Map` object to manage a shopping cart where product names are keys and their quantities are values.

## Features

- **Add Items to Cart**: Users can input the name and quantity of a product, which will be added to the cart.
- **Display Cart Items**: All items in the cart are displayed dynamically, showing the product name and quantity.
- **Total Calculation**: The total cost of items in the cart is calculated assuming each item has a fixed price of $10.

## Project Structure

- **index.html**: The main structure of the page, including input fields for adding products and displaying the cart items.
- **styles.css**: Basic styling for the shopping cart and product input form.
- **script.js**: Contains the logic for managing the cart using a `Map` object, adding items, and updating the display.

## How It Works

1. **Adding to Cart**:
   - When a user enters a product name and quantity, it is added to the `Map`. If the product already exists, its quantity is updated.

2. **Updating the Display**:
   - The cart's content is dynamically updated in the DOM whenever items are added or modified.

3. **Calculating the Total**:
   - The total cost is calculated based on a fixed price of $10 per item and displayed at the bottom of the cart.

## Usage

1. Clone the repository to your local machine.
2. Open `index.html` in your web browser ie. Explore or Chrome.
3. Start adding products to see the shopping cart in action as is.

