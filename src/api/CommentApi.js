import AxiosClient from "./AxiosClient";

const CommentApi = {
    getAll(params) {
        const url = '/comments';
        return AxiosClient.get(url, { params })
    },
    get(id) {
        const url = `/comments/${id}`;
        return AxiosClient.get(url)
    },
    add(data) {
        const url = '/comments';
        return AxiosClient.post(url, data)
    },
    update(data) {
        const url = `/comments/${data.id}`;
        return AxiosClient.get(url, data)
    },
    remove(id) {
        const url = `/comments/${id}`;
        return AxiosClient.get(url)
    }
}

export default CommentApi;