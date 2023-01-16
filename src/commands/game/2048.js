const { Snake } = require('discord-gamecord');
const { SlashCommandBuilder, messageLink } = require("@discordjs/builders")
const { MessageEmbed, EmbedBuilder, Embed } = require("discord.js")
const fs = require("fs")
const moment = require("moment")
const { TwoZeroFourEight } = require('discord-gamecord');
const backtickmulti = "```"


module.exports = {
	data: new SlashCommandBuilder()
    .setName("2048")
    .setDescription("Play the 2048 game"),
		async execute(interaction, client) {

      const Game = new TwoZeroFourEight({
        message: interaction,
        isSlashGame: true,
        embed: {
          title: '2048',
          color: '#c3b4f7'
        },
        emojis: {
          up: '⬆️',
          down: '⬇️',
          left: '⬅️',
          right: '➡️',
        },
        timeoutTime: 60000,
        buttonStyle: 'PRIMARY',
        playerOnlyMessage: 'Only {player} can use these buttons.'
      });
      
      Game.startGame();
        



    }}