"use client";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faUsers,
  faWifi,
  faUtensils,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import clsx from "clsx";

export interface RoomCardProps {
  room: {
    id: string;
    img?: string;
    name: string; // Use name instead of title
    description?: string;
    images: string[];
    bedType: string;
    maxGuests: number; // Use maxGuests instead of guests (and fix 'gueststs' typo)
    price: number;
    breakfast: boolean;
    wifi: boolean;
    tv: boolean;
    shower: boolean;
    airConditioning: boolean;
    amenities: string[];
    type: string;
    available: boolean;
  };
  onBook?: (roomId: string) => void;
  onViewDetails?: (roomId: string) => void;
  onSelectRoom: (roomId: string) => void;
  isSelected: boolean;
}

const RoomCard = ({
  room,
  onSelectRoom,
  onViewDetails,
  isSelected,
}: RoomCardProps) => {
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
    <article className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-lg">
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={room.images[currentImage]}
          alt={"room"}
          fill
          className="object-cover transition duration-500 hover:scale-105"
        />

        {room.images.length > 1 && (
          <>
            <button
              onClick={() => handleImageChange("previous")}
              type="button"
              aria-label="Previous image"
              className="absolute left-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-gray-700 shadow backdrop-blur-sm hover:bg-white"
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>

            <button
              onClick={() => handleImageChange("next")}
              type="button"
              aria-label="Next image"
              className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-gray-700 shadow backdrop-blur-sm hover:bg-white"
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </>
        )}

        <span className="absolute flex items-center  text-sm left-3 top-2 h-8 w-fit rounded-full bg-white/90 px-3 py-1 font-semibold text-gray-700 backdrop-blur-sm">
          {room.name}
        </span>
      </div>

      {/* Room information */}
      <div className="p-5">
        <div className="mb-4 flex items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">{room.name}</h3>

            {room.description && (
              <p className="mt-1 text-sm text-gray-500">{room.description}</p>
            )}
          </div>

          <button
            type="button"
            onClick={() => onViewDetails?.(room.id)}
            className="whitespace-nowrap text-sm font-medium text-slate-600 hover:text-blue-700"
          >
            Room details
          </button>
        </div>

        {/* Room features */}
        <div className="mb-5 flex flex-wrap gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faBed} />
            <span>{room.bedType}</span>
          </div>

          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faUsers} />
            <span>
              {room.maxGuests} {room.maxGuests === 1 ? "Guest" : "Guests"}
            </span>
          </div>

          {room.wifi && (
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faWifi} />
              <span>Free Wi-Fi</span>
            </div>
          )}
        </div>

        <div className="flex items-end justify-between gap-4 border-t border-gray-100 pt-4">
          <div>
            <p className="mb-2 text-xs font-medium uppercase tracking-wide text-gray-400">
              Included
            </p>

            <div className="flex flex-wrap gap-2">
              {room.breakfast && (
                <span className="flex items-center gap-1 rounded-full bg-green-50 px-2.5 py-1 text-xs font-medium text-green-700">
                  <FontAwesomeIcon icon={faUtensils} />
                  Breakfast
                </span>
              )}

              {room.wifi && (
                <span className="rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600">
                  Wi-Fi
                </span>
              )}
            </div>
          </div>

          <div className="text-right">
            <p className="text-xs text-gray-400">From</p>

            <p className="text-xl font-bold text-gray-900">
              ₦{room.price.toLocaleString()}
              <span className="text-xs font-normal text-gray-400">
                {" "}
                / night
              </span>
            </p>

            <button
              type="button"
              onClick={() => onSelectRoom(room.id)}
              className={clsx(
                "mt-2 rounded-lg  px-4 py-2 text-sm font-medium text-white transition ",
                isSelected ? "bg-red-500 hover:bg-red-700" : "bg-slate-700 hover:bg-blue-700",
              )}
            >
              {isSelected ? "Remove Room" : "Select Room"}
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default RoomCard;
