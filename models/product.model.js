import mongoose from "mongoose";
const { Schema } = mongoose;
const schema = new Schema({
    name: {
        type: String
    },
   
    price: {
        type: Number
    },
    
   categoryId: {
        type: Schema.Types.ObjectId,
        ref: 'Category'
    },
   
    countInStock: {
        type: Number
    }
})

const Product = mongoose.model('Product', schema);
export default Product;