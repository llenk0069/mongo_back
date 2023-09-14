import express from 'express'
require('dotenv').config()

const PORT = process.env.PORT

const app = express()
app.listen(PORT, ()=>{
    console.log(`PORT: ${PORT}`)
})