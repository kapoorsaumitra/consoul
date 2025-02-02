"use client"
import { Hero } from "./pages/Hero";
import { Services } from "./pages/Services";
import { ChooseUs } from "./pages/ChooseUs";
import { SuccessStories } from "./pages/SuccessStories";
import Footer from "./components/Footer";


export default function Home() {


  return (
    <div>
      <Hero />
      <Services />
      <ChooseUs />
      <SuccessStories />
      <Footer />
    
    </div>
  );
}
