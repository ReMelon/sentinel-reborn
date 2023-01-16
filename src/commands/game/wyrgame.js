const { Snake } = require('discord-gamecord');
const { SlashCommandBuilder, messageLink } = require("@discordjs/builders")
const { MessageEmbed, EmbedBuilder, Embed } = require("discord.js")
const fs = require("fs")
const moment = require("moment")
const { WouldYouRather } = require('discord-gamecord');
const backtickmulti = "```"


module.exports = {
	data: new SlashCommandBuilder()
    .setName("wouldyourather")
    .setDescription("Play the would you rather game"),
		async execute(interaction, client) {

      const Game = new WouldYouRather({
        message: interaction,
        isSlashGame: true,
        embed: {
          title: 'Would You Rather',
          color: '#c3b4f7',
        },
        buttons: {
          option1: 'Option 1',
          option2: 'Option 2',
        },
        timeoutTime: 60000,
        errMessage: 'Unable to fetch question data! Please try again.',
        playerOnlyMessage: 'Only {player} can use these buttons.'
      });
      
      Game.startGame();
        



    }}