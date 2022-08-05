const mongoose = require("mongoose");

module.exports = () => {
    return mongoose.connect("mongodb+srv://raj:raj1234@cluster0.ipb86lt.mongodb.net/crud?retryWrites=true&w=majority")
}


//mongodb+srv://Raja22:Raja22@cluster0.hhnvdol.mongodb.net/crud?retryWrites=true&w=majority