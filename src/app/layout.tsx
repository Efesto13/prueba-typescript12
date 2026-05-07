import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "APP Thompson",
  description: "Register, login, dasboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
          rel="stylesheet"
        />
      </head>
      <body>

        {children}
      </body>
    </html>
  );
}
