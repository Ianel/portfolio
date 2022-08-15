import React from "react";
import MovingText from "react-moving-text";
import ParticleBackground from "react-particle-backgrounds";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaSkype,
  FaWhatsapp,
} from "react-icons/fa";

export const Hero = () => {
  const settings = {
    canvas: {
      canvasFillSpace: true,
      width: 1000,
      height: 200,
      useBouncyWalls: false,
    },
    particle: {
      particleCount: 50,
      color: "#94ecbe",
      minSize: 2,
      maxSize: 5,
    },
    velocity: {
      directionAngle: 0,
      directionAngleVariance: 360,
      minSpeed: 1,
      maxSpeed: 3,
    },
    opacity: {
      minOpacity: 0,
      maxOpacity: 0.5,
      opacityTransitionTime: 3000,
    },
  };

  return (
    <div className="relative">
      <ParticleBackground settings={settings} className="absolute h-[80vh]" />
      <div className="min-h-[80vh] text-sm flex flex-col lg:flex-row bg-secondary">
        <div className="mx-12 mt-12 flex-1 flex flex-col gap-4 text-justify justify-center items-center">
          <MovingText
            type="bounce"
            duration="1500ms"
            delay="0.5s"
            direction="normal"
            timing="ease"
            iteration="5"
          >
            <section className="text-white text-lg flex justify-center items-center">
              <a
                target="_blank"
                href="https://web.facebook.com/ianel.tombozafy"
                className="hover:scale-150 hover:text-green-700 transition-transform duration-200 mx-2 lg:mx-4"
              >
                <FaFacebook />
              </a>
              {/* <a
              href="https://www.instagram.com"
              className="hover:scale-150 hover:text-green-700 transition-transform duration-200 mx-2 lg:mx-4"
            >
              <FaInstagram />
            </a> */}
              <a
                target="_blank"
                href="https://www.linkedin.com/in/ianel-tombozafy"
                className="hover:scale-150 hover:text-green-700 transition-transform duration-200 mx-2 lg:mx-4"
              >
                <FaLinkedin />
              </a>
              <a
                target="_blank"
                href="https://github.com/Ianel"
                className="hover:scale-150 hover:text-green-700 transition-transform duration-200 mx-2 lg:mx-4"
              >
                <FaGithub />
              </a>
              {/*   <a
              href="https://www.whatsapp.com"
              className="hover:scale-150 hover:text-green-700 transition-transform duration-200 mx-2 lg:mx-4"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://www.skype.com"
              className="hover:scale-150 hover:text-green-700 transition-transform duration-200 mx-2 lg:mx-4"
            >
              <FaSkype />
            </a> */}
            </section>
          </MovingText>
          <MovingText
            type="squeezeMix"
            duration="1500ms"
            delay="0.5s"
            direction="normal"
            timing="ease"
            iteration="infinite"
          >
            <h2 className="text-green-500">Je suis un Développeur Front-End</h2>
          </MovingText>
          <MovingText
            type="fadeInFromLeft"
            duration="3000ms"
            delay="1.5s"
            direction="normal"
            timing="ease"
            iteration="1"
          >
            <p className="text-white">
              Passionné par le développement d'interfaces graphiques, je me mets
              à votre service pour faire de votre idée une réalité
            </p>
          </MovingText>
        </div>
        <img
          id="hero"
          className="flex-1 object-cover md:w-2/3 md:grid md:place-self-center"
          src="/Hero-min.png"
          alt="Hero Bg"
        />
      </div>
    </div>
  );
};
