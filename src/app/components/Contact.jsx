import React from "react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-12 bg-white px-4 sm:px-6 lg:px-8 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-[#0b043a]">Let's Connect</h2>
        <p className="text-lg text-gray-600 mb-6">
          Feel free to reach out to me for collaborations, inquiries, or just a chat!
        </p>
        <a
          href="mailto:tijesunimipeace04@gmail.com"
          className="text-blue-600 text-lg font-semibold hover:underline"
        >
          tijesunimipeace04@gmail.com
        </a>
        <div className="flex justify-center space-x-6 mt-6">
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
    </section>
  );
};

export default Contact;
