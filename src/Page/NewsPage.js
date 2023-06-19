import React from "react";
import {MDBRow, MDBCol, MDBContainer} from "mdbreact";
import ListNews from "../Component/ListNews";
import ListCategoryBar from "../Component/ListCategoryBar";

const NewsPage = () => {
    return (
        <MDBContainer>
            <MDBRow>
                <MDBCol md={`3`}>
                    <ListCategoryBar/>
                </MDBCol>
                <MDBCol md={`9`}>
                    <ListNews/>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}

export default NewsPage;
