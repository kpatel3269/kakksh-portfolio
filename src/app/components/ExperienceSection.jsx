"use client";
import React from "react";

const experiences = [
  {
    company: "TrailTail Inc",
    title: "Software Engineer Intern",
    location: "Charlotte, NC",
    date: "May 2025 – Present",
    bullets: [
      "Designed and delivered full-stack features (geospatial trail search, trip planning, reviews) by owning REST API design, database schemas, and responsive UIs end-to-end in a production environment.",
      "Improved application performance by ~79% p95 latency reduction through SQL query optimization (EXPLAIN/ANALYZE), composite indexing, N+1 query elimination, and Redis caching, reducing response times from ~850ms to ~180ms during peak traffic.",
      "Enabled fast, reliable deployments by containerizing services with Docker, implementing CI/CD pipelines (GitHub Actions), and collaborating with product and design teams through code reviews and agile sprints.",
    ],
  },
  {
    company: "Paramount Business Solutions Inc",
    title: "Software Engineer Intern",
    location: "Chicago, IL",
    date: "May 2024 – Aug 2024",
    bullets: [
      "Optimized SQL database workloads by reviewing execution plans (EXPLAIN/ANALYZE), refactoring JOINs, and implementing targeted indexes, cutting p95 query time by 47% and reducing CPU/IO by 33% in reporting.",
      "Built Python utilities and regression tests to validate ETL feeds and data quality, catching defects early and preventing performance regressions prior to release.",
      "Developed stakeholder-facing insights via Tableau dashboards and ad-hoc SQL reports, driving 2.2× self-serve adoption, reducing ad-hoc requests by 56%, and saving ~32 analyst hours/month.",
      "Collaborated remotely with consultants and cross-functional teams to clarify requirements, document schemas and indexing guidelines, and deliver reliable, data-driven enhancements on schedule.",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="text-white py-8 px-4 sm:py-16 xl:px-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-8">Experience</h2>

        <div className="space-y-6">
          {experiences.map((exp) => (
            <div
              key={`${exp.company}-${exp.title}`}
              className="bg-[#181818] border border-[#33353F] rounded-2xl p-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
                <h3 className="text-xl font-semibold text-white">
                  {exp.company} - {exp.title}
                </h3>
                <p className="text-sm text-[#9CA2CA]">
                  {exp.location} • {exp.date}
                </p>
              </div>

              <ul className="mt-4 list-disc pl-5 text-[#ADB7BE] space-y-2">
                {exp.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
