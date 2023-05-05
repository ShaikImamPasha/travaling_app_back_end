const mongoose = require('mongoose');

const catagerySchema = new mongoose.Schema({
    category: { type: String, required: true },
})

const Catagery = mongoose.model("Catagery", catagerySchema);

module.exports = Catagery;