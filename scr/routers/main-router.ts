import TokensRouter from "./token-router";
import UserRouter from "./user-router";
import { json, NextFunction, Request, Response, Router } from "express";
import { ServiceException } from "../exceptions/service-exception";
import cookieParser from 'cookie-parser'
import cors from "cors"

const MainRouter = Router()
MainRouter.use(cors({
    origin: ["http://127.0.0.1:3000", "http://localhost:3000", "http://192.168.1.72:3000"],
    credentials: true,
}))
MainRouter.use(cookieParser())
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
