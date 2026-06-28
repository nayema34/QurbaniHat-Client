'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { MdOutlinePets, MdArrowBack, MdScale, MdAttachMoney, MdLocationOn, MdCalendarToday, MdVerifiedUser } from 'react-icons/md';

export default function AnimalDetailPage() {
  const params = useParams();
  const [animal, setAnimal] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/db.json')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to load database source');
        return res.json();
      })
      .then((data) => {
        // Find the specific item matching the route ID parameter
        const targetId = parseInt(params.id, 10);
        const match = data.find((item) => item.id === targetId);
        setAnimal(match || null);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching animal details:', err);
        setLoading(false);
      });
  }, [params.id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-zinc-950 text-zinc-50 flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="w-12 h-12 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-zinc-400 text-sm tracking-wider">Loading Livestock Profile...</p>
        </div>
      </div>
    );
  }

  if (!animal) {
    return (
      <div className="min-h-screen bg-zinc-950 text-zinc-50 flex flex-col items-center justify-center p-6">
        <h2 className="text-2xl font-black text-zinc-200">Livestock Record Not Found</h2>
        <p className="text-zinc-400 text-sm mt-2 text-center">The item may have been booked or removed from the active digital marketplace registers.</p>
        <Link href="/animals" className="mt-6 px-6 py-3 bg-zinc-900 border border-zinc-800 rounded-xl text-xs font-bold uppercase tracking-wider text-emerald-400 hover:text-emerald-300">
          Return to Marketplace
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-zinc-950 text-zinc-50 min-h-screen font-sans pb-24">
      
      {/* TOP NAVIGATION BACK BAR */}
      <div className="max-w-6xl mx-auto px-6 pt-10">
        <Link href="/animals" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-400 hover:text-emerald-400 transition-colors group">
          <MdArrowBack className="text-lg group-hover:-translate-x-1 transition-transform" /> Back to listings
        </Link>
      </div>

      {/* CORE DISPLAY CONTAINER */}
      <div className="max-w-6xl mx-auto px-6 mt-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* LEFT COLUMN: VISUAL MEDIA HUB */}
        <div className="lg:col-span-7 space-y-4">
          <div className="rounded-3xl overflow-hidden border border-zinc-800/80 aspect-[4/3] bg-zinc-900 shadow-xl relative">
            <img 
              src={animal.image} 
              alt={animal.name} 
              className="w-full h-full object-cover"
            />
            <span className="absolute top-4 left-4 bg-zinc-950/90 backdrop-blur-md text-amber-400 text-xs font-black px-3.5 py-1.5 rounded-lg border border-zinc-800">
              Verified Breed: {animal.breed}
            </span>
          </div>
          
          <div className="flex items-center gap-2 px-4 py-3 bg-zinc-900/40 border border-zinc-800/60 rounded-xl text-zinc-400 text-xs">
            <MdVerifiedUser className="text-emerald-400 text-base" />
            <span>This livestock has cleared physical checkups with 100% adherence to traditional guidelines.</span>
          </div>
        </div>

        {/* RIGHT COLUMN: CORE SUMMARY & CALL TO ACTION */}
        <div className="lg:col-span-5 space-y-6">
          <div>
            <div className="flex items-center gap-1.5 text-zinc-500 text-[11px] font-bold uppercase tracking-wider mb-2">
              <MdOutlinePets className="text-emerald-500 text-base" />
              <span>{animal.type} • {animal.category}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-black tracking-tight text-zinc-50 leading-tight">
              {animal.name}
            </h1>
          </div>

          {/* VITAL PARAMETERS STAT MATRIX */}
          <div className="grid grid-cols-3 gap-3 bg-zinc-900/50 border border-zinc-800/80 rounded-2xl p-4 text-center">
            <div className="space-y-0.5">
              <span className="text-[10px] uppercase font-bold text-zinc-500 flex items-center justify-center gap-0.5"><MdLocationOn /> Origin</span>
              <p className="text-zinc-200 text-sm font-bold">{animal.location}</p>
            </div>
            <div className="border-x border-zinc-800 space-y-0.5">
              <span className="text-[10px] uppercase font-bold text-zinc-500 flex items-center justify-center gap-0.5"><MdCalendarToday /> Age</span>
              <p className="text-zinc-200 text-sm font-bold">{animal.age} Years</p>
            </div>
            <div className="space-y-0.5">
              <span className="text-[10px] uppercase font-bold text-zinc-500 flex items-center justify-center gap-0.5"><MdScale /> Weight</span>
              <p className="text-zinc-200 text-sm font-bold">{animal.weight} KG</p>
            </div>
          </div>

          {/* PRICE HOVER BOX */}
          <div className="bg-gradient-to-r from-emerald-950/40 to-zinc-900/60 border border-emerald-500/20 rounded-2xl p-5 flex items-center justify-between shadow-sm">
            <div>
              <span className="text-zinc-500 text-[10px] uppercase font-bold block tracking-wider">Total Final Haat Price</span>
              <span className="text-2xl md:text-3xl font-black text-emerald-400">৳{animal.price.toLocaleString()}</span>
            </div>
            <span className="text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2.5 py-1 rounded-md uppercase tracking-wider">
              No Hidden Fees
            </span>
          </div>

          {/* EXTENDED SPECIFICATION DESCRIPTION */}
          <div className="space-y-2">
            <h3 className="text-xs uppercase font-extrabold tracking-widest text-zinc-400">Overview & Background</h3>
            <p className="text-sm text-zinc-400 leading-relaxed bg-zinc-900/30 border border-zinc-800/60 p-4 rounded-xl">
              {animal.description}
            </p>
          </div>

          {/* TRANSACTION PROCESSING FORM ROW */}
          <div className="pt-4">
            <button 
              onClick={() => alert(`Redirecting secure tracking configuration code logic loops for ${animal.name}`)}
              className="w-full py-4 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-black uppercase text-xs tracking-widest rounded-xl transition-all shadow-lg active:scale-[0.99]"
            >
              Request Instant Booking Token
            </button>
            <p className="text-[11px] text-center text-zinc-500 mt-3">
              Booking requests secure the physical livestock holding slot for up to 24 hours.
            </p>
          </div>

        </div>
      </div>

    </div>
  );
}