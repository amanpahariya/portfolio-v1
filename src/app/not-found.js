'use client';
import { motion } from "framer-motion";
import Link from "next/link";
import { HomeIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-white flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />
      
      <div className="text-center px-6 relative z-10">
        {/* Simple Modern Illustration */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            className="relative w-48 h-48 md:w-56 md:h-56"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Main Circle */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/20 to-violet-500/20 backdrop-blur-sm border border-white/10"
              animate={{
                rotate: [0, 360]
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Inner Design */}
            <div className="absolute inset-8 rounded-full bg-gradient-to-br from-blue-500/30 to-violet-600/30 backdrop-blur-md">
              <div className="absolute inset-4 rounded-full bg-white/5 backdrop-blur-sm flex items-center justify-center">
                
                {/* 404 Icon */}
                <motion.div
                  className="text-6xl font-bold text-white/80"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.8, 1, 0.8]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  404
                </motion.div>
              </div>
            </div>
            
            {/* Floating Dots */}
            <motion.div
              className="absolute top-4 right-8 w-3 h-3 bg-blue-400 rounded-full"
              animate={{
                y: [-10, 10, -10],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            
            <motion.div
              className="absolute bottom-8 left-4 w-2 h-2 bg-violet-400 rounded-full"
              animate={{
                y: [10, -10, 10],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
            
            <motion.div
              className="absolute top-12 left-8 w-2 h-2 bg-cyan-400 rounded-full"
              animate={{
                x: [-5, 5, -5],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            />
            
            {/* Orbiting Ring */}
            <motion.div
              className="absolute inset-0 rounded-full border border-dashed border-blue-400/40"
              animate={{ rotate: [0, -360] }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* 404 Number */}
          <motion.h1 
            className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-violet-400 bg-clip-text text-transparent mb-4"
            animate={{ 
              textShadow: [
                "0 0 20px rgba(59, 130, 246, 0.5)",
                "0 0 40px rgba(139, 92, 246, 0.5)",
                "0 0 20px rgba(59, 130, 246, 0.5)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            404
          </motion.h1>
          
          {/* Error Message */}
          <motion.h2 
            className="text-2xl md:text-3xl font-semibold text-white mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Page Not Found
          </motion.h2>
          
          <motion.p 
            className="text-gray-400 text-lg mb-8 max-w-md mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </motion.p>
          
          {/* Action Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <Link
              href="/"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-violet-600 rounded-xl text-white font-semibold hover:scale-105 transition-transform relative overflow-hidden"
            >
              <HomeIcon className="w-5 h-5" />
              <span>Go Home</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-400 to-violet-400 opacity-0 group-hover:opacity-100 transition-opacity"
                whileHover={{
                  background: [
                    "linear-gradient(45deg, #3b82f6, #8b5cf6)",
                    "linear-gradient(45deg, #8b5cf6, #3b82f6)"
                  ]
                }}
                transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
              />
            </Link>
            
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 text-white font-semibold hover:bg-white/10 transition-colors"
            >
              <ArrowLeftIcon className="w-5 h-5" />
              <span>Go Back</span>
            </button>
          </motion.div>
        </motion.div>
        
        {/* Floating Animation Elements */}
        <motion.div
          className="absolute -top-10 -left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl"
          animate={{ 
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <motion.div
          className="absolute -bottom-10 -right-10 w-16 h-16 bg-violet-500/20 rounded-full blur-xl"
          animate={{ 
            y: [20, -20, 20],
            x: [10, -10, 10],
            rotate: [360, 180, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
}