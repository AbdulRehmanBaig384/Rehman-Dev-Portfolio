import type { Metadata, Viewport } from "next";
import "./globals.css";
import ExperienceProvider from "./components/layout/ExperienceProvider";

const siteUrl = "https://rehmanportfolio384.netlify.app";
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Abdul Rehman Baig — Full-Stack Software Engineer",
  description: "Abdul Rehman Baig is a full-stack software engineer in Karachi, building thoughtful web and mobile experiences with React, Next.js, Node.js, and React Native.",
  keywords: ["Abdul Rehman Baig", "Full-Stack Software Engineer", "React", "Next.js", "React Native", "Karachi", "Portfolio"],
  authors: [{ name: "Abdul Rehman Baig" }],
  alternates: { canonical: "/" },
  openGraph: { title: "Abdul Rehman Baig — Beyond the Ordinary", description: "Engineering meets creative thinking. Explore my web, mobile, and full-stack projects.", url: siteUrl, siteName: "Abdul Rehman Baig", locale: "en_US", type: "website", images: [{ url: "/social-preview.png", width: 1200, height: 630, alt: "Abdul Rehman Baig — Full-Stack Software Engineer" }] },
  twitter: { card: "summary_large_image", title: "Abdul Rehman Baig — Full-Stack Software Engineer", images: ["/social-preview.png"] },
  robots: { index: true, follow: true },
};
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#080914" };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body><ExperienceProvider>{children}</ExperienceProvider><noscript><style>{".reveal-3d,.hero-copy,.hero-visual{opacity:1!important;transform:none!important}"}</style></noscript></body></html>;
}
