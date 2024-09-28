// app.js
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require("body-parser");

app.use(bodyParser.json());

// Define a route for the root URL
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.post("/conversations", (req, res) => {
    console.log(req.query.msg);
    // const message = req.body.msg;
    // console.log(message);
  res.send({
    msg: "2+2=4",
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
