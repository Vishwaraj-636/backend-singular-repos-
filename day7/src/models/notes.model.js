const mongoose = require("mongoose")

const notesSchema = new mongoose.Schema({
    title: String,
    desc:String,
})

// notes ek collection ka name hai, jisme notesschema ka data store hoga
const notesModel =mongoose.model("notes", notesSchema)

module.exports = notesModel