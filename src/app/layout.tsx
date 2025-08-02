import "@/app/globals.css";
import type { Metadata } from "next";

import { Teko } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";

import { envConfig } from "@/lib/env";
import { cn } from "@/lib/utils";

import Providers from "@/providers";

export const teko = Teko({
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-teko",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "YGE Interior Design Template",
  description: "YGE Interior Design Template",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(teko.className, "antialiased")}>
        <Providers>{children}</Providers>
      </body>
      {envConfig.GOOGLE_ANALYTICS_ID && <GoogleAnalytics gaId={envConfig.GOOGLE_ANALYTICS_ID} />}
    </html>
  );
}
