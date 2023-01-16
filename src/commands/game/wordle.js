const { Snake } = require('discord-gamecord');
const { SlashCommandBuilder, messageLink } = require("@discordjs/builders")
const { MessageEmbed, EmbedBuilder, Embed } = require("discord.js")
const fs = require("fs")
const moment = require("moment")
const { Wordle } = require('discord-gamecord');
const backtickmulti = "```"


module.exports = {
	data: new SlashCommandBuilder()
    .setName("wordle")
    .setDescription("Play the wordle game"),
		async execute(interaction, client) {

      const Game = new Wordle({
        message: interaction,
        isSlashGame: true,
        embed: {
          title: 'Wordle',
          color: '#c3b4f7',
        },
        customWord: null,
        timeoutTime: 60000,
        winMessage: 'You won! The word was **{word}**.',
        loseMessage: 'You lost! The word was **{word}**.',
        playerOnlyMessage: 'Only {player} can use these buttons.'
      });
      
      Game.startGame();
        



    }}