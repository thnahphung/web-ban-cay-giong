import {MDBListGroup} from "mdbreact";
import React, {Fragment} from "react";
import '../style/list-category.css'
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {loadCategoryNow} from "../store/Action";


const ListCategoryBar = (data) => {
    const categories = useSelector(state => state.categories);
    const dispatch = useDispatch();

    function handleCategoryNow(category) {
        dispatch(loadCategoryNow(category))
    }

    return (
        <Fragment>
            <h4 className={`title-category`}>Danh mục sản phẩm</h4>
            <MDBListGroup style={{width: "15rem"}}>
                {categories.map(category => (
                    <NavLink to={`/${category.urlParam}`}
                             onClick={() => handleCategoryNow(category)}
                             className={`btn Ripple-parent btn-flat mb-1 category-item`}
                             key={category.id}
                             style={({isActive}) => ({
                                 color: isActive ? '#2bbbad' : '#000'
                             })}>
                        {category.name}
                    </NavLink>

                ))}
            </MDBListGroup>
        </Fragment>
    );
}

export default ListCategoryBar