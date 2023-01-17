import { mongoose } from "../db/mongoose";

const ActivitySchema = new mongoose.Schema(
    {
        date: {
            type: Date,
            required: true
        },
        activityTitle: {
            type: String,
            required: true
        },
        duration: {
            type: String,
            required: true
        },
        activityCourse: {
            type: String,
            required: true
        },
        partner: {
            type: String,
            required: true
        },
        physicalWitnesses: {
            type: String,
            required: true
        },
        place: {
            type: String,
            required: true
        },
        transportServices: {
            type: String,
            required: true
        },
        volunteersNo: {
            type: Number,
            required: true
        },
        wishesNo: {
            type: Number,
            required: true
        },
        participants: [

        ],
        consultationRow: [

        ],
        trainingRow: [

        ],
        generalRow: [

        ],
    },
    {
        timestamps: true
    }
)
const Activity = mongoose.model<any>('activity', ActivitySchema)
export { Activity };