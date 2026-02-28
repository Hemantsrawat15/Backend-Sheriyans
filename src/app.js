// The job of this file is the create a server (Instance)

const express = require("express");

const app = express(); // We are creating a server instance here

app.use(express.json()) // Middleware


const notes = [];

app.post('/notes',(req,res)=>{

    notes.push(req.body);

    // console.log(req.body); Data req.body ke andar aata hai

    res.status(201).json({
        message: "Note Created Successfully",
    })
})

app.get('/notes',(req,res)=>{
    res.status(200).json({
        message: "Notes Fetched Successfully",
        notes: notes
    });
})

app.patch('/notes/:index',(req,res)=>{
    const index = parseInt(req.params.index);
    if(isNaN(index) || index<0 || index>=notes.length){
        return res.status(404).json({
            message: "Invalid Index",
        })
    }
    console.log(req.body);
    notes[index] = req.body;
    res.status(200).json({
        message: "Note updated sucessfully"
    })
});

app.delete('/notes/:index',(req,res)=>{

    // delete /notes/15
    console.log(req.params);
    const index = parseInt(req.params.index); // 15
    if(isNaN(index) || index<0 || index>= notes.length){
        return res.status(404).json({
            message:"Invalid Index"
        })
    }
    const deleteNode = notes.splice(index,1);
    res.status(200).json({
        message: "Note deleted successfully",
        deleted: deleteNode,
    })
})

// note = {
//     title: "My First Note",
//     description: "Description"
// }

// const notes = [
//     {
//         title: "My First Note",
//         description: "Description"
//     },
//     {
//         title: "My First Note",
//         description: "Description"
//     }
//     , {
//         title: "My First Note",
//         description: "Description"
//     }
// ]

module.exports = app // Jo server banaya tha usko export karlo