import { Box, IconButton, } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useUserStore } from '../store/user.store'
import { Edit, FavoriteBorder } from '@mui/icons-material';
import { userService } from '../services/user.services';
import { useNavigate } from 'react-router';
const { toggleFavorites } = userService

export default function ToolBar({ book }) {

    const [liked, setLiked] = useState(false);
    const { user, setUser } = useUserStore();
    const navigate = useNavigate()
    useEffect(() => {
        if (user) {
            const isBookLiked = user?.favorites?.some(favorite => favorite === book._id);
            setLiked(isBookLiked);
        }
    }, [user, book]);

    const onEdit = (event) => {
        event.stopPropagation()
        navigate(`/edit-book/${book._id}`)

    }

    const toggleLike = async (event) => {
        event.stopPropagation()
        setLiked(!liked);
        const newFavorites = await toggleFavorites(book._id)
        setUser({ ...user, favorites: newFavorites })
    };


    if (!user) return;
    return (
        <Box>
            <IconButton onClick={toggleLike}>
                <FavoriteBorder style={{ color: liked ? "red" : "grey" }} />
            </IconButton>
            {user?.isAdmin || (user.isBusiness && user._id === book.userId) &&
                <IconButton onClick={onEdit}>
                    <Edit />
                </IconButton>
            }
        </Box>

    )
}
