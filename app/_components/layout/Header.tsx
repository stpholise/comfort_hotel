"use client";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
// import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [displayMenu, setDisplayMenu] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    
  }, []);
  
  useEffect(() => {
  if (displayMenu) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }

  return () => {
    document.body.style.overflow = "";
  };
}, [displayMenu]);

  const toggelMenu = () => {
    console.log("testing ");
    setDisplayMenu((val) => !val);
  };

  return (
    <div
      className={clsx(
        "sm:px-1 sticky mx-auto z-20 w-full ",
        isScrolled ? "sm:top-4 max-w-6xl w-full rounded-lg  " : "top-0 ",
      )}
    >
      <div
        className={clsx(
          " sm:px-4  mx-auto z-20 w-full ",
          isScrolled
            ? "bg-black/98 top-4 max-w-6xl w-full rounded-lg text-gray-200 "
            : "bg-black/10 top-0 text-black",
          displayMenu ? "  px-0" : " px-4",
        )}
      > 
      <div className="overlay fixed w-full bg-black/5 z-10"></div>
        <div className="max-w-6xl mx-auto py-2 sm:px-4  flex items-center justify-between h-20  sm:overflow-hidden">
          <Link href={"/"} className="">
            <Image
              src={"/logo.png"}
              height={200}
              width={200}
              alt="logo"
              className="w-22 h-10"
            />
          </Link>
          <div
            className={clsx(
              "sm:flex sm:flex-row sm:bg-transparent sm:gap-8 whitespace-nowrap text-sm font-semibold",
              displayMenu
                ? "flex flex-col gap-1 h-fit absolute top-full px-4 py-4 mx-auto w-screen"
                : "opacity-0",
            )}
          >
            {navItems.map((item, i) => (
              <Link
                href={item.url}
                className={clsx(
                  "opacity-0 bg-blue-500 sm:bg-transparent block py-4 px-4",
                  displayMenu && "animate-menu-drop",
                  i === 0 && "[animation-delay:0ms]",
                  i === 1 && "[animation-delay:100ms]",
                  i === 2 && "[animation-delay:200ms]",
                  i === 3 && "[animation-delay:300ms]",
                  i === 4 && "[animation-delay:400ms]",
                )}
                key={i}
                onClick={() => setDisplayMenu(false)}
              >
                {item.value}
              </Link>
            ))}
          </div>
          <button
            onClick={toggelMenu}
            className="sm:hidden flex flex-col gap-1.5 w-8"
            aria-label="Toggle menu"
          >
            <span
              className={clsx(
                "block h-1 w-8 rounded-full transition-all duration-300",
                displayMenu
                  ? "translate-y-3 rotate-45"
                  : "translate-y-0 rotate-0",
                isScrolled ? "bg-white" : "bg-slate-800",
              )}
            />

            <span
              className={clsx(
                "block h-1 w-8 rounded-full transition-all duration-300",
                displayMenu ? "opacity-0" : "opacity-100",
                isScrolled ? "bg-white" : "bg-slate-800",
              )}
            />

            <span
              className={clsx(
                "block h-1 w-8 rounded-full transition-all duration-300",
                displayMenu
                  ? "-translate-y-2 -rotate-45"
                  : "translate-y-0 rotate-0",
                isScrolled ? "bg-white" : "bg-slate-800",
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
