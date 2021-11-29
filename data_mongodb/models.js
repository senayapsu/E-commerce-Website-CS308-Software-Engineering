const mongoose = require("mongoose");
const Product = require("./product");

const UserSchema = new mongoose.Schema({
  username: {type: String, required: false,unique: true},//primary_key
  profile_image:{type: String, required: false},
  name: {type: String, required: false},
  email: {type: String, required: false, unique: true},
  password: {type: String, required: false},
  isAdmin: {type: Boolean, default: false, required: false},
  cartlist: {type: Array, required: false},
  likes: {type: Array, required: false},
});

module.exports = mongoose.models.User || mongoose.model("User", UserSchema);

