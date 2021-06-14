import * as mongoose from 'mongoose';

export const AddressSchema = new mongoose.Schema({
    city: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    zipCode: {
        type: String,
        required: true,
    },
    streetAddress: {
        type: String,
    },
}, { _id: false });