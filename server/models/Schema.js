const mongoose = require("mongoose")

const LibrarySchema = ({
    BookName :{
        type: String,
        require: true
    },
    AuthorName: {
        type: String,
        require:true
    },
    Status: {
        type: String,
        require:true
    }
})

const Book = mongoose.model("books",LibrarySchema)

module.exports = Book