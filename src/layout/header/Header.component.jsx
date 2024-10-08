import React, { useEffect } from 'react'
import { useUserStore } from '../../store/user.store';
import { Link } from 'react-router-dom';
import ROUTES from '../../routes/routesModel';
import { Box } from '@mui/material';

export default function Header() {
    const { user, setUser } = useUserStore();
    useEffect(() => {
        if (!user) {
            setUser({
                id: 2,
                name: "mark",
                isAdmin: true,
                likedBooks: []
            })
        }
    }, [])
    return (
        <div>
            <header className='header'>
                <Box className='logo'>
                    <img src="https://www.svgrepo.com/show/765/library.svg" alt="library img" className='imgLogo' />
                    <Link to={ROUTES.ROOT} className='a-logo'>ChapterCloud</Link></Box>
                <nav className='nav'>
                    <ul className='ul'>
                        <li className='li'><Link to={ROUTES.ROOT} className='a-li'>HOME</Link></li>
                        {user && <li className='li'><Link to={ROUTES.FAVORITES} className='a-li'>FAVORITES</Link></li>}
                        <li className='li'><Link to={ROUTES.ABOUT} className='a-li'>ABOUT</Link></li>
                        <li className='li'><Link to={ROUTES.ROOT} className='a-li'>CONTACT</Link></li>

                    </ul>
                </nav>
            </header>
        </div>
    )
}