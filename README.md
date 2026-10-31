# demo1-waterpurifiers

A mobile-first website for **Water Purifiers Services** (`waterpurifieiresservices`).

## Features

- Responsive mobile and desktop layouts using the supplied company logo.
- Tap-to-call links for **+91 89040 50495**.
- A fixed mobile call bar, a dismissible contact popup, and a floating chat-style icon that opens the phone dial pad.
- 24/7 service information, including weekends.
- Service information for Aquaguard, Aquapearl, Eureka Forbes, Kent, and all brands.
- Expandable frequently asked questions and accessible keyboard controls.

## Run locally

No build step or package installation is required. From this folder, run:

```sh
python -m http.server 4173
```

Then open `http://localhost:4173` in a browser. Phone links use `tel:` and depend on the device's configured calling application.

## Files

- `index.html` — page content and layout.
- `styles.css` — responsive styling.
- `app.js` — contact popup and interaction behaviour.
- `assets/` — supplied logo and favicon.

Deploy these files to any static website host. Google Fonts loads the typefaces when an internet connection is available; system fonts provide a fallback.

## Search engine optimisation

The website targets water purifier servicing and RO repair in Mysore (Mysuru), particularly Gokulam Extension.

Included: descriptive page title and headings, a meta description, canonical URL, social sharing metadata, Organization/WebSite/Service JSON-LD, `robots.txt`, and `sitemap.xml`. Business contact details and coverage are based on supplied information; no street address, ratings or reviews are invented.

The configured canonical website is:

https://waterpurifiers.vercel.app/

If you deploy to a different primary domain, update the absolute URLs in `index.html`, `robots.txt`, and `sitemap.xml` together. Keep only the preferred domain in the sitemap.

For search discovery, the live site must be publicly accessible without sign-in and must not send a `noindex` response header. After publication, verify the site in Google Search Console, submit `/sitemap.xml`, and request indexing of the homepage. These account-specific steps have not been completed by this code change. Search appearance and ranking are not guaranteed.
