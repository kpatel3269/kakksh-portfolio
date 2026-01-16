import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kakksh Patel | Software Engineer",
  description:
    "Portfolio of Kakksh Riinkesh Patel — full-stack and backend engineer building production-ready web apps and AI-assisted workflows.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
