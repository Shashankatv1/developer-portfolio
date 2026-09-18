import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Database,
  Server,
  Sparkles,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";


import { motion } from "framer-motion";

function Hero() {
  return (
    <section id="home" className="hero">

      {/* Background grid */}
      <div className="hero-grid" />

      {/* Portrait background */}
      <div className="hero-portrait">

        <div className="portrait-glow" />

        <img
          src={`${import.meta.env.BASE_URL}profile.png`}
          alt="Shashanka TV"
        />

      </div>


      {/* Technical stack floating on portrait */}
      <motion.div
        className="hero-stack"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >

        <span>&gt; JAVA</span>
        <span>&gt; SPRING BOOT</span>
        <span>&gt; REACT.JS</span>
        <span>&gt; POSTGRESQL</span>
        <span>&gt; REDIS</span>
        <span>&gt; KAFKA</span>
        <span>&gt; MICROSERVICES</span>
        <span>&gt; AI</span>

      </motion.div>


      {/* Main content */}

      <div className="hero-container">

        <div className="hero-content">

          {/* Availability */}

          <motion.div
            className="availability"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="availability-dot" />

            AVAILABLE FOR OPPORTUNITIES
          </motion.div>


          {/* Greeting */}

          <motion.p
            className="hero-greeting"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.1,
            }}
          >
            Hello, I'm
          </motion.p>


          {/* Name */}

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.15,
            }}
          >
            Shashanka TV
          </motion.h1>


          {/* Role */}

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.25,
            }}
          >
            Software Engineer
          </motion.h2>


          {/* Main statement */}

          <motion.p
            className="hero-tagline"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.35,
            }}
          >
            Building scalable enterprise systems and
            intelligent AI-powered applications.
          </motion.p>


          {/* Description */}

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.45,
            }}
          >
            Software Engineer specializing in Java,
            Spring Boot, React.js, microservices,
            PostgreSQL, Kafka, Redis, and AI-powered
            applications.
          </motion.p>


          {/* Technology pills */}

          <motion.div
            className="hero-tech"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.6,
              delay: 0.55,
            }}
          >

            <span>Java</span>
            <span>Spring Boot</span>
            <span>React.js</span>
            <span>PostgreSQL</span>
            <span>Redis</span>
            <span>Kafka</span>
            <span>Microservices</span>
            <span>AI</span>

          </motion.div>


          {/* Buttons */}

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.65,
            }}
          >

            <a
              href="#projects"
              className="primary-button"
            >
              View Projects
              <ArrowUpRight size={18} />
            </a>


            <a
              href="#contact"
              className="secondary-button"
            >
              Let's talk
            </a>

          </motion.div>


          {/* Social links */}

          <motion.div
            className="hero-socials"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.75,
            }}
          >

            <a
              href="https://github.com/Shashankatv1"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub size={22} />
            </a>


            <a
              href="https://www.linkedin.com/in/shashanka-t-v-3365371a6/"
              target="_blank"
              rel="noreferrer"
              aria-label="FaLinkedinIn"
            >
              <FaLinkedinIn size={22} />
            </a>

          </motion.div>

        </div>

      </div>


      {/* Bottom stats */}

      <motion.div
        className="hero-stats"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.7,
          delay: 0.8,
        }}
      >

        <div>
          <strong>3+</strong>
          <span>YEARS EXPERIENCE</span>
        </div>

        <div>
          <strong>50+</strong>
          <span>QUERIES OPTIMIZED</span>
        </div>

        <div>
          <strong>1.7s</strong>
          <span>OPTIMIZED PAGE LOAD</span>
        </div>

        <div>
          <strong>25%</strong>
          <span>UI IMPROVEMENT</span>
        </div>

      </motion.div>


      {/* Decorative handwritten-style text */}

      <div className="hero-mantra">
        <span>Build</span>
        <span>Learn</span>
        <span>Improve</span>

        <div />
      </div>

    </section>
  );
}

export default Hero;