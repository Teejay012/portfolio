import React from "react";
import Image from "next/image";
import backend from "../../../public/images/backend.png";
import frontend from "../../../public/images/frontend.png";
import blockchain from "../../../public/images/blockchain.png";

const services = [
  {
    title: "Frontend Development",
    description:
      "I create modern, responsive, and high-performance user interfaces using cutting-edge technologies like React, Next.js, and Tailwind CSS. My goal is to build smooth and interactive web experiences that enhance user engagement and functionality.",
    skills: ["React.js", "Next.js", "Tailwind CSS", "JavaScript", "TypeScript"],
    image: frontend,
  },
  {
    title: "Backend Development",
    description:
      "I develop secure and scalable back-end systems using robust technologies. With expertise in Node.js, Express, and databases like MongoDB and PostgreSQL, I ensure seamless data flow and efficient server-side logic.",
    skills: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "REST APIs"],
    image: backend,
  },
  {
    title: "Blockchain Development",
    description:
      "I specialize in Web3 and blockchain solutions, including smart contract development, decentralized applications (dApps), and blockchain integrations using Solidity and Foundry.",
    skills: ["Solidity", "Foundry", "Ethereum", "ICP", "Smart Contracts"],
    image: blockchain,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        {services.map((service, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center mb-12 ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
          >
            {/* Left Side - Text */}
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="text-3xl font-bold mb-4 text-[#0b043a]">{service.title}</h2>
              <p className="text-lg text-gray-700 mb-4">{service.description}</p>
              <p className="font-semibold">Skills:</p>
              <ul className="list-disc list-inside text-gray-600">
                {service.skills.map((skill, idx) => (
                  <li key={idx}>{skill}</li>
                ))}
              </ul>
            </div>
            {/* Right Side - Image */}
            <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
              <Image
                src={service.image}
                alt={service.title}
                width={400}
                height={250}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
