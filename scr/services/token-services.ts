import { Db, ObjectId } from "mongodb";
import { token } from "../db/models/token";

require('dotenv').config('../../../.env')
const uri = process.env.db_uri


class TokenServices{
    async getAllTokens(){
        const data = await token.find({})
        console.log(data)
        return data
    }
    async createToken(user_id:ObjectId){
        const Token = new token({
            user_id,
            token:"23_09_2023_test_2"
        })
        Token.save()
    }
}
export default new TokenServices()