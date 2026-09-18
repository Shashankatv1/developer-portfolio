import {
  Braces,
  Cloud,
  Code2,
  Database,
  GitBranch,
  Layers3,
  LockKeyhole,
  MessageSquare,
  Sparkles,
  Terminal,
} from "lucide-react";

import { motion } from "framer-motion";

import SectionHeader from "./SectionHeader";

function Skills() {
  const categories = [
    {
      title: "Backend & APIs",
      description:
        "Building scalable backend services and RESTful APIs.",
      icon: <ServerIcon />,
      skills: [
        "Java",
        "Spring Boot",
        "Spring Data JPA",
        "Hibernate",
        "Spring Security",
        "REST APIs",
      ],
    },

    {
      title: "Frontend",
      description:
        "Building responsive interfaces and full-stack applications.",
      icon: <Code2 size={20} />,
      skills: [
        "React.js",
        "JavaScript ES6+",
        "HTML",
        "CSS",
      ],
    },

    {
      title: "Data & Messaging",
      description:
        "Working with relational data, caching, and event-driven systems.",
      icon: <Database size={20} />,
      skills: [
        "PostgreSQL",
        "MySQL",
        "Redis",
        "Kafka",
        "SQL",
      ],
    },

    {
      title: "Architecture & Security",
      description:
        "Designing maintainable systems with secure service communication.",
      icon: <Layers3 size={20} />,
      skills: [
        "Microservices",
        "API Gateway",
        "JWT Authentication",
        "OOP",
        "Design Patterns",
        "Agile / Scrum",
      ],
    },

    {
      title: "DevOps & Tools",
      description:
        "Tools used throughout development and API delivery workflows.",
      icon: <Terminal size={20} />,
      skills: [
        "Git",
        "GitHub",
        "Maven",
        "Docker",
        "Postman",
      ],
    },

    {
      title: "AI Engineering",
      description:
        "Exploring agentic workflows and LLM-powered tool orchestration.",
      icon: <Sparkles size={20} />,
      skills: [
        "Spring AI",
        "LLM Tool Calling",
        "Agentic AI",
      ],
    },
  ];

  return (
    <section id="skills" className="skills section">

      <div className="section-container">

        <SectionHeader
          number="04"
          eyebrow="Technical Arsenal"
          title="Tools for building modern software."
          description="The technologies, frameworks, and engineering concepts I use across backend, frontend, infrastructure, and AI."
        />


        <div className="skills-grid">

          {categories.map((category, index) => (

            <motion.article
              className="skill-category"
              key={category.title}
              initial={{
                opacity: 0,
                y: 25,
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
                duration: 0.5,
                delay: index * 0.08,
              }}
            >

              <div className="skill-category-header">

                <div className="skill-icon">
                  {category.icon}
                </div>

                <div>
                  <h3>
                    {category.title}
                  </h3>

                  <p>
                    {category.description}
                  </p>
                </div>

              </div>


              <div className="skill-list">

                {category.skills.map((skill) => (

                  <div
                    className="skill-item"
                    key={skill}
                  >
                    <span className="skill-indicator" />

                    <span>
                      {skill}
                    </span>
                  </div>

                ))}

              </div>

            </motion.article>

          ))}

        </div>


        {/* Engineering mindset */}

        <motion.div
          className="engineering-mindset"
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
        >

          <div className="mindset-icon">
            <GitBranch size={20} />
          </div>

          <div className="mindset-content">

            <span>
              ENGINEERING APPROACH
            </span>

            <h3>
              Build it. Measure it. Improve it.
            </h3>

            <p>
              I focus on writing maintainable code, improving system
              performance, and continuously learning technologies that
              help solve real engineering problems.
            </p>

          </div>

        </motion.div>

      </div>

    </section>
  );
}


/*
 * Keeping this as a small local component means
 * we don't need another icon dependency.
 */
function ServerIcon() {
  return <Braces size={20} />;
}

export default Skills;