import mongoose from 'mongoose';
const { Schema } = mongoose;

const clientSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            maxlength: 32,
            minlength: 3,
        },
        email: {
            type: String,
            required: true,
            trim: true,
        },
        message: {
            type: String,
            required: true,
            maxlength: 2000,
        },
    },
    { timestamps: true }
);

const Client = mongoose.model('Client', clientSchema);
export default Client;