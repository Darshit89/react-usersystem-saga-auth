import { mongoose } from "../db/mongoose";
import { Model } from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import endpoint from '../config/config';

var userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      trim: true,
      minlength: 1,
      unique: true
    },
    password: {
      type: String,
      required: true,
      minlength: 6
    },
    username: {
      type: String,
      trim: true
    },
    token: {
      type: String,
      default: null
    },
    resetPasswordToken: {
      type: String,
      default: null
    },
    resetPasswordExpires: {
      type: Date,
      default: Date.now()
    },
    remember: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
);


userSchema.methods.generateAuthToken = async (data: any) => {
  var user = data;
  var token = jwt.sign({ _id: user._id.toString() }, String(endpoint.JWTKEY), { expiresIn: '24h' });
  user.token = token;
  await user.save();
  return token;
};

export interface UserModel extends Model<any> {
  findByCredentials(email: string, password: string): Promise<any>
}

userSchema.statics.findByCredentials = async (email: string, password: string) => {
  const user: any = await User.findOne({ email });
  if (!user) {
    throw new Error("Unable to login");
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error("Unable to login");
  }
  return user;
};

//Hash the plain text password
userSchema.pre("save", async function (this: any, next: any) {
  var user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

var User = mongoose.model<any, UserModel>("User", userSchema);
export { User }