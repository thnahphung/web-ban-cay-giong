const initState = {
    products: [],
    cart: [],
    loadingProduct: false,
    categories: [],
    categoryNow: {},
    paginationCount: 0,
    paginationNow: 1,
    link: {}
}
export const root = (state = initState, action) => {
    switch (action.type) {
        case 'product/load': {
            return {
                ...state,
                products: action.payload
            }
        }
        case 'cart/add': {
            return {
                ...state,
                cart: [
                    ...state.cart,
                    action.payload
                ]
            }
        }
        case 'product/loading': {
            return {
                ...state,
                loadingProduct: action.payload
            }
        }
        case 'categories/load': {
            return {
                ...state,
                categories: action.payload
            }
        }
        case 'pagination/count': {
            return {
                ...state,
                paginationCount: action.payload
            }
        }
        case 'pagination/now': {
            return {
                ...state,
                paginationNow: action.payload
            }
        }
        case 'link/loading': {
            return {
                ...state,
                link: action.payload
            }
        }
        case 'category/now': {
            return {
                ...state,
                categoryNow: action.payload
            }
        }
        default:
            return state;
    }

}

