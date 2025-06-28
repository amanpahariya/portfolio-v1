import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import SectionHOC from "./common/SectionHOC";
import hero from "@/utlity/hero.json";

const Project = () => {
  const [activeTab, setActiveTab] = useState("all");

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Development" },
    { id: "fullstack", label: "Full Stack" },
  ];

  const filteredProjects =
    activeTab === "all"
      ? hero.projects
      : hero.projects.filter((project) => project.category === activeTab);

  return (
    <SectionHOC id="project" className="projects" title={"Featured Projects"} subTitle={"Transforming ideas into exceptional digital experiences"}>
        {/* Category Tabs */}
        <div className="flex justify-center mb-12 overflow-x-auto pb-2">
          <div className="flex space-x-2 p-1 bg-secondary/20 rounded-full">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeTab === category.id
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              className="hover-card bg-card rounded-xl overflow-hidden border border-border/40 h-full flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="p-6 border-b border-border/40 flex items-center gap-4">
                <span className="text-3xl" role="img" aria-label="Project icon">
                  {project.icon}
                </span>
                <h3 className="text-xl font-bold text-foreground">
                  {project.title}
                </h3>
              </div>

              <div className="p-6 flex-grow flex flex-col">
                <p className="text-card-foreground/80 mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-secondary/30 rounded-full text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Key Highlights */}
                <div className="space-y-2 mb-6">
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                    Highlights
                  </h4>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <span className="text-primary mt-1">•</span>
                        <span className="text-card-foreground/80">
                          {highlight}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Project Link */}
                <div className="flex flex-wrap gap-3 mt-auto">
                  {project.link && project.link !== "#" ? (
                    <Link
                      href={project.link}
                      className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors group"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project
                       <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  ) : (
                    <span className="text-sm text-muted-foreground italic">
                      Private project
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
    </SectionHOC>
  );
};

export default Project;
