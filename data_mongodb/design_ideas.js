const mongoose = require("mongoose");

const DesignSchema = new mongoose.Schema({
    Title: {type: String, required: false},//primary_key
    category: {type: String, required: false},
    description: {type: String, required: false},
    total_price_in_photo: {type: Number, default: false, required: false},
    image: {type: String, default: false, required: false},
    like_number: {type: Number, default: false, required: false},
});

const Design = mongoose.model("Design", DesignSchema);

module.exports = Design;