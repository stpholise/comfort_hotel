"use client";
import { navItems } from "./Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faXTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-slate-700 py-8 min-h-80 mt-12 flex-col flex text-gray-400">
      <div className="max-w-6xl p-4 mx-auto flex items-start  w-full justify-between gap-12">
        <div className="  max-w-70 flex flex-col gap-8">
          <h2 className="font-pacifico text-3xl italic font-semibold">
            Comfort Hotel
          </h2>
          <p className=" text-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad et
            neque nobis consectetur nesciunt totam a sunt possimus quos alias.
          </p>
        </div>
        <div className="  max-w-70 flex flex-col gap-8">
          <h4 className=" text-gray-200 hidden sm:block">Quick links</h4>
          <div className=" flex flex-col  text-sm  text-gray-300">
            {navItems.map((item, i) => (
              <Link href={item.url} className="" key={i}>
                {item.value}
              </Link>
            ))}
          </div>
        </div>
        <div className="  max-w-70 flex flex-col gap-8">
          <h4 className="text-gray-200 hidden sm:block">Social links</h4>
          <div className=" flex   text-sm  text-gray-300">
            {socialMedia.map((item, i) => (
              <Link href={item.url} className="px-2" key={i}>
                <FontAwesomeIcon icon={item.icon} className="size-12 text-xl" />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className=" text-center text-xs font-medium mt-auto">
        &copy; comfort hotel 2025
      </div>
    </div>
  );
};

const socialMedia = [
  {
    url: "https://www.facebook.com",
    value: "Facebook",
    icon: faFacebook,
  },
  {
    url: "https://www.x.com",
    value: "X",
    icon: faXTwitter,
  },
  {
    url: "https://www.instagram.com",
    value: "instagram",
    icon: faInstagram,
  },
  {
    url: "https://www.linkedin.com",
    value: "Linkedin",
    icon: faLinkedin,
  },
];

export default Footer;
