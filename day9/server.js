const app = require("./src/app")
const connextToDB = require("./src/config/database")

require("dotenv").config()

connextToDB()

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})