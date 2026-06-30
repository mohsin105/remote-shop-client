import Image from "next/image";
import HeroSection from "./components/Home/HeroSection";
import Features from "./components/Home/Features";

export default function Home() {
  return (
    <div>
      <main>
        Home Page to Remote Shop
        <HeroSection></HeroSection>
        <Features></Features>
      </main>
    </div>
  );
}
