import express from "express";
const PORT = 8800;
const app = express();

app.get("/", (req, res) => {
    res.send("Hi!");
})

app.listen(PORT)