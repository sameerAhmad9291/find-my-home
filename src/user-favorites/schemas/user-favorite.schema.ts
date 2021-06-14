import * as mongoose from 'mongoose';

export const userFavoriteSchema = new mongoose.Schema({
    apartment_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
}, { timestamps: true });

