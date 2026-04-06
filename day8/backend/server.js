const app = require("./src/app")
require("dotenv").config()
const connectToDb = require("./src/config/database")

connectToDb()


app.listen(3000, () => {
    console.log("the server is running at port 3000")
})