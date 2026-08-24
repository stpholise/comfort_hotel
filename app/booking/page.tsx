"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle, faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import BookingBar from "../_components/layout/BookingBar";
import { rooms } from "../rooms/page";
import RoomCard from "./components/RoomCard";
import { useParams } from "next/navigation";
import { useState } from "react";
import RoomDetailsModal from "./components/RoomDetailsModal";


export interface Room {
  id: string;
  img: string;
  images: string[];
  name: string;
  type: string;
  description: string;
  price: number;
  available: boolean;
  maxGuests: number;
  bedType: string;
  tv: boolean;
  shower: boolean;
  wifi: boolean;
  breakfast: boolean;
  airConditioning: boolean;
  amenities: string[];
}

const Page = () => {
  const params = useParams();
  const { roomType, guest } = params;
  const [selectedRooms, setSelectedRooms] = useState<[string]>();
  const [displayRoom, setDisplayRoom] = useState<Room | undefined>(undefined);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const totalPrice = 10;

  const onViewDetails = (roomId: string) => {
    const currentRoom = rooms.find((room) => room.id === roomId);
    if (currentRoom) {
      setDisplayRoom(currentRoom);
    } else {
      setDisplayRoom(undefined);
    }
    setOpenModal(true);
  };

  return (
    <div>
      <div className="hero">
        <div className="w-full h-[calc(100vh-360px)] bg-[url('/bg_images/img2.jpeg')]  bg-cover  ">
          <div className="container max-w-5xl flex flex-col justify-center items-center py-8 mx-auto ">
            <h2 className="font-bold text-3xl"> Comfort Hotel</h2>
            <Link href={"/about"} className="flex gap4">
              <FontAwesomeIcon
                icon={faInfoCircle}
                className="py-1 text-xl text-slate-600 lg:hidden sm:flex flex"
              />{" "}
              <p className="text-xl font-semibold backdrop-blur-2xl text-slate-600">
                Hotel information
              </p>
            </Link>
          </div>
        </div>
        <div className="">
          <div className="steps bg-black text-gray-700">
            <div className="container text-sm max-w-5xl mx-auto flex gap-12 py-2">
              <div className=" text-white ">
                <span className="border px-2 py-1">1</span>
                <span> Room selection</span>
              </div>
              <div className=" ">
                <span className="border px-2 py-1">2</span>
                <span> Extra selection</span>
              </div>
              <div className=" ">
                <span className="border px-2 py-1">3</span>
                <span> Booking</span>
              </div>
            </div>
          </div>
          <BookingBar />
        </div>
      </div>
      <div className="main-two-col max-w-5xl mx-auto container py-8">
        <div className="action-heading py-4  ">
          <h2 className="text-4xl font-[extralight] text-gray-500">
            Choose you room
          </h2>
          <p className="text-gray-500">
            <span className="font-semibold text-base">
              Book with confidence:
            </span>
            <span className="">you are on the hotel website</span>
          </p>
          <div className="flex items-center ">
            <FontAwesomeIcon
              icon={faCheckSquare}
              className="py-1 text-xl  lg:hidden sm:flex flex"
            />
            <span className="font-semibold text-base">
              Display offers first
            </span>
          </div>
        </div>
        <div className="two-col flex gap-12">
          <div className="left-side-with-image-and-select-button-and-room-info flex flex-col gap-8">
            {/* select button should open a modal form with a message part for proper explenation of room need */}
            {rooms.map((room, i) => (
              <div key={i} className="">
                <RoomCard room={room} onViewDetails={onViewDetails} />
              </div>
            ))}
          </div>
          <div className="rigth-side">
            <div className="border-gray-400 border h-90 w-60 sticky top-40">
              <div className="">Selected rooms: </div>
              <div className="">Total: {totalPrice}</div>
              <button className="Submit"></button>
            </div>
          </div>
        </div>
      </div>
      {openModal && displayRoom && (
        <RoomDetailsModal setOpenModal={setOpenModal} room={displayRoom} />
      )}
    </div>
  );
};

export default Page;
