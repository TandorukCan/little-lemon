const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const testimonialSchema = new Schema(
  {
    img: {
      type: String,
      // required: true,
    },
    author: {
      type: String,
      // required: true,
    },
    username: {
      type: String,
      // required: true,
    },
    comment: {
      type: String,
      // required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Testimonial", testimonialSchema);
