import "@/app/globals.css";

import type { Metadata } from "next";
import { Teko } from "next/font/google";

const teko = Teko({
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-teko",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "YGE Interior Design",
  description: "YGE Interior Design",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${teko.variable} antialiased`}>{children}</body>
    </html>
  );
}
