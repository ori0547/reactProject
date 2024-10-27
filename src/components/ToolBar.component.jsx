import { Box, IconButton, useRadioGroup } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useUserStore } from '../store/user.store'
import { FavoriteBorder } from '@mui/icons-material';
import { userService } from '../services/user.services';
const { toggleFavorites } = userService

export default function ToolBar({ book }) {

    const [liked, setLiked] = useState(false);
    const { user, setUser } = useUserStore();

    useEffect(() => {
        if (user) {
            const isBookLiked = user?.favorites?.some(favorite => favorite === book._id);
            setLiked(isBookLiked);
        }
    }, [user, book]);


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
        </Box>

    )
}
