import React, {Fragment} from 'react';
import {Outlet} from "react-router-dom";
import Header from "./Component/Header";
import Footer from "./Component/Footer";

function App() {
    return (
        <Fragment>
            <Header/>
            <Outlet/>
            <Footer/>
        </Fragment>
    );
}

export default App;