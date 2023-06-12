import React, {useEffect, useRef} from "react";
import {MDBBtn, MDBCol, MDBContainer, MDBIcon} from "mdbreact";
import logo from "../images/logo.png"
import BtnCart from "./BtnCart";
import {
    loadCategoryNow, loadLink,
    loadPaginationCount,
    loadPaginationNow,
    loadProducts,
    showLoadingProduct
} from "../store/Action";
import ProductApi from "../api/ProductApi";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";

const Search = () => {
    const searchRef = useRef(null);
    const dispatch = useDispatch();

    function handleSearch() {
        const value = searchRef.current.value;
        dispatch(showLoadingProduct(true));
        const fetchCategories = async () => {
            const param = {
                urlParam_like: removeAccents(value),
                _page: 1,
                _limit: 12
            }
            const data = await ProductApi.getAll(param);
            const pageCount = Math.ceil(data.totalCount / 12);
            dispatch(loadProducts(data.data));
            dispatch(loadPaginationCount(pageCount));
            dispatch(loadPaginationNow(1));
            dispatch(loadLink(data.link));
            dispatch(showLoadingProduct(false));
        }
        fetchCategories().catch(console.error);
        searchRef.current.value = '';
    }

    function removeAccents(str) {
        return str.normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/đ/g, 'd').replace(/Đ/g, 'D')
            .replaceAll(' ', '-');
    }

    return (
        <div style={{borderBottom: "#2bbbad solid 2px"}}>
            <MDBContainer>
                <div className={`d-flex `} style={{justifyContent: "space-between", alignItems: "center"}}>
                    <img src={logo} className="img-fluid ml-4" alt=""/>
                    <div className="input-group md-form form-sm form-1 pl-0 ml-5" style={{width: '500px'}}>
                        <input
                            ref={searchRef}
                            className="form-control my-0 py-1"
                            type="text"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <Link to={`/tim-kiem`}>
                            <MDBBtn onClick={handleSearch}>
                                <MDBIcon className="text-white" icon="search"/>
                            </MDBBtn>
                        </Link>

                    </div>
                    <BtnCart/>
                </div>
            </MDBContainer></div>
    );
};

export default Search

export async function loadProductsBySearch({params}) {
    return 'tim-kiem';
}