const task = require("..")

// fetching all task 

const getAllTask=async(req,res)=>{
    try {
        const [data,field]=await req.db.query(`SELECT * FROM Task_manegment`)
        return res.status(200).send(data)
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

// creating a single task
const createTask=async(req,res)=>{
    const {task,description,status}=req.body
    try {
        await req.db.query(`
            INSERT INTO Task_manegment(task,description,status)
            values
            ("${task}","${description}","${status}");
            `)
        return res.status(201).json({
            message: "data inerted sucessfully"
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

// updating a pre existing task

const updateTask=async(req,res)=>{
    const id=req.params.id
    const {task,description,status}=req.body
    try {
        await req.db.query(
            ` UPDATE Task_manegment 
            SET 
            task="${task}",description="${description}",status="${status}"
            WHERE id=${id} 
            `)
            return res.status(201).json({
                message: "data updated sucessfully"
            })
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

// deleting a task

const deleteTask=async(req,res)=>{
    const id=req.params.id
    
    try {
        await req.db.query(
            ` DELETE FROM Task_manegment
            WHERE id=${id}
            `)
            return res.status(201).json({
                message: "data deleted sucessfully"
            })
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}


module.exports={getAllTask,createTask,updateTask,deleteTask}