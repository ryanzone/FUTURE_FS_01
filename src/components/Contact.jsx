import SplitText from "@/components/SplitText";
import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <SplitText text="Get In Touch" tag="h2" className="section-title" />

      <div className="contact-card">
        <p className="contact-text">
          I’m open to internships, collaborations, and freelance opportunities.
          If you’d like to work together or just have a conversation, feel free
          to reach out.
        </p>
      <div className="contact-links">
        <a href="mailto:ryanjmgcsj25@gmail.com">Email</a>
        <a href="https://github.com/ryanzone">GitHub</a>
        <a href="https://www.linkedin.com/in/ryan-john-mathew-608821329/">LinkedIn</a>
        </div>
      </div>
    </section>
  );
}