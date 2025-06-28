import { Outfit } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import './app.scss'
import { ThemeProvider } from "@/components/theme-provider"

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: '--font-outfit',
});

export const metadata = {
  title: "Aman Gupta",
  description: "Full Stack Developer | AWS Cloud Architect | Problem Solver",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfit.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Link
          href="https://github.com/amanpahariya/portfolio-v1"
          target="_blank"
          className="fixed bottom-4 right-4 bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors z-10 text-xs flex items-center gap-2"
        >
          Source Code
        </Link>
      </body>
    </html>
  );
}
