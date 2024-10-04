'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';

const ContactPage: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name || !email || !message) {
            setError('All fields are required.');
            return;
        }
        // Handle form submission logic here
        setSubmitted(true);
        setError('');
        // Reset form fields
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div>
            <Navbar />
            <main className="pt-20 px-6 bg-gray-100 min-h-screen">
                <div className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-lg">
                    <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
                    <p className="text-lg text-center mb-4">Location: Karachi, Pakistan</p>
                    {submitted && <p className="text-green-500 text-center mb-4">Thank you for your message!</p>}
                    {error && <p className="text-red-500 text-center mb-4">{error}</p>}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block mb-1 font-medium">Name:</label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                placeholder="Enter your name"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-1 font-medium">Email:</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block mb-1 font-medium">Message:</label>
                            <input
                                id="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 min-h-[100px]"
                                placeholder="Type your message"
                            />
                        </div>
                        <button type="submit" className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200">
                            Send
                        </button>
                    </form>
                </div>
            </main>
        </div>
    );
};

export default ContactPage;
