import React from "react";
import { motion } from "framer-motion";
import aboutOverlay from "../assets/images/aboutOverlay.jpg"; // This is correct

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${aboutOverlay})` }} // Use inline style for imported image
    >
      {/* Optional overlay for better contrast */}
      <div className="absolute inset-0 bg-black/20 z-0"></div>

      <motion.div
        className="text-center p-4 z-10 text-red-950"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Emma Appeatuaa Aibu
        </h1>
        <p className="text-xl md:text-2xl font-medium mb-6">
          Frontend Web Developer
        </p>
        <p className="mb-8 max-w-xl mx-auto">
          I design and build responsive, modern websites using HTML, CSS,
          JavaScript, React, and Tailwind CSS. Let's build something great
          together.
        </p>
        <a
          href="#contact"
          className="px-6 py-3 bg-red-100 text-red-950 rounded-lg font-semibold hover:bg-red-800 transition"
        >
          Contact Me
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
