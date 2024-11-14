import { httpService } from './http.services'



const BOOK_BASE_URL = 'books/'

export const bookService = {
    getBooks,
    getById,
    getBookList,

}

async function getBooks() {
    try {
        return await httpService.get(BOOK_BASE_URL)
    } catch (err) {
        throw new Error(err.message || 'An err occurred during getting books')
    }
}

async function getById(bookId) {
    try {
        return await httpService.get(BOOK_BASE_URL + bookId)

    } catch (err) {
        throw new Error(err.message || 'An err occurred during getting book')
    }
}

async function getBookList(bookIds) {
    try {

        return await httpService.patch(BOOK_BASE_URL + "book-list", { bookIds })

    } catch (err) {
        throw new Error(err.message || 'An err occurred during getting book')
    }
}
