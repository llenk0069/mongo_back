import express from 'express'
import { MongoClient } from 'mongodb'
require('dotenv').config()
import { Db_client } from './scr/db'
const PORT = process.env.PORT

const app = express()
app.listen(PORT, async ()=>{
    console.log(`PORT: ${PORT}`)
    try{
        if(!process.env.db_uri){return}
        const client = new MongoClient(process.env.db_uri)
        await client.connect()
        const db = await client.db('Proj666')
        const collection = await db.collection('tokens')
        const res = await collection.find({}).toArray()
        console.log(res)
    }catch(e){}
})