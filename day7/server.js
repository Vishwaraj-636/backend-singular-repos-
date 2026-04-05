/* 
server ko start karna and database se connect karna
*/
require("dotenv").config()
const mongoose = require("mongoose")
const app = require("./src/app")
const connectToDb = require("./src/config/database")

connectToDb()

app.listen(3000, () => [
    console.log("server started at port 3000")
])

