import mongoose, { Document, Schema } from "mongoose";

export interface ITask extends Document {
  user: mongoose.Schema.Types.ObjectId;
  title: string;
  completed: boolean;
}

const taskSchema = new Schema<ITask>(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model<ITask>("Task", taskSchema);
