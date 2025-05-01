# Simple Node.js HTTP File Server

This project is a basic Node.js HTTP server that serves static files (HTML, CSS, JS) and handles custom routes, including a simulated **bad request** handler. It does not use Express or any external libraries.

---

## 🚀 Features

- Serves HTML, CSS, and JavaScript files
- Handles root (`/`) by serving `index.html`
- Serves a custom `400.html` page on the `/bad-request` route
- Handles `404 Not Found` and `500 Internal Server Error` cases
- Dynamically detects MIME types based on file extensions

---

## 🧠 Topics Covered

- `http.createServer()` to create a web server
- Reading files asynchronously using `fs.readFile()`
- Handling routes and URLs
- Serving static content like `.html`, `.css`, and `.js`
- MIME type handling based on file extensions
- Basic error handling (404, 500)
- Serving a custom error file (400.html) on specific route

---

## ▶️ How to Run

1. Make sure you have Node.js installed.
2. Open terminal in the project folder.
3. Run the server:

```bash
node server.js
```

4. Open browser and visit:

- `http://localhost:8000` → loads `index.html`
- `http://localhost:8000/bad-request` → shows custom `400.html` page
- `http://localhost:8000/unknownfile.html` → shows 404 page

---

## 🛠️ Notes

- If Tailwind CSS is to be used, it must be compiled or linked via CDN in your HTML.
- You can expand this into a mini Express-like server by adding routing logic.

---

## 📚 License

This is a learning project. Use freely.
