import axios from 'axios'
import { userService } from './user.services';

const BASE_URL = process.env.NODE_ENV === 'production'
    ? '/'
    : 'http://localhost:8080/'


// var axios = Axios.create({
//     withCredentials: true
// })

export const httpService = {
    get(endpoint, data) {
        return ajax(endpoint, 'GET', data)
    },
    post(endpoint, data) {
        return ajax(endpoint, 'POST', data)

    },
    put(endpoint, data) {
        return ajax(endpoint, 'PUT', data)
    },
    patch(endpoint, data) {
        return ajax(endpoint, 'PATCH', data)
    },
    delete(endpoint, data) {
        return ajax(endpoint, 'DELETE', data)
    }
}

async function ajax(endpoint, method = 'GET', data = null) {
    try {
        const token = userService.getToken();

        const res = await axios.request({
            url: `${BASE_URL}${endpoint}`,
            method,
            data,
            params: (method === 'GET') ? data : null,
            headers: { "x-auth-token": token }
        })

        return res.data
    } catch (err) {
        console.log(`Had Issues ${method}ing to the backend, endpoint: ${endpoint}, with data: `, data)
        console.dir(err)
        if (err.response && err.response.status === 401) {
            sessionStorage.clear()
            window.location.assign('/')
        }
        throw err
    }
}
