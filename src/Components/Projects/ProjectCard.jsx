import React from "react";
import bannerImg from "../../assets/photo-C8q0KQHG.webp";

const ProjectCard = ({ title, main, demo, source }) => {
  return (
    <div className="p-3 md:p-6 flex flex-col w-full max-w-xs bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl">
      <img className="p-4 rounded-xl" src={bannerImg} alt={title} />

      <h3 className="px-4 text-xl md:text-2xl font-bold">
        {title}
      </h3>

      <p className="px-4 text-sm md:text-base py-2">
        {main}
      </p>

      <div className="mt-4 px-4 flex gap-3">
        <a
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="text-white py-2 px-4 rounded-3xl bg-[#465697] hover:scale-105 duration-300">
            Demo
          </button>
        </a>

        <a
          href={source}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="text-white py-2 px-4 rounded-3xl bg-[#465697] hover:scale-105 duration-300">
            Source Code
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;