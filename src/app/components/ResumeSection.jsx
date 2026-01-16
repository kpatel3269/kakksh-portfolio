"use client";
import React from "react";

const ResumeSection = () => {
  return (
    <section id="resume" className="text-white py-8 px-4 sm:py-16 xl:px-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-4">Resume</h2>
        <p className="text-[#ADB7BE] mb-6">Download or view my resume as a PDF.</p>

        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:opacity-90 text-white font-medium inline-block w-fit"
          >
            Open Resume (PDF)
          </a>
          <a
            href="/resume.pdf"
            download
            className="px-6 py-3 rounded-full border border-[#33353F] hover:border-white text-white font-medium inline-block w-fit"
          >
            Download
          </a>
        </div>

        <div className="mt-8 bg-[#181818] border border-[#33353F] rounded-2xl overflow-hidden">
          <object data="/resume.pdf" type="application/pdf" className="w-full h-[520px]">
            <div className="p-6 text-[#ADB7BE]">
              Your browser can&apos;t display PDFs inline.{" "}
              <a className="text-white underline underline-offset-4" href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                Click here to open it.
              </a>
            </div>
          </object>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
