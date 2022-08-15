import React from "react";
import MovingText from "react-moving-text";

export const About = () => {
  return (
    <div id="about" className="flex flex-col items-center text-white">
      <div className="flex-1 flex justify-center">
        <img
          id="picture"
          className="h-80 mt-12 md:mt-8"
          src="/About-min.png"
          alt="A propos de moi"
        />
      </div>

      <div id="text" className="flex-1 flex flex-col p-10 md:p-24">
        <MovingText
          type="bounce"
          duration="1500ms"
          delay="5s"
          direction="normal"
          timing="ease"
          iteration="infinite"
        >
          <h2 className="font-bold text-xl text-center my-5">
            A propos de moi
          </h2>
        </MovingText>
        <MovingText
          type="fadeInFromBottom"
          duration="1500ms"
          delay="0.2s"
          direction="normal"
          timing="ease"
          iteration="1"
        >
          <p className="leading-7 text-justify">
            Je suis un jeune développeur dont la passion est de coder et dont le
            but est de créer quelque chose d'utile pour les gens. Né dans la
            ville de Mahajanga en le Nord-Ouest de Madagascar, je suis entré
            dans le monde du développement quand mon frère l'a fait en premier.
            Au début, je n'étais pas très intéressé par l'informatique jusqu'à
            ce que je trouve la joie de créer des sites Web avec html 5 et css
            3. C'était si facile de créer un site Web et j'ai commencé créer mes
            propres sites Web de démonstration avec un ordinateur Acer de 2 Go
            de RAM en espérant qu'un jour je pourrai créer des sites comme ceux
            qu'on voit quand nous naviguons sur le Web.
          </p>
        </MovingText>
      </div>
    </div>
  );
};
