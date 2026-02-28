const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    title: String,
    description: String,
})

const noteModel = mongoose.model("note",noteSchema);

// Why we need noteModel ??

// To perform CRUD Operations
// CREATE - POST
// READ - GET
// UPDATE - PATCH
// DELETE - DELETE

module.exports = noteModel;