const { SlashCommandBuilder, messageLink } = require("@discordjs/builders")
const { MessageEmbed, EmbedBuilder, Embed } = require("discord.js")
const fs = require("fs")
const moment = require("moment")
const axios = require('axios')
const backtickmultistart = "```ansi\n[2;31m[2;36m[2;32m"
const backtickmultiend = "[0m[2;36m[0m[2;31m[0m\n```"
const backtick = "`"
const backtickmulti = "```"



module.exports = {
	data: new SlashCommandBuilder()
    .setName("joke")
    .setDescription("Get a random joke"),
	async execute(interaction, client) {

        

        const jokeJSON = await axios('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,racist,explicit').then((res) => res.data);

      

          const jokembed = new EmbedBuilder()
            .setTitle(`${interaction.user.tag} used ${backtick}/joke${backtick}`)
			      .setColor(`c3b4f7`)
            .setDescription(`${backtickmultistart}${jokeJSON.joke || jokeJSON.setup || `\n`}\n${jokeJSON.delivery || ""}${backtickmultiend}`)
            .setTimestamp()
            .setFooter({ text: `by ${interaction.user.tag} || ${interaction.commandName}`, iconURL: client.user.displayAvatarURL()})
            interaction.reply({ embeds: [jokembed]})



    }}









