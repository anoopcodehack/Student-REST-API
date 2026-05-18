# 🎓 College Student Management API

> A lightweight RESTful API for managing college student records — built with **pure Node.js** (no frameworks).

**Developer:** Anoop A &nbsp;|&nbsp; **Deadline:** 19 March 2026

---

## ✨ Features

- 📋 **Full CRUD** — Create, Read, Update, Delete student records
- ✅ **Validation** — Required fields, valid email format, year range (1–4)
- ⚠️ **Error Handling** — 400 for bad requests, 404 for not found/invalid routes
- 💾 **JSON Persistence** — Data stored in a local JSON file (no database needed)
- 📄 **Pagination** — Browse large datasets page by page
- 🔍 **Query Filtering** — Filter students by fields
- 🕐 **Timestamps** — Auto `createdAt` / `updatedAt` on every record

---

## 🚀 Quick Start

```bash
# 1. Clone the repo
git clone <repo-url>
cd student-api

# 2. Run the server
node server.js

# 3. Open Postman and hit
http://localhost:3000
```

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------------|------------------------|
| `POST` | `/students` | Create a new student |
| `GET` | `/students` | Get all students |
| `GET` | `/students/:id` | Get a single student |
| `PUT` | `/students/:id` | Update a student |
| `DELETE` | `/students/:id` | Delete a student |

---

## 🛡️ Validation Rules

| Field | Rule |
|-------|------|
| Name | Required |
| Email | Required, valid format |
| Year | Required, must be between 1 and 4 |

---

## 🧱 Tech Stack

- **Runtime:** Node.js
- **Module:** Built-in `http` (zero external dependencies)
- **Storage:** JSON file persistence
