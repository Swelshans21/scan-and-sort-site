# Scan & Sort — website

Support and privacy pages for the Scan & Sort iOS app, served by GitHub Pages.

- `index.html` — support page (App Store "Support URL")
- `privacy.html` — privacy policy (App Store "Privacy Policy URL", required)

This repo is public because GitHub Pages requires it on the free plan. It holds
only these two pages — the app source lives in a separate private repo.

Preview locally: `node serve.mjs` then open http://localhost:8090

Any claim on these pages must match what the app actually does. If app behaviour
changes, update the policy in the same change.
