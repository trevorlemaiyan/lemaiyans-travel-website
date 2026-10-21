# Website launch checklist

## Before choosing a host

- [ ] Choose a Kenyan hosting plan that supports the deployed Next.js server and API routes (static-only hosting will not support the contact endpoint as written).
- [ ] Confirm the domain and DNS access.
- [ ] Prepare the production SMTP mailbox and credentials; add them in the host's secret/environment-variable settings after hosting is ready.
- [ ] Set `NEXT_PUBLIC_SITE_URL` to the final HTTPS domain.

## Before launch

- [ ] Review business details, service descriptions, tour copy, image rights, and contact links.
- [ ] Test the site at desktop and phone sizes, including the mobile navigation and contact form.
- [ ] Confirm inquiry delivery to the intended company mailbox after SMTP is configured.
- [ ] Confirm the Google Maps location, social links, favicon, page metadata, and sitemap.
- [ ] Make a production build and resolve any build errors.
- [ ] Confirm HTTPS is enabled and the contact form has sensible spam/rate protections at the chosen host.
- [ ] Verify that `.env` and `.env.*` files remain ignored and that no credentials are committed.

## After launch

- [ ] Submit a real inquiry and verify receipt and reply details.
- [ ] Check all pages, images, navigation, and external links on the live domain.
- [ ] Keep hosting, domain, and email renewal details documented securely.
- [ ] Review inquiry handling and privacy notice; inquiry emails are retained for two years.
