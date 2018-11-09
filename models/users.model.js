// const users = require("../users.json").slice();
// const fields = ['firstName', 'lastName', 'email', 'phone'];

// module.exports.getUsers =  (query) => {
// 	let items = Object.keys(query);
//   if (!items.length) {
//     return users;
//   } else {
//     let result = users;
//     items.forEach (item => {
//         if (item == 'id') 
//           result = result.filter(res => res[item] == query[item]) 
//         else
//           result = result.filter(res => res[item].startsWith(query[item]))
//     	});
//     	return result;
//     }
// };

// module.exports.getUserById = (id) => {
//   return users.find (user => user.id == id)
// };

// module.exports.addUser = (data) => {
 
//   let save = true;
//   let obj = {};
//   obj.id = users[users.length-1].id+1;
//   fields.forEach (item => {
//     if (data[item]) obj[item] = data[item]
//       else save = false;
//   });
//   if (save == false) return false
//     else {
//       users.push(obj);
//       console.log (users);
//       return {user: obj, message: `User ${obj.id} added`}
//     }
// };

// module.exports.updateUserById =  (id, data) => {
//   let edit = true;
//   let obj = {};
//   let userIndex = users.findIndex(user => user.id == id);
//     obj.id = users[userIndex].id;
//     fields.forEach (item => {
//     if (data[item]) obj[item] = data[item]
//       else edit = false;
//   });
//   if (edit == false) return false
//     else {
//       users[userIndex] = obj;
//       console.log (obj);
//       return {user: obj, message: `User ${obj.id} updated`}
//     }
// };

// module.exports.editUserById =  (id, data) => {
//   let someEdit = true;
//   let obj = {};
//   let someFields = ['email', 'phone'];
//   let userIndex = users.findIndex(user => user.id == id);
//   someFields.forEach (item => {
//     if (data[item]) obj[item] = data[item]
//       else someEdit = false;
//   });
//   if (someEdit == false) return false
//     else {
//       Object.assign(users[userIndex], obj);
//       console.log (users[userIndex]);
//       return {user: users[userIndex], message: `User ${users[userIndex].id} updated`}
//     }
// };

// module.exports.deleteUserById =  (id) => {
//   let i = users.findIndex(user => user.id == id);
//   if(i == -1) {return -1}
//     else {
//       users.splice(i, 1);
//       return users;
//     }
// };