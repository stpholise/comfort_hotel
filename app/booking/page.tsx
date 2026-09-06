import BookingPage from "./BookingPage";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{
    checkIn?: string;
    checkOut?: string;
    roomType?: string;
    guests?: string;
  }>;
}) {
  const params = await searchParams;

  console.log(params.checkIn)
  return (
    <BookingPage
      checkIn={params.checkIn ?? ""}
      checkOut={params.checkOut ?? ""}
      roomType={params.roomType ?? ""}
      guests={params.guests ?? ""}
    />
  );
}