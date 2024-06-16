import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { InventoryProvider } from "./context/context";

export const metadata: Metadata = {
  title: "InventHome",
  description: "Ezz your inventory management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
      <html lang="en">
        <InventoryProvider>
        <body className="relative h-full w-full bg-slate-950">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
          <div className="relative h-full min-h-screen w-full">
            {children}
            <footer className="bg-gray-900 text-white py-4 px-6 md:px-8 lg:px-10">
              <div className="container mx-auto text-center">© 2024 Inventory. All rights reserved.</div>
            </footer>
          </div>
        </body>
        </InventoryProvider>
      </html>

    
  );
}
