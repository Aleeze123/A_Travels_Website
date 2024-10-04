import Image from 'next/image';
import Navbar from '@/components/Navbar';

const Destinations = () => {
    return (
        <div>
            <Navbar />
            <main className="pt-20 px-6 bg-gray-100">
                <h1 className="text-4xl font-bold text-center text-blue-600">Top Travel Destinations</h1>
                <p className="mt-4 text-lg text-center text-gray-700">
                    Discover breathtaking places and unique experiences around the world.
                </p>
                <section className="mt-12">
                    <h2 className="text-3xl font-semibold text-center text-blue-500">Explore the World</h2>
                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        <div className="bg-white p-4 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
                            <Image src="/paris.jpeg" alt="Paris" width={400} height={300} className="rounded-lg" />
                            <h3 className="font-bold text-xl mt-4">Paris</h3>
                            <p className="mt-2 text-gray-600">The City of Lights offers rich history, art, and cuisine.</p>
                           
                        </div>
                        <div className="bg-white p-4 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
                            <Image src="/bali.jpeg" alt="Bali" width={400} height={300} className="rounded-lg" />
                            <h3 className="font-bold text-xl mt-4">Bali</h3>
                            <p className="mt-2 text-gray-600">A paradise with beautiful beaches and cultural experiences.</p>
                           
                        </div>
                        <div className="bg-white p-4 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
                            <Image src="/tokyo.jpeg" alt="Tokyo" width={400} height={300} className="rounded-lg" />
                            <h3 className="font-bold text-xl mt-4">Tokyo</h3>
                            <p className="mt-2 text-gray-600">A vibrant city known for its modern architecture and food.</p>
                           
                        </div>
                    </div>
                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        <div className="bg-white p-4 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
                            <Image src="/turkey.jpeg" alt="Turkey" width={400} height={300} className="rounded-lg" />
                            <h3 className="font-bold text-xl mt-4">Turkey</h3>
                            <p className="mt-2 text-gray-600">A country that straddles Europe and Asia, known for its rich history and stunning landscapes.</p>
                           
                        </div>
                        <div className="bg-white p-4 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
                            <Image src="/italy.jpeg" alt="Italy" width={400} height={300} className="rounded-lg" />
                            <h3 className="font-bold text-xl mt-4">Italy</h3>
                            <p className="mt-2 text-gray-600">Famous for its art, cuisine, and breathtaking architecture.</p>
                         
                        </div>
                        <div className="bg-white p-4 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
                            <Image src="/australia.jpeg" alt="Australia" width={400} height={300} className="rounded-lg" />
                            <h3 className="font-bold text-xl mt-4">Australia</h3>
                            <p className="mt-2 text-gray-600">Home to stunning beaches, unique wildlife, and vibrant cities.</p>
                          
                        </div>
                    </div>
                </section>
            </main>
       
        </div>
        
       
    );
};

export default Destinations;
