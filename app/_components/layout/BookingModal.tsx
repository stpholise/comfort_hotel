"use client";

import { useEffect } from "react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal = ({
  isOpen,
  onClose,
}: BookingModalProps) => {
  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 text-2xl text-gray-500"
          aria-label="Close booking modal"
        >
          ×
        </button>

        <h2 className="mb-6 text-2xl font-semibold">
          Book a Room
        </h2>

        <form className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium">
              Check-in
            </label>

            <input
              type="date"
              className="w-full rounded-lg border px-4 py-3"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium">
              Check-out
            </label>

            <input
              type="date"
              className="w-full rounded-lg border px-4 py-3"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium">
              Guests
            </label>

            <input
              type="number"
              min={1}
              defaultValue={1}
              className="w-full rounded-lg border px-4 py-3"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-slate-800 px-4 py-3 font-medium text-white"
          >
            Check Availability
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingModal;