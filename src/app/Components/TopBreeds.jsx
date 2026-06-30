'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const topBreeds = [
  { 
    name: "Shahiwal", 
    type: "Cow", 
    image: "https://images.pexels.com/photos/34561169/pexels-photo-34561169.jpeg?auto=format&fit=crop&w=600&q=80", 
    popular: "Most Popular" 
  },
  { 
    name: "Black Bengal", 
    type: "Goat", 
    image: "https://images.pexels.com/photos/37519016/pexels-photo-37519016.jpeg?auto=format&fit=crop&w=600&q=80", 
    popular: "Best Meat Quality" 
  },
  { 
    name: "Brahman Cross", 
    type: "Cow", 
    image: "https://images.pexels.com/photos/4753921/pexels-photo-4753921.jpeg?auto=format&fit=crop&w=600&q=80", 
    popular: "Largest Size" 
  },
  { 
    name: "Jamunapari", 
    type: "Goat", 
    image: "https://images.pexels.com/photos/20668461/pexels-photo-20668461.jpeg?auto=format&fit=crop&w=600&q=80", 
    popular: "Premium Breed" 
  },
];

export default function TopBreeds() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12">
        <div>
          <span className="text-emerald-400 uppercase tracking-widest font-bold">DISCOVER</span>
          <h2 className="text-4xl font-bold tracking-tight mt-2">Top Breeds This Season</h2>
        </div>
        <Link href="/animals" className="text-amber-400 hover:text-amber-300 font-medium flex items-center gap-2 mt-4 md:mt-0">
          Browse All Breeds 
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {topBreeds.map((breed, idx) => (
          <div key={idx} className="group relative rounded-3xl overflow-hidden border border-zinc-700 hover:border-emerald-500 transition-all">
            <div className="h-80 relative">
              <Image 
                src={breed.image} 
                alt={breed.name}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                width={500}
                height={400}
              />
              <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/90 via-black/60 to-transparent h-2/3" />
            </div>
            
            <div className="absolute bottom-6 left-6 right-6">
              <span className="inline-block bg-emerald-500 text-zinc-950 text-xs font-bold px-3 py-1 rounded-full mb-3">
                {breed.popular}
              </span>
              <h3 className="text-2xl font-bold text-white">{breed.name}</h3>
              <p className="text-emerald-400 text-sm">{breed.type}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}