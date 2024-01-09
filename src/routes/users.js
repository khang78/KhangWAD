let express = require('express');
let router = express.Router();

const mongoCRUDs = require('../db/mongoCRUDs');

// Wird bei GET http://localhost:8000/users aufgerufen 
router.get('/', async function(req, res) {
  try {
    //let userDoc = await mongo_cruds.findOneUser("admina", "pass1234");
    let users = await mongoCRUDs.findAllUsers();
    if(users)
      res.status(200).json(users);
    else {
      res.status(404).send(`Users not found!`);
    }
  } catch (err) {
    console.log(err);
    res.status(400).send("Something is not right!!");
  }
});

// Wird bei  
// POST http://localhost:8000/users mit payload 
// {"username":"xyz", "password":"zyx"}
// erwartet eine payload diesen Formats ^^^
// der Header Content-Type: application/json MUSS mitgeschickt
// 
router.post('/', async function(req, res) {
  // wird automatisch in ein JS-Objekt umgewandelt, 
  // wenn Content-Type: application/json gesetzt ist
  try {
    let userToLogin = req.body;  
    let user = await mongoCRUDs.loginUser(userToLogin.username, userToLogin.password);
    console.log("This is the user " + user)
    if (user.username == userToLogin.username) {
      res.status(200).json(user)
    } else {
      res.status(401).send("Bad Login Credentials");
    }
  } catch (err) {
    console.log(err);
    res.status(400).send("Something is not right!!");
  }
});

module.exports = router;