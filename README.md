# Lokesh Jilakara — Portfolio

A premium, animated portfolio website built with **React + Vite**, **Tailwind CSS**, **Framer Motion**, and **Lucide React**. Futuristic dark theme with glassmorphism, particle background, custom cursor, parallax, and a light/dark toggle.

## Tech stack

- React 18 + Vite
- Tailwind CSS (custom dark theme, gradients, glass utilities)
- Framer Motion (animations, parallax, scroll progress)
- Lucide React (icons)

## Getting started

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev

# 3. Build for production
npm run build

# 4. Preview the production build
npm run preview
```

Open the printed local URL (usually http://localhost:5173) in your browser.

## Folder structure

```
lokesh-portfolio/
├── index.html              # HTML shell + SEO meta + fonts
├── tailwind.config.js      # theme: colors, gradients, fonts, animations
├── postcss.config.js
├── vite.config.js
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx            # entry point
    ├── App.jsx             # composes all sections + global UI
    ├── index.css           # Tailwind + base theme + glass/btn utilities
    ├── data/
    │   └── portfolioData.js   # ← EDIT YOUR CONTENT HERE
    ├── hooks/
    │   ├── useTheme.js        # dark/light toggle
    │   ├── useTypewriter.js   # hero typing effect
    │   └── useCountUp.js      # animated stat counters
    └── components/
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── About.jsx
        ├── Experience.jsx
        ├── Skills.jsx
        ├── Projects.jsx
        ├── Education.jsx
        ├── Contact.jsx
        ├── Footer.jsx
        └── ui/
            ├── ParticleBackground.jsx
            ├── CustomCursor.jsx
            ├── ScrollProgress.jsx
            ├── BackToTop.jsx
            ├── LoadingScreen.jsx
            └── SectionHeading.jsx
```

## Editing your content

Almost everything lives in **`src/data/portfolioData.js`** — your name, contact links,
skills, projects, education, and certifications. Update that one file and the whole
site reflects the changes. Look for `[EDIT]` comments for the placeholders you must
replace (email, phone, LinkedIn, GitHub, and resume link).

To use your real resume: host the PDF (e.g. in Google Drive or in `public/`) and set
`contact.resumeUrl` to its link.

## Deploying (free)

- **Vercel / Netlify:** import the repo (or drag the project folder onto Netlify Drop).
  Build command `npm run build`, output directory `dist`.
- **GitHub Pages:** run `npm run build` and publish the `dist/` folder.

## Features

Hero typing effect · animated stat counters · project filtering · interactive skill
cards · particle background · custom cursor · scroll progress bar · back-to-top button ·
loading screen · dark/light toggle · parallax · SEO meta tags · fully responsive ·
respects `prefers-reduced-motion`.
