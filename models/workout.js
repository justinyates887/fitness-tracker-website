const mongoose = require("mongoose");

const defaultNumber = {
    type: Number,
    default: 0
}

const trimString  = {
    type: String,
    trim: true
}

const workoutSchema = new mongoose.Schema({
  day: {
    type: Date,
    default: Date.now
  },

  exercises: [
    {
      type: trimString,
      name: trimString,
      duration: Number,
      weight: defaultNumber,
      reps: defaultNumber,
      sets: defaultNumber,
      distance: defaultNumber
    }
  ],

  totalDuration: defaultNumber

});

module.exports = mongoose.model("workout", workoutSchema);