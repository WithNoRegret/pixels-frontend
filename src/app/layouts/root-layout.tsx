import { PropsWithChildren } from "react";

import type { Metadata } from "next";

import { jersey, geistMono } from "@/shared/config";
import "@/shared/config/globals.css";

import { ReactQueryProvider } from "../providers";

export const metadata: Metadata = {
  title: "Pixel Battle",
  description: "A multi-player pixel game with a time limit",
};

export const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en">
      <body className={`${jersey.variable} ${geistMono.variable} antialiased`}>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
};
