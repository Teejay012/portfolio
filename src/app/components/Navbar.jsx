"use client"

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CgMenuRight } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";
import myLogo from "../../../public/images/myLogo.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-[#0b043a] shadow-md fixed top-0 left-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image src={myLogo} alt="Logo" width={40} height={40} />
          <span className="text-lg font-semibold">YourWeb3Developer</span>
        </div>

        {/* Nav Links - Desktop */}
        <nav className="hidden md:flex space-x-6">
          {[
            { name: "About", href: "#about" },
            { name: "Portfolio", href: "#portfolio" },
            { name: "Services", href: "#services" },
            { name: "Testimonials", href: "#testimonials" },
          ].map((link) => (
            <Link key={link.name} href={link.href} className="hover:text-blue-600">
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Let's Connect Button */}
        <Link
          href="#contact"
          className="hidden md:block px-6 py-3 bg-transparent border-2 border-white text-white"
        >
          Let’s Connect
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <IoMdClose size={24} /> : <CgMenuRight size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-[#0b043a] shadow-md p-4 space-y-4">
          {[
            { name: "About", href: "#about" },
            { name: "Portfolio", href: "#portfolio" },
            { name: "Services", href: "#services" },
            { name: "Testimonials", href: "#testimonials" },
          ].map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block text-white text-center hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#contact"
            className="block text-center px-6 py-3 bg-transparent border-2 border-white text-white"
          >
            Let’s Connect
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
