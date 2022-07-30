import React from "react";
import MovingText from "react-moving-text";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import marielle from "../assets/Marielle.jpg";

const Testimonials = () => {
  return (
    <div id="testimonial" className="bg-secondary px-8 py-24 text-white">
      <MovingText
        type="bounce"
        duration="1500ms"
        delay="5s"
        direction="normal"
        timing="ease"
        iteration="infinite"
      >
        <h2 className="text-xl text-center my-5">Témoignages</h2>
      </MovingText>
      <div className="flex flex-col items-center lg:items-stretch gap-5 lg:flex-row lg:justify-center">
        {/* <section id="human1" className="w-80 bg-primary p-5">
          <div className="flex justify-between items-stretch pb-5">
            <div>
              <h3>RH. Hugues</h3>
              <span className="italic text-xs">
                - CEO of Ophir International Services
              </span>
            </div>
            <img src="/Human1.jpg" className="w-10 h-10 object-cover" alt="" />
          </div>
          <p className="leading-5 text-xs">
            <FaQuoteLeft className="text-green-500" /> Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Cum saepe doloremque architecto
            quam voluptas sed nisi eaque totam blanditiis itaque enim,
            consectetur placeat dolorem, a deleniti eum consequuntur quidem.
            Nisi? <FaQuoteRight className="text-green-500" />
          </p>
        </section> */}
        <section id="human2" className="w-80 bg-primary p-5">
          <div className="flex justify-between items-stretch pb-5">
            <div>
              <h3>Randrianjohany Marielle</h3>
              <span className="italic text-xs">
                - CEO of Accessoires et déco bohème
              </span>
            </div>
            <img src={marielle} className="w-10 h-10 object-cover" alt="" />
          </div>
          <p className="leading-5 text-xs">
            <FaQuoteLeft className="text-green-500" />
            Premièrement, le site a permis à ma page d'être visible et d'attirer
            de plus vaste cible potentiel. Il a aussi professionnalisé l'image
            de mon produit. <FaQuoteRight className="text-green-500" />
          </p>
        </section>
        {/* <section id="human3" className="w-80 bg-primary p-5">
          <div className="flex justify-between items-stretch pb-5">
            <div>
              <h3>RH. Hugues</h3>
              <span className="italic text-xs">
                - CEO of Ophir International Services
              </span>
            </div>
            <img src="/Human1.jpg" className="w-10 h-10 object-cover" alt="" />
          </div>
          <p className="leading-5 text-xs">
            <FaQuoteLeft className="text-green-500" /> Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Cum saepe doloremque architecto
            quam voluptas sed nisi eaque totam blanditiis itaque enim,
            consectetur placeat dolorem, a deleniti eum consequuntur quidem.
            Nisi? <FaQuoteRight className="text-green-500" />
          </p>
        </section> */}
      </div>
    </div>
  );
};

export default Testimonials;
