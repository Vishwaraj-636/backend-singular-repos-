/* 
server ko create karna
*/

const express = require("express")
const notesModel = require("./models/notes.model")
const app = express()
app.use(express.json())

/* 
POST /notes
req.body => {titel,desc}
*/

app.post("/notes",async (req, res) => {
    const { title, desc } = req.body
    
    const note = await notesModel.create({
        title,desc
    })

    res.status(201).json({
        messsage: "note created successfully",
        note
    })
})

module.exports = app