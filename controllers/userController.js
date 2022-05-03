const { User, Thought } = require('../models');

module.exports = {
    // Get all courses
    getUsers(req, res) {
      User.find()
        .then((users) => res.json(users))
        .catch((err) => res.status(500).json(err));
    }
}