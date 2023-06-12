import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import {loadProduct, ProductDetail} from "../Component/ProductDetail";
import CartPage from "../Page/CartPage";
import ListProductPage, {loadProductsByCategory} from "../Page/ListProductPage";
import IntroducePage from "../Page/IntroducePage";
import {loadCategories} from "../store/Action";
import {loadProductsBySearch} from "../Component/Search";

export const webRouter = createBrowserRouter([{
    path: '/',
    element: <App/>,
    children: [{
        path: 'san-pham',
        element: <ListProductPage/>,
        loader: loadProductsByCategory
    }, {
        path: 'san-pham/:idProduct',
        element: <ProductDetail/>,
        loader: loadProduct
    }, {
        path: 'gio-hang',
        element: <CartPage/>
    }, {
        path: 'tin-tuc',
        element: <CartPage/>
    }, {
        path: 'gioi-thieu',
        element: <IntroducePage/>
    }, {
        path: ':urlParam',
        element: <ListProductPage/>,
        loader: loadProductsByCategory
    }, {
        path: 'tim-kiem',
        element: <ListProductPage/>,
        loader:loadProductsBySearch
    }
    ]

}])
