const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true,
        trim: true,

    },
    task: [String]
})

const TodoModel = mongoose.model("Todo", TodoSchema);

export default TodoModel;

// Both front end and Backend
// Create, Read, Edit and Delete data