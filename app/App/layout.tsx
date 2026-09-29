import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WORLD — Discover independent worlds",
  description:
    "A premium marketplace for independent fashion, vintage, reworked clothing, art and objects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Arial, Helvetica, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
