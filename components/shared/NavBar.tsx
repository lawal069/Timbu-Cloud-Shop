"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const toggleMobileMenu = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  return (
    <nav className="w-full mx-auto max-w-screen-xxl">
      <div className="flex items-center justify-between max-w-screen-xxl w-full mx-auto bg-white p-[20px] md:px-[120px] md:py-[24px] h-[84px] shadow-custom">
        {/* hamburger menu */}
        <div onClick={toggleMobileMenu} className="lg:hidden cursor-pointer">
          {open ? (
            <Image
              src={"/nav/close.svg"}
              alt={"close"}
              width={26.67}
              height={20}
            />
          ) : (
            <Image
              src={"/nav/open.png"}
              alt={"open"}
              width={26.67}
              height={20}
            />
          )}
        </div>

        {/* large screen links */}
        <Link href={"/"}>
          <h4 className="text-[24px] font-semibold leading-[30.24px] text-[#3A9A32]">
            Footerz
          </h4>
        </Link>
        <div className="flex gap-[32px] justify-center items-center">
          <Image
            src={"/love.png"}
            alt="love"
            width={25}
            height={22.94}
            className="hidden lg:flex"
          />
          <Image
            src={"/nav/cart-tag.png"}
            alt="cart-tag"
            width={43}
            height={35}
          />
        </div>

        {/* mobile view */}
        <ul
          className={`lg:hidden absolute w-full h-full bottom-0 bg-white z-10 py-32 duration-500 ease-in-out transition-all ${
            open ? "left-0" : "left-[-100%] custom-input-gray"
          }`}
        >
          <div className="flex flex-col space-y-12 px-6">
            {navLinks.map((link, index) => (
              <Link key={index} href={link.url} onClick={() => setOpen(false)}>
                {link.name}
              </Link>
            ))}
            <div className="flex lg:hidden gap-6 pt-10">
              {NavSocial.map((social, index) => (
                <div key={index} className="w-[18px] h-[18px] relative">
                  <Link href={social.url}>
                    <Image
                      src={social.img}
                      alt="social"
                      fill
                      className="w-auto absolute object-contain"
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;

const navLinks = [
  {
    name: "About us",
    url: "/about-us",
  },
  {
    name: "AAF Pillars",
    url: "/pillars",
  },
  {
    name: "Get involved",
    url: "/partner",
  },
  {
    name: "Contact us",
    url: "/contact-us",
  },
];

const NavSocial = [
  {
    img: "/nav/nav-fb.svg",
    url: "/",
  },
  {
    img: "/nav/nav-ig.svg",
    url: "/",
  },
  {
    img: "/nav/nav-x.svg",
    url: "/",
  },
  {
    img: "/nav/nav-linked.svg",
    url: "/",
  },
];
