import {Schema, model} from "mongoose";

const ProfileSchema = new Schema({
    user: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    name: {
        type: String,
        required: true,
        minLength: 5
    },
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

export default model('Profile', ProfileSchema);
