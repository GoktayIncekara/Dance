import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
  fullname: String,
  birthday: Date,
  email: { type: String, required: true },
  city: { type: String, required: true },
  phone: { type: Number, required: true },
  password: { type: String, required: true },
});

export default mongoose.model("Student", studentSchema);
