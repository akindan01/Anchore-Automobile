<div align="center">
  
  # Anchore Automobiles
  
  **Premium Certified Vehicles, Lagos**
  
  <p>
    Nigeria's premium destination for certified luxury vehicles, importation, financing, and after-sales care. Drive Excellence. Experience Luxury.
  </p>
  
  [![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
  [![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-black?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)
  [![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
</div>

<br />

##  Overview

Anchore Automobiles is an award-quality, modern, and highly responsive landing page for a premium luxury automobile dealership located in Lagos, Nigeria. Built with a focus on high performance, accessibility, and sleek aesthetics, it serves as a powerful digital storefront to attract high-end clientele.

The application boasts smooth scroll reveals, dynamic hover states, and meticulously crafted UI components that mirror the elegance of the luxury vehicles it showcases.

##  Key Features

- **Immersive Hero Section:** Captivating entry point with animated staggered text, high-resolution imagery, and a sleek ticker tape.
- **Premium Vehicle Showcase:** Beautifully designed car cards featuring specs (engine, transmission, mileage) styled like an authentic automotive spec sheet.
- **Luxury Services Highlights:** Detailed breakdown of services including importation, financing, trade-ins, and bespoke maintenance.
- **Client Testimonials:** Dynamic slider featuring reviews from satisfied elite customers.
- **Interactive FAQ & Process Sections:** Accordion-based FAQs and a step-by-step guide to the purchasing/importation process.
- **Performance Optimized:** Built on Next.js App Router for optimal Server-Side Rendering (SSR) and image optimization.
- **Smooth Animations:** Powered by Framer Motion for scroll reveals, micro-interactions, and page-load sequencing.
- **Fully Responsive:** Flawless experience across desktop, tablet, and mobile devices.

##  Technology Stack

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router, JavaScript)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Typography:** Google Fonts (Bricolage Grotesque, Manrope, JetBrains Mono)

##  Design System

The platform utilizes a bespoke design system meticulously crafted for the luxury automotive niche.

| Element | Description | Value |
| :--- | :--- | :--- |
| **Primary Background** | `obsidian` | `#0B0B0B` |
| **Inverted Light Band** | `bone` | `#F5F3EF` |
| **Accent / CTAs** | `anchor` | `#B30000` |
| **Display Font** | Bricolage Grotesque | Elegant, bold headings |
| **Body Font** | Manrope | highly legible body text |
| **Mono Font** | JetBrains Mono | Used for specs, pricing, and labels |

##  Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn or pnpm

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/akindan01/Anchore-Automobile.git
   cd Anchore-Automobile
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open the application:**
   Navigate to [http://localhost:3000](http://localhost:3000) in your preferred browser.

##  Project Structure

```text
anchore-automobiles/
├── app/                  # Next.js App Router configuration
│   ├── globals.css       # Global styles, variables, & reduced-motion
│   ├── layout.js         # Root layout, fonts, SEO metadata
│   └── page.js           # Main landing page assembling all sections
├── components/           # Reusable React components
│   ├── cards/            # CarCard, FeatureCard, ServiceCard
│   ├── layout/           # Navbar, Footer
│   ├── sections/         # Page sections (Hero, About, FAQ, etc.)
│   └── ui/               # Reusable primitives (Buttons, Containers)
├── data/                 # Static JSON/JS data 
│   ├── faqs.js           # FAQ accordion data
│   ├── services.js       # Luxury services list
│   ├── testimonials.js   # Client reviews
│   └── vehicles.js       # Featured inventory
└── public/               # Static assets (images, icons)
```

##  Pre-Launch Checklist

This project ships with realistic **placeholder content** so it looks complete out of the box. Please ensure you update the following before deploying to production:

1. **Vehicle Inventory (`data/vehicles.js`):** Replace placeholder cars, prices, and specs with your actual inventory. If using external images, update `next.config.js` -> `images.remotePatterns`.
2. **Contact Details (`components/sections/Contact.jsx`):** Update phone numbers, emails, and physical address.
3. **Map Integration:** Swap the styled map placeholder in the Contact section with a real Google Maps iframe or `@react-google-maps/api`.
4. **Testimonials (`data/testimonials.js`):** Add genuine reviews and client photos.
5. **Form Handling:** 
   - Wire the Contact Form (`ContactForm.jsx`) to your backend CRM or an API route (e.g., Resend, SendGrid).
   - Connect the Footer Newsletter form to your email provider (Mailchimp, Klaviyo).

##  Accessibility & Performance

- **Keyboard Navigation:** All interactive elements feature visible keyboard focus states.
- **Reduced Motion:** Respects user preferences via `prefers-reduced-motion` queries.
- **Image Optimization:** Utilizes `next/image` with responsive sizing for aggressive lazy loading and fast LCP.
- **Semantic HTML:** Proper use of ARIA labels, semantic headings, and roles throughout the application.

##  License

This project is proprietary and intended for use by Anchore Automobiles. All rights reserved.

---
<div align="center">
  <i>Drive Excellence. Experience Luxury.</i>
</div>
