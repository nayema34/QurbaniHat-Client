'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { MdOutlinePets } from 'react-icons/md';
import Image from 'next/image';

export default function Featured() {
  const [featuredAnimals, setFeaturedAnimals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/db.json')
      .then((res) => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then((data) => {
        setFeaturedAnimals(data.slice(0, 4));
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching livestock data:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section className="max-w-7xl mx-auto px-6 py-20 bg-gradient-to-br from-emerald-950 via-emerald-900 to-zinc-950">
        <div className="h-8 bg-zinc-800 rounded w-48 mb-12 animate-pulse"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[...Array(4)].map((_, idx) => (
            <div key={idx} className="bg-zinc-900/70 backdrop-blur-sm rounded-3xl h-80 border border-zinc-700 animate-pulse" />
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="w-full mt-12 bg-[#0a1f1a] py-20  ">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-sm font-bold text-emerald-400 uppercase tracking-widest block mb-2">
              PREMIUM SELECTION
            </span>
            <h2 className="text-4xl font-bold tracking-tight text-white">
              Featured This Week
            </h2>
            <p className="text-zinc-400 mt-3 max-w-md">
              Handpicked healthy and Shariah-compliant animals from trusted farms.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredAnimals.map((animal) => (
            <div
              key={animal.id}
              className="bg-zinc-900/80 border border-zinc-700/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl hover:shadow-emerald-900/50 hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full"
            >
              <div className="relative h-60 overflow-hidden">
                <Image
                  src={animal.image}
                  alt={animal.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  width={600}
                  height={400}
                />
                <span className="absolute top-4 left-4 bg-emerald-600/90 text-white text-xs font-semibold px-3 py-1 rounded-xl backdrop-blur-sm">
                  {animal.breed}
                </span>
                <span className="absolute top-4 right-4 bg-amber-500/90 text-zinc-950 text-xs font-bold px-3 py-1 rounded-xl backdrop-blur-sm">
                  {animal.category}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-2 text-emerald-400 mb-3">
                  <MdOutlinePets className="text-lg" />
                  <span className="uppercase tracking-widest text-xs font-medium">{animal.type}</span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                  {animal.name}
                </h3>

                <p className="text-zinc-400 text-sm mt-1 mb-6">
                   {animal.location} • {animal.age} years
                </p>

                <div className="mt-auto pt-6 border-t border-zinc-700 flex items-end justify-between">
                  <div>
                    <span className="block text-xs uppercase tracking-widest text-zinc-500">Live Weight</span>
                    <span className="text-2xl font-black text-white">{animal.weight} kg</span>
                  </div>

                  <div className="text-right">
                    <span className="block text-xs uppercase tracking-widest text-zinc-500">Price</span>
                    <span className="text-2xl font-bold text-emerald-400">
                      ৳{animal.price.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        

        <div className="flex justify-center mt-12">
          <Link
            href="/animals"
            className="inline-flex items-center gap-3 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-semibold px-10 py-4 rounded-2xl transition-all duration-300 text-lg shadow-xl shadow-amber-500/30 hover:shadow-2xl hover:shadow-amber-500/40 active:scale-[0.98]"
          >
            Explore All Animals
          </Link>
        </div>
      </div>
    </section>
  );
}