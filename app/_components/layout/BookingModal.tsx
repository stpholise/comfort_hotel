
"use client";

import { useEffect } from "react";
import { Dispatch, SetStateAction } from "react";
import { toast } from "react-hot-toast";

interface SelectedRoom {
  id: string;
  name: string;
  price: number;
}

interface BookingModalProps {
  isOpen: boolean;
  setOpenBookingModal: Dispatch<SetStateAction<boolean>>;
  checkIn: string;
  checkOut: string;
  guests: string;
  nights: number;
  selectedRooms: SelectedRoom[];
  totalPrice: number;
}

const BookingModal = ({
  isOpen,
  setOpenBookingModal,
  checkIn,
  checkOut,
  guests,
  nights,
  selectedRooms,
  totalPrice,
}: BookingModalProps) => {
  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  

  const handleConfirmBooking =  () => {
     toast.success("Room booked successfully")
     setOpenBookingModal(false)
    console.log("Booking confirmed");
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
      onClick={() => setOpenBookingModal(false)}
    >
      <div
        className="relative w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={() => setOpenBookingModal(false)}
          className="absolute right-4 top-3 text-2xl text-gray-500 hover:text-gray-800"
          aria-label="Close booking modal"
        >
          ×
        </button>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">
            Confirm Your Booking
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Please review your booking details before confirming.
          </p>
        </div>

        {/* Booking dates */}
        <div className="grid grid-cols-2 gap-4 border-b border-gray-200 pb-4">
          <div>
            <p className="text-sm text-gray-500">Check-in</p>
            <p className="font-medium text-gray-800">
              {checkIn || "Not selected"}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Check-out</p>
            <p className="font-medium text-gray-800">
              {checkOut || "Not selected"}
            </p>
          </div>
        </div>

        {/* Guests and nights */}
        <div className="grid grid-cols-2 gap-4 border-b border-gray-200 py-4">
          <div>
            <p className="text-sm text-gray-500">Guests</p>
            <p className="font-medium text-gray-800">
              {guests || "1"}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Nights</p>
            <p className="font-medium text-gray-800">
              {nights}
            </p>
          </div>
        </div>

        {/* Selected rooms */}
        <div className="border-b border-gray-200 py-4">
          <p className="mb-3 text-sm text-gray-500">
            Selected Rooms
          </p>

          {selectedRooms.length > 0 ? (
            <div className="space-y-2">
              {selectedRooms.map((room) => (
                <div
                  key={room.id}
                  className="flex items-center justify-between"
                >
                  <span className="font-medium text-gray-800">
                    {room.name}
                  </span>

                  <span className="text-gray-600">
                    ₦{room.price.toLocaleString()}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-gray-500">
              No room selected
            </p>
          )}
        </div>

        {/* Total */}
        <div className="flex items-center justify-between py-5">
          <span className="text-xl font-semibold text-gray-800">
            Total
          </span>

          <span className="text-xl font-semibold text-gray-800">
            ₦{totalPrice.toLocaleString()}
          </span>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => setOpenBookingModal(false)}
            className="w-1/2 rounded-lg border border-gray-300 px-4 py-3 font-medium text-gray-700 hover:bg-gray-100"
          >
            Go Back
          </button>

          <button
            type="button"
            onClick={handleConfirmBooking}
            className="w-1/2 rounded-lg bg-slate-800 px-4 py-3 font-medium text-white hover:bg-slate-700"
          >
            Confirm Booking
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;