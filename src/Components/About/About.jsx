import React from "react";
import AboutImg from "../../assets/7358653-removebg-preview.png";
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">About</h2>

        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <img className="md:h-80" src={AboutImg} alt="About" />

          <ul>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-full max-w-xl">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Python Developer
                </h1>

                <p className="text-sm md:text-md leading-tight">
                  Strong foundation in Python programming with experience in
                  automation, web scraping, data processing, and building
                  real-world applications. Passionate about writing clean,
                  efficient, and reusable code.
                </p>
              </span>
            </div>

            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Data Analyst
                </h1>

                <p className="text-sm md:text-md leading-tight">
                  Skilled in data analysis and visualization using Python,
                  Pandas, NumPy, SQL, Excel, and Power BI. Experienced in
                  creating dashboards and extracting valuable insights from
                  real-world datasets.
                </p>
              </span>
            </div>

            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Data Scientist
                </h1>

                <p className="text-sm md:text-md leading-tight">
                  Passionate about Data Science, Machine Learning, and
                  Artificial Intelligence. Continuously learning new
                  technologies and building practical projects to solve
                  real-world problems using data.
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;