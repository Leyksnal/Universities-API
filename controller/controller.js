const uniSchema = require('../model/model')
const cloudinary = require('../cloudinary/cloudinary')
const fs = require('fs')


const addUni = async (req, res)=>{

    try {
        const cloud = await cloudinary.uploader.upload(req.file.path)
        const uni = await uniSchema.create({
            name: req.body.name,
            location: req.body.location,
            year: req.body.year,
            image: req.file.path,
            cloud_url: cloud.cloud_url,
            cloud_id: cloud.public_id,
            createdAt: req.body.createdAt
        })

        res.status(201).json({
            status: `New school has just been added`,
            data: {
                uni
            }
        })
    } catch (error) {
        res.status(404).json({
            status: `failed to add new school`,
            message: error.message
        })
    }
}

const readAllUni = async (req, res)=>{
    try {

        const uni = await uniSchema.find()
        res.status(200).json({
            status: `All Universities in the database`,
            data: {
                uni
            }
        })
        
    } catch (error) {
        res.status(404).json({
            status: `failed to read all school`,
            message: error.message
        })
    }
}

const readOneUni = async (req, res)=>{
    try {

        const id = req.params.id
        const uni = await uniSchema.findById(id)
        res.status(200).json({
            status: `One University from the database`,
            data: {
                uni
            }
        })
    } catch (error) {
        res.status(404).json({
            status: `failed to read one school`,
            message: error.message
        })
    }
}


const uniUpdate = async (req, res)=>{
    try {

        const id = req.params.id
        const cloud = await cloudinary.uploader.upload(req.file.path)
        
        const uni = await uniSchema.findByIdAndUpdate(id, {
            name: req.body.name,
            location: req.body.location,
            year: req.body.year,
            image: req.file.path,
            cloud_url: cloud.cloud_url,
            cloud_id: cloud.public_id,
            createdAt: req.body.createdAt
        }, {new: true})
        res.status(200).json({
            status: `Updated successfully`,
            data: {
                uni
            }
        })
    } catch (error) {
        res.status(404).json({
            status: `failed to update school`,
            message: error.message
        })
    }
}

const deleteUni = async (req, res)=>{
    try {
        const id = req.params.id
        const uni = await uniSchema.findById(id)
        await cloudinary.uploader.destroy(uni.cloud_id)
        await fs.unlinkSync(uni.image)
        await uniSchema.findByIdAndDelete(id)
        res.status(200).json({
            status: `Deleted University`,
        })
    } catch (error) {
        res.status(404).json({
            status: `failed to delete school`,
            message: error.message
        })
    }
}

module.exports = {
    addUni,
    readAllUni,
    readOneUni,
    uniUpdate,
    deleteUni
}