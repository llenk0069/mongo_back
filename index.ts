import express from 'express'
import { MongoClient } from 'mongodb'
require('dotenv').config()
// const { connectToDB, getDB } = require('./scr/db')
import { connectToDB, getDB } from './scr/db'
import tokenServices from './scr/services/token-services'
import TokensRouter from './scr/routers/token-router'

const PORT = process.env.PORT

const app = express() 
app.use(TokensRouter)
connectToDB(async (err:Error)=>{
    if(!err){
        app.listen(PORT, async ()=>{
            console.log(`PORT: ${PORT}`)
        })
        // tokenServices.getAllTokens()
    } else{
        console.log(`DB connection Failed ${err}`)
    }
})

