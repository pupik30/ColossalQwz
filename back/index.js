const express = require("express")
const cors = require("cors")
const {Pool, Query} = require("pg")
const app = express()

app.use(cors({
    origin:"http://localhost:5173",
    credentials:"true"
}))

const pool = new Pool({
    user:"postgres",
    password:"1234",
    
    //hostname -I на машинке
    host:"192.168.135.159",

    database:"postgres",
    port:"5432"
})
const PORT = 3000








app.listen(PORT, ()=>{
    console.log(`Сервер запущен на порте ---> PORT}`)
})