const { MessageEmbed, Embed } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders")
const { EmbedBuilder } = require("discord.js");
const { QueueRepeatMode } = require("discord-player");
const fs = require("fs")
const moment = require("moment")
const backtickmulti = "```"

module.exports = {
  data: new SlashCommandBuilder()
  .setName("loop")
  .setDescription("Loop the current song")
  .addIntegerOption((option) => option.setName("mode").setDescription("playlist, single, off")
        .addChoices(
            {name: 'playlist', value: QueueRepeatMode.QUEUE},
            {name: 'single', value: QueueRepeatMode.TRACK},
            {name: 'off', value: QueueRepeatMode.OFF}           

        ).setRequired(true)
  ),
  async execute(interaction, client) {
    const queue = client.player.getQueue(interaction.guildId)

    if(!queue) return await interaction.reply({
        embeds: [
            new EmbedBuilder()
            .setDescription(`There are no songs in the queue!`)
            .setColor(`c3b4f7`)
            .setTimestamp()
			.setFooter({ text: `/${interaction.commandName} || ${interaction.user.tag}`, iconURL: client.user.displayAvatarURL()})
        ]

    })

    
    const loopMode = interaction.options.getInteger("mode")
    queue.setRepeatMode(loopMode)
    const message = loopMode === QueueRepeatMode.QUEUE ? "playlist" : loopMode === QueueRepeatMode.TRACK? "single" : "off"
    await interaction.reply({
        embeds: [
            new EmbedBuilder()
            .setDescription(`Loop mode has been set to **${message}**`)
            .setColor(`c3b4f7`)
            .setTimestamp()
			.setFooter({ text: `/${interaction.commandName} || ${interaction.user.tag}`, iconURL: client.user.displayAvatarURL()})
        ]

    })



  },
};