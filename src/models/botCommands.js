function setCommands(bot) {
  bot.setMyCommands([
    { command: "/start", description: "Запуск" },
    { command: "/settings", description: "Настройки бота" },
    { command: "/help", description: "Справочник Бота" },
    { command: "/info", description: "Информация бота" },
  ]);
}
module.exports = { setCommands };
