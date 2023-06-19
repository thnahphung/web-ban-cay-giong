import React, {Fragment} from 'react';
import {Outlet} from "react-router-dom";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import ChatBox from "./Component/ChatBox";

function App() {
    return (
        <Fragment>
            <Header/>
            <Outlet/>
            <ChatBox/>
            <Footer/>
        </Fragment>
    );
}

export default App;