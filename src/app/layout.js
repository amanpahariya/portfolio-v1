import Script from 'next/script'
import { Outfit } from "next/font/google";
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
        <Script src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs" type="module" />
      </body>
    </html>
  );
}
