import mongoose from "mongoose";

const schoolSchema = mongoose.Schema({
  schoolname: String,
  year: String,
  email: { type: String, required: true },
  city: { type: String, required: true },
  phone: { type: Number, required: true },
  password: { type: String, required: true },
});

export default mongoose.model("School", schoolSchema);
