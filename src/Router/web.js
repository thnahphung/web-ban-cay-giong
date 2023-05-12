import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import ProductList from "../Component/ProductList";
import {loadProduct, ProductDetail} from "../Component/ProductDetail";

export const webRouter = createBrowserRouter([{
    path:'/',
    element:<App/>,
    children:[{
        path:'list-product',
        element:<ProductList/>,
    },{
        path:'product/:idProduct',
        element:<ProductDetail/>,
        loader:loadProduct
    }]

}])