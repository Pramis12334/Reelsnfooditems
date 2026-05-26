const mongoose = require('mongoose');

const fooditemsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    video: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    foodpartner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "foodpartner"
    }
});

module.exports = mongoose.model("fooditems", fooditemsSchema);