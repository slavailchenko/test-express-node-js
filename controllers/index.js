// const users = require("../users.json");

const data = require ('../models/index');
const users = data.users();

module.exports.getUsers =  (req, res, next) => {
	    if (!users) {
        return next(404, 'No users was found');
    }

    req.body.users=users;

    res.json (req.body.users);
};


module.exports.getUserById =  (req, res, next) => {
	let id = req.params.id;
	    if (id > users[users.length-1].id) {
        res.status(404).send({error: {message: 'User not found'}});
        return;
    }

    const user = users[id];
    res.json (user);
};

module.exports.addUser =  (req, res, next) => {
	   
	    if (!req.body) {
        return next(404, 'Not valid data');
    }

       let obj = {};
       obj.id = users[users.length-1].id+1;
       obj.firstName = req.body.firstName || 'Ivan';
       obj.lastName = req.body.lastName ||'Petrov';
       obj.email = req.body.email ||'ss@i.ua';
       obj.phone = req.body.phone ||'0503440400';
       users.push(obj);
    
    res.json (users[obj.id]);
};

module.exports.updateUserById =  (req, res, next) => {
	let id = req.params.id;

	    if (id > users[users.length-1].id) {
        res.status(404).send({error: {message: 'User not found'}});
        return;
    }

       users[id].firstName = 'Ivan';
       users[id].lastName = 'Petrov';
       users[id].email = 'ss@i.ua';
       users[id].phone = '0503440400';
    res.json (users[id]);
};

module.exports.editUserById =  (req, res, next) => {
	let id = req.params.id;

	    if (id > users[users.length-1].id) {
        res.status(403).send({error: {message: 'User not found'}});
        return;
    }

       users[id].email = 'ss@i.ua';
       users[id].phone = '0503440400';
    res.json (users[id]);
};

module.exports.deleteUserById =  (req, res, next) => {
	let id = req.params.id;

	if (id > users[users.length-1].id) {
        res.status(403).send({error: {message: 'User not found'}});
        return;
    } else {
	    users.splice(id,1);
		res.json (users);
	}
};