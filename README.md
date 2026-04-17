# Strategy Designer Portfolio

A professional, typography-focused portfolio website for a Senior Strategy Designer.

## Tech Stack
- **Framework:** React 19 + Vite
- **Styling:** Tailwind CSS 4
- **Components:** shadcn/ui
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Routing:** React Router 7

## Features
- **Clean, Minimal Aesthetic:** Focused on strategic thinking and high-end typography.
- **Case Study Template:** Detailed sections for context, insight, reframing, and impact.
- **Responsive Design:** Fully optimized for mobile and desktop.
- **Photography Page:** Showcasing observational skills through a minimalist gallery.
- **Services Page:** Highlighting core capabilities and industry experience.

## Setup & Development

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Local Development (VS Code):**
   - Open the project folder in **VS Code**.
   - Open the integrated terminal (`Ctrl+` ` or `Cmd+J`).
   - Run the development server:
     ```bash
     npm run dev
     ```
   - Open your browser to `http://localhost:3000`.

3. **Build for Production:**
   ```bash
   npm run build
   ```

## Deployment to GitHub Pages

To host this on `username.github.io`:

1. Create a new repository on GitHub named `username.github.io`.
2. Update the `base` property in `vite.config.ts` if your repo name is different (e.g., `/portfolio/`).
3. Use the `gh-pages` package or a GitHub Action to deploy the `dist` folder.

### Using GitHub Actions (Recommended)
Create a file at `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Install and Build
        run: |
          npm install
          npm run build
      - name: Deploy
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          folder: dist
```

## Content Customization
- **Projects:** Update `src/data/projects.ts` to add or modify case studies. Each field is documented with comments.
- **Password Protection:** The first three case studies are currently password-protected (Password: `Patate`).
- **User Experience:** For a smoother experience, **unlocking any one project now automatically unlocks all others** for the duration of the session.
- **About Bio:** Edit `src/pages/About.tsx`.
- **Photography:** Update the `photos` array in `src/pages/Photography.tsx`.
- **Resume:** Place your `resume.pdf` file inside a `public/` folder at the root of the project to ensure the link in the footer works correctly.
- **Theme:** Customize colors and fonts in `src/index.css`.
- **Navigation:** All pages include developer comments explaining the component structure for easier editing.

## Local Development vs. Production
- **Routing:** This project uses `HashRouter` for maximum compatibility with GitHub Pages (it prevents "404 on refresh" errors). Your URLs will look like `#/about`.
- **VS Code Tip:** Use the **ESLint** and **Prettier** extensions in VS Code for a consistent coding style.
- **Sticky Header:** The header becomes translucent on scroll.
- **Scroll Resets:** The `ScrollToTop` component ensures a fresh start on every page load.
- **Lightbox:** Large images in Photography and Case Studies open in a full-screen mode (controlled by state in the respective pages).

## Photography Suggestions
For a strategy designer portfolio, use:
- High-contrast architectural photography.
- Minimalist textures (concrete, paper, glass).
- Candid shots of workshops or "thinking" environments (post-its, sketches).
- Professional, grayscale portraits.
