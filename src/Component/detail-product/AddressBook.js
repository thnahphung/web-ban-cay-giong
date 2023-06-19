import React from "react";
import { MDBBreadcrumb, MDBBreadcrumbItem, MDBContainer } from "mdbreact";
import { Link } from "react-router-dom";

const AddressBook = (data) => {
    const product = data.product;

    return (
        <MDBBreadcrumb className={'default-color   d-flex'} style={{ paddingLeft: '120px' }}>
            <MDBBreadcrumbItem className="text-white">Trang Chủ</MDBBreadcrumbItem>
            <MDBBreadcrumbItem ><Link className="text-white" to={`/${product.urlCategory}`}>{product.categoryName} </Link></MDBBreadcrumbItem>
            <MDBBreadcrumbItem className="text-white" active>{product.name}</MDBBreadcrumbItem>
        </MDBBreadcrumb>
    );
};

export default AddressBook;