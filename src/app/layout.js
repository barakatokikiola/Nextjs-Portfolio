import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import FireFliesBg from "@/components/FireFliesBg";

const inter = Inter({ subsets: ["latin"],
  variable:"font-inter",
 });

export const metadata = {
  title: "Creative PortFolio",
  description: "Developed by",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
       className={clsx(inter.variable, 'bg-background text-foreground')}>
        {children}
        <FireFliesBg />
        </body>
    </html>
  );
}
