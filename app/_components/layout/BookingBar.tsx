"use client";

import { faCalendar, faBed } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function BookingBar() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [form, setForm] = useState({
    location: "",
    roomType: "",
    guests: 1,
    checkIn: searchParams.get("checkIn") ?? "",
    checkOut: searchParams.get("checkOut") ?? "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>,
  ) => {
    const { name, value } = e.target;
    setForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }));
  };

  const handleViewRate = () => {
    const params = new URLSearchParams();

    if (form.checkIn) {
      params.set("checkIn", form.checkIn);
    }

    if (form.checkOut) {
      params.set("checkOut", form.checkOut);
    }

    router.push(`/booking?${params.toString()}`);
  };

  return (
    <div className="w-full hidden bg-white/80 backdrop-blur-md shadow-xl  rounded-2xl p-4 md:p-5 sm:flex items-center gap-8">
      <div className="flex flex-row h-fit bg-white p-4 lg:p-0 flex-wrap lg:flex-nowrap md:flex-row gap-4 items-center  flex-8 ">
        {/* <div className=" flex  gap-2 flex-1 ">
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
        </div> */}

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
        {/* 
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
                  {num}{" "}
                </option>
              ))}
            </select>
          </div>
        </div> */}

        <div className=" flex  gap-2 flex-1 ">
          <FontAwesomeIcon
            icon={faCalendar}
            className="py-1 text-xl  md:hidden sm:block block"
          />
          <div
            className="flex flex-col w-full flex-1 cursor-pointer"
            onClick={(e) => {
              const input = e.currentTarget.querySelector(
                'input[type="date"]',
              ) as HTMLInputElement | null;
              if (input && typeof input.showPicker === "function") {
                input.showPicker();
              }
            }}
          >
            <label className="text-sm text-gray-500 cursor-pointer">
              Check-in
            </label>
            <input
              type="date"
              name="checkIn"
              value={ form.checkIn}
              onChange={handleChange}
              min={new Date().toISOString().split("T")[0]}
              className="cursor-pointer text-sm font-medium px-2 py-1 border rounded-md w-30 border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* 📅 Check-out */}
        <div className=" flex  gap-2 flex-1 ">
          <FontAwesomeIcon icon={faCalendar} className="py-1 text-xl" />

          <div
            className="flex flex-col w-full flex-1"
            onClick={(e) => {
              const input = e.currentTarget.querySelector(
                'input[type="date"]',
              ) as HTMLInputElement | null;
              if (input && typeof input.showPicker === "function") {
                input.showPicker();
              }
            }}
          >
            <label htmlFor="checkout" className="text-sm text-gray-500">
              Check-out
            </label>
            <input
              id="checkout"
              type="date"
              name="checkOut"
              value={form.checkOut}
              onChange={handleChange}
              min={form.checkIn || new Date().toISOString().split("T")[0]}
              className="cursor-pointer w-30 text-sm font-medium h-7 focus:outline-none"
            />
          </div>
        </div>

        {/* 🔍 Button */}
      </div>
      <div className="w-full md:w-auto  flex-1">
        <button
          onClick={handleViewRate}
          className="w-full md:w-auto px-6 py-2 h-10 bg-slate-600 text-white rounded-xl hover:bg-blue-700 transition text-sm funt-medium whitespace-nowrap"
        >
          view Rate
        </button>
      </div>
    </div>
  );
}
