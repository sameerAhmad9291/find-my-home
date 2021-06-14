import * as mongoose from 'mongoose';
import { AddressSchema } from './address.schema';

const GeoSchema = new mongoose.Schema({
    type: {
        type: String,
        default: "Point",
    },
    coordinates: {
        type: [Number],
        index: "2dsphere"
    }
}, { _id: false });

export const apartmentSchema = new mongoose.Schema({
    apartmentNo: {
        type: String,
        required: true
    },
    totalRooms: {
        type: Number,
    },
    isAvailable: {
        type: Boolean,
        default: true,
    },
    location: GeoSchema,
    address: AddressSchema,
    rentAmount: {
        type: Number,
    },
    isFurnished: {
        type: Boolean,
        default: false,
    },
    owner_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
}, { timestamps: true });

