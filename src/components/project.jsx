import { motion } from 'framer-motion';
import Link from 'next/link';

const Project = () => {
  return (
    <section id="work" className="py-20 px-6 lg:px-8">
      <div className="max-w-[1440px] mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-violet-400">
            Featured Projects
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, staggerChildren: 0.2 }}
        >
          {[1, 2, 3].map((project) => (
            <motion.div
              key={project}
              className="group relative bg-white/5 rounded-xl overflow-hidden"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-violet-600/20 group-hover:opacity-75 transition-opacity" />
                <motion.div
                  className="w-full h-full bg-gradient-to-br from-blue-600/40 to-violet-600/40"
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              <div className="p-6">
                <motion.h3
                  className="text-2xl font-semibold text-white mb-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  Project {project}
                </motion.h3>
                <motion.p
                  className="text-gray-300 mb-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  Description of the amazing project and the technologies used
                  to build it.
                </motion.p>
                <motion.div
                  className="flex gap-2 mb-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  {["React", "Next.js", "TailwindCSS"].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-white/10 rounded-full text-blue-300"
                    >
                      {tech}
                    </span>
                  ))}
                </motion.div>
                <Link
                  href="#"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <span>View Project</span>
                  <motion.span
                    className="ml-2"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    →
                  </motion.span>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Project;
