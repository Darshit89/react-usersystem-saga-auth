import { mongoose } from "../db/mongoose";

var memberSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    nickname: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    },
    case: {
      type: String,
      required: true
    },
    nation: {
      type: String,
      required: true
    },
    additional: {
      type: String,
      required: true
    },
    apartment: {
      type: String,
      required: true
    },
    band: {
      type: String,
      required: true
    },
    gender: {
      type: String,
      required: true
    },
    dob: {
      type: Date,
      required: true
    },
    date: {
      type: Date,
      required: true
    },
    maritalStatus: {
      type: String,
      required: true
    },
    occupation: {
      type: String,
      required: true
    },
    reason: {
      type: String,
      required: true
    },
    notes: {
      type: String,
      required: true
    },
    addNumber: [
      {
        telephone: {
          type: String,
          required: true
        },
        number: {
          type: String,
          required: true
        },
        poste: {
          type: String,
          required: true
        }
      }
    ]
  },
  {
    timestamps: true
  }
);

var Member = mongoose.model<any>("Member", memberSchema);
export { Member }
