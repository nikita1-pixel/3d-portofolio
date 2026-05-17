<div align="center">
  <h1 align="center">DevPortfolio</h1>
  <p align="center">
    A premium, dynamic, and fully responsive developer portfolio template.
    <br />
    <a href="#features"><strong>Explore the docs »</strong></a>
    <br />
  </p>
</div>

---
https://nikita1-pixel.github.io/3d-portofolio/
## ✨ Features

- **Dynamic Content Architecture:** Content is entirely driven by a single `js/data.js` file. Update your data, and the UI automatically renders without touching the HTML!
- **Sleek, Modern Aesthetics:** Features glassmorphism, tailored color palettes, and an interactive mesh gradient background.
- **Scroll Reveal & 3D Tilt Animations:** Engaging micro-interactions that feel responsive and alive, using `IntersectionObserver` and custom math.
- **Bento-Grid Design:** Clean, modern grid layouts for showcasing technical skills and credentials.
- **Tailwind CSS:** Fully styled with Tailwind utility classes and customized design tokens.

## 🛠️ Tech Stack

- **Structure:** Semantic HTML5
- **Styling:** Tailwind CSS (via CDN) & Custom CSS variables
- **Logic & Interactivity:** Vanilla JavaScript (ES6+)

## 🚀 Quick Start

1. **Clone the repository** (or download the ZIP):
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   ```
2. **Open `index.html`** in your browser. No build steps, `npm install`, or servers are required!

## 📝 How to Update Content

The entire portfolio is fully dynamic. You **never** need to touch `index.html` to update your projects, experience, or skills. 

Simply open `js/data.js` and edit the predefined arrays:

- `techStack`: The typing animation text shown in the hero section.
- `skills`: The skill cards shown in the Technical Arsenal.
- `projects`: Your selected projects. Each project automatically gets an alternating layout and a dedicated modal popup.
- `experience`: Your career timeline and milestones.
- `credentials`: Your education and certifications.

## 📂 File Structure

```text
📁 portfolio/
├── 📄 index.html      # Main HTML file containing the app shell and empty container IDs
├── 📁 css/
│   ├── 📄 style.css      # Core styles, custom animations, and typography
│   └── 📄 background.css # Mesh gradient interactive background styles
└── 📁 js/
    ├── 📄 data.js        # 🌟 YOUR CONTENT GOES HERE! Edit this file to update the site.
    └── 📄 main.js        # Core logic: DOM injection, animations, scroll effects, and modals.
```

## 🎨 Design Philosophy

This portfolio is designed to immediately wow users using rich aesthetics, interactive elements, and a smooth user experience. The dynamic data-rendering approach separates the content from the presentation, adhering to modern web development best practices while making long-term maintenance incredibly easy.

## 🤝 Author

**Nrimala Choudhary**
Full-Stack Web Developer
