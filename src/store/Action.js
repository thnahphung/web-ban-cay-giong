export const loadProducts = (data) => {
    return {
        type: 'product/load',
        payload: data
    }
}
export const loadCategories = (categories) => {
    return {
        type: 'categories/load',
        payload: categories
    }
}
export const loadCategoryNow = (category) => {
    return {
        type: 'category/now',
        payload: category
    }
}
export const addCart = (product, amount) => {
    return {
        type: 'cart/add',
        payload: {
            product: product,
            amount: amount
        }

    }
}

export const removeCart = (product) => {
    return {
        type: 'cart/remove',
        payload: product
    }
}

export const showLoadingProduct = (loading) => {
    return {
        type: 'product/loading',
        payload: loading
    }
}

export const loadPaginationCount = (count) => {
    return {
        type: 'pagination/count',
        payload: count
    }
}
export const loadPaginationNow = (num) => {
    return {
        type: 'pagination/now',
        payload: num
    }
}
export const loadLink = (link) => {
    return {
        type: 'link/loading',
        payload: link
    }
}