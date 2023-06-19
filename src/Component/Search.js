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
    sessionStorage.setItem("user", JSON.stringify({
        "id": 1,
        "name": "Phú",
        "email": "th@gmail.com",
        "phone": "012345678",
        "informations": [
            {
                "name": "Dương Thanh Phụng",
                "email": "",
                "phone": "124123",
                "province": {
                    "name": "Tỉnh Hà Giang",
                    "code": 2,
                    "division_type": "tỉnh",
                    "codename": "tinh_ha_giang",
                    "phone_code": 219,
                    "districts": []
                },
                "district": {
                    "name": "Huyện Đồng Văn",
                    "code": 26,
                    "division_type": "huyện",
                    "codename": "huyen_dong_van",
                    "province_code": 2,
                    "wards": []
                },
                "wards": {
                    "name": "Xã Lũng Cú",
                    "code": 715,
                    "division_type": "xã",
                    "codename": "xa_lung_cu",
                    "district_code": 26
                }
            },
            {
                "name": "Dương Thanh aa",
                "email": "",
                "phone": "124123",
                "province": {
                    "name": "Tỉnh Hà Giang",
                    "code": 2,
                    "division_type": "tỉnh",
                    "codename": "tinh_ha_giang",
                    "phone_code": 219,
                    "districts": []
                },
                "district": {
                    "name": "Huyện Đồng Văn",
                    "code": 26,
                    "division_type": "huyện",
                    "codename": "huyen_dong_van",
                    "province_code": 2,
                    "wards": []
                },
                "wards": {
                    "name": "Xã Lũng Cú",
                    "code": 715,
                    "division_type": "xã",
                    "codename": "xa_lung_cu",
                    "district_code": 26
                }
            }
        ],
        "cart": [],
        "updatedAt": 1686997405751,
        "createdAt": 1616346753759,
        "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL-bdnSJ-NkU6gscunAOsrKDHDnmAeqWXA4YrQHa5yMg&s=10"
    }));
    const user = JSON.parse(sessionStorage.getItem("user"));
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
                    <div>
                        {user === null ?
                            <> <img className="rounded-circle mr-3" style={{width: "40px", height: "40px",}}
                                    src="data:image/png;base64,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"></img>
                                <Link to={`/dang-nhap`}> <span>Cá nhân</span></Link></> :
                            <> <img className="rounded-circle mr-3" style={{width: "40px", height: "40px",}}
                                    src={user.avatar}></img>
                                <Link to={'/ca-nhan'}> <span>{user.name}</span></Link> </>}
                    </div>
                </div>
            </MDBContainer></div>
    );
};

export default Search

export async function loadProductsBySearch({params}) {
    return 'tim-kiem';
}