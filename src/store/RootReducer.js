import {loadCartFromLocalStorage} from "./SupportFuntion";

const initState = {
    products: [],
    cart: loadCartFromLocalStorage(),
    loadingProduct: false,
    categories: [],
    categoryNow: {},
    paginationCount: 0,
    paginationNow: 1,
    link: {},
    listNews: []
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
            const newCart = [...state.cart];
            const itemIndex = newCart.findIndex(item => item.product.id === action.payload.product.id);
            if (itemIndex !== -1) {
                newCart[itemIndex] = {
                    ...newCart[itemIndex],
                    amount: action.payload.amount
                };
            } else {
                newCart.push(action.payload);
            }
            localStorage.setItem('cart', JSON.stringify(newCart));
            return {
                ...state,
                cart: newCart
            };
        }
        case 'cart/remove': {
            const newCart = state.cart.filter(item => item.product.id !== action.payload.id);
            localStorage.setItem('cart', JSON.stringify(newCart));
            return {
                ...state,
                cart: newCart
            };
        }
        case 'cart/reset': {
            const newCart =[]
            localStorage.setItem('cart', JSON.stringify(newCart));
            return {
                ...state,
                cart: newCart
            };
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
        case 'listNews/loading': {
            return {
                ...state,
                listNews: action.payload
            }
        }
        default:
            return state;
    }

}

