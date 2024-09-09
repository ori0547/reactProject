import React from 'react'

export default function BookCard({ book }) {


    return (
        <div className='flex flex-col item-center book-card'>
            <h2>{book.title}</h2>
            <p>{book.description}</p>
            <img src={book.image} alt={book.title} className='book-img' />

        </div>
    )
}
