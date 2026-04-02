import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Collection from "@/components/Collection";
import Footer from "@/components/Footer";

function HomePage() {
  return (
    <div className="bg-[#fcfcfc] text-[#1a1a1a] min-h-screen font-sans selection:bg-[#1f2937] selection:text-white">
      <Navbar />
      <main>
        <Hero />

        {/* The Edit Section */}
        <div id="the-edit">
          <Collection />
        </div>

        {/* Brand Ethos / Legacy Section */}
        <section
          id="legacy"
          className="py-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto flex flex-col items-center text-center"
        >
          <span className="text-xs md:text-sm uppercase tracking-[0.3em] text-muted-foreground mb-8">
            Our Legacy
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif leading-tight mb-8 max-w-4xl text-[#1a1a1a]">
            A commitment to uncompromising quality and timeless elegance.
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed font-light mb-16">
            Every piece we create is a testament to the art of fine tailoring.
            We source only the rarest materials, working with master artisans who have
            honed their craft over generations. Our ethos is rooted in sustainability,
            longevity, and a profound respect for the heritage of luxury fashion.
          </p>
          <div className="h-32 w-[1px] bg-gradient-to-b from-[#1f2937] to-transparent opacity-50"></div>
        </section>

        {/* Atelier Section */}
        <section id="atelier" className="py-24 md:py-32 bg-[#1a1a1a] text-[#fcfcfc]">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
            <div className="order-2 md:order-1 relative group overflow-hidden">
              <div className="absolute inset-0 bg-[#1f2937]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 pointer-events-none"></div>
              <img
                src="https://placehold.co/800x1000/2a2a2a/fcfcfc?text=The+Atelier"
                alt="Inside the Atelier"
                className="w-full h-[60vh] md:h-[80vh] object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
            <div className="order-1 md:order-2 flex flex-col items-start">
              <span className="text-xs md:text-sm uppercase tracking-[0.3em] text-[#1f2937] mb-8">
                The Atelier
              </span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif leading-tight mb-8">
                Where vision takes shape.
              </h2>
              <p className="text-base md:text-lg text-gray-400 leading-relaxed font-light mb-10">
                Nestled in the heart of the fashion capital, our atelier is a sanctuary of creativity and precision.
                Here, sketches evolve into silhouettes, and raw fabrics are transformed into wearable art.
                Each garment undergoes rigorous inspection, ensuring that the final creation transcends mere clothing
                to become a legacy of its own.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}