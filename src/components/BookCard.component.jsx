import React from 'react';

export default function BookCard({ book }) {
    const descriptionStyle = {
        display: '-webkit-box',
        WebkitLineClamp: 2,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    };

    return (
        <div className="flex flex-col items-center book-card">
            <h2>{book.title}</h2>
            <p style={descriptionStyle}>{book.description}</p>
            <img src={book.image} alt={book.title} className="book-img" />
        </div>
    );
}
