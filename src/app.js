const express = require('express');
const noteModel = require("./models/node.model")

const app = express();
app.use(express.json());

// note = { title, description }

/*
POST /notes => Create a note
GET /notes => Get all notes
DELETE /note/:id => Delete a note
PATCH /note/:id => Update a note
*/


app.post("/notes",async (req,res)=>{

    const data = req.body

    // { title, description }

   await noteModel.create({
    title: data.title,
    description: data.description
   })

   res.status(201).json({
    messsage: "Note Created"
   })
})

module.exports = app;