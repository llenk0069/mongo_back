import { NextFunction, Request, Response } from "express";
import { token } from "../db/models/token";
import { ServiceException } from "../exceptions/service-exception";
import tokenServices from "../services/token-services";
import userServices from "../services/user-services";

export const UserControllers = {
    getUsers: async (req:Request,res:Response, next:NextFunction)=>{
        try{
            const users = await userServices.getAllUsers()
            res.json(users)
        }catch(e){
            next(e)
        }
    },
    findUser: async (req:Request,res:Response, next:NextFunction)=>{
        const name = req.query.name as string
        console.log(name)
        try{
            const users = await userServices.findUser(name)
            res.json(users)
        }catch(e){
            next(e)
        }
    },

    login: async (req:Request,res:Response, next:NextFunction)=>{
        const name:string = req.body.name
        const password:string = req.body.password
        console.log(name)
        try{
            const user = await userServices.findUser(name)
            if(!user?._id){throw new ServiceException(500,'wrong name')}
            // tokenServices.createToken(user?._id)
            res.status(200).send('Log in!')
        }catch(e){
            next(e)
        }
    }

}