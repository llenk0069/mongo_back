import express from 'express'
import { MongoClient } from 'mongodb'
require('dotenv').config()
// const { connectToDB, getDB } = require('./scr/db')
import { connectToDB, getDB } from './scr/db'
import tokenServices from './scr/services/token-services'

const PORT = process.env.PORT

const app = express() 

connectToDB(async (err:Error)=>{
    if(!err){
        app.listen(PORT, async ()=>{
            console.log(`PORT: ${PORT}`)
        })
        tokenServices.getAllTokens()
    } else{
        console.log(`DB connection Failed ${err}`)
    }
})

