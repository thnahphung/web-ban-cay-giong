import AxiosClient from "./AxiosClient";

const OrderApi = {
    getAll(params) {
        const url = '/orders';
        return AxiosClient.get(url, {params})
    },
    get(id) {
        const url = `/orders/${id}`;
        return AxiosClient.get(url)
    },
    add(data) {
        const url = '/orders';
        return AxiosClient.post(url, data)
    },
    update(data) {
        const url = `/orders/${data.id}`;
        return AxiosClient.get(url, data)
    },
    remove(id) {
        const url = `/orders/${id}`;
        return AxiosClient.get(url)
    }
}

export default OrderApi;