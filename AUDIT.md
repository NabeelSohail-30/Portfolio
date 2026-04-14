# Portfolio Audit — Mohammad Nabeel Sohail
**Audited:** April 2026  
**Goal:** Brand building, international opportunities, client acquisition  
**Files:** index.html · css/style.css · js/script.js

---

## Executive Summary

The portfolio has a strong visual foundation — the deep-space terminal aesthetic is distinctive, technically cohesive, and memorable. The content has been substantially updated and now accurately reflects your profile. However, there are gaps that will directly cost you opportunities: no personal photo, no real project links, no SEO metadata, missing structural sections (education, certifications), accessibility issues that hurt search ranking, and brand copy that undersells your key differentiators.

**Overall readiness rating: 5.5 / 10**  
Good bones. Needs a focused pass before it's ready to share with recruiters or clients.

---

## 1. CRITICAL ISSUES — Fix Before Sharing

These are blockers. Each one alone can sink a first impression.

### 1.1 No Personal Photo
**Severity: Critical**  
Both the hero HUD frame and about section use Unsplash stock photos (keyboard and generic "developer at work"). For a personal branding portfolio this is a dealbreaker.

- Recruiters and clients form trust through faces. A stock photo signals "placeholder."
- Your multicultural background, INFJ personality, and community leadership persona should be visible — they differentiate you.
- The HUD frame design is built to showcase a real profile photo.

**Fix:** Replace both images with real photos. Hero: professional/semi-formal headshot or workspace photo. About: a natural photo of you. No studio backdrop needed — authenticity > polish.

---

### 1.2 Projects Section Is Dummy
**Severity: Critical**  
All three project "View Project" buttons link to `href="#"`. This is the worst thing a portfolio can show. A recruiter clicking a project link and going nowhere reads as: unfinished, fake, or careless.

- AI CCTV Surveillance System — no GitHub, no demo, no case study
- EventBridgeAI — no GitHub, no demo
- WatchHub — no GitHub, no demo

**Fix (short term):** Either link to GitHub repos, or replace the "View Project" button with a "Case Study" style in-page modal/expanded description. If repos aren't public, add a note: "Private repo — available on request."  
**Fix (long term):** Add 2–3 real, public GitHub repos to this section with proper descriptions.

---

### 1.5 No Favicon
**Severity: Medium — visible in browser tab and bookmarks**  
No favicon defined. Browser shows a blank/generic icon. This matters: it's part of brand recognition and professional polish.

**Fix:** Create a minimal favicon — the `sys/nabeel_` monogram or just `N` in accent blue on dark background works. Add:
```html
<link rel="icon" type="image/svg+xml" href="favicon.svg"/>
<link rel="icon" type="image/png" href="favicon.png"/>
```


### 2.5 Projects Section

Covered in Critical Issues (1.2). Additionally:

**Only 3 projects for 3+ years of engineering is thin.**  
Even if some are private or NDA'd, a portfolio page should show at least 5–6 entries. Consider adding entries for:
- Any client work from the freelance consultancy (even anonymized)
- Internal FTech tools (described generally, no sensitive details)
- Your IEEE/ACM technical workshops as "projects"
- Open-source contributions

---


---

## 3. UX / UI AUDIT

### 3.1 Navigation

| Issue | Severity | Fix |
|---|---|---|
| Leadership section missing from nav | Medium | Add `<a href="#leadership">` |
| Only 4 items in footer nav | Low | Add Leadership, Stack, Contact |
| No "Back to Top" button | Low | Add fixed button after ~3 sections |
| Active nav highlighting uses `style.color` not class | Low | Use `classList.toggle('active')` for reliability |

### 3.2 Hero

| Issue | Severity | Fix |
|---|---|---|
| 3 CTA buttons — decision paralysis | Medium | Reduce to 2 (View Work + Download CV) |
| HUD pills showing "AI" not "GenAI / LLMs" | Medium | Fix the text regression |
| No nationality/mobility signal | Medium | Add `🇬🇧 British National · Open to Relocation` badge |
| Stock photo in HUD frame | Critical | Replace with real photo |

### 3.3 Cards & Layout

| Issue | Severity | Fix |
|---|---|---|
| 7 leadership cards — orphaned 7th in 3-col grid | Low | Go to 6 or 8 cards |
| Card tilt effect missing from `lead-card` | Low | Add `lead-card` to JS tilt selector |
| No visual differentiation between job types in timeline | Low | Add role-type badge (Full-time / Freelance / Internship) |
| Terminal height fixed at 200px — 4-line sequences may overflow | Low | Increase to `min-height: 200px` |

### 3.4 Scroll & Interaction

| Issue | Severity | Fix |
|---|---|---|
| Scroll offset `-70` but navbar is `66px` — 4px gap | Low | Change to `target.offsetTop - 66` |
| Smooth scroll in CSS + JS — redundant (not harmful) | Low | Remove JS smooth scroll or remove CSS `scroll-behavior: smooth` |
| No `prefers-reduced-motion` check | Medium | Wrap animations — see Section 6 |

---

## 4. TECHNICAL AUDIT

### 4.1 HTML

| Issue | Severity |
|---|---|
| Missing `<main>` element wrapping all sections | Medium (accessibility + SEO) |
| Missing skip-to-content link | Medium (accessibility) |
| No `<meta name="description">` | Critical (SEO) |
| No Open Graph / Twitter Card meta tags | Critical (social sharing) |
| No favicon | Medium |
| No JSON-LD structured data (Person schema) | Medium (rich results) |
| No `<canonical>` URL | Low |
| `href="#"` on all project links | Critical |
| Freelance role has no start date | Low |

### 4.2 CSS

| Issue | Severity |
|---|---|
| `cursor: none` on `body` with no mobile fallback | Medium — on touch devices, cursor is hidden unnecessarily. Add: `@media (pointer: coarse) { body { cursor: auto; } .cursor, .cursor-follower { display: none; } }` |
| No `prefers-reduced-motion` — floatY, slideIn, scanbar all animate unconditionally | Medium — Required for accessibility. Add: `@media (prefers-reduced-motion: reduce) { *, *::before, *::after { animation: none !important; transition: none !important; } }` |
| `rd-4` is the last stagger delay (0.32s) — `rd-5`, `rd-6` used in HTML but not in CSS | Low — they won't break, they just won't delay. Add `.rd-5 { transition-delay: 0.40s; } .rd-6 { transition-delay: 0.48s; }` |
| `.hud-img` has fixed `height: 400px` — may not adapt well to different image aspect ratios | Low |
| Both `scroll-behavior: smooth` (CSS) and JS smooth scroll are active | Low — redundant, not harmful |
| Font Awesome loaded from CDN for every icon — ~30KB initial load | Low |

### 4.3 JavaScript

| Issue | Severity |
|---|---|
| `highlightNav()` runs on every scroll event — no throttle | Low — add `requestAnimationFrame` throttle |
| Particle canvas: O(n²) distance check — 110 particles × 60fps ≈ 363,000 checks/sec | Medium on low-end devices. Reduce to 70 particles on mobile, or use a spatial grid |
| No `prefers-reduced-motion` check before starting animations | Medium |
| `nextSequence()` sets `innerHTML = ''` each cycle — fine, but terminal content flickers on cycle | Low |
| `cursor: none` on body — JS cursor still runs on mobile, wasting rAF cycles | Low |
| `window.addEventListener('scroll', highlightNav)` and navbar scroll — two separate scroll listeners; could be merged | Low |
| `const sections = document.querySelectorAll('section[id]')` called once — won't pick up dynamically added sections, but fine for static page | Note |
| No `defer` or `async` on `<script src="js/script.js">` — currently at bottom of body, which is fine | Note |

**Positive findings in JS:**
- Particle canvas has proper resize handler ✓
- `{ passive: true }` on scroll listeners ✓
- Null checks on most `getElementById` calls ✓
- Terminal typer clears between sequences ✓
- Dynamic footer year working ✓

---

## 5. ACCESSIBILITY AUDIT

| Issue | Severity | Fix |
|---|---|---|
| `cursor: none` on body — keyboard users and accessibility tools lose the cursor | High | Add `@media (pointer: coarse)` fallback + `prefers-reduced-motion` |
| No visible focus ring — custom cursor masks native focus indicator | High | Add `:focus-visible` outline: `*:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; }` |
| No skip navigation link | High | Add `<a href="#main-content" class="skip-link">Skip to content</a>` before navbar |
| Missing `<main>` landmark | Medium | Wrap all `<section>` elements in `<main id="main-content">` |
| Some social icon links lack descriptive `aria-label` — Instagram was added correctly | Low | Verify all social icons have aria-label |
| Color contrast — accent blue `#3A4EFF` on dark `#050A0F` | Medium | Verify WCAG AA ratio (4.5:1 required for normal text). Blue on very dark may pass but should be tested with a contrast checker |
| Images use generic alt text (`"Developer workspace"`, `"Developer at work"`) | Low | After replacing with real photos, use descriptive alt text |
| Hamburger button has `aria-label="Toggle menu"` ✓ but no `aria-expanded` attribute | Low | Add `aria-expanded="false"` and toggle it in JS |

---

## 6. PERFORMANCE AUDIT

| Area | Finding | Recommendation |
|---|---|---|
| **LCP (Largest Contentful Paint)** | Hero image has `loading="eager"` ✓. But it's an Unsplash URL — external request adds latency | Host the real photo locally |
| **Google Fonts** | Two `preconnect` hints used ✓. Fonts are `display=swap` ✓ | Consider self-hosting fonts for zero external dependency |
| **Font Awesome CDN** | Full FA 6.5 CSS loaded (~30KB gzipped) for ~30 icons | Use a subset or icon SVG sprite |
| **Particle canvas** | 110 particles, O(n²) connections, 60fps = expensive on mid-range devices | Reduce particles to 70 on `window.innerWidth < 768`, disable connections on mobile |
| **Animations** | `floatY`, `scanSweep`, `blink`, `pulseGreen` all run unconditionally | Gate on `prefers-reduced-motion` |
| **Image compression** | Unsplash URL uses `?w=700&q=85` ✓. Real photos should be WebP, max 200KB | Use `<picture>` with WebP + JPEG fallback |
| **No caching headers** | Static files need cache headers set at server/hosting level | Set `Cache-Control: max-age=31536000` for assets |
| **No resource hints for script** | `script.js` loads at bottom of body ✓. No `preload` needed | Fine as-is |

---

## 7. SEO — COMPLETE IMPLEMENTATION

Add the following to `<head>` in `index.html`. Replace placeholders once you have a live URL and real OG image.

```html
<!-- Base SEO -->
<meta name="description" content="Mohammad Nabeel Sohail — Senior AI Engineer & Team Lead at FTech Solutions. Building enterprise-grade LLMs, RAG pipelines, and agentic AI systems at scale. British national based in Karachi, open to international opportunities."/>
<meta name="keywords" content="AI Engineer, GenAI, LLM, RAG, Agentic AI, Full Stack, Python, Django, FastAPI, MERN, Karachi, Pakistan, British"/>
<meta name="author" content="Mohammad Nabeel Sohail"/>
<link rel="canonical" href="https://yourdomain.com/"/>

<!-- Open Graph (LinkedIn, Facebook, WhatsApp) -->
<meta property="og:type" content="website"/>
<meta property="og:title" content="Mohammad Nabeel Sohail — Senior AI Engineer & Team Lead"/>
<meta property="og:description" content="Building enterprise-grade AI systems used by millions. LLMs · RAG · Agentic AI · Full Stack. British national, open to international roles."/>
<meta property="og:image" content="https://yourdomain.com/og-image.jpg"/>
<meta property="og:url" content="https://yourdomain.com/"/>
<meta property="og:site_name" content="Nabeel Sohail Portfolio"/>

<!-- Twitter / X Card -->
<meta name="twitter:card" content="summary_large_image"/>
<meta name="twitter:title" content="Mohammad Nabeel Sohail — Senior AI Engineer & Team Lead"/>
<meta name="twitter:description" content="Building enterprise AI at scale. LLMs · RAG · Agentic AI. British national, open to international roles."/>
<meta name="twitter:image" content="https://yourdomain.com/og-image.jpg"/>

<!-- JSON-LD Person Schema -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Mohammad Nabeel Sohail",
  "jobTitle": "Senior AI Engineer & Team Lead",
  "url": "https://yourdomain.com",
  "email": "nabeel.dev.ai@gmail.com",
  "sameAs": [
    "https://www.linkedin.com/in/nabeel30/",
    "https://github.com/NabeelSohail-30",
    "https://www.instagram.com/coder_nabeel30/"
  ],
  "knowsAbout": ["Artificial Intelligence", "Large Language Models", "RAG", "Full Stack Development", "Python", "FastAPI", "AWS"],
  "nationality": "British"
}
</script>

<!-- Favicon -->
<link rel="icon" type="image/svg+xml" href="favicon.svg"/>
```

---

## 8. MOBILE AUDIT

| Area | Finding |
|---|---|
| Hamburger menu | Exists, toggles correctly ✓ |
| Responsive grid | CSS uses `clamp()` for font sizes ✓ — need to verify breakpoints for timeline and lead-grid |
| Custom cursor on touch | `cursor: none` on body should be removed for touch devices. Add `@media (pointer: coarse) { body { cursor: auto; } .cursor, .cursor-follower { display: none; } }` |
| Particle canvas on mobile | 110 particles at 60fps is expensive on mobile. Reduce to 40–50 when `window.innerWidth < 768` |
| Hero metrics on mobile | 3 metrics in a row may wrap awkwardly on small screens — verify |
| Hero CTA row | 3 buttons may stack to 3 rows on mobile. With only 2 buttons (after fix) this is resolved |
| Terminal box | Fixed `height: 200px` — on mobile, the terminal text is dense and may not be legible at small sizes |

---

## 9. BRAND POSITIONING AUDIT

### 9.1 Your Key Differentiators (currently undersold)

| Differentiator | Current Treatment | Should Be |
|---|---|---|
| AI at millions-user scale | Mentioned in hero desc + experience | Also in about badge, og:description, hero status |
| British national / EU mobility | Buried in about body text | In hero (badge), og:description, CTA section |
| End-to-end AI ownership (research → production) | Listed in experience | Pull-quoted in "Why Me" section |
| 5+ years community leadership alongside engineering | Leadership section exists | Mention in about section and hero eyebrow context |
| Former lecturer — can mentor and train | In experience only | In services section card #4 |
| Multicultural background | In about body | Strong brand story — should anchor the about section lead |

### 9.2 The Quote You're Not Using

This line from content.md is gold and belongs on the page:

> *"I don't just build AI features. I build AI infrastructure that holds under real-world pressure, for real-world users, at real-world scale."*

Add it as a pull-quote in the About section or CTA section.

### 9.3 Target Audience Clarity

The portfolio currently serves three audiences but doesn't speak distinctly to any of them:

1. **International recruiters** (UK/EU AI roles) — need: British passport callout, scale credentials, GitHub activity
2. **Freelance clients** (Pakistan + international) — need: services section with pricing/process clarity, contact form, testimonials
3. **Community / peers** — need: blog, thought leadership, LinkedIn signal

**Recommendation:** Primary audience should be #1 and #2. Add a subtle visual split in the CTA section: "Hiring internationally? I hold a British passport." vs "Need an AI system built? Let's scope it."

### 9.4 LinkedIn / GitHub Signal

The portfolio links to both profiles but shows nothing from them:
- No GitHub contribution graph embed or stats
- No LinkedIn recommendations displayed
- No recent posts / activity signal

At minimum, pull 2–3 pinned GitHub repos into the Projects section. Even if private, showing the repo name + description + star count signals active development.

---

## 10. PRIORITIZED ACTION PLAN

### Phase 1 — Pre-Launch Blockers (do before sharing with anyone)

| # | Task | Time |
|---|---|---|
| 1 | Get a personal photo taken / select best existing photo | — |
| 2 | Replace both stock images with real photos | 30 min |
| 3 | Add all SEO meta tags (description, OG, Twitter, JSON-LD) | 45 min |
| 4 | Create and add favicon | 20 min |
| 5 | Fix HUD pills "AI" → "GenAI / LLMs" | 5 min |
| 6 | Add personal nationality badge to hero | 15 min |
| 7 | Fix project links (GitHub or "available on request") | 30 min |

### Phase 2 — Brand Optimization (before promoting heavily)

| # | Task | Time |
|---|---|---|
| 8 | Add memorable quote to about or CTA section | 15 min |
| 9 | Add Leadership to navbar + renumber | 15 min |
| 10 | Add Education section (BSCS, SSUET) | 30 min |
| 11 | Add Certifications section (7 certs) | 45 min |
| 12 | Add contact form (Formspree / Netlify Forms / EmailJS — free) | 60 min |
| 13 | Fix 7-card leadership grid (make 6 or 8) | 15 min |
| 14 | Reduce CTA buttons from 3 to 2 in hero | 5 min |
| 15 | Add role-type badge to timeline entries | 20 min |
| 16 | Add `prefers-reduced-motion` CSS rule | 10 min |
| 17 | Add `@media (pointer: coarse)` cursor reset | 5 min |
| 18 | Add `:focus-visible` outline styles | 10 min |
| 19 | Add `<main>` wrapper and skip-to-content link | 10 min |
| 20 | Add `.rd-5` and `.rd-6` transition delays in CSS | 5 min |

### Phase 3 — Growth & Conversion (ongoing)

| # | Task | Notes |
|---|---|---|
| 21 | Add Testimonials section | Get 2–3 LinkedIn recommendations and pull-quote them |
| 22 | Add 3 more real projects (or detailed case studies) | Most impactful for client conversion |
| 23 | Add "Why Me" / key differentiators section | British passport, scale, AI leadership combo |
| 24 | Host on custom domain (nabeel.dev or similar) | Domain is part of brand |
| 25 | Add Google Analytics / Plausible | Know who's visiting and from where |
| 26 | Add blog or thought leadership section | Signals expertise, feeds SEO |
| 27 | Reduce particle count on mobile | Performance for mobile visitors |
| 28 | Self-host fonts | Removes Google dependency, faster load |
| 29 | Add GitHub activity / pinned repos | Live signal of engineering activity |
| 30 | Add `aria-expanded` to hamburger | Accessibility completeness |

---

## 11. WHAT'S ALREADY WORKING WELL

Don't change these.

- **Visual design** — Deep-space terminal aesthetic is cohesive, memorable, and genre-appropriate for an AI engineer. Stands out against typical blue-gradient developer portfolios.
- **Terminal typer animation** — Genuinely clever and thematic. Shows personality without being gimmicky.
- **Card tilt / border trace hover effects** — Polished micro-interactions that reward exploration.
- **Particle canvas** — Adds depth to hero without being distracting.
- **Font pairing** — Syne (display) + JetBrains Mono (mono) + DM Sans (body) is an excellent, professional trio.
- **Section numbering** — 01/02/03 index pattern gives the page a systematic, engineered feel.
- **Timeline experience layout** — Clean, readable, shows progression well.
- **Dynamic footer year** — Small detail, done right.
- **Smooth scroll + reveal animations** — Transitions feel considered.
- **HUD frame concept** — The photo frame with corner brackets and scan bar is original.
- **Content accuracy** — Roles, dates, tech stack are now aligned with reality.
- **All social links wired** — GitHub, LinkedIn, Instagram, email all correct.
- **CV download** — Available in hero and experience section.

---

## Summary Score Card

| Category | Score | Notes |
|---|---|---|
| Visual Design | 8 / 10 | Strong and distinctive |
| Content Accuracy | 8 / 10 | Accurate now, some copy improvements needed |
| Brand Positioning | 5 / 10 | Key differentiators undersold |
| SEO / Discoverability | 1 / 10 | No meta tags at all |
| Accessibility | 3 / 10 | Cursor, focus, landmark issues |
| Performance | 6 / 10 | Good but particle cost + no reduced-motion |
| Functionality | 5 / 10 | Dead project links, no contact form |
| Mobile Experience | 6 / 10 | Cursor + particle issues on touch |
| Completeness | 5 / 10 | Missing education, certs, testimonials |
| **Overall** | **5.5 / 10** | **Good foundation. Focused fixes needed.** |

---

*Audit prepared by Claude Code — April 2026*
