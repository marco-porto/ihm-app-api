const users = require("./users.json");
const ads = require("./ads.json");
const chats = require("./chats.json");
const portfolio = require("./portfolio.json");

module.exports = () => ({
  users,
  ads,
  chats,
  portfolio
});