import { DownloadGuide } from "../components/Download-guide";
import Footer from "../components/Footer";
import { ServicesNav } from "../components/ServicesNav";
import { SuccessStoriesComp } from "../components/SuccessStoriesComp";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
      <div>
        <ServicesNav />
        {children}
        <div className="text-center my-10" suppressHydrationWarning>
          <button className="bg-[#6438C3] text-white px-6 py-3 rounded-lg text-lg font-medium">
            Book a Free Consultation
          </button>
        </div>
        <div className="mx-40 my-20 flex justify-center">
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
  