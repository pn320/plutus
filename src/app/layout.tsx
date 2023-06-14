import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin-ext"] });
const roboto = Roboto_Mono({ subsets: ["latin-ext"] });

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
      <body className={`${inter.className}`}>
        {/* <NavBar /> */}
        {children}
      </body>
    </html>
  );
}
