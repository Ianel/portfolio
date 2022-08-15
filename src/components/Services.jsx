import React from "react";
import MovingText from "react-moving-text";
import { FaCogs, FaMobile } from "react-icons/fa";

export const Services = () => {
  return (
    <div id="services" className="pt-12 pb-20 text-white">
      <MovingText
        type="bounce"
        duration="1500ms"
        delay="5s"
        direction="normal"
        timing="ease"
        iteration="infinite"
      >
        <h2 className="text-xl text-center mt-5 mb-10">Services</h2>
      </MovingText>
      <div className="flex flex-wrap justify-center items-stretch gap-8">
        <section
          id="web"
          className="shadow-md shadow-white rounded-md md:mb-10 w-72 p-8 text-justify"
        >
          <span className="text-xl text-green-500">
            <FaCogs />
          </span>
          <h2 className="my-4 font-semibold">Intégration Web</h2>
          <p>
            Intégration de maquettes pour aboutir à des sites vitrines ou à des
            applications web plus ou moins avancées. Les technologies utilisées
            varient de HTML5/CSS3/JS au framework ReactJS, TailwindCSS.
          </p>
        </section>

        <section
          id="mobile"
          className="shadow-md shadow-white rounded-md md:mb-10 w-72 p-8 text-justify"
        >
          <span className="text-xl text-green-500">
            <FaMobile />
          </span>
          <h2 className="my-4 font-semibold">Développement App Mobile</h2>
          <p>
            Conception d'applications mobiles de tout type basées sur le kit de
            développement Flutter avec le langage Dart. Pour satisfaire vos
            idées, le développement se fait à la fois pour Android et iOS.
          </p>
        </section>
      </div>
    </div>
  );
};
