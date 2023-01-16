const axios = require('axios');
const { SlashCommandBuilder, messageLink } = require("@discordjs/builders")
const { MessageEmbed, EmbedBuilder, Embed } = require("discord.js")
const fs = require("fs")
const moment = require("moment")
const fetch = require("node-fetch")
const backtickmulti = "```"

const catKey = "live_et8wZiiVg13ENgGvfM9KYDfkl4NJqkOtUI6gIfaNrFLVjBF3GGpCbea4GACQ4CTC"

module.exports = {
	data: new SlashCommandBuilder()
    .setName("cat")
    .setDescription("Cute cat pictures"),
	async execute(interaction, client) {

        const fetchAPI = async () => {
            const response = await fetch(`https://api.thecatapi.com/v1/images/search`, {
             method: "GET",
             headers: {"x-api-key": catKey}   
            })

            const jsonresp = await response.json();
            return await jsonresp[0].url
        }

        const catembed = new EmbedBuilder()
        .setTitle(`Here is your cat!`)
        .setColor(`c3b4f7`)
        .setImage(await fetchAPI())
        .setTimestamp()
        .setFooter({ text: `/${interaction.commandName} || ${interaction.user.tag}`, iconURL: client.user.displayAvatarURL()})

        await interaction.reply({ embeds: [catembed]});



    }}