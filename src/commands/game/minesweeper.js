const { SlashCommandBuilder, messageLink } = require("@discordjs/builders")
const { MessageEmbed, EmbedBuilder, Embed } = require("discord.js")
const fs = require("fs")
const moment = require("moment")
const { Minesweeper } = require('discord-gamecord');
const backtickmulti = "```"
module.exports = {
	data: new SlashCommandBuilder()
    .setName("minesweeper")
    .setDescription("Start a minesweeper game"),
		async execute(interaction, client) {

      const Game = new Minesweeper({
        message: interaction,
        isSlashGame: true,
        embed: {
          title: 'Minesweeper',
          color: '#c3b4f7',
          description: 'Click on the buttons to reveal the blocks except mines.'
        },
        emojis: { flag: '🚩', mine: '💣' },
        mines: 5,
        timeoutTime: 60000,
        winMessage: 'You won the Game! You successfully avoided all the mines.',
        loseMessage: 'You lost the Game! Beaware of the mines next time.',
        playerOnlyMessage: 'Only {player} can use these buttons.'
      });
      
      Game.startGame();



    }}

