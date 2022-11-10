import mongoose from "mongoose";

// Defining Schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  dob: { type: Date },
  country: { type: String },
  resume: { type: String, required: true }
})

// Model
const userModel = mongoose.model("user", userSchema)

export default userModel