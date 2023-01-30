const mongoose = require("mongoose");
const { Schema } = mongoose;

const GallerySchema = new Schema(
  {
    category: {
      type: String,
      default: null,
    },
    subCategory: {
      type: String,
      default: null,
    },
    link: {
      type: String,
      default: null,
    },
    property: {
      type: Schema.Types.ObjectId,
      ref: "Property",
    },
    createdAt: Number,
    updatedAt: Number,
  },
  { timestamps: true, versionKey: false }
);

const Gallery =
  mongoose.models.Gallery || mongoose.model("Gallery", GallerySchema);
module.exports = Gallery;
