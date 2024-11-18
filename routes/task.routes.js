const express=require("express")
const { getAllTask, createTask, updateTask, deleteTask } = require("../controllers/task.controller")
const taskRouter=express()

taskRouter.get("/tasks",getAllTask)
taskRouter.post("/tasks",createTask)
taskRouter.put("/tasks/:id",updateTask)
taskRouter.delete("/tasks/:id",deleteTask)

module.exports=taskRouter