const fs = require("fs");
const path = require("path");
const http = require("http");
const port = 8000;

const server = http.createServer((req, res) => {
  
  if (req.url === "/bad-request") {
    const errorPath = path.join(__dirname, "400.html");
    fs.readFile(errorPath, "utf8", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/html" });
        res.end("<h1>500 - Could not load 400.html</h1>");
      } else {
        res.writeHead(400, { "Content-Type": "text/html" });
        res.end(data);
      }
    });
    return;
  }

  // Serve requested file (default to index.html)
  const filePath = path.join(
    __dirname,
    req.url === "/" ? "index.html" : req.url
  );
  const ext = path.extname(filePath).toLowerCase();
  const mimeTypes = {
    ".html": "text/html",
    ".css": "text/css",
    ".js": "text/javascript",
  };
  const contentType = mimeTypes[ext] || "application/octet-stream";

  fs.readFile(filePath, "utf8", (err, content) => {
    if (err) {
      if (err.code === "ENOENT") {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("<h1>404 - Page Not Found</h1>");
      } else {
        res.writeHead(500, { "Content-Type": "text/html" });
        res.end("<h1>500 - Internal Server Error</h1>");
      }
    } else {
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content);
    }
  });
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
