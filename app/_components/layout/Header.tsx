"use client";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
// import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggelMenu = () => {
    console.log('testing ')
  }

  return (
    <div
      className={clsx(
        "px-1 sticky mx-auto z-20 w-full ",
        isScrolled ? "top-4 max-w-6xl w-full rounded-lg  " : "top-0 ",
      )}
    >
      <div
        className={clsx(
          "px-4 sticky mx-auto z-20 w-full ",
          isScrolled
            ? "bg-black/98 top-4 max-w-6xl w-full rounded-lg text-gray-200 "
            : "bg-black/10 top-0 text-black",
        )}
      >
        <div className="max-w-6xl mx-auto py-2 px-4  flex items-center justify-between h-20  overflow-hidden">
          <Link href={"/"} className="">
            <Image
              src={"/logo.png"}
              height={200}
              width={200}
              alt="logo"
              className="w-22 h-10"
            />
          </Link>
          <div className=" hidden sm:flex gap-8 whitespace-nowrap text-sm font-semibold">
            {navItems.map((item, i) => (
              <Link href={item.url} key={i}>
                {item.value}
              </Link>
            ))}
          </div>
          <button onClick={toggelMenu}  className="sm:hidden">
            {" "}
            <FontAwesomeIcon
              icon={faBars}
              className={clsx(
                " text-3xl text-slate-700",
                isScrolled ? "text-white" : " text-slate-800"
              )}
            />
          </button>
          <button className="sm:block hidden w-fit h-10 rounded-lg bg-slate-800 px-8 py-2 text-gray-200 text-sm font-medium">
            Book now
          </button>
        </div>
      </div>
    </div>
  );
};

export const navItems: { url: string; value: string }[] = [
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
