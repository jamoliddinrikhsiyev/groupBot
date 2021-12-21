const { botGreet } = require("./greeting.js");
const { infoBot } = require("./infoBot.js");
const { botSettings } = require("./botSettings.js");

function botOn(bot) {
  bot.on("message", (event) => {
    console.log(event);
    if (event.text === "/start" || event.text === "/start@safe_groupbot") {
      botGreet(bot, event, "command");
    } else if (event.text === "/info" || event.text === "/info@safe_groupbot") {
      infoBot(bot, event, "command");
    } else if (
      event.text === "/settings" ||
      event.text === "/settings@safe_groupbot"
    ) {
      botSettings(bot, event, "command");
    }
  });
}

module.exports = {
  botOn,
};
