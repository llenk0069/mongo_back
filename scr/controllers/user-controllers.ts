import { NextFunction, Request, Response } from "express";
import { token } from "../db/models/token";
import { IUser } from "../db/models/user";
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

    createUser: async (req:Request,res:Response, next:NextFunction)=>{
        const user_data:IUser = req.body
        try{
            if(!user_data.age || !user_data.name || !user_data.password){
                throw new ServiceException(500, "Wrong user data!")
            }
            const user = await userServices.createUser(user_data)
            console.log(user)
            res.status(200).json(user)
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
        try{
            const user = await userServices.findUser(name)
            if(!user?._id){throw new ServiceException(500,'wrong name')}

            const passCheck = await userServices.comparePass(password, user?.password)
            if(!passCheck){throw new ServiceException(500,'wrong pass')}
            
            const userDTO = userServices.userDTO(user)
            const tokens = await tokenServices.generateToken(userDTO)
            console.log(tokens)
            // tokenServices.createToken(user?._id)
            res.status(200).send('Log in!')
        }catch(e){
            next(e)
        }
    }

}