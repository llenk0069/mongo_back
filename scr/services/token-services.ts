import { Db, ObjectId } from "mongodb";
import { getDB,} from "../db"
import { token } from "../db/models/token";

require('dotenv').config('../../../.env')
const uri = process.env.db_uri


class TokenServices{
    async getAllTokens(){
        const data = await token.find({})
        console.log(data)
        return data
    }
}
export default new TokenServices()