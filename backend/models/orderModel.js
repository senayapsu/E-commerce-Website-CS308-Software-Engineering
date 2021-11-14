import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema(
    {
    order_id: {type: String, required: true},//primary_key
    total_price: {type: Number, required: true},//primary_key
    username:{type: String, default: false, required: true},
    status:{type: String, default: false, required: true},
    products:{type: Array, default: false, required: true},
    },
    {
    timestamps: true,
    }
);
const Order= mongoose.model('Order', OrderSchema);
export default Order;