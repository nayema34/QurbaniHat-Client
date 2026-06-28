'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';   // ← Add this

const NavBar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSession = async () => {
      const { data } = await authClient.getSession();
      setUser(data?.user || null);
      setLoading(false);
    };

    fetchSession();

    const unsubscribe = authClient.onSessionChange((session) => {
      setUser(session?.user || null);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'All Animals', href: '/animals' },
  ];

  const handleLogout = async () => {
    await authClient.signOut();
    setUser(null);
    closeMenu();
    router.refresh();        // ← Added for better consistency
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-black tracking-tight text-emerald-600">
                Qurbani<span className="text-amber-500">Hat</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-emerald-600 font-medium transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}

            {!loading && (
              <>
                {user ? (
                  <div className="flex items-center gap-6">
                    <Link
                      href="/my-profile"
                      className="text-gray-700 hover:text-emerald-600 font-medium transition-colors duration-200"
                    >
                      My Profile
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="text-red-600 hover:text-red-700 font-medium text-sm transition-colors"
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <>
                    <Link
                      href="/login"
                      className="text-gray-700 hover:text-emerald-600 font-medium transition-colors duration-200"
                    >
                      Login
                    </Link>

                    <Link
                      href="/signup"
                      className="bg-emerald-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-emerald-700 transition-all duration-200 shadow-sm hover:shadow"
                    >
                      Get Started
                    </Link>
                  </>
                )}
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 hover:text-emerald-600 focus:outline-none"
              aria-label="toggle menu"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6h12v12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - No changes needed */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-white border-t`}>
        <div className="px-4 pt-3 pb-5 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="block px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors"
            >
              {link.name}
            </Link>
          ))}

          {user ? (
            <>
              <Link
                href="/my-profile"
                onClick={closeMenu}
                className="block px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:bg-emerald-50 hover:text-emerald-600"
              >
                My Profile
              </Link>
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-3 rounded-lg text-base font-medium text-red-600 hover:bg-red-50"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                onClick={closeMenu}
                className="block px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:bg-emerald-50 hover:text-emerald-600"
              >
                Login
              </Link>
              <Link
                href="/signup"
                onClick={closeMenu}
                className="block w-full text-center bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium mt-4 hover:bg-emerald-700"
              >
                Get Started
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;