"use client"
import Image from "next/image";
import { DownloadGuide } from "../components/Download-guide";
import { SuccessStoriesComp } from "../components/SuccessStoriesComp";
import Footer from "../components/Footer";
import { ServicesNav } from "../components/ServicesNav";


export default function Page() {
  return (
    <div>
      <div>
        <ServicesNav />
      </div>

      <div className="mx-80 my-20">
        <DownloadGuide />
      </div>
      <div className="my-10">
        <SuccessStoriesComp />
      </div>
      <div className="border-t">
        <Footer />
      </div>
    </div>
  );
}
