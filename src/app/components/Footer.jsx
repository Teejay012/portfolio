import React from "react";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-4 bg-[#0b043a] text-white text-center">
      <div className="flex items-center justify-center space-x-2">
        <FaRegCopyright className="text-lg" />
        <p className="text-sm">2025 YourWeb3Developer</p>
      </div>
    </footer>
  );
};

export default Footer;