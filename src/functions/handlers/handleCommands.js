const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");
const fs = require("fs");
const chalk = require("chalk");
require("console-stamp")(console, {
  format:
    '(||).yellow :date(yyyy/mm/dd"] ["hh:MM TT  ss.l).blue :label(5) (||).yellow',
});
const dotenv = require("dotenv")

dotenv.config()
const CLIENTID = process.env.CLIENTID

module.exports = (client) => {
  client.handleCommands = async () => {
    const commandFolders = fs.readdirSync("./src/commands");
    for (const folder of commandFolders) {
      const commandFiles = fs
        .readdirSync(`./src/commands/${folder}`)
        .filter((file) => file.endsWith(".js"));

      const { commands, commandArray } = client;
      for (const file of commandFiles) {
        const command = require(`../../commands/${folder}/${file}`);
        commands.set(command.data.name, command);
        commandArray.push(command.data.toJSON());
        console.log(
          chalk.cyan(
            `[COMMAND HANDLE] [/${command.data.name}] has passed through the handler`
          )
        );
      }
    }

    const clientId = process.env.CLIENTID;

    const rest = new REST({ version: "9" }).setToken(process.env.TOKEN);
    try {
      console.log(
        chalk.green(`[COMMAND HANDLE] Refreshing application (/) commands.`)
      );

      await rest.put(Routes.applicationCommands(clientId), {
        body: client.commandArray,
      });

      console.log(
        chalk.green(`[COMMAND HANDLE] Refreshed application (/) commands.`)
      );
    } catch (error) {
      console.error(error);
    }
  };

  client.on("guildCreate", async (guild) => {
    const clientId = "1045264581280399401";
    const rest = new REST({ version: "9" }).setToken(process.env.TOKEN);

    try {
      console.log(
        chalk.green(
          `[COMMAND HANDLE] Refreshing application (/) commands. [NEW SERVER]`
        )
      );

      await rest.put(Routes.applicationCommands(clientId), {
        body: client.commandArray,
      });

      console.log(
        chalk.green(
          `[COMMAND HANDLE] Refreshed application (/) commands. [NEW SERVER]`
        )
      );
    } catch (error) {
      console.error(error);
    }
  });
};
