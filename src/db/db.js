// Connect Server to Database

const mongoose = require('mongoose');

async function connectDB() {
    await mongoose.connect("mongodb+srv://admin:Jamesbond21@backend-sheriyans-clust.clhclv3.mongodb.net/?appName=backend-sheriyans-cluster")
    console.log("Connected to DB");
}

module.exports = connectDB