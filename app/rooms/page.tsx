import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWifi,
  faShower,
  faTelevision,
} from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";
import Hero from "../_components/layout/Hero";

const page = () => {
  return (
    <div>
      <Hero  arrowDown={true} />

      <div className="max-w-6xl px-4 gap-8 sm:gap-6 flex flex-col  mx-auto md:grid md:grid-cols-3 mt-18 mb-8">
        {rooms.map((room, i) => (
          <div key={i} className=" bg-gray-200 shadow-sm rounded">
            <div className=""></div>
            <Image
              src={room.img}
              alt="room image"
              width={200}
              height={200}
              className="object-cover w-full  h-50 "
            />
            <div className="">
              <div className=" px-4 pt-2 pb-1">
                <div className=" flex items-center justify-between  gap-8 ">
                  <h3 className=" font-semibold text-lg text-gray-700">
                    {room.name}{" "}
                  </h3>
                  <p className="text-xs text-gray-600 font-semibold">
                    {room.available ? "Available: Yes" : "Not Available"}
                  </p>
                </div>
                <h4 className="text-lg text-slate-700 font-semibold">
                  {room.price}
                </h4>
              </div>
              <div className="w-full border-t  border-t-slate-800 px-4 py-3  flex justify-between items-center">
                <div className="flex gap-4">
                  <div className="size-7 p-1 rounded-full bg-white flex items-center justify-center">
                    <FontAwesomeIcon
                      icon={faTelevision}
                      className={clsx(
                        " text-base",
                        room.tv ? "text-slate-700" : "text-gray-300",
                      )}
                    />
                  </div>
                  <div className="size-7 p-1 rounded-full bg-white flex items-center justify-center">
                    <FontAwesomeIcon
                      icon={faShower}
                      className={clsx(
                        " text-base",
                        room.shower ? "text-slate-700" : "text-gray-200",
                      )}
                    />
                  </div>
                  <div className="size-7 p-1 rounded-full bg-white flex items-center justify-center">
                    <FontAwesomeIcon
                      icon={faWifi}
                      className={clsx(
                        " text-base",
                        room.wifi ? "text-slate-700" : "text-gray-200",
                      )}
                    />
                  </div>
                </div>
                <button className="text-gray-300 bg-slate-700 px-6 py-1 h-10 font-semibold">
                  {" "}
                  Book now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const rooms = [
  {
    img: "/bg_images/img1.jpeg",
    name: "The Royal Room",
    price: "₦190,000",
    available: true,
    tv: true,
    shower: true,
    wifi: true,
  },
  {
    img: "/bg_images/img2.jpeg",
    name: "The Royal Room",
    price: "₦190,000",
    available: true,
    tv: false,
    shower: true,
    wifi: true,
  },
  {
    img: "/bg_images/img2.jpeg",
    name: "The Royal Room",
    price: "₦190,000",
    available: true,
    tv: false,
    shower: true,
    wifi: true,
  },
  {
    img: "/bg_images/img2.jpeg",
    name: "The Royal Room",
    price: "₦190,000",
    available: true,
    tv: false,
    shower: true,
    wifi: true,
  },
  {
    img: "/bg_images/img2.jpeg",
    name: "The Royal Room",
    price: "₦190,000",
    available: true,
    tv: false,
    shower: true,
    wifi: true,
  },
];

export default page;
