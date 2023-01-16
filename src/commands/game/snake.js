const { Snake } = require('discord-gamecord');
const { SlashCommandBuilder, messageLink } = require("@discordjs/builders")
const { MessageEmbed, EmbedBuilder, Embed } = require("discord.js")
const fs = require("fs")
const moment = require("moment")
const backtickmulti = "```"


module.exports = {
	data: new SlashCommandBuilder()
    .setName("snake")
    .setDescription("Play the snake game"),
		async execute(interaction, client) {

            const Game = new Snake({
                message: interaction,
                isSlashGame: true,
                embed: {
                  title: 'Snake Game',
                  overTitle: 'Game Over',
                  color: '#c3b4f7'
                },
                emojis: {
                  board: '⬛',
                  food: '🍎',
                  up: '⬆️', 
                  down: '⬇️',
                  left: '⬅️',
                  right: '➡️',
                },
                stopButton: 'Stop',
                timeoutTime: 60000,
                snake: { head: '🟢', body: '🟩', tail: '🟢', over: '💀' },
                foods: ['🍎', '🍇', '🍊', '🫐', '🥕', '🥝', '🌽'],
                playerOnlyMessage: 'Only {player} can use these buttons.'
              });
              
              

            Game.startGame();
        


    }}