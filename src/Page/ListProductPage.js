import React, {Fragment, useEffect, useState} from "react";
import ProductList from "../Component/ProductList";
import {MDBCol, MDBContainer, MDBRow} from "mdbreact";
import ListCategoryBar from "../Component/ListCategoryBar";
import CategoryApi from "../api/CategoryApi";
import ProductApi from "../api/ProductApi";
import Loading from "../Component/Loading";
import {useDispatch} from "react-redux";
import {
    loadCategories, loadCategoryNow,
    loadLink,
    loadPaginationCount,
    loadPaginationNow,
    loadProducts, showLoadingProduct
} from "../store/Action";
import {useLoaderData} from "react-router-dom";

const ListProductPage = () => {
    const urlParam = useLoaderData();
    const dispatch = useDispatch();
    const [loadingCategories, setLoadingCategories] = useState(false);
    const page = 1;
    const limit = 12;
    useEffect(() => {
        setLoadingCategories(true);
        const fetchCategories = async () => {
            const data = await CategoryApi.getAll();
            dispatch(loadCategories(data))
            setLoadingCategories(false);
        }
        fetchCategories().catch(console.error);
    }, [])

    useEffect(() => {
        dispatch(showLoadingProduct(true));
        const fetchCategories = async () => {
            if (urlParam === 'tim-kiem')
                return;
            let param;
            if (urlParam === 'san-pham') {
                dispatch(loadCategoryNow({}))
                param = {
                    _page: page,
                    _limit: limit
                }
            } else {
                param = {
                    urlCategory: urlParam,
                    _page: page,
                    _limit: limit
                }
            }
            const data = await ProductApi.getAll(param);
            const pageCount = Math.ceil(data.totalCount / limit);
            dispatch(loadProducts(data.data));
            dispatch(loadPaginationCount(pageCount));
            dispatch(loadPaginationNow(1));
            dispatch(loadLink(data.link));
            dispatch(showLoadingProduct(false));
        }
        fetchCategories().catch(console.error);
    }, [urlParam])

    if (loadingCategories === true) {
        return (<div style={{height: "600px"}} className='d-flex justify-content-center align-items-center'>
            <Loading/>
        </div>)
    }

    return (
        <Fragment>
            <MDBContainer>
                <MDBRow>
                    <MDBCol md="3">
                        <ListCategoryBar/>
                    </MDBCol>
                    <MDBCol md="9">
                        <ProductList></ProductList>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </Fragment>)
}

export default ListProductPage;

export async function loadProductsByCategory({params}) {
    return params.urlParam || 'san-pham';
}