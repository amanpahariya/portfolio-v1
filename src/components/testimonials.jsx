import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import HeroInfo from "@/utility/hero.json";

const Testimonials = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-5, 5]);

  return (
    <section id="testimonials" className="py-20 px-6 lg:px-8 relative overflow-hidden">
      <motion.div
        ref={containerRef}
        className="max-w-6xl mx-auto"
      >
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-violet-400">
            Testimonials
            <motion.p className="text-sm text-gray-300 mt-2">
              What clients say about my work
            </motion.p>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {HeroInfo.testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              style={{ x: index % 2 === 0 ? x : -x, rotate }}
              className="bg-white/5 rounded-xl p-6 backdrop-blur-sm"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
              <p className="text-gray-300 mb-4 italic">&quot;{testimonial.content}&quot;</p>
              <div>
                <h4 className="text-white font-semibold">{testimonial.name}</h4>
                <p className="text-blue-400 text-sm">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonials;