const mongoose = require('mongoose');


async function connectDB() {
mongoose
.connect(process.env.MONGODB_URI)
.then(() => {
    console.log("Mongodb connected successfully.");
})
.catch((err) => {
    console.log(err);
})

}

module.exports = connectDB;