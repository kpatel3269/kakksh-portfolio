import React from "react";

const Footer = () => {
  return (
    <footer className="footer border border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-6 flex justify-between items-center">
        <span className="text-sm text-[#ADB7BE]">
          © {new Date().getFullYear()} Kakksh Patel. Built with Next.js.
        </span>
        <a className="text-sm text-[#ADB7BE] hover:text-white" href="#home">
          Back to top
        </a>
      </div>
    </footer>
  );
};

export default Footer;
