const express = require("express")

const LibraryModel = require("../models/Schema")



const route = express.Router()

route.get("/getdata", async(req, res) => {
    const result = await LibraryModel.find({})
    res.send(result)
    console.log(result);
})

module.exports = route