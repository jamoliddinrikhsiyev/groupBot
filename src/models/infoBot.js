const { context } = require("./context.js");
const { keyboards } = require("./keyboards.js");

function infoBot(bot, event, method) {
  if (method === "command") {
    bot.sendMessage(event.chat.id, context("info"), {
      parse_mode: "HTML",
      reply_to_message_id: event.message_id,
    });
  } else if (method === "editMessage") {
    bot.editMessageText(context("info"), {
      chat_id: event.message.chat.id,
      message_id: event.message.message_id,
      parse_mode: "HTML",
      reply_markup: JSON.stringify({
        inline_keyboard: keyboards.info_keyboards.inline_keyboard,
      }),
    });
  }
}

module.exports = { infoBot };
