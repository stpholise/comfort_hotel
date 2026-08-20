"use client";
import Hero from "../_components/layout/Hero";
import dynamic from "next/dynamic";
import ContactForm from "./components/ContactForm";

const MyMap = dynamic(() => import("./components/MyMap"), {
  ssr: false,
});

const page = () => {
  return (
    <div>
      <Hero
        heading="Contact us"
        text="The elegant luxury bedrooms in this gallery showcase custom interior designs & decorating ideas. View pictures and find your perfect luxury bedroom design."
      />
      <div className=" max-w-5xl px-4 py-12 mx-auto">
        <ContactForm />
      </div>

      <MyMap />
    </div>
  );
};

export default page;
