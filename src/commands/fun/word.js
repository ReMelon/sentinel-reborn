const { SlashCommandBuilder, messageLink } = require("@discordjs/builders")
const { MessageEmbed, EmbedBuilder, Embed } = require("discord.js")
const fs = require("fs")
const moment = require("moment")
const axios = require("axios")
const backtickmulti = "```"

module.exports = {
	data: new SlashCommandBuilder()
    .setName("word")
    .setDescription("Get a random word"),
	async execute(interaction, client) {

        const data = await axios("https://random-word-api.herokuapp.com/word?number=1").then((res) => res.data)

        const wordembed = new EmbedBuilder()
        .setTitle(`Here is a random word!`)
        .setColor(`c3b4f7`)
        .setDescription(`${backtickmulti}\n${data}\n${backtickmulti}`)
        .setTimestamp()
        .setFooter({ text: `/${interaction.commandName} || ${interaction.user.tag}`, iconURL: client.user.displayAvatarURL()})

        await interaction.reply({ embeds: [wordembed]});



    }}