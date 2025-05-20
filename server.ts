import express from 'express'
import employeeRouter from './employee_router'
const server = express()

server.get("/",(req,res)=>{
    res.status(200).send("Hello World")
})

server.use("/employees",employeeRouter)

server.listen(3000,()=>{
    console.log("Server started on 3000")
})