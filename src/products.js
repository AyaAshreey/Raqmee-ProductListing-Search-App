let products = JSON.parse(localStorage.getItem('products')) || [];


if (!products.length) {
    localStorage.setItem('products', JSON.stringify([]));
}
