# Loran Hendricks – Portfolio & Resume Site

This is my personal portfolio and resume site built with **React** and **Material UI**, showcasing my skills in **AI Product Management**, **Cloud Security Engineering**, **AI Engineering** and **Full-Stack Development**.

Deployed via **GitHub Pages**: [View Live Site](https://lkh156.github.io/portfolio-resume/)

---

## 🚀 Tech Stack

- **Frontend**: React, React Router, Material UI
- **Styling**: Emotion, Custom MUI Theme
- **Deployment**: GitHub Pages
- **Tooling**: ESLint, Prettier, Create React App

---

## 📁 Project Structure

```Bash
portfolio-resume/
├── public/
│ ├── 404.html # Fallback for GitHub Pages routing
│ └── index.html # HTML template
├── src/
│ ├── assets/ # Static assets
│ │ ├── Icons/ # Tech stack icons
│ │ └── Profile/ # Profile photo
│ ├── components/ # Reusable components like Navbar, ProjectCard
│ ├── data/ # Project and resume data (JS objects)
│ ├── pages/ # Main views (Home, Portfolio, Resume, Contact)
│ ├── theme/ # MUI theme override
│ ├── App.jsx # App with route definitions
│ └── index.js # React root render
├── .babelrc # Babel config
├── .gitignore
├── package.json
├── README.md
└── deploy (via npm run deploy)
```
---


## 🚀 Features

- ⚡ Dynamic featured project on homepage
- 💻 Responsive layout using MUI’s Grid and Flexbox
- 🧠 Clean React routing across `/`, `/portfolio`, `/resume`, `/contact`
- 🖼️ Images imported directly from the local `/src/assets` folder (no broken image paths!)
- 📄 Resume page with structured professional history

---

🧪 Notes
- The site is deployed using the gh-pages branch via the gh-pages npm package.

- All images are imported using ES module imports to avoid public path issues on GitHub Pages.

---

🪪 License

MIT – Use freely with attribution.