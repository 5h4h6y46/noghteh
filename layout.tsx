# Noghteh Architecture Studio — نقطه

A minimal black & white "under construction" page for **Noghteh Architecture Studio**.

- **Site:** [noghteh.site](https://noghteh.site)
- **Instagram:** [@noghteh.arc.studio](https://instagram.com/noghteh.arc.studio)

## Files

| File | Purpose |
|------|---------|
| `index.html` | The full single-page site |
| `logo.png` | Your brand logo (favicon + header). **Add this file** |
| `logo.svg` | Fallback logo (loads automatically if `logo.png` is missing) |
| `favicon.svg` | Fallback favicon |

## Adding your logo

Drop your actual logo into the repository root as `logo.png`. The page will pick it up automatically for both the header mark and the browser tab favicon. If `logo.png` is not present, the site falls back to the included `logo.svg`.

## Deploying on GitHub Pages

1. Create a repository named **`noghteh.site`** (or any name you prefer) on GitHub.
2. Push these files to the `main` branch.
3. In the repo, go to **Settings → Pages**.
4. Under **Source**, choose **Deploy from a branch** → `main` / `/ (root)`.
5. Save. Your site will be live at `https://<username>.github.io/<repo>/`.

### Custom domain (`noghteh.site`)

1. In your DNS provider, add these records pointing to GitHub Pages:
   - `A` records: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - Or a `CNAME` record pointing to `<username>.github.io`
2. In **Settings → Pages → Custom domain**, enter `noghteh.site` and save.
3. Enable **Enforce HTTPS** once the certificate is provisioned.
4. Commit a `CNAME` file containing `noghteh.site` to the repo root (GitHub creates this automatically when you set the custom domain).

## Design

- **Palette:** pure black background, white foreground, soft white hairlines.
- **Typography:** Vazirmatn (Persian + Latin).
- **Background:** animated constellation of dots connected by thin lines — an homage to *noghteh* (نقطه — "dot" in Farsi).
- **Frame:** thin white border with corner ticks and dots, echoing architectural drafting marks.
- **Center:** the Persian message "این صفحه درحال توسعه می باشد." with a white separator line, followed by the "نقطه" signature aligned to the left of the line.
