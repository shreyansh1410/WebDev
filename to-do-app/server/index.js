const express = require("express");
const { createToDo, updateToDo } = require("./types");
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

app.post("/todo", (req, res) => {
  const createPayload = req.body;
  const parsedPayload = createToDo.safeParse(createPayload);
  if (!parsedPayload.success) {
    return res
      .status(411)
      .json({ msg: "Input validation failed  while creating" });
  }

  //put in mongodb
});

app.get("/todos", (req, res) => {});

app.put("/completed", (req, res) => {
  const id = req.body;
  const parsedId = updateToDo.safeParse(id);
  if (!parsedId.success) {
    return res
      .status(411)
      .json({ msg: "Input validation failed while updating" });
  }

  //update data in mongodb
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
