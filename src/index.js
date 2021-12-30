(async () => {
  const Promise = require("bluebird");
  Promise.config({
    cancellation: true,
  });
  const TelegramBot = require("node-telegram-bot-api");
  const express = require("express");
  const app = express();
  const path = require("path");
  const server = require("http").createServer(app);
  const io = await require("socket.io")(server);
  const ejs = require("ejs");
  const cors = require("cors");
  const { PORT, token, host } = require("./config.js");
  const bot = new TelegramBot(token, { polling: true });

  //BOT SECTION

  const { botOn } = require("./models/botOn.js");
  const { callback_query } = require("./models/callback_queries.js");
  const { setCommands } = require("./models/botCommands.js");

  // let obj = bot.getUpdates({
  //   allowed_updates: ["message", "edited_channel_post", "callback_query"],
  // });
  // // console.log(await obj);

  botOn(bot);
  setCommands(bot);
  callback_query(bot);

  //SERVER SECTION

  app.set("view engine", "ejs");
  app.engine("html", ejs.renderFile);
  app.use(cors());
  app.use(express.static(path.join(__dirname, "assets")));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.get("/", (req, res) => {
    res.render(path.join(__dirname, "views", "index.html"));
  });

  io.on("connect", (socket) => {
    console.log("the user connected");
  });

  server.listen(PORT, () =>
    console.log(`server listen at http://${host}:${PORT}`)
  );
})();
