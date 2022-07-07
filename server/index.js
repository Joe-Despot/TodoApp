const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json());

//routes

//create Todo
app.post("/todos", async (req, res) => {
  try {
    const { description } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO  todoTable (description) VALUES($1)",
      [description]
    );
    res.json(newTodo);
  } catch (err) {
    console.error(err.message);
  }
});

//get all todos

//get 1 todo

//update 1 todo

//delete 1 todo

app.listen(4200, () => {
  console.log("server started on port 4200");
});
