"use client";

const Hero = ({ heading, text }: { heading?: string; text?: string }) => {
  return (
    <div
      className={
        "w-full h-[calc(100vh-80px)] bg-[url('/bg_images/img2.jpeg')]  bg-cover  "
      }
    >
        
        
      <div className="flex items-center bg-black/30 h-full w-full ">
        <div className="max-w-2xl m-auto h-fit flex flex-col gap-8 justify-center items-center text-center">
          <h3 className="text-4xl font-semibold  text-gray-200">{heading ? heading : "Rooms and Suites"}</h3>
          <p className="text-gray-300">
            {text
              ? text
              : "The elegant luxury bedrooms in this gallery showcase custom interior designs & decorating ideas. View pictures and find your perfect luxury bedroom design."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
