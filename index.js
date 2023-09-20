const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");

app.use(express.json());
app.use(cors());

const books = [];

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/books", (req, res) => {
  res.json({
    books,
  });
});

app.post("/books", (req, res) => {
  const newBook = req.body;
  if (!newBook?.title || !newBook?.author) {
    res.status(400).json({
      error: "Please provide title and author both",
    });
    return;
  }
  const bookToCreate = {
    id: Date.now().toString(),
    ...newBook,
  };
  books.push(bookToCreate);
  res.json({
    book: bookToCreate,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
