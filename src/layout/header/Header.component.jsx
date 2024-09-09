import React from 'react';

export default function Header() {
    return (
        <div>
            <header className="flex justify-between items-center bg-orange-400 text-white p-4 fixed w-full z-50">
                <div className="flex items-center space-x-4">
                    <img
                        src="https://www.svgrepo.com/show/765/library.svg"
                        alt="library img"
                        className="w-12 h-12"
                    />
                    <a href="#" className="text-xl font-bold">ChapterCloud</a>
                </div>
                <nav>
                    <ul className="flex space-x-8">
                        <li>
                            <a href="#" className="hover:underline text-lg">HOME</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline text-lg">ABOUT</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline text-lg">CONTACT</a>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}
