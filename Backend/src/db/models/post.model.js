const mongoose = require('mongoose');


const postSchema = new mongoose.Schema({
    image:{
        type: String,
        required: true,
    },
    caption:{
        type: String,
        required: true,
    },
}, {timestamps: true})

// post here represents the name of collection in mongoDB
const postModel = mongoose.model("post", postSchema);

module.exports = postModel;