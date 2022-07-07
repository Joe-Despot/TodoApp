const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const PORT = process.env.PORT || 4200;

//middleware
app.use(cors());
app.use(express.json());

if(process.env.NODE_ENV === "production"){
  
}

//create Todo
app.post("/todos", async (req, res) => {
  try {
    console.log(req.body);
    const { description } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO  todotable (description) VALUES($1) RETURNING *",
      [description]
    );
    res.json(newTodo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//get all todos
app.get("/todos", async(req, res)=>{
  try{
    const allTodos = await pool.query("SELECT * FROM todotable");
    res.json(allTodos.rows);
  }catch(err){
    console.error(err.message);
  }
})

//get 1 todo

app.get("/todos/:id", async(req, res)=>{
  try{
    const {id} = req.params;
    const todo = await pool.query("SELECT * FROM todotable WHERE todo_id = ($1)" , [id]);
    res.json(todo.rows[0]);
  }catch(err){
    console.error(err.message);
  }
});

//update 1 todo
app.put("/todos/:id", async(req, res)=>{
  try{
    const {id} = req.params;
    const {description} = req.body;
    const updateTodo = await pool.query("UPDATE todotable SET description = $1 WHERE todo_id = $2", [description, id]);
    res.json("Todo was updated");
  }catch(err){
    console.error(err.message);
  }
})

//delete 1 todo

app.delete("/todos/:id", async(req, res)=>{
  try{
    const {id} = req.params;
    const deleteTodo = await pool.query("DELETE FROM todotable WHERE todo_id = $1", [id]);
    res.json("Todo was deleted");
  }catch(err){
    console.error(err.message);
  }
})


app.listen(PORT, () => {
  console.log("server started on port ${PORT}");
});
