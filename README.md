# Atik MERN Portfolio

A responsive personal portfolio for **Atik Wahid**, built with **Vite**, **React**, **JavaScript**, **Tailwind CSS**, and **shadcn/ui**.

Live site: `https://legendary-biscochitos-a57923.netlify.app`

## Stack

- Vite
- React
- JavaScript / JSX
- Tailwind CSS
- shadcn/ui
- React Router

## What It Includes

- Hero section with profile image, social links, and CTA buttons
- About section with background, work philosophy, and current focus
- Projects showcase with feature summaries and tech stacks
- Skills section with categorized strengths
- Contact section with email-draft form and direct contact links
- Responsive layout with custom gradients, tokens, and UI components

## Quick Start

### 1. Install dependencies

```bash
npm install
```

### 2. Start the Vite dev server

```bash
npm run dev
```

Open the local URL shown in the terminal. In this project the dev server is configured for port `8080`.

## Build And Preview

### Create a production build

```bash
npm run build
```

The production files are generated in `dist/`.

### Preview with Vite

```bash
npm run preview
```

### Serve the built files with live-server

```bash
npm run serve
```

This starts `live-server` for the `dist` folder on `http://localhost:4173`.

## Available Scripts

- `npm run dev` - Start the Vite development server
- `npm run build` - Create the production build
- `npm run build:dev` - Build using development mode
- `npm run preview` - Preview the build with Vite
- `npm run serve` - Serve the built `dist` folder with `live-server`
- `npm run lint` - Run ESLint

## Project Structure

- `src/main.jsx` - React entry file
- `src/App.jsx` - App shell and route setup
- `src/pages/Index.jsx` - Main landing page composition
- `src/components/` - Portfolio sections such as hero, about, projects, skills, and contact
- `src/components/ui/` - shadcn/ui building blocks
- `src/index.css` - Tailwind base styles and design tokens
- `vite.config.js` - Vite configuration

## Deployment

This project works well on static hosts such as **Netlify**, **Vercel**, and **GitHub Pages**.

- Netlify URL: `https://legendary-biscochitos-a57923.netlify.app`
- Build command: `npm run build`
- Publish directory: `dist`
