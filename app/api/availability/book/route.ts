export async function POST(req: Request) {
  const booking = await req.json();

  // 👉 save to DB (later)
  console.log("New booking:", booking);

  return Response.json({ success: true });
}