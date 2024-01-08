let express = require('express');
let router = express.Router();

const mongoCRUDs = require('../db/mongoCRUDs');

// Wird bei GET http://localhost:8000/users aufgerufen 
router.get('/', async function(req, res) {
  try {
    let locations = await mongoCRUDs.findAllLocations();
    if(locations)
      res.status(200).json(locations);
    else {
      res.status(404).send(`Locations not found!`);
    }
  } catch (err) {
    console.log(err);
    res.status(400).send("Something is not right!!");
  }
});

module.exports = router;