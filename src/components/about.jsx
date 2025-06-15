import React from "react";
import DashedIcon from "@/assets/icons/dashed.svg";
import { motion } from "framer-motion";
import {
  PencilSquareIcon
} from "@heroicons/react/24/outline";

const About = () => {
  return (
    <div className="p-12 pt-0 pb-0 lg:p-24 lg:pt-0 md:p-16">
      <h2 className="text-4xl font-bold mt-2 text-center sm:text-5xl md:text-5xl lg:text-5xl">Biography</h2>
      <div className="w-1/5 flex mx-auto mt-5">
        <DashedIcon className="dashed-icon w-full" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 justify-center items-center">
        <div className="col-span-1">
          <div className="mt-14">
            <h3 className="font-bold text-base mb-4 flex items-center gap-2">
              <PencilSquareIcon className="w-5 h-5 inline" />
              Personal Info
            </h3>
            <ul className="text-sm">
              <li className="mb-2">
                <span className="font-bold">Name:</span> Aman Gupta
              </li>
              <li className="mb-2">
                <span className="font-bold">Email:</span>{" "}
                <a
                  className="hover:underline"
                  href="mailto:amangupta201407@gmail.com"
                >
                  amangupta201407@gmail.com
                </a>
              </li>
              <li className="mb-2">
                <span className="font-bold">Location:</span> Bhopal, India
              </li>
              <li>
                <span className="font-bold">Experience:</span> 2+ Years
              </li>
            </ul>
          </div>
        </div>

        <div className="col-span-1">
          <div className="mt-14">
            <p className="text-sm leading-6 lg:text-base md:text-base sm:text-sm">
              <span className="font-bold">Hello!</span> I&apos;m Aman Gupta, a passionate Full
              Stack Developer with over 2 years of experience in building web applications.
              I specialize in creating seamless user experiences and robust backend systems
              using modern technologies.
            </p>
            <br />
            <p className="text-sm leading-6 lg:text-base md:text-base sm:text-sm">
              My expertise lies in React.js, Next.js, Node.js, and cloud technologies like AWS.
              I have a strong foundation in both frontend and backend development, with a keen
              eye for detail and a commitment to writing clean, maintainable code.
            </p>
            <br />
            <p className="text-sm leading-6 lg:text-base md:text-base sm:text-sm">
              I&apos;m always eager to learn new technologies and take on challenging projects.
              Let&apos;s connect and create something extraordinary together!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
