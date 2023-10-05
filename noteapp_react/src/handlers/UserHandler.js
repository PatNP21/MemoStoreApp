import axios from 'axios'

export class UserHandler {

    baseURL = 'https://memo-store-45jiz3qf2-patnp21.vercel.app'

    registerNewUser(data) {
        return axios.post(`${this.baseURL}/registerUser/`, data)
    }

    loginToTheService(data) {
        return axios.post(`/login_/`, data)
    }
}

export default UserHandler