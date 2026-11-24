# Staryog – Sound Healing webinar landing page (Next.js + Tailwind CSS v4)

```bash
npm install
npm run dev      # http://localhost:3000
```

- Copy and links: `lib/content.ts` (registration URL, FAQ, audience list)
- Lead form API: `app/api/lead/route.ts` saves to `data/leads.jsonl`; set `LEAD_WEBHOOK_URL` in `.env.local` to forward to Zapier / Make / Google Sheets
- Hero video: `public/video/hero.mp4`
