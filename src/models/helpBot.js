const { context } = require("./context.js");
const { keyboards } = require("./keyboards.js");

async function helpBot(bot, event, method) {
  const commands = await bot.getMyCommands();
  console.log(commands);
  if (method === "command") {
    bot.sendMessage(event.chat.id, context("help", commands), {
      parse_mode: "HTML",
      reply_to_message_id: event.message_id,
    });
  } else if (method === "editMessage") {
    bot.editMessageText(context("help", commands), {
      chat_id: event.message.chat.id,
      message_id: event.message.message_id,
      reply_markup: {
        inline_keyboard: keyboards.back.inline_keyboard,
      },
    });
  }
}

module.exports = { helpBot };
