import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import CartPage from "../Page/CartPage";
import ListProductPage, { loadProductsByCategory } from "../Page/ListProductPage";
import IntroducePage from "../Page/IntroducePage";
import { loadCategories } from "../store/Action";
import { loadProductsBySearch } from "../Component/Search";
import LoginPage from "../Page/LoginPage";
import MainPage from "../Page/MainPage";
import UserPage from "../Page/UserPage";
import DetailProductPage, { loadProduct } from "../Page/DetailProductPage";

export const webRouter = createBrowserRouter([{
    path: '/',
    element: <App />,
    children: [{
        path: 'san-pham',
        element: <ListProductPage />,
        loader: loadProductsByCategory
    }, {
        path: ':urlCategory/:urlParam',
        element: <DetailProductPage />,
        loader: loadProduct,
    }, {
        path: 'gio-hang',
        element: <CartPage />
    }, {
        path: 'tin-tuc',
        element: <CartPage />
    }, {
        path: 'gioi-thieu',
        element: <IntroducePage />
    }, {
        path: ':urlParam',
        element: <ListProductPage />,
        loader: loadProductsByCategory
    }, {
        path: 'tim-kiem',
        element: <ListProductPage />,
        loader: loadProductsBySearch
    }, {
        path: 'dang-nhap',
        element: <LoginPage />
    }, {
        path: 'trang-chu',
        element: <MainPage />

    }, {
        path: 'ca-nhan',
        element: <UserPage />
    }
    ]

}])
