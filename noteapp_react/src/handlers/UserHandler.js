import axios from 'axios'

export class UserHandler {

    baseURL = 'https://memo-store-45jiz3qf2-patnp21.vercel.app:2000'

    registerNewUser(data) {
        return axios.post(`${this.baseURL}/registerUser/`, data)
    }

    loginToTheService(data) {
        return axios.post(`${this.baseURL}/login/`, data)
    }
}

export default UserHandler