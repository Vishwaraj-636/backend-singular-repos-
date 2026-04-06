const app = require("./src/app")
require("dotenv").config()
const mongoose = require("mongoose")

function connectToDb() {
    mongoose.connect(process.env.MONGO_URI)
        .then(() => {
            console.log("database created")
        })
}
connectToDb()
app.listen(3000, () => {
    console.log("server is running on port 3000")
})