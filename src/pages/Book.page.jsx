import React from 'react'
import { useParams } from 'react-router'
import { booksMock } from '../utils/mocks/book.mock'
import { Box, Container } from '@mui/material';
export default function BookPage() {
    const { bookId } = useParams();
    const book = booksMock.find(book => {
        return +bookId === book.id
    })


    return (
        <Box sx={{ mx: "20px", display: "flex", gap: "15px" }}>
            <Box sx={{ width: "400px" }}>
                <img src={book.image} alt={book.title} style={{ width: "100%" }} />
            </Box>
            <Box sx={{ textAlign: "center", width: "50%" }}>
                <h1>{book.title}</h1>
            </Box>
        </Box>
    )
}
