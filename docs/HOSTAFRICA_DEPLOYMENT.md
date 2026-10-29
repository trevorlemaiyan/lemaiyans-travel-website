# Deploying to HostAfrica

The website is a Next.js 14 application in `frontend/`. It uses a server route for the inquiry form, so deploy it as a Node.js/Next.js application; a static file upload cannot run the full site.

## Recommended: HCode

HostAfrica HCode lists Next.js support and Git-connected deployments. It is the simplest route for this repository.

1. Sign in to HostAfrica and open HCode. Create a project and connect the GitHub repository `trevorlemaiyan/lemaiyans-travel-website`.
2. Set the application root/project directory to `frontend` (the folder containing `package.json` and `package-lock.json`). Select the `main` branch for production.
3. Use Node.js 20 LTS or newer. Set the install command to `npm ci`, the build command to `npm run build`, and the start command to `npm run start` if HCode asks for explicit commands. The start process must listen on the port supplied by the platform; confirm HCode's detected Next.js start command does this automatically.
4. Add the production environment variables in HCode's environment/secrets settings before the first production build:

   - `NEXT_PUBLIC_SITE_URL` — the exact canonical HTTPS domain, for example `https://your-domain.co.ke`.
   - `CONTACT_EMAIL` — the inbox that should receive website inquiries.
   - `EMAIL_HOST`, `EMAIL_PORT`, `EMAIL_USER`, `EMAIL_PASS` — SMTP details from the chosen mail provider. Use the provider's app password or SMTP credential, never an account login password unless that provider explicitly requires it.

   `NEXT_PUBLIC_SITE_URL` is public configuration and may be embedded during the build. Set it before building/rebuilding. The email values are private secrets; never add them to Git or a client-side variable.

5. Deploy the production branch and review the build and runtime logs. Open the generated HCode URL and check the home page, `/tours`, `/about`, `/contact`, `/privacy`, and `/api/health`.
6. In HCode, add the existing custom domain. Use the DNS records it gives you at HostAfrica's DNS manager. If the domain currently has email, preserve its MX and mail-related TXT records; change only the records needed to point the website to HCode. Wait for DNS to propagate, then enable/confirm HTTPS.
7. After the HTTPS domain works, check `/robots.txt` and `/sitemap.xml`. Both should use the chosen domain. The current `robots.ts` contains a `.com` URL while the app metadata and sitemap use `.co.ke`; update that source file to the actual canonical domain before launch if those differ.
8. Submit a test inquiry and confirm it reaches `CONTACT_EMAIL`. Without working SMTP configuration, the endpoint intentionally returns an unavailable response instead of sending mail.

## Updates after launch

Edit the app locally, review the changes, and commit/push them to `main` to trigger the connected deployment. Check HCode's build logs and the live pages after each deployment. If a deployment fails or causes a problem, use HCode's rollback control to restore the prior release.

Keep `.env.local` on your computer and put production values only in HCode's secret/environment settings. The repository ignores `.env` files except `.env.example`.

## If using shared Node.js hosting instead

First confirm the specific hosting account exposes the Node.js application feature and supports running Next.js 14 server output, not only Node scripts or static files. HostAfrica's DirectAdmin Node.js workflow uses an application root outside `public_html`, environment variables in the Node app settings, dependency installation, and an application restart after code changes. Follow the Node.js app setup offered by your account; shared hosting panels and startup conventions can differ. If the panel requires an `app.js`/`server.js` startup file or does not support `next start` with its assigned port, use HCode or ask HostAfrica support to confirm the supported Next.js launch configuration before switching DNS.

## Git status for this repository

The working tree was clean on `main`, and `main` matched `origin/main` when this runbook was prepared. No generated `.next`, `node_modules`, TypeScript build cache, or environment files are tracked. After adding this guide, commit and push it before connecting the production deployment.
