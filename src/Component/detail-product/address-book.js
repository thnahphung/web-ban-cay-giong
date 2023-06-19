import React from "react";
import {MDBBreadcrumb, MDBBreadcrumbItem, MDBContainer} from "mdbreact";

const AddressBook = () => {
    return (
        <MDBBreadcrumb className={'default-color d-flex'} style={{paddingLeft: '120px'}}>
            <MDBBreadcrumbItem>Home</MDBBreadcrumbItem>
            <MDBBreadcrumbItem>Library</MDBBreadcrumbItem>
            <MDBBreadcrumbItem active>Data</MDBBreadcrumbItem>
        </MDBBreadcrumb>
    );
};

export default AddressBook;