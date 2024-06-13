const mongoose = require("mongoose");

const InteractionSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  name: String,
  question1a: String,
  question1b: String,
  question1c: String,
  question2a: String,
  question2b: String,
  question2c: String,
  question3a: String,
  question3b: String,
  question3c: String,
  question4a: String,
  question4b: String,
  question4c: String,
  question5a: String,
  question5b: String,
  question5c: String,
  opened_websites: String,
  created_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Interaction", InteractionSchema);
