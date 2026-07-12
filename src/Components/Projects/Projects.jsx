import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white">
      <h1 className="text-2xl md:text-4xl font-bold">Projects</h1>

      <div className="py-12 px-4 md:px-8 flex flex-wrap gap-5 justify-center">

        <ProjectCard
          title="Book Scraping using Python"
          main="Developed a Python web scraping application using BeautifulSoup to extract book information from websites and store the data in a MySQL database."
        />

        <ProjectCard
          title="Chandrayaan-3 Data Analysis Dashboard"
          main="Analyzed Chandrayaan-3 mission datasets using Python, Pandas, and Power BI to build interactive dashboards and visualize mission insights."
        />

        <ProjectCard
          title="IoT Smart Irrigation System"
          main="Designed and developed an IoT-based smart irrigation system using Arduino, sensors, and automation to optimize water usage in agriculture."
        />

      </div>
    </div>
  );
};

export default Projects;