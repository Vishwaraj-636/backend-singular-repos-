const app = require("./src/app")

const mongoose = require("mongoose")

function connectToDb() {
    mongoose.connect("mongodb+srv://vishu:gn1Xywi4vtrYPsMC@cluster0.nrrsbxp.mongodb.net/day-6")
        .then(() => {
            console.log("database created")
        })
}
connectToDb()
app.listen(3000, () => {
    console.log("server is running on port 3000")
})