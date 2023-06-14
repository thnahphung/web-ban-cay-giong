import {MDBBtn, MDBIcon} from "mdbreact";
import React from "react";
import {NavLink} from "react-router-dom";

const BtnCart = (data) => {
    const total = 0;
    return (
        <NavLink to={`/gio-hang`}>
            <MDBBtn rounded color={"danger"}>
                {total} Đ
                <MDBIcon icon="shopping-cart" className={`ml-2`}/>
            </MDBBtn>
        </NavLink>
    )
}
export default BtnCart