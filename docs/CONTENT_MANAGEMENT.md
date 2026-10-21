# Content management

The site is a Next.js app in `frontend/`. Most content is maintained in source files; there is no CMS or SQL database.

## Common updates

- **Homepage services:** `frontend/src/components/sections/ServicesGrid.tsx`
- **Tour destination ideas:** `frontend/src/data/tours.ts`
- **Business details and contact links:** `frontend/src/lib/site-config.ts`
- **Page metadata and shared shell:** `frontend/src/app/layout.tsx`
- **Images and static assets:** `frontend/public/`
- **Header navigation:** `frontend/src/components/layout/Header.tsx`

Tour entries are examples for personalized planning, not fixed packages with promised prices, dates, or availability. Keep photo credits and useful alt text with destination images.

## Local workflow

From `frontend/`, run `npm run dev` to preview content at `http://localhost:3000`. Keep image paths rooted at `/` (for example `/images/destination.jpg`) and use descriptive filenames. Before launch, verify every image and link in the browser.

The contact form uses the site's API route and SMTP environment settings. The live email address and credentials will be configured after hosting; never put credentials in source files. Keep real environment files out of Git and use `.env.example` only for variable names and safe placeholders.
