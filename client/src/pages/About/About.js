import React from "react";
import "./About.css";

export default function About() {
  return (
    <main className="main-about">
      <div className="main-about-container">
        <section className="about-section">
          <h1 className="about-heading">About 101 concepts</h1>
          <p className="about-para">
            The 101 concepts generator is designed to help students on the 101 course generate a concept for a website. Try
            your hand at building a site based on a generated concepts or come up with your own. Either way have fun, happy
            hacking.
          </p>
        </section>
      </div>
    </main>
  );
}
