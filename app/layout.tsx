import "./globals.css";
import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const nunitoSans = Nunito_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AtlasInfo",
  description: "Informações sobre países",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunitoSans.className}>
        <main className="bg-gray-100 min-h-screen flex flex-col items-center">
          <nav className="w-full bg-white h-16 flex items-center justify-center">
            <section className="container">
              <Link className="flex items-center gap-3" href="/">
                <Image src="/Logo.svg" alt="logo" width={48} height={48} />
                <h1 className="text-black font-extrabold text-4xl tracking-tight">
                  Atlas<span className="text-blue-400"> Info</span>
                </h1>
              </Link>
            </section>
          </nav>
          {children}
        </main>
      </body>
    </html>
  );
}
