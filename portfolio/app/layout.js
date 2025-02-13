 import { Geist, Geist_Mono } from "next/font/google";
 import Theme from "@/components/Theme";
 import DarkLight from "@/components/DarkLight";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Bonsso Tiogo Raoul",
  description: "This is my portfolio 2025",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Theme>
          <DarkLight />
                 {children}
        </Theme>
 
      </body>
    </html>
  );
}
