import React from "react";
import "./About.css";

export default function About() {
  return (
    <main className="main-about">
      <div className="main-about-container">
        <section className="about-section">
          <h1 className="about-heading">About 101 concepts</h1>
          <p className="about-para">
            The 101 concept generator is designed to help students on the tech educators 101 course generate an idea for a
            website.
          </p>
          <p>
            Try your hand at building a site based on an idea generated from the light bulb or come up with something great
            on your own. Either way, have fun and happy hacking.
          </p>
        </section>
      </div>
    </main>
  );
}
