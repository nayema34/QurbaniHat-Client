import { FaInstagram, FaFacebook, FaXTwitter } from "react-icons/fa6";
import {Envelope,LocationArrowFill,Handset} from '@gravity-ui/icons';
import Link from 'next/link';

function Footer() {
  return (
    <footer className="bg-[#101727] text-white border-t border-zinc-800">
      <div className="w-full md:w-4/5 mx-auto px-6 py-16">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 lg:gap-8 mb-12">

          {/* BRAND */}
          <div className="sm:col-span-2 md:col-span-3 lg:col-span-2">
            <Link href="/" className="inline-block">
              <h1 className="text-3xl md:text-4xl font-black tracking-tight text-emerald-500">
                Qurbani<span className="text-amber-500">Hat</span>
              </h1>
            </Link>

            <p className="text-zinc-400 mt-4 leading-relaxed max-w-sm text-sm">
              Your trusted online marketplace for healthy, certified, and hassle-free Qurbani livestock. Bringing the traditional Haat directly to your digital screen with seamless doorstep delivery.
            </p>

            {/* SOCIAL LINKS */}
            <div className="mt-6">
              <h2 className="text-[16px] font-semibold mb-4 text-zinc-200">
                Connect With Us
              </h2>
              <div className="flex flex-row gap-4">
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <FaInstagram
                    size={38}
                    className="text-black bg-white p-2 rounded-full hover:bg-gradient-to-tr hover:from-amber-500 hover:to-purple-600 hover:text-white transition-all cursor-pointer"
                  />
                </a>

                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <FaFacebook
                    size={38}
                    className="text-black bg-white p-2 rounded-full hover:bg-blue-600 hover:text-white transition-all cursor-pointer"
                  />
                </a>

                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="X (Twitter)"
                >
                  <FaXTwitter
                    size={38}
                    className="text-black bg-white p-2 rounded-full hover:bg-zinc-900 hover:text-white transition-all cursor-pointer"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* SHOP CATTLE */}
          <div>
            <h3 className="text-[18px] font-semibold text-zinc-100">
              Buy Livestock
            </h3>
            <ul className="text-zinc-400 mt-3 flex flex-col gap-2 text-sm">
              <li>
                <Link href="/animals?type=cow" className="hover:text-emerald-400 transition-colors">Cows & Bulls</Link>
              </li>
              <li>
                <Link href="/animals?type=goat" className="hover:text-emerald-400 transition-colors">Goats & Sheep</Link>
              </li>
              <li>
                <Link href="/animals?filter=premium" className="hover:text-emerald-400 transition-colors">Premium Blocks</Link>
              </li>
              <li>
                <Link href="/animals?filter=organic" className="hover:text-emerald-400 transition-colors">Organic Feed Farm</Link>
              </li>
            </ul>
          </div>

          {/* THE HAAT INFO */}
          <div>
            <h3 className="text-[18px] font-semibold text-zinc-100">
              Our Services
            </h3>
            <ul className="text-zinc-400 mt-3 flex flex-col gap-2 text-sm">
              <li>
                <Link href="/full-service" className="hover:text-emerald-400 transition-colors">Full Qurbani Service</Link>
              </li>
              <li>
                <Link href="/delivery" className="hover:text-emerald-400 transition-colors">Live Tracking Delivery</Link>
              </li>
              <li>
                <Link href="/weight-guarantee" className="hover:text-emerald-400 transition-colors">Weight Guarantee</Link>
              </li>
              <li>
                <Link href="/vet-certified" className="hover:text-emerald-400 transition-colors">Vet Checkups</Link>
              </li>
            </ul>
          </div>

          {/* KNOWLEDGE HUB */}
          <div>
            <h3 className="text-[18px] font-semibold text-zinc-100">
              Resources
            </h3>
            <ul className="text-zinc-400 mt-3 flex flex-col gap-2 text-sm">
              <li>
                <Link href="/guidelines" className="hover:text-emerald-400 transition-colors">Sacrifice Rules</Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-emerald-400 transition-colors">Cattle Care Blog</Link>
              </li>
              <li>
                <Link href="/faqs" className="hover:text-emerald-400 transition-colors">Buyer FAQs</Link>
              </li>
              <li>
                <Link href="/support" className="hover:text-emerald-400 transition-colors">Help Center</Link>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-[18px] font-semibold text-zinc-100">
              Contact Us
            </h3>
            <div className="mt-4 flex flex-col gap-4 text-zinc-400 text-sm">
              
              {/* EMAIL */}
              <div className="flex items-start gap-3">
                <Envelope
                  size={20}
                  className="text-amber-500 mt-0.5 flex-shrink-0"
                />
                <div>
                  <p className="text-white font-medium">Email</p>
                  <a href="mailto:support@qurbanihat.com" className="hover:text-emerald-400 transition-colors">
                    support@qurbanihat.com
                  </a>
                </div>
              </div>

              {/* PHONE */}
              <div className="flex items-start gap-3">
                <Handset
                  size={20}
                  className="text-amber-500 mt-0.5 flex-shrink-0"
                />
                <div>
                  <p className="text-white font-medium">Hotline</p>
                  <a href="tel:+8801234567890" className="hover:text-emerald-400 transition-colors">
                    +880 1234-567890
                  </a>
                </div>
              </div>

              {/* LOCATION */}
              <div className="flex items-start gap-3">
                <LocationArrowFill
                  size={20}
                  className="text-amber-500 mt-0.5 flex-shrink-0"
                />
                <div>
                  <p className="text-white font-medium">Corporate Office</p>
                  <p>Dhaka, Bangladesh</p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <hr className="border-zinc-800" />

        {/* BOTTOM SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mt-8">
          <div className="text-center md:text-left text-zinc-500 text-sm">
            © {new Date().getFullYear()} QurbaniHat Inc. All rights reserved.
          </div>

          <div className="flex flex-wrap justify-center gap-6 md:gap-10 items-center text-sm text-zinc-500">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/refunds" className="hover:text-white transition-colors">Refund Policy</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;