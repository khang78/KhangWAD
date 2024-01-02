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
router.post('/', function(req, res) {
  // wird automatisch in ein JS-Objekt umgewandelt, 
  // wenn Content-Type: application/json gesetzt ist
  let userToLogin = req.body;  
  console.log (userToLogin);
  if (userToLogin.username === "admina") {
    let mina = {userId: userToLogin.username, name: "Mina", role: "admin"};
    res.status(200).json(mina);
  } else if (userToLogin.username === "normalo") {
    let norm = { userId: userToLogin.username, name: "Norman", role: "non-admin"};
    res.status(200).json(norm);
  } else {
    res.status(401).send("Bad Login Credentials");
  }
});

module.exports = router;