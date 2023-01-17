import { mongoose } from "../db/mongoose";

// subMember Scheema
var subMemberSchema = new mongoose.Schema(
  {
    link: {
      type: String,
      required: true
    },
    member: {
      type: String,
      required: true
    },
    remember: {
      type: Boolean,
      required: true
    },
  },
  {
    timestamps: true
  }
);

const SubMember = mongoose.model<any>("SubMember", subMemberSchema);

// subNonMember Scheema
var subMemberSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    },
    telephone: {
      type: Number,
      required: true
    },
    remember: {
      type: Boolean,
      required: true
    },
  },
  {
    timestamps: true
  }
);

var SubNonMember = mongoose.model<any>("SubNonMember", subMemberSchema);

export { SubMember, SubNonMember }
