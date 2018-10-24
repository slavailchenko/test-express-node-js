const users = require("../users.json").slice();

module.exports.getUsers =  (query) => {
	let items = Object.keys(query);
  if (!items.length) {
    return users;
  } else {
    let result = users;
    items.forEach (item => {
        if (item == 'id') 
          result = result.filter(res => res[item] == query[item]) 
        else
          result = result.filter(res => res[item].startsWith(query[item]))
    	});
    	return result;
    }
};

module.exports.getUserById = (id) => {
  return users.find (user => user.id == id)
};

module.exports.addUser = (data) => {
  let items = Object.keys(data);
  let obj = {};
  obj.id = users[users.length-1].id+1;
  items.forEach (item => {
    obj[item] = data[item];
  });
  users.push(obj);
  console.log (users);
  return {user: obj, message: `User ${obj.id} added`};
    
 };

module.exports.updateUserById =  (id, data) => {
  let user = users.find(user => user.id == id);
  if (user) {
    let items = Object.keys(data);
    if (items.length < 4) {
      return {user: user, message: 'No data to update'}
    } else {
      items.forEach(i => user[i] = data[i]);
      return {user: user, message: `User with id ${id} updated`};
    }
  } else {
    return 'Not founded user';
  }
};

module.exports.editUserById =  (id, data) => {
  let user = users.find(user => user.id == id);
  if (user) {
    let items = Object.keys(data);
    if (items.length == 0) {
      return {user: user, message: 'No data to update'}
    } else {
      items.forEach(i => user[i] = data[i]);
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