const users = require("./users.json");
const ads = require("./ads.json");
const chats = require("./chats.json");
const portfolio = require("./portfolio.json");

const data = {
  users: users,
  ads:ads,
  chats: chats,
  portfolio: portfolio
}

const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router(data)

const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)

const port = process.env.PORT || 3000

server.listen(port, () => {
    console.log(`JSON Server is running on port ${port}`)
})