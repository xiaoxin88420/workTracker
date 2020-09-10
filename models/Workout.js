const { model, Schema } = require('mongoose')

const Workout = new Schema ({
  day: {
    type: Date,
    // required: true
  },
  exercises: [{
    name: {
      type: String,
      unique: true,
      // required: true
    },
    type: {
      type: String,
      // required: true
    },
    weight: {
      type: Number,
      // required: true,
    },
    sets: {
      type: Number,
      // required: true
    },
    reps: {
      type: Number,
      // required: true
    },
    duration: {
      type: Number,
      // required: true
    },
    distance: {
      type: Number,
    }
  }]
}, {timestamps: true})

module.exports = model('Workout', Workout)