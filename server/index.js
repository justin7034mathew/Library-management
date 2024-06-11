const express = require("express")
const app = express()
const mongoose  = require("mongoose")
const cors = require("cors")

const insertData = require("./routes/InsertData")
const getdata = require("./routes/getData")
const deleteData = require("./routes/deleteData")


app.use(express.json())
app.use(cors())
app.use(insertData)
app.use(getdata)
// app.use(deleteData)

mongoose.connect(
    "mongodb+srv://justin-mathew12:password9633@librarymanagment.nzy0cwn.mongodb.net/books?retryWrites=true&w=majority&appName=LibraryManagment"
)


const PORT = process.env.PORT || 3001

app.listen(PORT, console.log("Sever is running",PORT))
