// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-6 text-center text-sm">
      <p>
        © {new Date().getFullYear()} Emma Appeatuaa Aibu. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
