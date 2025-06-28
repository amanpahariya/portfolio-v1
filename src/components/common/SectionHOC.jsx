import { PropTypes } from 'prop-types';
import React from 'react'
import { motion } from 'framer-motion';

const SectionHOC = ({ id, className, title, subTitle, children }) => {
  return (
    <section id={id} className={className}>
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-violet-400">
          {title}
          <motion.p className="text-sm text-gray-300 mt-2">
            {subTitle}
          </motion.p>
        </h2>
      </motion.div>

      {children}
    </section>
  )
}

export default SectionHOC;

SectionHOC.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  children: PropTypes.node,
};