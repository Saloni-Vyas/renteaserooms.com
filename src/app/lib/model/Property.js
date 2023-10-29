import mongoose from "mongoose";

const PropertySchema = new mongoose.Schema({
    currentOwner: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true,
    },
    title: {
        type: String,
        required: true,
        min: 8,
    },
    type: {
        type: String,
        enum: ["room", "house", "pg", "hostel"],
        required: true,
    },
    desc: {
        type: String,
        required: true,
        min: 20,
    },
    price: {
        type: Number,
        required: true,
    },
    sqmeters: {
        type: Number,
        required: true,
    },
    beds: {
        type: Number,
        required: true,
        min: 0,
    },
    featured: {
        type: Boolean,
        default: false,
    }
}, { timestamps: true });

module.exports = mongoose.models.Property || mongoose.model("Property", PropertySchema);