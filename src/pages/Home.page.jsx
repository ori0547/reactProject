import React from 'react'
import BookList from '../components/BookList.component'
import { booksMock } from '../utils/mocks/book.mock'
export default function HomePage() {
    return (
        <div>
            <BookList books={booksMock} />
        </div>
    )
}
