const { botGreet } = require("./greeting.js");
const { infoBot } = require("./infoBot.js");
const { botSettings } = require("./botSettings.js");
const { helpBot } = require("./helpBot.js");
const fs = require("fs");
const path = require("path");
const allGroups = require("../assets/json/groups.json");

async function botOn(bot) {
  bot.on("message", async (event) => {
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
    } else if (event.text === "/help" || event.text === "/help@safe_groupbot") {
      helpBot(bot, event, "command");
    }

    //read ne groups
    // if (event.new_chat_participant) {
    //   let obj = {
    //     chat_id: event.chat.id,
    //     chat_title: event.chat.title,
    //     chat_type: event.chat.type,
    //     date: event.date,
    //   };

    //   allGroups.push(obj);

    //   fs.writeFileSync(
    //     path.join(process.cwd(), "src", "assets", "json", "groups.json"),
    //     JSON.stringify(allGroups, null, 4)
    //   );
    //   // readGroups(obj, allGroups);
    // }
  });
  // console.log(bot.getUpdates());
}

// function readGroups(object, groups) {
//   let obj = {
//     chat_id: object.chat_id,
//     chat_title: object.chat_title,
//     chat_type: object.chat_type,
//     date: object.date,
//   };

//   groups.push(obj);
// }

module.exports = {
  botOn,
};
