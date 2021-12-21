const dotenv = require("dotenv");
dotenv.config();

const host = require("./lib/getIp.js")({ internal: false });
const token = process.env.BOT_TOKEN;
const PORT = process.env.PORT;

module.exports = { token, PORT, host };
