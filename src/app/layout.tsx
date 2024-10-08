import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import Main from "./components/ui/Main";

import "./global.scss";

const poppins = Poppins({ weight: ["300", "400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_URL as string),
  title: "Window Station",
  description:
    "San Francisco Windows & Doors Widow Installation & Replacement Contractors in the SF Bay Area",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Main>{children}</Main>
        <div id="dialog" />
      </body>
    </html>
  );
}
