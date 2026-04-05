const mongoose = require("mongoose")


function connectToDb() {
    mongoose.connect(process.env.mongo_uri)
        .then(() => {
            console.log("connected to db")
        })
}

module.exports = connectToDb