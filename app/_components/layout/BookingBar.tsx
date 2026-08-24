"use client";

import {
  faLocation,
  faCalendar,
  faUser,
  faBed,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
// import toast from "react-hot-toast";
// import { useParams } from "next/navigation";
import Link from "next/link";

export default function BookingBar() {
  const [form, setForm] = useState({
    location: "",
    roomType: "",
    guests: 1,
    checkIn: "",
    checkOut: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  
  const handleLink = {
    pathname:"/booking",
    query:{
      roomType:form.roomType,
      guest:String(form.guests)
    }
  }
  

  // const handleSubmit = async () => {
  //   console.log("testing button");
  //   try {
  //     const res = await fetch("/api/availability", {
  //       method: "POST",
  //       body: JSON.stringify(form),
  //     });
  //     if (!res.ok) {
  //       throw new Error("Error booking room");
  //     }
  //     const data = await res.json();
  //     console.log(data);
  //     toast.success(data.messge);
  //   } catch (err) {
  //     if (err instanceof Error) {
  //       console.log(err.message);
  //     }
  //   }
  // };

  return (
    <div className="w-full bg-white/90 backdrop-blur-md shadow-xl  rounded-2xl p-4 md:p-5 flex items-center gap-8">
      <div className="flex flex-row h-fit bg-white p-4 lg:p-0 flex-wrap lg:flex-nowrap md:flex-row gap-4 items-center  flex-8 ">
        <div className=" flex  gap-2 flex-1 ">
          <FontAwesomeIcon
            icon={faLocation}
            className="py-1 text-xl  lg:hidden sm:flex flex"
          />
          <div className="flex flex-col w-full ">
            <label
              htmlFor="location"
              className="cursor-pointer text-sm text-gray-500 "
            >
              Location
            </label>

            <select
              name="location"
              id="location"
              onChange={handleChange}
              className="w-fit cursor-pointer  text-sm font-medium h-7 focus:outline-none bg-transparent"
            >
              <option value="abuja">Abuja</option>
              <option value="lagos">Lagos</option>
              <option value="kano">Kano</option>
            </select>
          </div>
        </div>

        {/* 🛏 Room Type */}
        <div className="flex gap-2 flex-1">
          <FontAwesomeIcon
            icon={faBed}
            className="py-1 text-xl md:hidden sm:block"
          />

          <div className="flex flex-col w-full">
            <label htmlFor="roomType" className="text-sm text-gray-500">
              Room Type
            </label>

            <select
              id="roomType"
              name="roomType"
              onChange={handleChange}
              className="w-fit cursor-pointer  text-sm font-medium h-7 focus:outline-none bg-transparent"
            >
              <option value="1">Single</option>
              <option value="2">Double</option>
              <option value="3">Suite</option>
            </select>
          </div>
        </div>

        {/* 👥 Guests */}
        <div className=" flex  gap-2 flex-1 ">
          <FontAwesomeIcon
            icon={faUser}
            className="py-1 text-xl  md:hidden sm:block block"
          />
          <div className="flex flex-col w-full flex-1">
            <label className="text-sm text-gray-500">Guests</label>
            <select
              name="guests"
              onChange={handleChange}
              className="cursor-pointer  max-w-20   text-sm font-medium  h-7   focus:outline-none"
            >
              {[1, 2, 3, 4, 5].map((num) => (
                <option key={num} value={num}>
                  {num} {num === 1 ? "Person" : "People"}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* 📅 Check-in */}
        <div className=" flex  gap-2 flex-1 ">
          <FontAwesomeIcon
            icon={faCalendar}
            className="py-1 text-xl  md:hidden sm:block block"
          />
          <div className="flex flex-col w-full flex-1">
            <label className="text-sm text-gray-500">Check-in</label>
            <input
              type="date"
              name="checkIn"
              onChange={handleChange}
              className="cursor-pointer  max-w-30   text-sm font-medium  h-7   focus:outline-none"
            />
          </div>
        </div>

        {/* 📅 Check-out */}
        <div className=" flex  gap-2 flex-1 ">
          <FontAwesomeIcon icon={faCalendar} className="py-1 text-xl" />

          <div className="flex flex-col w-full flex-1">
            <label htmlFor="checkout" className="text-sm text-gray-500">
              Check-out
            </label>
            <input
              id="checkout"
              type="date"
              name="checkOut"
              onChange={handleChange}
              className="cursor-pointer  max-w-30   text-sm font-medium  h-7   focus:outline-none"
            />
          </div>
        </div>

        {/* 🔍 Button */}
      </div>
      <div className="w-full md:w-auto  flex-1">
        <Link
          href={handleLink}
          className="w-full md:w-auto px-6 py-2 h-10 bg-slate-600 text-white rounded-xl hover:bg-blue-700 transition text-sm funt-medium whitespace-nowrap"
        >
          
          Book Now
        </Link>
      </div>
    </div>
  );
}
