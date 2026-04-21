# SnipeItNow

> **AI-powered Dubai property discovery — find undervalued real estate before anyone else does.**

---

## Category

PropTech / SaaS — Real Estate Discovery & Investment Intelligence Platform

---

## Tech Stack

| Layer | Technology |
|---|---|
| Backend | Laravel 12 (PHP 8.2+) |
| Database | MySQL |
| Auth | Laravel built-in (session-based) |
| Frontend | Blade + Tailwind CSS + Alpine.js |
| Build | Vite |
| Property Data | Bayut API (via RapidAPI) |
| AI Insights | OpenAI API |
| Billing | Stripe + Laravel Cashier |

---

## GitHub

https://github.com/NabeelSohail-30/Snipeitnow
---

## Description

SnipeItNow is a subscription-based SaaS platform for real estate property discovery in Dubai and the broader Middle East market. It pulls live property listings from the Bayut API, scores each property for undervaluation by comparing price per square foot against community averages, and surfaces the best deals with a normalized 1–10 deal score.

On top of the scoring engine, each property detail page is powered by OpenAI to generate a tailored pros and cons analysis — giving users AI-driven investment context at a glance. Users can save favorites, track listings, and upgrade from a Free plan to Pro for expanded pagination and full access. Subscriptions are handled through Stripe with support for monthly and yearly billing, plan swaps, cancellation, and grace periods via Laravel Cashier. Built as a clean Laravel MVC SaaS with a database-backed queue and cache layer for reliability at scale.