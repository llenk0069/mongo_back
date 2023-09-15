require('dotenv').config('../../.env')
import { MongoClient } from 'mongodb'

export const Db_client = async ()=>{
    try{
        if(!process.env.db_uri){return}
        const client = new MongoClient(process.env.db_uri)
        await client.connect()
        return client
    }catch(e){}
}