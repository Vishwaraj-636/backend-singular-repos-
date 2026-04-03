const express = require("express")

const notes = []

app.use(express.json())

const app = express()

app.post("/notes", (req, res) => {
    notes.push(req.body)
    res.status(201),send("notes added successfully")
})

app.get("/notes", (req, res) => {
    res.status(200).send(notes)
})

app.delete("./notes/:index", (req, res) => {
    delete notes[req.params.index]
    res.status(204).send("deletion successful")
})

app.patch("/notes/:index", (req,res)=> {
    notes[req.params.index].desc = req.body.desc 
})


module.exports = app
