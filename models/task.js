const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    //? basic validation
    name: {
        type: String,
        required: [true, 'must provide a name'],
        trim: true,
        //* to emit white spaces
        maxlength: [20, 'name must be less than 20 characters'],
    },
    completed: { type: Boolean, default: false },
})
//* Task is your collection/table name 
//! every time mongo db place 's' with your collection name
module.exports = mongoose.model('Task', TaskSchema)