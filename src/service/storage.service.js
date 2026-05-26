const imagekit = require('@imagekit/nodejs');

const Imagekit = new imagekit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
    urlEndpoint: process.env.IMAGEKIT_URLENDPOINT
});

async function videoUpload(file, fileName) {
    const result = await Imagekit.files.upload({
    file,
    fileName
    });
    return result;
};

module.exports = { videoUpload };