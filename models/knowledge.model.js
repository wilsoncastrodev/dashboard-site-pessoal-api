import {Schema, model} from "mongoose";

const KnowledgeSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    categoryKnowledge: {
        type: Schema.Types.ObjectId,
        ref: 'CategoryKnowledge'
    },
    order: {
        type: Number,
        required: false,
    },
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

export default model('Knowledge', KnowledgeSchema);
