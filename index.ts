import express from 'express'
require('dotenv').config()
import mongoose from 'mongoose'
import MainRouter from './scr/routers/main-router'

const PORT = process.env.PORT
const uri = process.env.db_uri as string

mongoose.connect(uri)
    .then(()=>console.log('connected to MongoDB'))
    .catch((e)=>console.log(`connect error ${e}`))

    
const app = express()

app.use(MainRouter)
app.listen(PORT, async ()=>{
    console.log(`PORT: ${PORT}`)
})


