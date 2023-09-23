import { NextFunction, Request, Response } from "express";
import tokenServices from "../services/token-services";

export const TokenControllers = {
    getTokens: async (req:Request,res:Response, next:NextFunction)=>{
        try{
            const tokens = await tokenServices.getAllTokens()
            res.json(tokens)
        }catch(e){
            next(e)
        }
    }

}