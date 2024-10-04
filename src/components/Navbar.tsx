'use client';

import { useState } from 'react';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header className="w-full bg-white flex items-center justify-between px-6 py-4 shadow-md border-b border-gray-200 fixed top-0 left-0 z-50">
            <div className="text-black text-3xl font-bold tracking-wide">✈️A TRAVELS </div>
            <div className="md:hidden flex items-center">
                <button onClick={toggleMenu} className="text-black text-2xl">
                    {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
                </button>
            </div>
            <div
                className={`fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            >
                <nav
                    className={`fixed inset-0 bg-white p-6 space-y-6 flex flex-col justify-center items-center transform transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
                >
                    <button onClick={toggleMenu} className="absolute top-6 right-6 text-black text-2xl">
                        <AiOutlineClose />
                    </button>
                    <Link href="/" className="text-black text-2xl font-medium" onClick={toggleMenu}>
                        Home
                    </Link>
                    <Link href="/about" className="text-black text-2xl font-medium" onClick={toggleMenu}>
                        About
                    </Link>
                    <Link href="/destinations" className="text-black text-2xl font-medium" onClick={toggleMenu}>
                        Destinations
                    </Link>
                    <Link href="/tips" className="text-black text-2xl font-medium" onClick={toggleMenu}>
                        Travel Tips
                    </Link>
                    <Link href="/contact" className="text-black text-2xl font-medium" onClick={toggleMenu}>
                        Contact
                    </Link>
                </nav>
            </div>
            <nav className="hidden md:flex space-x-8 text-black text-base font-medium">
                <Link href="/" className="hover:text-blue-500 transition duration-300">Home</Link>
                <Link href="/about" className="hover:text-blue-500 transition duration-300">About Us</Link>
                <Link href="/destinations" className="hover:text-blue-500 transition duration-300">Destinations</Link>
                <Link href="/tips" className="hover:text-blue-500 transition duration-300">Travel Tips</Link>
                <Link href="/contact" className="hover:text-blue-500 transition duration-300">Contact</Link>
            </nav>
        </header>
    );
};

export default Navbar;
