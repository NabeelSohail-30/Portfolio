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

### 3.3 Cards & Layout

| Issue | Severity | Fix |
|---|---|---|
| 7 leadership cards — orphaned 7th in 3-col grid | Low | Go to 6 or 8 cards |
| Card tilt effect missing from `lead-card` | Low | Add `lead-card` to JS tilt selector |
| No visual differentiation between job types in timeline | Low | Add role-type badge (Full-time / Freelance / Internship) |

### 3.4 Scroll & Interaction

| Issue | Severity | Fix |
|---|---|---|
| Scroll offset `-70` but navbar is `66px` — 4px gap | Low | Change to `target.offsetTop - 66` |
| Smooth scroll in CSS + JS — redundant (not harmful) | Low | Remove JS smooth scroll or remove CSS `scroll-behavior: smooth` |
| No `prefers-reduced-motion` check | Medium | Wrap animations |

---