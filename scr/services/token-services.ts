import { Db, ObjectId } from "mongodb";
import { getDB,} from "../db"

require('dotenv').config('../../../.env')
const uri = process.env.db_uri


class TokenServices{
    async getAllTokens(){
        const db= getDB()
        const collection = await db.collection('tokens')
        const res = await collection.find({}).toArray()
        console.log(res)
        return res
    }
}
export default new TokenServices()