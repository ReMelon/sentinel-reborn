const { SlashCommandBuilder, messageLink } = require("@discordjs/builders")
const { MessageEmbed, EmbedBuilder, Embed } = require("discord.js")
const fs = require("fs")
const moment = require("moment")
const backtickmulti = "```"

module.exports = {
	data: new SlashCommandBuilder()
    .setName("say")
    .setDescription("Make the bot say your message!")
    .addStringOption((option) => option.setName("message").setDescription("What you want the bot to say").setRequired(true)),
	async execute(interaction, client) {

        const channel = interaction.channel
        channel.send(`${interaction.options.getString("message")}`)
        interaction.reply({ content: 'Done!', ephemeral: true });    


    }}


