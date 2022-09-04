const mongoose = require('mongoose');

const { Schema } = mongoose;

const treeSchema = new Schema({
    address:{
        type: String,
        required: true
    },
    latitude:{
        type: Number,
        required: true,
        min: -90,
        max: 90,
    },
    longitude: {
        type: Number,
        required: true,
        min: -180,
        max: 180,
    },
    plantedBy: {
        type: String,
        required: true
    }
  });

  module.exports = mongoose.model('tree',treeSchema);