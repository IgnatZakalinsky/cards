import * as axios from "axios";


const instance = axios.create({
    baseURL: 'http://localhost:3005/tree'
});

export const checkDeckAPI = { // отправляем на сервер запрос
    objectsFromServer() {
        return instance.get(`/folderId=${0}`)
    }
}