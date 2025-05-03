# 📚 Book Management API

A simple RESTful API built with **Node.js** and **Express.js** to manage a list of books. This project supports basic CRUD operations (Create, Read, Delete) and is perfect for beginners learning how to build backend services with Express.

## 🚀 Features

- Add a new book
- Retrieve all books
- Retrieve a book by ID
- Delete a book by ID
- Uses in-memory data (no database required)
- Follows RESTful design principles
- JSON-based requests and responses

## 🛠️ Tech Stack

- **Node.js**
- **Express.js**
- **Postman** (for testing)

## 📂 Project Structure

book-management-api/
│
├── index.js # Main server file
├── .env # Environment variables
└── README.md # Project documentation

## 🧪 API Endpoints

| Method | Endpoint     | Description         |
| ------ | ------------ | ------------------- |
| POST   | `/book`      | Add a new book      |
| GET    | `/books`     | Get all books       |
| GET    | `/books/:id` | Get a book by ID    |
| DELETE | `/books/:id` | Delete a book by ID |

> All endpoints accept and return **JSON** data.

---

## 📬 Postman Collection

You can test all the API endpoints using the following Postman collection:

🔗 [Postman Collection Link](https://www.postman.com/collections/44616569-3d03716e-0ba3-436e-8695-24e13de23ce0)

Make sure the server is running before sending requests.

---

## ✨ Sample Book JSON

```json
{
  "nameOfBook": "The Alchemist",
  "author": "Paulo Coelho",
  "yearPublished": 1988,
  "genre": "Fiction"
}
```
