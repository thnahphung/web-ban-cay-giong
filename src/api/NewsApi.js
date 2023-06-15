import AxiosClient from "./AxiosClient";

const NewsApi = {
    getAll(params) {
        const url = '/news';
        return AxiosClient.get(url, {params})
    },
    get(id) {
        const url = `/news/${id}`;
        return AxiosClient.get(url)
    },
    add(data) {
        const url = '/news';
        return AxiosClient.post(url, data)
    },
    update(data) {
        const url = `/news/${data.id}`;
        return AxiosClient.get(url, data)
    },
    remove(id) {
        const url = `/news/${id}`;
        return AxiosClient.get(url)
    }
}

export default NewsApi;