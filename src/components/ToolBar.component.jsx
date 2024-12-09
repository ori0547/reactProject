import { Box, IconButton, } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useUserStore } from '../store/user.store'
import { Delete, Edit, FavoriteBorder } from '@mui/icons-material';
import { userService } from '../services/user.services';
import { useNavigate } from 'react-router';
import { bookService } from '../services/book.services';
import { useBookStore } from '../store/book.store';
const { toggleFavorites } = userService

export default function ToolBar({ book }) {
    const { books, setBooks } = useBookStore();
    const { user, setUser } = useUserStore();
    const isOwner = user?.isBusiness && user._id === book.userId;
    const liked = user?.favorites?.some((favorite) => favorite === book._id);
    const navigate = useNavigate();

    const onEdit = (e) => {
        e.stopPropagation();
        navigate(`/edit-book/${book._id}`);
    };

    const onDelete = async (e) => {
        e.stopPropagation();

        if (confirm('Are you sure you want to delete this book?')) {
            await bookService.deleteBook(book); // delete in backend (from database)
            setBooks(books.filter(({ _id }) => _id != book._id)); // delete in frontend (from state)
            setUser({ ...user, favorites: user.favorites.filter((id) => id != book._id) });
        }
    };

    const toggleLike = async (event) => {
        event.stopPropagation();
        const newFavorites = await toggleFavorites(book._id);
        setUser({ ...user, favorites: newFavorites });
    };

    if (!user) return;

    return (
        <Box>
            <IconButton onClick={toggleLike}>
                <FavoriteBorder style={{ color: liked ? "red" : "grey" }} />
            </IconButton>
            {(user.isAdmin || isOwner) &&
                <>
                    <IconButton onClick={onEdit}>
                        <Edit />
                    </IconButton>
                    <IconButton onClick={onDelete}>
                        <Delete />
                    </IconButton>
                </>
            }
        </Box>
    );
}
