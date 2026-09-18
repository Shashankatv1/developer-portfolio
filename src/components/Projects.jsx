import {
  ArrowRight,
  Bot,
  Database,
  GitBranch,
  Layers3,
  MessageSquare,
  Server,
  Workflow,
} from "lucide-react";

import { motion } from "framer-motion";

import SectionHeader from "./SectionHeader";
import ProjectCard from "./ProjectCard";
import { portfolio } from "../data/portfolio";

function Projects() {
  const featuredProject = portfolio.projects.find(
    (project) => project.featured
  );

  const otherProjects = portfolio.projects.filter(
    (project) => !project.featured
  );

  return (
    <section id="projects" className="projects section">

      <div className="section-container">

        <SectionHeader
          number="03"
          eyebrow="Projects"
          title="Things I've built."
          description="A selection of applications and engineering projects exploring scalable software, full-stack development, and AI-powered workflows."
        />


        {/* FEATURED PROJECT */}

        {featuredProject && (
          <motion.article
            className="featured-project"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <div className="featured-project-content">

              <div className="featured-label">
                <span />
                Featured Project
              </div>

              <p className="project-category">
                {featuredProject.category}
              </p>

              <h3>
                {featuredProject.title}
              </h3>

              <p className="featured-description">
                {featuredProject.description}
              </p>


              <div className="project-tech">
                {featuredProject.technologies.map(
                  (technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  )
                )}
              </div>


              <div className="featured-actions">

                <a
                  href="#"
                  className="primary-button"
                  onClick={(event) =>
                    event.preventDefault()
                  }
                >
                  Explore Architecture
                  <ArrowRight size={17} />
                </a>

              </div>

            </div>


            {/* ARCHITECTURE */}

            <div className="agent-architecture">

              <div className="architecture-title">
                <GitBranch size={15} />
                System Architecture
              </div>


              <div className="architecture-flow">

                <div className="architecture-node input-node">
                  <MessageSquare size={19} />

                  <span>
                    Natural Language
                  </span>
                </div>


                <div className="architecture-connector">
                  ↓
                </div>


                <div className="architecture-node agent-node">

                  <Bot size={21} />

                  <div>
                    <strong>AI Agent</strong>
                    <span>
                      Tool Orchestration
                    </span>
                  </div>

                </div>


                <div className="architecture-connector">
                  ↓
                </div>


                <div className="architecture-tools">

                  <div className="architecture-node">
                    <Server size={16} />
                    Email
                  </div>

                  <div className="architecture-node">
                    <Database size={16} />
                    SQL
                  </div>

                  <div className="architecture-node">
                    <Workflow size={16} />
                    Jira
                  </div>

                </div>


                <div className="architecture-tech-row">

                  <span>API Gateway</span>
                  <span>JWT</span>
                  <span>Kafka</span>
                  <span>Redis</span>

                </div>

              </div>

            </div>

          </motion.article>
        )}


        {/* OTHER PROJECTS */}

        {otherProjects.length > 0 && (
          <div className="other-projects">

            <div className="projects-subheader">
              <span>Other Projects</span>

              <div />
            </div>


            <div className="projects-grid">

              {otherProjects.map(
                (project, index) => (
                  <ProjectCard
                    key={project.title}
                    project={project}
                    index={index}
                  />
                )
              )}

            </div>

          </div>
        )}

      </div>

    </section>
  );
}

export default Projects;