import AxiosClient from "./AxiosClient";

const ProductApi = {
    getAll(params) {
        const url = '/products';
        return AxiosClient.get(url, {params})
    },
    get(id) {
        const url = `/products/${id}`;
        return AxiosClient.get(url)
    },
    add(data) {
        const url = '/products';
        return AxiosClient.post(url, data)
    },
    update(data) {
        const url = `/products/${data.id}`;
        return AxiosClient.get(url, data)
    },
    remove(id) {
        const url = `/products/${id}`;
        return AxiosClient.get(url)
    }
}

export default ProductApi;