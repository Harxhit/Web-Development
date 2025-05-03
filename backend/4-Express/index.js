import express from "express";
import { config as configDotenv } from "dotenv";
configDotenv();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

let listOfBooks = [];
let id = 1;

// POST - Add a book
app.post("/book", (request, response) => {
  const { nameOfBook, author, yearPublished, genre } = request.body;

  if (!nameOfBook || !author || !yearPublished || !genre) {
    console.log("Error");
    return response.status(400).send("All fields are required");
  }

  const newBook = {
    id: id++,
    nameOfBook,
    author,
    yearPublished: Number(yearPublished),
    genre,
  };

  listOfBooks.push(newBook);
  response.status(201).send(newBook);
  console.log("Book Added");
});

// GET - All books
app.get("/books", (request, response) => {
  console.log(listOfBooks);
  response.status(200).send(listOfBooks);
});

// GET - Single book
app.get("/books/:id", (request, response) => {
  const id = parseInt(request.params.id);
  const book = listOfBooks.find((t) => t.id === id);

  if (book) {
    console.log("Book send succesfully");
    response.status(200).send(book);
  } else {
    response.status(404).send("Book not found");
  }
});

// DELETE - Delete a book (RESTful way)
app.delete("/books/:id", (request, response) => {
  const id = parseInt(request.params.id);
  const index = listOfBooks.findIndex((t) => t.id === id);

  if (index !== -1) {
    listOfBooks.splice(index, 1);
    console.log("Book deleted Succesfully");
    response.status(200).send("Book deleted successfully");
  } else {
    console.log("Book not found");
    response.status(404).send("Book not found");
  }
});

app.listen(port, () =>
  console.log(`Server is running at http://127.0.0.1:${port}`)
);
