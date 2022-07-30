import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";

function App() {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: true,
    });

    sr.reveal(
      `
      #hero,
      #web,
      #mobile,
      #ophiris,
      #doctor,
      #artist,
      #picture,
      #text,
      #human1,
      #human2,
      #human3,
      #contact,
      #image
    `,
      {
        opacity: 0,
        interval: 300,
      }
    );
  }, []);

  return (
    <div className="bg-primary font-body text-sm">
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
