import { MDBBtn, MDBIcon } from "mdbreact";
import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const BtnCart = (data) => {
    const cart = useSelector(state => state.cart);

    function sum() {
        let sum = 0;
        for (const item of cart) {
            sum += item.product.salePrice * item.amount;
        }
        return sum;
    }

    return (
        <NavLink to={`/gio-hang`}>
            <MDBBtn rounded color={"danger"}>
                {sum().toLocaleString('en-US').replaceAll(',', '.')} Đ
                <MDBIcon icon="shopping-cart" className={`ml-2`} />
            </MDBBtn>
        </NavLink>
    )
}
export default BtnCart