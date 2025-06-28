import { motion } from "framer-motion";
import HeroInfo from "@/utility/hero.json";

// Animation Variants
const containerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

const About = () => {
  return (
    <section id="about" className="about-me">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-violet-400">
          About Me
          <motion.p className="text-sm text-gray-300 mt-2">
            Get to know me better
          </motion.p>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 justify-center items-center mt-14">
        <div className="col-span-1">
          <div className="flex justify-center">
            {/* Animated Image */}
            <motion.div
              whileHover={{
                rotateY: 10,
                rotateX: -5,
                scale: 1.05,
              }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-fit"
            >
              <motion.img
                src={HeroInfo.aboutMeImage}
                alt="Aman Gupta"
                className="rounded-xl drop-shadow-xl"
                style={{ width: 300, height: 300 }}
              />
            </motion.div>
          </div>
        </div>

        <div className="col-span-1">
          {/* Animated Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-14 text-lg text-center lg:text-left"
          >
            {HeroInfo.aboutMe.map((item, index) => (
              <motion.p
                key={index}
                className="mb-4 flex flex-wrap text-base"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
              >
                {item.split(" ").map((word, i) => (
                  <motion.span key={i} className="mr-1" variants={wordVariants}>
                    {word}
                  </motion.span>
                ))}
              </motion.p>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
