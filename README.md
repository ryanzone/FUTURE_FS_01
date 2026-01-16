# Personal Portfolio Website

## Internship Task

**Future Interns – Full Stack Web Development**  
**Task 1: Personal Professional Portfolio Website**

---

## 📌 Project Overview

This project is a personal portfolio website designed to showcase my profile, skills, and projects using modern frontend technologies. The portfolio focuses on clean UI design, smooth animations, and performance-conscious implementation.

The goal of this task is to demonstrate my understanding of frontend development, animation techniques, and responsive design rather than just visual appearance.

---

## 🛠️ Tech Stack

- **Next.js (App Router)** – React-based framework for performance and structure
- **React** – Component-based UI development
- **Tailwind CSS** – Utility-first styling with custom theme variables
- **GSAP (GreenSock Animation Platform)** – Advanced text and scroll-based animations
- **CSS (Conic Gradients & Custom Properties)** – Animated angular gradient background
- **Google Fonts** – Space Grotesk, Inter, JetBrains Mono

---

## 🎨 Animated Angular Gradient Background

The background is implemented using a **CSS conic-gradient** with a smooth rotation animation.

### Implementation Details

- The gradient is rendered on a pseudo-element (`::before`) to avoid expensive background re-renders.
- Animation is handled using `transform: rotate()` which is GPU-accelerated.
- A radial overlay (`::after`) is added to improve contrast and depth.
- The container uses dynamic viewport units (`100dvh`) to avoid mobile viewport issues.

### Benefits

- Smooth, continuous animation
- No layout shift or flickering
- High performance on desktop and mobile devices

---

## ✨ Split Text Animation (GSAP)

The hero heading uses a custom **SplitText** component built with GSAP.

### How It Works

- Text is split into characters, words, or lines using `GSAP SplitText`
- Each segment animates from a vertical offset with opacity fade-in
- Animations are triggered when the element enters the viewport using `ScrollTrigger`
- Fonts are fully loaded before animation begins to prevent layout shifts

### Why GSAP

- Precise animation control
- Smooth staggered transitions
- Better performance for complex text animations compared to pure CSS

---

## 🔤 Typography System

- **Space Grotesk** – Used for animated headings due to clean glyph spacing and stability during character animations
- **Inter** – Used for body text for readability
- **JetBrains Mono** – Used for code snippets

Fonts are explicitly enforced on GSAP-generated elements to ensure consistent rendering after text splitting.

---

## ⚡ Performance Considerations

- GPU-accelerated transforms instead of repaint-heavy animations
- Controlled overflow to prevent animation bleed
- Minimal DOM manipulation during animation lifecycle
- Responsive sizing using `clamp()` and dynamic viewport units

---

## 🤖 Use of AI Tools

AI tools were used **as an assistance only** for:

- Refining animation logic
- Improving performance patterns
- Verifying best practices

All generated suggestions were reviewed, understood, and manually integrated.
