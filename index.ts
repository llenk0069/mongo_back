import express from 'express'
require('dotenv').config()

import TokensRouter from './scr/routers/token-router'
import mongoose from 'mongoose'
import { Movie } from './scr/db/models/movie'
import { token } from './scr/db/models/token'

const PORT = process.env.PORT
const uri = process.env.db_uri as string

mongoose.connect(uri)
    .then(()=>console.log('connected to MongoDB'))
    .then(()=> token.find({}))
    .then((items)=>console.log(items))
    .catch((e)=>console.log(`connect error ${e}`))
const app = express() 
app.use(TokensRouter)


app.listen(PORT, async ()=>{
    console.log(`PORT: ${PORT}`)
})


