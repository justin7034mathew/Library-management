const express = require("express")
const LibraryModel = require("../models/Schema")


const route = express.Router()


route.post("/books",async (req, res) => {
    const {title, author, status} = req.body
    console.log(title,author,status);
    const book = new LibraryModel({BookName: title, AuthorName: author, Status: status})

    try{
        await book.save()
        res.send("Inserted Data")
    }catch(err) {
        console.log(err)
    }
})


module.exports = route