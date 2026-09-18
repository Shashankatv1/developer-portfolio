import { ArrowUpRight} from "lucide-react";
import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";
import { motion } from "framer-motion";

function ProjectCard({ project, index }) {
  return (
    <motion.article
      className="project-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
      }}
    >
      <div className="project-card-top">
        <div className="project-number">
          {String(index + 1).padStart(2, "0")}
        </div>

        <div className="project-links">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.title} GitHub repository`}
            >
              <Github size={17} />
            </a>
          )}

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.title} live project`}
            >
              <ArrowUpRight size={18} />
            </a>
          )}
        </div>
      </div>

      <div className="project-card-content">
        <p className="project-category">
          {project.category}
        </p>

        <h3>{project.title}</h3>

        <p className="project-description">
          {project.description}
        </p>

        <div className="project-tech">
          {project.technologies.map((technology) => (
            <span key={technology}>
              {technology}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export default ProjectCard;