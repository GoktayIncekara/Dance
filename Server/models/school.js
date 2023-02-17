import mongoose from "mongoose";

const schoolSchema = mongoose.Schema({
  schoolname: { type: String, required: true },
  year: { type: String, required: true },
  email: { type: String, required: true },
  city: { type: String, required: true },
  phone: { type: Number, required: true },
  instructors: { type: Number, required: true },
});

export default mongoose.model("School", schoolSchema);
