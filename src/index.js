import React from "react";
import ReactDOM from "react-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./index.css";

import registerServiceWorker from './registerServiceWorker';
import {Provider} from "react-redux";
import {store} from "./store/Store";
import {RouterProvider} from "react-router-dom";
import {webRouter} from "./Router/web";

ReactDOM.render(
    <Provider store={store}>
        <RouterProvider router={webRouter}></RouterProvider>
    </Provider>
    , document.getElementById('root'));

registerServiceWorker();