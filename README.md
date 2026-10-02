# ✈️ Lemaiyan's Travels

A modern, high-performance web platform and aviation ticketing management system for **Lemaiyan's Travels**, an established travel agency operating from **Nandi Arcade (First Floor), Eldoret, Kenya**.

Built with a unified **Next.js 14 (App Router)** architecture, TypeScript, Tailwind CSS, Framer Motion, and native API Route Handlers.

---

## 🎯 Architecture (Option A: Unified Next.js)

The backend and frontend are unified into a single Next.js project. All API endpoints, input validation, bot prevention, and email dispatch run directly inside Next.js Route Handlers:

```
Lemaiyans_travels/
├── README.md                 # Repository documentation
├── .gitignore                # Global gitignore (node_modules, .next, .env)
└── frontend/                 # Complete Unified Next.js Web App & API
    ├── public/               # Brand logos and static media
    └── src/
        ├── app/
        │   ├── api/
        │   │   ├── contact/  # POST /api/contact (Sanitization, bot protection & mailer)
        │   │   └── health/   # GET /api/health (Service status & uptime)
        │   ├── about/        # Agency history, heritage & governance
        │   ├── contact/      # Contact desk & OpenStreetMap integration
        │   ├── privacy/      # Privacy notice and data policy
        │   ├── services/     # Deep-dive on active travel capabilities
        │   ├── globals.css   # Editorial styling & hairline grid utilities
        │   ├── layout.tsx    # Root layout, Syne & Plus Jakarta Sans typography
        │   ├── page.tsx      # Editorial landing page assembly
        │   ├── robots.ts     # Search engine crawler policies
        │   └── sitemap.ts    # Dynamic XML sitemap
        ├── components/
        │   ├── layout/       # Header, navigation drawer
        │   ├── sections/     # Hero, ServicesGrid, CompanyOverview, EldoretMap, etc.
        │   └── ui/           # Logo, PageHero, Footer, OptimizedImage
        └── lib/
            ├── site-config.ts # Centralized business details & Eldoret coordinates
            └── validations.ts # Zod schema for form validation
```

---

## ✨ Features

- **Editorial Aviation Design**: Custom typography pairing **Syne** (`font-display`) and **Plus Jakarta Sans** (`font-sans`), technical monospace stamps, and crisp hairline architectural gridlines.
- **Active Service Dockets**:
  - **Domestic & International Air Ticketing**: KQ, Jambojet, Fly540, Emirates, Qatar Airways, Ethiopian Airlines, Lufthansa.
  - **Corporate Travel Accounts**: Itemized statements, monthly credit facilities, and travel policy compliance.
  - **Visa Advisory & Paperwork Pre-Audits**: Schengen Area, United Kingdom, United States, and UAE/Dubai tourist visas.
  - **Executive Car Hire & Airport Transfers**: Punctual meet-and-greet airport pickups and transfers at any airport in Kenya and worldwide, with chauffeur-driven executive sedans, 4x4 Land Cruisers, and passenger vans.
- **100% Free Interactive Map**: Embedded **OpenStreetMap** centered on Nandi Arcade in Eldoret CBD (`0.5193° N, 35.2748° E`) with zero API key or billing dependencies.
- **Unified API Route Handlers**:
  - `POST /api/contact`: Form input sanitization, honeypot bot trap, Zod validation, and styled HTML email dispatch via Nodemailer.
  - `GET /api/health`: Instant health check and uptime monitor.
- **Zero CORS / Single-Origin**: Client requests hit relative paths (`/api/contact`), eliminating cross-origin complications and multi-server hosting costs.
- **SEO & Social Optimization**: Dynamic `sitemap.xml`, `robots.txt`, and OpenGraph metadata.

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** `>= 18.17.0`
- **npm** `>= 9.0.0`

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/trevorlemaiyan/lemaiyans-travel-website.git
   cd lemaiyans-travel-website/frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   ```bash
   cp .env.example .env.local
   ```
   *(Edit `.env.local` to provide your SMTP credentials for contact email dispatch)*

4. Start development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## ⚙️ Environment Variables

Create a `.env.local` file inside the `frontend/` directory:

| Variable | Description | Default |
| :--- | :--- | :--- |
| `NEXT_PUBLIC_SITE_URL` | Canonical public URL | `https://lemaiyanstravels.co.ke` |
| `NEXT_PUBLIC_API_URL` | Custom backend URL (leave blank for native `/api`) | `""` |
| `CONTACT_EMAIL` | Inbox to receive website inquiries | `lemaiyans@gmail.com` |
| `EMAIL_HOST` | SMTP server host | `smtp.gmail.com` |
| `EMAIL_PORT` | SMTP port | `587` |
| `EMAIL_USER` | SMTP username / address | `your-email@gmail.com` |
| `EMAIL_PASS` | SMTP application-specific password | `your-app-password` |

---

## 🛠️ Build & Verification

To verify TypeScript types and build for production:

```bash
# Type check without emitting
npx tsc --noEmit

# Optimized production build
npm run build

# Start production server
npm start
```

---

## 🌐 Deployment (Vercel)

Because the project is unified under **Option A**, deployment to **Vercel** requires zero additional server setups:

1. Push your repository to GitHub.
2. Import the project into **Vercel**.
3. Set the **Root Directory** to `frontend`.
4. Add your environment variables (`CONTACT_EMAIL`, `EMAIL_USER`, `EMAIL_PASS`, etc.) in the Vercel dashboard.
5. Deploy.

---

## 📍 Physical Travel Desk

- **Address**: Nandi Arcade Building, First Floor, Eldoret, Kenya
- **Coordinates**: `0.5193° N, 35.2748° E`
- **Phone**: `+254 704 772 826`
- **Email**: `lemaiyans@gmail.com`
- **Desk Hours**: Mon – Fri: 8:00 AM – 5:30 PM | Sat: 8:30 AM – 1:00 PM

---

## 📄 License

Proprietary © Lemaiyan's Travels. All rights reserved.
