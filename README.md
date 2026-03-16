College Student Management REST API

Developer: Anoop A
Deadline: 19 March 2026

A RESTful API for managing college student records, built using Node.js http module without external frameworks. Supports CRUD operations, validation, error handling, and JSON responses.

Features

CRUD endpoints for students: Create, Read (all & single), Update, Delete

Validation: required fields, valid email, year between 1–4

Error handling: 400 for validation errors, 404 for not found or invalid routes

Bonus: JSON file persistence, pagination, query filtering, timestamps (createdAt / updatedAt)

Endpoints
Method	Endpoint	Description
POST	/students	Create a student
GET	/students	Get all students
GET	/students/:id	Get a single student
PUT	/students/:id	Update a student
DELETE	/students/:id	Delete a student
Quick Start

Clone repo:

git clone <your-repo-link>
cd student-api

Run server:

node server.js

Access API at http://localhost:3000 using Postman or similar tools.
