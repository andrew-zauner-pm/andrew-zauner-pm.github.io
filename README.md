# Personal GitHub Pages Site

A lightweight, client-safe personal website scaffold for GitHub Pages. This repo intentionally contains no client data, credentials, proprietary code, or confidential project details.

## What this includes

- Static GitHub Pages-ready site
- Homepage with hero, about, work, thoughts/links, and contact sections
- Generic project cards focused on analytics engineering, data engineering, AI workflows, and documentation
- Responsive CSS with a professional consulting-style design
- Small JavaScript enhancements for navigation, year rendering, and active section highlighting
- GitHub Actions workflow for Pages deployment
- `.nojekyll` file so GitHub Pages serves files as-is

## Quick start

1. Create a new GitHub repository.
2. Upload or push these files to the repository.
3. In GitHub, go to **Settings > Pages**.
4. Under **Build and deployment**, select **GitHub Actions**.
5. Push to `main`. The included workflow will publish the site.

## Local preview

Because this is a static site, you can preview it by opening `index.html` in your browser.

For a better local preview, run a simple local server:

```bash
python -m http.server 8000
```

Then browse to:

```text
http://localhost:8000
```

## Customize

Update these files first:

- `index.html`: Main content, bio, work examples, thoughts/links, and contact sections
- `assets/css/styles.css`: Dark theme colors, spacing, typography, and layout
- `assets/js/main.js`: Small interactive behavior
- `assets/img/avatar.svg`: Placeholder avatar/logo

## Recommended next edits

- Replace `YOUR_GITHUB_USERNAME` in `index.html` and `README.md`
- Replace placeholder email and LinkedIn links
- Add real, non-confidential project summaries
- Add blog posts or case-study pages under a future `/thoughts` or `/writing` folder
- Add a custom domain only if needed

## Safety note

Before publishing, confirm that no client names, client data, credentials, screenshots, internal URLs, or proprietary implementation details are included.
