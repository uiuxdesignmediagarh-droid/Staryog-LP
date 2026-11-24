import type { Metadata, Viewport } from "next";
import "@fontsource-variable/playfair-display";
import "@fontsource-variable/dm-sans";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sound Healing: Myths and Facts | Free Live Webinar | Star Yog Studio",
  description:
    "Join the free live webinar on 26 November 2026, 11 AM – 12 PM IST. Learn what sound healing really is with ISH certified trainer Keertie G Sujnaniii.",
  openGraph: {
    title: "Sound Healing: Myths and Facts – Free Live Webinar",
    description: "26 November 2026, 11 AM – 12 PM IST. Hosted by Star Yog Studio.",
    images: ["/images/hero-team.jpg"],
  },
};
export const viewport: Viewport = { themeColor: "#1c1238" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
