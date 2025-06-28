import { motion } from "framer-motion";
import Link from "next/link";
import HeroInfo from "@/utlity/hero.json";
import SectionHOC from "./common/SectionHOC";

const Contact = () => {
  return (
    <SectionHOC
      id="contact"
      className="py-20 px-6 lg:px-8 relative overflow-hidden"
      title={`Let's Connect`}
      subTitle={`Feel free to reach out through email or LinkedIn.`}
    >
      <div className="max-w-[1440px] mx-auto relative z-10">
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="space-y-6 text-center">
            <motion.div
              className="p-6 bg-white/5 rounded-xl backdrop-blur-sm"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center justify-center space-x-4">
                <div className="p-3 bg-blue-500/20 rounded-lg">
                  <span className="text-2xl">📧</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Email</h3>
                  <a href={`mailto:${HeroInfo.email}`} className="text-blue-400 hover:text-blue-300 transition-colors">
                    {HeroInfo.email}
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="p-6 bg-white/5 rounded-xl backdrop-blur-sm"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center justify-center space-x-4">
                <div className="p-3 bg-blue-500/20 rounded-lg">
                  <span className="text-2xl">💼</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">LinkedIn</h3>
                  <Link
                    href="https://www.linkedin.com/in/amanguptag"
                    className="text-blue-400 hover:text-blue-300 transition-colors"

                    target="_blank"
                  >
                    Connect on LinkedIn
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </SectionHOC>
  );
};

export default Contact;
