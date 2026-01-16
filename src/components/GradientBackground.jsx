import "./gradient.css";

export default function GradientBackground({ children }) {
  return (
    <div className="angular-bg">
      <div className="angular-content">
        {children}
      </div>
    </div>
  );
}
