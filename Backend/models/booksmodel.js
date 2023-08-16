const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: String,
    author: String,
    description: String,
    });



const Bookmodel = mongoose.model("Bookmodel", bookSchema);
module.exports = Bookmodel;