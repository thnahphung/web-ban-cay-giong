import AxiosClient from "./AxiosClient";

const CategoryApi = {
    getAll(params) {
        const url = '/categories';
        return AxiosClient.get(url, {params})
    },
    get(id) {
        const url = `/categories/${id}`;
        return AxiosClient.get(url)
    },
    add(data) {
        const url = '/categories';
        return AxiosClient.post(url, data)
    },
    update(data) {
        const url = `/categories/${data.id}`;
        return AxiosClient.get(url, data)
    },
    remove(id) {
        const url = `/categories/${id}`;
        return AxiosClient.get(url)
    }
}

export default CategoryApi;