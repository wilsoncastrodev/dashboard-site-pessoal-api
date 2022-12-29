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
        trim: true,
        minLength: 5
    },
    profession: {
        type: String,
        trim: true
    },
    aboutMe: {
        type: String
    },
    characteristic: {
        type: [String],
        trim: true
    },
    education: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Education',
        },
    ],
    experiences: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Experience',
        },
    ],
    interests: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Interest'
        }
    ],
    skills: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Skill',
        },
    ],
    complementaryKnowledge: [
        {
          type: Schema.Types.ObjectId,
          ref: 'ComplementaryKnowledge',
        },
    ],
    contacts: {
        website: {
            type: String
        },
        phone: {
            type: String
        },
        location: {
            type: String
        }
    },
    social: {
        github: {
            type: String,
        },
        linkedin: {
            type: String,
        },
    },
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

export default model('Profile', ProfileSchema);
