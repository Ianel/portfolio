import React from "react";
import MovingText from "react-moving-text";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaSkype,
  FaWhatsapp,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="bg-secondary py-10 text-white">
      <MovingText
        type="bounce"
        duration="1500ms"
        delay="0.5s"
        direction="normal"
        timing="ease"
        iteration="5"
      >
        <section className="text-white flex justify-center items-center">
          <a
            target="_blank"
            href="https://web.facebook.com/ianel.tombozafy"
            className="text-lg hover:scale-150 hover:text-green-700 transition-transform duration-200 mx-2 lg:mx-4"
          >
            <FaFacebook />
          </a>
          {/*  <a
            href="https://www.instagram.com"
            className="text-lg hover:scale-150 hover:text-green-700 transition-transform duration-200 mx-2 lg:mx-4"
          >
            <FaInstagram />
          </a> */}
          <a
            target="_blank"
            href="https://www.linkedin.com/in/ianel-tombozafy"
            className="text-lg hover:scale-150 hover:text-green-700 transition-transform duration-200 mx-2 lg:mx-4"
          >
            <FaLinkedin />
          </a>
          <a
            target="_blank"
            href="https://github.com/Ianel"
            className="text-lg hover:scale-150 hover:text-green-700 transition-transform duration-200 mx-2 lg:mx-4"
          >
            <FaGithub />
          </a>
          {/*  <a
            href="https://www.whatsapp.com"
            className="text-lg hover:scale-150 hover:text-green-700 transition-transform duration-200 mx-2 lg:mx-4"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://www.skype.com"
            className="text-lg hover:scale-150 hover:text-green-700 transition-transform duration-200 mx-2 lg:mx-4"
          >
            <FaSkype />
          </a> */}
        </section>
      </MovingText>
      <p className="text-center mt-4 mb-2">
        &copy; Copyright {new Date(Date.now()).getFullYear()} - Tous droits
        reservés
      </p>
    </div>
  );
};
