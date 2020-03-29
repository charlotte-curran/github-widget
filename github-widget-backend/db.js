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

const testFunc = () => {
  return "hello func";
};
module.exports = [getFaves, testFunc];
