const { Snake } = require('discord-gamecord');
const { SlashCommandBuilder, messageLink } = require("@discordjs/builders")
const { MessageEmbed, EmbedBuilder, Embed } = require("discord.js")
const fs = require("fs")
const moment = require("moment")
const { TicTacToe } = require('discord-gamecord');
const backtickmulti = "```"


module.exports = {
	data: new SlashCommandBuilder()
    .setName("tictactoe")
    .setDescription("Play the tictactoe game")    .addUserOption(
      option => option
      .setName("user")
      .setDescription("Person to play ttt with").setRequired(true)
  ),
		async execute(interaction, client) {

      const Game = new TicTacToe({
        message: interaction,
        isSlashGame: true,
        opponent: interaction.options.getUser("user"),
        embed: {
          title: 'Tic Tac Toe',
          color: '#c3b4f7',
          statusTitle: 'Status',
          overTitle: 'Game Over'
        },
        emojis: {
          xButton: '❌',
          oButton: '🔵',
          blankButton: '➖'
        },
        timeoutTime: 60000,
        xButtonStyle: 'DANGER',
        oButtonStyle: 'PRIMARY',
        turnMessage: '{emoji} | Its turn of player **{player}**.',
        winMessage: '{emoji} | **{player}** won the TicTacToe Game.',
        tieMessage: 'The Game tied! No one won the Game!',
        timeoutMessage: 'The Game went unfinished! No one won the Game!',
        playerOnlyMessage: 'Only {player} and {opponent} can use these buttons.'
      });
      
      Game.startGame();
        


    }}