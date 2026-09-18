import {
  ArrowUpRight,
  Database,
  Server,
  Zap,
} from "lucide-react";

import { motion } from "framer-motion";

import SectionHeader from "./SectionHeader";

function Experience() {
  const experiences = [
    {
      period: "Aug 2025 — Present",
      role: "Software Engineer",
      company: "dWise Healthcare IT Solutions",
      location: "Bengaluru, Karnataka",

      description:
        "Working on an enterprise healthcare platform supporting hospital management and EHR workflows.",

      technologies: [
        "Java",
        "Spring Boot",
        "REST APIs",
        "PostgreSQL",
      ],

      achievements: [
        "Developed and maintained scalable backend applications for enterprise healthcare solutions.",
        "Designed backend modules using Java and Spring Boot across production environments.",
        "Optimized 50+ PostgreSQL queries using indexing, reducing page load time from 5s to 1.7s.",
        "Resolved critical production issues and improved backend service reliability.",
      ],

      featured: true,
    },

    {
      period: "Jun 2024 — Jul 2025",
      role: "Java Full Stack Developer Intern",
      company: "Pentagon Space",
      location: "Bengaluru, Karnataka",

      description:
        "Developed full-stack applications using Spring Boot on the backend and React on the frontend.",

      technologies: [
        "Spring Boot",
        "React",
        "Java",
        "SQL",
      ],

      achievements: [
        "Developed full-stack applications using Spring Boot and React.",
        "Improved UI responsiveness by 25%.",
        "Implemented CRUD operations and optimized database interactions.",
      ],

      featured: false,
    },

    {
      period: "May 2023 — May 2024",
      role: "Trainee Engineer",
      company: "Pixel Softek",

      description:
        "Completed an apprenticeship focused on Java development and software engineering fundamentals.",

      technologies: [
        "Java",
        "SQL",
        "OOP",
      ],

      achievements: [
        "Developed and maintained application components using Java and SQL.",
        "Applied object-oriented programming concepts across assigned projects.",
        "Built foundational experience in Java-based application development.",
      ],

      featured: false,
    },
  ];

  return (
    <section id="experience" className="experience section">

      <div className="section-container">

        <SectionHeader
          number="02"
          eyebrow="Experience"
          title="From fundamentals to production engineering."
          description="A progression through Java development, full-stack engineering, and enterprise software."
        />

        <div className="experience-timeline">

          {experiences.map((experience, index) => (

            <motion.article
              className={`experience-item ${
                experience.featured ? "featured" : ""
              }`}
              key={experience.company}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
            >

              {/* Timeline */}

              <div className="timeline-marker">
                <span />
              </div>


              {/* Date */}

              <div className="experience-period">
                {experience.period}
              </div>


              {/* Content */}

              <div className="experience-card">

                <div className="experience-card-header">

                  <div>

                    <h3>
                      {experience.role}
                    </h3>

                    <p className="experience-company">
                      {experience.company}
                    </p>

                  </div>

                  {experience.featured && (
                    <span className="current-badge">
                      Current
                    </span>
                  )}

                </div>


                <p className="experience-location">
                  {experience.location}
                </p>


                <p className="experience-description">
                  {experience.description}
                </p>


                {/* Achievements */}

                <div className="experience-achievements">

                  {experience.achievements.map(
                    (achievement) => (
                      <div
                        className="achievement"
                        key={achievement}
                      >
                        <ArrowUpRight size={15} />
                        <span>{achievement}</span>
                      </div>
                    )
                  )}

                </div>


                {/* Technologies */}

                <div className="experience-tech">

                  {experience.technologies.map(
                    (technology) => (
                      <span key={technology}>
                        {technology}
                      </span>
                    )
                  )}

                </div>


                {/* Featured metrics */}

                {experience.featured && (

                  <div className="experience-metrics">

                    <div className="experience-metric">

                      <Database size={18} />

                      <div>
                        <strong>50+</strong>
                        <span>Queries optimized</span>
                      </div>

                    </div>


                    <div className="experience-metric">

                      <Zap size={18} />

                      <div>
                        <strong>5s → 1.7s</strong>
                        <span>Page load improvement</span>
                      </div>

                    </div>


                    <div className="experience-metric">

                      <Server size={18} />

                      <div>
                        <strong>Production</strong>
                        <span>Enterprise systems</span>
                      </div>

                    </div>

                  </div>

                )}

              </div>

            </motion.article>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Experience;