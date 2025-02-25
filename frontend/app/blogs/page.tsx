import Image from "next/image";
import BlogListing from "../pages/List";
import Footer from "../components/Footer";

export default function Page() {
  return (
    <div>
      <div className="bg-[#6438C3] text-white py-20">
        <div className="grid grid-cols-2">
          <div className="col-span-1 flex justify-center">
            <div className="grid gap-6">
              <div className="text-3xl font-bold text-[#DAC8FF]">
                Welcome to our blog page.
              </div>
              <div className="text-xl">
                Subscribe to our Newsletter and <br /> never miss an update
              </div>
              <div className="gap-2 flex">
                <input
                  type="text"
                  placeholder="Enter your email address"
                  className="p-2 px-4 text-black focus:outline-none rounded-lg w-96 "
                />
                <button className="p-2 px-6 rounded-lg bg-white text-[#6438C3] ">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <div className="col-span-1 flex justify-center">
            <div>
              <Image
                src="/icons/newsletter.svg"
                width={300}
                height={300}
                alt="newsletter"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
          <div className="border-b">
          <div className="mx-40 ">
              <BlogListing />
          </div>
          </div>
          <div>
              <Footer />
          </div>
          </div>
    </div>
  );
}
