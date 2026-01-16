import SplitText from "@/components/SplitText";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <SplitText text="Projects" tag="h2" className="section-title" />

      <div className="projects-grid">
        <ProjectCard
          title="Astrodyssey"
          description="A space-themed interactive web experience featuring animated navigation and real-time space data."
          tech={["React", "TypeScript", "Vite", "NASA APOD API", "Spaceflight News API"]}
          link="https://github.com/ryanzone/Astrodyssey"
        />

        <ProjectCard
          title="FIFA AI Predictor"
          description="A machine learning web app that predicts football match outcomes and analyzes player performance using FIFA datasets."
          tech={["Python", "Machine Learning", "Streamlit"]}
          link="https://github.com/ryanzone/FIFA-AI-MATCH-PREDICTOR"
        />

        <ProjectCard
          title="Pneumonia Detection"
          description="A deep learning system for detecting pneumonia from chest X-rays using transfer learning."
          tech={["Python", "PyTorch", "ResNet-18", "Streamlit"]}
          link="https://github.com/ryanzone/ICM_ML"
        />

        <ProjectCard
          title="RoomyAI"
          description="A modern web app that helps users visualize and refine interior spaces using AI-powered tools."
          tech={["Next.js", "Groq", "Supabase", "Tailwind CSS"]}
          link="https://github.com/ryanzone/RoomyAI"
        />

        <ProjectCard
          title="Shopping Cart System"
          description="A desktop-based shopping cart application with database-backed product and order management."
          tech={["Java", "Swing", "SQLite"]}
          link="https://github.com/ryanzone/ShoppingCartSystem"
        />

        <ProjectCard
          title="Space GenAI Assistant"
          description="A retrieval-augmented generation (RAG) based assistant that answers questions about space and astronomy."
          tech={["Python", "LangChain", "FAISS", "Groq API"]}
          link="https://github.com/ryanzone/SpaceGENAI"
        />
      </div>
    </section>
  );
}
