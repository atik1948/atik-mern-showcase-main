## Atik MERN Portfolio


- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

---

## Overview

This is a modern, responsive portfolio for **Atik Wahid**, built with **React**, **TypeScript**, **Vite**, **Tailwind CSS**, and **shadcn/ui**.  
It showcases projects, skills, and a contact form so people can easily reach out.

---

## Getting Started

### Install dependencies

```bash
npm install
```

### Run in development

```bash
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

### Build for production

```bash
npm run build
npm run preview   # optional: preview the production build
```

The production build is output to the `dist/` folder.

---

## Main Features

- Hero section with photo, tech stack badges, and social links
- About section describing background and philosophy
- Projects section with featured projects and tech stacks
- Skills section with categorized skills and progress bars
- Contact section with contact info and a working contact form (toast feedback)
- Fully responsive layout using Tailwind and custom gradients/animations

---

## Important Files

- `src/App.tsx` – App shell and routing.
- `src/pages/Index.tsx` – Combines all main sections.
- `src/components/Navigation.tsx` – Sticky navbar with smooth scrolling.
- `src/components/Hero.tsx` – Top hero section.
- `src/components/About.tsx`, `Projects.tsx`, `Skills.tsx`, `Contact.tsx` – Main sections.
- `src/components/ui/*` – shadcn/ui component library.
- `src/index.css` – Tailwind base + custom design tokens, gradients, and animations.

---

## Deployment

Works well on static hosts such as **Netlify** or **Vercel**.

- **Build command**: `npm run build`
- **Publish directory**: `dist`

