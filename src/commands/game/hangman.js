const { Snake } = require('discord-gamecord');
const { SlashCommandBuilder, messageLink } = require("@discordjs/builders")
const { MessageEmbed, EmbedBuilder, Embed } = require("discord.js")
const fs = require("fs")
const moment = require("moment")
const { Hangman } = require('discord-gamecord');
const backtickmulti = "```"


module.exports = {
	data: new SlashCommandBuilder()
    .setName("hangman")
    .setDescription("Play the hangman game")
    .addStringOption((option) => option.setName("word").setDescription("Custom Word").setRequired(true)),
		async execute(interaction, client) {

      const word = interaction.options.getString("word")

      const Game = new Hangman({
        message: interaction,
        isSlashGame: true,
        embed: {
          title: 'Hangman',
          color: '#c3b4f7'
        },
        hangman: { hat: '🎩', head: '😟', shirt: '👕', pants: '🩳', boots: '👞👞' },
        customWord: word,
        timeoutTime: 60000,
        theme: 'nature',
        winMessage: 'You won! The word was **{word}**.',
        loseMessage: 'You lost! The word was **{word}**.',
        playerOnlyMessage: 'Only {player} can use these buttons.'
      });
      Game.startGame();
        


    }}