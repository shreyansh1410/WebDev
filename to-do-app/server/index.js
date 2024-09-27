import express from "express";
const app = express();

app.use(express.json());

const PORT = process.env.PORT || 8800;

app.get("/", (req, res) => {
  res.send("Hi!");
});

/*
title: string
description: string
*/

app.post("/todo", (req, res) => {});

app.get("/todos", (req, res) => {});

app.put("/completed", (req, res) => {});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
