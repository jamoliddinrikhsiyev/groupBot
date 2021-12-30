const { context } = require("./context.js");
const { keyboards } = require("./keyboards.js");

const greetingObj = {
  parse_mode: "HTML",
  reply_markup: JSON.stringify({
    inline_keyboard: keyboards.greeting_keyboard.inline_keyboard,
  }),
};

function botGreet(bot, event, method) {
  if (method === "command") {
    bot.sendMessage(event.chat.id, context("greeting", event), greetingObj);
  } else if (method === "editMessage") {
    bot.editMessageText(context("greeting", event), {
      chat_id: event.message.chat.id,
      message_id: event.message.message_id,
      parse_mode: greetingObj.parse_mode,
      reply_markup: greetingObj.reply_markup,
    });
  }
}

module.exports = { botGreet };
