'use client';
import React from 'react';
import Link from 'next/link';
import { ThunderboltFill , CircleCheckFill} from '@gravity-ui/icons';

const Banner = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center bg-gradient-to-br from-emerald-950 via-emerald-900 to-zinc-950 text-white py-24 px-6 md:px-12 overflow-hidden">
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 bg-emerald-900/60 border border-emerald-700 text-emerald-300 px-5 py-2 rounded-full text-sm font-medium">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            Official Online Haat 2026
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.05]">
            Qurbani Animals,<br />
            <span className="bg-gradient-to-r from-amber-300 to-amber-400 bg-clip-text text-transparent">
              Delivered with Trust
            </span>
          </h1>

          <p className="text-xl text-zinc-300 max-w-lg leading-relaxed">
            Connect directly with verified farms. Choose healthy, Shariah-compliant, 
            and vet-certified animals with transparent pricing and nationwide delivery.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link 
              href="/animals" 
              className="group bg-amber-500 hover:bg-amber-400 text-zinc-950 font-semibold px-8 py-4 rounded-2xl transition-all duration-300 flex items-center gap-3 text-lg shadow-xl shadow-amber-500/30 hover:shadow-2xl hover:shadow-amber-500/40 active:scale-[0.985]"
            >
              Browse Livestock
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
            
            <Link 
              href="#how-it-works" 
              className="border border-white/30 hover:bg-white/5 font-medium px-8 py-4 rounded-2xl transition-all duration-300 text-lg"
            >
              How It Works
            </Link>
          </div>

          <div className="flex items-center gap-8 text-sm text-zinc-400 pt-4">
            <div className="flex items-center gap-2">
              <span className="text-emerald-400">✓</span>
              Vet Certified
            </div>
            <div className="flex items-center gap-2">
              <span className="text-emerald-400">✓</span>
              Nationwide Delivery
            </div>
            <div className="flex items-center gap-2">
              <span className="text-emerald-400">✓</span>
              100% Transparent
            </div>
          </div>
        </div>

        <div className="hidden lg:flex justify-center relative">
          <div className="absolute -inset-10 bg-gradient-to-tr from-amber-400/10 via-emerald-400/10 to-transparent rounded-[4rem] blur-3xl"></div>
          
          <div className="relative bg-zinc-900/70 border border-zinc-700/70 backdrop-blur-xl rounded-3xl p-8 shadow-2xl w-full max-w-md">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-amber-400 font-semibold flex items-center gap-2 text-lg">
                <span className="text-xl"><ThunderboltFill /></span>
                Live Market Update
              </h3>
              <span className="text-xs bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full font-medium">
                UPDATED JUST NOW
              </span>
            </div>

            <div className="space-y-6">
              <div>
                <p className="text-zinc-400 text-sm mb-3">
                  High demand today:
                </p>
                <div className="flex justify-between items-center bg-zinc-800/80 rounded-2xl p-4">
                  <div>
                    <p className="font-semibold">Pure Shahiwal Bulls</p>
                    <p className="text-sm text-emerald-400">42 animals left</p>
                  </div>
                  <div className="text-right">
                    <p className="text-amber-400 font-bold">Selling Fast</p>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2.5">
                  <span className="text-zinc-400">Delivery Slots for Eid</span>
                  <span className="font-medium text-emerald-400">81% Booked</span>
                </div>
                <div className="h-2.5 bg-zinc-800 rounded-full overflow-hidden">
                  <div className="bg-linear-to-r from-emerald-400 to-amber-400 w-[81%] h-full rounded-full transition-all"></div>
                </div>
                <p className="text-xs text-zinc-500 mt-2">
                  Limited slots remaining for June 30 - July 10
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-zinc-700 text-xs text-zinc-500 flex items-center gap-2">
              <span><CircleCheckFill className="text-emerald-400" /></span>
              All animals are pre-screened by licensed veterinarians
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;