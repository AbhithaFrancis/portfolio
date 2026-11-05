import React, { useState } from "react";
import { Link } from "react-router-dom";

import projects from "../data/projects";

function Home() {
  const [selectedCertificate, setSelectedCertificate] =
    useState(null);

  const certificates = [
    {
      title: "Machine Learning Certificate",
      image: "/figure/ml.jpg"
    },
    {
      title: "Deep Learning Certificate",
      image: "/figure/dl.jpg"
    }
  ];

  const skills = [
    {
      title: "Programming",
      items: [
        "Python",
        "MATLAB",
        "C"
       
      ]
    },
    {
      title: "Web Development",
      items: [
        "HTML",
        "CSS",
        "JavaScript",
        "React.js (Basics)"
        
      ],
    },
    {
      title: "Tools & Technologies",
      items: [
        "Vivado",
        "Keil",
        "GitHub",
        "VS Code",
        "Arduino IDE",
        "Microsoft Office"
      ]
    },
    {
      title: "Core Areas",
      items: [
        "Embedded Systems",
        "Machine Learning",
        "Computer Vision",
        "ROS"
      ]
    }
  ];

  return (
    <div className="home-page">

      {/* NAVBAR */}

      <nav className="navbar">

        <a
          href="#home"
          classsName="logo"
        >
          AF<span>.</span>
        </a>

        <div className="nav-links">

          <a href="#about">
            About
          </a>

          <a href="#skills">
            Skills
          </a>

          <a href="#projects">
            Projects
          </a>

          <a href="#education">
            Education
          </a>

          <a href="#experience">
            Experience
          </a>

          <a href="#certificates">
            Certificates
          </a>

          <a href="#contact">
            Contact
          </a>

        </div>

      </nav>


      {/* HERO */}

      <section
        className="hero"
        id="home"
      >

        <div className="hero-content">

          <p className="hero-intro">
            HELLO, I'M
          </p>

          <h1>
            Abhitha <span>Francis</span>
          </h1>

          <h2>
            Electronics & Communication Engineering Student
          </h2>

          <p className="hero-description">
            Interested in technology, embedded systems,
            artificial intelligence and web development.
            I enjoy exploring ideas and developing practical
            solutions through technology.
          </p>

          <div className="hero-buttons">

            <a
              href="#projects"
              className="primary-button"
            >
              Explore My Projects
            </a>

            <a
              href="#contact"
              className="secondary-button"
            >
              Contact Me
            </a>

          </div>

        </div>

      </section>


      {/* ABOUT */}

      <section
        className="section about-section"
        id="about"
      >

        <div className="section-heading">

          <p>
            GET TO KNOW ME
          </p>

          <h2>
            About Me
          </h2>

        </div>

        <div className="about-content">

          <div className="about-text">

            <h3>
              Exploring technology and building
              practical solutions.
            </h3>

            <p>
              I am a final-year Electronics and
              Communication Engineering student at
              Rajiv Gandhi Institute of Technology,
              Kottayam.
            </p>

            <p>
              I have an interest in embedded systems,
              artificial intelligence, computer vision,
              robotics and web development.
            </p>

            <p>
              Through academic projects and practical
              learning, I have worked with technologies
              including React, Python, OpenCV,
              microcontrollers and ROS.
            </p>

          </div>

        </div>

      </section>


      {/* SKILLS */}

      <section
        className="section skills-section"
        id="skills"
      >

        <div className="section-heading">

          <p>
            WHAT I WORK WITH
          </p>

          <h2>
            Technical Skills
          </h2>

        </div>

        <div className="skills-grid">

          {skills.map(
            (skill, index) => (

              <div
                className="skill-card"
                key={index}
              >

                <span className="skill-number">
                  0{index + 1}
                </span>

                <h3>
                  {skill.title}
                </h3>

                <div className="skill-tags">

                  {skill.items.map(
                    (item, itemIndex) => (

                      <span key={itemIndex}>
                        {item}
                      </span>

                    )
                  )}

                </div>

              </div>

            )
          )}

        </div>

      </section>


      {/* PROJECTS */}

      <section
        className="section projects-section"
        id="projects"
      >

        <div className="section-heading">

          <p>
            MY RECENT WORK
          </p>

          <h2>
            Featured Projects
          </h2>

          <span>
            A collection of academic projects
            and technical explorations.
          </span>

        </div>


        <div className="projects-grid">

          {projects.map(
            (project, index) => (

              <article
                className="project-card"
                key={project.id}
              >

                <div className="project-card-top">

                  <span>
                    PROJECT 0{index + 1}
                  </span>

                  <span className="project-arrow">
                    ↗
                  </span>

                </div>


                <p className="project-category">
                  {project.category}
                </p>


                <h3>
                  {project.title}
                </h3>


                <p className="project-description">
                  {project.shortDescription}
                </p>


                <div className="project-technologies">

                  {project.technologies
                    .slice(0, 4)
                    .map(
                      (technology, techIndex) => (

                        <span key={techIndex}>
                          {technology}
                        </span>

                      )
                    )}

                </div>


                <Link
                  to={`/project/${project.id}`}
                  className="project-button"
                >
                  View Project →
                </Link>

              </article>

            )
          )}

        </div>

      </section>


      {/* EDUCATION */}

      <section
        className="section education-section"
        id="education"
      >

        <div className="section-heading">

          <p>
            MY ACADEMIC JOURNEY
          </p>

          <h2>
            Education
          </h2>

        </div>


        <div className="timeline">

          <div className="timeline-item">

            <span className="timeline-dot"></span>

            <div className="timeline-content">

              <p className="timeline-year">
                2023 – Present
              </p>

              <h3>
                B.Tech in Electronics and
                Communication Engineering
              </h3>

              <h4>
                Rajiv Gandhi Institute of Technology,
                Kottayam
              </h4>

              <p>
                CGPA: 7.87 / 10
              </p>

            </div>

          </div>


          <div className="timeline-item">

            <span className="timeline-dot"></span>

            <div className="timeline-content">

              <p className="timeline-year">
                2024 – Present
              </p>

              <h3>
                Minor Degree in Machine Learning
              </h3>

              <h4>
                Rajiv Gandhi Institute of Technology
              </h4>

            </div>

          </div>


          <div className="timeline-item">

            <span className="timeline-dot"></span>

            <div className="timeline-content">

              <p className="timeline-year">
                2023
              </p>

              <h3>
                Higher Secondary Education
              </h3>

              <h4>
                St. Therese's Convent GHSS,
                Neyyattinkara
              </h4>

              <p>
                Kerala Board — 98%
              </p>

            </div>

          </div>


          <div className="timeline-item">

            <span className="timeline-dot"></span>

            <div className="timeline-content">

              <p className="timeline-year">
                2021
              </p>

              <h3>
                SSLC
              </h3>

              <h4>
                Christ Nagar Central School,
                Kuchapuram
              </h4>

              <p>
                CBSE — 92.8%
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* EXPERIENCE */}

      <section
        className="section experience-section"
        id="experience"
      >

        <div className="section-heading">

          <p>
            INDUSTRIAL EXPOSURE
          </p>

          <h2>
            Internship Experience
          </h2>

        </div>


        <div className="experience-card">

          <p className="experience-date">
            16 June 2025 – 22 June 2025
          </p>

         

          <h4>
            Keltron Equipment Complex
          </h4>

          <p>
            Karakulam, Thiruvananthapuram
          </p>

          <p>
            Gained industrial exposure to power
            electronics, fabrication processes,
            transformer winding and electroplating.
            Also observed the Security and
            Surveillance, Special Products Group
            and Technology Development Centre.
          </p>

          <div className="experience-tags">

            <span>
              Power Electronics
            </span>

            <span>
              Fabrication
            </span>

            <span>
              Transformer Winding
            </span>

            <span>
              Electroplating
            </span>

          </div>

        </div>

      </section>


      {/* ACTIVITIES */}

      <section className="section activities-section">

        <div className="section-heading">

          <p>
            BEYOND ACADEMICS
          </p>

          <h2>
            Experience & Activities
          </h2>

        </div>


        <div className="activities-grid">

          <div className="activity-card">

            <span>
              01
            </span>

            <h3>
              Mess Director
            </h3>

            <p>
              RIT Ladies' Hostel Committee
            </p>

          </div>


          <div className="activity-card">

            <span>
              02
            </span>

            <h3>
              NSS Volunteer & Publicity Lead
            </h3>

            <p>
              National Service Scheme, RIT
            </p>

          </div>


          <div className="activity-card">

            <span>
              03
            </span>

            <h3>
              Expo Volunteer
            </h3>

            <p>
              Prominence'24 in collaboration
              with InkerRobotic
            </p>

          </div>

        </div>

      </section>


      {/* CERTIFICATES */}

      <section
        className="section certificates-section"
        id="certificates"
      >

        <div className="section-heading">

          <p>
            CONTINUOUS LEARNING
          </p>

          <h2>
            Certifications
          </h2>

        </div>


        <div className="certificates-grid">

          {certificates.map(
            (certificate, index) => (

              <div
                className="certificate-card"
                key={index}
              >

                <span>
                  0{index + 1}
                </span>

                <h3>
                  {certificate.title}
                </h3>

                <button
                  onClick={() =>
                    setSelectedCertificate(
                      certificate
                    )
                  }
                >
                  View Certificate →
                </button>

              </div>

            )
          )}

        </div>

      </section>


      {/* CONTACT */}

      <section
        className="section contact-section"
        id="contact"
      >

       <div className="section-heading">

  <p>
    LET'S CONNECT
  </p>

  <h2>
    Get In Touch
  </h2>

</div>

<div className="contact-content">

  <div className="contact-links">

    <a href="mailto:abhithafrancis@gmail.com">
      <span>Email</span>
      abhithafrancis@gmail.com
    </a>

    <a href="tel:+917025028671">
      <span>Phone</span>
      +91 7025028671
    </a>

    <a
      href="https://github.com/AbhithaFrancis"
      target="_blank"
      rel="noreferrer"
    >
      <span>GitHub</span>
      View GitHub Profile ↗
    </a>

    <a
      href="https://www.linkedin.com/in/abhitha-francis"
      target="_blank"
      rel="noreferrer"
    >
      <span>LinkedIn</span>
      View LinkedIn Profile ↗
    </a>

  </div>

</div>
      </section>


      {/* FOOTER */}

      <footer className="footer">

        <p>
          © {new Date().getFullYear()}
          {" "}
          Abhitha Francis
        </p>

        <a href="#home">
          Back to Top ↑
        </a>

      </footer>


      {/* CERTIFICATE MODAL */}

      {selectedCertificate && (

        <div
          className="certificate-modal-overlay"
          onClick={() =>
            setSelectedCertificate(null)
          }
        >

          <div
            className="certificate-modal"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            <button
              className="certificate-close"
              onClick={() =>
                setSelectedCertificate(null)
              }
            >
              ×
            </button>

            <h2>
              {selectedCertificate.title}
            </h2>

            <img
              src={selectedCertificate.image}
              alt={selectedCertificate.title}
            />

          </div>

        </div>

      )}

    </div>
  );
}

export default Home;