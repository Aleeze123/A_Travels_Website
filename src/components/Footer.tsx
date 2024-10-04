import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-blue-200 text-center py-8 mt-10">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-black">Aleeza Travels</h2>
                <p className="mt-2 text-gray-800">Explore the world with us!</p>
                <div className="mt-6 flex justify-center">
                    <a href="/destinations" className="text-gray-800 hover:text-blue-600 mx-4 transition duration-300">Services</a>
                    <a href="/about" className="text-gray-800 hover:text-blue-600 mx-4 transition duration-300">About US</a>
                    <a href="/contact" className="text-gray-800 hover:text-blue-600 mx-4 transition duration-300">Contact</a>
                </div>
                <p className="mt-6 text-gray-800">&copy; 2024 Aleeza Travel. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;