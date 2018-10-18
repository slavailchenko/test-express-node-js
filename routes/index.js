const express = require('express');
const router = express.Router();
const fs = require("fs");

router.get('/', function (req, res) {
   fs.readFile( "users.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
});

router.get('/:id', function (req, res) {
    fs.readFile("users.json", 'utf8', function (err, data) {
      let users = JSON.parse( data );
      const user = users[req.params.id]; 
      console.log( user );
      res.end( JSON.stringify(user));
   });
});

router.post('/addUser', function (req, res) {
   fs.readFile("users.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       let obj = {};
       obj.id = data[data.length-1].id+1;
       obj.firstName = 'Ivan';
       obj.lastName = 'Petrov';
       obj.email = 'ss@i.ua';
       obj.phone = '0503440400';
       data.push(obj);
       console.log( data);
       res.end( JSON.stringify(data));
   });
});

router.put('/updateUser/:id/', function (req, res) {
   let id = req.params.id;
   fs.readFile("users.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       data[id].firstName = 'Ivan';
       data[id].lastName = 'Petrov';
       data[id].email = 'ss@i.ua';
       data[id].phone = '0503440400';
       console.log( data);
       res.end( JSON.stringify(data));
   });
});

router.patch('/editUser/:id/', function (req, res) {
   let id = req.params.id;
   fs.readFile("users.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       data[id].email = 'gggg@gmail.com';
       data[id].phone = '0955550505';
       console.log( data);
       res.end( JSON.stringify(data));
   });
});


router.delete('/deleteUser/:id/', function (req, res) {
	let id = req.params.id;
    fs.readFile("users.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       data.splice(id, 1);
       console.log( data );
       res.end( JSON.stringify(data));
   });
});

module.exports = router;