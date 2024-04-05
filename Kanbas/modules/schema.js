import mongoose from "mongoose";
const moduleSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    course: { type: String },
    lessons: [
        {
            _id: { type: String, required: true },
            name: { type: String, required: true },
            description: { type: String },
            module: { type: String, required: true }
        }
    ]
  },
  { collection: "modules" });
export default moduleSchema;