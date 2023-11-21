const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const specialSchema = new Schema(
  {
    img: {
      type: String,
      // required: true,
    },
    name: {
      type: String,
      // required: true,
    },
    price: {
      type: Number,
      // required: true,
    },
    description: {
      type: String,
      // required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Special", specialSchema);
