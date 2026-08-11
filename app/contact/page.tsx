"use client";
import Hero from "../_components/layout/Hero";
import dynamic from "next/dynamic"; 


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
      <div className=" max-w-5xl px-4 py-8 mx-auto">
        <form>
          <div className="  grid grid-cols-2  gap-4  flex-wrap">
            <div className="w-1/2 ">
              <label htmlFor="">Full name</label>
              <input type="text" className="" />
            </div>
            <div className=" w-1/2 ">
              <label htmlFor="">Email</label>
              <input type="text" />
            </div>
            <div className="w-1/2 flex-1">
              <label htmlFor="">Phone</label>
              <input type="text" />
            </div>
          </div>
          <div className="w-full mt-4">
            <label htmlFor="">Message</label>
            <input type="text" className="" />
          </div>
        </form>
      </div>
    
      <MyMap />
    </div>
  );
};

export default page;
