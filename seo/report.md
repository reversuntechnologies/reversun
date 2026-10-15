# SEO, GEO and AEO Audit

Date: 2026-10-15
Scope: Full source audit of the Next.js project. No deployed URL was supplied, so live HTML, redirects, Core Web Vitals, indexing, backlink authority and competitor checks were not available.

## Executive Summary

Reversun has a strong technical search foundation: the App Router emits route metadata, canonical URLs are present on the main inner pages, robots rules permit major search and AI crawlers, the sitemap covers the five public routes, and the root layout publishes Organization, WebSite and SoftwareApplication JSON-LD. The main growth constraint is content depth: the client page explicitly says case studies are still upcoming, while the visible pages are primarily short service and product summaries. The sitemap previously emitted a new `lastModified` timestamp for every URL on every request; that was removed because it did not represent real editorial changes. The largest opportunity is to turn the existing services and products into evidence-rich landing pages with named proof, FAQs and case studies.

| Dimension | Score | Status | Takeaway |
|---|---:|---|---|
| SEO | 8/10 | Strong | Good crawl and metadata foundation; expand page depth and proof. |
| GEO | 7/10 | On Track | Entity and product facts are clearly represented; add authorship, evidence and references. |
| AEO | 4/10 | Needs Work | No visible FAQ/HowTo answer blocks or matching structured data were observed. |
| Combined | 19/30 | On Track | Technical basics are in place, but content authority is still developing. |

## Pages Audited

| URL | Type | Notes |
|---|---|---|
| `/` | Homepage | One visible H1, service/product routing cards, strong organization context. |
| `/services` | Service index | Four service areas with descriptions, tags and inquiry links. |
| `/product` | Product index | Presenza and QuanBit descriptions, features and metrics; client-side tab selection. |
| `/clients` | Case-study index | Page states that enterprise case studies and collaborations will be listed soon. |
| `/contact` | Contact | Email and inquiry paths for products and services. |
| `/robots.txt` | Crawl control | Allows all crawlers and lists the sitemap. |
| `/sitemap.xml` | Discovery | Lists all five public routes; dynamic timestamps removed in this audit. |
| `/llms.txt` | AI discovery | Includes company, product, service and endpoint summaries. |

## Findings

### SEO

| Signal | Finding | Status |
|---|---|---|
| Titles and descriptions | Root and all audited routes define explicit titles and descriptions. Inner titles include the brand through the root template. | Good |
| Canonicals | Root metadata and `/services`, `/product`, `/clients`, `/contact` define canonical URLs on `https://www.reversun.com`. | Good |
| Crawlability | `app/robots.ts` allows `/` for `*`, Googlebot, Bingbot, GPTBot, ChatGPT-User, ClaudeBot and PerplexityBot and points to `/sitemap.xml`. | Good |
| Sitemap freshness | `app/sitemap.ts` used `new Date()` for every URL on every request, creating synthetic freshness signals. The audit removes those timestamps. | Fixed |
| Headings and content | The homepage and service/product views expose meaningful H1/H2/H3 content, but the client route is explicitly upcoming and several pages are summary-level. | Needs Attention |
| Social metadata | Root and inner routes define Open Graph metadata; root defines a large Twitter card image. | Good |
| Structured data | Root layout includes Organization, WebSite and two SoftwareApplication entities. No BreadcrumbList or page-specific Service/Product graph was observed. | Needs Attention |
| Image accessibility | Source review did not establish complete alt-text coverage for every rendered image. Verify rendered HTML with a crawler. | Needs tool |
| Performance | No deployed URL was supplied, so real LCP, INP, CLS and mobile rendering were not assessed. | Needs tool |

### GEO

| Signal | Finding | Status |
|---|---|---|
| Entity consistency | Reversun, Presenza and QuanBit are named consistently in metadata, visible copy, JSON-LD and `public/llms.txt`. | Good |
| Company facts | Organization JSON-LD includes India, email, product/service descriptions and `sameAs` links to GitHub and QuanBit. | Good |
| AI crawl access | GPTBot, ChatGPT-User, ClaudeBot and PerplexityBot are explicitly allowed. | Good |
| Citation-ready facts | Product capabilities and service categories are concrete, but the site offers little independently verifiable evidence, author background or referenced research. | Needs Attention |
| E-E-A-T | No named authors, team credentials, testimonials, awards or press evidence were observed in the audited source. | Needs Attention |
| `llms.txt` | `public/llms.txt` gives a concise company overview, offerings and primary endpoints. | Good |

### AEO

| Signal | Finding | Status |
|---|---|---|
| Direct answers | Service and product descriptions answer basic what-is questions, but no question-style sections with concise answer blocks were observed. | Needs Attention |
| FAQ schema | No visible FAQ content or FAQPage JSON-LD was observed. | Missing |
| How-to content | No how-to page or HowTo structured data was observed. | Missing |
| Featured-snippet structure | Service cards use short descriptions and tags, but there are no comparison tables, numbered processes or explicit definition blocks. | Needs Attention |
| Voice/conversational coverage | The current copy targets broad service terms and product names; long-tail buyer questions are not covered. | Needs Attention |

## Priority Recommendations

| Priority | Issue | Dimension | Effort | Impact |
|---|---|---|---|---|
| High | Publish one real case study or deployment story with permission, problem, approach and measured outcome. | SEO/GEO | Medium | High |
| High | Expand `/services` into answer-first sections for each service, including audience, process, deliverables and legitimate proof. | SEO/AEO | Medium | High |
| High | Add a visible FAQ section to `/services`, `/product` or a dedicated FAQ route, then add FAQPage JSON-LD only for the same visible questions. | AEO | Low-Medium | High |
| Medium | Add page-specific `Service`, `SoftwareApplication` and `BreadcrumbList` JSON-LD where the visible page supports it. | SEO/GEO | Low-Medium | Medium |
| Medium | Add an About/team surface with named contributors, relevant credentials and company history. | GEO | Medium | High |
| Quick Win | Replace remaining unsupported superlatives or guarantees with verifiable wording and link to evidence where available. | SEO/GEO | Low | Medium |
| Quick Win | Run a deployed crawl and Lighthouse/PageSpeed check for image alt text, mobile rendering and Core Web Vitals. | SEO | Low | Medium |

## What's Working Well

- Metadata is unusually complete for a small App Router site: title templates, descriptions, canonicals, Open Graph, Twitter, robots and viewport are present.
- `app/layout.tsx` provides a coherent organization graph for Reversun, Presenza and QuanBit.
- `public/llms.txt` is already present and maps the public endpoints for AI discovery.
- Internal paths connect the homepage to services, products, clients and contact, and inquiry links carry product/service context.

## 30/60/90-Day Plan

### Days 0-30

- Deploy the current site and run Lighthouse/PageSpeed plus a rendered crawl.
- Add one approved case study or a clearly labeled product implementation story.
- Add an About/team page with real identity and credentials.
- Submit the sitemap in Google Search Console and Bing Webmaster Tools.

### Days 31-60

- Expand service and product pages around buyer questions and decision criteria.
- Add visible FAQs and matching structured data.
- Add BreadcrumbList and page-specific schema after validating it against visible content.
- Build a small, relevant outreach list for engineering, education technology and quantum computing publications.

### Days 61-90

- Publish two to four useful supporting articles tied to the service and product keyword map.
- Measure impressions, clicks, indexed pages and queries in Search Console; improve pages ranking in positions 5-20.
- Recheck AI answer engines for citations on the target questions and update `llms.txt` when public facts change.
