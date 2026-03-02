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

// POST /notes => Create a note
app.post("/notes", async (req, res) => {

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

// GET /notes => Get all notes
app.get("/notes", async (req, res) => {
    try {
        const notes = await noteModel.find(); // Gives an array of object
        // We can also add conditions in find() also

        // findone
        // const notes = await noteModel.find({title: "Note 1"})  Gives a single object if present, and returns null if data doesnt exist with the condition

        /*
        Difference between find and findOne
        find -> gives [{}] Array of objects if data found, and [] empty array is no data found
        findOne -> gives {} object if data found, and null if no data found
        */

        res.status(200).json({
            success: true,
            notes,
        })
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch notes",
            error: error.message
        })
    }
})


// DELETE /notes/:id => Delete a note
app.delete("/notes/:id", async (req, res) => {
    const id = req.params.id;
    try {
        // await noteModel.deleteOne({_id: id});
        // res.status(200).json({
        //     message: `Note deleted successfully with id: ${id}`
        // })

        const deletedNote = await noteModel.findOneAndDelete({
            _id: id,
        })
        if (!deletedNote) {
            return res.status(404).json({
                message: "Note not found",
            })
        }
        res.status(200).json({
            message: `Note deleted successfully with id: ${id}`,
        })
    }
    catch (error) {
        res.status(400).json({
            message: "Failed to delete note",
            error: error.message,
        })
    }
})

app.patch("/notes/:id", async (req, res) => {
    const id = req.params.id;
    const { title, description } = req.body;
    try {
        const updatedData = {};
        if(title !== undefined){
            updatedData.title = title;
        }
        if(description !== undefined){
            updatedData.description = description
        }
        const updatedNote = await noteModel.findByIdAndUpdate({ _id: id },
            updatedData
            , {returnDocument: "after"});

        if(!updatedNote){
            return res.status(404).json({
                message: "Note not found",
            })
        }

        res.status(200).json({
            message: `Note updated succesfully with id: ${id}`,
        })
    }
    catch (error) {
        res.status(500).json({
            message: "Failed to update note",
            error: error.message,
        })
    }
})

module.exports = app;