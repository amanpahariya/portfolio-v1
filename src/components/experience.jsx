import React from "react";
import DashedIcon from "@/assets/icons/dashed.svg";

const Experience = () => {
  return (
    <div className="p-12 pt-0 pb-0 lg:p-24 lg:pt-0 md:p-16 ">
      <div>
        <h2 className="text-4xl font-bold mt-10 text-center sm:text-5xl md:text-5xl lg:text-5xl">
          Work Experience
        </h2>
        <div className="w-2/5 flex mx-auto mt-5">
          <DashedIcon className="dashed-icon w-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 justify-center items-center">
          <div className="col-span-1 flex justify-center">
              <dotlottie-player
                src={"/Animation - 1725266000809.json"}
                background="transparent"
                speed="1"
                style={{ width: "330px", height: "330px" }}
                direction="1"
                playMode="normal"
                loop
                autoplay
              >
              </dotlottie-player>
          </div>

          <div className="col-span-1">
            <div className="mt-14">
              <h3 className="font-bold text-2xl mb-5 flex items-center gap-2">
                Full Stack Cloud Engineer
              </h3>
              <div>
                <ul className="text-base leading-7">
                  <li className="mb-2 font-bold">Invock Digital</li>
                  <li className="mb-2">Oct 2021 - Present</li>
                  <li className="mb-2">Mumbai, India</li>
                </ul>
              </div>
              <p className="text-lg leading-6 lg:text-base md:text-base sm:text-sm">
                As a Software Engineer at Invock Digital, I lead the
                development and optimization of complex web applications,
                ensuring high performance and scalability. My focus is on
                delivering efficient, user-friendly solutions using modern
                technologies like React.js, Node.js, and AWS. With a strong
                background in full-stack development, I have significantly
                contributed to several key projects, enhancing both the frontend
                and backend performance of our products.
              </p>
            </div>
            <div className="mt-5">
              <h4 className="font-bold text-lg mb-5">Achievements</h4>
              <ul className="text-sm lg:text-base md:text-base sm:text-sm">
                <li className="leading-6">
                  <span className="font-bold">Performance Improvement:</span>{" "}
                  Reduced API response time by 30% and improved frontend load
                  time by 25%, leading to a better user experience and higher
                  user retention rates.
                </li>
                <li className="leading-6">
                  <span className="font-bold">Scalability:</span> Designed and
                  implemented scalable backend solutions that handled a 50%
                  increase in traffic without compromising performance.
                </li>

                <li className="leading-6">
                  <span className="font-bold">Automation:</span> Automated the
                  CI/CD pipeline, reducing deployment times by 40% and
                  minimizing manual errors.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
