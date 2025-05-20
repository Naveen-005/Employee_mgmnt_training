import { Router } from "express";

const employeeRouter = Router();

employeeRouter.get("/",(req,res)=>{
    res.status(200).send("Employee Router")
})

employeeRouter.get("/:id",(req,res)=>{
    const id=req.params.id;
    res.status(200).send("Employee by id "+id)
})

employeeRouter.post("/",(req,res)=>{
    res.status(201).send("Employee Created")
})

employeeRouter.put("/:id",(req,res)=>{
    const id=req.params.id;
    res.status(200).send("Employee with id "+id+" updated using put")
})

employeeRouter.patch("/:id",(req,res)=>{
    const id=req.params.id;
    res.status(200).send("Employee with id "+id+" updated using patch")
})

employeeRouter.delete("/:id",(req,res)=>{
    const id=req.params.id;
    res.status(200).send("Employee with id "+id+" deleted")
})

export default employeeRouter;
