const axios = require('axios');
const { SlashCommandBuilder, messageLink } = require("@discordjs/builders")
const { MessageEmbed, EmbedBuilder, Embed } = require("discord.js")
const fs = require("fs")
const moment = require("moment")
const fetch = require("node-fetch")
const backtickmulti = "```"

const dogKey = "live_et8wZlive_PQ5XCGFUuOVifsV5OK3Kf6jZdLlX3f9ZTdaDo6OUtXZI1kTAdaNXNdoEwpdhOyIQiiVg13ENgGvfM9KYDfkl4NJqkOtUI6gIfaNrFLVjBF3GGpCbea4GACQ4CTC"

module.exports = {
	data: new SlashCommandBuilder()
    .setName("dog")
    .setDescription("Cute dog pictures"),
	async execute(interaction, client) {

        const fetchAPI = async () => {
            const response = await fetch(`https://api.thedogapi.com/v1/images/search`, {
             method: "GET",
             headers: {"x-api-key": dogKey}   
            })

            const jsonresp = await response.json();
            return await jsonresp[0].url
        }

        const dogembed = new EmbedBuilder()
        .setTitle(`Here is your dog!`)
        .setColor(`c3b4f7`)
        .setImage(await fetchAPI())
        .setTimestamp()
        .setFooter({ text: `/${interaction.commandName} || ${interaction.user.tag}`, iconURL: 'https://cdn.discordapp.com/attachments/1024569501074870364/1048463117144829983/Sentinel_Music.png'})

        await interaction.reply({ embeds: [dogembed]});

        const handleTime = (timestamp) => moment(timestamp).format("DD/MM/YYYY - hh:mm:ss a").replace("pm", "PM").replace("am", "AM"); 
		fs.appendFile('cmdl.txt', `[COMMAND USED] || ${interaction.guild} || TIMESTAMP : ${handleTime(interaction.timestamp)} || INTERACTION_AUTHOR :  ${interaction.user.username + '#' + interaction.user.discriminator} || COMMAND : ${interaction.commandName} || OPTION : ${interaction.options.getString("message") + '\n'}`, (err) => {
			if (err) throw err;    
		  });

          client.channels.cache.get('1056800003772907530').send(`${backtickmulti}yaml\n[COMMAND USED] GUILD NAME : ${interaction.guild} || TIMESTAMP : ${handleTime(interaction.timestamp)} || INTERACTION_AUTHOR :  ${interaction.user.username + '#' + interaction.user.discriminator} || COMMAND : ${interaction.commandName}\n${backtickmulti}`)  
    }}