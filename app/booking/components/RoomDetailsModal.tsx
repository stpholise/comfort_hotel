"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClose,
  faChevronLeft,
  faChevronRight,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { Dispatch, SetStateAction } from "react";
import { Room } from "../page";
import Image from "next/image";
import { useState } from "react";
import clsx from "clsx";

interface RoomDetailsModalProps {
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  room: Room;
}

const RoomDetailsModal = ({ setOpenModal, room }: RoomDetailsModalProps) => {
  const [currentImage, setCurrentImage] = useState<number>(0);

  const handleImageChange = (direction: "next" | "previous") => {
    if (direction === "next") {
      setCurrentImage((current) =>
        current === room.images.length - 1 ? 0 : current + 1,
      );
    } else {
      setCurrentImage((current) =>
        current === 0 ? room.images.length - 1 : current - 1,
      );
    }
  };
  return (
    <div className="w-screen min-h-screen sm:h-screen fixed inset-0 overflow-y-auto bg-black z-80 ">
      <button
        className="absolute top-4 right-6 "
        onClick={() => setOpenModal(false)}
      >
        <FontAwesomeIcon icon={faClose} className="text-base g:text-2xl text-white" />
      </button>
      <div className="container  max-w-5xl mx-auto py-8 sm:px-6 px-3 flex-col sm:flex-row flex justify-center gap-8">
        <div className="sm:sticky top-10 ">
          <div className="w-full sm:w-120 h-120  relative">
            <Image
              src={room.images[currentImage]}
              alt={"room"}
              width={500}
              height={400}
              className="w-full h-full object-cover"
            />
            {room.images.length > 1 && (
              <div className="absolute bottom-8 right-8 w-20">
                <button
                  onClick={() => handleImageChange("previous")}
                  type="button"
                  aria-label="Previous image"
                  className="absolute left-0 op-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center  rounded-sm bg-black/80 text-gray-700 shadow backdrop-blur-sm hover:bg-gray-800"
                >
                  <FontAwesomeIcon
                    icon={faChevronLeft}
                    className="text-white"
                  />{" "}
                </button>
                <button
                  onClick={() => handleImageChange("next")}
                  type="button"
                  aria-label="Next image"
                  className="absolute right-0 op-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center  rounded-sm bg-black/80 text-gray-700 shadow backdrop-blur-sm hover:bg-gray-800"
                >
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="text-white"
                  />
                </button>
              </div>
            )}
          </div>
          <div className="flex p-4 gap-1 justify-center">
            {room.images.map((item, i) => (
              <button key={i} className="" onClick={() => setCurrentImage(i)}>
                <Image
                  alt={"room"}
                  src={item}
                  width={100}
                  height={100}
                  className={clsx(
                    "border size-20",
                    i === currentImage ? "border-gray-300" : "000",
                  )}
                />
              </button>
            ))}
          </div>
        </div>
        <div className="text-white flex flex-col ">
          <h2 className="text-2xl font-semibold ">{room.name}</h2>
          <p className="text-gray-300 mt-10 ">{room.description}</p>
          <h4 className="font-semibold mt-8">Maximum occupancy</h4>
          <p className="mt-2 text-gray-300">
            <FontAwesomeIcon
              icon={faUserGroup}
              className="text-sm text-gray-300"
            />{" "}
            {room.maxGuests} persons
          </p>
          <h4 className="text-base font-semibold mt-6">Amenities</h4>
          <p className="mt-2 text-gray-300">
            {room.amenities.map((amenity, i) => (
              <span key={i}>{amenity}, {" "}</span>
            ))}
          </p>
          <h4 className="text-base font-semibold mt-6">Bedding options</h4>
          <p className="mt-2 text-gray-300">{room.bedType}</p>
        </div>
      </div>
    </div>
  );
};

export default RoomDetailsModal;
