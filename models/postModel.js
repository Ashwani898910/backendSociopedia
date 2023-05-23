import mongoose from "mongoose";

const postSchema = mongoose.Schema(
  {
    userId: { type: String, required: true },
    desc: { type: String, required: true },
    likes: [],
    comments: [{
      visitorId: { type: String },
      image: { type: String },
      visitor:{ type: String },
      message: { type: String }
    }],
    createdAt: {
      type: Date,
      default: new Date(),
    },
    image: String,
  },
  {
    timestamps: true,
  }
);

var PostModel = mongoose.model("Posts", postSchema);

export default PostModel;
