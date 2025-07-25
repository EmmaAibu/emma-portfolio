// src/components/Projects.jsx
import React from "react";
import { motion } from "framer-motion";
import rhemaGreen from "../assets/images/rhemaGreen.png"; // Your local image
import woodHouse from "../assets/images/woodHouse.png";
import rhemaKids from "../assets/images/rhemaKids.png";

const projects = [
  {
    title: "Rhema Green-Health E-commerce App",
    description:
      "An online store for natural health products with Firebase Auth and cart system.",
    link: "https://rhema-green-health.netlify.app/",
    github: "https://github.com/EmmaAibu/rhema-green-health",
    image: rhemaGreen, // 🔁 Use the imported image here
  },
  {
    title: "Wood House Hotel Website",
    description:
      "A modern, responsive hotel website design with smooth animations.",
    link: "https://wood-house-hotel.netlify.app/",
    github: "https://github.com/EmmaAibu/wood-house-hotel",
    image: woodHouse,
  },
  {
    title: "Rhema Kids Wear",
    description:
      "Children’s fashion e-commerce website prototype with playful design.",
    link: "https://rhema-kids-wear.netlify.app/",
    github: "https://github.com/EmmaAibu/rhema-kids-wear",
    image: rhemaKids,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-red-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-6 text-red-950"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>

        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col"
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded-md mb-4 object-cover w-full h-48"
              />
              <h3 className="text-xl font-semibold mb-2 text-red-950">
                {project.title}
              </h3>
              <p className="text-red-950 flex-grow">{project.description}</p>
              <div className="mt-4 flex gap-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-red-200 text-red-950 rounded-md hover:bg-gray-300 text-sm"
                >
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-gray-300 text-red-950 rounded-md hover:bg-red-200 text-sm"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
