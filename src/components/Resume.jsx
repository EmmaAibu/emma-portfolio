import React from "react";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <section id="resume" className="py-16 bg-gray-200">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6 text-red-950"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Resume
        </motion.h2>

        <motion.p
          className="text-lg text-red-950 mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Click below to download my latest CV in PDF format.
        </motion.p>

        <motion.a
          href="/Emma_Aibu_CV.pdf" // File should be in public/Emma_Aibu_CV.pdf
          download
          className="inline-block px-6 py-3 bg-red-300 text-red-950 font-semibold rounded-lg shadow hover:bg-gray-100 transition"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Download CV
        </motion.a>
      </div>
    </section>
  );
};

export default Resume;
