import React from "react";
import MovingText from "react-moving-text";
import ophiris from "../assets/ophiris.png";
import doctor from "../assets/doctor-app.png";
import bfa from "../assets/bfa.png";
import { FaGithub, FaGlobe } from "react-icons/fa";

export const Projects = () => {
  return (
    <div id="projects" className="bg-secondary pt-10 pb-24 text-white">
      <MovingText
        type="bounce"
        duration="1500ms"
        delay="5s"
        direction="normal"
        timing="ease"
        iteration="infinite"
      >
        <h2 className="text-xl text-center my-5">Projets</h2>
      </MovingText>
      <div className="flex flex-wrap justify-center items-stretch gap-8">
        <section
          id="ophiris"
          className="w-64 shadow-md rounded-md bg-green-700 text-white"
        >
          <img
            className="object-cover h-64 rounded-t-md"
            src={ophiris}
            alt="Ophiris"
          />
          <div className="flex flex-row justify-center gap-6 p-3">
            <a
              href="https://ophiris.com"
              hrefLang="en"
              className="flex underline items-center"
            >
              <span className="mr-2">
                <FaGlobe />
              </span>
              <span>Live Demo</span>
            </a>
            <a
              href="https://github.com/Ianel/ophiris"
              hrefLang="en"
              className="flex underline items-center"
            >
              <span className="mr-2">
                <FaGithub />
              </span>
              <span>Github</span>
            </a>
          </div>
        </section>
        <section
          id="doctor"
          className="w-64 shadow-md rounded-md bg-green-700 text-white"
        >
          <img
            className="object-cover h-64 rounded-t-md"
            src={doctor}
            alt="Doctor App"
          />
          <div className="flex flex-row justify-center gap-6 p-3">
            <a
              href="https://doctor-web-app.netlify.app"
              hrefLang="en"
              className="flex underline items-center"
            >
              <span className="mr-2">
                <FaGlobe />
              </span>
              <span>Live Demo</span>
            </a>
            <a
              href="https://github.com/Ianel/doctor-app"
              hrefLang="en"
              className="flex underline items-center"
            >
              <span className="mr-2">
                <FaGithub />
              </span>
              <span>Github</span>
            </a>
          </div>
        </section>
        <section
          id="artist"
          className="w-64 shadow-md rounded-md bg-green-700 text-white"
        >
          <img
            className="object-cover h-64 rounded-t-md"
            src={bfa}
            alt="Ophiris"
          />
          <div className="flex flex-row justify-center gap-6 p-3">
            <a
              href="https://bijoux-fantaisistes-artistiques.netlify.app/"
              hrefLang="en"
              className="flex underline items-center"
            >
              <span className="mr-2">
                <FaGlobe />
              </span>
              <span>Live Demo</span>
            </a>
            <a
              href="https://github.com/Ianel/bijoux-fantaisistes-artistiques"
              hrefLang="en"
              className="flex underline items-center"
            >
              <span className="mr-2">
                <FaGithub />
              </span>
              <span>Github</span>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};
