import mongoose from 'mongoose';

const DesignideasSchema = new mongoose.Schema(
    {
    picture: {type: String, required: true},
    labels:{type: Array, default: false, required: true},
    content:{type: String, default: false, required: true},
    product_id:{type: String, default: false, required: true},
    },
    {
    timestamps: true,
    }
);
const Designideas= mongoose.model('Designideas', DesignideasSchema);
export default Designideas;