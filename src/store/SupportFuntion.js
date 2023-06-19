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

export const getStatus = (status) => {
    switch (status) {
        case 1:
            return 'Đang đợi duyệt'
        case 2:
            return 'Đã duyệt'
        case 3:
            return 'Đang đóng hàng'
        case 4:
            return 'Đang giao hàng'
        case 5:
            return 'Đã giao hàng'
        case 6:
            return 'Đã hủy'
        default:
            return status
    }
}

