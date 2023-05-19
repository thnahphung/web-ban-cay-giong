import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { loadProduct, ProductDetail } from "../Component/ProductDetail";
import CartPage from "../Page/CartPage";
import ListProductPage from "../Page/ListProductPage";
import IntroducePage from "../Page/IntroducePage";

export const webRouter = createBrowserRouter([{
    path: '/',
    element: <App />,
    children: [{
        path: 'danh-muc',
        element: <ListProductPage />,
    }, {
        path: 'san-pham/:idProduct',
        element: <ProductDetail />,
        loader: loadProduct
    }, {
        path: 'gio-hang',
        element: <CartPage />
    }, {
        path: 'tin-tuc',
        element: <CartPage />
    }, {
        path: 'gioi-thieu',
        element: <IntroducePage />
    }
    ]

}])