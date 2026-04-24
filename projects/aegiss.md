# AEGiSS

> **AI-powered surveillance that sees crowds, fire, and weapons — and alerts in real time.**

---

## Category

AI / Computer Vision — Intelligent Video Surveillance & Threat Detection System

---

## Tech Stack

| Layer | Technology |
|---|---|
| Backend | Django (Python) + Uvicorn (ASGI) |
| Database | SQLite |
| Auth | Django built-in auth |
| Frontend | Bootstrap 5 + Firebase JS SDK |
| Object Detection | YOLOv12 (crowd, fire, gun models) |
| Live Feed | OpenCV + MJPEG streaming |
| Real-time Alerts | Firebase Realtime Database |
| WebSockets | Django Channels |

---

## GitHub

https://github.com/NabeelSohail-30/FYP
---

## Description

AEGiSS (Artificially Enhanced Guarding & Intelligent Surveillance System) is an AI-powered video surveillance platform built on Django. It runs three specialized YOLO object detection models — trained for crowd detection, fire, and firearms — on both uploaded video files and live webcam feeds, pushing alerts in real time to a Firebase Realtime Database.

Uploaded videos are processed in background threads, with each frame analyzed at 75% confidence across all three models. Live feeds stream as MJPEG directly to the browser via OpenCV, with detections firing at an 85% confidence threshold. All alerts land on a real-time dashboard powered by the Firebase JS SDK, showing toast notifications as threats are detected, with filtering by label and source type. Detections are stored in both SQLite and Firebase for full auditability. The system runs on Django Channels over ASGI for WebSocket support, making it capable of handling concurrent live streaming and alert delivery without blocking.