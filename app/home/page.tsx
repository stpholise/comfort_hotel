"use client";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { faLightbulb } from "@fortawesome/free-regular-svg-icons";
import {
  faWifi,
  faPersonSwimming,
  faBowlFood,
  faDumbbell,
  faGamepad,
  faShirt,
  faCar,
  faCirclePlay,
  faQuoteLeft,
  faQuoteRight,
  faStar,
  faCalendar,
  faLocation,
  faUser,
  faBed
  
} from "@fortawesome/free-solid-svg-icons";

const responsiveness = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024,
    },
    items: 3,
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 450,
    },
    items: 3,
  },

  mobile: {
    breakpoint: {
      max: 450,
      min: 0,
    },
    items: 1,
  },
};

const page = () => {
  return (
    <div className="flex flex-col gap-8 lg:gap-12 lg:mb-12">
      <div className=" bg-black/10 h-[calc(100vh-80px)] w-full relative">
        <div className=" lg:grid grid-cols-2 max-w-6xl  mx-auto h-full ">
          <div className=" flex flex-col justify-center gap-4 h-11/12">
            <h2 className="font-pacifico text-5xl italic font-semibold">
              Comfort Hotel
            </h2>
            <h3 className="font-courgette text-4xl italic font-medium text-amber-600">
              Hotel for every moment rich in emotion
            </h3>
            <p className="text-sm font-medium">
              Every moment feels like the first time in paradise view
            </p>
            <div className=" flex item-center mt-8  justify-between max-w-xs">
              <button className=" w-fit h-10 rounded-lg bg-slate-800 px-8 py-2 text-gray-200 text-sm font-medium">
                Book now
              </button>

              <button className="play flex gap-2 text-slate-700 font-semibold items-center">
                <FontAwesomeIcon
                  icon={faCirclePlay}
                  className="size-12 text-4xl  text-green-700 "
                />{" "}
                Take a tour
              </button>
            </div>
          </div>
          <div className="">
            <Image
              src="/bg_images/img1.jpeg"
              alt="bg-image"
              width="800"
              height="700"
              className="h-full"
            />
          </div>
        </div>
        <div className="absolute bottom-8 left-0 right-0  h-20 max-w-7xl mx-auto bg-white rounded-2xl flex ">
            
        </div>
      </div>
      <div className=" max-w-6xl mx-auto py-8 flex-col flex gap-4">
        <h2 className=" text-4xl font-josefin font-semibold text-center">
          Our Facilities
        </h2>
        <p className="text-center">
          We offer mordern (5 star) hotel facilities for your comfort.
        </p>
        <div className=" flex justify-center gap-4 flex-wrap mx-auto max-w-5xl py-4">
          {facilities.map((item, i) => (
            <div
              className="h-45 w-55 bg-gray-200 border-gray-200 border rounded-lg p-4 flex flex-col  items-center justify-center gap-3"
              key={i}
            >
              <FontAwesomeIcon
                icon={item.icon}
                className="size-8 sm:size-12  text-slate-700"
              />
              <p className=" text-base font-semibold">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-6xl mx-auto bg-[url('/bg_images/img3.jpeg')]  relative bg-cover bg-center h-110 w-full">
        <div className="absolute inset-0 bg-black/40 py-8 px-6 flex flex-col gap-3">
          <h2 className="font-josefin text-4xl font-medium text-white text-center">
            Luxury Rooms
          </h2>
          <p className="text-white text-center">
            All rooms are designed for comfort.
          </p>

          <div className="grid grid-cols-3  max-w-5xl mx-auto gap-4 justify-center py-4">
            {roomStandards.map((item, i) => (
              <div
                className="flex-1 rounded-lg  px-4 pt-4 pb-2 bg-white overflow-hidden"
                key={i}
              >
                <div className="relative">
                  <Image
                    src={item.img}
                    alt={"room"}
                    width={300}
                    height={300}
                    className="rounded-lg w-full h-full max-h-45 object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-slate-700 px-3 py-1 text-xs h-8 flex items-center text-white rounded-lg">
                    {item.available} Rooms available
                  </div>
                </div>
                <p className="text-sm mt-4">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="testimonies">
        <h2 className=" text-center text-4xl py-8">Tesimonials</h2>
        <Carousel
          responsive={responsiveness}
          swipeable
          autoPlay
          autoPlaySpeed={4000}
          infinite
          transitionDuration={500}
          containerClass="w-full max-w-6xl mx-auto  "
          itemClass="px-3 "
        >
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="border bg-gray-100 border-gray-200 bg-accent rounded-2xl shadow-md p-6 h-full flex flex-col  gap-4 justify-between transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="flex justify-between items-center">
                <p className=" text-xs">{item.date}</p>
                <div className="">
                    {
                        [...Array(item.star)].map((_, i) =>(
                            <FontAwesomeIcon key={i} icon={faStar} className="text-amber-500  text-xs" />
                        ))
                    }
                </div>

              </div>

              <div className="text-gray-600 text-sm leading-relaxed">
                <FontAwesomeIcon
                  icon={faQuoteLeft}
                  className="size-6  sm:size-12 mb-1 text-slate-700"
                />
                {item.text}
                <FontAwesomeIcon
                  icon={faQuoteRight}
                  className="size-8 sm:size-12  mb-1 text-slate-700"
                />
              </div>
              <div className="flex items-center gap-4 ">
                <Image
                  src={item.image}
                  alt={"client"}
                  className="w-8 h-8 rounded-full object-cover"
                  width={40}
                  height={40}
                />
                <h4 className="text-sm font-semibold text-gray-700">{item.name}</h4>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

const facilities = [
  {
    icon: faPersonSwimming,
    label: "Swimming pool",
  },
  {
    icon: faWifi,
    label: "Wifi",
  },
  {
    icon: faBowlFood,
    label: "Breakfast",
  },
  {
    icon: faDumbbell,
    label: "Gym",
  },
  {
    icon: faGamepad,
    label: "Game center",
  },
  {
    icon: faLightbulb,
    label: "24/7 Light",
  },
  {
    icon: faShirt,
    label: "Laundry",
  },
  {
    icon: faCar,
    label: "Parking space",
  },
];

const roomStandards = [
  {
    available: 2,
    img: "/bg_images/img2.jpeg",
    content: "Television set, Extra sheets, and Breakfast",
  },
  {
    available: 4,
    img: "/bg_images/img2.jpeg",
    content: "Television set, Extra sheets, and Breakfast",
  },
  {
    available: 8,
    img: "/bg_images/img3.jpeg",
    content:
      "Television set, Extra sheets, Breakfast, and fireplace, Console and bed rest",
  },
];

const testimonials: { star: number, date:string, name: string; text: string; image: string }[] = [
  {
     date:"2 Mar, 2023",
    name: "Chinedu A.",
    text: "Abrss made the entire process so easy and stress-free. From finding the right property to closing the deal, everything was smooth and transparent.",
    image: "/bg_images/img2.jpeg",
    star:4
  },
  {
     date:"2 Mar, 2023",
    name: "Amina S.",
    text: "Professional, reliable, and truly caring. They listened to my needs and helped me find exactly what I wanted.",
    image: "/bg_images/img2.jpeg",
    star: 4,
  },
  {
     date:"2 Mar, 2023",
    name: "David O.",
    text: "The best real estate experience I’ve ever had. Abrss helped me secure a great investment property quickly.",
    image: "/bg_images/img2.jpeg",
    star:5,
  },
  {
    date:"2 Mar, 2023",
    name: "Grace E.",
    text: "Highly recommend Abrss. Their attention to detail and commitment to excellence is unmatched.",
    image: "/bg_images/img2.jpeg",
    star:5,
  },
];

export default page;
