const mongoose = require("mongoose");
const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    }
}, { timestamps: true });

const itemModel = mongoose.Model("Item", itemSchema);
module.exports = itemModel