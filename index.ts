import express from 'express'
require('dotenv').config()

import TokensRouter from './scr/routers/token-router'
import mongoose from 'mongoose'
import { Movie } from './scr/db/models/movie'
import { token } from './scr/db/models/token'
import UserRouter from './scr/routers/user-router'

const PORT = process.env.PORT
const uri = process.env.db_uri as string

mongoose.connect(uri)
    .then(()=>console.log('connected to MongoDB'))
    .catch((e)=>console.log(`connect error ${e}`))

    
const app = express() 
app.use(TokensRouter)
app.use(UserRouter)
app.listen(PORT, async ()=>{
    console.log(`PORT: ${PORT}`)
})


