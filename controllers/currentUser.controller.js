const user = require('../models/currentUser.model');

module.exports.currentUser = (req, res, next) => {
    let data = user.currentUser(req.currentUser.userId);
    res.json(data);
};