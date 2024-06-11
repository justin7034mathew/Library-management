const express = require("express")
const LibraryModel = require("../models/Schema")

const route = express.Router()


//Grabing the id from client and delete the item that have same id

route.delete("/delete/:id", async(req, res) => {
    const id = req.params.id
    await LibraryModel.findByIdAndDelete(id).exec()
    
})


module.exports = route