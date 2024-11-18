
const {createConnection}=require("mysql2/promise")
require("dotenv").config()

const password=process.env.PASSWORD
const user=process.env.USER
const host=process.env.HOST
const server=async()=>{
    const connection=await createConnection({
        host,
        user,
        password,
        database: "Task_manegment"
    })
    connection.query(
        `create TABLE IF NOT EXISTS Task_manegment(
        id INT PRIMARY KEY AUTO_INCREMENT,
        task VARCHAR(60) NOT NULL,
        description TEXT,
        status VARCHAR(30)
        )
        `
    )
    return connection
}
module.exports=server