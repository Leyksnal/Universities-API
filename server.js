require('./config/config')
const express = require('express')
port = 1000
const allRoutes = require('./route/route')

const app = express()
app.get('/', (req, res)=>{
    res.status(200).json({
        message: "THIS IS THE SCHOOL API WELCOME"
    })
})

app.use(express.json())
app.use("/api/v1", allRoutes)

app.listen(port, ()=>{
    console.log(`running on port: ${port}`)
})