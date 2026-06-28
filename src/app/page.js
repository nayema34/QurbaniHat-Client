import Image from "next/image";
import NavBar from "./Components/NavBar";
import Banner from "./Components/Banner";
import Featured from "./Components/Featured";
import QurbaniTips from "./Components/QurbaniTips";
import TopBreeds from "./Components/TopBreeds";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a1f1a] text-white overflow-hidden">
      <Banner />
      <Featured />
      <TopBreeds />
      <QurbaniTips />
    </main>
  );
}