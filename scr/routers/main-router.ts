import TokensRouter from "./token-router";
import UserRouter from "./user-router";
import { json, NextFunction, Request, Response, Router } from "express";
import { ServiceException } from "../exceptions/service-exception";

const MainRouter = Router()
MainRouter.use(json())

MainRouter.use(UserRouter)
MainRouter.use(TokensRouter)

MainRouter.use((error:Error, req:Request, res:Response,next:NextFunction)=>{
    if(error instanceof ServiceException){
        return res.status(error.status).send(error.message)
    }
        return res.status(500).json({message:`unexpected error1!`})
})

export default MainRouter