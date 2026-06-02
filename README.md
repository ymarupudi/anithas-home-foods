# Anitha's Home Foods — Static Site

A fast, free, statically-generated catalog site built with **Astro + Tailwind**, deployed to **GitHub Pages**. Customers order via **WhatsApp** (no backend, no payment gateway needed).

## Local development

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs to ./dist
npm run preview
```

## Customize content

Edit JSON files — no code changes needed for everyday updates:

- `src/data/site.json` — business name, phone, WhatsApp number, email, address
- `src/data/categories.json` — categories shown in nav and homepage
- `src/data/products.json` — products (slug, name, category, image URL, description, variants)

Product images: paste any public image URL (Unsplash, Cloudinary free tier, your own server). To use local images, put them in `public/images/` and reference as `/anithas-home-foods/images/file.jpg`.

## Deploy to GitHub Pages (free)

1. Create a new GitHub repo, e.g. `anithas-home-foods`.
2. In `astro.config.mjs` set:
   - `site: 'https://<your-username>.github.io'`
   - `base: '/<repo-name>/'`  (or `'/'` if repo is `<username>.github.io`)
3. Push the code:
   ```bash
   git init && git add . && git commit -m "init"
   git branch -M main
   git remote add origin git@github.com:<your-username>/<repo-name>.git
   git push -u origin main
   ```
4. In the repo → **Settings → Pages → Build and deployment → Source: GitHub Actions**.
5. The included workflow `.github/workflows/deploy.yml` builds and publishes on every push to `main`.

Your site goes live at `https://<your-username>.github.io/<repo-name>/`.
