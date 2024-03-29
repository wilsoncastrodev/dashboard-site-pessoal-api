import {Schema, model} from "mongoose";

const SkillSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    level: {
        type: Number,
        required: true,
    },
    categorySkill: {
        type: Schema.Types.ObjectId,
        ref: 'CategorySkill'
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

export default model('Skill', SkillSchema);
