const mongoose = require('mongoose')
const url = "mongodb+srv://leke:codelab2020@cluster0.cmc9k.mongodb.net/universities?retryWrites=true&w=majority"

mongoose.connect(url).then(()=>{
    console.log('your server is connected to a database')
}).catch((error)=>{
    console.log('cannot connect to the database')
})