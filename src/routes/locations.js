let express = require('express');
let router = express.Router();

const mongoCRUDs = require('../db/mongoCRUDs');
 
router.get('/', async function(req, res) {
  try {
    let locations = await mongoCRUDs.findAllLocations();
    if(locations)
      res.status(200).json(locations);
    else {
      res.status(404).send("Locations not found!");
  }
  } catch (err) {
    console.log(err);
    res.status(400).send("Something is not right!!");
  }
});

router.get('/:id', async function(req, res) {
  try {
    let locationId = req.params.id
    let location = await mongoCRUDs.findLocation(locationId)
    if (location) {
      res.status(200).json(location);
    } else {
      res.status(404).send("Location with ID ${locationId} not found!");
    }
  } catch (err) {
    console.log(err);
    res.status(400).send("Something is not right!!");
  }
});

router.post('/', async function(req, res) {
  try {
    let location = req.body
    let newLocation = await mongoCRUDs.createNewLocation(location)
    res.status(201).json(newLocation);

  } catch (err) {
    console.log(err);
    res.status(400).send("Something is not right!!");
  }
});

router.put('/:id', async function(req, res) {
  try {
    let locationId = req.params.id
    let newLocation = req.body
    let location = await mongoCRUDs.updateLocation(locationId, newLocation)
    if (location) {
      res.status(200).json(location);
    } else {
      res.status(404).send("Location with ID ${locationId} not found!");
    }
  } catch (err) {
    console.log(err);
    res.status(400).send("Something is not right!!");
  }
});

router.delete('/:id', async function(req, res) {
  try {
    let locationId = req.params.id
    let location = await mongoCRUDs.deleteLocation(locationId)
    res.status(200).send("Success");
  } catch (err) {
    console.log(err);
    res.status(400).send("Something is not right!!");
  }
});



module.exports = router;