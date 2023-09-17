require('dotenv').config('../../.env')
import { Db, MongoClient } from 'mongodb'


let dbConnection:Db
export const connectToDB = (callback:(...e:any)=>Promise<void>)=>{
    const uri = process.env.db_uri as string
    MongoClient
        .connect(uri)
        .then(client=>{
            console.log("Connected to Mongo")
            dbConnection= client.db('Proj666')
            callback()
        })
        .catch()}
export const getDB = ()=>dbConnection

