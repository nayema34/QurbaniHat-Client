'use client';
import React from 'react';

const tips = [
  {
    title: "Choose Healthy Animals",
    desc: "Look for bright eyes, clean coat, active movement, and no signs of illness.",
    icon: "🐄"
  },
  {
    title: "Verify Certification",
    desc: "Always choose vet-certified animals with proper health documentation.",
    icon: "✅"
  },
  {
    title: "Plan Delivery Early",
    desc: "Book early to secure preferred delivery slots before Eid rush.",
    icon: "🚚"
  },
  {
    title: "Understand Shared Qurbani",
    desc: "Larger animals can be shared among 5-7 people for cost efficiency.",
    icon: "👥"
  }
];

export default function QurbaniTips() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 ">
      <div className="text-center mb-12">
        <span className="text-emerald-400 font-bold uppercase tracking-widest">KNOWLEDGE BASE</span>
        <h2 className="text-4xl font-bold tracking-tight mt-3 text-white">
          Qurbani Tips & Guidelines
        </h2>
        <p className="text-zinc-400 mt-4 max-w-2xl mx-auto">
          Make your Qurbani more meaningful with these practical tips from experienced farmers.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {tips.map((tip, idx) => (
          <div 
            key={idx} 
            className="bg-zinc-900/70 border border-zinc-700 hover:border-emerald-500/50 backdrop-blur-sm rounded-3xl p-8 transition-all group hover:-translate-y-1"
          >
            <div className="text-4xl mb-6 opacity-90 group-hover:scale-110 transition-transform">
              {tip.icon}
            </div>
            
            <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-amber-400 transition-colors">
              {tip.title}
            </h3>
            
            <p className="text-zinc-400 leading-relaxed text-[15px]">
              {tip.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}