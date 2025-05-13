function addToCart(itemName, itemPrice, quantity) {
    // Store selected items in session storage or cookies
    let cartItems = JSON.parse(sessionStorage.getItem('cart-items')) || [];
    let item = { name: itemName, price: itemPrice, quantity: quantity };
    cartItems.push(item);
    sessionStorage.setItem('cart-items', JSON.stringify(cartItems));
    
    // Redirect to cart page
    window.location.href = '../templates/cart.html';
}