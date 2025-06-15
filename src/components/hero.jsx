import React, { useRef } from "react";
import { motion, useTransform, useScroll, useSpring } from "framer-motion";
import Link from "next/link";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1 },
};

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref })
  const rawScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.7]);

  const scale = useSpring(rawScale, {
    stiffness: 40, // lower = slower and smoother
    damping: 15,   // lower = more springy (reduce for more delay)
    mass: 1
  });

  return (
    <React.Fragment>
      <motion.div
        className="intro-hero-content"
        initial="initial"
        animate="animate"
        variants={fadeInUp}
        style={{
          scale
        }}
      >
        {/* Left Column - Text Content */}
        <div className="w-full md:w-1/2 text-left mb-12 md:mb-0">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
          >
            <span className="block text-white">Hi, I&apos;m</span>
            <span className="block mt-2 bg-clip-text">
              Aman Gupta
            </span>
          </motion.h1>

          <motion.h2
            className="mt-6 text-2xl md:text-3xl font-semibold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Full Stack Developer
          </motion.h2>

          <motion.p
            className="mt-6 text-lg max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            I create exceptional digital experiences that combine stunning
            design with powerful functionality. Specializing in modern web
            applications and interactive experiences.
          </motion.p>

          <motion.div
            className="mt-8 flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Link
              href="#work"
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-violet-600 overflow-hidden rounded-lg transition-all hover:scale-105"
            >
              <span className="relative z-10 text-white font-semibold">
                View My Work
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-700 to-violet-700"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </Link>
            <Link
              href="#contact"
              className="group relative px-8 py-4 overflow-hidden rounded-lg border-2 border-blue-400/30 hover:border-blue-400 transition-colors"
            >
              <span className="relative z-10 text-white font-semibold">
                Let&apos;s Talk
              </span>
            </Link>
          </motion.div>
        </div>

        {/* Right Column - 3D Element or Image */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <div className="relative lg:w-[400px] lg:h-[400px] w-[300px] h-[300px] w-[300px] rounded-full bg-gradient-to-br from-blue-500/20 to-violet-500/20 backdrop-blur-3xl">
            <motion.img
              className="absolute inset-0 rounded-full w-full h-full object-cover"
              animate={{
                background: [
                  "radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.3) 0%, rgba(139, 92, 246, 0.1) 100%)",
                  "radial-gradient(circle at 70% 70%, rgba(139, 92, 246, 0.3) 0%, rgba(59, 130, 246, 0.1) 100%)",
                ],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              src="/me.jpeg"
              alt="Aman Gupta"
            />
            <motion.div
              className="absolute inset-2 rounded-full border border-white/10"
              animate={{ rotate: 360 }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </div>
        </motion.div>
      </motion.div>
    </React.Fragment>
  );
};

export default Hero;
