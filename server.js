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

app.get('/message', (req, res)=>{
    res.status(200).json({
        message: `Sometimes we just need to move on when things does not turns out to be the way we wanted it to be, if life was an overtime opporunity to make a turn we might not even know the importance of staying healthy and regulating our well being, but because it is a one time opportunity we tend to be more sensitive about our life structure such that we dont want to risk dying even at 0.5% risk assessment. My dear brother nobody can ever take or claim what is meant to be for you and what has been destined for you by Almighty ALLAH (S.W.A)`
    })
})

app.use(express.json())
app.use("/api/v1", allRoutes)

app.listen(port, ()=>{
    console.log(`running on port: ${port}`)
})