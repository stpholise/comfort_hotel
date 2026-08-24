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
export const rooms = [
  {
    id: "royal-room",
    img: "/bg_images/img1.jpeg",
    images: [
      "/bg_images/img1.jpeg",
      "/bg_images/img2.jpeg",
      "/bg_images/img3.jpeg",
    ],
    name: "The Royal Room",
    type: "Royal Room",
    description:
      "A spacious and elegantly furnished room designed for guests looking for comfort and a relaxing stay.",
    price: 190000,
    available: true,
    maxGuests: 2,
    bedType: "King Bed",
    tv: true,
    shower: true,
    wifi: true,
    breakfast: true,
    airConditioning: true,
    amenities: [
      "King Bed",
      "Free Wi-Fi",
      "Smart TV",
      "Private Bathroom",
      "Air Conditioning",
      "Breakfast",
    ],
  },

  {
    id: "deluxe-room",
    img: "/bg_images/img2.jpeg",
    images: [
      "/bg_images/img2.jpeg",
      "/bg_images/img4.jpeg",
      "/bg_images/img5.jpeg",
    ],
    name: "Deluxe Room",
    type: "Deluxe",
    description:
      "A comfortable and modern room with everything you need for a pleasant and convenient stay.",
    price: 150000,
    available: true,
    maxGuests: 2,
    bedType: "Double Bed",
    tv: true,
    shower: true,
    wifi: true,
    breakfast: true,
    airConditioning: true,
    amenities: [
      "Double Bed",
      "Free Wi-Fi",
      "TV",
      "Private Bathroom",
      "Air Conditioning",
      "Breakfast",
    ],
  },

  {
    id: "standard-room",
    img: "/bg_images/img3.jpeg",
    images: [
      "/bg_images/img3.jpeg",
      "/bg_images/img6.jpeg",
      "/bg_images/img7.jpeg",
    ],
    name: "Standard Room",
    type: "Standard",
    description:
      "A simple and comfortable room offering great value for both short and extended stays.",
    price: 100000,
    available: true,
    maxGuests: 2,
    bedType: "Double Bed",
    tv: true,
    shower: true,
    wifi: true,
    breakfast: false,
    airConditioning: true,
    amenities: [
      "Double Bed",
      "Free Wi-Fi",
      "TV",
      "Private Bathroom",
      "Air Conditioning",
    ],
  },

  {
    id: "family-room",
    img: "/bg_images/img4.jpeg",
    images: [
      "/bg_images/img4.jpeg",
      "/bg_images/img8.jpeg",
      "/bg_images/img9.jpeg",
    ],
    name: "Family Room",
    type: "Family",
    description:
      "A spacious room designed for families and small groups, providing extra sleeping space and comfort.",
    price: 230000,
    available: true,
    maxGuests: 4,
    bedType: "2 Double Beds",
    tv: true,
    shower: true,
    wifi: true,
    breakfast: true,
    airConditioning: true,
    amenities: [
      "2 Double Beds",
      "Free Wi-Fi",
      "Smart TV",
      "Private Bathroom",
      "Air Conditioning",
      "Breakfast",
    ],
  },

  {
    id: "executive-suite",
    img: "/bg_images/img5.jpeg",
    images: [
      "/bg_images/img5.jpeg",
      "/bg_images/img10.jpeg",
      "/bg_images/img11.jpeg",
    ],
    name: "Executive Suite",
    type: "Suite",
    description:
      "Our premium suite provides a spacious environment with elegant furnishings and enhanced amenities.",
    price: 300000,
    available: false,
    maxGuests: 3,
    bedType: "King Bed",
    tv: true,
    shower: true,
    wifi: true,
    breakfast: true,
    airConditioning: true,
    amenities: [
      "King Bed",
      "Free Wi-Fi",
      "Smart TV",
      "Private Bathroom",
      "Air Conditioning",
      "Breakfast",
      "Living Area",
    ],
  },
];

export default page;
