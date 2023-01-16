const { SlashCommandBuilder, messageLink } = require("@discordjs/builders")
const { MessageEmbed, EmbedBuilder, Embed } = require("discord.js")
const fs = require("fs")
const moment = require("moment")
const backtickmulti = "```"

module.exports = {
	data: new SlashCommandBuilder()
    .setName("embed")
    .setDescription("Send a embed with your options")
    .addStringOption((option) => option.setName("description").setDescription("What you want the bot to say").setRequired(true))
    .addStringOption((option) => option.setName("title").setDescription("The title of the embed"))
    .addStringOption((option) => option.setName("footer").setDescription("The footer of the embed")),
    
    
		async execute(interaction, client) {

        const embedtitle = interaction.options.getString("title")
        const embeddescription = interaction.options.getString("description")
        const footer = interaction.options.getString("footer")


        const customembed = new EmbedBuilder()
        .setTitle(`${embedtitle || " "}`)
        .setDescription(`${embeddescription}`)
        .setColor(`c3b4f7`)
        .setTimestamp()
        .setFooter({ text: `${footer || `/${interaction.commandName} || ${interaction.user.tag}`}`})


        const channel = interaction.channel
        await channel.send({ embeds: [customembed]});
        interaction.reply({ content: 'Done!', ephemeral: true });   



    }}