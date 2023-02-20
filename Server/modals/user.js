import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  fullname: String,
  birthday: Date,
  schoolname: String,
  year: String,
  instructors: Number,
  active: Boolean,
  email: { type: String, required: true },
  city: { type: String, required: true },
  phone: { type: Number, required: true },
  password: { type: String, required: true },
  role: { type: Number, required: true },
});

export default mongoose.model("User", userSchema);
