const { greetingObj } = require("./greeting.js");
const { context } = require("./context.js");
const { infoBot } = require("./infoBot.js");
const { botSettings } = require("./botSettings.js");
const { botGreet } = require("./greeting.js");
const { helpBot } = require("./helpBot.js");

function callback_query(bot) {
  bot.on("callback_query", (event) => {
    console.log(event);
    if (event.data === "/settings") {
      botSettings(bot, event, "editMessage");
    } else if (event.data === "/help") {
      helpBot(bot, event, "editMessage");
    } else if (event.data === "/info") {
      infoBot(bot, event, "editMessage");
    } else if (event.data === "/back") {
      botGreet(bot, event, "editMessage");
    }
  });
}

module.exports = { callback_query };
