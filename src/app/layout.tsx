import type React from "react";
import { ThemeProvider } from "../components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
// import { Toaster } from "../components/toaster";
import "@/app/globals.css";

export const metadata = {
  title: "Premium Footwear Manufacturing | Made in India",
  description:
    "Leading footwear manufacturer in India offering high-quality manufacturing solutions for global brands with precision, quality, and timely delivery.",
  keywords:
    "footwear manufacturer, shoe factory india, leather footwear india, custom footwear manufacturing, footwear production",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main>{children}</main>
          <Footer />
          {/* <Toaster /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
