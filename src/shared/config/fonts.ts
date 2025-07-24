import { Geist_Mono, Jersey_10 } from "next/font/google";

export const jersey = Jersey_10({
  variable: "--font-jersey-sans",
  weight: "400",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
