const app = require('./src/app');
const connectDB = require('./src/db/db');


connectDB();

app.listen(8000,()=>{
    console.log("Server is running on 8000 port");
})