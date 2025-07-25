// src/components/About.jsx
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-16 bg-red-50">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-6 text-red-950"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <motion.p
          className="text-red-950 text-lg leading-7 text-center mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          I am a passionate and detail-oriented Frontend Web Developer with
          hands-on experience building modern, responsive websites and
          applications. I enjoy transforming ideas into reality using clean code
          and creative design. My background includes working on projects like
          e-commerce apps, hotel websites, and community WiFi portals. I am
          dedicated to continuous learning, teamwork, and delivering
          user-friendly web experiences.
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-4 text-center font-medium text-gray-800"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <span className="bg-green-100 rounded-full px-4 py-2">
            Communication
          </span>
          <span className="bg-blue-100 rounded-full px-4 py-2">
            Collaboration
          </span>
          <span className="bg-blue-50 rounded-full px-4 py-2">
            Problem Solving
          </span>
          <span className="bg-amber-100 rounded-full px-4 py-2">
            Customer Support
          </span>
          <span className="bg-purple-100 rounded-full px-4 py-2">
            Adaptability
          </span>
          <span className="bg-pink-100 rounded-full px-4 py-2">Team Work</span>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
