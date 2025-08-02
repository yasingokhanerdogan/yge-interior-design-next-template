import "@/app/globals.css";
import type { Metadata } from "next";

import { Teko } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";

import { envConfig } from "@/lib/env";
import { cn } from "@/lib/utils";

import Providers from "@/providers";

const teko = Teko({
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-teko",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | YGE Interior Design Template",
    default: "YGE Interior Design Template",
  },
  description: "YGE Interior Design Template",
  alternates: {
    canonical: envConfig.SITE_URL,
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(teko.className)}>
        <Providers>{children}</Providers>
      </body>
      {envConfig.GOOGLE_ANALYTICS_ID && <GoogleAnalytics gaId={envConfig.GOOGLE_ANALYTICS_ID} />}
    </html>
  );
}
