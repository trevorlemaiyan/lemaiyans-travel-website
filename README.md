# Lemaiyans Travels website

The live website application is in [`frontend/`](frontend/). It uses Next.js 14, TypeScript, Tailwind CSS, and server route handlers for contact inquiries.

## Run locally

```powershell
cd frontend
npm ci
npm run dev
```

Open `http://localhost:3000`.

The contact form needs SMTP configuration before it can send inquiries. Copy `frontend/.env.example` to `frontend/.env.local` and fill in the email settings when the company mailbox is ready. `.env.local` is ignored by Git; never commit credentials.

## Repository layout

```text
docs/       Project, launch, deployment, and content guides
frontend/   Next.js website, API routes, public images, and app configuration
README.md   Project entry point
.gitignore  Repository-wide generated-file and secret exclusions
```

## Before launch

The planned host must support a Node.js Next.js application and API route handlers. Static-only hosting will not run the contact form API. The hosting provider and launch configuration are still to be selected.

See the [launch checklist](docs/LAUNCH_CHECKLIST.md), [deployment guide](docs/DEPLOYMENT.md), and [architecture overview](docs/ARCHITECTURE.md).
