# Speech Pro

> **Guided speech therapy in your browser — record, compare, and progress one exercise at a time.**

---

## Category

HealthTech — Speech Therapy Management & Progress Tracking Platform

---

## Tech Stack

| Layer | Technology |
|---|---|
| Backend | Laravel 12 (PHP 8.2+) |
| Database | MySQL |
| Auth | Laravel dual-guard (patients + admins) |
| Frontend | Blade + Tailwind CSS + Alpine.js |
| Build | Vite |
| Text-to-Speech | Google Cloud TTS + ElevenLabs |
| Audio Recording | Browser MediaRecorder API |

---

## GitHub

https://github.com/NabeelSohail-30/speech-pro
---

## Description

Speech Pro is a structured speech therapy management system built on Laravel 12. Patients enroll in therapy programs made up of sequential speech exercises, recording themselves speaking against an expected text and receiving instant feedback based on how closely their speech matches — powered by PHP's native `similar_text()` function with an 85% similarity threshold.

Exercises unlock progressively: only the first is available on enrollment, with each completion unlocking the next. Finishing the final exercise marks the full therapy as complete. Audio prompts are generated via Google Cloud Text-to-Speech and ElevenLabs, while recording and playback happen entirely in-browser through the MediaRecorder API — no plugins required. The platform runs separate authentication guards for patients and admins, with a database-backed session and queue layer keeping everything reliable across environments.