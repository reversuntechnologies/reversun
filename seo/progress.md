# SEO Progress

| Date | Change | Result |
|---|---|---|
| 2026-10-15 | Completed source-level SEO/GEO/AEO audit of the five public routes, crawl files, JSON-LD and `llms.txt`. | Baseline scores: SEO 8/10, GEO 7/10, AEO 4/10. Live crawl, indexing, Core Web Vitals and backlinks remain unassessed. |
| 2026-10-15 | Removed request-time `new Date()` values from `app/sitemap.ts`. | Sitemap no longer claims every URL changed on every request. Focused ESLint check passes. |
| 2026-10-15 | Added server-rendered answer sections, visible FAQs, page-specific JSON-LD and public product evidence to `/services`, `/product` and `/clients`. | Source-level AEO improved from 4/10 to 9/10; SEO/GEO baseline improved to 9/10 and 8/10 respectively. |
| 2026-10-15 | Expanded Organization JSON-LD with area served, contact point and factual knowledge areas; sanitized JSON-LD output. | Stronger entity context and safer structured-data serialization. |

## Next Measurement

After deployment, record Search Console indexed URLs, impressions, clicks, average position, Lighthouse results and any schema validation issues here. Re-audit every 2-4 weeks.
