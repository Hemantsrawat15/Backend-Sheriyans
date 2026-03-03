const express = require('express');
const multer = require("multer");
const uploadFile = require("./db/services/storage.service");

const app = express();

// .json() is a middleware for raw data
app.use(express.json()); // for raw data from postman or frontend ( raw data can't have images or files )

// multer is a middleware for form-data
const upload = multer({ storage: multer.memoryStorage() });

// make sure to use the same key "image" that you are sending from the form-data
app.post("/create-post", upload.single("image"), async (req, res) => {

    console.log(req.body); // returns [Object: null prototype] { caption: 'test_caption' }
    // But abhi bhi image (file) nahi aah rahi hai
    // File req.body mei nahi aati hai
    console.log(req.file);
    /* The buffer in the req.file object is the data of the file
    {
        fieldname: 'image',
        originalname: 'Peppa Pig.png',
        encoding: '7bit',
        mimetype: 'image/png',
        buffer: <Buffer 89 50 4e 47 0d 0a 1a 0a 00 00 00 0d 49 48 44 52 00 00 02 00 00 00 02 00 08 02 00 00 00 7b 1a 43 ad 00 00 07 44 74 45 58 74 70 72 6f 6d 70 74 00 7b 22 ... 295756 more bytes>,
        size: 295806
    }
    */
   const result = await uploadFile(req.file.buffer);
   if(!result){
    return res.status(400).json({
        message: "File upload failed"
    })
   }
   console.log(result);
   return res.status(200).json({
    message: "File uploaded successfully"
   })
})

module.exports = app;