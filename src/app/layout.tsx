import { Inter, JetBrains_Mono } from "next/font/google";
import { NavBar } from "./components/ui/NavBar";
import "./globals.css";

const inter = Inter({ subsets: ["latin-ext"], variable: "--font-inter" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata = {
  title: "Plutus",
  description: "An complete interview preparation platform like no other",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${mono.className} font-inter`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
