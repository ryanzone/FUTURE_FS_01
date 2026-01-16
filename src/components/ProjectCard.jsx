import "./Projects.css"
export default function ProjectCard({ title, description, tech, link }) {
  return (
    <div className="project-card">
      <h3 className="project-title">{title}</h3>

      <p className="project-description">
        {description}
      </p>

      <div className="project-tech">
        {tech.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </div>

      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="project-link"
      >
        View Project →
      </a>
    </div>
  );
}
