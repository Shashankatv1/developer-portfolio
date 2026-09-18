import {
  BriefcaseBusiness,
  Code2,
  Database,
  Sparkles,
} from "lucide-react";

import { motion } from "framer-motion";

import SectionHeader from "./SectionHeader";

function About() {
  const highlights = [
    {
      icon: <BriefcaseBusiness size={20} />,
      value: "3+ Years",
      label: "Software Engineering",
    },
    {
      icon: <Code2 size={20} />,
      value: "Java + React",
      label: "Full Stack Development",
    },
    {
      icon: <Database size={20} />,
      value: "50+",
      label: "PostgreSQL Queries Optimized",
    },
    {
      icon: <Sparkles size={20} />,
      value: "Agentic AI",
      label: "Spring AI & LLM Tool Calling",
    },
  ];

  return (
    <section id="about" className="about section">

      <div className="section-container">

        <SectionHeader
          number="01"
          eyebrow="About"
          title="Engineering software that solves real problems."
          description="A little about my engineering journey, the systems I work on, and the technologies I use to build them."
        />


        <div className="about-grid">

          {/* Main story */}

          <motion.div
            className="about-content"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >

            <p className="about-lead">
              I'm a Software Engineer specializing in Java Full Stack
              development, with experience building scalable enterprise
              applications and backend services.
            </p>

            <p>
              My core experience is centered around Java, Spring Boot,
              REST APIs, PostgreSQL, and React.js. I've also worked with
              Microservices, Kafka, Redis, and Spring Security to build
              reliable and maintainable applications.
            </p>

            <p>
              In my current role, I work on an enterprise healthcare
              platform involving hospital management and EHR workflows.
              My work includes backend development, production support,
              performance optimization, and maintaining production
              services.
            </p>

            <p>
              I'm also building an Agentic AI platform using Java 21,
              Spring Boot 3, and Spring AI, exploring intelligent
              tool orchestration and LLM-powered workflows.
            </p>

          </motion.div>


          {/* Highlights */}

          <div className="about-highlights">

            {highlights.map((item, index) => (

              <motion.div
                className="highlight-card"
                key={item.label}
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
                  duration: 0.5,
                  delay: index * 0.1,
                }}
              >

                <div className="highlight-icon">
                  {item.icon}
                </div>

                <div>
                  <strong>
                    {item.value}
                  </strong>

                  <span>
                    {item.label}
                  </span>
                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;