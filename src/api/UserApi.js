import AxiosClient from "./AxiosClient";

const UserApi = {
    getAll(params) {
        const url = '/users';
        return AxiosClient.get(url, {params})
    },
    get(id) {
        const url = `/users/${id}`;
        return AxiosClient.get(url)
    },
    add(data) {
        const url = '/users';
        return AxiosClient.post(url, data)
    },
    update(data) {
        const url = `/users/${data.id}`;
        return AxiosClient.get(url, data)
    },
    remove(id) {
        const url = `/users/${id}`;
        return AxiosClient.get(url)
    }
}

export default UserApi;