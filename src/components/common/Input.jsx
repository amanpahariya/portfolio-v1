import React from "react";
import { motion } from "framer-motion";

const Input = (props) => {
  return (
    <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
      <input
        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400 backdrop-blur-sm transition-all"
        {...props}
      />
    </motion.div>
  );
}

export default Input;
