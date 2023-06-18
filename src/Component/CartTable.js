import React, {Component, useRef} from "react";
import {
    MDBRow,
    MDBCard,
    MDBCardBody,
    MDBTooltip,
    MDBTable,
    MDBTableBody,
    MDBTableHead,
    MDBInput,
    MDBBtn,
} from "mdbreact";
import {useDispatch, useSelector} from "react-redux";
import {addCart, removeCart} from "../store/Action";

const CartTable = () => {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    function handleChangeInput(e, product) {
        dispatch(addCart(product, parseInt(e.target.value)))
    }

    function handleRemove(product) {
        dispatch(removeCart(product))
    }

    const columns = [
        {
            label: "",
            field: "img",
        },
        {
            label: <strong style={{fontSize: '20px'}}>Sản phẩm</strong>,
            field: "product",
        },
        {
            label: <strong style={{fontSize: '20px'}}>Giá</strong>,
            field: "price",
        },
        {
            label: <strong style={{fontSize: '20px'}}>Số lượng</strong>,
            field: "qty",
        },
        {
            label: <strong style={{fontSize: '20px'}}>Tổng</strong>,
            field: "amount",
        },
        {
            label: "",
            field: "button",
        },
    ];

    const rows = [];

    cart.map((item) => {
        return rows.push({
            img: <img src={item.product.image[0]} alt="" className="img-fluid z-depth-0"/>,
            product: [
                <h5 className="mt-3" key={new Date().getDate + 1}>
                    <strong>{item.product.name}</strong>
                </h5>,
            ],
            price: `${item.product.salePrice.toLocaleString('en-US').replaceAll(',', '.')}`,
            qty: (
                <MDBInput
                    type="number"
                    valueDefault={item.amount}
                    className="form-control"
                    style={{width: "100px"}}
                    onChange={(e, product) => handleChangeInput(e, item.product)}
                    min={1}
                    max={10}
                />
            ),
            amount:
                <strong>{(item.product.salePrice * item.amount).toLocaleString('en-US').replaceAll(',', '.')}</strong>,
            button: (
                <MDBTooltip placement="top">
                    <MDBBtn floating size="sm" color={"danger"} onClick={() => handleRemove(item.product)}>
                        X
                    </MDBBtn>
                    <div>Xóa</div>
                </MDBTooltip>
            ),
        });
    });

    return (
        <MDBRow className="my-2" center>
            <MDBCard className="w-100">
                <MDBCardBody>
                    <MDBTable className="product-table">
                        <MDBTableHead
                            className="font-weight-bold"
                            columns={columns}
                            style={{color: '#2bbbad'}}
                        />
                        <MDBTableBody rows={rows}/>
                    </MDBTable>
                </MDBCardBody>
            </MDBCard>
        </MDBRow>
    );

}

export default CartTable;