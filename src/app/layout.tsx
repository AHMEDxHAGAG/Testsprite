import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const testspriteInter = localFont({
  src: [
    {
      path: "../../public/sites/www-testsprite-com-e07f0e77/hackathon-s3-9f25ec44/fonts/inter-400.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/sites/www-testsprite-com-e07f0e77/hackathon-s3-9f25ec44/fonts/inter-500.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/sites/www-testsprite-com-e07f0e77/hackathon-s3-9f25ec44/fonts/inter-600.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/sites/www-testsprite-com-e07f0e77/hackathon-s3-9f25ec44/fonts/inter-700.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-testsprite-inter",
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hackathon | TestSprite",
  description:
    "Join the TestSprite hackathon — build with TestSprite, ship open-source projects, and win prizes.",
  icons: {
    icon: "/sites/www-testsprite-com-e07f0e77/hackathon-s3-9f25ec44/seo/favicon.svg",
    apple:
      "/sites/www-testsprite-com-e07f0e77/hackathon-s3-9f25ec44/seo/apple-touch-icon.png",
  },
  openGraph: {
    title: "Hackathon | TestSprite",
    description:
      "Join the TestSprite hackathon — build with TestSprite, ship open-source projects, and win prizes.",
    images: [
      "/sites/www-testsprite-com-e07f0e77/hackathon-s3-9f25ec44/seo/hackathon-og.png",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${testspriteInter.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
