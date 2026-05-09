import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IslandMed AI | Calm Healthcare Guidance for Island Travel",
  description:
    "IslandMed AI helps foreigners in island destinations find hospitals, translate medical conversations, and understand where to go next.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
