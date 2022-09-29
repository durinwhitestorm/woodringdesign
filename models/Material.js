const mongoose = require('mongoose')

const MaterialSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      image: {
        type: String,
        required: true,
      },
})

module.exports = mongoose.model('Material', MaterialSchema)