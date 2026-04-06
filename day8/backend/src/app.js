const express = require("express")
const notesModel = require("./model/note.model")
const app = express()
app.use(express.json())

/* post */
app.post("/api/notes", async (req, res) => {
    const { title, description } = req.body
    const note = await notesModel.create({
        title, description
    })

    res.status(201).json({
        message:"note created successfully",
        note
    })
})

/* get */
app.get("/api/notes", async (req, res) => {
    const notes = await notesModel.find()
    res.status(200).json({
        message: "notes fetched successfully",
        notes
    })
})

/* delete */

app.delete("/api/notes/:id", async (req, res) => {
    const id = req.params.id
    await notesModel.findByIdAndDelete(id)
    res.status(200).json({
        message: "note deleted successfully"
    })
})

/* update / patch */

app.patch('/api/notes/:id', async (req, res) => {
    const id = req.params.id
    const {description} = req.body
    await notesModel.findByIdAndUpdate(id, { description })
    res.status(200).json({
        message: "note updated successfully"
    })
})


module.exports = app