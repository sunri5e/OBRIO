import type { Metadata } from "next";
import StoreProvider from "@/components/StoreProvider";
import { Open_Sans } from "next/font/google";
import "@/styles/main.scss";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Awesome Survey",
  description: "Take home task developed by Oleksandr Hladyshchuk",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${openSans.variable}`}>
      <StoreProvider>
        <body>{children}</body>
      </StoreProvider>
    </html>
  );
}
