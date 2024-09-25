import React from 'react'
import { useParams } from 'react-router'
import { booksMock } from '../utils/mocks/book.mock'
import { Box, Container } from '@mui/material';
import ToolBar from '../components/ToolBar.component';
export default function BookPage() {
    const { bookId } = useParams();
    const book = booksMock.find(book => {
        return +bookId === book.id
    })


    return (

        <Box sx={{ display: "flex", gap: "50px", justifyContent: "center" }}>
            <Box sx={{ width: "400px" }}>
                <img src={book.image} alt={book.title} style={{ width: "100%", maxHeight: "80%" }} />
                <Box sx={{ background: "white", textAlign: "center", }}>
                    <ToolBar book={book} />
                </Box>
            </Box>
            <Box sx={{ textAlign: "center", width: "50%" }}>
                <h1 >{book.title}</h1>
                <Box sx={{
                    mt: "40px", fontSize: "1.4em", background: "white", maxHeight: "490px", overflow: "scroll", margin: '20px auto',
                    padding: '20px',
                    border: '1px solid #ccc',
                    borderRadius: '8px',
                    backgroundColor: '#f9f9f9',
                    boxShadow: '2px 2px 12px rgba(0, 0, 0, 0.1)',
                    lineHeight: 1.6,
                    fontFamily: 'Georgia, serif',
                    direction: 'ltr',
                    textAlign: 'justify',
                }}>
                    {book.extendedSummary}
                </Box>
            </Box>

        </Box>
    )
}
