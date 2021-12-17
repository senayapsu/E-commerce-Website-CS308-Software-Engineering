const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    name: {type: String, required: false},//primary_key
    category: {type: String, required: false},
    description: {type: String, required: false},
    price: {type: Number, default: false, required: false},
    image: {type: String, default: false, required: false},
    isLiked: {type: Boolean, deafult: false, required: false},
    cart_counter : {type: Number, default: false, required: false},
    designcategory: {type: String, required: false}
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;