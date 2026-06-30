'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import { FcGoogle } from 'react-icons/fc';

export default function Signup() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const { data, error: authError } = await authClient.signUp.email({
        name: formData.name,
        email: formData.email,
        password: formData.password,
        phone: formData.phone,
      });

      if (authError) {
        setError(authError.message || "Signup failed. Please try again.");
      } else {
        console.log("Signup successful:", data);
        alert("Account created successfully! Please sign in.");
        router.push('/login');
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignUp = async () => {
    try {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/login",  
      });
    } catch (err) {
      setError("Google sign up failed. Please try again.");
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-950 via-emerald-900 to-zinc-950 flex items-center justify-center px-6 py-12">
      <div className="max-w-md w-full">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-white">Create Account</h1>
          <p className="text-zinc-400 mt-3">Join QurbaniHat and Buy Your Qurbani Animal</p>
        </div>

        {error && (
          <div className="bg-red-500/10 border border-red-500 text-red-400 px-4 py-3 rounded-2xl mb-6 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="bg-zinc-900/70 backdrop-blur-xl border border-zinc-700 rounded-3xl p-8 shadow-2xl">
          <div className="space-y-5">
            <div>
              <label className="block text-sm text-zinc-400 mb-2">Full Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-zinc-950 border border-zinc-700 rounded-2xl px-5 py-4 focus:outline-none focus:border-emerald-500 text-white"
                placeholder="Md. Rahim Khan"
              />
            </div>

            <div>
              <label className="block text-sm text-zinc-400 mb-2">Email Address</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-zinc-950 border border-zinc-700 rounded-2xl px-5 py-4 focus:outline-none focus:border-emerald-500 text-white"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-sm text-zinc-400 mb-2">Phone Number</label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-zinc-950 border border-zinc-700 rounded-2xl px-5 py-4 focus:outline-none focus:border-emerald-500 text-white"
                placeholder="+880 1XXX-XXXXXX"
              />
            </div>

            <div>
              <label className="block text-sm text-zinc-400 mb-2">Password</label>
              <input
                type="password"
                required
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full bg-zinc-950 border border-zinc-700 rounded-2xl px-5 py-4 focus:outline-none focus:border-emerald-500 text-white"
                placeholder="Create strong password"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-emerald-600 hover:bg-emerald-500 disabled:opacity-70 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-2xl transition-all duration-200 mt-4 flex items-center justify-center"
            >
              {loading ? "Creating Account..." : "Create Account"}
            </button>
          </div>
        </form>

        {/* Google Signup Button */}
        <div className="mt-6">
  <button
    onClick={handleGoogleSignUp}
    className="w-full flex items-center justify-center gap-3 bg-white text-gray-900 hover:bg-gray-100 font-medium py-4 rounded-2xl border border-gray-300 transition-all"
  >
    <FcGoogle className="w-6 h-6" />   {/* Clean Google Icon */}
    Continue with Google
  </button>
</div>

        <div className="mt-6 text-center">
          <p className="text-zinc-400">
            Already have an account?{' '}
            <Link href="/login" className="text-amber-400 hover:text-amber-300 font-medium">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}