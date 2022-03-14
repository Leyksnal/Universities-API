const mongoose = require("mongoose");



const school = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    location:{
        type: String,
        required: true
    },
    year:{
        type: String,
        required: true
    },
    image:{
        type: String
    },
    cloud_url: {
        type: String
    },
    cloud_id: {
        type: String
    },
    createAt:{
        type: Date,
        default: new Date()
    }
})

const uniSchema = mongoose.model("University", school)

module.exports = uniSchema