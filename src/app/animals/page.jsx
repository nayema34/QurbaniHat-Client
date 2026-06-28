'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { MdOutlinePets, MdSearch, MdTune } from 'react-icons/md';
import Image from 'next/image';

export default function AnimalsPage() {
  const [animals, setAnimals] = useState([]);
  const [filteredAnimals, setFilteredAnimals] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('All');
  const [sortBy, setSortBy] = useState('default');

  useEffect(() => {
    fetch('/db.json')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to load marketplace database');
        return res.json();
      })
      .then((data) => {
        setAnimals(data);
        setFilteredAnimals(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching data:', err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    let result = [...animals];

    if (searchTerm) {
      result = result.filter((animal) =>
        animal.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        animal.breed.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedType !== 'All') {
      result = result.filter((animal) => animal.type === selectedType);
    }

    if (sortBy === 'price-asc') result.sort((a, b) => a.price - b.price);
    else if (sortBy === 'price-desc') result.sort((a, b) => b.price - a.price);
    else if (sortBy === 'weight-desc') result.sort((a, b) => b.weight - a.weight);

    setFilteredAnimals(result);
  }, [searchTerm, selectedType, sortBy, animals]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-950 via-emerald-900 to-zinc-950 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-14 h-14 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-emerald-400/70 text-sm tracking-wider">Loading Premium Stock...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-emerald-950 via-emerald-900 to-zinc-950 text-zinc-50 min-h-screen pb-20">
      {/* Compact Header */}
      <div className="border-b border-emerald-900/50 py-10 px-6">
        <div className="max-w-7xl mx-auto">
          <nav className="text-emerald-400/70 text-sm mb-3">
            <Link href="/" className="hover:text-emerald-300 transition-colors">Home</Link> 
            <span className="mx-2">•</span> Livestock Marketplace
          </nav>
          
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
                Live Stock <span className="text-amber-400">Market</span>
              </h1>
              <p className="text-zinc-400 mt-2">
                Verified • Vet-checked • Shariah-compliant
              </p>
            </div>
            <p className="text-emerald-400 font-medium text-lg">
              {filteredAnimals.length} animals available
            </p>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-6 -mt-6 relative z-10">
        <div className="bg-zinc-900/95 backdrop-blur-xl border border-zinc-700 rounded-3xl p-5 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
            <div className="lg:col-span-5 relative">
              <MdSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-400 text-2xl" />
              <input 
                type="text"
                placeholder="Search by name or breed..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-700 rounded-2xl pl-14 py-3.5 text-base focus:outline-none focus:border-emerald-500 placeholder:text-zinc-500 transition-all"
              />
            </div>

            <div className="lg:col-span-4 flex gap-2 overflow-x-auto pb-1">
              {['All', 'Cow', 'Goat'].map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-5 py-2.5 rounded-2xl text-sm font-semibold whitespace-nowrap transition-all ${
                    selectedType === type 
                      ? 'bg-emerald-500 text-zinc-950 shadow-lg' 
                      : 'bg-zinc-800 hover:bg-zinc-700 text-zinc-300'
                  }`}
                >
                  {type === 'All' ? 'All Animals' : `${type}s`}
                </button>
              ))}
            </div>

            <div className="lg:col-span-3">
              <div className="flex items-center gap-3 bg-zinc-950 border border-zinc-700 rounded-2xl px-5 py-3">
                <MdTune className="text-zinc-400 text-xl" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-transparent w-full focus:outline-none text-zinc-300 cursor-pointer text-sm"
                >
                  <option value="default">Recommended</option>
                  <option value="price-desc">Price: High → Low</option>
                  <option value="price-asc">Price: Low → High</option>
                  <option value="weight-desc">Weight: Heavy First</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto px-6 mt-10">
        {filteredAnimals.length === 0 ? (
          <div className="text-center py-20 bg-zinc-900/50 rounded-3xl border border-dashed border-zinc-700">
            <p className="text-zinc-400 text-xl">No animals found.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAnimals.map((animal) => (
              <div 
                key={animal.id}
                className="group bg-zinc-900/90 border border-zinc-700 rounded-3xl overflow-hidden hover:border-emerald-500/50 transition-all duration-300 flex flex-col h-full hover:shadow-2xl hover:shadow-emerald-900/30"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image 
                    src={animal.image} 
                    alt={animal.name}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                    width={600}
                    height={400}
                  />
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    <span className="bg-emerald-600/90 text-white text-xs font-bold px-3 py-1 rounded-xl backdrop-blur-md">
                      {animal.breed}
                    </span>
                    <span className="bg-amber-500/90 text-zinc-950 text-xs font-bold px-3 py-1 rounded-xl backdrop-blur-md">
                      {animal.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 text-emerald-400 mb-2">
                    <MdOutlinePets />
                    <span className="text-xs font-medium uppercase tracking-widest">{animal.type}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors line-clamp-2">
                    {animal.name}
                  </h3>

                  <p className="text-sm text-zinc-400 mt-1">
                    📍 {animal.location} • {animal.age} years
                  </p>

                  <div className="mt-auto pt-8 border-t border-zinc-800 grid grid-cols-2 gap-4 text-center">
                    <div>
                      <p className="text-xs text-zinc-500 tracking-wider">WEIGHT</p>
                      <p className="text-2xl font-black text-white">{animal.weight} <span className="text-base font-normal text-zinc-400">kg</span></p>
                    </div>
                    <div>
                      <p className="text-xs text-zinc-500 tracking-wider">PRICE</p>
                      <p className="text-2xl font-bold text-emerald-400">৳{animal.price.toLocaleString()}</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    href={`/animals/${animal.id}`}
                    className="block w-full text-center bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-4 rounded-2xl transition-all active:scale-[0.985]"
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}