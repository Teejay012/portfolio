import React from "react";
import Image from "next/image";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

import myPicture from "../../../public/images/myPicture.png"

const AboutMe = () => {
  return (
    <section id="about" className="flex flex-col md:flex-row items-center justify-center min-h-screen p-6 bg-[#0b043a]">
      <div className="flex flex-col items-center md:w-1/3 mb-6 md:mb-0">
        <Image
          src={myPicture}
          alt="YourWeb3Developer"
          width={200}
          height={200}
          className="rounded-full shadow-lg"
        />
        <div className="flex space-x-4 mt-4">
          <a href="https://x.com/Tee_Jay4life" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-blue-500 text-2xl hover:text-blue-700" />
          </a>
          <a href="https://www.linkedin.com/in/tijesunimi-peace-140612248/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-blue-700 text-2xl hover:text-blue-900" />
          </a>
          <a href="https://github.com/Teejay012" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-gray-800 text-2xl hover:text-black" />
          </a>
        </div>
      </div>

      <div className="md:w-2/3 text-center md:text-left text-white">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-lg">
          I am Peace (a.k.a YourWeb3Developer), a passionate Web3 developer specializing in building innovative decentralized applications and full stack solutions. With a strong foundation in blockchain technology and smart contract development, I help bring ideas to life by creating secure and scalable solutions. Whether it's developing dApps, working with Solidity and Foundry, or integrating blockchain with modern web technologies, I am committed to pushing the boundaries of Web3 innovation. Additionally, my expertise in full stack development enables me to seamlessly integrate front-end and back-end technologies, ensuring a cohesive and efficient user experience for every project.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
