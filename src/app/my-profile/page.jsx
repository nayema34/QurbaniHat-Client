'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { authClient } from '@/lib/auth-client';
import { MdAccountCircle, MdEmail, MdBadge, MdExitToApp, MdPets } from 'react-icons/md';

export default function MyProfilePage() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadSession = async () => {
      const { data } = await authClient.getSession();
      if (!data?.user) {
        router.push('/login');
      } else {
        setUser(data.user);
        setLoading(false);
      }
    };

    loadSession();
  }, [router]);

  const handleLogout = async () => {
    try {
      await authClient.signOut();
      router.push('/');
      router.refresh();
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-zinc-50 flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-emerald-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-50 py-12 px-4 sm:px-6 lg:px-8 font-sans text-zinc-800">
      <div className="max-w-3xl mx-auto">
        
        <div className="bg-white rounded-3xl shadow-xl border border-zinc-200/60 overflow-hidden">
          
          <div className="h-32 bg-gradient-to-r from-emerald-600 to-emerald-700 px-8 flex items-end">
            <div className="transform translate-y-6 flex items-center space-x-4">
              <div className="w-20 h-20 rounded-2xl bg-amber-500 flex items-center justify-center border-4 border-white text-white shadow-md">
                <MdAccountCircle className="text-5xl" />
              </div>
              <div className="pb-2">
                <h1 className="text-xl font-bold text-white tracking-tight">{user?.name || 'Haat Member'}</h1>
                <p className="text-xs mb-4 text-emerald-100 font-medium">Verified Client Account</p>
              </div>
            </div>
          </div>

          <div className="pt-12 p-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-zinc-50 rounded-2xl p-4 border border-zinc-200/60 flex items-center space-x-3">
                <MdBadge className="text-emerald-600 text-2xl flex-shrink-0" />
                <div>
                  <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider block">Full Name</span>
                  <span className="text-sm font-semibold text-zinc-700">{user?.name || 'N/A'}</span>
                </div>
              </div>

              <div className="bg-zinc-50 rounded-2xl p-4 border border-zinc-200/60 flex items-center space-x-3">
                <MdEmail className="text-emerald-600 text-2xl flex-shrink-0" />
                <div className="overflow-hidden">
                  <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider block">Email Workspace Address</span>
                  <span className="text-sm font-semibold text-zinc-700 block truncate">{user?.email}</span>
                </div>
              </div>
            </div>

            <div className="bg-zinc-50 rounded-2xl p-6 border border-zinc-200/60">
              <h3 className="text-xs uppercase font-extrabold tracking-wider text-zinc-400 flex items-center gap-1.5 mb-3">
                <MdPets className="text-emerald-600 text-base" /> My Active Livestock Bookings
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                You have not initiated active token escrow locks on livestock yet. Explore the marketplace listings to find and reserve verified animals.
              </p>
            </div>

            <div className="pt-4 flex justify-end">
              <button
                onClick={handleLogout}
                className="inline-flex items-center gap-2 bg-red-50 hover:bg-red-100/80 text-red-600 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200"
              >
                <MdExitToApp className="text-base" /> Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}