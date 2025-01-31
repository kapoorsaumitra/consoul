import { ContactForm } from "../components/ContactForm";
import { WhyChooseUsList } from "../components/WhyChooseUsList";

export const ChooseUs = () => {
  return (
    <div className="bg-[#F1EAFF] h-full py-4">
      <div className="grid grid-cols-2 w-full max-h-[100vh]">
        <div className="col-span-1 flex justify-center pl-40 mt-64 ">
          <div className="font-extrabold text-4xl text-[#555555]">
            why choose us?
          </div>
        </div>

        <div className=" w-full mt-32 pr-72 ">
        <WhyChooseUsList  />

        </div>
      </div>

      <div className="my-20 flex justify-center mx-80">
        <ContactForm />
      </div>
    </div>
  );
};
