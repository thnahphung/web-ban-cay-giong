import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import {loadProduct, ProductDetail} from "../Component/ProductDetail";
import CartPage from "../Page/CartPage";
import ListProductPage from "../Page/ListProductPage";

export const webRouter = createBrowserRouter([{
    path:'/',
    element:<App/>,
    children:[{
        path:'list-product',
        element:<ListProductPage/>,

    },{
        path:'product/:idProduct',
        element:<ProductDetail/>,
        loader:loadProduct
    },{
        path:'cart',
        element:<CartPage/>
    }]

}])