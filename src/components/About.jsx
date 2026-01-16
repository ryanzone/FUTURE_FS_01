import SplitText from "@/components/SplitText";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="section about">
      <SplitText text="About Me" tag="h2" className="section-title" />

      <div className="about-card">
        <p className="about-text">
          I’m an Artificial Intelligence & Machine Learning student with a strong
          interest in frontend development and building clean, performant web
          applications. I enjoy crafting modern interfaces and interactive
          experiences that feel smooth and intuitive.
        </p>

        <p className="about-text">
          I primarily work with JavaScript and React, and I also have experience
          with Python and machine learning concepts, which helps me think
          analytically and build data-driven solutions.
          
        </p>

        <div className="about-stack">
          <span>JavaScript</span>
          <span>React</span>
          <span>Next.js</span>
          <span>GSAP</span>
          <span>CSS</span>
          <span>Python</span>
          <span>Machine Learning</span>
        </div>
            <p className="about-text about-education">
            <strong>B.Tech in Artificial Intelligence & Machine Learning</strong><br />
            Currently pursuing my undergraduate degree with a strong focus on software
            development and applied AI.
        </p>
        
        <p className="about-goal">
          Currently seeking internships, collaborations, and opportunities to
          grow as a developer through real-world projects.
        </p>
      </div>
    </section>
  );
}
