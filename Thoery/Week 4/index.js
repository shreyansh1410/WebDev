import express from "express";
const app = express();
const PORT = 3000;

app.get("/sum", (req, res) => {
  const num1 = parseInt(req.query.a);
  const num2 = parseInt(req.query.b);
  if (isNaN(num1) || isNaN(num2)) {
    return res.status(400).send("Invalid numbers"); // Error handling if input is not valid
  }
  res.send((num1 + num2).toString()); // Convert the result to string before sending
});

// Helper function to generate random todos
function getRandomTodos() {
  const todos = [
    { id: 1, title: "Buy groceries", description: "Milk, Eggs, Bread" },
    { id: 2, title: "Complete project", description: "Finish the report" },
    { id: 3, title: "Workout", description: "Go to the gym at 6 PM" },
    { id: 4, title: "Read a book", description: "Finish the novel" },
    { id: 5, title: "Cook dinner", description: "Prepare pasta for dinner" },
  ];

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

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
