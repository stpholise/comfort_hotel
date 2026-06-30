import { NextResponse } from "next/server";

// fake DB (replace later)
const rooms = [
  { id: "1", type: "single", capacity: 1 },
  { id: "2", type: "double", capacity: 2 },
  { id: "3", type: "suite", capacity: 4 },
];

const bookings = [
  {
    roomId: "2",
    checkIn: "2026-04-10",
    checkOut: "2026-04-15",
  },
];

export async function POST(req: Request) {
  const { checkIn, checkOut, guests, roomType } = await req.json();

  const availableRooms = rooms.filter((room) => {
    if (roomType && room.type !== roomType) return false;
    if (room.capacity < guests) return false;

    const roomBookings = bookings.filter(
      (b) => b.roomId === room.id
    );

    const isBooked = roomBookings.some((b) =>
      new Date(checkIn) < new Date(b.checkOut) &&
      new Date(checkOut) > new Date(b.checkIn)
    );

    return !isBooked;
  });

  return NextResponse.json({ availableRooms });
}