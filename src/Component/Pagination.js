import React from "react";
import {MDBPagination, MDBPageItem, MDBPageNav} from "mdbreact";
import {useDispatch, useSelector} from "react-redux";
import {loadLink, loadPaginationCount, loadPaginationNow, loadProducts, showLoadingProduct} from "../store/Action";
import axios from "axios";
import ProductApi from "../api/ProductApi";

const Pagination = (data) => {
    const countPage = useSelector(state => state.paginationCount);
    const link = useSelector(state => state.link);
    const pageNow = useSelector(state => state.paginationNow);
    const dispatch = useDispatch();
    const categoryNow = useSelector(state => state.categoryNow)

    function createPagination(countPage) {
        let elements = [];
        for (let i = 1; i < countPage + 1; i++) {
            elements.push(
                <MDBPageItem active={pageNow === i} key={i} onClick={() => handleListProductByPageCount(i)}>
                    <MDBPageNav className="page-link">
                        {i}
                    </MDBPageNav>
                </MDBPageItem>);
        }
        return elements;
    }

    function handleListProductByPageCount(page) {
        dispatch(showLoadingProduct(true));
        const fetchProducts = async () => {
            const params = {
                urlCategory: categoryNow.urlParam,
                _page: page,
                _limit: 12
            }
            const data = await ProductApi.getAll(params);
            const pageCount = Math.ceil(data.totalCount / 12);
            dispatch(loadProducts(data.data));
            dispatch(loadPaginationCount(pageCount));
            dispatch(loadLink(data.link));
            dispatch(loadPaginationNow(page));
            dispatch(showLoadingProduct(false));
        }
        fetchProducts().catch(console.error)
    }

    const handleListProductByLink = (link, action) => {
        if (link === undefined) {
            return;
        }
        dispatch(showLoadingProduct(true));
        axios.get(link)
            .then(res => {
                const data = res.data;
                const pageCount = Math.ceil(data.totalCount / 12);
                dispatch(loadProducts(data.data));
                dispatch(loadPaginationCount(pageCount));
                dispatch(loadLink(data.link));
                dispatch(showLoadingProduct(false));
                switch (action) {
                    case 'first':
                        dispatch(loadPaginationNow(1));
                        return;
                    case 'last':
                        dispatch(loadPaginationNow(pageCount));
                        return;
                    case 'prev':
                        dispatch(loadPaginationNow(pageNow - 1));
                        return;
                    case 'next':
                        dispatch(loadPaginationNow(pageNow + 1));
                        return;
                    default:
                        return;
                }
            })
            .catch(error => console.log(error));
    }

    return (
        <MDBPagination circle className={data.className} color='teal'>
            <MDBPageItem disabled={link.first === undefined}
                         onClick={() => handleListProductByLink(link.first, 'first')}>
                <MDBPageNav className="page-link">
                    <span>Trang đầu</span>
                </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem disabled={link.prev === undefined} onClick={() => handleListProductByLink(link.prev, 'prev')}>
                <MDBPageNav className="page-link" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                </MDBPageNav>
            </MDBPageItem>
            {createPagination(countPage)}
            <MDBPageItem disabled={link.next === undefined} onClick={() => handleListProductByLink(link.next, 'next')}>
                <MDBPageNav className="page-link">
                    &raquo;
                </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem disabled={link.last === undefined} onClick={() => handleListProductByLink(link.last, 'last')}>
                <MDBPageNav className="page-link">
                    Trang cuối
                </MDBPageNav>
            </MDBPageItem>

        </MDBPagination>
    )
}

export default Pagination;