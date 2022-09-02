import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    fullName: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
    dateOfBirth: { type: String },
    Phone: { type: Number },
    address: { type: String },
    orders: {
      type: [
        {
          orderId: { type: String },
        },
      ],
    },
  },
  { img: { type: String } },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", userSchema);
