import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

const Skills = () => {
  return (
      <section id="skills" className="py-20 px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto relative z-10">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-violet-400">
              Skills & Technologies
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { name: 'React', icon: '⚛️', level: 90 },
                { name: 'Next.js', icon: '▲', level: 85 },
                { name: 'Node.js', icon: '🟢', level: 80 },
                { name: 'TypeScript', icon: '🔷', level: 85 },
                { name: 'TailwindCSS', icon: '🎨', level: 90 },
                { name: 'GraphQL', icon: '◈', level: 75 },
                { name: 'AWS', icon: '☁️', level: 70 },
                { name: 'Docker', icon: '🐳', level: 80 }
              ].map((skill) => (
                <motion.div 
                  key={skill.name}
                  className="relative p-6 bg-white/5 rounded-xl backdrop-blur-sm"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-3xl mb-3">{skill.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{skill.name}</h3>
                  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-blue-400 to-violet-400"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                    />
                  </div>
                  <div className="mt-2 text-sm text-blue-300">{skill.level}%</div>
                  <motion.div
                    className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-400/10 to-violet-400/10 opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
  );
};

export default Skills;
