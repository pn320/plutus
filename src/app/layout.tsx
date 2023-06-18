import { ClerkProvider } from "@clerk/nextjs";
import { Inter, Roboto_Mono } from "next/font/google";
import { NavBar } from "./components/NavBar";
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
    <ClerkProvider
      appearance={{
        variables: {
          colorPrimary: "transparent",
        },
      }}
    >
      <html lang="en">
        <body className={`${inter.className}`}>
          <NavBar />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
