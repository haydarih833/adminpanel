import { Description } from "@headlessui/react";



const productSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            require: true
        },
        price: {
            type: Number,
            require: true
        },
        description: String,
        images: [String],
        color: [String],
        size: [String],
        gender: {
            type: String,
            enum: ["Male", "Female", "Unisex"],
            default: "Unisex",
        },
        category: {
            id: Number,
            name: String,
        },

    }, { timesTamps: true }
)


const Products = mongoose.model("Products", productSchema)

export default Products