import React, { useRef, useState } from "react";
import MovingText from "react-moving-text";
import emailjs from "@emailjs/browser";
import contact from "../assets/contact.svg";
import Loader from "./Loader";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    setLoading(true);
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gnvzu3j",
        "template_pjeteaw",
        form.current,
        "user_hC3LDJsFtDf7vMo9kWUq8"
      )
      .then(
        (result) => {
          console.log(result.text);
          setLoading(false);
          toast.success("Email envoyé avec succès");
        },
        (error) => {
          console.log(error.text);
          toast.error("Ouup, email non envoyé");
        }
      );
  };

  return (
    <div id="contact" className="px-8 py-24 text-white">
      <Toaster position="bottom-center" />
      <MovingText
        type="bounce"
        duration="1500ms"
        delay="1s"
        direction="normal"
        timing="ease"
        iteration="infinite"
      >
        <h2 className="text-xl text-center my-5">Contact</h2>
      </MovingText>
      <div className="flex flex-col lg:flex-row items-center">
        <div className="flex-1">
          <img id="image" className="h-96 md:mb-10" src={contact} alt="" />
        </div>
        <div className="flex-1">
          <form
            className="flex text-black flex-col w-72"
            ref={form}
            onSubmit={sendEmail}
          >
            <MovingText
              type="fadeInFromBottom"
              duration="1500ms"
              delay="0.2s"
              direction="normal"
              timing="ease"
              iteration="1"
            >
              <label className="text-white">
                Name
                <br />
                <input
                  required
                  name="user_name"
                  className="w-full text-black outline-none px-2 py-1 focus:ring-2 ring-green-500 rounded-sm"
                  type="text"
                  placeholder="ex: email@gmail.com"
                />
              </label>
            </MovingText>
            <MovingText
              type="fadeInFromBottom"
              duration="1500ms"
              delay="0.2s"
              direction="normal"
              timing="ease"
              iteration="1"
            >
              <label className="text-white">
                Email
                <br />
                <input
                  required
                  name="user_email"
                  className="w-full text-black outline-none px-2 py-1 focus:ring-2 ring-green-500 rounded-sm"
                  type="email"
                  placeholder="ex: email@gmail.com"
                />
              </label>
            </MovingText>
            <MovingText
              className="mt-5"
              type="fadeInFromBottom"
              duration="1500ms"
              delay="0.2s"
              direction="normal"
              timing="ease"
              iteration="1"
            >
              <label className="text-white">
                Message
                <br />
                <textarea
                  required
                  name="message"
                  placeholder="ex: J'ai un projet pour vous"
                  className="w-full text-black outline-none px-2 py-1 focus:ring-2 ring-green-500 rounded-sm"
                  rows="10"
                ></textarea>
              </label>
            </MovingText>
            <MovingText
              type="fadeInFromBottom"
              duration="1500ms"
              delay="0.2s"
              direction="normal"
              timing="ease"
              iteration="1"
            >
              <button
                className="mt-5 w-full cursor-pointer text-white bg-green-500 px-8 py-2 rounded-sm"
                type="submit"
                value="Envoyer"
              >
                {loading ? <Loader /> : "Envoyer"}
              </button>
            </MovingText>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
