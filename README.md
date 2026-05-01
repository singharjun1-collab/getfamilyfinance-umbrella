# GetFamilyFinance Umbrella

Parent landing page for the GetFamilyFinance product family. Lives at https://getfamilyfinance.com and links out to each product subdomain.

## Stack

- Next.js 14 (App Router)
- React 18
- Plain CSS (no framework dependency, matches Stock Chatter)
- Deploys to Vercel

## Local development

```
npm install
npm run dev
```

Then open http://localhost:3000.

## Products linked from this page

| Product | URL |
|---|---|
| Family Finance | https://app.getfamilyfinance.com |
| Stock Chatter | https://stocktracker.getfamilyfinance.com |

To add a new product, edit the `PRODUCTS` array in `app/page.js`.
