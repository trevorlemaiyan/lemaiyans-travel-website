# Hosting and deployment notes

The hosting provider has not been selected. The production host should support the Next.js server runtime and API route handlers; a static-only plan will not run the contact form endpoint.

## Prepare the host

1. Create a Node.js service using the `frontend/` directory as the app root.
2. Install dependencies with `npm ci` and use the scripts in `frontend/package.json` (`npm run build` and `npm start`).
3. Configure the final domain and HTTPS at the host.
4. Add `NEXT_PUBLIC_SITE_URL` with the canonical HTTPS site URL.
5. When the company mailbox is ready, add the SMTP values documented in `frontend/.env.example` using the host's secret manager. Do not commit those values or copy a real `.env.local` into the repository.
6. Confirm the host supports outbound SMTP on the provider's required port. If it blocks SMTP, select an email delivery service before launch and adapt the contact route.

## Release process

1. Review changes and commit them to the chosen Git branch.
2. Build the app for production and fix any build errors.
3. Deploy using the selected host's Git integration or documented release workflow.
4. On the live domain, check the main pages, navigation, map, social links, and inquiry form.
5. Submit a test inquiry and confirm the message reaches the company mailbox.

No deployment provider or automatic deployment is configured by this project documentation. Do not infer a provider from the repository; confirm the intended Kenyan host before setting up its build settings or DNS.
