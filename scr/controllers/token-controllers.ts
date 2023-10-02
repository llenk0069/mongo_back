import { NextFunction, Request, Response } from "express";
import { token } from "../db/models/token";
import { IUser } from "../db/models/user";
import { ServiceException } from "../exceptions/service-exception";
import tokenServices from "../services/token-services";
import userServices from "../services/user-services";
import { ObjectFlags } from "typescript";
import { ObjectId } from "mongodb";

export const TokenControllers = {
    getTokens: async (req:Request,res:Response, next:NextFunction)=>{
        try{
            const tokens = await tokenServices.getAllTokens()
            res.json(tokens)
        }catch(e){
            next(e)
        }
    },

    getUserTokens: async (req:Request,res:Response, next:NextFunction)=>{
        try{
            const user_id = req.query.user_id as string
            const userObjId = new ObjectId(user_id)
            console.log(userObjId)
            if(!user_id){res.status(500).send('wrond data2'); return null}
            const userTokes = await tokenServices.findRefreshTokenByUserId(user_id)
            res.status(200).json(userTokes)
        }catch(e){
            console.log(e)
            next(e)
        }
    },

    refresh: async (req:Request,res:Response, next:NextFunction)=>{
        const {RefreshToken} = req.cookies
        console.log(RefreshToken)
        try{
            const userData = await tokenServices.validateToken(RefreshToken)  as IUser
            const tokenTest = await tokenServices.findRefreshToken(RefreshToken)
            
            if(!userData || !tokenTest){throw new ServiceException(500,'Wrong Refresh Token') }
            const userDTO = userServices.userDTO(userData)
            const newTokens = await tokenServices.generateToken(userDTO)
            const update = await token.findByIdAndUpdate(tokenTest._id, {token: newTokens?.refreshToken}, {new:true})
            console.log(update)
            res.cookie('RefreshToken', newTokens?.refreshToken,{maxAge:24*7*60*60*1000, httpOnly: true, secure:true})
            res.status(200).json(newTokens)
        }catch(e){
            next(e)
        }
    }

}