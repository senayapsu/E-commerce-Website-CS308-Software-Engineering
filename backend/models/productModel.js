import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema(
    {
    name: {type: String, required: true},//primary_key
    category: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, default: false, required: true},
    image: {type: String, default: false, required: true},
    },
    {
    timestamps: true,
    }
);
const Product= mongoose.model('Product', ProductSchema);
export default Product;