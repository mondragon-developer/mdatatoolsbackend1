const express = require("express");
const router = express.Router();
const User = require("../models/user");
const Interaction = require("../models/interaction");

// Create a new user
router.post("/users", async (req, res) => {
  const { full_name } = req.body;
  try {
    const newUser = new User({ full_name });
    const user = await newUser.save();
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// Create a new interaction
router.post("/interactions", async (req, res) => {
  const {
    user_id,
    name,
    question1a,
    question1b,
    question1c,
    question2a,
    question2b,
    question2c,
    question3a,
    question3b,
    question3c,
    question4a,
    question4b,
    question4c,
    question5a,
    question5b,
    question5c,
    opened_websites,
  } = req.body;
  try {
    const newInteraction = new Interaction({
      user_id,
      name,
      question1a,
      question1b,
      question1c,
      question2a,
      question2b,
      question2c,
      question3a,
      question3b,
      question3c,
      question4a,
      question4b,
      question4c,
      question5a,
      question5b,
      question5c,
      opened_websites,
    });
    const interaction = await newInteraction.save();
    res.json(interaction);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
