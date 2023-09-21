import { NextFunction, Request, Response } from "express";
import tokenServices from "../services/token-services";
import userServices from "../services/user-services";

export const UserControllers = {
    getUsers: async (req:Request,res:Response, next:NextFunction)=>{
        try{
            const users = await userServices.getAllUsers()
            res.json(users)
        }catch(e){
            console.log('Error:' + e)
            res.status(500).json({error:e})
        }
    },
    findUser: async (req:Request,res:Response, next:NextFunction)=>{
        const name = req.query.name as string
        console.log(name)
        try{
            const users = await userServices.findUser(name)
            res.json(users)
        }catch(e){
            console.log('Error:' + e)
            res.status(500).json({error:e})
        }
    }

}