import { NextFunction, Request, Response, Router } from "express";
import tokenServices from "../services/token-services";

const TokensRouter = Router()
TokensRouter.get('./tokens', (req:Request,res:Response, next:NextFunction)=>{
    tokenServices.getAllTokens()
})

export default TokensRouter