import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center relative text-center min-h-screen p-4 bg-heroBg bg-cover bg-center">

      <div className="absolute w-full h-full bg-[#0b043a] z-0 bg-opacity-70"></div>

      <h1 className="text-4xl md:text-6xl w-full md:w-[75%] font-bold mb-4 z-10">
        Innovative Creations by YourWeb3Developer
      </h1>
      
      <p className="text-lg md:text-xl text-white max-w-2x mb-6 z-10">
        Discover the best way to build Web applications with a focus on efficiency, security, and innovation.
      </p>
      
      <div className="flex space-x-4 z-10">
        <Link
          href="#contact"
          className="px-6 py-3 bg-[#8750fc] text-white text-lg"
        >
          Let’s Connect
        </Link>
        
        <Link
          href="#portfolio"
          className="px-6 py-3 bg-transparent border-2 border-white text-white"
        >
          Check My Work
        </Link>
      </div>
    </section>
  );
};

export default Hero;
