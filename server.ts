import express from 'express'
import employeeRouter from './employee_router'
import { loggerMiddleware } from './loggerMiddleware'
import { processTimeMiddleware } from './processTimeMiddleware'
const server = express()

server.use(express.json())
server.use(processTimeMiddleware)
server.use(loggerMiddleware);

/*
TODO:
send time taken along response header
*/

server.get("/",(req,res)=>{
    res.status(200).send("Hello World")
})

server.use("/employees",employeeRouter)

server.listen(3000,()=>{
    console.log("Server started on 3000")
})