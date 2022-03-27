const mongoose = require("mongoose");

const Todo = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true,
    },
    completionDate: {
        type: String,
        required: true
    },
    priority: {
        type: String,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.models.Todo || mongoose.model("Todo", Todo);
