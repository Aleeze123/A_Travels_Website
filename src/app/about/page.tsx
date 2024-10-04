import React from 'react';
import Navbar from '@/components/Navbar';
const AboutPage = () => {
    return (
        <div>
            <Navbar />
            <main className="pt-20 px-6 bg-gray-100 min-h-screen">
                <h1 className="text-4xl font-bold text-center text-blue-600">About Us</h1>
                <section className="mt-12 max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-3xl font-semibold text-blue-500">Our Mission</h2>
                    <p className="mt-4 text-gray-700">
                        At Aleeza&apos;s Travel, we believe that travel is not just about the destination but also about the journey. Our mission is to inspire and empower travelers to explore the world, create unforgettable memories, and connect with diverse cultures.
                    </p>
                </section>
             
                <section className="mt-8 max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-3xl font-semibold text-blue-500">Join Us on This Journey</h2>
                    <p className="mt-4 text-gray-700">
                        Whether you&apos;re a seasoned traveler or planning your first trip, Aleeza&apos;s Travel is here to guide you every step of the way. Explore our resources, connect with fellow travelers, and let&apos;s make your travel dreams a reality!
                    </p>
                </section>
            </main>
        </div>
    );
};

export default AboutPage;
