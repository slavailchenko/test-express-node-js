const users = require('./users.json');

module.exports.currentUser = (query) => {
    return users.find(user => user.id == query);
};