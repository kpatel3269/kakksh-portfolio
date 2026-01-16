"use client";

import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const GITHUB_URL = "https://github.com/kakshp";
const LINKEDIN_URL = "https://linkedin.com/in/Kakkshriinkeshpatel";
const EMAIL = "kakshpatel2232@gmail.com";

const EmailSection = () => {
  const [form, setForm] = useState({ email: "", subject: "", message: "" });
  const [status, setStatus] = useState({ state: "idle", message: "" });

  const onChange = (e) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus({ state: "loading", message: "" });

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || "Failed to send message");
      }

      setStatus({ state: "success", message: "Message sent. Thanks!" });
      setForm({ email: "", subject: "", message: "" });
    } catch (err) {
      setStatus({ state: "error", message: err?.message || "Something went wrong" });
    }
  };

  return (
    <section id="contact" className="grid md:grid-cols-2 my-12 py-24 gap-8 relative">
      <div className="bg-gradient-to-r from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-full right-[80%] transform -translate-y-1/2" />

      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Let&apos;s connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I&apos;m actively applying for internships and new-grad roles. If you think I&apos;d be a good fit, I&apos;d love to chat.
          You can also email me directly at{" "}
          <a className="text-white underline underline-offset-4" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
          .
        </p>

        <div className="socials flex flex-row gap-3 items-center">
          <Link href={GITHUB_URL} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Image src={LinkedinIcon} alt="LinkedIn Icon" />
          </Link>
        </div>
      </div>

      <div className="z-10">
        <form onSubmit={onSubmit} className="flex flex-col">
          <div className="mb-6">
            <label htmlFor="email" className="text-white block mb-2 text-sm font-medium">
              Your email
            </label>
            <input
              type="email"
              id="email"
              required
              value={form.email}
              onChange={onChange}
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2CA] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="you@example.com"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="subject" className="text-white block text-sm mb-2 font-medium">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              required
              value={form.subject}
              onChange={onChange}
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2CA] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Hello!"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="text-white block mb-2 font-medium">
              Message
            </label>
            <textarea
              id="message"
              required
              value={form.message}
              onChange={onChange}
              rows={5}
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2CA] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Let’s talk about..."
            />
          </div>

          <button
            type="submit"
            disabled={status.state === "loading"}
            className="bg-purple-500 hover:bg-purple-600 disabled:opacity-60 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            {status.state === "loading" ? "Sending..." : "Send Message"}
          </button>

          {status.state !== "idle" ? (
            <p className={`mt-3 text-sm ${status.state === "success" ? "text-green-400" : "text-red-400"}`}>
              {status.message}
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
