const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const jwtPassword = "123456";

const uri = "mongodb+srv://shreyansh14010:uXL6AnD8NAV9GCfs@cluster0.ejqqv.mongodb.net/myDatabase?retryWrites=true&w=majority";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

  const User = mongoose.model("User", new mongoose.Schema({
    name: String,
    email: String,
    password: String,
  }, { collection: 'myCustomCollection' }));
  

const app = express();
app.use(express.json());

// Define a route for the root URL
app.get("/", (req, res) => {
  res.send("Welcome to the home page!");
});

// Define other routes...
app.post("/signup", async (req, res) => {
  const { email, password, name } = req.body;

  try {
    const existingUser = await User.findOne({ email: email });

    if (existingUser) {
      return res.status(400).json({
        msg: "User already exists"
      });
    }

    const user = new User({
      name: name,
      email: email,
      password: password
    });
    
    await user.save();
    return res.json({
      msg: "User created successfully"
    });
  } catch (err) {
    return res.status(500).json({ msg: "An error occurred", error: err.message });
  }
});

// Uncomment and fix the other routes if needed
// ...

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
