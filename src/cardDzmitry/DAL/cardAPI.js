import * as axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:3005'
});

export const cardAPI = {

    async getUser(userId) {

        try {
            let res = await instance.get(`/users/${userId}`)
            console.log(res.data)
            return res.data;
        } catch (e) {
            console.log(e)
        }
    },


    async getCards(id) {
        try{
            let res = await instance.get(`/cards?deckId=${id}`);
            console.log(res.data);
            return res.data
        }
        catch (e) {
            console.log(e)
        }

    }
};




