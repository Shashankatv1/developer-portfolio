import { Award, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

import SectionHeader from "./SectionHeader";

function Education() {
  return (
    <section id="education" className="education section">

      <div className="section-container">

        <SectionHeader
          number="05"
          eyebrow="Education"
          title="The foundation behind the engineering."
          description="Academic background and professional certification."
        />

        <div className="education-grid">

          {/* EDUCATION */}

          <motion.article
            className="education-card"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >

            <div className="education-icon">
              <GraduationCap size={22} />
            </div>

            <div className="education-content">

              <span className="education-type">
                Bachelor of Engineering
              </span>

              <h3>
                Electronics & Communication Engineering
              </h3>

              <p className="education-institute">
                RNS Institute Of Technology
              </p>

              <p className="education-university">
                Visvesvaraya Technological University
              </p>

              <div className="education-meta">
                <span>2018 — 2022</span>
                <span>Bengaluru, Karnataka</span>
              </div>

            </div>

          </motion.article>


          {/* CERTIFICATION */}

          <motion.article
            className="education-card certification-card"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.1,
            }}
          >

            <div className="education-icon">
              <Award size={22} />
            </div>

            <div className="education-content">

              <span className="education-type">
                Professional Certification
              </span>

              <h3>
                Java Full Stack Certification
              </h3>

              <p className="education-institute">
                Pentagon Space
              </p>

              <div className="certification-badge">
                <span />
                Java Full Stack
              </div>

            </div>

          </motion.article>

        </div>

      </div>

    </section>
  );
}

export default Education;