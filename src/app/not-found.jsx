import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-950 via-emerald-900 to-zinc-950 text-white flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        {/* Large 404 */}
        <div className="text-[180px] font-black text-white tracking-tighter text-emerald-900/50 leading-none mb-6">
          404
        </div>

        <h1 className="text-5xl font-bold tracking-tight mb-4">Page Not Found</h1>
        
        <p className="text-zinc-400 text-lg mb-10">
          Oops! The page you are looking for does not exist or has been moved.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-8 py-4 rounded-2xl transition-all inline-block"
          >
            ← Back to Home
          </Link>
          
          <Link
            href="/animals"
            className="border border-zinc-600 hover:bg-zinc-900 font-semibold px-8 py-4 rounded-2xl transition-all inline-block"
          >
            Browse Livestock
          </Link>
        </div>

        <p className="text-zinc-500 text-sm mt-12">
          Need help? Contact us at <span className="text-emerald-400">support@qurbanihat.com</span>
        </p>
      </div>
    </div>
  );
}