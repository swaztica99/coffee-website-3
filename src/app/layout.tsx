// src/app/layout.tsx
import { Climate_Crisis, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// Setup Climate Crisis
const climateCrisis = Climate_Crisis({
  subsets: ["latin"],
  variable: '--font-climate', // Kita buat sebagai CSS Variable
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${climateCrisis.variable}`}>
        {children}
      </body>
    </html>
  );
}