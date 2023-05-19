import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import {loadProduct, ProductDetail} from "../Component/ProductDetail";
import CartPage from "../Page/CartPage";
import ListProductPage from "../Page/ListProductPage";
import UserPage from "../Page/UserPage";
import DetailProductPage from "../Page/DetailProductPage";

export const webRouter = createBrowserRouter([{
    path: '/',
    element: <App/>,
    children: [{
        path: 'list-product',
        element: <ListProductPage/>,

    }, {
        path: 'product/:idProduct',
        element: <ProductDetail/>,
        loader: loadProduct
    }, {
        path: 'cart',
        element: <CartPage/>
    }, {
        path: 'user-page',
        element: <UserPage/>
    }, {
        path: 'detail-product-page',
        element: <DetailProductPage/>
    }]

}])