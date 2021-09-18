import mongoose from 'mongoose';

//creating user schema for user admin
const contactSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        message: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        number: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

const Contactus = mongoose.model('Contactus', contactSchema);

export default Contactus;
