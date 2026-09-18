import {
  ArrowUpRight,
  Mail,
  MapPin,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

import { motion } from "framer-motion";

import { portfolio } from "../data/portfolio";

function Contact() {
  return (
    <section id="contact" className="contact section">

      <div className="section-container">

        <motion.div
          className="contact-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >

          <div className="contact-content">

            <div className="contact-label">
              <span />
              06 / Contact
            </div>

            <h2>
              Let's build something
              <span> meaningful.</span>
            </h2>

            <p>
              I'm open to opportunities where I can contribute to
              building scalable software, modern full-stack applications,
              and intelligent AI-powered systems.
            </p>

            <a
              href={`mailto:${portfolio.social.email}`}
              className="primary-button contact-button"
            >
              Get in touch
              <ArrowUpRight size={18} />
            </a>

          </div>


          <div className="contact-details">

            <a
              href={`mailto:${portfolio.social.email}`}
              className="contact-detail"
            >
              <div className="contact-detail-icon">
                <Mail size={18} />
              </div>

              <div>
                <span>Email</span>
                <strong>
                  {portfolio.social.email}
                </strong>
              </div>
            </a>


            <div className="contact-detail">

              <div className="contact-detail-icon">
                <MapPin size={18} />
              </div>

              <div>
                <span>Based in</span>
                <strong>
                  {portfolio.location}
                </strong>
              </div>

            </div>


            <div className="contact-socials">

              <a
                href={portfolio.social.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <FaGithub size={19} />
              </a>

              <a
                href={portfolio.social.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={19} />
              </a>

            </div>

          </div>

        </motion.div>


        <footer className="footer">

          <span>
            © {new Date().getFullYear()} {portfolio.name}
          </span>

          <span>
            Designed & built with React.js
          </span>

          <a href="#">
            Back to top ↑
          </a>

        </footer>

      </div>

    </section>
  );
}

export default Contact;