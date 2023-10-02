import { Db, ObjectId } from "mongodb";
import { token } from "../db/models/token";
import { IUser, IUserDTO } from "../db/models/user";
import jwt from 'jsonwebtoken'
require('dotenv').config('../../../.env')
const secret = process.env.SECRET as string

class TokenServices{
    async getAllTokens(){
        const data = await token.find({})
        console.log(data)
        return data
    }
    async createToken(user_id:ObjectId, RefreshToken:string){
        const Token = new token({
            user_id,
            token:RefreshToken
        })
        Token.save()
    }

    async generateToken(user:IUserDTO){
        try{
            console.log(secret)
            const  accessToken = jwt.sign(user, secret, { expiresIn: 5 * 60 })
            const  refreshToken = jwt.sign(user, secret, { expiresIn: 60 * 60 })
            return {accessToken, refreshToken}
        }catch(e){
            console.log(e)
            return null
        }
    }

    async validateToken(token:string){
        try{
            return jwt.verify(token,secret)
        }catch(e){
            console.log(e)
            return null
        }
    }

    async findRefreshToken(refreshToken:string){
        const res = await token.findOne({token:refreshToken})
        console.log(res)
        return res
    }
}
export default new TokenServices()