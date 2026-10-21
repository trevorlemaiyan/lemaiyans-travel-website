# Project architecture

The deployable site is a single Next.js application in `frontend/`. Its pages, shared UI, public media, and server endpoints are kept together so one Node.js app can render pages and receive inquiries.

## Key paths

```text
frontend/
  public/images/                Brand and destination images
  src/app/                      Home, about, contact, tours, privacy, sitemap, and API routes
  src/app/api/contact/           Validates and emails contact inquiries through SMTP
  src/components/sections/       Homepage sections and contact form
  src/data/tours.ts              Curated destination ideas
  src/lib/site-config.ts         Company contact details, social links, and map location
  src/lib/validations.ts         Contact form fields and validation rules
  .env.example                   Safe environment-variable template
  package.json                   App scripts and dependencies
docs/                            Project and launch documentation
```

## Current behavior

- The homepage contains the service overview; `/services` redirects to the homepage section.
- Tour cards are inspiration only. Custom tour details are handled through the contact form.
- Contact inquiries are validated by the Next.js API route and sent through SMTP when credentials are configured.
- The site does not save inquiries to a database.
- Hosting is not configured here. The selected host must run Next.js server routes for the contact form.

## Local development

Run `npm ci` and `npm run dev` from `frontend/`. Copy `.env.example` to `.env.local` when configuring email delivery. Keep `.env.local` untracked.
