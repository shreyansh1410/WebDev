const mongoose = require("mongoose");
require("dotenv").config();

const uri = process.env.MONGODB_URI;

mongoose
  .connect(uri)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB...", err));

const toDoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  completed: { type: Boolean, required: true },
});

const todo = mongoose.model("todo", toDoSchema);

module.exports = {
  todo,
};
