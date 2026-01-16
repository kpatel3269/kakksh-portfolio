"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16" id="home">
      <div className="grid grid-cols-1">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="place-self-center text-center sm:text-left"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-tight font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hi, I&apos;m{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Kakksh Patel",
                1200,
                "a Software Engineer",
                1200,
                "a Full-Stack Developer",
                1200,
                "a Backend + API Builder",
                1200,
                "an AI / LLM Builder",
                1200,
              ]}
              wrapper="span"
              speed={55}
              repeat={Infinity}
            />
          </h1>

          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl max-w-3xl">
            CS @ UNC Charlotte (May 2026). I build production ready web apps, REST APIs, and AI-assisted workflows
            from database schema to deployment.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center sm:justify-start">
            <Link
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 inline-block py-3 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:opacity-90 text-white font-medium"
            >
              View Resume (PDF)
            </Link>

            <Link
              href="#projects"
              className="px-6 inline-block py-3 rounded-full border border-[#33353F] hover:border-white text-white font-medium"
            >
              See Projects
            </Link>

            <Link
              href="#contact"
              className="px-6 inline-block py-3 rounded-full bg-[#181818] hover:bg-[#222] text-white font-medium"
            >
              Contact
            </Link>
          </div>

          <div className="mt-6 text-sm text-[#9CA2CA]">
            React • Next.js • FastAPI • .NET • PostgreSQL • Docker • OpenAI API
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
