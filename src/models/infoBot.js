const { context } = require("./context.js");
const { keyboards } = require("./keyboards.js");

function infoBot(bot, event, method) {
  if (method === "command") {
    bot.sendMessage(event.chat.id, context(event, "info"), {
      parse_mode: "HTML",
    });
  } else if (method === "editMessage") {
    bot.editMessageText(context(event, "info"), {
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
