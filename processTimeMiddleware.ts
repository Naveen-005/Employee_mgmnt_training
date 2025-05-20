import { NextFunction, Request, Response } from "express"

export const processTimeMiddleware=(req:Request, resp:Response, next:NextFunction)=>{
    const startTime=Number(new Date())

    resp.on("finish",()=>{
        const timeDiff= Number(new Date())-startTime
        console.log(` ${req.method} ${req.originalUrl} Time taken=${timeDiff}`)

    })
    next()
}