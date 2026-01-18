"use client";
import React, { useTransition, useState } from "react";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="space-y-4">
        <div>
          <p className="text-sm text-[#9CA2CA] mb-2">Languages</p>
          <p className="text-[#ADB7BE]">Python • Java • JavaScript • SQL • C • C++ • C#</p>
        </div>
        <div>
          <p className="text-sm text-[#9CA2CA] mb-2">Frameworks</p>
          <p className="text-[#ADB7BE]">React • Next.js • .NET • Node.js • Express • Django • FastAPI • Flask • REST APIs</p>
        </div>
        <div>
          <p className="text-sm text-[#9CA2CA] mb-2">Databases / Infra</p>
          <p className="text-[#ADB7BE]">PostgreSQL • MySQL • MongoDB • Redis • Docker • AWS • Git/GitHub • CI/CD (GitHub Actions)</p>
        </div>
        <div>
          <p className="text-sm text-[#9CA2CA] mb-2">ML / LLMs</p>
          <p className="text-[#ADB7BE]">PyTorch • TensorFlow • Hugging Face Transformers • LangChain • OpenAI API • DistilBERT</p>
        </div>
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-4 text-[#ADB7BE] space-y-2">
        <li>
          <span className="text-white font-medium">UNC Charlotte</span> — B.S. Computer Science (GPA 3.6), May 2026
        </li>
        <li className="text-sm text-[#9CA2CA]">
          Relevant coursework: Data Structures, Intro to AI, Software System Development, Operating Systems, Software Engineering, Affective Computing, Web Development, Computer Architecture
        </li>
      </ul>
    ),
  },
  {
    title: "Leadership",
    id: "leadership",
    content: (
      <ul className="list-disc pl-4 text-[#ADB7BE] space-y-2">
        <li>
          <span className="text-white font-medium">Badminton Club (UNC Charlotte)</span> — maintained records, managed correspondence, and helped schedule 20+ events.
        </li>
        <li>
          <span className="text-white font-medium">Thanksgiving &amp; Christmas Donation Drive</span> — led 20 volunteers to collect clothes, toys, and books for children.
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => setTab(id));
  };

  return (
    <section id="about" className="text-white">
      <div className="py-8 px-4 sm:py-16 xl:px-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-4">About</h2>

          <p className="text-base md:text-lg text-[#ADB7BE] leading-relaxed">
            I’m a Computer Science student focused on building reliable software end-to-end clean UIs, scalable APIs,
            and data-backed systems. I enjoy shipping features that are measurable, maintainable, and ready for real users.
          </p>

          <div className="mt-8 flex flex-row flex-wrap gap-2">
            <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>
              Skills
            </TabButton>
            <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>
              Education
            </TabButton>
            <TabButton selectTab={() => handleTabChange("leadership")} active={tab === "leadership"}>
              Leadership
            </TabButton>
          </div>

          <div className="mt-8 bg-[#181818] border border-[#33353F] rounded-2xl p-6">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
