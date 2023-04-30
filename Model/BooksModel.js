const mongoose = require("mongoose");
const BooksModel = mongoose.Schema({
  Name: { type: String, required: true },
  Author: { type: String, required: true },
});
exports.Books = mongoose.model("Books", BooksModel);
