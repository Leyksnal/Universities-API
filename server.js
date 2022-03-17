require('./config/config')
const express = require('express')
port = process.env.PORT || 1000
const allRoutes = require('./route/route')

const app = express()
app.get('/', (req, res)=>{
    res.status(200).json({
        message: `This Server is Running on port: ${port}, Your message is here https://universities-app.herokuapp.com/message`
    })
})

app.use(express.json())
app.use("/api/v1", allRoutes)

app.listen(port, ()=>{
    console.log(`running on port: ${port}`)
})