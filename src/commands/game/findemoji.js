const { Snake } = require('discord-gamecord');
const { SlashCommandBuilder, messageLink } = require("@discordjs/builders")
const { MessageEmbed, EmbedBuilder, Embed } = require("discord.js")
const fs = require("fs")
const moment = require("moment")
const { FindEmoji } = require('discord-gamecord');
const backtickmulti = "```"


module.exports = {
	data: new SlashCommandBuilder()
    .setName("findemoji")
    .setDescription("Play the find emoji game"),
		async execute(interaction, client) {

      const Game = new FindEmoji({
        message: interaction,
        isSlashGame: true,
        embed: {
          title: 'Find Emoji',
          color: '#c3b4f7',
          description: 'Remember the emojis from the board below.',
          findDescription: 'Find the {emoji} emoji before the time runs out.'
        },
        timeoutTime: 60000,
        hideEmojiTime: 5000,
        buttonStyle: 'PRIMARY',
        emojis: ['🍉', '🍇', '🍊', '🍋', '🥭', '🍎', '🍏', '🥝'],
        winMessage: 'You won! You selected the correct emoji. {emoji}',
        loseMessage: 'You lost! You selected the wrong emoji. {emoji}',
        timeoutMessage: 'You lost! You ran out of time. The emoji is {emoji}',
        playerOnlyMessage: 'Only {player} can use these buttons.'
      });
      
      Game.startGame();
        


    }}