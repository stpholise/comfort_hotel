'use client'
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

const Header = () => {
  const param = useParams()
  return (
    <div className="px-4 sticky top-0 bg-black/10 ">
      <div className="max-w-6xl mx-auto py-2 px-4  flex items-center justify-between h-20  overflow-hidden">
        <div className="">
          <Image
            src={"/logo.png"}
            height={200}
            width={200}
            alt="logo"
            className="w-22 h-10"
          />
        </div>
        <div className=" flex gap-8 whitespace-nowrap text-sm font-semibold">
          {navItems.map((item, i) => (
            <Link href={item.url} key={i} >
              {item.value}
            </Link>
          ))}
        </div>

          <button className=" w-fit h-10 rounded-lg bg-slate-800 px-8 py-2 text-gray-200 text-sm font-medium">
            Book now
          </button>
      </div>
    </div>
  );
};

const navItems = [
  {
    url: "/",
    value: "Home",
  },
  {
    url: "/explore",
    value: "Explore",
  },
  {
    url: "/rooms",
    value: "Rooms",
  },
  {
    url: "/about",
    value: "About",
  },
  {
    url: "/contact",
    value: "Contact",
  },
];

export default Header;
