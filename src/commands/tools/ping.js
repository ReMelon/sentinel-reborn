const { SlashCommandBuilder, messageLink } = require("@discordjs/builders")
const { channel } = require("diagnostics_channel")
const { MessageEmbed, EmbedBuilder, Embed } = require("discord.js")
const fs = require("fs")
const moment = require("moment")
const backtickmulti = "```"

module.exports = {
	data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("See the ping between the Bot/Discord API"),
	async execute(interaction, client) {
       interaction.reply({ content: 'Calculating . . .'}).then((message) => {
        const delay = Math.abs(Date.now() - interaction.createdTimestamp);

        const pingembed = new EmbedBuilder()
			.setColor(`c3b4f7`)
			.setTitle(`Bot Latency`)
            .setDescription(`${backtickmulti}yamln\n${delay}ms\n${backtickmulti}`)
            .setTimestamp()
			.setFooter({ text: `/${interaction.commandName} || ${interaction.user.tag}`, iconURL: client.user.displayAvatarURL()})

        const wspingembed = new EmbedBuilder()
            .setColor(`c3b4f7`)
            .setTitle(`Discord API Latency`)
            .setDescription(`${backtickmulti}yaml\n${client.ws.ping}ms\n${backtickmulti}`)
            .setTimestamp()
			.setFooter({ text: `/${interaction.commandName} || ${interaction.user.tag}`, iconURL: client.user.displayAvatarURL()})

        const channel = interaction.channel
        channel.send({ embeds: [pingembed]})
        channel.send({ embeds: [wspingembed]})
        setTimeout(() => interaction.deleteReply(), 2000);

      })    
    }}


