import express from "express";
import cors from "cors";
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

app.get("/sum", (req, res) => {
  const num1 = parseInt(req.query.a);
  const num2 = parseInt(req.query.b);
  if (isNaN(num1) || isNaN(num2)) {
    return res.status(400).send("Invalid numbers"); // Error handling if input is not valid
  }
  res.send((num1 + num2).toString()); // Convert the result to string before sending
});

const todos = [
  { id: 1, title: "Buy groceries", description: "Milk, Eggs, Bread" },
  { id: 2, title: "Complete project", description: "Finish the report" },
  { id: 3, title: "Workout", description: "Go to the gym at 6 PM" },
  { id: 4, title: "Read a book", description: "Finish the novel" },
  { id: 5, title: "Cook dinner", description: "Prepare pasta for dinner" },
];

// Helper function to generate random todos
function getRandomTodos() {
  // Get a random number of todos (1 to 5)
  const randomCount = Math.floor(Math.random() * todos.length) + 1;

  // Shuffle and slice the array to get random todos
  const shuffled = todos.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, randomCount);
}

// Route for fetching random todos
app.get("/todos", (req, res) => {
  const randomTodos = getRandomTodos();
  res.json(randomTodos);
});

//fetch todo with a given id
app.get("/todo", (req, res) => {
  const todo = todos.find((t) => t.id === parseInt(req.query.id));
  res.json({ todo });
});

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
