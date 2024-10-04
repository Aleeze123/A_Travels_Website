import Navbar from '@/components/Navbar';
import { AiOutlineCheckCircle } from 'react-icons/ai';

const Tips = () => {
    return (
        <div>
            <Navbar />
            <main className="pt-20 px-6 bg-gray-100 min-h-screen">
                <h1 className="text-4xl font-bold text-center text-blue-600">Travel Tips</h1>
                <section className="mt-12">
                    <h2 className="text-3xl font-semibold text-center text-blue-500 mb-4">Make the Most of Your Travels</h2>
                    <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {tipsData.map((tip, index) => (
                            <li key={index} className="bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 flex items-start">
                                <AiOutlineCheckCircle className="text-green-500 text-3xl mr-4" />
                                <div>
                                    <h3 className="font-bold text-gray-800 text-lg">{tip.title}</h3>
                                    <p className="text-gray-700">{tip.description}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </section>
            </main>
        </div>
    );
};

// Sample data for tips
const tipsData = [
    {
        title: 'Pack Light',
        description: 'Only take what you need. This will save time and hassle at airports.',
    },
    {
        title: 'Plan Ahead',
        description: 'Research your destination to make the most of your time there.',
    },
    {
        title: 'Stay Connected',
        description: 'Use travel apps to navigate and stay in touch with loved ones.',
    },
    {
        title: 'Keep Important Documents Safe',
        description: 'Make copies of your passport and important documents. Keep them in a safe place.',
    },
    {
        title: 'Try Local Cuisine',
        description: 'Don’t miss the chance to taste local dishes. It’s part of the travel experience!',
    },
    {
        title: 'Stay Flexible',
        description: 'Sometimes plans change. Be open to new experiences and opportunities.',
    },
];

export default Tips;
