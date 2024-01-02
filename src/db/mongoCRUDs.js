const { MongoClient } = require("mongodb");

// Replace DB_USER, DB_USER_PASSWD, DB_NAME here:
const db_user = "waddatabase_khang";
const db_pswd = "gqOjuQpiC";
const db_name= "waddatabase"
const dbHostname = "mongodb1.f4.htw-berlin.de"
const dbPort = 27017
const uri = `mongodb://${db_user}:${db_pswd}@${dbHostname}:${dbPort}/${db_name}`;

function MongoCRUDs (db_name, uri) {
    this.db_name = db_name;
    this.uri = uri;
} 

MongoCRUDs.prototype.findOneUser  = async function(uNameIn, passwdIn) {
  const client = new MongoClient(uri);
  try {
    const database = client.db(db_name);
    const users = database.collection('users');
    const query = {username: uNameIn, password: passwdIn};
    const doc = await users.findOne(query);
    if (doc) {
      delete doc.password;
    }
    return doc;
  } finally {
    // Ensures that the client will close when finished and on error
    await client.close();
  }
};

MongoCRUDs.prototype.findAllUsers  = async function() {
  const client = new MongoClient(uri);
  try {  
    const database = client.db(db_name);
    const users = database.collection('users');
    const query = {};
    const cursor = users.find(query);
    // Print a message if no documents were found
    if ((await users.countDocuments(query)) === 0) {
      console.log("No documents found!");
      return null;
    }
    let docs = new Array();
    for await (const doc of cursor) {
      delete doc.password;
      docs.push(doc);
    }
    return docs;
  } finally {
    // Ensures that the client will close when finished and on error
    await client.close();
  }
};

const mongoCRUDs = new MongoCRUDs(db_name, uri);

module.exports = mongoCRUDs;