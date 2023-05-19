import React, {Component} from "react";
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

const CartTable = () => {
    const state = {
        data: [
            {
                src: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/13.webp",
                title: "iPhone",
                subTitle: "Apple",
                color: "White",
                price: "800",
                qty: "2",
            },
            {
                src: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/6.webp",
                title: "Headphones",
                subTitle: "Sony",
                color: "Red",
                price: "200",
                qty: "2",
            },
            {
                src: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/1.webp",
                title: "iPad Pro",
                subTitle: "Apple",
                color: "Gold",
                price: "600",
                qty: "1",
            },
        ],
        columns: [
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
        ],
    };

    const rows = [];
    const {columns, data} = state;

    data.map((row) => {
        return rows.push({
            img: <img src={row.src} alt="" className="img-fluid z-depth-0"/>,
            product: [
                <h5 className="mt-3" key={new Date().getDate + 1}>
                    <strong>{row.title}</strong>
                </h5>,
            ],
            // color: row.color,
            price: `$${row.price}`,
            qty: (
                <MDBInput
                    type="number"
                    default={row.qty}
                    className="form-control"
                    style={{width: "100px"}}
                />
            ),
            amount: <strong>${row.qty * row.price}</strong>,
            button: (
                <MDBTooltip placement="top">
                    <MDBBtn floating size="sm" color={"danger"}>
                        X
                    </MDBBtn>
                    <div>Remove item</div>
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