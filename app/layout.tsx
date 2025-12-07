import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css"
import Footer from "./components/Footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abdul Rehman Baig — Full-Stack Developer",
  description:
    "Portfolio of Abdul Rehman Baig — Full-Stack Developer (React | Node | MongoDB | PostgreSQL)",
  keywords: [
    "Abdul Rehman",
    "Full-Stack Developer",
    "React",
    "Node.js",
    "MongoDB",
    "PostgreSQL",
    "TypeScript",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative overflow-x-hidden bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#071428] to-[#050409]`}
      >

        {/* floating animated glows */}
        <div className="absolute inset-0 bg-glow -z-10"></div>

        {/* main content */}
        <main className="min-h-screen">
            <div className="side-glow left"></div>
  <div className="side-glow right"></div>
          {children}</main>

        <Footer/>
      </body>
    </html>
  );
}
