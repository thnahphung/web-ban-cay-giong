import {MDBBtn, MDBCardText, MDBListGroup, MDBListGroupItem, MDBNav, MDBNavLink} from "mdbreact";
import React, {Fragment, useState} from "react";
import '../style/list-category.css'
import {NavLink} from "react-router-dom";


const ListCategoryBar = (data) => {

    // const [categories, setCategories] = useState(data.categories);

    const categories = [0, 2, 3, 2, 2, 3, 3, 34, 8];

    return (
        <Fragment>
            <h4 className={`title-category`}>Danh mục sản phẩm</h4>
            <MDBListGroup style={{width: "15rem"}}>
                {categories.map(category => (
                    <MDBBtn flat className={`mb-1 category-item`}>
                        {category} Danh mục sản phẩm
                    </MDBBtn>
                ))}
            </MDBListGroup>
        </Fragment>
    );
}

export default ListCategoryBar