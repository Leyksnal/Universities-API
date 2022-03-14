const express = require('express')
const router = express.Router()
const { addUni, readOneUni, readAllUni, uniUpdate, deleteUni } = require('../controller/controller')
const imageUpload = require('../multer/multer')

router
    .route('/school')
    .post(imageUpload, addUni)
    .get(readAllUni)


router
    .route('/school/:id')
    .get(readOneUni)
    .patch(imageUpload, uniUpdate)
    .delete(deleteUni)



module.exports = router