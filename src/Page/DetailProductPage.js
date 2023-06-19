import Image from "../Component/detail-product/Image";
import Introduce from "../Component/detail-product/Introduce";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Footer from "../Component/Footer";
import { useLoaderData } from "react-router-dom"; import { useEffect } from "react";
import ProductApi from "../api/ProductApi";

import AddressBook from "../Component/detail-product/AddressBook";
import SameProduct from "../Component/detail-product/same-product";
import { useState } from "react";
import Loading from "../Component/Loading";
import CommentPage from "../Component/detail-product/CommentPage";


const DetailProductPage = () => {
    const [product, setProduct] = useState();
    const urlParam = useLoaderData();


    useEffect(() => {
        const fetchProduct = async () => {
            const param = {
                urlParam: urlParam
            }
            const data = await ProductApi.getAll(param);
            setProduct(data[0]);
        }
        fetchProduct().catch(console.error);
    }, []);

    if (product === undefined) {
        return (<div style={{ height: "600px" }} className='d-flex justify-content-center align-items-center'>
            <Loading />
        </div>)
    }

    return (
        <div>
            <AddressBook product={product} style={{ maxWidth: '1920px' }} />
            <MDBContainer>
                <div>
                    <MDBRow >
                        <MDBCol md="">
                            <Image listImage={product.image} />
                        </MDBCol>
                        <MDBCol> <Introduce product={product} /> </MDBCol>
                    </MDBRow>
                    <div className="descriptionProduct mt-5" dangerouslySetInnerHTML={{ __html: product.description }}></div>
                    <CommentPage product={product} />

                    <SameProduct />
                </div>
            </MDBContainer>
        </div>
    )

}
export default DetailProductPage;
export async function loadProduct({ params }) {
    return params.urlParam;
}