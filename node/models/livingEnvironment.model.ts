import { mongoose } from "../db/mongoose";

const LivingEnvironmentSchema = new mongoose.Schema(
  {
    date: {
      type: Date,
      required: true
    },
    livingEnvironment: {
      type: Number,
      required: true
    },
    journeyCourse: {
      type: String,
      required: true
    },
    members: [

    ],
    nonMembers: [
      {
        firstName: {
          type: String,
          required: true
        },
        lastName: {
          type: String,
          required: true
        },
        date: {
          type: Date,
          required: true
        },
        gender: {
          type: String,
          required: true
        },
        nation: {
          type: String,
          required: true
        }
      }
    ],
    totalMembers: {
      type: Number
    }
  },
  {
    timestamps: true
  }
)
const LivingEnvironment = mongoose.model<any>('livingEnvironment', LivingEnvironmentSchema)
export { LivingEnvironment };