const chalk = require("chalk");

module.exports = {
  name: "ready",
  once: true,
  async execute(client) {
    console.log(chalk.magenta(`[CLIENT] Logged in as ${client.user.tag}`));
  },
};
