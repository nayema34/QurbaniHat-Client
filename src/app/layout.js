import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./Components/NavBar"; 
import Footer from "./Components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "QurbaniHat",
  description: "Buy Qurbani Animals Online",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50">
        <NavBar />
        
        <main className="flex-1 w-full">
          {children}
        </main>

        <Footer />

      </body>
    </html>
  );
}