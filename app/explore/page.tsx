import Image from "next/image";

const page = () => {
  return (
    <div>
      <div className="head relative w-full h-[calc(100%-100px)]">
        <video className="absolute inset-0" />
      </div>

      <div className="">
        <h2 className="text-3xl font-bold text-center py-14"> Take a tour</h2>
        <div className="">
          {tour.map((item, i) => (
            <div
              key={i}
              className="max-w-6xl h-100 mb-26 rounded-3xl  mx-auto relative "
            >
              <Image
                src={item.img}
                alt="bg"
                width={600}
                height={400}
                className="absolute inset-0 w-full h-full object-cover rounded-3xl "
              />
              <div className=" w-xl h-40 rounded-2xl  shadow-xl  absolute -bottom-3/9 left-1/2 transform -translate-1/2 py-3 px-3 bg-white ">
                <h3 className="text-center font-semibold text-lg py-3 text-slate-700">
                  {item.title}
                </h3>
                <p className=" text-sm text-center text-gray-700">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const tour = [
  {
    img: "/bg_images/img1.jpeg",
    title: "Luxry rooms",
    text: "The elegant luxury bedrooms in this gallery showcase custom interior designs & decorating ideas. View pictures and find your perfect luxury bedroom design.Luxurious bedrooms that will make you never want to leave your room again. See more ideas about luxurious bedrooms, bedroom design",
  },
  {
    img: "/bg_images/img2.jpeg",
    title: "Luxry rooms",
    text: "The elegant luxury bedrooms in this gallery showcase custom interior designs & decorating ideas. View pictures and find your perfect luxury bedroom design.Luxurious bedrooms that will make you never want to leave your room again. See more ideas about luxurious bedrooms, bedroom design",
  },
  {
    img: "/bg_images/img3.jpeg",
    title: "Luxry rooms",
    text: "The elegant luxury bedrooms in this gallery showcase custom interior designs & decorating ideas. View pictures and find your perfect luxury bedroom design.Luxurious bedrooms that will make you never want to leave your room again. See more ideas about luxurious bedrooms, bedroom design",
  },
];

export default page;
