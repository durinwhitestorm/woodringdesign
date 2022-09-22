const mongoose = require('mongoose')

const RingSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  core: {
    material: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    width: {
      type: Number,
      required: true,
    },
    required: true,
  },
  layer1: {
    material: {
      type: String,
    },
    image: {
      type: String,
    },
    width: {
      type: Number,
    },
    xval: {
      type: Number,
    },
    zval: {
      type: Number
    },
    display: {
      type: Boolean,
    },
  },
  layer2: {
    material: {
      type: String,
    },
    image: {
      type: String,
    },
    width: {
      type: Number,
    },
    xval: {
      type: Number,
    },
    zval: {
      type: Number
    },
    display: {
      type: Boolean,
    },
  },
  layer3: {
    material: {
      type: String,
    },
    image: {
      type: String,
    },
    width: {
      type: Number,
    },
    xval: {
      type: Number,
    },
    zval: {
      type: Number
    },
    display: {
      type: Boolean,
    },
  },
  layer4: {
    material: {
      type: String,
    },
    image: {
      type: String,
    },
    width: {
      type: Number,
    },
    xval: {
      type: Number,
    },
    zval: {
      type: Number
    },
    display: {
      type: Boolean,
    },
  },
  layer5: {
    material: {
      type: String,
    },
    image: {
      type: String,
    },
    width: {
      type: Number,
    },
    xval: {
      type: Number,
    },
    zval: {
      type: Number
    },
    display: {
      type: Boolean,
    },
  },
  layer6: {
    material: {
      type: String,
    },
    image: {
      type: String,
    },
    width: {
      type: Number,
    },
    xval: {
      type: Number,
    },
    zval: {
      type: Number
    },
    display: {
      type: Boolean,
    },
  },
  layer7: {
    material: {
      type: String,
    },
    image: {
      type: String,
    },
    width: {
      type: Number,
    },
    xval: {
      type: Number,
    },
    zval: {
      type: Number
    },
    display: {
      type: Boolean,
    },
  },
  layer8: {
    material: {
      type: String,
    },
    image: {
      type: String,
    },
    width: {
      type: Number,
    },
    xval: {
      type: Number,
    },
    zval: {
      type: Number
    },
    display: {
      type: Boolean,
    },
  },
  layer9: {
    material: {
      type: String,
    },
    image: {
      type: String,
    },
    width: {
      type: Number,
    },
    xval: {
      type: Number,
    },
    zval: {
      type: Number
    },
    display: {
      type: Boolean,
    },
  },
  layer10: {
    material: {
      type: String,
    },
    image: {
      type: String,
    },
    width: {
      type: Number,
    },
    xval: {
      type: Number,
    },
    zval: {
      type: Number
    },
    display: {
      type: Boolean,
    },
  },
  comments: {
    type: String,
  },
  userId: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Ring', RingSchema)
