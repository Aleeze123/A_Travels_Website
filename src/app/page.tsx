"use client";

import Navbar from "@/components/Navbar";
import Hero from './hero/page';
import AboutPage from "./about/page";
import Destinations from './destinations/page';
import Tips from './tips/page';
import ContactPage from './contact/page';


export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto px-4 py-6 mt-24">
        <Hero />
        <AboutPage />
        <Destinations />
        <Tips />
        <ContactPage />
      </main>
    
    </div>
  );
}
