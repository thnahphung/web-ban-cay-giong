import {
    MDBCarousel,
    MDBCarouselInner,
    MDBCarouselItem,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBBtn
} from "mdbreact";
import CardProduct from "../Component/CardProduct";
import SliderProduct from "../Component/SliderProduct";
import React, {useEffect, useState} from "react";
import CategoryApi from "../api/CategoryApi";
import {loadCategories} from "../store/Action";
import ProductApi from "../api/ProductApi";

const MainPage = () => {
    const [newProducts, setNewProduct] = useState([]);
    const [likeProducts, setLikeProduct] = useState();
    const [otherProducts, setOtherProduct] = useState();

    useEffect(() => {
        const fetchProducts = async () => {
            const params = {
                _start: 10,
                _end: 22
            }
            const data = await ProductApi.getAll(params);
            setNewProduct(data);
        }
        fetchProducts().catch(console.error);
    },[])

    useEffect(() => {
        const fetchProducts = async () => {
            const params = {
                _start: 24,
                _end: 36
            }
            const data = await ProductApi.getAll(params);
            setLikeProduct(data);
        }
        fetchProducts().catch(console.error);
    },[])

    useEffect(() => {
        const fetchProducts = async () => {
            const params = {
                _start: 38,
                _end: 50
            }
            const data = await ProductApi.getAll(params);
            setOtherProduct(data);
        }
        fetchProducts().catch(console.error);
    },[])

    return (
        <MDBContainer>
            <div className="liner-continer">
                <h2 className="title-category">
                    <blod>SẢN PHẨM MỚI:</blod>
                </h2>
            </div>
            <SliderProduct products={newProducts}/>
            <div className="liner-continer">
                <h2 className="title-category">
                    <blod>SẢN PHẨM YÊU THÍCH:</blod>
                </h2>
            </div>
            <SliderProduct  products={likeProducts}/>
            <div className="liner-continer">
                <h2 className="title-category">
                    <blod>:</blod>
                </h2>
            </div>
            <SliderProduct  products={otherProducts}/>
        </MDBContainer>
    );
}
export default MainPage;