"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { Bars3Icon, MoonIcon, SunIcon } from "@heroicons/react/24/outline";

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [showName, setShowName] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);
      // Show name when scrolling down, hide when scrolling up
      if (currentScrollY > lastScrollY) {
        setShowName(true); // Scrolling down
      } else {
        setShowName(false); // Scrolling up
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#project" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gray-900/80 backdrop-blur-md py-4"
          : "bg-transparent py-6"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="max-w-[1440px] mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <motion.div
              animate={{ opacity: showName ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                href="/"
                className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-400"
              >
                Aman Gupta
              </Link>
              <span className="hidden md:block text-sm text-gray-400 ml-4">
                Full Stack Developer
              </span>
            </motion.div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full bg-gradient-to-r from-blue-400/20 to-violet-400/20 hover:from-blue-400/30 hover:to-violet-400/30 transition-all duration-300"
              aria-label="Toggle theme"
            >
              {mounted && (
                <div className="w-5 h-5 text-gray-200">
                  {theme === "dark" ? (
                    <MoonIcon />
                  ) : (
                    <SunIcon className="w-5 h-5 text-yellow-400" />
                  )}
                </div>
              )}
            </button>
          </div>

          <button className="md:hidden p-2">
            <Bars3Icon className="w-6 h-6 text-white" />
          </button>
        </div>
      </nav>
    </motion.header>
  );
}
