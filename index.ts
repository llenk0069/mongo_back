import express from 'express'
require('dotenv').config()
import { connectToDB} from './scr/db'
import TokensRouter from './scr/routers/token-router'
import mongoose from 'mongoose'

const PORT = process.env.PORT
const uri = process.env.db_uri as string
mongoose.connect(uri)
    .then(()=>console.log('connected to MongoDB'))
    .catch((e)=>console.log(`connect error ${e}`))

const app = express() 
app.use(TokensRouter)


// connectToDB(async (err:Error)=>{
//     if(!err){
//         app.listen(PORT, async ()=>{
//             console.log(`PORT: ${PORT}`)
//         })
//         // tokenServices.getAllTokens()
//     } else{
//         console.log(`DB connection Failed ${err}`)
//     }
// })

