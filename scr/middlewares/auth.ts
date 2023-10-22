import { NextFunction, Request, Response } from "express";
import { ServiceException } from "../exceptions/service-exception";
import tokenServices from "../services/token-services";


export const authCheck = async (req:Request,res:Response, next:NextFunction)=>{
    const accessToken = req.headers.authorization?.split(' ')[1]
    try{
        if(!accessToken){throw new ServiceException(401,"Faild Auth!")}
        const authCheck = await tokenServices.validateToken(accessToken)
        console.log(authCheck)
        if(!authCheck){throw new ServiceException(401,"Wrong Token")}
        next()
    }catch(e){
        next(e)}
    }