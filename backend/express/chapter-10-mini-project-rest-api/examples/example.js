// This example shows the shape of a small REST API.
const express = require("express");
const app = express();

app.use(express.json());

let books = [{ id: 1, title: "Clean Code Basics" }];

app.get("/books", (req, res) => res.json(books));
app.get("/books/:id", (req, res) => res.json(books.find(book => book.id === Number(req.params.id))));
app.post("/books", (req, res) => res.status(201).json(req.body));
app.delete("/books/:id", (req, res) => res.json({ message: "Deleted" }));
