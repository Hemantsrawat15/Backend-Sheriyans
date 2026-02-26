// The job of this file to start the server


// Jo app (Server Instance Container) tumne src/app.js se export karaya tha usko leke aao idhar

const app = require("./src/app");

app.listen(8000,()=>{
    console.log("Server running on port 8000");
})

// Koi saa bhi data jo frontend se aah sakta hai usse aap request se access kar sakte ho
app.get("/",(req,res)=>{
    res.send("Hello")
})

app.get("/about",(req,res)=>{
    res.send("About Page")
})