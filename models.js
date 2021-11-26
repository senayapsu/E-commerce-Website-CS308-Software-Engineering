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

const User = mongoose.model("User", UserSchema);

module.exports = User;

//Latest Changes for cart and like pages
