import React from "react";
import {
  FaPython,
  FaDatabase,
  FaChartLine,
  FaBrain,
  FaRobot,
} from "react-icons/fa";

const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold">
        Experience & Skills
      </h1>

      <div className="flex flex-wrap items-center justify-around">

        {/* Skills */}
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10 justify-center">

          <div className="flex flex-col items-center">
            <span className="p-4 bg-zinc-950 rounded-2xl">
              <FaPython color="#3776AB" size={50} />
            </span>
            <p className="text-white mt-2">Python</p>
          </div>

          <div className="flex flex-col items-center">
            <span className="p-4 bg-zinc-950 rounded-2xl">
              <FaChartLine color="#22C55E" size={50} />
            </span>
            <p className="text-white mt-2">Data Analysis</p>
          </div>

          <div className="flex flex-col items-center">
            <span className="p-4 bg-zinc-950 rounded-2xl">
              <FaBrain color="#8B5CF6" size={50} />
            </span>
            <p className="text-white mt-2">Data Science</p>
          </div>

          <div className="flex flex-col items-center">
            <span className="p-4 bg-zinc-950 rounded-2xl">
              <FaRobot color="#F97316" size={50} />
            </span>
            <p className="text-white mt-2">Machine Learning</p>
          </div>

        </div>

        {/* Experience */}
        <div>

          <div className="flex gap-8 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            <FaDatabase color="#3776AB" size={45} />

            <span className="text-white">
              <h2 className="text-xl font-semibold">
                Data Science with Python Intern
              </h2>

              <p className="text-sm font-thin">
                IIT Kanpur • 2025
              </p>

              <ul className="text-sm p-2">
                <li>• Learned Python for Data Science.</li>
                <li>• Performed data analysis using Pandas and NumPy.</li>
                <li>• Built data visualization projects.</li>
              </ul>
            </span>
          </div>

          <div className="flex gap-8 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            <FaRobot color="#F97316" size={45} />

            <span className="text-white">
              <h2 className="text-xl font-semibold">
                India Space Lab Intern
              </h2>

              <p className="text-sm font-thin">
                June 2025 – July 2025
              </p>

              <ul className="text-sm p-2">
                <li>• Developed an Arduino Fire Fighting Robot.</li>
                <li>• Built an IoT Smart Irrigation System.</li>
                <li>• Worked on embedded systems and automation.</li>
              </ul>
            </span>
          </div>

          <div className="flex gap-8 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            <FaPython color="#3776AB" size={45} />

            <span className="text-white">
              <h2 className="text-xl font-semibold">
                Python & Data Analytics Projects
              </h2>

              <p className="text-sm font-thin">
                2025 – Present
              </p>

              <ul className="text-sm p-2">
                <li>• Book Scraping using Python & BeautifulSoup.</li>
                <li>• Chandrayaan-3 Data Analysis Dashboard.</li>
                <li>• Power BI dashboards and SQL projects.</li>
              </ul>
            </span>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Experience;