"use client"
import { Hero } from "./pages/Hero";
import { Services } from "./pages/Services";
import { ChooseUs } from "./pages/ChooseUs";
import { SuccessStories } from "./pages/SuccessStories";
import Footer from "./components/Footer";
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

// Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
});

// Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {
  console.log(e);
});

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
