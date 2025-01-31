"use client"
import { motion } from "framer-motion";
import { Navbar } from "./components/Navbar";
import { Hero } from "./pages/Hero";
import { Services } from "./pages/Services";
import { ChooseUs } from "./pages/ChooseUs";
import { SuccessStories } from "./pages/SuccessStories";

export default function Home() {


  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <ChooseUs />
      <SuccessStories />
    </div>
  );
}
