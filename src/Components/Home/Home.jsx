import React from "react";
import avatarImg from "../../assets/7358602-removebg-preview.png";
import TextChange from "../TextChange";

const Home = () => {
  return (
    <div className="text-white flex flex-col md:flex-row w-full justify-between items-center px-4 py-10 md:px-20 md:py-20 max-w-6xl mx-auto">
      
      <div className="md:w-2/4 md:pt-10">
        <h1 className="text-3xl md:text-6xl font-bold leading-normal tracking-tighter">
          <TextChange />
        </h1>

        <p className="mt-5 text-base md:text-xl tracking-tight">
          <i>
          Python Developer | Data Analyst | Data Science 
          <br>
          </br>
          <br>
          </br>

           </i>
I am a BCA graduate passionate about Python, Data Analytics, Data Science, and Machine Learning. I enjoy building real-world projects using Python, SQL, Power BI, Pandas, NumPy, and Data Visualization to solve practical problems and uncover meaningful insights.
          
        </p>

        <button className="mt-8 text-white py-2 px-5 text-lg hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
          Contact Me
        </button>
      </div>

      <div className="mb-10 md:mb-0">
        <img
          className="w-72 md:w-96"
          src={avatarImg}
          alt="Anmol Rana"
        />
      </div>

    </div>
  );
};

export default Home;