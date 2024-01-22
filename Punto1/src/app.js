const express= require('express')

const app = express()

const PORT=3000
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const api=require('../src/router/router')
app.use("/api/",api)

app.listen(PORT,()=>{
    console.log(`El servidor corre en el puerto: ${PORT}`)
    console.log(`El enpoint es: http://localhost:3000/api/`)
})