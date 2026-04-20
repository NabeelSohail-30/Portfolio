# Disano

> **Lightweight RBAC administration panel — manage users, roles, and permissions with confidence.**

---

## Category

Admin Panel — Role-Based Access Control (RBAC)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Backend | Laravel 12 (PHP 8.2+) |
| Database | MySQL |
| Auth | Laravel built-in (session-based) |
| Frontend | Blade + Tailwind CSS + Alpine.js |
| Build | Vite |

---

## GitHub

https://github.com/NabeelSohail-30/Disano
---

## Description

Disano is a clean, focused RBAC administration panel built on Laravel 12. It provides a full management interface for users, roles, and permissions — giving administrators fine-grained control over who can do what across an application.

The core data model connects users to roles, and roles to permissions, through explicit pivot models that keep access logic transparent and easy to audit. The panel includes complete CRUD for all three entities, role-to-permission assignment, and a dedicated profile management area for authenticated users. Built with server-rendered Blade templates, Tailwind CSS for styling, and Alpine.js for lightweight in-page interactivity — no heavy JavaScript framework required.