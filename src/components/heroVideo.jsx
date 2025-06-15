'use client';
import React from "react";
import { motion } from "framer-motion";
import useScreenSize from "@/hooks/screenSize";

const HeroVideo = () => {
  const { width } = useScreenSize();

  return (
    <motion.div className="relative">
      <motion.div className="intro-herocarousel-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <motion.div className="intro-herocarousel-content">
          <motion.div className="intro-herocarousel-video">
            <motion.video
              autoPlay
              muted
              loop
              playsInline
              src={width > 768 ? "/code-1_desktop-7ab52aea3358.mp4": "/code-1_mobile-35a9eeb79f52.mp4"}
            />
          </motion.div>
          <motion.div className="intro-herocarousel-background" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default HeroVideo;
