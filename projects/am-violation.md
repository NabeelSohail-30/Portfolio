# VioTrack NYC

> **Automated NYC building violation management — fetch, normalize, generate, and mail at scale.**

---

## Category

Government & Compliance Tool — Property Violation Management System

---

## Tech Stack

| Layer | Technology |
|---|---|
| Backend | Laravel 8 (PHP) |
| Database | MySQL |
| Auth & RBAC | Spatie Laravel Permission |
| Frontend | Blade + Bootstrap 5 (Hope UI) + jQuery + Vue 2 |
| Build | Laravel Mix (SCSS + JS) |
| PDF Generation | DOMPDF + FPDI / FPDF |
| Mail Delivery | Click2Mail API |
| Data Tables | Yajra Laravel DataTables |

---

## GitHub

https://github.com/NabeelSohail-30/AM-Violation
---

## Description

VioTrack NYC is an automated property violation management system built for New York City real estate operations. It connects to multiple external violation APIs, pulls and normalizes building violation records, validates addresses against NYC address services, and handles the full downstream workflow — generating PDF violation notices and submitting batched mail jobs through Click2Mail.

The system runs on a scheduled pipeline: violations are fetched weekly, addresses verified nightly, and mail jobs created and submitted throughout the day on a rolling schedule. Each batch packages up to 100 records into a print-ready PDF mailing, with job status tracked automatically via hourly polling. The admin dashboard provides role-based access control for managing users, roles, permissions, and monitoring the pipeline — all built on top of Hope UI with DataTables for high-volume record browsing.