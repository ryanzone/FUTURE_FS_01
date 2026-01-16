import GradientBackground from "@/components/GradientBackground";
import SplitText from "@/components/SplitText";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <GradientBackground>
      {/* HERO */}
      <div className="home-center">
        <SplitText
          text="Hi, I'm Ryan John Mathew"
          tag="h1"
          className="hero-text"
        />
        < div className="hero-subtitle">
        <SplitText
          text="AIML Student & Frontend Developer building modern, interactive web experiences."
          tag="h1"
          className="hero-text"
        />
</div>
      </div>

      {/* SECTIONS */}
      <About />
      <Projects />
      <Contact />
    </GradientBackground>
  );
}
