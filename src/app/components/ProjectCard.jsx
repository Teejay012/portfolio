import React from "react";
import Image from "next/image";

const ProjectCard = ({ project }) => {
    return (
      <div className="bg-white shadow-md rounded-lg p-4 w-64 flex-shrink-0">
        <Image
          src={project.image}
          alt={project.title}
          width={256}
          height={160}
          className="rounded-lg"
        />
        <h3 className="text-xl font-semibold mt-3 text-[#0b043a]">{project.title}</h3>
        <p className="text-gray-600 text-sm mt-2">{project.description}</p>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 px-6 py-2 bg-[#8750fc] text-white text-lg"
        >
          Visit
        </a>
      </div>
    );
  };

export default ProjectCard;