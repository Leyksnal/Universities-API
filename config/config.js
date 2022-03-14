require('dotenv').config()
const mongoose = require('mongoose')
const url = process.env.CLOUD_DB

mongoose.connect(url).then(()=>{
    console.log('your server is connected to a database')
}).catch((error)=>{
    console.log('cannot connect to the database')
})