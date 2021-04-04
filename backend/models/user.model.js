const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema( //created a schema that contains a user's username
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
    },
  },
  {
    timestamps: true, //automatically creates fields for when a doc is created/modified
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
