const users = require("../users.json").slice();

module.exports.getUsers =  (query) => {
	let items = Object.keys(query);

	if (!users) {
        console.log('Users is null');
    } else {
    	let result = users;
    	items.forEach (item => {
    		result = result.filter(user => user[item].startsWith(query[item]))
    	});
    	return result;
    }
};


module.exports.getUserById = (id) => {
	let user = users.filter((user) => {
		if (user.id == id) return user;
	});
	return user[0];
};

module.exports.addUser = (data) => {
	   
	   let obj = {};
       obj.id = users[users.length-1].id+1;
       obj.firstName = data.firstName;
       obj.lastName = data.lastName;
       obj.email = data.email;
       obj.phone = data.phone;
       users.push(obj);
       console.log (users);
       return {user: obj, message: `User ${obj.id} added`};
    
 };

module.exports.updateUserById =  (id, data) => {
		
	let user = users.find(user => user.id == id);

	if (user) {
	   let keys = Object.keys(data);
	   keys.forEach(key => user[key] = data[key]);
       return {user: user, message: `User with id ${id} updated`};
    } else {
    	return 'Not founded user';
    }

};

module.exports.editUserById =  (id, data) => {
	
	let user = users.find(user => user.id == id);

	if (user) {
	   let keys = Object.keys(data);
	if (keys.length == 0) {
            return {user: user, message: 'No data to update'}
        } else {
        	keys.forEach(key => user[key] = data[key]);
       		return {user: user, message: `Data of User with ${id} updated`};
   		}
    } else {
    	return 'Not founded user';
    }
};

module.exports.deleteUserById =  (id) => {
	
	let i = users.findIndex(user => user.id == id);

    if(i == -1) {return -1}
      else {
        users.splice(i, 1);
        return users;
    }
};