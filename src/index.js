const { MessageEmbed, EmbedBuilder, MessageFlags, ActivityType, Collection } = require("discord.js")
const chalk = require("chalk");
const Discord = require("discord.js")
const dotenv = require("dotenv")
const { REST } = require("@discordjs/rest")
const { Routes } = require("discord-api-types/v9")
const fs = require("fs")
const { Player } = require("discord-player")
const { GatewayIntentBits } = require("discord.js")
const moment = require("moment")
const backtickmulti = "```"


dotenv.config()
const TOKEN = process.env.TOKEN
const databaseToken = process.env.databaseToken

const client = new Discord.Client({
    intents: [
        ["Guilds"],
        ["GuildVoiceStates"],
        ["GuildMessages"],
        ["MessageContent"],
    ]
})




client.commands = new Collection();
client.commandArray = [];
client.player = new Player(client, {
    ytdlOptions: {
        quality: "highestaudio",
        highWaterMark: 1 << 25
    }
})

const functionFolders = fs.readdirSync(`./src/functions`);
for (const folder of functionFolders) {
  const functionFiles = fs
    .readdirSync(`./src/functions/${folder}`)
    .filter((file) => file.endsWith(`.js`));
  for (const file of functionFiles)
    require(`./functions/${folder}/${file}`)(client);
}

client.handleEvents();
client.handleCommands();
client.login(TOKEN);







