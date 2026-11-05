import React from "react";
import { Link, useParams } from "react-router-dom";

import projects from "../data/projects";

function ProjectDetails() {
  const { id } = useParams();

  const project = projects.find(
    (item) => item.id === id
  );

  if (!project) {
    return (
      <div className="not-found">

        <h1>Project Not Found</h1>

        <p>
          Sorry, the project you are looking for does not exist.
        </p>

        <Link
          to="/"
          className="back-button"
        >
          ← Back to Home
        </Link>

      </div>
    );
  }

  return (
    <div className="project-details-page">

      {/* NAVBAR */}

      <nav className="details-navbar">

        <Link
          to="/#projects"
          className="back-link"
        >
          ← Back to Projects
        </Link>

        <span>
          PROJECT DETAILS
        </span>

      </nav>


      {/* HERO */}

      <section className="details-hero">

        <div className="details-hero-content">

          <p className="project-category">
            {project.category}
          </p>

          <h1>
            {project.title}
          </h1>

          <p>
            {project.shortDescription}
          </p>

        </div>

      </section>


      {/* CONTENT */}

      <main className="details-content">

        {/* OVERVIEW */}

        <section className="details-section">

          <h2>
            Project Overview
          </h2>

          <p>
            {project.overview}
          </p>

        </section>


        {/* PROBLEM */}

        <section className="details-section">

          <h2>
            Problem Statement
          </h2>

          <p>
            {project.problem}
          </p>

        </section>


        {/* OBJECTIVES */}

        <section className="details-section">

          <h2>
            Objectives
          </h2>

          <ul>
            {project.objectives.map(
              (objective, index) => (
                <li key={index}>
                  {objective}
                </li>
              )
            )}
          </ul>

        </section>


        {/* WORKFLOW */}

        <section className="details-section">

          <h2>
            Workflow / Methodology
          </h2>

          <ol>
            {project.workflow.map(
              (step, index) => (
                <li key={index}>
                  {step}
                </li>
              )
            )}
          </ol>

        </section>


        {/* FEATURES */}

        <section className="details-section">

          <h2>
            Key Features
          </h2>

          <div className="details-feature-grid">

            {project.features.map(
              (feature, index) => (

                <div
                  className="details-feature"
                  key={index}
                >
                  {feature}
                </div>

              )
            )}

          </div>

        </section>


        {/* TECHNOLOGIES */}

        <section className="details-section">

          <h2>
            Technologies Used
          </h2>

          <div className="technology-list">

            {project.technologies.map(
              (technology, index) => (

                <span key={index}>
                  {technology}
                </span>

              )
            )}

          </div>

        </section>


        {/* IMAGES */}

        {project.images &&
          project.images.length > 0 && (

            <section className="details-section">

              <h2>
                Project Gallery
              </h2>

              <div className="project-gallery">

                {project.images.map(
                  (image, index) => (

                    <img
                      key={index}
                      src={image}
                      alt={`${project.title} ${index + 1}`}
                    />

                  )
                )}

              </div>

            </section>

          )}


        {/* GITHUB */}

        {project.github && (

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="github-button"
          >
            View GitHub Repository →
          </a>

        )}


        {/* BACK */}

        <div className="details-bottom">

          <Link
            to="/#projects"
            className="back-button"
          >
            ← Back to Projects
          </Link>

        </div>

      </main>

    </div>
  );
}

export default ProjectDetails;