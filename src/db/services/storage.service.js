const ImageKit = require("@imagekit/nodejs");


const imagekit = new ImageKit({
    privateKey: "private_h9SRipV0VLE3WwA1GJLC4E/baVc="
})

async function uploadFile(buffer){

    const result = await imagekit.files.upload({
        file: buffer.toString("base64"),
        fileName: "image.jpg"
    })

    return result;
}

module.exports = uploadFile;