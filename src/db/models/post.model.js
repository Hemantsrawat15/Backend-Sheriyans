const mongoose = require('mongoose');


const postSchema = new mongoose.Schema({
    image: String,
    caption: String,
})

// post here represents the name of collection in mongoDB
const postModel = mongoose.model("post", postSchema);