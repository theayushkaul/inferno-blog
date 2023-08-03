const mongoose = require("mongoose")

const CategorySchema = new mongoose.Schema({
    name:{
        category: String,
    }
})

module.exports = mongoose.model("Category",CategorySchema)