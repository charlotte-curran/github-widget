const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("db.json");
const db = low(adapter);

const newState = {};
db.setState(newState);

db.defaults({
  favorites: [251022534, 2325298]
}).write();

const getFaves = () => {
  return db.get("favorites").value();
};

const addToFaves = id => {
  db.get("favorites")
    .push(id)
    .write();

  return db.get("favorites").value();
};

const removeFromFaves = id => {
  db.get("favorites")
    .pull(id)
    .write();

  return db.get("favorites").value();
};

module.exports = [getFaves, addToFaves, removeFromFaves];
