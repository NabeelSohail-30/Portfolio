# Pyranex

> **Pyramid-driven growth assessments — discover your WHY, HOW, and WHAT.**

---

## Category

EdTech / Personal Development — Growth Assessment Platform

---

## Tech Stack

| Layer | Technology |
|---|---|
| Backend | Laravel 12 (PHP 8.2+) |
| Database | SQLite |
| Auth | Laravel dual-guard (users + admins) |
| Frontend | Blade + Tailwind CSS 4 + Vanilla JS |
| Build | Vite |
| PDF Generation | DomPDF |
| Mail | Laravel Mailable (queued) |

---

## GitHub

https://github.com/NabeelSohail-30/Pyranex
---

## Description

Pyranex is a pyramid-based personal and professional growth assessment platform built on Laravel 12. It uses the Solid Pyramid Model — structured around three layers: WHY, HOW, and WHAT — to help users understand where they stand and where they need to grow.

Users onboard by selecting a category, take a scored quiz mapped to the pyramid layers, and receive a detailed results breakdown targeting their weakest area. Each quiz submission calculates per-category scores, generates a PDF report, and emails it to the user automatically. A personal dashboard tracks attempt history, streaks, and insights over time. The platform runs separate authentication guards for users and admins, keeping the public-facing quiz experience cleanly separated from the admin management layer.