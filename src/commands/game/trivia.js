const { Snake } = require('discord-gamecord');
const { SlashCommandBuilder, messageLink } = require("@discordjs/builders")
const { MessageEmbed, EmbedBuilder, Embed } = require("discord.js")
const fs = require("fs")
const moment = require("moment")
const { Trivia } = require('discord-gamecord');
const backtickmulti = "```"


module.exports = {
	data: new SlashCommandBuilder()
    .setName("trivia")
    .setDescription("Play the trivia game"),
		async execute(interaction, client) {

      const Game = new Trivia({
        message: interaction,
        isSlashGame: true,
        embed: {
          title: 'Trivia',
          color: '#c3b4f7',
          description: 'You have 60 seconds to guess the answer.'
        },
        timeoutTime: 60000,
        buttonStyle: 'PRIMARY',
        trueButtonStyle: 'SUCCESS',
        falseButtonStyle: 'DANGER',
        mode: 'multiple',  // multiple || single
        difficulty: 'medium',  // easy || medium || hard
        winMessage: 'You won! The correct answer is {answer}.',
        loseMessage: 'You lost! The correct answer is {answer}.',
        errMessage: 'Unable to fetch question data! Please try again.',
        playerOnlyMessage: 'Only {player} can use these buttons.'
      });
      
      Game.startGame();
        

    }}