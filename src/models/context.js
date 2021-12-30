const context = (method, event) => {
  if (method === "greeting") {
    return `<b>👋 Привет, ${event.from.first_name}!</b>.\n@safe_groupbot помогает управлять группами.\n\n📌Чтобы разрешить боту выполнять действия добавьте его в администраторы в свою группу.\n\n⁉️ Чтобы ознакомиться с командами нажмите /help ⁉️\n\n⚙️ Настройте бот с помошью команды /settings ⚙️`;
  } else if (method === "info") {
    return `Этот бот помогает управлять группами.\nГод разработки: 2021.\nЯзык програмирования: NodeJs.`;
  } else if (method === "settings") {
    return `Настройки бота`;
  } else if (method === "help") {
    let str = ``;
    for (let i = 0; i < event.length; i++) {
      str += `\n/${event[i].command} - ${event[i].description}`;
    }
    console.log(str);
    return `Команды бота:${str}`;
  }
};

module.exports = { context };
