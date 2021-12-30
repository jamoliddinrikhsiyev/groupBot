const { context } = require("./context.js");
const { keyboards } = require("./keyboards.js");

function botSettings(bot, event, method) {
  if (method === "command") {
    bot.sendMessage(event.chat.id, context("settings"), {
      parse_mode: "HTML",
    });
  } else if (method === "editMessage") {
    bot.editMessageText(context("settings"), {
      chat_id: event.message.chat.id,
      message_id: event.message.message_id,
      reply_markup: {
        inline_keyboard: keyboards.settings_keyboard.inline_keyboard,
      },
    });
  }
}

module.exports = { botSettings };
