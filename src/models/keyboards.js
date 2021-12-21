const keyboards = {
  greeting_keyboard: {
    inline_keyboard: [
      [
        { text: "⚙️ Настройки ⚙️", callback_data: "/settings" },
        { text: "📋 Инфо 📋", callback_data: "/info" },
      ],
      [
        {
          text: "⭕️ Справка ⭕️",
          callback_data: "/help",
        },
      ],
    ],
  },
  settings_keyboard: {
    inline_keyboard: [[{ text: "◀️ Назад", callback_data: "/back" }]],
  },
  info_keyboards: {
    inline_keyboard: [[{ text: "◀️ Назад", callback_data: "/back" }]],
  },
  back: {
    inline_keyboard: [[{ text: "◀️ Назад", callback_data: "/back" }]],
  },
};

module.exports = { keyboards };
