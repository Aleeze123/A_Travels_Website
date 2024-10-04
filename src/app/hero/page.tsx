import Link from 'next/link';
import Image from 'next/image'; // Import the Image component
import Navbar from '@/components/Navbar';

const Hero = () => {
    return (
        <div>
            <Navbar />
            <main className="pt-20 px-6 bg-gray-50">
                <section className="text-center bg-blue-200 py-12 rounded-lg shadow-md">
                    <h1 className="text-4xl font-bold text-gray-800">Welcome to Aleeza&apos;s Travel Guide</h1>
                    <p className="mt-4 text-lg text-gray-700">Discover amazing places and tips for your next adventure!</p>
                    <div className="flex justify-center mt-9">
                    <div className="relative" style={{ width: '150px', height: '150px' }}>
                            <Image 
                                src="/wow.jpeg" 
                                alt="Travel Guide" 
                                layout="fill" // This will allow the image to fill the parent div
                                className="object-cover rounded-full border-4 border-gray-300" 
                            />
                        </div>
                    </div>

                    <Link href="/destinations">
                        <button className="mt-6 bg-blue-500 text-white rounded px-6 py-3 hover:bg-blue-600 transition duration-300">
                            Explore Destinations
                        </button>
                    </Link>
                </section>
            </main>
        </div>
    );
};

export default Hero;
