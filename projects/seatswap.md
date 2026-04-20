# SeatSwap

> **Airline seat swapping made social — trade seats with fellow passengers on the same flight.**

---

## Category

Travel Tech — Peer-to-Peer Seat Exchange Platform

---

## Tech Stack

| Layer | Technology |
|---|---|
| Backend | Laravel 12 (PHP 8.2+) |
| Database | SQLite |
| Auth | Laravel dual-guard (users + admins) + OTP verification |
| Frontend | Blade + Tailwind CSS 4 + Vanilla JS |
| Build | Vite 7 |
| Mail | SendGrid (production) |

---

## GitHub

https://github.com/NabeelSohail-30/SeatSwap
---

## Description

SeatSwap is a peer-to-peer seat exchange platform for airline passengers on the same flight. Instead of being stuck with an assigned seat, users can list their current seat, specify what they're looking for, and send or receive swap requests from other passengers on the same flight.

The swap lifecycle is fully managed: a user lists their seat, another sends a swap request, and the seat owner accepts or declines. On acceptance, the swap is confirmed, all other pending requests for that seat are auto-declined, and points transfer between both parties — keeping the exchange fair and incentivised. Users start with 10 points, with every transaction logged for full history. Authentication runs on OTP-based email verification for both signup and login, with a completely separate admin panel for managing airlines and cities. Built on a clean Laravel MVC architecture with no frontend framework — just Blade and Tailwind.