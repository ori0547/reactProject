import React from 'react';
import { useParams } from 'react-router';
import { Box, CircularProgress, Container, Typography } from '@mui/material';
import ToolBar from '../components/ToolBar.component';
import { useBookStore } from '../store/book.store';

export default function BookPage() {
    const { bookId } = useParams();
    const { books } = useBookStore();
    const book = books?.find(book => bookId === book._id);
    return !books ? (<CircularProgress />) : book ? (
        <Container>
            <Box sx={{ mx: "20px", display: "flex", gap: "15px", flexDirection: "column", alignItems: "center" }}>
                <Box sx={{ width: "400px", textAlign: "center", mt: "80px", boxShadow: 3, borderRadius: "10px", p: "20px", backgroundColor: "#f5f5f5" }}>
                    <img src={book.image} alt={book.title} style={{ width: "100%", maxHeight: "80%", borderRadius: "10px" }} />
                    <ToolBar book={book} />
                </Box>

                <Box sx={{ textAlign: "center", width: "50%" }}>
                    <Typography variant="h4" sx={{ fontWeight: "bold", mb: "20px" }}>{book.title}</Typography>


                    <Typography variant="body1" sx={{ mt: "20px", whiteSpace: "pre-line", marginBottom: "30px" }}>
                        {book.description}
                    </Typography>
                </Box>
            </Box>
        </Container>
    ) : (<h1>book not found</h1>);
}
