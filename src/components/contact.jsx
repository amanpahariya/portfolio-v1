import { motion } from "framer-motion";
import Link from "next/link";
import HeroInfo from "@/utlity/hero.json";
import SectionHOC from "./common/SectionHOC";
import Input from "./common/Input";
import TextArea from "./common/TextArea";

const Contact = () => {
  return (
    <SectionHOC
      id="contact"
      className="py-20 px-6 lg:px-8 relative overflow-hidden"
      title={`Let's Work Together`}
      subTitle={`Have a project in mind? Let's create something amazing together.`}
    >
      <div className="max-w-[1440px] mx-auto relative z-10">
        <motion.div
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Contact Info */}
          <div className="space-y-6 text-left">
            <motion.div
              className="p-6 bg-white/5 rounded-xl backdrop-blur-sm"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-blue-500/20 rounded-lg">
                  <span className="text-2xl">📧</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Email</h3>
                  <p className="text-blue-400">{HeroInfo.email}</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="p-6 bg-white/5 rounded-xl backdrop-blur-sm"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-blue-500/20 rounded-lg">
                  <span className="text-2xl">📱</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Social</h3>
                  <div className="flex space-x-4 mt-2">
                    {["Twitter", "GitHub", "LinkedIn"].map((platform) => (
                      <Link
                        key={platform}
                        href="#"
                        className="text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        {platform}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.form
            className="space-y-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="space-y-4">
              <Input
                type="text"
                placeholder="Your name"
              />

              <Input
                type="email"
                placeholder="Your email"
              />

              <TextArea
                placeholder="Your message"
              />
              <motion.button
                className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold rounded-lg transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </div>
          </motion.form>
        </motion.div>
      </div>
    </SectionHOC>
  );
};

export default Contact;
