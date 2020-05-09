
// Structure Database Informations

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema for Product in MongoDB
let TaskSchema = new Schema({
    title: {type: String, required: true, max: 100},
    completed: {type: Boolean, required:true}
});


// Export the model
module.exports = mongoose.model('Task', TaskSchema);

