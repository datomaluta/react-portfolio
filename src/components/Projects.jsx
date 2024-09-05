import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FaPlayCircle } from "react-icons/fa";

const Projects = () => {
  return (
    <div id="projects" className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>

      <div>
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="mb-16 flex flex-wrap lg:justify-center gap-10 border-b border-neutral-800 pb-12 last:border-b-0"
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full sm:w-1/2 lg:w-1/4"
            >
              <img
                src={project.image}
                alt={project.title}
                // width={150}
                // height={150}
                className="mb-6 rounded w-full h-[220px]  object-cover"
              />

              <div
                className={`flex lg:flex-col flex-row  gap-4 text-sm ${
                  project.github_front && "flex-col"
                }`}
              >
                {project?.live ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-purple-600 w-max px-3 py-1 rounded hover:bg-transparent border border-transparent hover:border-purple-600 hover:text-purple-600 transition-all"
                  >
                    <FaPlayCircle className="text-xl" />
                    View Website
                  </a>
                ) : (
                  ""
                )}

                {project?.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 border-purple-600 border w-max px-3 py-1 rounded text-purple-600  hover:bg-purple-600 hover:text-white transition-all"
                  >
                    <FaGithub className="text-xl" />
                    Source Code
                  </a>
                ) : (
                  ""
                )}

                {project?.github_front && project?.github_back ? (
                  <div className="flex flex-col gap-4">
                    <a
                      href={project.github_front}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 border-purple-600 border w-max px-3 py-1 rounded text-purple-600  hover:bg-purple-600 hover:text-white transition-all"
                    >
                      <FaGithub className="text-xl" />
                      Source Code (Frontend)
                    </a>

                    <a
                      href={project.github_back}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 border-purple-600 border w-max px-3 py-1 rounded text-purple-600  hover:bg-purple-600 hover:text-white transition-all"
                    >
                      <FaGithub className="text-xl" />
                      Source Code (Backend)
                    </a>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 mt-4 inline-block rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-500"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
