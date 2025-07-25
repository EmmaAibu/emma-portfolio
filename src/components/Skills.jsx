// src/components/Skills.jsx
import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML5", color: "bg-orange-100 text-orange-800" },
  { name: "CSS3", color: "bg-blue-100 text-blue-800" },
  { name: "JavaScript", color: "bg-yellow-100 text-yellow-800" },
  { name: "React", color: "bg-cyan-100 text-cyan-800" },
  { name: "Tailwind CSS", color: "bg-sky-100 text-sky-800" },
  { name: "Node.js", color: "bg-green-100 text-green-800" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-gray-200">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-6 text-red-950"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Skills
        </motion.h2>

        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {skills.map((skill, index) => (
            <span
              key={index}
              className={`px-6 py-3 rounded-full font-medium shadow ${skill.color}`}
            >
              {skill.name}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
