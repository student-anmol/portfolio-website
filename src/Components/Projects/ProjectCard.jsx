import React from "react";
import bannerImg from "../../assets/photo-C8q0KQHG.webp";

const ProjectCard = ({ title, main }) => {
  return (
    <div className="p-3 md:p-6 flex flex-col w-full max-w-xs bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl">
      <img
        className="p-4 rounded-xl"
        src={bannerImg}
        alt={title}
      />

      <h3 className="px-4 text-xl md:text-2xl font-bold">
        {title}
      </h3>

      <p className="px-4 py-2 text-sm md:text-base">
        {main}
      </p>
    </div>
  );
};

export default ProjectCard;