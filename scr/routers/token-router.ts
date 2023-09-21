import { NextFunction, Request, Response, Router } from "express";
import tokenServices from "../services/token-services";
import { token } from "../db/models/token";

const TokensRouter = Router()
TokensRouter.get('/tokens', async (req:Request,res:Response, next:NextFunction)=>{
    const data = await token.find({})
    const my_token = new token({
        user_id:'dsadsadsad',
        token:'dsadsaa'
    })
    my_token.save()
    console.log(data)
    res.send('ok')
})

export default TokensRouter