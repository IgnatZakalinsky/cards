import axios from './axios-instance';

export default {
    createDeck(folderId, name) {
       return axios.post('/tree', {
            folderId,
            type: 'deck',
            name
        }).then(res => res.data)
    },
    deleteDeck(id) {
       return axios.delete(`/tree/${id}`)
    }
};