import { Router } from "express";
import { Employee } from "./Employee";

const employeeRouter = Router();

let employees:Array<Employee>=[
    {
        id:1,
        name:"Employee 1",
        email:"employee1@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        id:2,
        name:"Employee 2",
        email:"employee2@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date()
    }
]

employeeRouter.get("/",(req,res)=>{
    res.status(200).send(employees)
    //console.log("Employee endpoint executed")
})

employeeRouter.get("/:id",(req,res)=>{
    const emp_id=req.params.id;
    const emp=employees.find(({id})=>id===Number(emp_id))
    if(emp){
        res.status(200).send(emp)
    }
    else{
        res.status(401).send("Employee not found")
    }
    //console.log("Employee get endpoint with id")
    
})

employeeRouter.post("/",(req,res)=>{
    let tmpEmployee= new Employee()
        
    
    tmpEmployee.name=req.body.name
    tmpEmployee.email=req.body.email
    tmpEmployee.id=employees.length+1
    tmpEmployee.createdAt=new Date();
    tmpEmployee.updatedAt=new Date();
    employees.push(tmpEmployee)
    res.status(201).send("Employee Created")
    //console.log("Employee post endpoint")
})

employeeRouter.put("/:id",(req,res)=>{
    const id=req.params.id;
    res.status(200).send("Employee with id "+id+" updated using put")
    //console.log("Employee put endpoint with id")
})

employeeRouter.patch("/:id",(req,res)=>{
    const id=req.params.id;
    res.status(200).send("Employee with id "+id+" updated using patch")
    //console.log("Employee patch endpoint with id")
})

employeeRouter.delete("/:id",(req,res)=>{
    const id=req.params.id;
    res.status(200).send("Employee with id "+id+" deleted")
    //console.log("Employee delete endpoint with id")

})

export default employeeRouter;
