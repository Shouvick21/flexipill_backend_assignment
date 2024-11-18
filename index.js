const express=require("express");
const server = require("./config/mysqlConnect");
const taskRouter = require("./routes/task.routes");

const app=express()
app.use(express.json())
let taskConnection;
(async()=>{
    try {
        taskConnection=await server()
        console.log("mysql conncted")
    } catch (error) {
        console.log(error)
    }
})()

// middleware to send the taskConnection to controller to perform operation

app.use((req, res, next) => {
    req.db = taskConnection; 
    next();
});

// main route
app.use("/api",taskRouter)

// it is for testing api running
app.get("/",(req,res)=>{
    res.send("running..")
})
app.listen(3405,()=>{
    console.log("http://localhost:3405")
})
