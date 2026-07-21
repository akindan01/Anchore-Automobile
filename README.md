# Anchore Automobiles

A premium, award-quality landing page for a Nigerian luxury automobile
dealership, built with Next.js (App Router), Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

To build for production:

```bash
npm run build
npm run start
```

## Stack

- **Next.js 14** (App Router, JavaScript)
- **Tailwind CSS** — custom design tokens in `tailwind.config.js`
  (colors, fonts, letter-spacing, keyframes)
- **Framer Motion** — scroll reveals, hover states, page-load sequencing
- **Lucide React** — icon set throughout

## Project structure

```
app/
  layout.js        Root layout, fonts, metadata
  page.js          Assembles every section for the landing page
  globals.css       Base styles, focus states, scrollbar, reduced-motion
components/
  layout/           Navbar, Footer
  sections/         One file per page section (Hero, Services, Contact, ...)
  cards/            CarCard, FeatureCard, ServiceCard
  ui/               Reusable primitives — Button, Container, SectionTitle,
                    AnimatedCounter
data/
  vehicles.js       Inventory shown in "Featured Vehicles"
  services.js       The 8 services shown in "Luxury Services"
  testimonials.js   Client quotes shown in the testimonial slider
  faqs.js           Questions/answers for the FAQ accordion
```

## Design system

| Token          | Value                          |
|----------------|--------------------------------|
| `obsidian`     | `#0B0B0B` — primary background |
| `bone`         | `#F5F3EF` — inverted light band|
| `anchor`       | `#B30000` — accent / CTAs      |
| Display font   | Bricolage Grotesque            |
| Body font      | Manrope                        |
| Mono / spec font | JetBrains Mono (used for prices, specs, the hero ticker, and labels — echoing an automotive spec sheet) |

## Before you launch this for a real dealership

This project ships with realistic **placeholder content** so it looks
complete out of the box. Swap these out before going live:

1. **Vehicle photos & data** — `data/vehicles.js` currently points to
   royalty-free Unsplash photos and illustrative pricing/specs. Replace
   `image`, `price`, `mileage`, etc. with your actual inventory and photos
   (upload real photos to `/public` or your own image host, then update
   `next.config.js` → `images.remotePatterns` if you use a new domain).
2. **Contact details** — phone, email, and address in
   `components/sections/Contact.jsx` are placeholders.
3. **Google Map** — the map panel in the Contact section is a styled
   placeholder. Swap it for a real Google Maps embed/iframe or the
   `@react-google-maps/api` package once you have an API key.
4. **Testimonials** — `data/testimonials.js` contains illustrative reviews
   with generated initials-based avatars (via ui-avatars.com). Replace with
   real client quotes and, ideally, real client photos (with permission).
5. **Contact form backend** — `ContactForm.jsx` currently simulates a
   submission with a timeout. Wire the `handleSubmit` function to your
   email service, CRM, or an API route (e.g. `app/api/contact/route.js`)
   before launch.
6. **Newsletter signup** — same idea; wire `Footer.jsx`'s form to your
   email provider (Mailchimp, Resend, etc.).

## Accessibility & performance notes

- All interactive elements have visible keyboard focus states.
- `prefers-reduced-motion` is respected globally.
- Images use `next/image` with responsive `sizes` for lazy loading and
  optimized delivery.
- Semantic headings and ARIA labels are used throughout (nav, buttons,
  accordion, form fields).
