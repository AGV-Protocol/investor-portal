import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AGV Protocol - Investor Portal",
  description: "Access comprehensive documentation, financial models, and technical resources for AGV Protocol's innovative blockchain infrastructure.",
  keywords: ["AGV Protocol", "blockchain", "IoT", "real-world assets", "investment", "sustainability"],
  authors: [{ name: "AGV Protocol" }],
  openGraph: {
    title: "AGV Protocol - Investor Portal",
    description: "Access comprehensive documentation, financial models, and technical resources for AGV Protocol's innovative blockchain infrastructure.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
