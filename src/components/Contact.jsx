// src/components/Contact.jsx
import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-red-50">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-6 text-red-950"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contact Me
        </motion.h2>

        <motion.p
          className="text-center text-lg text-red-950 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Have a project idea or want to collaborate? Let’s connect!
        </motion.p>

        <motion.form
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <input
            type="text"
            placeholder=" Name:"
            className="p-4 border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <input
            type="email"
            placeholder=" Email: "
            className="p-4 border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <textarea
            placeholder=" Message:"
            rows="6"
            className="p-4 border border-gray-800 rounded-lg md:col-span-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
          ></textarea>
          <button
            type="submit"
            className="md:col-span-2 bg-gray-300 text-red-950 py-3 px-6 rounded-lg font-semibold hover:bg-red-200 transition"
          >
            Send Message
          </button>
        </motion.form>

        <div className="mt-12 text-center space-y-4 text-red-950">
          <p>
            Email:{" "}
            <a
              href="mailto:emmaaibu40@gmail.com"
              className="text-blue-600 hover:underline"
            >
              emmaaibu40@gmail.com
            </a>
          </p>
          <div className="flex justify-center gap-6 text-xl">
            <a
              href="https://www.linkedin.com/in/emma-aibu-robinson-231716159/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-700"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/EmmaAibu"
              target="_blank"
              rel="noreferrer"
              className="hover:text-gray-900"
            >
              GitHub
            </a>
            <a
              href="https://emma-aibu.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-green-700"
            >
              Portfolio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
