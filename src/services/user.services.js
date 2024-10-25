import { jwtDecode } from 'jwt-decode'
import { httpService } from './http.services'


const STORAGE_KEY_USER_TOKEN = 'loggedinUser'
const USER_BASE_URL = 'users/'

export const userService = {
    login,
    logout,
    signup,
    getToken,
    saveToken,
    getLoggedInUser,
    getUsers,
    getById,
    remove,
    save,
    normalizeUser,
    getEmptyUser
}

async function getUsers() {
    try {
        return await httpService.get(USER_BASE_URL)
    } catch (err) {
        throw new Error(err.message || 'An err occurred during getting boards')
    }
}

async function getById(userId) {
    try {
        const user = await httpService.get(USER_BASE_URL + userId)
        return user
    } catch (err) {
        throw new Error(err.message || 'An err occurred during getting user')
    }
}

// To do
async function save(user) {
    try {
        if (user._id) {
            const updatedUser = await httpService.put(USER_BASE_URL + user._id, user)
            // saveLocalUser(updatedUser)
            return updatedUser
        } else {
            return await httpService.post(STORAGE_KEY, user)
        }
    } catch (err) {
        throw new Error(err.message || 'An err occurred during saving user')
    }
}

async function remove(userId) {
    try {
        return await httpService.delete(USER_BASE_URL + userId)
    } catch (err) {
        throw new Error(err.message || 'An err occurred during removing user')
    }
}

async function login(userCred) {
    try {
        const user = await httpService.post(USER_BASE_URL + 'login', userCred)
        if (user) return saveToken(user)
    } catch (err) {
        throw new Error(err.message || 'An err occurred during login')
    }
}

async function signup(userCred) {
    const user = await httpService.post(USER_BASE_URL + "signup", userCred)
    if (user) return saveToken(user)
}

async function logout() {
    sessionStorage.removeItem(STORAGE_KEY_USER_TOKEN)
}

function saveToken(token) {

    // user = { _id: user._id, fullname: user.fullname, likedBooks: user.likedBooks, isAdmin: user.isAdmin }
    sessionStorage.setItem(STORAGE_KEY_USER_TOKEN, JSON.stringify(token))
    return token
}

function getToken() {
    try {
        return JSON.parse(sessionStorage.getItem(STORAGE_KEY_USER_TOKEN))
    } catch (e) {
        return null;
    }
}

function getLoggedInUser() {
    const token = getToken();
    if (token) {
        return jwtDecode(token);
    } else {
        return null;
    }
}

function normalizeUser(input) {
    return {
        name: {
            first: input.first,
            middle: input.middle,
            last: input.last,
        },
        phone: input.phone,
        email: input.email,
        password: input.password,
        // image: {
        //     url: input.url,
        //     alt: input.alt,
        // },
        address: {
            state: input.state,
            country: input.country,
            city: input.city,
            street: input.street,
            houseNumber: input.houseNumber,
            zip: input.zip,
        },
        isBusiness: input.isBusiness,
    };
}

function getEmptyUser() {
    return {
        first: "",
        middle: "",
        last: "",
        phone: "",
        email: "",
        password: "",
        // url: "",
        // alt: "",
        state: "",
        country: "",
        city: "",
        street: "",
        houseNumber: "",
        zip: "",
        isBusiness: false,
    }
}
