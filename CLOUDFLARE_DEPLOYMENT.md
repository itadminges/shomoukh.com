# Cloudflare production deployment

This application is configured for Cloudflare Workers through Vinext. `npm run build:vinext` creates the Worker bundle and `npm run deploy:cloudflare:production` publishes the production environment.

## One-time Cloudflare setup

1. Add `shomoukh.com` to Cloudflare and ensure the required DNS records are proxied.
2. Add the custom domain `shomoukh.com` (and `www.shomoukh.com` if used) to the `shomoukh-com` Worker in the Cloudflare dashboard.
3. In Resend, verify `shomoukh.com` and publish its SPF/DKIM records. Enable DMARC for the domain.
4. Create a Cloudflare Turnstile widget for `shomoukh.com` before enabling public forms. The current application includes throttling and a honeypot; Turnstile is the recommended final bot-protection layer.

## Secrets

Set the Resend key in Cloudflare; never place it in `wrangler.jsonc` or commit it to Git.

```powershell
npx wrangler secret put RESEND_API_KEY --env production
npx wrangler secret put RESEND_API_KEY --env staging
```

Use a newly rotated Resend key. The key previously supplied in chat must not be used in production.

## Deploy

```powershell
npm run build:vinext
npm run deploy:cloudflare:staging
npm run deploy:cloudflare:production
```

Before the production command, log in to the intended Cloudflare account using `npx wrangler login`. Confirm the deployed Worker has the `production` environment selected, then attach the custom domain in the dashboard.

## Post-deployment checks

1. Confirm `https://shomoukh.com` is served over HTTPS.
2. Submit one test form for each campus and confirm both the campus mailbox and `it@ges.om` receive it.
3. Confirm requests with an unapproved Origin return `403`.
4. Enable Cloudflare WAF managed rules and a rate-limit rule for `POST /api/form-submission`.
