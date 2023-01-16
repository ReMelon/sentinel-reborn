const { Snake } = require('discord-gamecord');
const { SlashCommandBuilder, messageLink } = require("@discordjs/builders")
const { MessageEmbed, EmbedBuilder, Embed } = require("discord.js")
const fs = require("fs")
const moment = require("moment")
const { Slots } = require('discord-gamecord');
const backtickmulti = "```"


module.exports = {
	data: new SlashCommandBuilder()
    .setName("slots")
    .setDescription("Play the slot machine"),
		async execute(interaction, client) {

      const Game = new Slots({
        message: interaction,
        isSlashGame: true,
        embed: {
          title: 'Slot Machine',
          color: '#c3b4f7'
        },
        slots: ['🍇', '🍊', '🍋', '🍌']
      });
      
      Game.startGame();
        


    }}