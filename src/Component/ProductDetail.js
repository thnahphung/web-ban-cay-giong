import {useLoaderData} from "react-router-dom";
import {products} from "../Data/ProductData";

export function ProductDetail() {
    const product = useLoaderData();

    return (<div>
        <div>{product.name}</div>
        <img src={product.img} alt=""/>
        <div>{product.des}</div>
    </div>);
}

export async function loadProduct({params}) {
    return products.find((product) => product.id == params.idProduct);
}