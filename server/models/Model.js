const mongoose = require('mongoose');

const exampleSchema = new mongoose.Schema({
  // Define schema fields
});

const ExampleModel = mongoose.model('Example', exampleSchema);

module.exports = ExampleModel;
