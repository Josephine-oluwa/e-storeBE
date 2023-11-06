import mongoose, { model } from "mongoose"

interface Product {
    title: string;
    image: Array<string>;
    cost: number;
    rating: number;
    QTYinStock: number;
    toggle: boolean;
}

interface iProduct extends Product, mongoose.Document{}

const productModel = new  mongoose.Schema({
    title: {
        type: String
    }, 
    Image: {
        type: Array<string>
    },
    cost: {
        type: String
    },
    rating: {
        type: Number
    },
    QTYinStock: {
        type: Number,
        default: 0
    },
    toggle: {
        type: Boolean,
        default: false 
    }
},
{timestamps: true}
)

export default mongoose.model<iProduct>("product", productModel)