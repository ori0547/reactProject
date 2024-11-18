import { httpService } from './http.services'



const BOOK_BASE_URL = 'books/'

export const bookService = {
    getBooks,
    getById,
    getBookList,
    getEmptyBook,
    save,
    editBook,
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

async function save(book) {
    try {
        if (book._id) {
            const updatedBook = await httpService.put(BOOK_BASE_URL + book._id, book)
            return updatedBook
        } else {
            return await httpService.post(BOOK_BASE_URL, book)
        }
    } catch (err) {
        throw new Error(err.message || 'An err occurred during saving book')
    }
}

function editBook(book) {
    const res = {};
    Object.keys(getEmptyBook()).forEach((key) => res[key] = book[key]);
    return res;
}

function getEmptyBook() {
    return {
        title: "",
        summary: "",
        description: "",
        price: "",
        image: "",
        // author: "",
    };
}
