"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Sentiment Analysis App",
    description:
      "Flask web app with VADER (default) + optional DistilBERT backend (~90% accuracy). Includes caching, validation, and CI tests (Pytest + GitHub Actions).",
    image: "/images/projects/2.png",
    tag: ["All", "AI/ML", "Web"],
    gitUrl: "https://github.com/kpatel3269/sentiment-analysis-app",
    previewUrl: "",
  },
  {
    id: 2,
    title: "FlowDesk AI - Ticket Triage + Workflow Engine",
    description:
      "Next.js + FastAPI + PostgreSQL + Redis/Celery. AI ticket triage with OpenAI API and async automation for SLA monitoring.",
    image: "/images/projects/1.png",
    tag: ["All", "Full-Stack", "AI/ML"],
    gitUrl: "https://github.com/kpatel3269/flowdesk-ai",
    previewUrl: "",
  },
  {
    id: 3, // Update based on your actual list order
    title: "Hair Salon Booking System",
    description:
      "React/Vite + Django REST + PostgreSQL. Features JWT authentication, Stripe Checkout integration with webhooks, and Dockerized deployments with CI/CD pipelines.",
    image: "/images/projects/3.png",
    tag: ["All", "Full-Stack", "Web"],
    gitUrl: "https://github.com/orgs/team8-hairsalon-app/repositories", // Insert your GitHub link here
    previewUrl: "https://salon-frontend-pink.vercel.app/", // Insert your Vercel/Live link here
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => setTag(newTag);

  const filteredProjects = projectsData.filter((project) => project.tag.includes(tag));

  const cardVariants = {
    initial: { y: 24, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="py-8 sm:py-16">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">Projects</h2>

      <div className="text-white flex flex-row flex-wrap justify-center items-center gap-2 py-6">
        <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === "All"} />
        <ProjectTag onClick={handleTagChange} name="Web" isSelected={tag === "Web"} />
        <ProjectTag onClick={handleTagChange} name="Full-Stack" isSelected={tag === "Full-Stack"} />
        <ProjectTag onClick={handleTagChange} name="AI/ML" isSelected={tag === "AI/ML"} />
      </div>

      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={project.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.35, delay: index * 0.12 }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>

      <p className="text-center text-sm text-[#9CA2CA] mt-8">
        Add your repo/demo links and I’ll wire them up so the icons appear on hover.
      </p>
    </section>
  );
};

export default ProjectsSection;
