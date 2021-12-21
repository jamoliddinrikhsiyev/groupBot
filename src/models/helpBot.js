const { context } = require("./context.js");

function helpBot(bot, event, method) {
  const commands = bot.getMyCommands();
  console.log(commands);
  if (method === "command") {
    bot.sendMessage(event.chat.id, context(commands, "help"), {
      parse_mode: "HTML",
    });
  } else if (method === "editMessage") {
    bot.editMessageText(context(commands, "help"), {
      chat_id: event.message.chat.id,
      message_id: event.message.message_id,
      reply_markup: {
        inline_keyboard: keyboards.back.inline_keyboard,
      },
    });
  }
}

module.exports = { helpBot };
