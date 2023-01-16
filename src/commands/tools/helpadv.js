const { EmbedBuilder, Embed } = require("discord.js");
const fs = require("fs");
const {
  SlashCommandBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  ComponentType,
} = require("discord.js");
const backtick = "`";
const backtickmulti = "```";
const buttonPages = require("../../exports/pagination")
const moment = require("moment")

module.exports = {
  data: new SlashCommandBuilder()
    .setName("help")
    .setDescription("Information about the bot and commands"),

  async execute(interaction, client) {
    const embed1 = new EmbedBuilder()
      .setColor(`c3b4f7`)
      .setTitle(`Move through the help menu with the buttons below`)
      .setDescription(
        `${backtickmulti}yaml\nTable of Contents\n${backtickmulti}${backtickmulti}ansi\n[2;36mPage 1: [2;34mHome[0m[2;36m\nPage 2: [2;34mMusic[0m[2;36m\nPage 3: [2;34mGames[0m[2;36m\nPage 4: [2;34mOther[0m[2;36m[2;34m[0m[2;36m\nPage 5: [2;34mTools\n${backtickmulti}`
      );

    const embed2 = new EmbedBuilder()
      .setColor(`c3b4f7`)
      .setTitle(`Music Commands`)
      .setDescription(
        `${backtickmulti}yaml\nThese are the commands for the bot's primary feature, music.${backtickmulti}`
      )
      .addFields(
        {
          name: "`/play song`",
          value:
            "This command will play/add a single song to the queue of your choice from a URL",
          inline: true,
        },
        {
          name: "`/play playlist`",
          value:
            "This command will play/add a playlist to the queue of your choice from a URL",
          inline: true,
        },
        {
          name: "`/play search`",
          value:
            "This command will search your query on YouTube and play the song",
          inline: true,
        },
        {
          name: "`/volume`",
          value:
            "This will clear the queue and quit the currently playing song",
          inline: true,
        },
        {
          name: "`/queue`",
          value:
            "This command will list all the songs in the queue, if there are lots of songs, the queue will be divided into pages",
          inline: true,
        },
        {
          name: "`/info`",
          value:
            "This command will list information about the currently playing song",
          inline: true,
        },
        {
          name: "`/shuffle`",
          value: "This command will shuffle all the songs in the queue",
          inline: true,
        },
        {
          name: "`/skip`",
          value: "This command will skip the song that is currently playing",
          inline: true,
        },
        {
          name: "`/skipto`",
          value: "This command will skip to a song of your choice in the queue",
          inline: true,
        },
        {
          name: "`/quit`",
          value:
            "This will clear the queue and quit the currently playing song",
          inline: true,
        },
        {
          name: "`/loop`",
          value:
            "This will loop the current song, select one of the modes according to the song you are playing",
          inline: true,
        },
        {
          name: "`/pause`",
          value: "This command will pause the currently playing song",
          inline: true,
        },
        {
          name: "`/resume`",
          value:
            "This command will resume the currently playing song if it is paused",
          inline: true,
        }
      );

    const embed25 = new EmbedBuilder()
    .setColor(`c3b4f7`)
    .setTitle(`Game Commands`)
    .setDescription(
      `${backtickmulti}yaml\nThis is the list of commands for the bot's games.${backtickmulti}`
    )
    .addFields(
      {
        name: "`/2048`",
        value: `Play the 2048 Game [2048 Guide](https://levelskip.com/puzzle/How-to-play-2048)`,
        inline: true,
      },
      {
        name: "`/findemoji`",
        value: `Play the find emoji memory game`,
        inline: true,
      },
      {
        name: "`/hangman`",
        value: `Play the Hangman Game [Hangman Guide](https://www.wikihow.com/Play-Hangman)`,
        inline: true,
      },
      {
        name: "`/minesweeper`",
        value: `Play the Minesweeper Game [Minesweeper Guide](https://minesweepergame.com/strategy/how-to-play-minesweeper.php)`,
        inline: true,
      },
      {
        name: "`/slot`",
        value: `Play the slot machine`,
        inline: true,
      },
      {
        name: "`/snake`",
        value: `Play the Snake Game, use the arrows to move a square at a time`,
        inline: true,
      },
      {
        name: "`/2048`",
        value: `Play tictactoe with someone [TicTacToe Guide](https://www.wikihow.com/Win-at-Tic-Tac-Toe)`,
        inline: true,
      },
      {
        name: "`/trivia`",
        value: `Play the trivia game, multiple choice`,
        inline: true,
      },
      {
        name: "`/wordle`",
        value: `Play the worlde Game [Wordle Guide](https://www.tomsguide.com/news/what-is-wordle)`,
        inline: true,
      },
      {
        name: "`/wouldyourather`",
        value: `Play the would you rather Game`,
        inline: true,
      },
    )   

    const embed3 = new EmbedBuilder()
      .setColor(`c3b4f7`)
      .setTitle(`Other Commands`)
      .setDescription(
        `${backtickmulti}yaml\nThis is the list of commands for the bot's other commands.${backtickmulti}`
      )
      .addFields(
        {
          name: "`/say`",
          value: "The bot will send a message of your choice!",
          inline: true,
        },
        {
          name: "`/8ball`",
          value:
            "The bot will ask the 8ball gods your question (TRUE FALSE ONLY)",
          inline: true,
        },
        {
          name: "`/joke`",
          value: "The bot will tell you a joke!",
          inline: true,
        },
        {
          name: "`/meme`",
          value: "Get a meme from one of my many hand-picked subreddits",
          inline: true,
        },
        { name: "`/word`", value: "Get a random word!", inline: true },
        { name: "`/cat`", value: "Free random cat pictures", inline: true },
        { name: "`/dog`", value: "Free random dog pictures", inline: true }
      );

    const embed4 = new EmbedBuilder()
      .setColor(`c3b4f7`)
      .setTitle(`Command Tools`)
      .setDescription(
        `${backtickmulti}yaml\nThis is the list of commands for the bot's command tools.${backtickmulti}`
      )
      .addFields(
        {
          name: "`/help`",
          value: "Lists information about the bot and commands",
          inline: true,
        },
        {
          name: "`/ping`",
          value: "Gives you the latency between the bot and the API (ms)",
          inline: true,
        },
        {
          name: "`/purge`",
          value:
            "Bulk deletes a amount of messages, requires the MANAGE_MESSAGES permission",
          inline: true,
        },
        {
          name: "`/serverinfo`",
          value: "Returns some info about the server, using the database [WIP]",
          inline: true,
        },
        {
          name: "`/embed`",
          value: "Sends a embed with contents of your choice",
          inline: true,
        }
      );



    const pages = [embed1, embed2, embed25, embed3, embed4];

    buttonPages(interaction, pages);



    
  },
};
