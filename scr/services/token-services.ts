import { Db } from "mongodb";
import { getDB, getDB2 } from "../db"

require('dotenv').config('../../../.env')
const uri = process.env.db_uri

function test(){
    const b = getDB()
}
class TokenServices{
    d:any
    constructor(db:any){
        this.d= getDB2()
    }
    async getAllTokens(){
        console.log(this.d)
        const db = getDB()
        const collection = await db.collection('tokens')
        const res = await collection.find({}).toArray()
        console.log(res)
        return res
    }
}
 export default new TokenServices(getDB)