import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JobHub — Find Your Next Job",
  description:
    "Discover thousands of job opportunities across Africa and beyond. Apply quickly and professionally.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
