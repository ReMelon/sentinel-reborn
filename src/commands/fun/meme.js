const axios = require('axios');
const { SlashCommandBuilder, messageLink } = require("@discordjs/builders")
const { MessageEmbed, EmbedBuilder, Embed } = require("discord.js")
const fs = require("fs")
const moment = require("moment")
const fetch = require("node-fetch")
const backtickmulti = "```"

let subreddits = ['CrappyDesign', 'mildlyinteresting', 'TIHI', 'MinecraftMemes', 'memes', 'Hmmm', 'DiWHY', 'FUCKYOUINPARTICALR', 'memes', 'FukImOld', 
'MinecraftMemes', 'ItemShop', 'Scams', 'Pointlesslygendered', 'Holup', 'oddlyterrifying', 'Crappyoffbrands', 'FoundSatan', 'Technicallythetruth', 'glitchinthematrix',
'Antiwork', 'DangerousDesign', 'Crappydesign', 'NobodyAsked', 'AbsoluteUnits', 'AbsoluteUnits', 'Starterpacks', 'redneckengineering', 'perfecttiming', 'Funny',
'madlads', 'softwaregore', 'facepalm', 'crackheadcraigslist', 'comedyheaven', 'ofcoursethatsathing', 'ihadstroke', 'techsupportgore', 'quityourbullshit'];

function titleCase(str) {
  str = str.toLowerCase().split(' ');
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(' ');
}

module.exports = {
	data: new SlashCommandBuilder()
    .setName("meme")
    .setDescription("Get a meme!"),

	async execute(interaction, client) {

            let subreddit = subreddits[Math.floor(Math.random() * subreddits.length)];
            const url = await fetch(`https://www.reddit.com/r/${subreddit}/random/.json`);
            const random = await url.json();

            const memeembed = new EmbedBuilder()
                .setTitle(`Random Meme | ${random[0].data.children[0].data.title}`)
                .setImage(random[0].data.children[0].data.url)
                .setColor(`c3b4f7`)
                .setTimestamp()
                .setFooter({ text: `/${interaction.commandName} || ${interaction.user.tag}`, iconURL: client.user.displayAvatarURL()})

                await interaction.reply({ embeds: [memeembed] });
          



    }}





