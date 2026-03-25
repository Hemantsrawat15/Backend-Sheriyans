const app = require("./src/app");
const connectDB = require("./src/db/db");
require("dotenv").config();

const PORT = process.env.PORT || 8000;

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT} PORT`)
})

connectDB();