export const loadCartFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem('cart'));
}
export const cartTotal = (cart) => {
    let total = 0;
    for (const item of cart) {
        total += item.product.salePrice * item.amount;
    }
    return total;
}