const express = require("express");
const { createToDo, updateToDo } = require("./types");
const app = express();
const { todo } = require("./db");

app.use(express.json());

const PORT = process.env.PORT || 8800;

app.get("/", (req, res) => {
  res.send("Hi!");
});

/*
title: string
description: string
*/

app.post("/todo", async (req, res) => {
  const createPayload = req.body;
  const parsedPayload = createToDo.safeParse(createPayload);
  if (!parsedPayload.success) {
    return res
      .status(411)
      .json({ msg: "Input validation failed  while creating" });
  }

  //put in mongodb
  try {
    await todo.create({
      title: createPayload.title,
      description: createPayload.description,
      completed: false,
    });
    return res.json({ msg: "User created successfully" });
  } catch (err) {
    return res.json({ error: err.message });
  }
});

app.get("/todos", async (req, res) => {
  try {
    const todos = await todo.find({});
    return res.json({ todos });
  } catch (err) {
    return res.status(500).json({ msg: "Failed to retrieve todos" });
  }
});

app.put("/completed", async (req, res) => {
  const id = req.body.id;
  const parsedId = updateToDo.safeParse({ id });
  if (!parsedId.success) {
    return res
      .status(411)
      .json({ msg: "Input validation failed while updating" });
  }

  //update data in mongodb
  try {
    const todoItem = await todo.findById(req.body.id);

    if (!todoItem) {
      return res.status(404).json({ msg: "Todo not found" });
    }

    todoItem.completed = true;
    await todoItem.save();

    return res.json({ msg: "Todo marked as completed" });
  } catch (err) {
    return res
      .status(500)
      .json({ msg: "Failed to update todo", error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
